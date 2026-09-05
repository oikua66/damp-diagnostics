import { notFound } from 'next/navigation';
import { languages, type Lang } from '../../../lib/translations';
import SiteHeader from '../../components/SiteHeader';

type Props = { params: Promise<{ lang: string }> };

export function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

const about = {
  en: {
    label: 'About',
    name: 'Oleksandr Koretskiy',
    title: 'Engineer, independent expert and decision partner.',
    intro: 'I work with complex technical and business problems where the main difficulty is usually not a lack of technology, but an unclear objective, conflicting constraints, too many possible solutions, or too much dependence on suppliers and contractors.',
    blocks: [
      ['Experience', ['More than 35 years in engineering, electromechanics, energy, construction and technical management.', 'More than 10 years of work as an independent expert and consultant, reviewing technical decisions, project concepts, contractor proposals and investment logic.', 'Professional experience across Ukraine, Israel and Serbia.']],
      ['Education', ['Electrical Machines, Kharkiv Polytechnic Institute, 1989.', 'PhD in Electromechanics, 1993.', 'Master’s degree in Industrial Management, 1999.']],
      ['Management and project background', ['I have led engineering and construction-related businesses and project teams.', 'My work has included technical specifications, procurement logic, contractor selection, project review, due diligence, energy systems, industrial facilities and practical problem solving in buildings.']],
      ['How I work today', ['I do not sell a predefined product or contractor solution.', 'My role is to define the real objective, identify the constraints, separate symptoms from causes, compare realistic alternatives and turn the result into a clear brief, technical specification, decision memo or implementation roadmap.', 'If the best answer is to use what already exists, simplify the project, postpone a purchase, or not build something at all, that is also a valid consulting result.']],
      ['Where AI fits', ['I use AI as a research and analytical tool: for document review, comparison, calculations, translation, drafting and routine work.', 'AI accelerates the process, but it does not replace engineering judgement, responsibility or the need to ask the right question.']],
    ],
    closing: 'The common principle behind my work is simple: find the essential, remove the unnecessary, and make the decision understandable enough to execute and control.',
    back: 'Back to main page',
  },
  ru: {
    label: 'Обо мне',
    name: 'Александр Корецкий',
    title: 'Инженер, независимый эксперт и партнёр по принятию решений.',
    intro: 'Я работаю со сложными техническими и бизнес-задачами, где главная проблема обычно не в отсутствии технологий, а в неясной цели, противоречивых ограничениях, слишком большом количестве вариантов или чрезмерной зависимости от поставщиков и подрядчиков.',
    blocks: [
      ['Опыт', ['Более 35 лет в инженерии, электромеханике, энергетике, строительстве и техническом управлении.', 'Более 10 лет работы как независимый эксперт и консультант: анализ технических решений, проектных концепций, предложений подрядчиков и инвестиционной логики.', 'Профессиональный опыт в Украине, Израиле и Сербии.']],
      ['Образование', ['Харьковский политехнический институт, специальность «Электрические машины», 1989.', 'Кандидат технических наук / PhD в области электромеханики, 1993.', 'Магистр промышленного менеджмента, 1999.']],
      ['Управление и проекты', ['Я руководил инженерными и строительными бизнесами и проектными командами.', 'В моей практике — разработка технических заданий, логика закупок, выбор подрядчиков, проверка проектов, due diligence, энергетические системы, промышленные объекты и практические инженерные задачи в зданиях.']],
      ['Как я работаю сейчас', ['Я не продаю заранее выбранное оборудование, технологию или подрядчика.', 'Моя задача — определить реальную цель, выявить ограничения, отделить симптомы от причин, сравнить реальные альтернативы и превратить результат в понятное задание, ТЗ, аналитическую записку или дорожную карту реализации.', 'Если правильный ответ — использовать то, что уже есть, упростить проект, отложить покупку или вообще ничего не строить, это тоже нормальный результат консалтинга.']],
      ['Где здесь AI', ['Я использую AI как исследовательский и аналитический инструмент: для анализа документов, сравнения вариантов, расчётов, перевода, подготовки черновиков и рутинной работы.', 'AI ускоряет процесс, но не заменяет инженерное суждение, ответственность и необходимость правильно поставить вопрос.']],
    ],
    closing: 'Общий принцип моей работы простой: найти главное, отсечь лишнее и сделать решение достаточно понятным, чтобы его можно было реализовать и контролировать.',
    back: 'На главную',
  },
  uk: {
    label: 'Про мене',
    name: 'Олександр Корецький',
    title: 'Інженер, незалежний експерт і партнер у прийнятті рішень.',
    intro: 'Я працюю зі складними технічними та бізнес-завданнями, де головна проблема зазвичай не у відсутності технологій, а в нечіткій меті, суперечливих обмеженнях, надто великій кількості варіантів або надмірній залежності від постачальників і підрядників.',
    blocks: [
      ['Досвід', ['Понад 35 років в інженерії, електромеханіці, енергетиці, будівництві та технічному управлінні.', 'Понад 10 років роботи як незалежний експерт і консультант: аналіз технічних рішень, проєктних концепцій, пропозицій підрядників та інвестиційної логіки.', 'Професійний досвід в Україні, Ізраїлі та Сербії.']],
      ['Освіта', ['Харківський політехнічний інститут, спеціальність «Електричні машини», 1989.', 'Кандидат технічних наук / PhD у галузі електромеханіки, 1993.', 'Магістр промислового менеджменту, 1999.']],
      ['Управління та проєкти', ['Я керував інженерними й будівельними бізнесами та проєктними командами.', 'У моїй практиці — технічні завдання, логіка закупівель, вибір підрядників, перевірка проєктів, due diligence, енергетичні системи, промислові об’єкти та практичні інженерні задачі у будівлях.']],
      ['Як я працюю зараз', ['Я не продаю заздалегідь обране обладнання, технологію або підрядника.', 'Моя задача — визначити реальну мету, виявити обмеження, відокремити симптоми від причин, порівняти реальні альтернативи та перетворити результат на зрозуміле завдання, ТЗ, аналітичну записку або дорожню карту реалізації.', 'Якщо правильна відповідь — використати те, що вже є, спростити проєкт, відкласти покупку або взагалі нічого не будувати, це також нормальний результат консалтингу.']],
      ['Де тут AI', ['Я використовую AI як дослідницький та аналітичний інструмент: для аналізу документів, порівняння варіантів, розрахунків, перекладу, підготовки чернеток і рутинної роботи.', 'AI прискорює процес, але не замінює інженерне судження, відповідальність і необхідність правильно поставити питання.']],
    ],
    closing: 'Загальний принцип моєї роботи простий: знайти головне, відсікти зайве і зробити рішення достатньо зрозумілим, щоб його можна було реалізувати та контролювати.',
    back: 'На головну',
  },
  sr: {
    label: 'O meni',
    name: 'Oleksandr Koretskiy',
    title: 'Inženjer, nezavisni ekspert i partner za donošenje odluka.',
    intro: 'Radim na složenim tehničkim i poslovnim problemima gde glavni izazov obično nije nedostatak tehnologije, već nejasan cilj, sukobljena ograničenja, previše mogućih rešenja ili prevelika zavisnost od dobavljača i izvođača.',
    blocks: [
      ['Iskustvo', ['Više od 35 godina u inženjerstvu, elektromehanici, energetici, građevinarstvu i tehničkom upravljanju.', 'Više od 10 godina rada kao nezavisni ekspert i konsultant: analiza tehničkih odluka, projektnih koncepata, ponuda izvođača i investicione logike.', 'Profesionalno iskustvo u Ukrajini, Izraelu i Srbiji.']],
      ['Obrazovanje', ['Harkovski politehnički institut, smer Električne mašine, 1989.', 'Doktorat / PhD iz oblasti elektromehanike, 1993.', 'Master iz industrijskog menadžmenta, 1999.']],
      ['Upravljanje i projekti', ['Vodio sam inženjerske i građevinske firme i projektne timove.', 'Moje iskustvo obuhvata tehničke zahteve, logiku nabavke, izbor izvođača, reviziju projekata, due diligence, energetske sisteme, industrijske objekte i praktično rešavanje tehničkih problema u zgradama.']],
      ['Kako radim danas', ['Ne prodajem unapred izabranu opremu, tehnologiju ili izvođača.', 'Moj zadatak je da definišem stvarni cilj, utvrdim ograničenja, odvojim simptome od uzroka, uporedim realne alternative i rezultat pretvorim u jasan zadatak, tehničku specifikaciju, memorandum odluke ili mapu realizacije.', 'Ako je najbolji odgovor da se iskoristi ono što već postoji, da se projekat pojednostavi, kupovina odloži ili da se nešto uopšte ne gradi, i to je validan rezultat konsaltinga.']],
      ['Gde se uklapa AI', ['AI koristim kao istraživački i analitički alat: za pregled dokumenata, poređenje opcija, proračune, prevod, izradu nacrta i rutinski rad.', 'AI ubrzava proces, ali ne zamenjuje inženjersko prosuđivanje, odgovornost niti potrebu da se postavi pravo pitanje.']],
    ],
    closing: 'Zajednički princip mog rada je jednostavan: pronaći suštinu, ukloniti nepotrebno i doneti odluku dovoljno jasnu da može da se sprovede i kontroliše.',
    back: 'Nazad na početnu',
  },
} as const;

export default async function AboutPage({ params }: Props) {
  const { lang: rawLang } = await params;
  if (!languages.includes(rawLang as Lang)) notFound();
  const lang = rawLang as Lang;
  const t = about[lang];

  return (
    <main>
      <SiteHeader lang={lang} languagePath="/about" />

      <section className="about-hero">
        <div>
          <p className="eyebrow">{t.label}</p>
          <h1>{t.name}</h1>
          <p className="about-title">{t.title}</p>
          <p className="about-intro">{t.intro}</p>
        </div>
        <div className="about-photo-placeholder" aria-label="Portrait of Oleksandr Koretskiy">
          <span>Portrait</span>
        </div>
      </section>

      <section className="about-grid">
        {t.blocks.map(([heading, items], index) => (
          <article className="about-block" key={heading}>
            <span className="card-number">0{index + 1}</span>
            <h2>{heading}</h2>
            {(items as readonly string[]).map((item) => <p key={item}>{item}</p>)}
          </article>
        ))}
      </section>

      <section className="section split">
        <div><p className="eyebrow">Finding the essential</p></div>
        <div className="prose"><p>{t.closing}</p></div>
      </section>
    </main>
  );
}
