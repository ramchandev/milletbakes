import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/html-sitemap",
        destination: "/sitemap",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "milletbakes.in" }],
        destination: "https://www.milletbakes.in/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
