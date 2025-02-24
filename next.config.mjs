/** @type {import('next').NextConfig} */

const nextConfig = {
    output: 'export',
    trailingSlash: true,
    images: {
        unoptimized: true
      },
    basePath: '/next-hosting-test',
    assetPrefix: '/next-hosting-test/'
  }

export default nextConfig;