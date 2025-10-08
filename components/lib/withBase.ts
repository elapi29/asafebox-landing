// components/lib/withBase.ts
export const withBase = (path: string) => {
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ''}${p}`;
};

