// Helper para componer paths estáticos respetando basePath (útil en GitHub Pages)
export const withBase = (path: string) =>
  `${process.env.NEXT_PUBLIC_BASE_PATH || ''}${path}`;

