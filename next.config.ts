import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep tracing rooted on this app (avoids parent lockfiles on local Windows).
  outputFileTracingRoot: path.join(__dirname),
  trailingSlash: false,
  async redirects() {
    return [
      { source: "/galas", destination: "/combats-a-venir", permanent: true },
      { source: "/galas/:path*", destination: "/combats-a-venir", permanent: true },
      { source: "/resultats", destination: "/actualites", permanent: true },
      { source: "/resultats/:path*", destination: "/actualites", permanent: true },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
