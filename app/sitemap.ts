import type { MetadataRoute } from 'next';
import { SITE_URL, langs } from '../lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ['', '/about', '/tender-equipment', '/perspectives'];
  const now = new Date();

  return langs.flatMap((lang) =>
    paths.map((path) => ({
      url: `${SITE_URL}/${lang}${path}`,
      lastModified: now,
      changeFrequency: path === '' || path === '/perspectives' ? 'weekly' : 'monthly',
      priority: path === '' ? 1 : path === '/tender-equipment' ? 0.9 : path === '/perspectives' ? 0.8 : 0.7,
    })),
  );
}
