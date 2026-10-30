import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/johnabisheksoftwares" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "play-lh.googleusercontent.com",
      },
    ],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
