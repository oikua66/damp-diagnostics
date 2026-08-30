import type { MetadataRoute } from 'next';
import { SITE_URL, langs } from '../lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ['', '/about', '/damp-diagnostics', '/tender-equipment'];
  const now = new Date();

  return langs.flatMap((lang) =>
    paths.map((path) => ({
      url: `${SITE_URL}/${lang}${path}`,
      lastModified: now,
      changeFrequency: path === '' ? 'weekly' : 'monthly',
      priority: path === '' ? 1 : path === '/damp-diagnostics' || path === '/tender-equipment' ? 0.9 : 0.7,
    })),
  );
}
