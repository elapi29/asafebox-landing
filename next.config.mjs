// next.config.mjs
const nextConfig = {
  output: 'export',
  basePath: '/asafebox-landing',
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: '/asafebox-landing', // ← espejo del basePath (para <img>)
    NEXT_PUBLIC_FORMSPREE_ENDPOINT: 'https://formspree.io/f/mblzlrgq',

  },
  async redirects() {
    return [
      { source: '/', destination: '/es', permanent: false },
      { source: '/asafebox-landing', destination: '/es', permanent: false },
      { source: '/:path((?!es|en|de).*)', destination: '/es/:path*', permanent: false },
    ]
  },
}
export default nextConfig