/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // required for GitHub Pages
  basePath: '/chaitanyarayana',
  assetPrefix: '/chaitanyarayana/',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
