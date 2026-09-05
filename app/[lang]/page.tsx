import { notFound } from 'next/navigation';
import { copy, languages, type Lang } from '../../lib/translations';
import SiteHeader from '../components/SiteHeader';

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
  approachEyebrow: string;
  approachTitle: string;
  approachText: string;
  approachCta: string;
  contactTitle: string;
  contactText: string;
};

const home: Record<Lang, HomeCopy> = {
  en: {
    about: 'About',
    intro: 'Independent engineering and business consulting for complex decisions: define the real objective, compare alternatives, prepare a workable brief and move from an idea to implementation.',
    directionsEyebrow: 'Where I can help', directionsTitle: 'Start with the task, not with the supplier.',
    directions: [
      { title: 'Projects for implementation', text: 'Developed technical and business concepts looking for clients, partners, investors or operators.', href: '/perspectives', cta: 'View projects' },
      { title: 'Tenders & equipment', text: 'Technical specification, alternatives, manufacturer search and independent comparison.', href: '/tender-equipment', cta: 'Open tender support' },
      { title: 'Strategic & technical consulting', text: 'Second opinion, problem framing, TOR development, option comparison and implementation roadmap.', href: '/about', cta: 'How I work' },
    ],
    currentEyebrow: 'Now in development', currentTitle: 'Current projects',
    project1Title: 'AI Energy Campus — Serbia', project1Text: 'Modular AI/Data Center infrastructure with local generation, cooling and storage; pilot 5 MW with scale-up potential to 50+ MW.',
    project2Title: 'Integrated climate & energy modernization', project2Text: 'Heat pumps, EFFI radiant heating, Climtec heat-recovery ventilation and controlled air movement for commercial, public and industrial buildings.',
    openProjects: 'Open all projects',
    approachEyebrow: 'Approach', approachTitle: 'Finding the essential. Eliminating the unnecessary.',
    approachText: 'First define the real goal and required result. Then compare resources, constraints and realistic alternatives before choosing equipment, contractors, technology or investment.',
    approachCta: 'Read the methodology', contactTitle: 'Have a task that does not fit a standard category?', contactText: 'Send a short description. The first step is to understand what actually needs to be done.',
  },
  ru: {
    about: 'Обо мне',
    intro: 'Независимый инженерный и бизнес-консалтинг для сложных решений: определить реальную цель, сравнить варианты, подготовить рабочее ТЗ и перевести идею в реализацию.',
    directionsEyebrow: 'Чем могу помочь', directionsTitle: 'Начинаем с задачи, а не с поставщика.',
    directions: [
      { title: 'Проекты для реализации', text: 'Проработанные технические и бизнес-концепции для заказчиков, партнёров, инвесторов или операторов.', href: '/perspectives', cta: 'Смотреть проекты' },
      { title: 'Тендеры и оборудование', text: 'Техническое задание, аналоги, поиск производителей и независимое сравнение.', href: '/tender-equipment', cta: 'Открыть направление' },
      { title: 'Стратегический и технический консалтинг', text: 'Второе мнение, постановка задачи, разработка ТЗ, сравнение вариантов и дорожная карта.', href: '/about', cta: 'Как я работаю' },
    ],
    currentEyebrow: 'Сейчас в работе', currentTitle: 'Текущие проекты',
    project1Title: 'AI Energy Campus — Serbia', project1Text: 'Модульная инфраструктура AI/Data Center с локальной генерацией, охлаждением и накоплением энергии: пилот 5 МВт с масштабированием до 50+ МВт.',
    project2Title: 'Комплексная модернизация микроклимата и энергосистем', project2Text: 'Тепловые насосы, лучистое отопление EFFI, вентиляция Climtec с рекуперацией и управляемое движение воздуха для коммерческих, общественных и промышленных зданий.',
    openProjects: 'Открыть все проекты',
    approachEyebrow: 'Подход', approachTitle: 'Находить главное. Отсекать лишнее.',
    approachText: 'Сначала определяем реальную цель и требуемый результат. Затем оцениваем ресурсы, ограничения и реальные альтернативы — и только после этого выбираем оборудование, подрядчиков, технологии или инвестиции.',
    approachCta: 'Открыть методологию', contactTitle: 'Есть задача, которая не укладывается в стандартную категорию?', contactText: 'Пришлите короткое описание. Первый шаг — понять, что действительно нужно делать.',
  },
  uk: {
    about: 'Про мене',
    intro: 'Незалежний інженерний та бізнес-консалтинг для складних рішень: визначити реальну мету, порівняти варіанти, підготувати робоче ТЗ і перевести ідею в реалізацію.',
    directionsEyebrow: 'Чим можу допомогти', directionsTitle: 'Починаємо із задачі, а не з постачальника.',
    directions: [
      { title: 'Проєкти для реалізації', text: 'Опрацьовані технічні та бізнес-концепції для замовників, партнерів, інвесторів або операторів.', href: '/perspectives', cta: 'Дивитися проєкти' },
      { title: 'Тендери та обладнання', text: 'Технічне завдання, аналоги, пошук виробників і незалежне порівняння.', href: '/tender-equipment', cta: 'Відкрити напрям' },
      { title: 'Стратегічний і технічний консалтинг', text: 'Друга думка, постановка задачі, розробка ТЗ, порівняння варіантів і дорожня карта.', href: '/about', cta: 'Як я працюю' },
    ],
    currentEyebrow: 'Зараз у роботі', currentTitle: 'Поточні проєкти',
    project1Title: 'AI Energy Campus — Serbia', project1Text: 'Модульна інфраструктура AI/Data Center з локальною генерацією, охолодженням і накопиченням енергії: пілот 5 МВт із масштабуванням до 50+ МВт.',
    project2Title: 'Комплексна модернізація мікроклімату та енергосистем', project2Text: 'Теплові насоси, променеве опалення EFFI, вентиляція Climtec з рекуперацією та керований рух повітря для комерційних, громадських і промислових будівель.',
    openProjects: 'Відкрити всі проєкти',
    approachEyebrow: 'Підхід', approachTitle: 'Знаходити головне. Відсікати зайве.',
    approachText: 'Спочатку визначаємо реальну мету та потрібний результат. Потім оцінюємо ресурси, обмеження та реальні альтернативи — і лише після цього обираємо обладнання, підрядників, технології чи інвестиції.',
    approachCta: 'Відкрити методологію', contactTitle: 'Є задача, яка не вкладається у стандартну категорію?', contactText: 'Надішліть короткий опис. Перший крок — зрозуміти, що насправді потрібно робити.',
  },
  sr: {
    about: 'O meni',
    intro: 'Nezavisni inženjerski i poslovni konsalting za složene odluke: definisati stvarni cilj, uporediti opcije, pripremiti operativni zadatak i prevesti ideju u realizaciju.',
    directionsEyebrow: 'Kako mogu da pomognem', directionsTitle: 'Počinjemo od zadatka, a ne od dobavljača.',
    directions: [
      { title: 'Projekti za realizaciju', text: 'Razrađeni tehnički i poslovni koncepti za naručioce, partnere, investitore ili operatere.', href: '/perspectives', cta: 'Pogledaj projekte' },
      { title: 'Tenderi i oprema', text: 'Tehnička specifikacija, alternative, pronalaženje proizvođača i nezavisno poređenje.', href: '/tender-equipment', cta: 'Otvori podršku' },
      { title: 'Strateški i tehnički konsalting', text: 'Drugo mišljenje, definisanje zadatka, tehnički zadatak, poređenje opcija i plan realizacije.', href: '/about', cta: 'Kako radim' },
    ],
    currentEyebrow: 'Trenutno u radu', currentTitle: 'Aktuelni projekti',
    project1Title: 'AI Energy Campus — Serbia', project1Text: 'Modularna AI/Data Center infrastruktura sa lokalnom proizvodnjom energije, hlađenjem i skladištenjem: pilot 5 MW sa skaliranjem na 50+ MW.',
    project2Title: 'Kompleksna modernizacija mikroklime i energetskih sistema', project2Text: 'Toplotne pumpe, EFFI radijaciono grejanje, Climtec ventilacija sa rekuperacijom i kontrolisano strujanje vazduha za poslovne, javne i industrijske objekte.',
    openProjects: 'Otvori sve projekte',
    approachEyebrow: 'Pristup', approachTitle: 'Pronaći suštinu. Ukloniti suvišno.',
    approachText: 'Prvo definišemo stvarni cilj i potreban rezultat. Zatim procenjujemo resurse, ograničenja i realne alternative, a tek onda biramo opremu, izvođače, tehnologije ili investicije.',
    approachCta: 'Otvori metodologiju', contactTitle: 'Imate zadatak koji ne pripada standardnoj kategoriji?', contactText: 'Pošaljite kratak opis. Prvi korak je razumeti šta zaista treba uraditi.',
  },
};

