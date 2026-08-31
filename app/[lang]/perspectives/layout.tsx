import type { Metadata } from 'next';
import { buildMetadata, langs, type SeoLang } from '../../../lib/seo';

const copy: Record<SeoLang, { title: string; description: string }> = {
  en: {
    title: 'Perspectives | Koretskiy Consulting',
    description: 'Independent perspectives and practical analysis of technical and business problems, disputed solutions and real-world decisions.',
  },
  ru: {
    title: 'Мнения | Koretskiy Consulting',
    description: 'Независимые разборы технических и бизнес-задач, спорных решений и практических вопросов.',
  },
  uk: {
    title: 'Погляди | Koretskiy Consulting',
    description: 'Незалежні розбори технічних і бізнес-завдань, спірних рішень та практичних питань.',
  },
  sr: {
    title: 'Stavovi | Koretskiy Consulting',
    description: 'Nezavisne analize tehničkih i poslovnih zadataka, spornih rešenja i praktičnih pitanja.',
  },
};

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const safeLang = (langs.includes(lang as SeoLang) ? lang : 'en') as SeoLang;
  return buildMetadata({
    lang: safeLang,
    path: '/perspectives',
    title: copy[safeLang].title,
    description: copy[safeLang].description,
  });
}

export default function PerspectivesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
