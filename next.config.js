/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  transpilePackages: ['framer-motion'],
  webpack: (config, { dev }) => {
    // Fix for framer-motion and other ESM packages
    config.resolve.alias = {
      ...config.resolve.alias,
    };
    
    // Optimize for better performance
    if (dev) {
      config.cache = false;
    }
    
    return config;
  },
};

module.exports = nextConfig;
