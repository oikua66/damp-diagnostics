import { notFound } from 'next/navigation';
import { copy, languageNames, languages, type Lang } from '../../../lib/translations';

type Props = { params: Promise<{ lang: string }> };

type DampExtra = {
  introEyebrow: string;
  introTitle: string;
  intro: string[];
  subjectsEyebrow: string;
  subjectsTitle: string;
  subjects: { title: string; text: string }[];
  factorsEyebrow: string;
  factorsTitle: string;
  factors: string[];
  methodEyebrow: string;
  methodTitle: string;
  steps: { n: string; title: string; text: string }[];
  resultEyebrow: string;
  resultTitle: string;
  result: string[];
  ventilationEyebrow: string;
  ventilationTitle: string;
  ventilation: string[];
  onlineEyebrow: string;
  onlineTitle: string;
  online: string[];
  onlineAction: string;
  knowledgeEyebrow: string;
  knowledgeTitle: string;
  knowledgeIntro: string;
  knowledge: { title: string; text: string }[];
};

const extra: Record<Lang, DampExtra> = {
  en: {
    introEyebrow: 'Diagnosis before repair',
    introTitle: 'Damp is a symptom. The task is to find the mechanism behind it.',
    intro: [
      'Our service is focused on diagnosis and independent technical advice. We do not begin with a waterproofing product, insulation system, dehumidifier or contractor. We begin with the building, the symptoms and the conditions in which they appear.',
      'The same visible mould or wet patch can be caused by very different mechanisms: condensation, inadequate ventilation, thermal bridges, façade leakage, plumbing leakage, rising damp, lateral moisture or several factors acting together.',
      'The purpose of the assessment is to identify the most probable causes, define what should be checked next and provide a technically reasoned route toward remediation.',
    ],
    subjectsEyebrow: 'Scope of analysis',
    subjectsTitle: 'Typical situations we assess.',
    subjects: [
      { title: 'Mould growth', text: 'Assessment of humidity, air movement, surface temperatures and conditions that support fungal growth.' },
      { title: 'Condensation', text: 'Assessment of thermal bridges, insulation, indoor humidity and surface cooling that can lead to dew formation.' },
      { title: 'Basements and lower walls', text: 'Assessment of possible groundwater penetration, rising damp or lateral moisture movement through masonry.' },
    ],
    factorsEyebrow: 'What may be behind the problem',
    factorsTitle: 'Four common groups of causes.',
    factors: [
      'Insufficient ventilation that creates conditions for persistent high indoor humidity and mould growth.',
      'Air saturated with water vapour combined with the thermal and vapour characteristics of the building envelope.',
      'Critical points in the construction where heat loss creates locally cold surfaces and moisture formation.',
      'Moisture penetration through external elements, joints, façades, roofs, foundations or damaged waterproofing.',
    ],
    methodEyebrow: 'Our method',
    methodTitle: 'From evidence to a technical recommendation.',
    steps: [
      { n: '01', title: 'Describe the problem', text: 'Send detailed photographs and basic information about the object, where the symptoms appear, when they become worse and what has already been tried.' },
      { n: '02', title: 'Expert assessment', text: 'We analyse the supplied material, separate likely causes from secondary symptoms and define which factors should be verified.' },
      { n: '03', title: 'Report and next step', text: 'You receive a concise technical conclusion with recommendations for further checks, remediation measures or an on-site visit when remote assessment is not sufficient.' },
    ],
    resultEyebrow: 'Our contribution',
    resultTitle: 'Independent recommendations — not construction work.',
    result: [
      'We provide technical recommendations for the next steps, from ventilation and insulation measures to waterproofing or further investigation.',
      'We are not the contractor performing the repair. This separation is deliberate: the diagnosis should not depend on which product or construction service someone wants to sell.',
      'Where useful, we can help formulate a clear technical task for contractors and compare proposed solutions.',
    ],
    ventilationEyebrow: 'Example of a solution',
    ventilationTitle: 'When ventilation is the cause.',
    ventilation: [
      'If condensation or elevated humidity is caused by inadequate air exchange, one possible solution is decentralised ventilation with heat recovery.',
      'This can be useful where installing conventional ventilation ducts throughout an existing apartment would require major reconstruction. The final recommendation depends on the diagnosis; ventilation is one possible measure, not a universal answer to damp.',
    ],
    onlineEyebrow: 'Initial remote assessment',
    onlineTitle: 'Start with the information you already have.',
    online: [
      'For the first assessment, send the location and type of property, a short description of the problem, when it appears, photographs of affected areas and, if known, information about heating, ventilation, recent repairs or leaks.',
      'Remote assessment can often narrow the list of likely causes. If measurements or inspection of the building envelope are required, we will say so rather than pretend that photographs are enough.',
    ],
    onlineAction: 'Send materials by email',
    knowledgeEyebrow: 'Knowledge base',
    knowledgeTitle: 'Practical notes on damp, condensation and mould.',
    knowledgeIntro: 'This section will grow as new diagnostic topics and recurring problems are documented.',
    knowledge: [
      { title: 'Ventilation and condensation', text: 'Why air exchange can be decisive when indoor humidity repeatedly reaches cold surfaces.' },
      { title: 'How to recognise the causes of damp', text: 'Visual clues, location, seasonality and building details can point to very different moisture mechanisms.' },
      { title: 'Mould: treating the cause, not only the surface', text: 'Cleaning and biocides may remove visible mould, but lasting remediation requires control of the moisture source.' },
    ],
  },
  ru: {
    introEyebrow: 'Сначала диагностика — потом ремонт',
    introTitle: 'Сырость — это симптом. Задача — определить механизм её появления.',
    intro: [
      'Наша услуга сфокусирована на диагностике и независимой технической консультации. Мы не начинаем с гидроизоляционного материала, утеплителя, осушителя или подрядчика. Мы начинаем с самого объекта, симптомов и условий, при которых они возникают.',
      'Одинаковая на вид плесень или мокрое пятно могут иметь совершенно разные причины: конденсат, недостаточную вентиляцию, мостики холода, протечки фасада, утечки инженерных систем, капиллярную или боковую влагу либо сочетание нескольких факторов.',
      'Цель обследования — определить наиболее вероятные причины, понять, что необходимо проверить дальше, и сформировать технически обоснованный путь устранения проблемы.',
    ],
    subjectsEyebrow: 'Предмет анализа',
    subjectsTitle: 'Типовые ситуации, которые мы разбираем.',
    subjects: [
      { title: 'Развитие плесени', text: 'Анализируем влажность, циркуляцию воздуха, температуру поверхностей и условия, способствующие развитию грибка.' },
      { title: 'Конденсат', text: 'Проверяем влияние мостиков холода, утепления, влажности воздуха и охлаждения поверхностей до точки росы.' },
      { title: 'Подвалы и нижняя часть стен', text: 'Оцениваем вероятность проникновения грунтовой воды, капиллярного подъёма или бокового движения влаги через конструкции.' },
    ],
    factorsEyebrow: 'Что может стоять за проблемой',
    factorsTitle: 'Четыре распространённые группы причин.',
    factors: [
      'Недостаточная вентиляция, при которой в помещении устойчиво повышается влажность и создаются условия для плесени.',
      'Насыщение воздуха водяным паром в сочетании с теплотехническими и паропроницаемыми характеристиками ограждающих конструкций.',
      'Критические точки конструкции, где из-за потерь тепла поверхности становятся локально холодными и на них появляется влага.',
      'Проникновение влаги через наружные элементы: фасад, кровлю, швы, фундамент или повреждённую гидроизоляцию.',
    ],
    methodEyebrow: 'Наш метод',
    methodTitle: 'От исходных данных — к технической рекомендации.',
    steps: [
      { n: '01', title: 'Опишите проблему', text: 'Пришлите подробные фотографии и исходную информацию об объекте: где проявляется проблема, когда она усиливается и что уже пытались делать.' },
      { n: '02', title: 'Экспертная оценка', text: 'Мы анализируем материалы, отделяем вероятные причины от вторичных симптомов и определяем, какие факторы необходимо подтвердить или исключить.' },
      { n: '03', title: 'Заключение и следующий шаг', text: 'Вы получаете понятное техническое заключение с рекомендациями: что проверить, какие меры рассматривать и нужен ли выезд на объект, если дистанционных данных недостаточно.' },
    ],
    resultEyebrow: 'Наш вклад',
    resultTitle: 'Независимые рекомендации, а не строительные работы.',
    result: [
      'Мы даём технические рекомендации по дальнейшим действиям — от вентиляции и утепления до гидроизоляции или дополнительного обследования.',
      'Мы не являемся подрядчиком, который сам выполняет ремонт. Это принципиально: диагноз не должен зависеть от того, какой материал или строительную услугу кому-то выгодно продать.',
      'При необходимости мы можем помочь сформулировать техническое задание для подрядчиков и сравнить предложенные ими решения.',
    ],
    ventilationEyebrow: 'Пример решения',
    ventilationTitle: 'Когда причиной оказывается вентиляция.',
    ventilation: [
      'Если конденсат или повышенная влажность вызваны недостаточным воздухообменом, одним из возможных решений может быть децентрализованная вентиляция с рекуперацией тепла.',
      'Такой вариант особенно интересен в существующих квартирах, где прокладка обычных вентиляционных каналов потребовала бы серьёзного ремонта. Но вентиляция — лишь одно из возможных решений и назначается только после определения причины.',
    ],
    onlineEyebrow: 'Первичная дистанционная оценка',
    onlineTitle: 'Начните с информации, которая уже есть.',
    online: [
      'Для первичного анализа пришлите город и тип объекта, короткое описание проблемы, когда она появилась, фотографии поражённых зон и, если известно, информацию об отоплении, вентиляции, недавних ремонтах или протечках.',
      'По фотографиям и описанию часто можно существенно сузить круг причин. Если нужны измерения влажности, температуры поверхностей, тепловизионное обследование или осмотр конструкции, мы прямо это укажем, а не будем изображать точный диагноз по фотографии.',
    ],
    onlineAction: 'Отправить материалы по почте',
    knowledgeEyebrow: 'База знаний',
    knowledgeTitle: 'Практические материалы о сырости, конденсате и плесени.',
    knowledgeIntro: 'Раздел будет постепенно расширяться по мере накопления новых диагностических тем и типовых случаев.',
    knowledge: [
      { title: 'Вентиляция как ключ к проблеме конденсата', text: 'Почему воздухообмен становится решающим, когда влажный воздух регулярно контактирует с холодными поверхностями.' },
      { title: 'Причины сырости в квартире: как их различать', text: 'Место появления, сезонность, характер пятна и конструкция здания могут указывать на совершенно разные механизмы увлажнения.' },
      { title: 'Плесень: устранять причину, а не только пятно', text: 'Очистка поверхности убирает видимый грибок, но долговременный результат требует устранения источника влаги.' },
    ],
  },
  uk: {
    introEyebrow: 'Спочатку діагностика — потім ремонт',
    introTitle: 'Волога — це симптом. Завдання — визначити механізм її появи.',
    intro: [
      'Наша послуга зосереджена на діагностиці та незалежній технічній консультації. Ми не починаємо з гідроізоляційного матеріалу, утеплювача, осушувача чи підрядника. Ми починаємо з об’єкта, симптомів та умов, за яких вони виникають.',
      'Однакова на вигляд пліснява або мокра пляма можуть мати зовсім різні причини: конденсат, недостатню вентиляцію, містки холоду, протікання фасаду, витоки інженерних систем, капілярну чи бокову вологу або кілька факторів одночасно.',
      'Мета оцінки — визначити найбільш імовірні причини, зрозуміти, що слід перевірити далі, і сформувати технічно обґрунтований шлях усунення проблеми.',
    ],
    subjectsEyebrow: 'Предмет аналізу',
    subjectsTitle: 'Типові ситуації, які ми аналізуємо.',
    subjects: [
      { title: 'Розвиток плісняви', text: 'Аналізуємо вологість, рух повітря, температуру поверхонь та умови, що сприяють розвитку грибка.' },
      { title: 'Конденсат', text: 'Перевіряємо вплив містків холоду, утеплення, вологості повітря та охолодження поверхонь до точки роси.' },
      { title: 'Підвали та нижня частина стін', text: 'Оцінюємо ймовірність проникнення ґрунтової води, капілярного підйому або бокового руху вологи через конструкції.' },
    ],
    factorsEyebrow: 'Що може бути за проблемою',
    factorsTitle: 'Чотири поширені групи причин.',
    factors: [
      'Недостатня вентиляція, за якої в приміщенні стійко зростає вологість і виникають умови для плісняви.',
      'Насичення повітря водяною парою у поєднанні з теплотехнічними характеристиками огороджувальних конструкцій.',
      'Критичні точки конструкції, де через втрати тепла поверхні стають локально холодними і на них утворюється волога.',
      'Проникнення вологи через зовнішні елементи: фасад, покрівлю, шви, фундамент або пошкоджену гідроізоляцію.',
    ],
    methodEyebrow: 'Наш метод',
    methodTitle: 'Від вихідних даних — до технічної рекомендації.',
    steps: [
      { n: '01', title: 'Опишіть проблему', text: 'Надішліть детальні фотографії та основну інформацію про об’єкт: де проявляється проблема, коли вона посилюється і що вже намагалися робити.' },
      { n: '02', title: 'Експертна оцінка', text: 'Ми аналізуємо матеріали, відокремлюємо ймовірні причини від вторинних симптомів і визначаємо, які фактори потрібно підтвердити або виключити.' },
      { n: '03', title: 'Висновок і наступний крок', text: 'Ви отримуєте зрозумілий технічний висновок з рекомендаціями: що перевірити, які заходи розглядати та чи потрібен виїзд на об’єкт.' },
    ],
    resultEyebrow: 'Наш внесок',
    resultTitle: 'Незалежні рекомендації, а не будівельні роботи.',
    result: [
      'Ми надаємо технічні рекомендації щодо подальших дій — від вентиляції та утеплення до гідроізоляції або додаткового обстеження.',
      'Ми не є підрядником, який сам виконує ремонт. Це принципово: діагноз не повинен залежати від того, який матеріал або будівельну послугу комусь вигідно продати.',
      'За потреби можемо допомогти сформулювати технічне завдання для підрядників і порівняти запропоновані рішення.',
    ],
    ventilationEyebrow: 'Приклад рішення',
    ventilationTitle: 'Коли причиною є вентиляція.',
    ventilation: [
      'Якщо конденсат або підвищена вологість спричинені недостатнім повітрообміном, одним із можливих рішень може бути децентралізована вентиляція з рекуперацією тепла.',
      'Такий варіант особливо цікавий для існуючих квартир, де прокладання звичайних вентиляційних каналів потребувало б серйозного ремонту. Але вентиляція — лише один із можливих заходів і розглядається після визначення причини.',
    ],
    onlineEyebrow: 'Первинна дистанційна оцінка',
    onlineTitle: 'Почніть з інформації, яка вже є.',
    online: [
      'Для первинного аналізу надішліть місто і тип об’єкта, короткий опис проблеми, коли вона з’явилась, фотографії уражених зон та, якщо відомо, інформацію про опалення, вентиляцію, нещодавні ремонти або протікання.',
      'За фотографіями й описом часто можна суттєво звузити коло причин. Якщо потрібні вимірювання вологості, температури поверхонь, тепловізійне обстеження або огляд конструкції, ми прямо це зазначимо.',
    ],
    onlineAction: 'Надіслати матеріали поштою',
    knowledgeEyebrow: 'База знань',
    knowledgeTitle: 'Практичні матеріали про вологу, конденсат і плісняву.',
    knowledgeIntro: 'Розділ поступово розширюватиметься у міру накопичення нових діагностичних тем і типових випадків.',
    knowledge: [
      { title: 'Вентиляція як ключ до проблеми конденсату', text: 'Чому повітрообмін може бути вирішальним, коли вологе повітря регулярно контактує з холодними поверхнями.' },
      { title: 'Причини вологи у квартирі: як їх розрізняти', text: 'Місце появи, сезонність, характер плями та конструкція будівлі можуть вказувати на різні механізми зволоження.' },
      { title: 'Пліснява: усувати причину, а не лише пляму', text: 'Очищення поверхні прибирає видимий грибок, але довготривалий результат потребує усунення джерела вологи.' },
    ],
  },
  sr: {
    introEyebrow: 'Prvo dijagnostika — zatim sanacija',
    introTitle: 'Vlaga je simptom. Zadatak je utvrditi mehanizam njenog nastanka.',
    intro: [
      'Naša usluga je usmerena na dijagnostiku i nezavisno tehničko savetovanje. Ne počinjemo od proizvoda za hidroizolaciju, izolacionog sistema, odvlaživača ili izvođača. Počinjemo od objekta, simptoma i uslova u kojima se oni pojavljuju.',
      'Ista buđ ili vlažna mrlja mogu imati potpuno različite uzroke: kondenzaciju, nedovoljnu ventilaciju, toplotne mostove, prodor vode kroz fasadu, curenje instalacija, kapilarnu ili bočnu vlagu ili više faktora istovremeno.',
      'Cilj procene je da utvrdimo najverovatnije uzroke, definišemo šta treba proveriti dalje i damo tehnički obrazložen pravac sanacije.',
    ],
    subjectsEyebrow: 'Predmet analize',
    subjectsTitle: 'Tipične situacije koje analiziramo.',
    subjects: [
      { title: 'Razvoj buđi', text: 'Analiziramo uticaj vlažnosti, cirkulacije vazduha, temperature površina i uslova pogodnih za razvoj gljivica.' },
      { title: 'Kondenzat', text: 'Ispitujemo uticaj toplotnih mostova, izolacije, vlažnosti vazduha i hlađenja površina do tačke rose.' },
      { title: 'Podrumi i donji delovi zidova', text: 'Procenjujemo moguć prodor podzemne vode, kapilarno podizanje ili bočno kretanje vlage kroz zidove.' },
    ],
    factorsEyebrow: 'Šta može biti iza problema',
    factorsTitle: 'Četiri česte grupe uzroka.',
    factors: [
      'Nedostatak ventilacije koji stvara uslove za povišenu vlažnost i razvoj buđi.',
      'Zasićenost vazduha vodenom parom u kombinaciji sa toplotnim i paropropusnim karakteristikama konstrukcije.',
      'Kritične tačke na konstrukciji gde dolazi do gubitka toplote, hlađenja površine i pojave vlage.',
      'Prodor vlage kroz spoljne elemente, fasadu, krov, spojeve, temelje ili oštećenu hidroizolaciju.',
    ],
    methodEyebrow: 'Naš metod',
    methodTitle: 'Od podataka do tehničke preporuke.',
    steps: [
      { n: '01', title: 'Prijavite problem', text: 'Pošaljite detaljne fotografije i osnovne informacije o objektu: gde se problem pojavljuje, kada se pojačava i šta je već pokušano.' },
      { n: '02', title: 'Stručna ocena', text: 'Analiziramo dostavljeni materijal, odvajamo verovatne uzroke od sekundarnih simptoma i definišemo koje faktore treba potvrditi ili isključiti.' },
      { n: '03', title: 'Izveštaj i sledeći korak', text: 'Dobijate jasno tehničko mišljenje sa preporukama: šta proveriti, koje mere razmotriti i da li je potreban izlazak na teren.' },
    ],
    resultEyebrow: 'Naš doprinos',
    resultTitle: 'Nezavisne preporuke, a ne izvođenje radova.',
    result: [
      'Pružamo tehničke preporuke za dalje korake — od ventilacije i izolacije do hidroizolacije ili dodatnog ispitivanja.',
      'Mi nismo izvođači radova. To je namerno: dijagnoza ne treba da zavisi od toga koji proizvod ili građevinsku uslugu neko želi da proda.',
      'Po potrebi možemo pomoći da se formuliše jasan tehnički zadatak za izvođače i da se uporede ponuđena rešenja.',
    ],
    ventilationEyebrow: 'Primer rešenja',
    ventilationTitle: 'Kada je uzrok ventilacija.',
    ventilation: [
      'Kada je uzrok kondenzacije ili povećane vlage nedovoljna ventilacija, jedno od mogućih rešenja je decentralizovana ventilacija sa rekuperacijom toplote.',
      'Ovo može biti posebno korisno u postojećim stanovima gde bi razvod klasičnih ventilacionih kanala zahtevao ozbiljnu rekonstrukciju. Ventilacija je samo jedno moguće rešenje i preporučuje se tek nakon dijagnostike.',
    ],
    onlineEyebrow: 'Početna procena na daljinu',
    onlineTitle: 'Počnite informacijama koje već imate.',
    online: [
      'Za početnu analizu pošaljite grad i tip objekta, kratak opis problema, kada se pojavio, fotografije zahvaćenih zona i, ako je poznato, informacije o grejanju, ventilaciji, skorijim radovima ili curenjima.',
      'Na osnovu fotografija i opisa često je moguće značajno suziti listu mogućih uzroka. Ako su potrebna merenja vlage, temperature površina, termovizijsko snimanje ili pregled konstrukcije, to ćemo jasno navesti.',
    ],
    onlineAction: 'Pošaljite materijal emailom',
    knowledgeEyebrow: 'Saveti za prostor',
    knowledgeTitle: 'Praktični tekstovi o vlazi, kondenzaciji i buđi.',
    knowledgeIntro: 'Ovaj deo će se postepeno širiti novim dijagnostičkim temama i tipičnim problemima.',
    knowledge: [
      { title: 'Ventilacija kao ključno rešenje za kondenzaciju', text: 'Zašto razmena vazduha može biti presudna kada vlažan vazduh redovno dolazi u kontakt sa hladnim površinama.' },
      { title: 'Uzroci vlage u stanovima: kako ih prepoznati', text: 'Mesto pojave, sezonalnost, izgled mrlje i konstrukcija objekta mogu ukazivati na različite mehanizme vlage.' },
      { title: 'Rešenja za buđ: kako se trajno osloboditi problema', text: 'Čišćenje uklanja vidljivu buđ, ali trajna sanacija zahteva uklanjanje izvora vlage.' },
    ],
  },
};

