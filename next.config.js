/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/prakhya-portfolio',
  assetPrefix: '/prakhya-portfolio/',
}

module.exports = nextConfig 