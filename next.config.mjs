/** @type {import('next').NextConfig} */
const SUB_DIRECTORY = "/next-hosting-test";
const isProd = process.env.NODE_ENV == "production"

const nextConfig = {
    output: 'export',
    trailingSlash: true,
    images: {
        unoptimized: true
      },
    basePath: isProd ? SUB_DIRECTORY : "",
    assetPrefix: isProd ? SUB_DIRECTORY : "",
    publicRuntimeConfig: {
    basePath: isProd ? SUB_DIRECTORY : "",
  },
};

export default nextConfig;