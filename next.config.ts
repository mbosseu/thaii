import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  outputFileTracingRoot: process.cwd(),
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
