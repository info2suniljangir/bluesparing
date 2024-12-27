import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["bluesparing.vercel.app"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bluesparing.vercel.app",
      },
    ],
  },

};

export default nextConfig;
