import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { languages, type Lang } from '../../../../lib/translations';
import { buildMetadata } from '../../../../lib/seo';
import { methodology, methodologySlugs } from '../../../../lib/methodology';
import SiteHeader from '../../../components/SiteHeader';

type Props = { params: Promise<{ lang: string; slug: string }> };

export function generateStaticParams() {
  return languages.flatMap((lang) => methodologySlugs.map((slug) => ({ lang, slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang: rawLang, slug } = await params;
  const lang = (languages.includes(rawLang as Lang) ? rawLang : 'en') as Lang;
  const page = methodology[lang].pages[slug];
  if (!page) return {};
  return buildMetadata({
    lang,
    path: `/methodology/${slug}`,
    title: `${page.title} | Koretskiy Methodology`,
    description: page.lead,
  });
}

export default async function MethodologyDetailPage({ params }: Props) {
  const { lang: rawLang, slug } = await params;
  if (!languages.includes(rawLang as Lang)) notFound();
  const lang = rawLang as Lang;
  const m = methodology[lang];
  const page = m.pages[slug];
  if (!page) notFound();

  const labels: Record<Lang, { author: string; related: string; methodology: string; pdf: string }> = {
    ru: { author: 'Авторская методология', related: 'Связанные разделы', methodology: 'Вся методология', pdf: 'PDF и справочные материалы' },
    en: { author: 'Authorial methodology', related: 'Related sections', methodology: 'Full methodology', pdf: 'PDF & reference materials' },
    uk: { author: 'Авторська методологія', related: 'Пов’язані розділи', methodology: 'Уся методологія', pdf: 'PDF і довідкові матеріали' },
    sr: { author: 'Autorska metodologija', related: 'Povezane celine', methodology: 'Cela metodologija', pdf: 'PDF i referentni materijali' },
  };
  const l = labels[lang];

  return (
    <main>
      <SiteHeader lang={lang} languagePath={`/methodology/${slug}`} />

      <section className="section" style={{ paddingTop: '9vh' }}>
        <div style={{ maxWidth: 1000 }}>
          <p className="eyebrow">{page.eyebrow}</p>
          <h1>{page.title}</h1>
          <p className="lead-small" style={{ maxWidth: 900 }}>{page.lead}</p>
        </div>
      </section>

      <section className="section split" style={{ background: 'var(--panel)' }}>
        <div><p className="eyebrow">{l.author}</p></div>
        <div className="prose"><p>{m.authorship}</p></div>
      </section>

      {page.sections.map((section, index) => (
        <section className="section split" key={section.title}>
          <div>
            <span className="card-number">{String(index + 1).padStart(2, '0')}</span>
            <h2>{section.title}</h2>
          </div>
          <div className="prose">
            {section.paragraphs?.map((p) => <p key={p}>{p}</p>)}
            {section.bullets?.map((item) => <p key={item}>— {item}</p>)}
          </div>
        </section>
      ))}

      {slug === 'checkopp' && (
        <section className="section split" style={{ background: 'var(--panel)' }}>
          <div><p className="eyebrow">{m.softwareLabel}</p></div>
          <div className="prose">
            <p>{m.softwareText}</p>
            <a className="button button-dark" href="https://checkopp.com" target="_blank" rel="noreferrer">{m.softwareCta}</a>
          </div>
        </section>
      )}

      {page.related?.length ? (
        <section className="section">
          <p className="eyebrow">{l.related}</p>
          <div className="hero-actions">
            {page.related.map((item) => (
              <a className="button button-light" key={item.href} href={`/${lang}${item.href}`}>{item.label}</a>
            ))}
          </div>
        </section>
      ) : null}

      <section className="section" style={{ background: 'var(--panel)' }}>
        <div className="hero-actions">
          <a className="button button-dark" href={`/${lang}/methodology`}>{l.methodology}</a>
          <a className="button button-light" href={`/${lang}/methodology/library`}>{l.pdf}</a>
        </div>
      </section>
    </main>
  );
}
