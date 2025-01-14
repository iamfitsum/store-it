import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.freepik.com"
      },
      {
        protocol: "https",
        hostname: "cloud.appwrite.io"
      }
    ]
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "100MB"
    }
  },
  typescript: {
    ignoreBuildErrors: true
  },
  eslint: {
    ignoreDuringBuilds: true
  }
};

export default nextConfig;
