/** @type {import('next').NextConfig} */

// Usa la var de entorno que ya pones en el workflow:
//   NEXT_PUBLIC_BASE_PATH: "/${{ github.event.repository.name }}"
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''  // ej: '/asafebox-landing'

const nextConfig = {
  // Genera HTML estático para GitHub Pages
  output: 'export',

  // Recomendado en GH Pages para que los enlaces funcionen como carpetas
  trailingSlash: true,

  // next/image no puede optimizar en export; esto evita errores
  images: { unoptimized: true },

  // Muy importante para que los assets y rutas salgan con el prefijo del repo
  basePath,                       // ej: '/asafebox-landing'
  assetPrefix: basePath ? `${basePath}/` : undefined,

  // (Opcional) Si usas headers o rewrites en el futuro, recuerda que no aplican en export.
};

export default nextConfig;