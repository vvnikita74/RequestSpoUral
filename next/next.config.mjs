/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    serverActions: {
      bodySizeLimit: '20mb',
    }
  }
};

export default nextConfig;
