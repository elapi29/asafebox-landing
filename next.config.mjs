/** @type {import('next').NextConfig} */
const repo = 'asafebox-landing';

// Si corre en GH Actions o definiste NEXT_PUBLIC_BASE_PATH,
// aplicamos basePath/assetPrefix para que los assets no 404.
const runningOnCI = process.env.GITHUB_ACTIONS === 'true';
const computedBasePath =
  process.env.NEXT_PUBLIC_BASE_PATH ??
  (runningOnCI ? `/${repo}` : '');

const config = {
  output: 'export',
  // Esto hace que <Image> genere <img> plano en export
  images: {
    unoptimized: true,
  },
  // Clave para que /brand/... y /illustrations/... funcionen bajo /asafebox-landing
  basePath: computedBasePath,
  assetPrefix: computedBasePath ? `${computedBasePath}/` : undefined,
};

export default config;