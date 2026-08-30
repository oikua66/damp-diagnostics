import type { Metadata } from 'next';
import { buildMetadata, langs, type SeoLang } from '../../../lib/seo';

const copy: Record<SeoLang, { title: string; description: string }> = {
  en: {
    title: 'Oleksandr Koretskiy | Engineer, Independent Expert & Consultant',
    description: 'Oleksandr Koretskiy: 35+ years in engineering, electromechanics, energy, construction and technical management, with 10+ years as an independent expert and consultant.',
  },
  ru: {
    title: 'Александр Корецкий | Инженер, независимый эксперт и консультант',
    description: 'Александр Корецкий: более 35 лет в инженерии, электромеханике, энергетике, строительстве и техническом управлении и более 10 лет независимой экспертной работы.',
  },
  uk: {
    title: 'Олександр Корецький | Інженер, незалежний експерт і консультант',
    description: 'Олександр Корецький: понад 35 років в інженерії, електромеханіці, енергетиці, будівництві та технічному управлінні й понад 10 років незалежної експертної роботи.',
  },
  sr: {
    title: 'Oleksandr Koretskiy | Inženjer, nezavisni ekspert i konsultant',
    description: 'Oleksandr Koretskiy: više od 35 godina iskustva u inženjerstvu, energetici, građevinarstvu i tehničkom upravljanju, uz više od 10 godina nezavisnog ekspertskog rada.',
  },
};

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const safeLang = (langs.includes(lang as SeoLang) ? lang : 'en') as SeoLang;
  return buildMetadata({
    lang: safeLang,
    path: '/about',
    title: copy[safeLang].title,
    description: copy[safeLang].description,
  });
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
