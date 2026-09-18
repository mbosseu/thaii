import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep tracing rooted on this app (avoids parent lockfiles on local Windows).
  outputFileTracingRoot: path.join(__dirname),
  images: {
    formats: ["image/avif", "image/webp"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
