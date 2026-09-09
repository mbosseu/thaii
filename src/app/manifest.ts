import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Boxe Thaï",
    short_name: "Boxe Thaï",
    description: "Guide de la boxe thaï et du Muay Thaï",
    start_url: "/",
    display: "standalone",
    background_color: "#070707",
    theme_color: "#ff5316",
    icons: [{ src: "/logo.png", sizes: "512x512", type: "image/png" }],
  };
}
