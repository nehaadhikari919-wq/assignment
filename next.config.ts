import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/assignment",
  assetPrefix: "/assignment/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;