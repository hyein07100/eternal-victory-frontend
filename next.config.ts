/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    turbo: {
      overlays: false,
    },
  },
};

export default nextConfig;
