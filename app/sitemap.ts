export default function sitemap() {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || ''
  const origin = 'https://YOUR_USERNAME.github.io' + base
  return [
    { url: `${origin}/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${origin}/thanks/`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 }
  ]
}
