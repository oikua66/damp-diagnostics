import { notFound } from 'next/navigation';
import { languageNames, languages, type Lang } from '../../../lib/translations';

type Props = { params: Promise<{ lang: string }> };

type TenderCopy = {
  eyebrow: string;
  title: string;
  lead: string;
  intro: string[];
  scopeEyebrow: string;
  scopeTitle: string;
  scope: { title: string; text: string }[];
  consortiumEyebrow: string;
  consortiumTitle: string;
  consortium: string[];
  principleEyebrow: string;
  principleTitle: string;
  principle: string[];
  startEyebrow: string;
  startTitle: string;
  startText: string;
  button: string;
  back: string;
};

const copy: Record<Lang, TenderCopy> = {
  en: {
    eyebrow: 'Tender equipment selection',
    title: 'Not one product. A workable tender solution.',
    lead: 'We analyse specifications, select manufacturers and technical equivalents, combine positions and build a realistic technical and commercial proposal for complex tenders.',
    intro: [
      'A tender specification is rarely just a shopping list. The real task is to understand mandatory requirements, identify acceptable alternatives and assemble equipment that can actually be supplied, documented and defended technically.',
      'We work with a large accumulated database of manufacturers and suppliers from different countries. The search is not limited to this database: for each tender we look for additional manufacturers, non-standard configurations and alternative technical approaches when they improve the result.',
    ],
    scopeEyebrow: 'What we do',
    scopeTitle: 'From specification to a complete proposal.',
    scope: [
      { title: 'Analyse the specification', text: 'Separate mandatory parameters from preferences, identify certificates, origin requirements, completeness, documentation and possible ambiguities.' },
      { title: 'Select manufacturers and equipment', text: 'Search our existing manufacturer base and the wider market, compare technical compliance, availability, lead times and supply feasibility.' },
      { title: 'Bring in specialists', text: 'Where the tender requires narrow expertise, we involve relevant engineers and subject-matter specialists instead of pretending that one person can know every field.' },
      { title: 'Use non-standard approaches', text: 'We consider equivalents, alternative configurations, combinations of several products or splitting a complex position between several manufacturers.' },
      { title: 'Combine positions', text: 'If one manufacturer cannot cover the tender, we assemble a multi-supplier solution and check technical compatibility between the individual positions.' },
      { title: 'Support proposal structure', text: 'We can help turn the selected solution into a clear technical package for the bidder, including comparison logic and questions for clarification where needed.' },
    ],
    consortiumEyebrow: 'Consortiums',
    consortiumTitle: 'When one company is not enough.',
    consortium: [
      'For large or multidisciplinary tenders, the optimal proposal may require several manufacturers, suppliers, engineering companies or specialist contractors.',
      'We are ready to work within an existing consortium, find missing participants, combine complementary positions and help create a consortium for a specific tender when this is the most practical route.',
      'The goal is to assemble a team and a proposal that together satisfy the tender requirements — rather than force the whole scope through one supplier.',
    ],
    principleEyebrow: 'Our principle',
    principleTitle: 'The tender defines the solution — not the supplier.',
    principle: [
      'We are not tied to one manufacturer or one catalogue. The starting point is the tender requirement and the real ability to meet it.',
      'A good result may be a direct match, a technically justified equivalent, a redesigned configuration, or a combined proposal involving several companies.',
    ],
    startEyebrow: 'Start here',
    startTitle: 'Send the tender specification.',
    startText: 'Send the specification or tender documentation in PDF, Excel or Word format. A link to the source documents is also sufficient for an initial review.',
    button: 'Send specification',
    back: 'Back to main page',
  },
  ru: {
    eyebrow: 'Подбор оборудования для тендеров',
    title: 'Не найти одну позицию. Собрать рабочее тендерное решение.',
    lead: 'Разбираем спецификации, подбираем производителей и технические эквиваленты, объединяем позиции и собираем реалистичное техническое и коммерческое предложение для сложных тендеров.',
    intro: [
      'Тендерная спецификация — это редко просто список покупок. Реальная задача — понять обязательные требования, определить допустимые альтернативы и собрать оборудование, которое можно реально поставить, документально подтвердить и технически защитить.',
      'За время работы собрана большая база производителей и поставщиков оборудования из разных стран. Но поиск не ограничивается этой базой: под конкретный тендер мы дополнительно ищем производителей, нестандартные конфигурации и альтернативные технические подходы, если они дают лучший результат.',
    ],
    scopeEyebrow: 'Что мы делаем',
    scopeTitle: 'От спецификации — к собранному предложению.',
    scope: [
      { title: 'Разбираем спецификацию', text: 'Отделяем обязательные параметры от пожеланий, выявляем требования к сертификатам, происхождению, комплектности, документации и возможные неоднозначности.' },
      { title: 'Подбираем производителей и оборудование', text: 'Используем существующую базу производителей и дополнительный поиск по рынку. Сравниваем соответствие, доступность, сроки и реальную возможность поставки.' },
      { title: 'Привлекаем профильных специалистов', text: 'Если тендер требует узкой компетенции, подключаем инженеров и специалистов соответствующего профиля, а не пытаемся изображать экспертизу во всех областях одновременно.' },
      { title: 'Ищем нестандартные варианты', text: 'Рассматриваем эквиваленты, другую конфигурацию, комбинацию нескольких изделий или разделение сложной позиции между несколькими изготовителями.' },
      { title: 'Объединяем позиции', text: 'Если один производитель не закрывает тендер, собираем решение из нескольких поставщиков и проверяем совместимость отдельных позиций.' },
      { title: 'Помогаем собрать предложение', text: 'При необходимости помогаем превратить найденное решение в понятный технический пакет для участника тендера: логика сравнения, пояснения и вопросы на уточнение.' },
    ],
    consortiumEyebrow: 'Консорциумы',
    consortiumTitle: 'Когда одной компании недостаточно.',
    consortium: [
      'Для крупных или комплексных тендеров оптимальное предложение может потребовать участия нескольких производителей, поставщиков, инженерных компаний или специализированных подрядчиков.',
      'Мы готовы работать в существующем консорциуме, находить недостающих участников, объединять взаимодополняющие позиции и при необходимости помогать создавать консорциум под конкретный тендер.',
      'Задача — собрать команду и предложение, которые вместе закрывают требования закупки, а не пытаться искусственно провести весь объём через одного поставщика.',
    ],
    principleEyebrow: 'Наш принцип',
    principleTitle: 'Решение определяется тендером, а не каталогом поставщика.',
    principle: [
      'Мы не привязаны к одному производителю или одной линейке оборудования. Отправная точка — требования тендера и реальная возможность их выполнить.',
      'Результатом может быть прямое соответствие, технически обоснованный эквивалент, изменённая конфигурация или объединённое предложение нескольких компаний.',
    ],
    startEyebrow: 'С чего начать',
    startTitle: 'Отправьте спецификацию.',
    startText: 'Пришлите спецификацию или тендерную документацию в PDF, Excel или Word. Для первичной оценки также достаточно ссылки на исходные документы.',
    button: 'Отправить спецификацию',
    back: 'Вернуться на главную',
  },
  uk: {
    eyebrow: 'Підбір обладнання для тендерів',
    title: 'Не знайти одну позицію. Зібрати робоче тендерне рішення.',
    lead: 'Аналізуємо специфікації, підбираємо виробників і технічні еквіваленти, об’єднуємо позиції та формуємо реалістичну технічну й комерційну пропозицію для складних тендерів.',
    intro: [
      'Тендерна специфікація — це рідко просто список покупок. Реальне завдання — зрозуміти обов’язкові вимоги, визначити допустимі альтернативи та зібрати обладнання, яке можна реально поставити, документально підтвердити й технічно захистити.',
      'За час роботи сформована велика база виробників і постачальників обладнання з різних країн. Але пошук не обмежується цією базою: під конкретний тендер ми додатково шукаємо виробників, нестандартні конфігурації та альтернативні технічні підходи.',
    ],
    scopeEyebrow: 'Що ми робимо',
    scopeTitle: 'Від специфікації — до зібраної пропозиції.',
    scope: [
      { title: 'Аналізуємо специфікацію', text: 'Відокремлюємо обов’язкові параметри від побажань, визначаємо вимоги до сертифікатів, походження, комплектності, документації та можливі неоднозначності.' },
      { title: 'Підбираємо виробників і обладнання', text: 'Використовуємо наявну базу виробників і додатковий пошук по ринку. Порівнюємо відповідність, доступність, строки та реальну можливість поставки.' },
      { title: 'Залучаємо профільних спеціалістів', text: 'Якщо тендер потребує вузької компетенції, підключаємо інженерів і фахівців відповідного профілю.' },
      { title: 'Шукаємо нестандартні варіанти', text: 'Розглядаємо еквіваленти, іншу конфігурацію, комбінацію кількох виробів або поділ складної позиції між кількома виробниками.' },
      { title: 'Об’єднуємо позиції', text: 'Якщо один виробник не закриває тендер, формуємо рішення з кількох постачальників і перевіряємо сумісність окремих позицій.' },
      { title: 'Допомагаємо сформувати пропозицію', text: 'За потреби допомагаємо перетворити підібране рішення на зрозумілий технічний пакет для учасника тендера.' },
    ],
    consortiumEyebrow: 'Консорціуми',
    consortiumTitle: 'Коли однієї компанії недостатньо.',
    consortium: [
      'Для великих або комплексних тендерів оптимальна пропозиція може потребувати участі кількох виробників, постачальників, інженерних компаній або спеціалізованих підрядників.',
      'Ми готові працювати в наявному консорціумі, знаходити відсутніх учасників, об’єднувати взаємодоповнювальні позиції та за потреби допомагати створювати консорціум під конкретний тендер.',
      'Завдання — зібрати команду та пропозицію, які разом закривають вимоги закупівлі, а не намагатися провести весь обсяг через одного постачальника.',
    ],
    principleEyebrow: 'Наш принцип',
    principleTitle: 'Рішення визначає тендер, а не каталог постачальника.',
    principle: [
      'Ми не прив’язані до одного виробника чи однієї лінійки обладнання. Відправна точка — вимоги тендера та реальна можливість їх виконати.',
      'Результатом може бути пряме відповідність, технічно обґрунтований еквівалент, змінена конфігурація або об’єднана пропозиція кількох компаній.',
    ],
    startEyebrow: 'З чого почати',
    startTitle: 'Надішліть специфікацію.',
    startText: 'Надішліть специфікацію або тендерну документацію у PDF, Excel чи Word. Для первинної оцінки також достатньо посилання на вихідні документи.',
    button: 'Надіслати специфікацію',
    back: 'Повернутися на головну',
  },
  sr: {
    eyebrow: 'Izbor opreme za tendere',
    title: 'Ne jedna pozicija. Funkcionalno tendersko rešenje.',
    lead: 'Analiziramo specifikacije, biramo proizvođače i tehničke ekvivalente, povezujemo pozicije i formiramo realnu tehničku i komercijalnu ponudu za složene tendere.',
    intro: [
      'Tenderska specifikacija retko je samo spisak za kupovinu. Stvarni zadatak je razumeti obavezne zahteve, utvrditi prihvatljive alternative i sastaviti opremu koja se zaista može isporučiti, dokumentovati i tehnički odbraniti.',
      'Tokom rada formirana je velika baza proizvođača i dobavljača opreme iz različitih zemalja. Pretraga nije ograničena na ovu bazu: za konkretan tender dodatno tražimo proizvođače, nestandardne konfiguracije i alternativne tehničke pristupe.',
    ],
    scopeEyebrow: 'Šta radimo',
    scopeTitle: 'Od specifikacije do kompletne ponude.',
    scope: [
      { title: 'Analiziramo specifikaciju', text: 'Odvajamo obavezne parametre od poželjnih, proveravamo zahteve za sertifikate, poreklo, kompletnost, dokumentaciju i moguće nejasnoće.' },
      { title: 'Biramo proizvođače i opremu', text: 'Koristimo postojeću bazu proizvođača i dodatnu pretragu tržišta. Poredimo usklađenost, dostupnost, rokove i realnu mogućnost isporuke.' },
      { title: 'Uključujemo stručnjake', text: 'Kada tender zahteva usku stručnost, uključujemo odgovarajuće inženjere i specijaliste.' },
      { title: 'Tražimo nestandardna rešenja', text: 'Razmatramo ekvivalente, drugačije konfiguracije, kombinacije više proizvoda ili podelu složene pozicije između više proizvođača.' },
      { title: 'Povezujemo pozicije', text: 'Ako jedan proizvođač ne može da pokrije tender, sastavljamo rešenje od više dobavljača i proveravamo tehničku kompatibilnost.' },
      { title: 'Pomažemo u formiranju ponude', text: 'Po potrebi pomažemo da se izabrano rešenje pretvori u jasan tehnički paket za ponuđača.' },
    ],
    consortiumEyebrow: 'Konzorcijumi',
    consortiumTitle: 'Kada jedna kompanija nije dovoljna.',
    consortium: [
      'Za velike ili kompleksne tendere optimalna ponuda može zahtevati više proizvođača, dobavljača, inženjerskih kompanija ili specijalizovanih izvođača.',
      'Spremni smo da radimo u postojećem konzorcijumu, pronađemo nedostajuće učesnike, povežemo komplementarne pozicije i, kada je potrebno, pomognemo u formiranju konzorcijuma za konkretan tender.',
      'Cilj je sastaviti tim i ponudu koji zajedno ispunjavaju zahteve nabavke, umesto da se čitav obim veštački provlači kroz jednog dobavljača.',
    ],
    principleEyebrow: 'Naš princip',
    principleTitle: 'Tender određuje rešenje, a ne katalog dobavljača.',
    principle: [
      'Nismo vezani za jednog proizvođača ili jednu liniju opreme. Polazna tačka su zahtevi tendera i realna mogućnost da se oni ispune.',
      'Rezultat može biti direktno poklapanje, tehnički opravdan ekvivalent, izmenjena konfiguracija ili zajednička ponuda više kompanija.',
    ],
    startEyebrow: 'Početak',
    startTitle: 'Pošaljite specifikaciju.',
    startText: 'Pošaljite specifikaciju ili tendersku dokumentaciju u PDF, Excel ili Word formatu. Za početnu procenu dovoljan je i link ka izvornoj dokumentaciji.',
    button: 'Pošaljite specifikaciju',
    back: 'Nazad na početnu',
  },
};

