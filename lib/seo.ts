import type { Metadata } from 'next';

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://damp-diagnostics.vercel.app').replace(/\/$/, '');

export const langs = ['en', 'ru', 'uk', 'sr'] as const;
export type SeoLang = (typeof langs)[number];

export const localeMap: Record<SeoLang, string> = {
  en: 'en_US',
  ru: 'ru_RU',
  uk: 'uk_UA',
  sr: 'sr_RS',
};

export function languageAlternates(path = '') {
  return {
    en: `${SITE_URL}/en${path}`,
    ru: `${SITE_URL}/ru${path}`,
    uk: `${SITE_URL}/uk${path}`,
    sr: `${SITE_URL}/sr${path}`,
    'x-default': `${SITE_URL}/en${path}`,
  };
}

export function buildMetadata({
  lang,
  path = '',
  title,
  description,
}: {
  lang: SeoLang;
  path?: string;
  title: string;
  description: string;
}): Metadata {
  const url = `${SITE_URL}/${lang}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: languageAlternates(path),
    },
    openGraph: {
      type: 'website',
      url,
      title,
      description,
      siteName: 'Koretskiy Consulting',
      locale: localeMap[lang],
      alternateLocale: langs.filter((item) => item !== lang).map((item) => localeMap[item]),
    },
    twitter: {
      card: 'summary',
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
  };
}
