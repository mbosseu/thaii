import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { siteConfig } from "@/lib/site";

export const runtime = "nodejs";

type Payload = {
  name?: string;
  email?: string;
  consent?: boolean;
  website?: string; // honeypot
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function subscribersPath() {
  return path.join(process.cwd(), "data", "subscribers.json");
}

function readLocalSubscribers(): Array<Record<string, string>> {
  try {
    const file = subscribersPath();
    if (!fs.existsSync(file)) return [];
    const raw = fs.readFileSync(file, "utf8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeLocalSubscriber(entry: Record<string, string>) {
  const dir = path.join(process.cwd(), "data");
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  const list = readLocalSubscribers();
  const exists = list.some((s) => s.email?.toLowerCase() === entry.email.toLowerCase());
  if (exists) return { duplicate: true };
  list.push(entry);
  fs.writeFileSync(subscribersPath(), JSON.stringify(list, null, 2), "utf8");
  return { duplicate: false };
}

async function notifyViaWeb3Forms(entry: { name: string; email: string }) {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey) return false;

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: accessKey,
      subject: `[Actu Thaii] Nouvelle inscription newsletter — ${entry.name}`,
      from_name: "Actu Thaii Newsletter",
      name: entry.name,
      email: entry.email,
      message: `Nouvelle inscription newsletter\n\nNom : ${entry.name}\nEmail : ${entry.email}\nDate : ${new Date().toISOString()}\n\nÀ ajouter à votre liste d’envoi pour les nouveaux articles.`,
    }),
  });

  return res.ok;
}

async function notifyViaResend(entry: { name: string; email: string }) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.NEWSLETTER_NOTIFY_TO || siteConfig.contactEmail;
  const from = process.env.NEWSLETTER_FROM || "Actu Thaii <onboarding@resend.dev>";
  if (!apiKey) return false;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject: `Nouvelle inscription newsletter — ${entry.name}`,
      text: `Nom : ${entry.name}\nEmail : ${entry.email}\nDate : ${new Date().toISOString()}`,
    }),
  });

  return res.ok;
}

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, error: "Requête invalide." }, { status: 400 });
  }

  // Honeypot anti-bot
  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim().toLowerCase();
  const consent = Boolean(body.consent);

  if (name.length < 2) {
    return NextResponse.json({ ok: false, error: "Indiquez votre nom." }, { status: 400 });
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ ok: false, error: "Email invalide." }, { status: 400 });
  }
  if (!consent) {
    return NextResponse.json(
      { ok: false, error: "Le consentement est requis pour recevoir les nouveaux articles." },
      { status: 400 },
    );
  }

  const entry = {
    name,
    email,
    consent: "true",
    createdAt: new Date().toISOString(),
    source: "newsletter",
  };

  let storedLocally = false;
  let duplicate = false;
  try {
    const result = writeLocalSubscriber(entry);
    storedLocally = true;
    duplicate = result.duplicate;
  } catch {
    // Lecture seule (ex. Vercel) : on continue via notification email.
    storedLocally = false;
  }

  if (duplicate) {
    return NextResponse.json({
      ok: true,
      message: "Vous êtes déjà inscrit(e). Merci !",
    });
  }

  const [web3, resend] = await Promise.all([
    notifyViaWeb3Forms({ name, email }).catch(() => false),
    notifyViaResend({ name, email }).catch(() => false),
  ]);

  const notified = web3 || resend;

  // En local sans clé externe, le JSON suffit.
  // En prod, il faut au moins une notification (Web3Forms ou Resend).
  if (!storedLocally && !notified) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "Inscription temporairement indisponible. Configurez WEB3FORMS_ACCESS_KEY ou RESEND_API_KEY.",
      },
      { status: 503 },
    );
  }

  return NextResponse.json({
    ok: true,
    message: "Inscription enregistrée. Vous serez informé(e) des nouveaux articles.",
  });
}
