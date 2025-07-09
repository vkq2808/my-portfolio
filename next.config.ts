import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['scontent.fsgn2-4.fna.fbcdn.net', 'truongtop.vn'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'scontent.fsgn2-4.fna.fbcdn.net',
        pathname: '/**',

      },
      {
        protocol: 'https',
        hostname: 'truongtop.vn',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
