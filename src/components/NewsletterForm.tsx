"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export function NewsletterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          consent,
          website: (e.currentTarget.elements.namedItem("website") as HTMLInputElement)?.value,
        }),
      });
      const data = (await res.json()) as { ok?: boolean; message?: string; error?: string };
      if (!res.ok || !data.ok) {
        setStatus("error");
        setMessage(data.error ?? "Une erreur est survenue.");
        return;
      }
      setStatus("success");
      setMessage(data.message ?? "Inscription enregistrée.");
      setName("");
      setEmail("");
      setConsent(false);
    } catch {
      setStatus("error");
      setMessage("Impossible d’envoyer le formulaire. Réessayez.");
    }
  }

  if (status === "success") {
    return (
      <div className="mt-7 max-w-lg rounded-[14px] border border-[rgba(255,106,0,0.35)] bg-black/30 p-5">
        <p className="font-display text-2xl text-cream">Merci !</p>
        <p className="mt-2 text-sm text-muted">{message}</p>
      </div>
    );
  }

  return (
    <form className="mt-7 max-w-lg space-y-3" onSubmit={onSubmit} noValidate>
      {/* Honeypot */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
        aria-hidden
      />

      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label htmlFor="newsletter-name" className="sr-only">
            Nom
          </label>
          <input
            id="newsletter-name"
            name="name"
            type="text"
            required
            minLength={2}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Votre nom"
            className="min-h-11 w-full rounded-[10px] border-2 border-transparent bg-white px-4 text-sm text-black outline-none transition focus:border-accent focus:shadow-[0_0_0_4px_rgba(255,106,0,0.12)]"
          />
        </div>
        <div>
          <label htmlFor="newsletter-email" className="sr-only">
            Email
          </label>
          <input
            id="newsletter-email"
            name="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="votre@email.fr"
            className="min-h-11 w-full rounded-[10px] border-2 border-transparent bg-white px-4 text-sm text-black outline-none transition focus:border-accent focus:shadow-[0_0_0_4px_rgba(255,106,0,0.12)]"
          />
        </div>
      </div>

      <label className="flex items-start gap-3 text-sm text-muted">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          required
          className="mt-1 size-4 accent-[var(--orange)]"
        />
        <span>
          J’accepte de recevoir les alertes nouveaux articles d’Actu Thaii. Voir les{" "}
          <Link href="/mentions-legales" className="text-cream underline">
            mentions légales
          </Link>
          .
        </span>
      </label>

      <button type="submit" className="btn-primary" disabled={status === "loading"}>
        {status === "loading" ? "Inscription…" : "S'inscrire"}
      </button>

      {status === "error" ? <p className="text-sm text-[var(--rouge)]">{message}</p> : null}
    </form>
  );
}
