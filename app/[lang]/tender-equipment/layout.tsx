import type { Metadata } from 'next';
import { buildMetadata, langs, type SeoLang } from '../../../lib/seo';

const copy: Record<SeoLang, { title: string; description: string }> = {
  en: {
    title: 'Tender Equipment Selection & Consortium Support | Koretskiy Consulting',
    description: 'Equipment selection for tenders: specification analysis, manufacturer search, technical equivalents, multi-supplier solutions, specialist involvement and consortium formation.',
  },
  ru: {
    title: 'Подбор оборудования для тендеров и консорциумы | Koretskiy Consulting',
    description: 'Анализ тендерных спецификаций, подбор производителей и технических эквивалентов, объединение позиций, привлечение профильных специалистов и формирование консорциумов.',
  },
  uk: {
    title: 'Підбір обладнання для тендерів і консорціуми | Koretskiy Consulting',
    description: 'Аналіз тендерних специфікацій, підбір виробників і технічних еквівалентів, об’єднання позицій, залучення профільних фахівців та формування консорціумів.',
  },
  sr: {
    title: 'Izbor opreme za tendere i konzorcijumi | Koretskiy Consulting',
    description: 'Analiza tenderskih specifikacija, izbor proizvođača i tehničkih ekvivalenata, povezivanje pozicija, uključivanje stručnjaka i formiranje konzorcijuma.',
  },
};

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const safeLang = (langs.includes(lang as SeoLang) ? lang : 'en') as SeoLang;
  return buildMetadata({
    lang: safeLang,
    path: '/tender-equipment',
    title: copy[safeLang].title,
    description: copy[safeLang].description,
  });
}

export default function TenderEquipmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
