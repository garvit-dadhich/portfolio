/** @type {import('next').NextConfig} */

const repoName = 'portfolio';
const nextConfig = {
  /* config options here */
  output: 'export',
  basePath: `/${repoName}`,
  assetprefix: `/${repoName}`,
  images: {
    unoptimized: true,
  }
};

module.exports = nextConfig;

// export default nextConfig;
