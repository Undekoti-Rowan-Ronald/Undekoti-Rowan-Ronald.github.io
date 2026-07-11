/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false;
let repoBasePath = '';

if (isGithubActions) {
  // Set this to your repo name so GitHub Pages serves assets correctly.
  // Example: if your repo is github.com/yourname/portfolio -> '/portfolio'
  repoBasePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
}

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: repoBasePath,
  assetPrefix: repoBasePath ? `${repoBasePath}/` : undefined,
  trailingSlash: true,
};

export default nextConfig;
