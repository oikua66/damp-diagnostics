import { notFound } from 'next/navigation';
import { languages, type Lang } from '../../../lib/translations';
import SiteHeader from '../../components/SiteHeader';

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
    title: 'From specification to a workable tender proposal.',
    lead: 'We analyse tender requirements, find manufacturers and technical equivalents, bring in specialist expertise and assemble multi-supplier solutions where one catalogue is not enough.',
    intro: [
      'The task is not simply to find equipment with similar parameters. A tender proposal must satisfy mandatory requirements, be technically defensible, documentable and realistically deliverable.',
      'We use a large accumulated base of manufacturers and suppliers from different countries, then extend the search when the specification calls for a better match, a non-standard configuration or a different technical approach.',
    ],
    scopeEyebrow: 'What we do',
    scopeTitle: 'Build the proposal around the tender requirements.',
    scope: [
      { title: 'Analyse the specification', text: 'Identify mandatory parameters, acceptable tolerances, certification, origin, documentation and requirements that need clarification.' },
      { title: 'Find manufacturers and equivalents', text: 'Use our existing manufacturer base and targeted market search to find direct matches, justified equivalents and realistic supply options.' },
      { title: 'Bring in specialist expertise', text: 'Where the specification crosses into a narrow technical field, we involve the relevant engineers or subject specialists.' },
      { title: 'Use non-standard configurations', text: 'Consider alternative architectures, combinations of several products or splitting one complex position between different manufacturers.' },
      { title: 'Combine positions', text: 'Assemble multi-supplier packages when one manufacturer cannot cover the scope, with attention to technical compatibility and interfaces.' },
      { title: 'Prepare the technical logic', text: 'Help structure the comparison, justification of equivalents and clarification questions needed for a credible bid.' },
    ],
    consortiumEyebrow: 'Consortiums',
    consortiumTitle: 'Complex tenders often need more than one company.',
    consortium: [
      'For multidisciplinary tenders, the strongest proposal may require several manufacturers, suppliers, engineering companies or specialist contractors.',
      'We can work inside an existing consortium, find missing participants, connect complementary positions and help form a consortium around a specific tender.',
      'The aim is to build the right combination of competencies and supply capabilities rather than force the entire scope through one company.',
    ],
    principleEyebrow: 'Our principle',
    principleTitle: 'The tender defines the solution — not the supplier.',
    principle: [
      'We are not tied to one manufacturer or one product line. The starting point is compliance with the real tender requirement.',
      'The result may be a direct match, a technically justified equivalent, a changed configuration or a combined proposal from several companies.',
    ],
    startEyebrow: 'Start here',
    startTitle: 'Send the specification.',
    startText: 'Send the tender specification or documentation in PDF, Excel or Word format. A link to the source documents is enough for an initial review.',
    button: 'Send specification',
    back: 'Back to main page',
  },
  ru: {
    eyebrow: 'Подбор оборудования для тендеров',
    title: 'От спецификации — к рабочему тендерному предложению.',
    lead: 'Разбираем требования, находим производителей и технические эквиваленты, привлекаем профильных специалистов и объединяем позиции, если одного поставщика недостаточно.',
    intro: [
      'Задача не в том, чтобы найти оборудование с похожими характеристиками. Тендерное предложение должно соответствовать обязательным требованиям, быть технически обоснованным, подтверждаться документами и реально поставляться.',
      'Мы используем большую накопленную базу производителей и поставщиков из разных стран, а под конкретную спецификацию расширяем поиск — если нужен более точный аналог, нестандартная конфигурация или другой технический подход.',
    ],
    scopeEyebrow: 'Что мы делаем',
    scopeTitle: 'Собираем предложение вокруг требований тендера.',
    scope: [
      { title: 'Разбираем спецификацию', text: 'Выделяем обязательные параметры, допустимые отклонения, требования к сертификатам, происхождению, комплектности, документации и спорные места.' },
      { title: 'Находим производителей и эквиваленты', text: 'Используем собственную базу и целевой поиск по рынку, чтобы найти прямое соответствие, обоснованный эквивалент или реалистичную альтернативу.' },
      { title: 'Привлекаем профильных специалистов', text: 'Если спецификация требует узкой компетенции, подключаем инженеров и специалистов соответствующего профиля.' },
      { title: 'Ищем нестандартную конфигурацию', text: 'Рассматриваем альтернативную архитектуру, комбинацию нескольких изделий или разделение сложной позиции между разными изготовителями.' },
      { title: 'Объединяем позиции', text: 'Собираем пакет из нескольких поставщиков, когда один производитель не закрывает весь объём, и проверяем совместимость решений.' },
      { title: 'Готовим техническую логику предложения', text: 'Помогаем сформировать сравнение, обоснование эквивалентов и вопросы на уточнение, которые нужны для сильной тендерной заявки.' },
    ],
    consortiumEyebrow: 'Консорциумы',
    consortiumTitle: 'Сложный тендер часто требует нескольких компаний.',
    consortium: [
      'Для комплексных закупок оптимальная схема может включать нескольких производителей, поставщиков, инженерные компании и специализированных подрядчиков.',
      'Мы готовы работать внутри существующего консорциума, искать недостающих участников, объединять взаимодополняющие позиции и помогать формировать консорциум под конкретный тендер.',
      'Цель — собрать нужные компетенции и возможности поставки, а не искусственно проводить весь объём через одну компанию.',
    ],
    principleEyebrow: 'Наш принцип',
    principleTitle: 'Решение определяется тендером, а не каталогом поставщика.',
    principle: [
      'Мы не привязаны к одному производителю или одной линейке оборудования. Отправная точка — требования закупки и реальная возможность их выполнить.',
      'Результатом может быть прямое соответствие, технически обоснованный эквивалент, изменённая конфигурация или объединённое предложение нескольких компаний.',
    ],
    startEyebrow: 'С чего начать',
    startTitle: 'Отправьте спецификацию.',
    startText: 'Пришлите спецификацию или тендерную документацию в PDF, Excel или Word. Для первичной оценки достаточно и ссылки на исходные документы.',
    button: 'Отправить спецификацию',
    back: 'Вернуться на главную',
  },
  uk: {
    eyebrow: 'Підбір обладнання для тендерів',
    title: 'Від специфікації — до робочої тендерної пропозиції.',
    lead: 'Аналізуємо вимоги, знаходимо виробників і технічні еквіваленти, залучаємо профільних спеціалістів та об’єднуємо позиції, якщо одного постачальника недостатньо.',
    intro: [
      'Завдання не в тому, щоб знайти обладнання зі схожими характеристиками. Тендерна пропозиція має відповідати обов’язковим вимогам, бути технічно обґрунтованою, підтверджуватися документами та реально постачатися.',
      'Ми використовуємо велику накопичену базу виробників і постачальників з різних країн, а під конкретну специфікацію розширюємо пошук, якщо потрібен точніший аналог, нестандартна конфігурація або інший технічний підхід.',
    ],
    scopeEyebrow: 'Що ми робимо',
    scopeTitle: 'Формуємо пропозицію навколо вимог тендера.',
    scope: [
      { title: 'Аналізуємо специфікацію', text: 'Виділяємо обов’язкові параметри, допустимі відхилення, вимоги до сертифікатів, походження, комплектності, документації та спірні місця.' },
      { title: 'Знаходимо виробників і еквіваленти', text: 'Використовуємо власну базу та цільовий пошук по ринку, щоб знайти пряме відповідність, обґрунтований еквівалент або реалістичну альтернативу.' },
      { title: 'Залучаємо профільних спеціалістів', text: 'Якщо специфікація потребує вузької компетенції, підключаємо інженерів і фахівців відповідного профілю.' },
      { title: 'Шукаємо нестандартну конфігурацію', text: 'Розглядаємо альтернативну архітектуру, комбінацію кількох виробів або поділ складної позиції між різними виробниками.' },
      { title: 'Об’єднуємо позиції', text: 'Формуємо пакет із кількох постачальників, якщо один виробник не закриває весь обсяг, і перевіряємо сумісність рішень.' },
      { title: 'Готуємо технічну логіку пропозиції', text: 'Допомагаємо сформувати порівняння, обґрунтування еквівалентів і питання на уточнення, необхідні для сильної тендерної заявки.' },
    ],
    consortiumEyebrow: 'Консорціуми',
    consortiumTitle: 'Складний тендер часто потребує кількох компаній.',
    consortium: [
      'Для комплексних закупівель оптимальна схема може включати кількох виробників, постачальників, інженерні компанії та спеціалізованих підрядників.',
      'Ми готові працювати в наявному консорціумі, шукати відсутніх учасників, об’єднувати взаємодоповнювальні позиції та допомагати формувати консорціум під конкретний тендер.',
      'Мета — зібрати потрібні компетенції та можливості постачання, а не штучно проводити весь обсяг через одну компанію.',
    ],
    principleEyebrow: 'Наш принцип',
    principleTitle: 'Рішення визначає тендер, а не каталог постачальника.',
    principle: [
      'Ми не прив’язані до одного виробника чи однієї лінійки обладнання. Відправна точка — вимоги закупівлі та реальна можливість їх виконати.',
      'Результатом може бути пряме відповідність, технічно обґрунтований еквівалент, змінена конфігурація або об’єднана пропозиція кількох компаній.',
    ],
    startEyebrow: 'З чого почати',
    startTitle: 'Надішліть специфікацію.',
    startText: 'Надішліть специфікацію або тендерну документацію у PDF, Excel чи Word. Для первинної оцінки достатньо й посилання на вихідні документи.',
    button: 'Надіслати специфікацію',
    back: 'Повернутися на головну',
  },
  sr: {
    eyebrow: 'Izbor opreme za tendere',
    title: 'Od specifikacije do funkcionalne tenderske ponude.',
    lead: 'Analiziramo zahteve, pronalazimo proizvođače i tehničke ekvivalente, uključujemo stručnjake i povezujemo pozicije kada jedan dobavljač nije dovoljan.',
    intro: [
      'Zadatak nije samo pronaći opremu sa sličnim karakteristikama. Tenderska ponuda mora ispuniti obavezne zahteve, biti tehnički obrazložena, dokumentovana i realno isporučiva.',
      'Koristimo veliku bazu proizvođača i dobavljača iz različitih zemalja, a za konkretnu specifikaciju proširujemo pretragu kada je potreban precizniji ekvivalent, nestandardna konfiguracija ili drugačiji tehnički pristup.',
    ],
    scopeEyebrow: 'Šta radimo',
    scopeTitle: 'Ponudu gradimo oko zahteva tendera.',
    scope: [
      { title: 'Analiziramo specifikaciju', text: 'Izdvajamo obavezne parametre, dozvoljena odstupanja, zahteve za sertifikate, poreklo, kompletnost, dokumentaciju i nejasne tačke.' },
      { title: 'Pronalazimo proizvođače i ekvivalente', text: 'Koristimo sopstvenu bazu i ciljanu pretragu tržišta da pronađemo direktno poklapanje, opravdan ekvivalent ili realnu alternativu.' },
      { title: 'Uključujemo stručnjake', text: 'Kada specifikacija zahteva usku stručnost, uključujemo odgovarajuće inženjere i specijaliste.' },
      { title: 'Tražimo nestandardnu konfiguraciju', text: 'Razmatramo alternativnu arhitekturu, kombinaciju više proizvoda ili podelu složene pozicije između više proizvođača.' },
      { title: 'Povezujemo pozicije', text: 'Sastavljamo paket od više dobavljača kada jedan proizvođač ne pokriva ceo obim i proveravamo kompatibilnost rešenja.' },
      { title: 'Formiramo tehničku logiku ponude', text: 'Pomažemo da se pripreme poređenje, obrazloženje ekvivalenata i pitanja za pojašnjenje potrebna za kredibilnu ponudu.' },
    ],
    consortiumEyebrow: 'Konzorcijumi',
    consortiumTitle: 'Složen tender često zahteva više kompanija.',
    consortium: [
      'Za kompleksne nabavke optimalna struktura može uključiti više proizvođača, dobavljača, inženjerskih kompanija i specijalizovanih izvođača.',
      'Spremni smo da radimo u postojećem konzorcijumu, pronađemo nedostajuće učesnike, povežemo komplementarne pozicije i pomognemo u formiranju konzorcijuma za konkretan tender.',
      'Cilj je okupiti potrebne kompetencije i kapacitete za isporuku, umesto da se ceo obim veštački provuče kroz jednu kompaniju.',
    ],
    principleEyebrow: 'Naš princip',
    principleTitle: 'Tender određuje rešenje, a ne katalog dobavljača.',
    principle: [
      'Nismo vezani za jednog proizvođača ili jednu liniju opreme. Polazna tačka su zahtevi nabavke i realna mogućnost da se ispune.',
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
      <SiteHeader lang={lang} languagePath="/tender-equipment" />

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
