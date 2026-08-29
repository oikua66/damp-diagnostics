import { notFound } from 'next/navigation';
import { copy, languageNames, languages, type Lang } from '../../lib/translations';

type Props = { params: Promise<{ lang: string }> };

type ExtraCopy = {
  philosophyEyebrow: string;
  philosophyTitle: string;
  philosophy: string[];
  deliverablesEyebrow: string;
  deliverablesTitle: string;
  deliverables: string[];
  aiEyebrow: string;
  aiTitle: string;
  ai: string[];
  solutionsEyebrow: string;
  solutionsTitle: string;
  solutions: string[];
  current: string;
  action: string;
  contactTitle: string;
  contactText: string;
};

const extra: Record<Lang, ExtraCopy> = {
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
    solutionsEyebrow: 'Problem-specific solutions',
    solutionsTitle: 'A growing library of practical problems.',
    solutions: [
      'Alongside general consulting, I am adding dedicated pages for recurring practical problems where the wrong diagnosis often leads directly to wasted money.',
      'Each page starts with the same principle: understand the cause, define what must change, and only then choose a technical solution.',
      'This section will grow over time as new problems, diagnostic methods and practical solution frameworks are added.',
    ],
    current: 'First topic: damp diagnostics',
    action: 'Open damp diagnostics',
    contactTitle: 'Let’s discuss the task.',
    contactText: 'Send a short description of the project, decision or problem you would like to discuss. If there are documents, calculations or contractor proposals, they can be reviewed as part of the discussion.',
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
    solutionsEyebrow: 'Решения по конкретным задачам',
    solutionsTitle: 'Библиотека практических проблем будет расширяться.',
    solutions: [
      'Помимо общего консалтинга, я постепенно добавляю отдельные страницы по повторяющимся практическим проблемам, где неправильная диагностика очень быстро превращается в лишние расходы.',
      'Логика у таких страниц одна: сначала разобраться в причине, затем определить, что именно должно измениться, и только потом выбирать техническое решение.',
      'Этот раздел будет постепенно расширяться по мере появления новых задач, диагностических методик и практических схем решения.',
    ],
    current: 'Первая тема: диагностика сырости',
    action: 'Открыть диагностику сырости',
    contactTitle: 'Давайте обсудим задачу.',
    contactText: 'Пришлите короткое описание проекта, решения или проблемы, которую вы хотите обсудить. Если есть документы, расчёты или предложения подрядчиков, их можно разобрать в рамках консультации.',
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
    solutionsEyebrow: 'Рішення для конкретних задач',
    solutionsTitle: 'Бібліотека практичних проблем буде розширюватися.',
    solutions: [
      'Окрім загального консалтингу, я поступово додаю окремі сторінки для типових практичних проблем, де неправильна діагностика дуже швидко перетворюється на зайві витрати.',
      'Логіка таких сторінок одна: спочатку зрозуміти причину, потім визначити, що саме має змінитися, і лише після цього обирати технічне рішення.',
      'Цей розділ поступово розширюватиметься у міру появи нових задач, діагностичних методик та практичних схем вирішення.',
    ],
    current: 'Перша тема: діагностика вологи',
    action: 'Відкрити діагностику вологи',
    contactTitle: 'Давайте обговоримо задачу.',
    contactText: 'Надішліть короткий опис проєкту, рішення або проблеми, яку ви хочете обговорити. Якщо є документи, розрахунки чи пропозиції підрядників, їх можна розглянути в межах консультації.',
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
    solutionsEyebrow: 'Rešenja za konkretne probleme',
    solutionsTitle: 'Biblioteka praktičnih problema će se širiti.',
    solutions: [
      'Pored opšteg konsaltinga, postepeno dodajem posebne stranice za tipične praktične probleme kod kojih pogrešna dijagnoza vrlo brzo dovodi do nepotrebnih troškova.',
      'Logika je ista: prvo razumeti uzrok, zatim definisati šta mora da se promeni, a tek onda birati tehničko rešenje.',
      'Ovaj deo sajta će se vremenom širiti novim problemima, dijagnostičkim metodama i praktičnim okvirima za rešavanje.',
    ],
    current: 'Prva tema: dijagnostika vlage',
    action: 'Otvori dijagnostiku vlage',
    contactTitle: 'Hajde da razgovaramo o zadatku.',
    contactText: 'Pošaljite kratak opis projekta, odluke ili problema o kojem želite da razgovaramo. Ako postoje dokumenti, proračuni ili ponude izvođača, mogu se analizirati u okviru konsultacije.',
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
  const e = extra[lang];
  const aboutLabel: Record<Lang, string> = { en: 'About', ru: 'Обо мне', uk: 'Про мене', sr: 'O meni' };

  return (
    <main>
      <header className="site-header">
        <a className="brand" href={`/${lang}#top`} aria-label="Koretskiy Consulting home">
          <span className="brand-mark">KC</span>
          <span>Koretskiy Consulting</span>
        </a>
        <div className="header-right">
          <nav>
            <a href={`/${lang}/about`}>{aboutLabel[lang]}</a>
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

      <section className="section split" id="solutions">
        <div>
          <p className="eyebrow">{e.solutionsEyebrow}</p>
          <h2>{e.solutionsTitle}</h2>
        </div>
        <div className="prose">
          {e.solutions.map((p) => <p key={p}>{p}</p>)}
          <p><strong>{e.current}</strong></p>
          <a className="button button-light" href={`/${lang}/damp-diagnostics`}>{e.action}</a>
        </div>
      </section>

      <section className="section contact" id="contact">
        <p className="eyebrow">{t.contact}</p>
        <h2>{e.contactTitle}</h2>
        <p>{e.contactText}</p>
        <a className="button button-dark" href="mailto:consulting@koretskiy.com">consulting@koretskiy.com</a>
      </section>

      <footer>
        <span>© 2026 Koretskiy Consulting</span>
        <span>{t.footer}</span>
      </footer>
    </main>
  );
}
