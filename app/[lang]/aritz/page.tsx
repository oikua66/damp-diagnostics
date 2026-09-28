import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { languages, type Lang } from '../../../lib/translations';
import { buildMetadata } from '../../../lib/seo';
import { methodology, publicMethodologyPdfs } from '../../../lib/methodology';
import { aritzPages, aritzSlugs } from '../../../lib/aritz';
import { aritzExtraPages, aritzExtraSlugs } from '../../../lib/aritz-extra';
import SiteHeader from '../../components/SiteHeader';

type Props = { params: Promise<{ lang: string }> };

const copy: Record<Lang, {
  title: string;
  lead: string;
  useTitle: string;
  useText: string;
  flowTitle: string;
  stages: { title: string; text: string }[];
  elementsTitle: string;
  elements: string[];
  verifyTitle: string;
  verify: string;
  examplesTitle: string;
  examplesText: string;
  trizTitle: string;
  trizText: string;
  methodologyCta: string;
  topicsTitle: string;
  supportTitle: string;
  open: string;
  viewPdf: string;
  downloadPdf: string;
}> = {
  ru: {
    title: 'ARITZ / АРИЗ — инженерный метод решения задач',
    lead: 'Практический инженерный маршрут для задач, где недостаточно выбрать готовый вариант и необходимо изменить саму систему, устранить противоречие или найти новый принцип решения.',
    useTitle: 'Когда применяется',
    useText: 'ARITZ применяется после того, как реальная задача, границы системы и ограничения достаточно понятны, но стандартное сравнение альтернатив не даёт удовлетворительного решения.',
    flowTitle: 'DIAGNOSE → INVENT → VERIFY',
    stages: [
      { title: 'DIAGNOSE', text: 'Определить реальную проблему, границы системы, функцию, противоречия, ограничения, ресурсы и критические неизвестные.' },
      { title: 'INVENT', text: 'Формировать варианты не как свободный поиск идей, а из структуры задачи: противоречий, ресурсов, архитектуры, разделения, перераспределения, замены, удаления и альтернативных физических механизмов.' },
      { title: 'VERIFY', text: 'Проверять физическую правдоподобность, расчёты, аналоги, литературу, патенты, стандарты, данные производителей, чувствительность, моделирование, эксперимент и необходимость профильного специалиста.' },
    ],
    elementsTitle: 'Что обязательно рассматривается',
    elements: ['постановка задачи;', 'границы системы;', 'противоречия;', 'ресурсы;', 'ограничения;', 'желаемый / идеальный результат;', 'инженерные оценки;', 'доказательства и валидация;', 'safety и условия остановки;', 'роль человеческого эксперта.'],
    verifyTitle: 'Цепочка проверки',
    verify: 'Концепция → Физическая правдоподобность → Расчёт / оценка → Аналоги → Литература / патенты / стандарты → Данные производителя / поставщика → Чувствительность → Эксперимент / моделирование / специалист → Решение.',
    examplesTitle: 'Примеры применения',
    examplesText: 'Публичные примеры будут добавляться по мере появления реальных инженерных задач, которые можно опубликовать без раскрытия конфиденциальной информации клиента. Учебные примеры будут прямо обозначаться как учебные.',
    trizTitle: 'ARITZ и ТРИЗ',
    trizText: 'Классическая ТРИЗ / АРИЗ является методологической основой. Публичный ARITZ здесь — практическая инженерная реализация с акцентом на доказательства, прослеживаемость, расчёты, неопределённость, проверку и экспертную эскалацию.',
    methodologyCta: 'Вернуться к общей методологии',
    topicsTitle: 'Основные разделы ARITZ', supportTitle: 'Проверка, контроль и справочные разделы', open: 'Открыть', viewPdf: 'Просмотреть PDF', downloadPdf: 'Скачать PDF',
  },
  en: {
    title: 'ARITZ — an engineering problem-solving method',
    lead: 'A practical engineering route for problems where selecting an existing option is not enough and the system itself must be changed, a contradiction resolved or a new solution principle found.',
    useTitle: 'When it is used',
    useText: 'ARITZ is used when the real task, system boundary and constraints are sufficiently clear, but standard comparison of alternatives does not produce a satisfactory solution.',
    flowTitle: 'DIAGNOSE → INVENT → VERIFY',
    stages: [
      { title: 'DIAGNOSE', text: 'Define the real problem, system boundary, function, contradictions, constraints, resources and critical unknowns.' },
      { title: 'INVENT', text: 'Generate candidates from the structure of the task rather than free brainstorming: contradictions, resources, architecture, separation, redistribution, replacement, removal and alternative physical mechanisms.' },
      { title: 'VERIFY', text: 'Test physical plausibility, calculations, analogues, literature, patents, standards, manufacturer data, sensitivity, simulation, experiment and the need for a specialist.' },
    ],
    elementsTitle: 'What must be considered',
    elements: ['problem formulation;', 'system boundary;', 'contradictions;', 'resources;', 'constraints;', 'desired / ideal result;', 'engineering estimates;', 'evidence and validation;', 'safety and stop conditions;', 'the human expert role.'],
    verifyTitle: 'Verification chain',
    verify: 'Concept → Physical plausibility → Calculation / estimate → Analogues → Literature / patents / standards → Manufacturer / supplier data → Sensitivity → Experiment / simulation / specialist → Decision.',
    examplesTitle: 'Application examples',
    examplesText: 'Public examples will be added as suitable real engineering cases become available and can be published without disclosing confidential client information. Educational examples will be explicitly marked as illustrative.',
    trizTitle: 'ARITZ and TRIZ',
    trizText: 'Classical TRIZ / ARIZ is the methodological foundation. The public ARITZ presented here is a practical engineering implementation focused on evidence, traceability, calculations, uncertainty, verification and expert escalation.',
    methodologyCta: 'Back to the full methodology',
    topicsTitle: 'Core ARITZ sections', supportTitle: 'Verification, control and reference sections', open: 'Open', viewPdf: 'View PDF', downloadPdf: 'Download PDF',
  },
  uk: {
    title: 'ARITZ / АРИЗ — інженерний метод розв’язання задач',
    lead: 'Практичний інженерний маршрут для задач, де недостатньо вибрати готовий варіант і потрібно змінити саму систему, усунути суперечність або знайти новий принцип рішення.',
    useTitle: 'Коли застосовується',
    useText: 'ARITZ застосовується, коли реальна задача, межі системи та обмеження вже достатньо зрозумілі, але стандартне порівняння альтернатив не дає задовільного рішення.',
    flowTitle: 'DIAGNOSE → INVENT → VERIFY',
    stages: [
      { title: 'DIAGNOSE', text: 'Визначити реальну проблему, межі системи, функцію, суперечності, обмеження, ресурси та критичні невідомі.' },
      { title: 'INVENT', text: 'Формувати варіанти зі структури задачі, а не як вільний пошук ідей: із суперечностей, ресурсів, архітектури, розділення, перерозподілу, заміни, видалення та альтернативних фізичних механізмів.' },
      { title: 'VERIFY', text: 'Перевіряти фізичну правдоподібність, розрахунки, аналоги, літературу, патенти, стандарти, дані виробників, чутливість, моделювання, експеримент і потребу у профільному спеціалісті.' },
    ],
    elementsTitle: 'Що обов’язково розглядається',
    elements: ['постановка задачі;', 'межі системи;', 'суперечності;', 'ресурси;', 'обмеження;', 'бажаний / ідеальний результат;', 'інженерні оцінки;', 'докази і валідація;', 'safety та умови зупинки;', 'роль людського експерта.'],
    verifyTitle: 'Ланцюжок перевірки',
    verify: 'Концепція → Фізична правдоподібність → Розрахунок / оцінка → Аналоги → Література / патенти / стандарти → Дані виробника / постачальника → Чутливість → Експеримент / моделювання / спеціаліст → Рішення.',
    examplesTitle: 'Приклади застосування',
    examplesText: 'Публічні приклади додаватимуться у міру появи реальних інженерних задач, які можна опублікувати без розкриття конфіденційної інформації клієнта. Навчальні приклади будуть прямо позначені як навчальні.',
    trizTitle: 'ARITZ і ТРІЗ',
    trizText: 'Класична ТРІЗ / АРИЗ є методологічною основою. Публічний ARITZ тут — практична інженерна реалізація з акцентом на докази, простежуваність, розрахунки, невизначеність, перевірку та експертну ескалацію.',
    methodologyCta: 'Повернутися до загальної методології',
    topicsTitle: 'Основні розділи ARITZ', supportTitle: 'Перевірка, контроль і довідкові розділи', open: 'Відкрити', viewPdf: 'Переглянути PDF', downloadPdf: 'Завантажити PDF',
  },
  sr: {
    title: 'ARITZ — inženjerski metod rešavanja problema',
    lead: 'Praktična inženjerska ruta za probleme kod kojih izbor postojećeg rešenja nije dovoljan i potrebno je promeniti sam sistem, rešiti kontradikciju ili pronaći novi princip rešenja.',
    useTitle: 'Kada se koristi',
    useText: 'ARITZ se koristi kada su stvarni problem, granice sistema i ograničenja dovoljno jasni, ali standardno poređenje alternativa ne daje zadovoljavajuće rešenje.',
    flowTitle: 'DIAGNOSE → INVENT → VERIFY',
    stages: [
      { title: 'DIAGNOSE', text: 'Definisati stvarni problem, granice sistema, funkciju, kontradikcije, ograničenja, resurse i kritične nepoznanice.' },
      { title: 'INVENT', text: 'Formirati opcije iz strukture zadatka, a ne slobodnim generisanjem ideja: iz kontradikcija, resursa, arhitekture, razdvajanja, preraspodele, zamene, uklanjanja i alternativnih fizičkih mehanizama.' },
      { title: 'VERIFY', text: 'Proveriti fizičku izvodljivost, proračune, analogije, literaturu, patente, standarde, podatke proizvođača, osetljivost, simulaciju, eksperiment i potrebu za specijalistom.' },
    ],
    elementsTitle: 'Šta se obavezno razmatra',
    elements: ['formulacija problema;', 'granice sistema;', 'kontradikcije;', 'resursi;', 'ograničenja;', 'željeni / idealni rezultat;', 'inženjerske procene;', 'dokazi i validacija;', 'safety i uslovi zaustavljanja;', 'uloga ljudskog eksperta.'],
    verifyTitle: 'Lanac provere',
    verify: 'Koncept → Fizička izvodljivost → Proračun / procena → Analogije → Literatura / patenti / standardi → Podaci proizvođača / dobavljača → Osetljivost → Eksperiment / simulacija / specijalista → Odluka.',
    examplesTitle: 'Primeri primene',
    examplesText: 'Javni primeri će se dodavati kako budu dostupni realni inženjerski slučajevi koji mogu da se objave bez otkrivanja poverljivih podataka klijenta. Edukativni primeri biće jasno označeni kao ilustrativni.',
    trizTitle: 'ARITZ i TRIZ',
    trizText: 'Klasični TRIZ / ARIZ predstavlja metodološku osnovu. Javni ARITZ ovde je praktična inženjerska realizacija sa fokusom na dokaze, sledljivost, proračune, neizvesnost, verifikaciju i ekspertsku eskalaciju.',
    methodologyCta: 'Nazad na celu metodologiju',
    topicsTitle: 'Osnovni ARITZ odeljci', supportTitle: 'Verifikacija, kontrola i referentni odeljci', open: 'Otvori', viewPdf: 'Pregledaj PDF', downloadPdf: 'Preuzmi PDF',
  },
};

