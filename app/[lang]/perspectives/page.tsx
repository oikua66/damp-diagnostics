import { notFound } from 'next/navigation';
import { languageNames, languages, type Lang } from '../../../lib/translations';

type Props = { params: Promise<{ lang: string }> };

type PerspectivesCopy = {
  title: string;
  intro: string;
  publications: string;
  empty: string;
  emailLead: string;
};

const copy: Record<Lang, PerspectivesCopy> = {
  en: {
    title: 'Perspectives',
    intro: 'Analyses of technical and business problems, disputed solutions and practical questions. The format of this section is still evolving. Suggestions for topics, comments and materials for discussion can be sent to consulting@koretskiy.com.',
    publications: 'Publications',
    empty: 'The first publications will appear here.',
    emailLead: 'Have another point of view or material worth discussing?',
  },
  ru: {
    title: 'Мнения',
    intro: 'Разборы технических и бизнес-задач, спорных решений и практических вопросов. Формат раздела ещё развивается. Предложения тем, замечания и материалы для обсуждения можно присылать на consulting@koretskiy.com.',
    publications: 'Публикации',
    empty: 'Здесь появятся первые публикации.',
    emailLead: 'Есть другая точка зрения или материал для обсуждения?',
  },
  uk: {
    title: 'Погляди',
    intro: 'Розбори технічних і бізнес-завдань, спірних рішень та практичних питань. Формат розділу ще розвивається. Пропозиції тем, зауваження та матеріали для обговорення можна надсилати на consulting@koretskiy.com.',
    publications: 'Публікації',
    empty: 'Тут з’являться перші публікації.',
    emailLead: 'Є інша точка зору або матеріал для обговорення?',
  },
  sr: {
    title: 'Stavovi',
    intro: 'Analize tehničkih i poslovnih zadataka, spornih rešenja i praktičnih pitanja. Format ovog odeljka se još razvija. Predloge tema, komentare i materijale za diskusiju možete poslati na consulting@koretskiy.com.',
    publications: 'Objave',
    empty: 'Prve objave će se pojaviti ovde.',
    emailLead: 'Imate drugačije mišljenje ili materijal za diskusiju?',
  },
};

export default async function PerspectivesPage({ params }: Props) {
  const { lang: rawLang } = await params;
  if (!languages.includes(rawLang as Lang)) notFound();
  const lang = rawLang as Lang;
  const t = copy[lang];

  return (
    <main>
      <header className="site-header">
        <a className="brand" href={`/${lang}`}>
          <span className="brand-mark">KC</span>
          <span>Koretskiy Consulting</span>
        </a>
        <div className="header-right">
          <nav />
          <div className="language-switcher">
            {languages.map((item) => (
              <a key={item} href={`/${item}/perspectives`} className={item === lang ? 'active' : ''}>
                {languageNames[item]}
              </a>
            ))}
          </div>
        </div>
      </header>

      <section className="section" style={{ paddingTop: '9vh' }}>
        <div style={{ maxWidth: 920 }}>
          <p className="eyebrow">Koretskiy Consulting</p>
          <h1>{t.title}</h1>
          <p className="lead-small" style={{ maxWidth: 900 }}>{t.intro}</p>
        </div>
      </section>

      <section className="section" style={{ minHeight: '34vh' }}>
        <div className="section-heading" style={{ marginBottom: 32 }}>
          <p className="eyebrow">{t.publications}</p>
          <div>
            <h2>{t.publications}</h2>
            <p className="lead-small" style={{ marginTop: 20 }}>{t.empty}</p>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--panel)' }}>
        <div style={{ maxWidth: 820 }}>
          <h2>{t.emailLead}</h2>
          <p className="lead-small" style={{ marginBottom: 0 }}>
            <a href="mailto:consulting@koretskiy.com" style={{ borderBottom: '1px solid currentColor' }}>
              consulting@koretskiy.com
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
