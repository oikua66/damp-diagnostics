import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { languages, type Lang } from '../../../lib/translations';
import { buildMetadata } from '../../../lib/seo';
import { methodology, methodologySlugs, publicMethodologyPdfs } from '../../../lib/methodology';
import SiteHeader from '../../components/SiteHeader';

type Props = { params: Promise<{ lang: string }> };

const intro: Record<Lang, {
  title: string;
  lead: string;
  scopeTitle: string;
  scope: string[];
  aritzTitle: string;
  aritzText: string;
  aritzCta: string;
  pagesTitle: string;
  softwareTitle: string;
  open: string;
  viewPdf: string;
  downloadPdf: string;
}> = {
  ru: {
    title: 'Методология инженерного анализа и принятия решений',
    lead: 'Авторская система структурированного анализа технических, технологических и бизнес-задач: от постановки реальной проблемы и работы с доказательствами до формирования вариантов, проверки и выбора следующего рационального шага.',
    scopeTitle: 'Где применяется',
    scope: ['инженерные и технические системы;', 'технологии и разработка продуктов;', 'инфраструктурные и инвестиционные проекты;', 'выбор оборудования и архитектуры;', 'модернизация существующих решений;', 'анализ, настройка и модернизация бизнес-процессов.'],
    aritzTitle: 'ARITZ / АРИЗ',
    aritzText: 'Для задач, где недостаточно оценить возможность и необходимо изменить саму систему, применяется отдельный инженерный маршрут: DIAGNOSE → INVENT → VERIFY.',
    aritzCta: 'Открыть раздел ARITZ',
    pagesTitle: 'Разделы методологии',
    softwareTitle: 'От методологии к программной реализации',
    open: 'Открыть', viewPdf: 'Просмотреть PDF', downloadPdf: 'Скачать PDF',
  },
  en: {
    title: 'Engineering analysis and decision methodology',
    lead: 'An authorial system for structured analysis of technical, technological and business problems: from defining the real problem and handling evidence to generating options, verification and selecting the next rational step.',
    scopeTitle: 'Where it applies',
    scope: ['engineering and technical systems;', 'technology and product development;', 'infrastructure and investment projects;', 'equipment and architecture selection;', 'modernization of existing solutions;', 'business-process analysis, tuning and modernization.'],
    aritzTitle: 'ARITZ',
    aritzText: 'When assessing an opportunity is not enough and the system itself has to change, a dedicated engineering route is used: DIAGNOSE → INVENT → VERIFY.',
    aritzCta: 'Open ARITZ',
    pagesTitle: 'Methodology sections',
    softwareTitle: 'From methodology to software implementation',
    open: 'Open', viewPdf: 'View PDF', downloadPdf: 'Download PDF',
  },
  uk: {
    title: 'Методологія інженерного аналізу та прийняття рішень',
    lead: 'Авторська система структурованого аналізу технічних, технологічних і бізнес-задач: від постановки реальної проблеми та роботи з доказами до формування варіантів, перевірки й вибору наступного раціонального кроку.',
    scopeTitle: 'Де застосовується',
    scope: ['інженерні та технічні системи;', 'технології й розробка продуктів;', 'інфраструктурні та інвестиційні проєкти;', 'вибір обладнання та архітектури;', 'модернізація наявних рішень;', 'аналіз, налаштування та модернізація бізнес-процесів.'],
    aritzTitle: 'ARITZ / АРИЗ',
    aritzText: 'Коли недостатньо оцінити можливість і потрібно змінити саму систему, застосовується окремий інженерний маршрут: DIAGNOSE → INVENT → VERIFY.',
    aritzCta: 'Відкрити ARITZ',
    pagesTitle: 'Розділи методології',
    softwareTitle: 'Від методології до програмної реалізації',
    open: 'Відкрити', viewPdf: 'Переглянути PDF', downloadPdf: 'Завантажити PDF',
  },
  sr: {
    title: 'Metodologija inženjerske analize i donošenja odluka',
    lead: 'Autorski sistem strukturisane analize tehničkih, tehnoloških i poslovnih problema: od definisanja stvarnog problema i rada sa dokazima do formiranja opcija, provere i izbora sledećeg racionalnog koraka.',
    scopeTitle: 'Gde se primenjuje',
    scope: ['inženjerski i tehnički sistemi;', 'tehnologije i razvoj proizvoda;', 'infrastrukturni i investicioni projekti;', 'izbor opreme i arhitekture;', 'modernizacija postojećih rešenja;', 'analiza, podešavanje i modernizacija poslovnih procesa.'],
    aritzTitle: 'ARITZ',
    aritzText: 'Kada procena prilike nije dovoljna i potrebno je promeniti sam sistem, koristi se posebna inženjerska ruta: DIAGNOSE → INVENT → VERIFY.',
    aritzCta: 'Otvori ARITZ',
    pagesTitle: 'Delovi metodologije',
    softwareTitle: 'Od metodologije do softverske realizacije',
    open: 'Otvori', viewPdf: 'Pregledaj PDF', downloadPdf: 'Preuzmi PDF',
  },
};

export function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang = (languages.includes(rawLang as Lang) ? rawLang : 'en') as Lang;
  const t = intro[lang];
  return buildMetadata({
    lang,
    path: '/methodology',
    title: `${t.title} | Koretskiy Consulting`,
    description: t.lead,
  });
}

export default async function MethodologyPage({ params }: Props) {
  const { lang: rawLang } = await params;
  if (!languages.includes(rawLang as Lang)) notFound();
  const lang = rawLang as Lang;
  const t = intro[lang];
  const m = methodology[lang];

  return (
    <main>
      <SiteHeader lang={lang} languagePath="/methodology" />

      <section className="section" style={{ paddingTop: '9vh' }}>
        <div style={{ maxWidth: 1020 }}>
          <p className="eyebrow">Koretskiy Methodology</p>
          <h1>{t.title}</h1>
          <p className="lead-small" style={{ maxWidth: 920 }}>{t.lead}</p>
          <p className="lead-small" style={{ maxWidth: 920, fontSize: 18 }}>{m.authorship}</p>
        </div>
      </section>

      <section className="section split">
        <div><p className="eyebrow">{t.scopeTitle}</p></div>
        <div className="prose">{t.scope.map((item) => <p key={item}>— {item}</p>)}</div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">{t.pagesTitle}</p>
          <h2>{t.pagesTitle}</h2>
        </div>
        <div className="cards">
          {methodologySlugs.map((slug, index) => {
            const page = m.pages[slug];
            return (
              <article className="card" key={slug}>
                <span className="card-number">{String(index + 1).padStart(2, '0')}</span>
                <h3>{page.title}</h3>
                <p>{page.lead}</p>
                <a className="button button-light" href={`/${lang}/methodology/${slug}`} style={{ marginTop: 28 }}>{t.open}</a>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section split" style={{ background: 'var(--panel)' }}>
        <div>
          <p className="eyebrow">ARITZ</p>
          <h2>{t.aritzTitle}</h2>
        </div>
        <div className="prose">
          <p>{t.aritzText}</p>
          <a className="button button-dark" href={`/${lang}/aritz`}>{t.aritzCta}</a>
        </div>
      </section>

      <section className="section split">
        <div>
          <p className="eyebrow">{m.softwareLabel}</p>
          <h2>{t.softwareTitle}</h2>
        </div>
        <div className="prose">
          <p>{m.softwareText}</p>
          <a className="button button-dark" href="https://checkopp.com" target="_blank" rel="noreferrer">{m.softwareCta}</a>
        </div>
      </section>

      <section className="section split" style={{ background: 'var(--panel)' }}>
        <div>
          <p className="eyebrow">PDF</p>
          <h2>{m.pdfTitle}</h2>
        </div>
        <div className="prose">
          <p>{m.pdfText}</p>
          <div className="hero-actions">
            <a className="button button-light" href={publicMethodologyPdfs[lang].path} target="_blank" rel="noreferrer">{t.viewPdf}</a>
            <a className="button button-dark" href={publicMethodologyPdfs[lang].path} download>{t.downloadPdf}</a>
            <a className="button button-light" href={`/${lang}/methodology/library`}>{m.pdfPending}</a>
          </div>
        </div>
      </section>
    </main>
  );
}