export function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang = (languages.includes(rawLang as Lang) ? rawLang : 'en') as Lang;
  const t = copy[lang];
  return buildMetadata({
    lang,
    path: '/aritz',
    title: `${t.title} | Koretskiy Methodology`,
    description: t.lead,
  });
}

export default async function AritzPage({ params }: Props) {
  const { lang: rawLang } = await params;
  if (!languages.includes(rawLang as Lang)) notFound();
  const lang = rawLang as Lang;
  const t = copy[lang];
  const m = methodology[lang];

  return (
    <main>
      <SiteHeader lang={lang} languagePath="/aritz" />

      <section className="section" style={{ paddingTop: '9vh' }}>
        <div style={{ maxWidth: 1040 }}>
          <p className="eyebrow">Koretskiy Methodology · ARITZ</p>
          <h1>{t.title}</h1>
          <p className="lead-small" style={{ maxWidth: 920 }}>{t.lead}</p>
          <p className="lead-small" style={{ maxWidth: 920, fontSize: 18 }}>{m.authorship}</p>
        </div>
      </section>

      <section className="section split">
        <div><h2>{t.useTitle}</h2></div>
        <div className="prose"><p>{t.useText}</p></div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">ARITZ</p>
          <h2>{t.flowTitle}</h2>
        </div>
        <div className="method-steps">
          {t.stages.map((stage, index) => (
            <article className="method-step" key={stage.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{stage.title}</h3>
              <p>{stage.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section split">
        <div><h2>{t.elementsTitle}</h2></div>
        <div className="prose">{t.elements.map((item) => <p key={item}>— {item}</p>)}</div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">ARITZ</p>
          <h2>{t.topicsTitle}</h2>
        </div>
        <div className="cards" style={{ gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', rowGap: 24 }}>
          {aritzSlugs.map((slug,index) => {
            const item = aritzPages[lang][slug];
            return (
              <article className="card" key={slug}>
                <span className="card-number">{String(index+1).padStart(2,'0')}</span>
                <h3>{item.title}</h3>
                <p>{item.lead}</p>
                <a className="button button-light" href={`/${lang}/aritz/${slug}`} style={{marginTop:28}}>{t.open}</a>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section" style={{ background: 'var(--panel)' }}>
        <div className="section-heading">
          <p className="eyebrow">ARITZ</p>
          <h2>{t.supportTitle}</h2>
        </div>
        <div className="cards" style={{ gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', rowGap: 24 }}>
          {aritzExtraSlugs.map((slug,index) => {
            const item = aritzExtraPages[lang][slug];
            return (
              <article className="card" key={slug}>
                <span className="card-number">{String(index+1).padStart(2,'0')}</span>
                <h3>{item.title}</h3>
                <p>{item.lead}</p>
                <a className="button button-light" href={`/${lang}/aritz/${slug}`} style={{marginTop:28}}>{t.open}</a>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section split" style={{ background: 'var(--panel)' }}>
        <div><h2>{t.verifyTitle}</h2></div>
        <div className="prose"><p>{t.verify}</p></div>
      </section>

      <section className="section split">
        <div><h2>{t.trizTitle}</h2></div>
        <div className="prose"><p>{t.trizText}</p></div>
      </section>

      <section className="section split">
        <div><h2>{t.examplesTitle}</h2></div>
        <div className="prose"><p>{t.examplesText}</p></div>
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
            <a className="button button-light" href={`/${lang}/methodology`}>{t.methodologyCta}</a>
          </div>
        </div>
      </section>
    </main>
  );
}
