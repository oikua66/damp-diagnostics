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
  '/aritz/problem-formulation',
  '/aritz/system-boundary',
  '/aritz/contradictions',
  '/aritz/resources',
  '/aritz/constraints',
  '/aritz/desired-result',
  '/aritz/diagnose',
  '/aritz/invent',
  '/aritz/verify',
  '/aritz/engineering-estimates',
  '/aritz/evidence-validation',
  '/aritz/safety-stop',
  '/aritz/human-expert',
  '/aritz/uncertainty',
  '/aritz/aritz-vs-triz',
  '/aritz/cases',
  '/aritz/faq',
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
        path.startsWith('/methodology/') || path.startsWith('/aritz/') ? 0.75 : 0.7,
    })),
  );
}
