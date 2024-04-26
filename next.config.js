const { resolve } = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: 'dist',
  async redirects() {
    return [
      {
        source: '/',
        destination: '/PERP_ETH_USDC',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig
