import type { Metadata } from 'next';
import { buildMetadata, langs, type SeoLang, SITE_URL } from '../../lib/seo';

const copy: Record<SeoLang, { title: string; description: string }> = {
  en: {
    title: 'Koretskiy Consulting | Independent Technical & Business Consulting',
    description: 'Independent consulting for complex technical and business decisions: problem definition, technical briefs, contractor requirements, alternatives and implementation roadmaps.',
  },
  ru: {
    title: 'Koretskiy Consulting | Независимый технический и бизнес-консалтинг',
    description: 'Независимый консалтинг для сложных технических и бизнес-задач: постановка задачи, ТЗ, требования к подрядчикам, сравнение решений и дорожные карты.',
  },
  uk: {
    title: 'Koretskiy Consulting | Незалежний технічний та бізнес-консалтинг',
    description: 'Незалежний консалтинг для складних технічних і бізнес-задач: постановка задачі, ТЗ, вимоги до підрядників, порівняння рішень та дорожні карти.',
  },
  sr: {
    title: 'Koretskiy Consulting | Nezavisni tehnički i poslovni konsalting',
    description: 'Nezavisni konsalting za složene tehničke i poslovne odluke: definisanje zadatka, tehnički zahtevi, poređenje rešenja i plan realizacije.',
  },
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: Omit<Props, 'children'>): Promise<Metadata> {
  const { lang } = await params;
  const safeLang = (langs.includes(lang as SeoLang) ? lang : 'en') as SeoLang;
  return buildMetadata({ lang: safeLang, title: copy[safeLang].title, description: copy[safeLang].description });
}

export default async function LanguageLayout({ children, params }: Props) {
  const { lang } = await params;
  const safeLang = (langs.includes(lang as SeoLang) ? lang : 'en') as SeoLang;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Koretskiy Consulting',
    url: `${SITE_URL}/${safeLang}`,
    email: 'consulting@koretskiy.com',
    telephone: '+381638421005',
    areaServed: ['Serbia', 'Europe'],
    founder: {
      '@type': 'Person',
      name: 'Oleksandr Koretskiy',
    },
    knowsAbout: [
      'Technical consulting',
      'Engineering consulting',
      'Technical specifications',
      'Project definition',
      'Contractor selection',
      'Independent technical review',
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
