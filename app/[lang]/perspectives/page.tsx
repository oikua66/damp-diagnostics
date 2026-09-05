import { notFound } from 'next/navigation';
import { languages, type Lang } from '../../../lib/translations';
import SiteHeader from '../../components/SiteHeader';
import { business, mailtoHref } from '../../../lib/business';

type Props = { params: Promise<{ lang: string }> };

type ProjectsCopy = {
  title: string;
  intro: string;
  projects: string;
  lookingFor: string;
  stage: string;
  downloadPresentation: string;
  presentationSoon: string;
  contactTitle: string;
  contactText: string;
  projectTitle: string;
  projectDescription: string;
  projectLookingFor: string;
  projectStage: string;
  project2Title: string;
  project2Description: string;
  project2Applications: string;
  project2LookingFor: string;
  project2Stage: string;
};

const copy: Record<Lang, ProjectsCopy> = {
  en: {
    title: 'Projects for implementation',
    intro: 'A selection of project concepts that are developed far enough to discuss practical implementation. Each project starts from a defined problem and a workable technical or business concept. Depending on the project, I may be looking for a client, investor, industrial partner, supplier or operating partner.',
    projects: 'Current projects',
    lookingFor: 'Looking for',
    stage: 'Current stage',
    downloadPresentation: 'Download presentation',
    presentationSoon: 'Presentation in preparation',
    contactTitle: 'Interested in one of the projects?',
    contactText: 'If you see a possible role for your company, organisation or investment team, send me a short note and we can discuss the project directly.',
    projectTitle: 'AI Energy Campus — Serbia',
    projectDescription: 'A modular AI-ready energy and infrastructure platform in Serbia: a 5 MW pilot designed to scale to 50+ MW. The concept combines on-site generation, cooling, storage and infrastructure for liquid-cooled AI computing loads. A separate configuration is being considered for low-rate gas wells, where locally produced gas can be monetised through on-site power generation for AI/Data Center infrastructure.',
    projectLookingFor: 'Client, investor, infrastructure partner or operator',
    projectStage: 'Concept developed; pilot implementation model under discussion',
    project2Title: 'Integrated climate & energy modernization',
    project2Description: 'A modular engineering concept for renovation and new-build projects where heating, ventilation, comfort and operating cost must be addressed as one system. The solution can combine heat pumps as the primary heat source, EFFI radiant heating panels and Climtec decentralised ventilation with heat recovery. For spaces where air movement is part of the operating requirement, the concept can be supplemented with dedicated solutions for organised and controlled air circulation. Equipment and configuration are selected for each building rather than forced into one standard package.',
    project2Applications: 'Sports halls and fitness facilities, cafés and restaurants, industrial and logistics buildings, cultural and public spaces, high-volume rooms and other facilities with variable occupancy or special indoor-air requirements.',
    project2LookingFor: 'Building owner, operator, developer, renovation contractor or local implementation partner',
    project2Stage: 'Base concept developed; sector-specific configurations and pilot projects are ready for discussion',
  },
  ru: {
    title: 'Проекты для реализации',
    intro: 'Здесь собраны проекты и технические концепции, уже проработанные до уровня, на котором можно обсуждать практическую реализацию. В основе каждого проекта — конкретная задача и рабочая техническая или бизнес-концепция. В зависимости от проекта я ищу заказчика, инвестора, промышленного партнёра, поставщика или оператора.',
    projects: 'Текущие проекты',
    lookingFor: 'Ищем',
    stage: 'Текущая стадия',
    downloadPresentation: 'Скачать презентацию',
    presentationSoon: 'Презентация готовится',
    contactTitle: 'Заинтересовал один из проектов?',
    contactText: 'Если вы видите возможную роль своей компании, организации или инвестиционной команды, напишите мне — проект можно обсудить напрямую.',
    projectTitle: 'AI Energy Campus — Serbia',
    projectDescription: 'Модульная энергетическая и инфраструктурная платформа для AI/Data Center в Сербии: пилот 5 МВт с масштабированием до 50+ МВт. Концепция объединяет локальную генерацию, охлаждение, накопление энергии и инфраструктуру для жидкостно-охлаждаемых вычислительных нагрузок. Отдельно рассматривается вариант для малодебитных газовых скважин, где добываемый на месте газ используется для локальной генерации электроэнергии и монетизируется через инфраструктуру AI/Data Center.',
    projectLookingFor: 'Заказчика, инвестора, инфраструктурного партнёра или оператора',
    projectStage: 'Концепция разработана; обсуждается модель реализации пилота',
    project2Title: 'Комплексная модернизация микроклимата и энергосистем зданий',
    project2Description: 'Модульная инженерная концепция для реконструкции и новых объектов, где отопление, вентиляцию, комфорт и эксплуатационные затраты нужно рассматривать как единую систему. Комплекс может включать тепловые насосы как основной источник тепла, лучистые панели EFFI и децентрализованную вентиляцию Climtec с рекуперацией. Для помещений, где движение воздуха является частью технологических или эксплуатационных требований, решение дополняется системами организованного и контролируемого перемещения воздуха. Оборудование и конфигурация подбираются под конкретный объект, а не подгоняются под один стандартный комплект.',
    project2Applications: 'Спортивные залы и фитнес-центры, кафе и рестораны, промышленные и логистические здания, культурные и общественные пространства, помещения большого объёма и другие объекты с переменной загрузкой или специальными требованиями к воздухообмену.',
    project2LookingFor: 'Собственника или оператора здания, девелопера, подрядчика по реконструкции или локального партнёра по реализации',
    project2Stage: 'Базовая концепция разработана; отраслевые конфигурации и пилотные объекты готовы к обсуждению',
  },
  uk: {
    title: 'Проєкти для реалізації',
    intro: 'Тут зібрані проєкти та технічні концепції, вже опрацьовані до рівня, на якому можна обговорювати практичну реалізацію. В основі кожного проєкту — конкретне завдання та робоча технічна або бізнес-концепція. Залежно від проєкту я шукаю замовника, інвестора, промислового партнера, постачальника або оператора.',
    projects: 'Поточні проєкти',
    lookingFor: 'Шукаємо',
    stage: 'Поточна стадія',
    downloadPresentation: 'Завантажити презентацію',
    presentationSoon: 'Презентація готується',
    contactTitle: 'Зацікавив один із проєктів?',
    contactText: 'Якщо ви бачите можливу роль своєї компанії, організації чи інвестиційної команди, напишіть мені — проєкт можна обговорити безпосередньо.',
    projectTitle: 'AI Energy Campus — Serbia',
    projectDescription: 'Модульна енергетична та інфраструктурна платформа для AI/Data Center у Сербії: пілот 5 МВт із масштабуванням до 50+ МВт. Концепція поєднує локальну генерацію, охолодження, накопичення енергії та інфраструктуру для обчислювальних навантажень із рідинним охолодженням. Окремо розглядається варіант для малодебітних газових свердловин, де видобутий на місці газ використовується для локальної генерації електроенергії та монетизується через інфраструктуру AI/Data Center.',
    projectLookingFor: 'Замовника, інвестора, інфраструктурного партнера або оператора',
    projectStage: 'Концепцію розроблено; обговорюється модель реалізації пілота',
    project2Title: 'Комплексна модернізація мікроклімату та енергосистем будівель',
    project2Description: 'Модульна інженерна концепція для реконструкції та нових об’єктів, де опалення, вентиляцію, комфорт і експлуатаційні витрати потрібно розглядати як єдину систему. Комплекс може включати теплові насоси як основне джерело тепла, променеві панелі EFFI та децентралізовану вентиляцію Climtec з рекуперацією. Для приміщень, де рух повітря є частиною технологічних або експлуатаційних вимог, рішення доповнюється системами організованого та контрольованого переміщення повітря. Обладнання й конфігурація підбираються під конкретний об’єкт, а не підганяються під один стандартний комплект.',
    project2Applications: 'Спортивні зали та фітнес-центри, кафе й ресторани, промислові та логістичні будівлі, культурні та громадські простори, приміщення великого об’єму та інші об’єкти зі змінним завантаженням або спеціальними вимогами до повітрообміну.',
    project2LookingFor: 'Власника або оператора будівлі, девелопера, підрядника з реконструкції або локального партнера з реалізації',
    project2Stage: 'Базову концепцію розроблено; галузеві конфігурації та пілотні об’єкти готові до обговорення',
  },
  sr: {
    title: 'Projekti za realizaciju',
    intro: 'Ovde su predstavljeni projekti i tehnički koncepti razrađeni do nivoa na kome se može razgovarati o praktičnoj realizaciji. Svaki projekat polazi od konkretnog problema i radnog tehničkog ili poslovnog koncepta. U zavisnosti od projekta, tražim naručioca, investitora, industrijskog partnera, dobavljača ili operatera.',
    projects: 'Aktuelni projekti',
    lookingFor: 'Tražimo',
    stage: 'Trenutna faza',
    downloadPresentation: 'Preuzmi prezentaciju',
    presentationSoon: 'Prezentacija je u pripremi',
    contactTitle: 'Zainteresovani ste za neki od projekata?',
    contactText: 'Ako vidite moguću ulogu svoje kompanije, organizacije ili investicionog tima, javite mi se i projekat možemo direktno razmotriti.',
    projectTitle: 'AI Energy Campus — Serbia',
    projectDescription: 'Modularna energetska i infrastrukturna platforma za AI/Data Center u Srbiji: pilot od 5 MW sa mogućnošću skaliranja na 50+ MW. Koncept kombinuje lokalnu proizvodnju energije, hlađenje, skladištenje energije i infrastrukturu za računarske sisteme sa tečnim hlađenjem. Posebno se razmatra varijanta za gasne bušotine sa malim protokom, gde se lokalno proizvedeni gas koristi za proizvodnju električne energije na licu mesta i monetizuje kroz AI/Data Center infrastrukturu.',
    projectLookingFor: 'Naručioca, investitora, infrastrukturnog partnera ili operatera',
    projectStage: 'Koncept je razvijen; razmatra se model realizacije pilota',
    project2Title: 'Kompleksna modernizacija mikroklime i energetskih sistema objekata',
    project2Description: 'Modularni inženjerski koncept za rekonstrukciju i nove objekte u kojima grejanje, ventilacija, komfor i operativni troškovi treba da se rešavaju kao jedinstven sistem. Rešenje može obuhvatiti toplotne pumpe kao glavni izvor toplote, EFFI radijacione panele i Climtec decentralizovanu ventilaciju sa rekuperacijom. Za prostore u kojima je kretanje vazduha deo tehnoloških ili eksploatacionih zahteva, koncept se dopunjuje rešenjima za organizovano i kontrolisano strujanje vazduha. Oprema i konfiguracija biraju se prema konkretnom objektu, a ne prema jednom standardnom paketu.',
    project2Applications: 'Sportske sale i fitnes centri, kafići i restorani, industrijski i logistički objekti, kulturni i javni prostori, prostori velike zapremine i drugi objekti sa promenljivim brojem korisnika ili posebnim zahtevima za razmenu vazduha.',
    project2LookingFor: 'Vlasnika ili operatera objekta, investitora/developera, izvođača rekonstrukcije ili lokalnog partnera za realizaciju',
    project2Stage: 'Osnovni koncept je razvijen; sektorske konfiguracije i pilot objekti spremni su za razgovor',
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
      <SiteHeader lang={lang} languagePath="/perspectives" />

      <section className="section" style={{ paddingTop: '9vh' }}>
        <div style={{ maxWidth: 920 }}>
          <p className="eyebrow">{business.operatingName}</p>
          <h1>{t.title}</h1>
          <p className="lead-small" style={{ maxWidth: 900 }}>{t.intro}</p>
        </div>
      </section>

      <section className="section" style={{ minHeight: '34vh' }}>
        <div className="section-heading" style={{ marginBottom: 32 }}>
          <p className="eyebrow">{t.projects}</p>
        </div>

        <div className="cards projects-list" style={{ gridTemplateColumns: 'minmax(0, 1fr)', gap: 24 }}>
          <article className="card project-card-wide" style={{ maxWidth: 980 }}>
            <h2>{t.projectTitle}</h2>
            <p>{t.projectDescription}</p>
            <p><strong>{t.lookingFor}:</strong> {t.projectLookingFor}</p>
            <p><strong>{t.stage}:</strong> {t.projectStage}</p>
            <a className="button button-light" href={projectPdf[lang]} download>
              {t.downloadPresentation}
            </a>
          </article>

          <article className="card project-card-wide" style={{ maxWidth: 980 }}>
            <h2>{t.project2Title}</h2>
            <p>{t.project2Description}</p>
            <p><strong>{t.lookingFor}:</strong> {t.project2LookingFor}</p>
            <p><strong>{t.stage}:</strong> {t.project2Stage}</p>
            <p>{t.project2Applications}</p>
            <span className="button button-light" aria-disabled="true" style={{ opacity: 0.55, cursor: 'default' }}>
              {t.presentationSoon}
            </span>
          </article>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--panel)' }}>
        <div style={{ maxWidth: 820 }}>
          <h2>{t.contactTitle}</h2>
          <p className="lead-small">{t.contactText}</p>
          <p className="lead-small" style={{ marginBottom: 0 }}>
            <a href={mailtoHref()} style={{ borderBottom: '1px solid currentColor' }}>
              {business.email}
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
