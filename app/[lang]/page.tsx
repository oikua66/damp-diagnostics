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

const solutionCopy: Record<Lang, { eyebrow: string; title: string; text: string; current: string; action: string }> = {
  en: {
    eyebrow: 'Problem-specific solutions',
    title: 'A growing library of practical problems.',
    text: 'Alongside general consulting, I am adding dedicated pages for specific practical problems — especially where the cause must be understood before a solution is chosen. New topics will be added over time.',
    current: 'First topic: damp diagnostics',
    action: 'Open damp diagnostics',
  },
  ru: {
    eyebrow: 'Решения по конкретным задачам',
    title: 'Библиотека практических проблем будет расширяться.',
    text: 'Помимо общего консалтинга, я постепенно добавляю отдельные страницы по конкретным практическим проблемам — особенно там, где важно сначала разобраться в причине, а уже потом выбирать решение. Новые темы будут добавляться постепенно.',
    current: 'Первая тема: диагностика сырости',
    action: 'Открыть диагностику сырости',
  },
  uk: {
    eyebrow: 'Рішення для конкретних задач',
    title: 'Бібліотека практичних проблем буде розширюватися.',
    text: 'Окрім загального консалтингу, я поступово додаю окремі сторінки для конкретних практичних проблем — особливо там, де спочатку потрібно зрозуміти причину, а вже потім обирати рішення. Нові теми додаватимуться поступово.',
    current: 'Перша тема: діагностика вологи',
    action: 'Відкрити діагностику вологи',
  },
  sr: {
    eyebrow: 'Rešenja za konkretne probleme',
    title: 'Biblioteka praktičnih problema će se širiti.',
    text: 'Pored opšteg konsaltinga, postepeno dodajem posebne stranice za konkretne praktične probleme — naročito tamo gde je prvo potrebno razumeti uzrok, a tek zatim birati rešenje. Nove teme će se dodavati vremenom.',
    current: 'Prva tema: dijagnostika vlage',
    action: 'Otvori dijagnostiku vlage',
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
  const solutions = solutionCopy[lang];

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

      <section className="section split" id="solutions">
        <div>
          <p className="eyebrow">{solutions.eyebrow}</p>
          <h2>{solutions.title}</h2>
        </div>
        <div className="prose">
          <p>{solutions.text}</p>
          <p><strong>{solutions.current}</strong></p>
          <a className="button button-light" href={`/${lang}/damp-diagnostics`}>{solutions.action}</a>
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
