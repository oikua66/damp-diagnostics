import { notFound } from 'next/navigation';
import { copy, languageNames, languages, type Lang } from '../../lib/translations';

type Props = { params: Promise<{ lang: string }> };

const contactCopy: Record<Lang, { title: string; text: string }> = {
  en: {
    title: 'Let’s discuss the task.',
    text: 'Send a short description of the project, decision or problem you would like to discuss.',
  },
  ru: {
    title: 'Давайте обсудим задачу.',
    text: 'Пришлите короткое описание проекта, решения или проблемы, которую вы хотите обсудить.',
  },
  uk: {
    title: 'Давайте обговоримо задачу.',
    text: 'Надішліть короткий опис проєкту, рішення або проблеми, яку ви хочете обговорити.',
  },
  sr: {
    title: 'Hajde da razgovaramo o zadatku.',
    text: 'Pošaljite kratak opis projekta, odluke ili problema o kojem želite da razgovaramo.',
  },
};

export function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export default async function LocalizedHome({ params }: Props) {
  const { lang: rawLang } = await params;
  if (!languages.includes(rawLang as Lang)) notFound();
  const lang = rawLang as Lang;
  const t = copy[lang];
  const contact = contactCopy[lang];

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
            <a href={`/${lang}/damp-diagnostics`}>{t.nav.damp}</a>
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

      <section className="section contact" id="contact">
        <p className="eyebrow">{t.contact}</p>
        <h2>{contact.title}</h2>
        <p>{contact.text}</p>
        <a className="button button-dark" href="mailto:consulting@koretskiy.com">consulting@koretskiy.com</a>
      </section>

      <footer>
        <span>© 2026 Koretskiy Consulting</span>
        <span>{t.footer}</span>
      </footer>
    </main>
  );
}