export function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export default async function DampDiagnosticsPage({ params }: Props) {
  const { lang: rawLang } = await params;
  if (!languages.includes(rawLang as Lang)) notFound();
  const lang = rawLang as Lang;
  const t = copy[lang];
  const d = extra[lang];

  return (
    <main>
      <header className="site-header">
        <a className="brand" href={`/${lang}`} aria-label="Koretskiy Consulting home">
          <span className="brand-mark">KC</span>
          <span>Koretskiy Consulting</span>
        </a>
        <div className="header-right">
          <nav>
            <a href={`/${lang}`}>{t.nav.services}</a>
            <a href="#method">{d.methodEyebrow}</a>
            <a href="#online">{d.onlineEyebrow}</a>
            <a href={`/${lang}#contact`}>{t.nav.contact}</a>
          </nav>
          <div className="language-switcher" aria-label="Language selector">
            {languages.map((code) => (
              <a key={code} href={`/${code}/damp-diagnostics`} className={code === lang ? 'active' : ''}>
                {languageNames[code]}
              </a>
            ))}
          </div>
        </div>
      </header>

      <section className="section damp">
        <div className="damp-copy">
          <p className="eyebrow">{t.dampEyebrow}</p>
          <h1 style={{ fontSize: 'clamp(56px, 9vw, 124px)' }}>{t.dampTitle}</h1>
          <p className="lead-small">{t.dampLead}</p>
          <div className="diagnostic-list">
            <span>{t.photo}</span>
            <span>{t.onsite}</span>
          </div>
          <p className="note">{t.dampNote}</p>
        </div>
        <div className="damp-panel">
          <h3>{t.lookFor}</h3>
          <ul>{t.issues.map((issue: string) => <li key={issue}>{issue}</li>)}</ul>
        </div>
      </section>

      <section className="section split">
        <div><p className="eyebrow">{d.introEyebrow}</p><h2>{d.introTitle}</h2></div>
        <div className="prose">{d.intro.map((p) => <p key={p}>{p}</p>)}</div>
      </section>

      <section className="section">
        <div className="section-heading"><p className="eyebrow">{d.subjectsEyebrow}</p><h2>{d.subjectsTitle}</h2></div>
        <div className="cards">
          {d.subjects.map((item, i) => <article className="card" key={item.title}><span className="card-number">0{i + 1}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}
        </div>
      </section>

      <section className="section">
        <div className="section-heading"><p className="eyebrow">{d.factorsEyebrow}</p><h2>{d.factorsTitle}</h2></div>
        <div className="factor-grid">{d.factors.map((item, i) => <div className="factor-item" key={item}><span>[0{i + 1}]</span><p>{item}</p></div>)}</div>
      </section>

      <section className="section" id="method">
        <div className="section-heading"><p className="eyebrow">{d.methodEyebrow}</p><h2>{d.methodTitle}</h2></div>
        <div className="method-steps">{d.steps.map((s) => <article className="method-step" key={s.n}><span>{s.n}</span><h3>{s.title}</h3><p>{s.text}</p></article>)}</div>
      </section>

      <section className="section split">
        <div><p className="eyebrow">{d.resultEyebrow}</p><h2>{d.resultTitle}</h2></div>
        <div className="prose">{d.result.map((p) => <p key={p}>{p}</p>)}</div>
      </section>

      <section className="section split solution-example">
        <div><p className="eyebrow">{d.ventilationEyebrow}</p><h2>{d.ventilationTitle}</h2></div>
        <div className="prose">{d.ventilation.map((p) => <p key={p}>{p}</p>)}</div>
      </section>

      <section className="section online-analysis" id="online">
        <div><p className="eyebrow">{d.onlineEyebrow}</p><h2>{d.onlineTitle}</h2><div className="prose">{d.online.map((p) => <p key={p}>{p}</p>)}</div></div>
        <div className="online-cta"><a className="button button-dark" href="mailto:consulting@koretskiy.com?subject=Damp%20diagnostics">{d.onlineAction}</a><p>consulting@koretskiy.com</p></div>
      </section>

      <section className="section">
        <div className="section-heading"><div><p className="eyebrow">{d.knowledgeEyebrow}</p><p className="knowledge-intro">{d.knowledgeIntro}</p></div><h2>{d.knowledgeTitle}</h2></div>
        <div className="cards">{d.knowledge.map((item, i) => <article className="card" key={item.title}><span className="card-number">0{i + 1}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
      </section>

      <section className="section contact">
        <p className="eyebrow">{t.contact}</p>
        <h2>{t.contactTitle}</h2>
        <p>{t.contactText}</p>
        <a className="button button-dark" href="mailto:consulting@koretskiy.com?subject=Damp%20diagnostics">consulting@koretskiy.com</a>
      </section>
    </main>
  );
}
