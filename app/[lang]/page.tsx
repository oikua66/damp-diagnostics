import { notFound } from 'next/navigation';
import { copy, languages, type Lang } from '../../lib/translations';
import SiteHeader from '../components/SiteHeader';
import { business, mailtoHref } from '../../lib/business';

type Props = { params: Promise<{ lang: string }> };

type Item = { title: string; text: string; href: string; cta: string };
type HomeCopy = {
  about: string;
  intro: string;
  directionsEyebrow: string;
  directionsTitle: string;
  directions: Item[];
  currentEyebrow: string;
  currentTitle: string;
  project1Title: string;
  project1Text: string;
  project2Title: string;
  project2Text: string;
  openProjects: string;
  contactTitle: string;
  contactText: string;
};

type LongCopy = {
  philosophyEyebrow: string;
  philosophyTitle: string;
  philosophy: string[];
  deliverablesEyebrow: string;
  deliverablesTitle: string;
  deliverables: string[];
  aiEyebrow: string;
  aiTitle: string;
  ai: string[];
};

const home: Record<Lang, HomeCopy> = {
  en: {
    about: 'About',
    intro: 'Independent engineering and business consulting for complex decisions: define the real objective, compare alternatives, prepare a workable brief and move from an idea to implementation.',
    directionsEyebrow: 'Where I can help',
    directionsTitle: 'Start with the task, not with the supplier.',
    directions: [
      { title: 'Projects for implementation', text: 'Developed technical and business concepts looking for clients, partners, investors or operators.', href: '/perspectives', cta: 'View projects' },
      { title: 'Tenders & equipment', text: 'Technical specification, alternatives, manufacturer search and independent comparison.', href: '/tender-equipment', cta: 'Open tender support' },
      { title: 'Strategic & technical consulting', text: 'Second opinion, problem framing, TOR development, option comparison and implementation roadmap.', href: '/about', cta: 'How I work' },
    ],
    currentEyebrow: 'Now in development',
    currentTitle: 'Current projects',
    project1Title: 'AI Energy Campus — Serbia',
    project1Text: 'Modular AI/Data Center infrastructure with local generation, cooling and storage; pilot 5 MW with scale-up potential to 50+ MW.',
    project2Title: 'Integrated climate & energy modernization',
    project2Text: 'Heat pumps, EFFI radiant heating, Climtec heat-recovery ventilation and controlled air movement for commercial, public and industrial buildings.',
    openProjects: 'Open all projects',
    contactTitle: 'Let’s discuss the task.',
    contactText: 'Send a short description of the project, decision or problem you would like to discuss. If there are documents, calculations or contractor proposals, they can be reviewed as part of the discussion.',
  },
  ru: {
    about: 'Обо мне',
    intro: 'Независимый инженерный и бизнес-консалтинг для сложных решений: определить реальную цель, сравнить варианты, подготовить рабочее ТЗ и перевести идею в реализацию.',
    directionsEyebrow: 'Чем могу помочь',
    directionsTitle: 'Начинаем с задачи, а не с поставщика.',
    directions: [
      { title: 'Проекты для реализации', text: 'Проработанные технические и бизнес-концепции для заказчиков, партнёров, инвесторов или операторов.', href: '/perspectives', cta: 'Смотреть проекты' },
      { title: 'Тендеры и оборудование', text: 'Техническое задание, аналоги, поиск производителей и независимое сравнение.', href: '/tender-equipment', cta: 'Открыть направление' },
      { title: 'Стратегический и технический консалтинг', text: 'Второе мнение, постановка задачи, разработка ТЗ, сравнение вариантов и дорожная карта.', href: '/about', cta: 'Как я работаю' },
    ],
    currentEyebrow: 'Сейчас в работе',
    currentTitle: 'Текущие проекты',
    project1Title: 'AI Energy Campus — Serbia',
    project1Text: 'Модульная инфраструктура AI/Data Center с локальной генерацией, охлаждением и накоплением энергии: пилот 5 МВт с масштабированием до 50+ МВт.',
    project2Title: 'Комплексная модернизация микроклимата и энергосистем',
    project2Text: 'Тепловые насосы, лучистое отопление EFFI, вентиляция Climtec с рекуперацией и управляемое движение воздуха для коммерческих, общественных и промышленных зданий.',
    openProjects: 'Открыть все проекты',
    contactTitle: 'Давайте обсудим задачу.',
    contactText: 'Пришлите короткое описание проекта, решения или проблемы, которую вы хотите обсудить. Если есть документы, расчёты или предложения подрядчиков, их можно разобрать в рамках консультации.',
  },
  uk: {
    about: 'Про мене',
    intro: 'Незалежний інженерний та бізнес-консалтинг для складних рішень: визначити реальну мету, порівняти варіанти, підготувати робоче ТЗ і перевести ідею в реалізацію.',
    directionsEyebrow: 'Чим можу допомогти',
    directionsTitle: 'Починаємо із задачі, а не з постачальника.',
    directions: [
      { title: 'Проєкти для реалізації', text: 'Опрацьовані технічні та бізнес-концепції для замовників, партнерів, інвесторів або операторів.', href: '/perspectives', cta: 'Дивитися проєкти' },
      { title: 'Тендери та обладнання', text: 'Технічне завдання, аналоги, пошук виробників і незалежне порівняння.', href: '/tender-equipment', cta: 'Відкрити напрям' },
      { title: 'Стратегічний і технічний консалтинг', text: 'Друга думка, постановка задачі, розробка ТЗ, порівняння варіантів і дорожня карта.', href: '/about', cta: 'Як я працюю' },
    ],
    currentEyebrow: 'Зараз у роботі',
    currentTitle: 'Поточні проєкти',
    project1Title: 'AI Energy Campus — Serbia',
    project1Text: 'Модульна інфраструктура AI/Data Center з локальною генерацією, охолодженням і накопиченням енергії: пілот 5 МВт із масштабуванням до 50+ МВт.',
    project2Title: 'Комплексна модернізація мікроклімату та енергосистем',
    project2Text: 'Теплові насоси, променеве опалення EFFI, вентиляція Climtec з рекуперацією та керований рух повітря для комерційних, громадських і промислових будівель.',
    openProjects: 'Відкрити всі проєкти',
    contactTitle: 'Давайте обговоримо задачу.',
    contactText: 'Надішліть короткий опис проєкту, рішення або проблеми, яку ви хочете обговорити. Якщо є документи, розрахунки чи пропозиції підрядників, їх можна розглянути в межах консультації.',
  },
  sr: {
    about: 'O meni',
    intro: 'Nezavisni inženjerski i poslovni konsalting za složene odluke: definisati stvarni cilj, uporediti opcije, pripremiti operativni zadatak i prevesti ideju u realizaciju.',
    directionsEyebrow: 'Kako mogu da pomognem',
    directionsTitle: 'Počinjemo od zadatka, a ne od dobavljača.',
    directions: [
      { title: 'Projekti za realizaciju', text: 'Razrađeni tehnički i poslovni koncepti za naručioce, partnere, investitore ili operatere.', href: '/perspectives', cta: 'Pogledaj projekte' },
      { title: 'Tenderi i oprema', text: 'Tehnička specifikacija, alternative, pronalaženje proizvođača i nezavisno poređenje.', href: '/tender-equipment', cta: 'Otvori podršku' },
      { title: 'Strateški i tehnički konsalting', text: 'Drugo mišljenje, definisanje zadatka, tehnički zadatak, poređenje opcija i plan realizacije.', href: '/about', cta: 'Kako radim' },
    ],
    currentEyebrow: 'Trenutno u radu',
    currentTitle: 'Aktuelni projekti',
    project1Title: 'AI Energy Campus — Serbia',
    project1Text: 'Modularna AI/Data Center infrastruktura sa lokalnom proizvodnjom energije, hlađenjem i skladištenjem: pilot 5 MW sa skaliranjem na 50+ MW.',
    project2Title: 'Kompleksna modernizacija mikroklime i energetskih sistema',
    project2Text: 'Toplotne pumpe, EFFI radijaciono grejanje, Climtec ventilacija sa rekuperacijom i kontrolisano strujanje vazduha za poslovne, javne i industrijske objekte.',
    openProjects: 'Otvori sve projekte',
    contactTitle: 'Hajde da razgovaramo o zadatku.',
    contactText: 'Pošaljite kratak opis projekta, odluke ili problema o kojem želite da razgovaramo. Ako postoje dokumenti, proračuni ili ponude izvođača, mogu se analizirati u okviru konsultacije.',
  },
};

