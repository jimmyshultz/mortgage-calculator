import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const base = 'https://themortgageestimator.com'
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/private/'],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
  }
}