export function generateStaticParams() { return languages.map((lang) => ({ lang })); }

export default async function LocalizedHome({ params }: Props) {
  const { lang: rawLang } = await params;
  if (!languages.includes(rawLang as Lang)) notFound();
  const lang = rawLang as Lang;
  const t = copy[lang];
  const h = home[lang];

  return (
    <main>
      <SiteHeader lang={lang} languagePath="" />
      <section className="hero" id="top"><p className="eyebrow">Koretskiy Consulting</p><h1>{t.hero}</h1><p className="lead">{h.intro}</p><div className="hero-actions"><a className="button button-dark" href="#services">{t.nav.services}</a><a className="button button-light" href={`/${lang}/perspectives`}>{h.openProjects}</a></div></section>
      <section className="section" id="services"><div className="section-heading"><p className="eyebrow">{h.directionsEyebrow}</p><h2>{h.directionsTitle}</h2></div><div className="cards home-direction-grid">{h.directions.map((item, index) => <article className="card home-direction-card" key={item.title}><span className="card-number">0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p><a className="button button-light" href={`/${lang}${item.href}`}>{item.cta}</a></article>)}</div></section>
      <section className="section" id="current-projects"><div className="section-heading"><p className="eyebrow">{h.currentEyebrow}</p><h2>{h.currentTitle}</h2></div><div className="home-project-grid"><article className="home-project-card"><h3>{h.project1Title}</h3><p>{h.project1Text}</p></article><article className="home-project-card"><h3>{h.project2Title}</h3><p>{h.project2Text}</p></article></div><div className="hero-actions"><a className="button button-dark" href={`/${lang}/perspectives`}>{h.openProjects}</a></div></section>
      <section className="section split" id="approach"><div><p className="eyebrow">{h.approachEyebrow}</p><h2>{h.approachTitle}</h2></div><div className="prose"><p>{h.approachText}</p><a className="button button-light" href={`/${lang}/about`}>{h.approachCta}</a></div></section>
      <section className="section contact" id="contact"><p className="eyebrow">{t.contact}</p><h2>{h.contactTitle}</h2><p>{h.contactText}</p><a className="button button-dark" href="mailto:consulting@koretskiy.com">consulting@koretskiy.com</a></section>
    </main>
  );
}
