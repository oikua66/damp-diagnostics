import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { languages, type Lang } from '../../../../lib/translations';
import { buildMetadata } from '../../../../lib/seo';
import { glossaryIntro, glossaryTerms } from '../../../../lib/glossary';
import SiteHeader from '../../../components/SiteHeader';
import GlossaryList from './GlossaryList';

type Props = { params: Promise<{ lang: string }> };

const labels: Record<Lang, { eyebrow: string; source: string; sourceText: string; methodology: string; checkopp: string }> = {
  en: {
    eyebrow: 'Koretskiy Methodology · Reference',
    source: 'Terminology authority',
    sourceText: 'This public glossary is based on the project MASTER glossary and is the shared reference for wording used across Koretskiy Methodology, ARITZ and CheckOpp.',
    methodology: 'Full methodology',
    checkopp: 'Open CheckOpp',
  },
  ru: {
    eyebrow: 'Koretskiy Methodology · Справочник',
    source: 'Терминологический источник',
    sourceText: 'Этот публичный глоссарий основан на MASTER-глоссарии проекта и используется как общий ориентир для терминологии Koretskiy Methodology, ARITZ и CheckOpp.',
    methodology: 'Вся методология',
    checkopp: 'Открыть CheckOpp',
  },
  uk: {
    eyebrow: 'Koretskiy Methodology · Довідник',
    source: 'Термінологічне джерело',
    sourceText: 'Цей публічний глосарій базується на MASTER-глосарії проєкту та є спільним орієнтиром для термінології Koretskiy Methodology, ARITZ і CheckOpp.',
    methodology: 'Уся методологія',
    checkopp: 'Відкрити CheckOpp',
  },
  sr: {
    eyebrow: 'Koretskiy Methodology · Referenca',
    source: 'Terminološki izvor',
    sourceText: 'Ovaj javni glosar zasniva se na MASTER glosaru projekta i služi kao zajednička referenca za terminologiju u Koretskiy Methodology, ARITZ i CheckOpp.',
    methodology: 'Cela metodologija',
    checkopp: 'Otvori CheckOpp',
  },
};

export function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang = (languages.includes(rawLang as Lang) ? rawLang : 'en') as Lang;
  const t = glossaryIntro[lang];
  return buildMetadata({
    lang,
    path: '/methodology/glossary',
    title: `${t.title} | Koretskiy Methodology`,
    description: t.lead,
  });
}

export default async function GlossaryPage({ params }: Props) {
  const { lang: rawLang } = await params;
  if (!languages.includes(rawLang as Lang)) notFound();
  const lang = rawLang as Lang;
  const t = glossaryIntro[lang];
  const l = labels[lang];

  return (
    <main>
      <SiteHeader lang={lang} languagePath="/methodology/glossary" />

      <section className="section glossary-hero" style={{ paddingTop: '9vh' }}>
        <div style={{ maxWidth: 1040 }}>
          <p className="eyebrow">{l.eyebrow}</p>
          <h1>{t.title}</h1>
          <p className="lead-small" style={{ maxWidth: 900 }}>{t.lead}</p>
          <p className="lead-small" style={{ maxWidth: 900, fontSize: 18 }}>{t.note}</p>
        </div>
      </section>

      <section className="section split" style={{ background: 'var(--panel)' }}>
        <div>
          <p className="eyebrow">{l.source}</p>
          <h2>{glossaryTerms.length} terms</h2>
        </div>
        <div className="prose">
          <p>{l.sourceText}</p>
          <div className="hero-actions">
            <a className="button button-dark" href={`/${lang}/methodology`}>{l.methodology}</a>
            <a className="button button-light" href="https://checkopp.com" target="_blank" rel="noreferrer">{l.checkopp}</a>
          </div>
        </div>
      </section>

      <section className="section glossary-section">
        <GlossaryList lang={lang} />
      </section>
    </main>
  );
}
