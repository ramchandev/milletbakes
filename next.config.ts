import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/html-sitemap",
        destination: "/sitemap",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
