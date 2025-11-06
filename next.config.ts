import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      /*
      {
        hostname: process.env.NEXT_IMAGE_DOMAIN ?? '',
      },
      */
      { hostname: 'img.youtube.com' },
    ],
    deviceSizes: [375, 640, 768, 1024, 1440, 1920, 2560, 2880, 3840],
    imageSizes: [64, 128, 192],
  },
  poweredByHeader: false,
};

export default nextConfig;
