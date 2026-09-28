import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { languages, type Lang } from '../../../../lib/translations';
import { buildMetadata } from '../../../../lib/seo';
import { methodology } from '../../../../lib/methodology';
import { aritzPages, aritzSlugs } from '../../../../lib/aritz';
import { aritzExtraPages, aritzExtraSlugs } from '../../../../lib/aritz-extra';
import SiteHeader from '../../../components/SiteHeader';

type Props = { params: Promise<{ lang: string; slug: string }> };

export function generateStaticParams() {
  return languages.flatMap((lang) => [...aritzSlugs, ...aritzExtraSlugs].map((slug) => ({ lang, slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang: rawLang, slug } = await params;
  const lang = (languages.includes(rawLang as Lang) ? rawLang : 'en') as Lang;
  const page = aritzPages[lang][slug] ?? aritzExtraPages[lang][slug];
  if (!page) return {};
  return buildMetadata({
    lang,
    path: `/aritz/${slug}`,
    title: `${page.title} | Koretskiy Methodology`,
    description: page.lead,
  });
}

export default async function AritzDetailPage({ params }: Props) {
  const { lang: rawLang, slug } = await params;
  if (!languages.includes(rawLang as Lang)) notFound();
  const lang = rawLang as Lang;
  const page = aritzPages[lang][slug] ?? aritzExtraPages[lang][slug];
  if (!page) notFound();
  const m = methodology[lang];

  const labels: Record<Lang,{author:string;back:string;prev:string;next:string}> = {
    ru:{author:'Авторская методология',back:'Весь раздел ARITZ',prev:'Предыдущий шаг',next:'Следующий шаг'},
    en:{author:'Authorial methodology',back:'Full ARITZ section',prev:'Previous step',next:'Next step'},
    uk:{author:'Авторська методологія',back:'Увесь розділ ARITZ',prev:'Попередній крок',next:'Наступний крок'},
    sr:{author:'Autorska metodologija',back:'Ceo ARITZ odeljak',prev:'Prethodni korak',next:'Sledeći korak'},
  };
  const l=labels[lang];
  const allSlugs=[...aritzSlugs, ...aritzExtraSlugs];
  const index=allSlugs.indexOf(slug as typeof allSlugs[number]);
  const prev=index>0?allSlugs[index-1]:null;
  const next=index<allSlugs.length-1?allSlugs[index+1]:null;

  return (
    <main>
      <SiteHeader lang={lang} languagePath={`/aritz/${slug}`} />

      <section className="section" style={{paddingTop:'9vh'}}>
        <div style={{maxWidth:1000}}>
          <p className="eyebrow">Koretskiy Methodology · ARITZ</p>
          <h1>{page.title}</h1>
          <p className="lead-small" style={{maxWidth:900}}>{page.lead}</p>
        </div>
      </section>

      <section className="section split" style={{background:'var(--panel)'}}>
        <div><p className="eyebrow">{l.author}</p></div>
        <div className="prose"><p>{m.authorship}</p></div>
      </section>

      {page.sections.map((section,index)=>(
        <section className="section split" key={section.title}>
          <div>
            <span className="card-number">{String(index+1).padStart(2,'0')}</span>
            <h2>{section.title}</h2>
          </div>
          <div className="prose">
            {section.paragraphs?.map(p=><p key={p}>{p}</p>)}
            {section.bullets?.map(item=><p key={item}>— {item}</p>)}
          </div>
        </section>
      ))}

      <section className="section" style={{background:'var(--panel)'}}>
        <div className="hero-actions">
          <a className="button button-dark" href={`/${lang}/aritz`}>{l.back}</a>
          {prev && <a className="button button-light" href={`/${lang}/aritz/${prev}`}>{l.prev}</a>}
          {next && <a className="button button-light" href={`/${lang}/aritz/${next}`}>{l.next}</a>}
        </div>
      </section>
    </main>
  );
}
