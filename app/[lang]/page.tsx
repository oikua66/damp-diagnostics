import { notFound } from 'next/navigation';
import { copy, languageNames, languages, type Lang } from '../../lib/translations';

type Props = { params: Promise<{ lang: string }> };

export function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export default async function LocalizedHome({ params }: Props) {
  const { lang: rawLang } = await params;
  if (!languages.includes(rawLang as Lang)) notFound();
  const lang = rawLang as Lang;
  const t = copy[lang];

  return (
    <main>
      <header className="site-header">
        <a className="brand" href={`/${lang}#top`} aria-label="Koretskiy Consulting home">
          <span className="brand-mark">KC</span>
          <span>Koretskiy Consulting</span>
        </a>
        <div className="header-right">
          <nav>
            <a href={`/${lang}#services`}>{t.nav.services}</a>
            <a href={`/${lang}#approach`}>{t.nav.approach}</a>
            <a href={`/${lang}#damp`}>{t.nav.damp}</a>
            <a href={`/${lang}#contact`}>{t.nav.contact}</a>
          </nav>
          <div className="language-switcher" aria-label="Language selector">
            {languages.map((code) => (
              <a key={code} href={`/${code}`} className={code === lang ? 'active' : ''}>
                {languageNames[code]}
              </a>
            ))}
          </div>
        </div>
      </header>

      <section className="hero" id="top">
        <p className="eyebrow">{t.eyebrow}</p>
        <h1>{t.hero}</h1>
        <p className="lead">{t.lead}</p>
        <div className="hero-actions">
          <a className="button button-dark" href="#contact">{t.discuss}</a>
          <a className="button button-light" href="#damp">{t.dampButton}</a>
        </div>
      </section>

      <section className="section" id="services">
        <div className="section-heading">
          <p className="eyebrow">{t.whatIDo}</p>
          <h2>{t.servicesTitle}</h2>
        </div>
        <div className="cards">
          {t.services.map((service: [string, string], index: number) => (
            <article className="card" key={service[0]}>
              <span className="card-number">0{index + 1}</span>
              <h3>{service[0]}</h3>
              <p>{service[1]}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section split" id="approach">
        <div>
          <p className="eyebrow">{t.method}</p>
          <h2>{t.methodTitle}</h2>
        </div>
        <div className="prose">
          <p>{t.methodP1}</p>
          <p>{t.methodP2}</p>
        </div>
      </section>

      <section className="section damp" id="damp">
        <div className="damp-copy">
          <p className="eyebrow">{t.dampEyebrow}</p>
          <h2>{t.dampTitle}</h2>
          <p className="lead-small">{t.dampLead}</p>
          <div className="diagnostic-list">
            <span>{t.photo}</span>
            <span>{t.onsite}</span>
          </div>
          <p className="note">{t.dampNote}</p>
        </div>
        <div className="damp-panel">
          <h3>{t.lookFor}</h3>
          <ul>{t.issues.map((issue: string) => <li key={issue}>{issue}</li>)}</ul>
        </div>
      </section>

      <section className="section contact" id="contact">
        <p className="eyebrow">{t.contact}</p>
        <h2>{t.contactTitle}</h2>
        <p>{t.contactText}</p>
        <a className="button button-dark" href="mailto:consulting@koretskiy.com">consulting@koretskiy.com</a>
      </section>

      <footer>
        <span>© 2026 Koretskiy Consulting</span>
        <span>{t.footer}</span>
      </footer>
    </main>
  );
}
