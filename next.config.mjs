/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

const nextConfig = {
  output: 'export',          // 100% estático (GitHub Pages)
  trailingSlash: true,       // URLs con / final para GH Pages
  images: { unoptimized: true }, // necesario con next export
  basePath,                  // ej: '/asafebox-landing'
  assetPrefix: basePath ? `${basePath}/` : undefined,
}

export default nextConfig