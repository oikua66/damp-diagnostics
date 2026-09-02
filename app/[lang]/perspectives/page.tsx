import { notFound } from 'next/navigation';
import { languageNames, languages, type Lang } from '../../../lib/translations';

type Props = { params: Promise<{ lang: string }> };

type ProjectsCopy = {
  title: string;
  intro: string;
  projects: string;
  lookingFor: string;
  stage: string;
  downloadPresentation: string;
  contactTitle: string;
  contactText: string;
  projectTitle: string;
  projectDescription: string;
  projectLookingFor: string;
  projectStage: string;
};

const copy: Record<Lang, ProjectsCopy> = {
  en: {
    title: 'Projects for implementation',
    intro: 'A selection of project concepts that are developed far enough to discuss practical implementation. Each project starts from a defined problem and a workable technical or business concept. Depending on the project, I may be looking for a client, investor, industrial partner, supplier or operating partner.',
    projects: 'Current projects',
    lookingFor: 'Looking for',
    stage: 'Current stage',
    downloadPresentation: 'Download presentation',
    contactTitle: 'Interested in one of the projects?',
    contactText: 'If you see a possible role for your company, organisation or investment team, send me a short note and we can discuss the project directly.',
    projectTitle: 'AI Energy Campus — Serbia',
    projectDescription: 'A modular AI-ready energy and infrastructure platform in Serbia: a 5 MW pilot designed to scale to 50+ MW. The concept combines on-site generation, cooling, storage and infrastructure for liquid-cooled AI computing loads. A separate configuration is being considered for low-rate gas wells, where locally produced gas can be monetised through on-site power generation for AI/Data Center infrastructure.',
    projectLookingFor: 'Client, investor, infrastructure partner or operator',
    projectStage: 'Concept developed; pilot implementation model under discussion',
  },
  ru: {
    title: 'Проекты для реализации',
    intro: 'Здесь собраны проекты и технические концепции, уже проработанные до уровня, на котором можно обсуждать практическую реализацию. В основе каждого проекта — конкретная задача и рабочая техническая или бизнес-концепция. В зависимости от проекта я ищу заказчика, инвестора, промышленного партнёра, поставщика или оператора.',
    projects: 'Текущие проекты',
    lookingFor: 'Ищем',
    stage: 'Текущая стадия',
    downloadPresentation: 'Скачать презентацию',
    contactTitle: 'Заинтересовал один из проектов?',
    contactText: 'Если вы видите возможную роль своей компании, организации или инвестиционной команды, напишите мне — проект можно обсудить напрямую.',
    projectTitle: 'AI Energy Campus — Serbia',
    projectDescription: 'Модульная энергетическая и инфраструктурная платформа для AI/Data Center в Сербии: пилот 5 МВт с масштабированием до 50+ МВт. Концепция объединяет локальную генерацию, охлаждение, накопление энергии и инфраструктуру для жидкостно-охлаждаемых вычислительных нагрузок. Отдельно рассматривается вариант для малодебитных газовых скважин, где добываемый на месте газ используется для локальной генерации электроэнергии и монетизируется через инфраструктуру AI/Data Center.',
    projectLookingFor: 'Заказчика, инвестора, инфраструктурного партнёра или оператора',
    projectStage: 'Концепция разработана; обсуждается модель реализации пилота',
  },
  uk: {
    title: 'Проєкти для реалізації',
    intro: 'Тут зібрані проєкти та технічні концепції, вже опрацьовані до рівня, на якому можна обговорювати практичну реалізацію. В основі кожного проєкту — конкретне завдання та робоча технічна або бізнес-концепція. Залежно від проєкту я шукаю замовника, інвестора, промислового партнера, постачальника або оператора.',
    projects: 'Поточні проєкти',
    lookingFor: 'Шукаємо',
    stage: 'Поточна стадія',
    downloadPresentation: 'Завантажити презентацію',
    contactTitle: 'Зацікавив один із проєктів?',
    contactText: 'Якщо ви бачите можливу роль своєї компанії, організації чи інвестиційної команди, напишіть мені — проєкт можна обговорити безпосередньо.',
    projectTitle: 'AI Energy Campus — Serbia',
    projectDescription: 'Модульна енергетична та інфраструктурна платформа для AI/Data Center у Сербії: пілот 5 МВт із масштабуванням до 50+ МВт. Концепція поєднує локальну генерацію, охолодження, накопичення енергії та інфраструктуру для обчислювальних навантажень із рідинним охолодженням. Окремо розглядається варіант для малодебітних газових свердловин, де видобутий на місці газ використовується для локальної генерації електроенергії та монетизується через інфраструктуру AI/Data Center.',
    projectLookingFor: 'Замовника, інвестора, інфраструктурного партнера або оператора',
    projectStage: 'Концепцію розроблено; обговорюється модель реалізації пілота',
  },
  sr: {
    title: 'Projekti za realizaciju',
    intro: 'Ovde su predstavljeni projekti i tehnički koncepti razrađeni do nivoa na kome se može razgovarati o praktičnoj realizaciji. Svaki projekat polazi od konkretnog problema i radnog tehničkog ili poslovnog koncepta. U zavisnosti od projekta, tražim naručioca, investitora, industrijskog partnera, dobavljača ili operatera.',
    projects: 'Aktuelni projekti',
    lookingFor: 'Tražimo',
    stage: 'Trenutna faza',
    downloadPresentation: 'Preuzmi prezentaciju',
    contactTitle: 'Zainteresovani ste za neki od projekata?',
    contactText: 'Ako vidite moguću ulogu svoje kompanije, organizacije ili investicionog tima, javite mi se i projekat možemo direktno razmotriti.',
    projectTitle: 'AI Energy Campus — Serbia',
    projectDescription: 'Modularna energetska i infrastrukturna platforma za AI/Data Center u Srbiji: pilot od 5 MW sa mogućnošću skaliranja na 50+ MW. Koncept kombinuje lokalnu proizvodnju energije, hlađenje, skladištenje energije i infrastrukturu za računarske sisteme sa tečnim hlađenjem. Posebno se razmatra varijanta za gasne bušotine sa malim protokom, gde se lokalno proizvedeni gas koristi za proizvodnju električne energije na licu mesta i monetizuje kroz AI/Data Center infrastrukturu.',
    projectLookingFor: 'Naručioca, investitora, infrastrukturnog partnera ili operatera',
    projectStage: 'Koncept je razvijen; razmatra se model realizacije pilota',
  },
};

const projectPdf: Record<Lang, string> = {
  en: '/projects/AI_Energy_Campus_Project_Card_EN.pdf',
  ru: '/projects/AI_Energy_Campus_Project_Card_RU.pdf',
  uk: '/projects/AI_Energy_Campus_Project_Card_UA.pdf',
  sr: '/projects/AI_Energy_Campus_Project_Card_SR.pdf',
};

export default async function ProjectsPage({ params }: Props) {
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
          <p className="eyebrow">{t.projects}</p>
        </div>

        <div className="cards" style={{ gridTemplateColumns: 'minmax(0, 1fr)' }}>
          <article className="card" style={{ maxWidth: 980 }}>
            <h2>{t.projectTitle}</h2>
            <p>{t.projectDescription}</p>
            <p><strong>{t.lookingFor}:</strong> {t.projectLookingFor}</p>
            <p><strong>{t.stage}:</strong> {t.projectStage}</p>
            <a className="button button-light" href={projectPdf[lang]} download>
              {t.downloadPresentation}
            </a>
          </article>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--panel)' }}>
        <div style={{ maxWidth: 820 }}>
          <h2>{t.contactTitle}</h2>
          <p className="lead-small">{t.contactText}</p>
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
