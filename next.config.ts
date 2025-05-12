import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // outputFileTracingIgnores: ["./generated/client/**/*"],
  // outputFileTracing,
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
