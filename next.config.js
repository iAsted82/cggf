/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ['framer-motion'],
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  webpack: (config, { dev }) => {
    // Fix for Framer Motion issues
    if (dev) {
      config.cache = false;
    }
    
    // Optimize bundle splitting
    config.optimization = {
      ...config.optimization,
      splitChunks: {
        ...config.optimization.splitChunks,
        chunks: 'all',
      }
    };
    
    return config;
  },
};

module.exports = nextConfig;