const longCopy: Record<Lang, LongCopy> = {
  en: {
    philosophyEyebrow: 'Philosophy',
    philosophyTitle: 'Finding the essential. Eliminating the unnecessary.',
    philosophy: [
      'Modern projects are surrounded by technologies, vendors, platforms, methodologies and attractive ready-made solutions. Too often the proposed solution becomes more complicated than the problem it is meant to solve.',
      'My approach is the opposite. First define the actual goal. Then understand what the result must do for the client. Only after that should we look at equipment, contractors, software, technologies or investments.',
      'A good consulting result is not the thickest report. It is a decision that is clear enough to act on, simple enough to control and robust enough to remain sensible when real-world constraints appear.',
      'Sometimes the right answer is a new project. Sometimes it is improving what already exists. Sometimes it is deciding not to buy, build or implement anything at all. That can also be a successful result.',
    ],
    deliverablesEyebrow: 'How I work',
    deliverablesTitle: 'From a vague problem to an actionable brief.',
    deliverables: [
      'Define the real objective and the result that has to be achieved.',
      'Inventory existing resources, constraints, people, equipment, money, time and available competencies.',
      'Separate symptoms from causes and assumptions from facts.',
      'Compare realistic alternatives rather than one supplier’s preferred solution.',
      'Turn the decision into a project statement, technical brief, contractor requirements, RFP, comparison or implementation roadmap.',
      'Stay independent from vendors and contractors so the recommendation remains aligned with the client’s interest.',
    ],
    aiEyebrow: 'Technology',
    aiTitle: 'AI is a tool, not the goal.',
    ai: [
      'AI is useful for research, document analysis, comparison of alternatives, calculations, translation, drafting and routine work. It can dramatically accelerate the analytical part of consulting.',
      'But AI does not decide what the real problem is, which assumptions are dangerous, what trade-offs are acceptable or who is responsible for the final decision. Those remain human tasks.',
      'I use AI where it reduces time and noise — not where it replaces judgement.',
    ],
  },
  ru: {
    philosophyEyebrow: 'Философия',
    philosophyTitle: 'Находить главное. Отсекать лишнее.',
    philosophy: [
      'Современные проекты окружены технологиями, поставщиками, платформами, методиками и красивыми готовыми решениями. Слишком часто предлагаемое решение оказывается сложнее самой проблемы, которую оно должно решать.',
      'Мой подход обратный. Сначала нужно определить реальную цель. Затем — что именно должно получиться на выходе и как этот результат должен работать для заказчика. И только после этого имеет смысл обсуждать оборудование, подрядчиков, программное обеспечение, технологии или инвестиции.',
      'Хороший результат консалтинга — не самый толстый отчёт. Это решение, которое достаточно понятно, чтобы его реализовать, достаточно просто, чтобы его контролировать, и достаточно устойчиво, чтобы оно не развалилось при встрече с реальными ограничениями.',
      'Иногда правильный ответ — новый проект. Иногда — улучшение того, что уже есть. Иногда — решение вообще ничего не покупать, не строить и не внедрять. Это тоже может быть успешным результатом.',
    ],
    deliverablesEyebrow: 'Как я работаю',
    deliverablesTitle: 'От размытой проблемы — к рабочему заданию.',
    deliverables: [
      'Определить реальную цель и конкретный результат, который должен быть достигнут.',
      'Провести инвентаризацию ресурсов и ограничений: деньги, помещения, оборудование, люди, компетенции, время и уже существующие процессы.',
      'Отделить симптомы от причин, а предположения — от фактов.',
      'Сравнить реальные альтернативы, а не только решение, которое удобнее конкретному поставщику.',
      'Превратить решение в постановку проекта, техническое задание, требования к подрядчикам, RFP, сравнительный анализ или дорожную карту реализации.',
      'Сохранять независимость от поставщиков и подрядчиков, чтобы рекомендация оставалась в интересах заказчика.',
    ],
    aiEyebrow: 'Технологии',
    aiTitle: 'AI — инструмент, а не цель.',
    ai: [
      'AI полезен для поиска информации, анализа документов, сравнения вариантов, расчётов, перевода, подготовки черновиков и рутинной работы. Он может сильно ускорить аналитическую часть консалтинга.',
      'Но AI не определяет, в чём реальная проблема, какие предположения опасны, какие компромиссы допустимы и кто несёт ответственность за решение. Это остаётся работой человека.',
      'Я использую AI там, где он сокращает время и шум, а не там, где он подменяет суждение.',
    ],
  },
  uk: {
    philosophyEyebrow: 'Філософія',
    philosophyTitle: 'Знаходити головне. Відсікати зайве.',
    philosophy: [
      'Сучасні проєкти оточені технологіями, постачальниками, платформами, методиками та красивими готовими рішеннями. Надто часто запропоноване рішення виявляється складнішим за саму проблему, яку воно має вирішити.',
      'Мій підхід протилежний. Спочатку потрібно визначити реальну мету. Потім — що саме має бути отримано на виході і як цей результат має працювати для замовника. І лише після цього є сенс обговорювати обладнання, підрядників, програмне забезпечення, технології чи інвестиції.',
      'Хороший результат консалтингу — не найтовстіший звіт. Це рішення, яке достатньо зрозуміле, щоб його реалізувати, достатньо просте, щоб його контролювати, і достатньо стійке, щоб воно не втратило сенс при зіткненні з реальними обмеженнями.',
      'Іноді правильна відповідь — новий проєкт. Іноді — покращення того, що вже є. Іноді — рішення взагалі нічого не купувати, не будувати і не впроваджувати. Це також може бути успішним результатом.',
    ],
    deliverablesEyebrow: 'Як я працюю',
    deliverablesTitle: 'Від нечіткої проблеми — до робочого завдання.',
    deliverables: [
      'Визначити реальну мету та конкретний результат, якого потрібно досягти.',
      'Провести інвентаризацію ресурсів та обмежень: гроші, приміщення, обладнання, люди, компетенції, час і вже наявні процеси.',
      'Відокремити симптоми від причин, а припущення — від фактів.',
      'Порівняти реальні альтернативи, а не лише рішення, зручне конкретному постачальнику.',
      'Перетворити рішення на постановку проєкту, технічне завдання, вимоги до підрядників, RFP, порівняльний аналіз або дорожню карту реалізації.',
      'Зберігати незалежність від постачальників і підрядників, щоб рекомендація залишалась в інтересах замовника.',
    ],
    aiEyebrow: 'Технології',
    aiTitle: 'AI — інструмент, а не мета.',
    ai: [
      'AI корисний для пошуку інформації, аналізу документів, порівняння варіантів, розрахунків, перекладу, підготовки чернеток і рутинної роботи. Він може суттєво прискорити аналітичну частину консалтингу.',
      'Але AI не визначає, у чому реальна проблема, які припущення небезпечні, які компроміси прийнятні і хто несе відповідальність за рішення. Це залишається роботою людини.',
      'Я використовую AI там, де він скорочує час і шум, а не там, де він підміняє судження.',
    ],
  },
  sr: {
    philosophyEyebrow: 'Filozofija',
    philosophyTitle: 'Pronaći suštinu. Ukloniti suvišno.',
    philosophy: [
      'Savremeni projekti okruženi su tehnologijama, dobavljačima, platformama, metodologijama i privlačnim gotovim rešenjima. Prečesto predloženo rešenje postane složenije od problema koji treba da reši.',
      'Moj pristup je obrnut. Prvo treba definisati stvarni cilj. Zatim utvrditi šta tačno treba da bude rezultat i kako taj rezultat treba da funkcioniše za klijenta. Tek tada ima smisla razgovarati o opremi, izvođačima, softveru, tehnologijama ili investicijama.',
      'Dobar rezultat konsaltinga nije najdeblji izveštaj. To je odluka koja je dovoljno jasna da se sprovede, dovoljno jednostavna da se kontroliše i dovoljno robusna da ostane razumna kada se pojave realna ograničenja.',
      'Ponekad je pravi odgovor novi projekat. Ponekad poboljšanje onoga što već postoji. Ponekad odluka da se ništa ne kupi, ne izgradi i ne uvede. I to može biti uspešan rezultat.',
    ],
    deliverablesEyebrow: 'Kako radim',
    deliverablesTitle: 'Od nejasnog problema do operativnog zadatka.',
    deliverables: [
      'Definisati stvarni cilj i konkretan rezultat koji treba postići.',
      'Sagledati postojeće resurse i ograničenja: novac, prostor, opremu, ljude, kompetencije, vreme i postojeće procese.',
      'Odvojiti simptome od uzroka, a pretpostavke od činjenica.',
      'Uporediti realne alternative, a ne samo rešenje koje odgovara jednom dobavljaču.',
      'Pretvoriti odluku u projektni zadatak, tehničku specifikaciju, zahteve za izvođače, RFP, poređenje ili plan realizacije.',
      'Ostati nezavisan od dobavljača i izvođača kako bi preporuka ostala u interesu klijenta.',
    ],
    aiEyebrow: 'Tehnologija',
    aiTitle: 'AI je alat, a ne cilj.',
    ai: [
      'AI je koristan za istraživanje, analizu dokumenata, poređenje alternativa, proračune, prevod, pripremu nacrta i rutinski rad. Može značajno ubrzati analitički deo konsaltinga.',
      'Ali AI ne određuje šta je stvarni problem, koje su pretpostavke opasne, koji su kompromisi prihvatljivi i ko snosi odgovornost za odluku. To ostaje ljudski posao.',
      'AI koristim tamo gde smanjuje vreme i buku, a ne tamo gde treba da zameni prosuđivanje.',
    ],
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
  const h = home[lang];
  const e = longCopy[lang];

  return (
    <main>
      <SiteHeader lang={lang} languagePath="" />

      <section className="hero" id="top">
        <p className="eyebrow">{business.operatingName}</p>
        <h1>{t.hero}</h1>
        <p className="lead">{h.intro}</p>
        <div className="hero-actions">
          <a className="button button-dark" href="#services">{t.nav.services}</a>
          <a className="button button-light" href={`/${lang}/perspectives`}>{h.openProjects}</a>
        </div>
      </section>

      <section className="section split" id="philosophy">
        <div>
          <p className="eyebrow">{e.philosophyEyebrow}</p>
          <h2>{e.philosophyTitle}</h2>
        </div>
        <div className="prose">
          {e.philosophy.map((p) => <p key={p}>{p}</p>)}
        </div>
      </section>

      <section className="section" id="services">
        <div className="section-heading">
          <p className="eyebrow">{h.directionsEyebrow}</p>
          <h2>{h.directionsTitle}</h2>
        </div>
        <div className="cards home-direction-grid">
          {h.directions.map((item, index) => (
            <article className="card home-direction-card" key={item.title}>
              <span className="card-number">0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <a className="button button-light" href={`/${lang}${item.href}`}>{item.cta}</a>
            </article>
          ))}
        </div>
      </section>

      <section className="section split" id="approach">
        <div>
          <p className="eyebrow">{e.deliverablesEyebrow}</p>
          <h2>{e.deliverablesTitle}</h2>
        </div>
        <div className="prose">
          {e.deliverables.map((item) => <p key={item}>— {item}</p>)}
        </div>
      </section>

      <section className="section split" id="ai">
        <div>
          <p className="eyebrow">{e.aiEyebrow}</p>
          <h2>{e.aiTitle}</h2>
        </div>
        <div className="prose">
          {e.ai.map((p) => <p key={p}>{p}</p>)}
        </div>
      </section>

      <section className="section" id="current-projects">
        <div className="section-heading">
          <p className="eyebrow">{h.currentEyebrow}</p>
          <h2>{h.currentTitle}</h2>
        </div>
        <div className="home-project-grid">
          <article className="home-project-card"><h3>{h.project1Title}</h3><p>{h.project1Text}</p></article>
          <article className="home-project-card"><h3>{h.project2Title}</h3><p>{h.project2Text}</p></article>
        </div>
        <div className="hero-actions"><a className="button button-dark" href={`/${lang}/perspectives`}>{h.openProjects}</a></div>
      </section>

      <section className="section contact">
        <p className="eyebrow">{t.contact}</p>
        <h2>{h.contactTitle}</h2>
        <p>{h.contactText}</p>
        <a className="button button-dark" href={mailtoHref()}>{business.email}</a>
      </section>
    </main>
  );
}
