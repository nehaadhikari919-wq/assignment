import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  basePath: "/projectassignment",
  assetPrefix: "/projectassignment/",

  images: {
    unoptimized: true,
  },
};

export default nextConfig;