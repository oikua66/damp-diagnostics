import { notFound } from 'next/navigation';
import { copy, languageNames, languages, type Lang } from '../../../lib/translations';

type Props = { params: Promise<{ lang: string }> };

export function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export default async function DampDiagnosticsPage({ params }: Props) {
  const { lang: rawLang } = await params;
  if (!languages.includes(rawLang as Lang)) notFound();
  const lang = rawLang as Lang;
  const t = copy[lang];

  return (
    <main>
      <header className="site-header">
        <a className="brand" href={`/${lang}`} aria-label="Koretskiy Consulting home">
          <span className="brand-mark">KC</span>
          <span>Koretskiy Consulting</span>
        </a>
        <div className="header-right">
          <nav>
            <a href={`/${lang}`}>{t.nav.services}</a>
            <a href={`/${lang}#approach`}>{t.nav.approach}</a>
            <a href={`/${lang}/damp-diagnostics`}>{t.nav.damp}</a>
            <a href={`/${lang}#contact`}>{t.nav.contact}</a>
          </nav>
          <div className="language-switcher" aria-label="Language selector">
            {languages.map((code) => (
              <a key={code} href={`/${code}/damp-diagnostics`} className={code === lang ? 'active' : ''}>
                {languageNames[code]}
              </a>
            ))}
          </div>
        </div>
      </header>

      <section className="section damp">
        <div className="damp-copy">
          <p className="eyebrow">{t.dampEyebrow}</p>
          <h1 style={{ fontSize: 'clamp(56px, 9vw, 124px)' }}>{t.dampTitle}</h1>
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

      <section className="section contact">
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