export function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export default async function TenderEquipmentPage({ params }: Props) {
  const { lang: rawLang } = await params;
  if (!languages.includes(rawLang as Lang)) notFound();
  const lang = rawLang as Lang;
  const t = copy[lang];

  return (
    <main className="tender-page">
      <header className="site-header">
        <a className="brand" href={`/${lang}`} aria-label="Koretskiy Consulting home">
          <span className="brand-mark">KC</span>
          <span>Koretskiy Consulting</span>
        </a>
        <div className="header-right">
          <nav />
          <div className="language-switcher" aria-label="Language selector">
            {languages.map((code) => (
              <a key={code} href={`/${code}/tender-equipment`} className={code === lang ? 'active' : ''}>
                {languageNames[code]}
              </a>
            ))}
          </div>
        </div>
      </header>

      <section className="hero">
        <p className="eyebrow">{t.eyebrow}</p>
        <h1>{t.title}</h1>
        <p className="lead">{t.lead}</p>
        <div className="hero-actions">
          <a className="button button-dark" href="mailto:consulting@koretskiy.com?subject=Tender%20specification">{t.button}</a>
          <a className="button button-light" href={`/${lang}`}>← {t.back}</a>
        </div>
      </section>

      <section className="section split">
        <div><p className="eyebrow">{t.eyebrow}</p><h2>{t.scopeTitle}</h2></div>
        <div className="prose">{t.intro.map((p) => <p key={p}>{p}</p>)}</div>
      </section>

      <section className="section">
        <div className="section-heading"><p className="eyebrow">{t.scopeEyebrow}</p><h2>{t.scopeTitle}</h2></div>
        <div className="cards">
          {t.scope.map((item, i) => (
            <article className="card" key={item.title}>
              <span className="card-number">0{i + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section split">
        <div><p className="eyebrow">{t.consortiumEyebrow}</p><h2>{t.consortiumTitle}</h2></div>
        <div className="prose">{t.consortium.map((p) => <p key={p}>{p}</p>)}</div>
      </section>

      <section className="section split">
        <div><p className="eyebrow">{t.principleEyebrow}</p><h2>{t.principleTitle}</h2></div>
        <div className="prose">{t.principle.map((p) => <p key={p}>{p}</p>)}</div>
      </section>

      <section className="section contact" id="tender-contact">
        <p className="eyebrow">{t.startEyebrow}</p>
        <h2>{t.startTitle}</h2>
        <p>{t.startText}</p>
        <a className="button button-dark" href="mailto:consulting@koretskiy.com?subject=Tender%20specification">{t.button}</a>
      </section>
    </main>
  );
}
