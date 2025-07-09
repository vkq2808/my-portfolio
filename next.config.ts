import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
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
      {
        protocol: 'https',
        hostname: 'media.licdn.com',
        pathname: '/dms/image/**',
      },
    ],
  },
};

export default nextConfig;
