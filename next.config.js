/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  webpack: (config, { dev }) => {
    // Disable webpack cache in development if needed
    // Uncomment the next line if you experience persistent cache issues
    // if (dev) config.cache = false;
    return config;
  },
};

module.exports = nextConfig;
