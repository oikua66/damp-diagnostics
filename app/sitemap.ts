import type { MetadataRoute } from 'next';
import { SITE_URL, langs } from '../lib/seo';

const methodologyPaths = [
  '/methodology',
  '/methodology/opportunity-assessment',
  '/methodology/research-verification',
  '/methodology/engineering-estimates',
  '/methodology/quality',
  '/methodology/expert-supervision',
  '/methodology/uncertainty',
  '/methodology/checkopp',
  '/methodology/business-processes',
  '/methodology/library',
  '/aritz',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ['', '/about', '/tender-equipment', '/perspectives', ...methodologyPaths];
  const now = new Date();

  return langs.flatMap((lang) =>
    paths.map((path) => ({
      url: `${SITE_URL}/${lang}${path}`,
      lastModified: now,
      changeFrequency: path === '' || path === '/perspectives' ? 'weekly' : 'monthly',
      priority:
        path === '' ? 1 :
        path === '/methodology' || path === '/aritz' ? 0.9 :
        path === '/tender-equipment' ? 0.85 :
        path === '/perspectives' ? 0.8 :
        path.startsWith('/methodology/') ? 0.75 : 0.7,
    })),
  );
}
