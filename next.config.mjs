// next.config.mjs
const isCI = process.env.GITHUB_ACTIONS === 'true';
const repo = 'asafebox-landing';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: isCI ? `/${repo}` : '',
  assetPrefix: isCI ? `/${repo}/` : '',
  trailingSlash: true,
};

export default nextConfig;