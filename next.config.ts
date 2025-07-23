import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL("https://www.gstatic.com/marketing-cms/assets/images/**")]
  }
};

export default nextConfig;
