import type { Metadata } from 'next';
import { buildMetadata, langs, type SeoLang } from '../../../lib/seo';

const copy: Record<SeoLang, { title: string; description: string }> = {
  en: {
    title: 'Damp & Mould Diagnostics | Independent Expert Assessment',
    description: 'Independent assessment of damp, mould and condensation problems: likely causes, moisture pathways, thermal bridges, ventilation issues and recommended next steps.',
  },
  ru: {
    title: 'Диагностика сырости, плесени и конденсата | Koretskiy Consulting',
    description: 'Независимая диагностика сырости, плесени и конденсата: вероятные причины, пути поступления влаги, мостики холода, вентиляция и рекомендации по дальнейшим действиям.',
  },
  uk: {
    title: 'Діагностика сирості, плісняви та конденсату | Koretskiy Consulting',
    description: 'Незалежна діагностика сирості, плісняви та конденсату: ймовірні причини, шляхи надходження вологи, містки холоду, вентиляція та рекомендації щодо подальших дій.',
  },
  sr: {
    title: 'Dijagnostika vlage, buđi i kondenzacije | Koretskiy Consulting',
    description: 'Nezavisna procena problema sa vlagom, buđi i kondenzacijom: mogući uzroci, prodor vlage, termički mostovi, ventilacija i preporuke za dalje korake.',
  },
};

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const safeLang = (langs.includes(lang as SeoLang) ? lang : 'en') as SeoLang;
  return buildMetadata({
    lang: safeLang,
    path: '/damp-diagnostics',
    title: copy[safeLang].title,
    description: copy[safeLang].description,
  });
}

export default function DampDiagnosticsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
