import { MetadataRoute } from 'next';
import { insightArticles } from '@/data/insights';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.avyantrix.com';

  const staticRoutes = [
    '',
    '/about',
    '/ventures',
    '/ventures/wrev',
    '/innovation',
    '/community',
    '/team',
    '/partners',
    '/careers',
    '/insights',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : route.startsWith('/ventures') ? 0.9 : 0.8,
  }));

  const insightRoutes = insightArticles.map((article) => ({
    url: `${baseUrl}/insights/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...insightRoutes];
}

