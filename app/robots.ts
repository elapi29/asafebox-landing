export default function robots() {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || ''
  const host = 'https://YOUR_USERNAME.github.io'
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: `${host}${base}/sitemap.xml`
  }
}
