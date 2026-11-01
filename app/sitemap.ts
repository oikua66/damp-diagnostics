import type { MetadataRoute } from 'next';
import { SITE_URL, langs } from '../lib/seo';
import { getPublicVentures } from '../lib/ventures';

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
  '/methodology/glossary',
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
  const venturePaths = ['/ventures', ...getPublicVentures().map((venture) => `/ventures/${venture.slug}`)];
  const paths = ['', '/about', '/tender-equipment', '/perspectives', ...venturePaths, ...methodologyPaths];
  const now = new Date();

  return langs.flatMap((lang) =>
    paths.map((path) => ({
      url: `${SITE_URL}/${lang}${path}`,
      lastModified: now,
      changeFrequency: path === '' || path === '/perspectives' || path.startsWith('/ventures') ? 'weekly' : 'monthly',
      priority:
        path === '' ? 1 :
        path === '/methodology' || path === '/aritz' || path === '/ventures' ? 0.9 :
        path === '/tender-equipment' ? 0.85 :
        path === '/perspectives' || path.startsWith('/ventures/') ? 0.8 :
        path.startsWith('/methodology/') || path.startsWith('/aritz/') ? 0.75 : 0.7,
    })),
  );
}
