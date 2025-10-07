// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/asafebox-landing',
  trailingSlash: true,
  async redirects() {
    return [
      // raíz del sitio -> idioma por defecto
      { source: '/', destination: '/es', permanent: false },

      // si entran a /asafebox-landing (raíz con basePath), Next aplica basePath solo, así que
      // la regla de arriba ya lo cubre. Esta extra es por si quedara algún enlace duro viejo:
      { source: '/asafebox-landing', destination: '/es', permanent: false },

      // cualquier ruta que no empiece por es|en|de -> a /es/...
      { source: '/:path((?!es|en|de).*)', destination: '/es/:path*', permanent: false },
    ]
  },
}

export default nextConfig