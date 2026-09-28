import type { Lang } from './translations';

export type MethodologyPage = {
  slug: string;
  title: string;
  eyebrow: string;
  lead: string;
  sections: { title: string; paragraphs?: string[]; bullets?: string[] }[];
  related?: { href: string; label: string }[];
};

type MethodologyCopy = {
  authorship: string;
  pdfTitle: string;
  pdfText: string;
  pdfPending: string;
  softwareLabel: string;
  softwareText: string;
  softwareCta: string;
  pages: Record<string, MethodologyPage>;
};

const commonPages: Record<Lang, Record<string, MethodologyPage>> = {
  ru: {
    'opportunity-assessment': {
      slug: 'opportunity-assessment',
      eyebrow: 'Koretskiy Methodology',
      title: 'Opportunity Assessment',
      lead: 'Структурированная оценка проекта, технологии, разработки или бизнес-возможности до того, как на неё будут потрачены значительные деньги и время.',
      sections: [
        { title: 'Задача оценки', paragraphs: ['Цель — не доказать, что идея хорошая, и не написать максимально большой отчёт. Цель — показать, что известно, что не известно, где находятся критические ограничения и какой следующий шаг действительно способен изменить решение.'] },
        { title: 'Что рассматривается', bullets: ['реальная цель и ожидаемый результат;', 'текущий bottleneck;', 'техническая и физическая правдоподобность;', 'рынок, аналоги и prior art;', 'ресурсы и ограничения;', 'критические неизвестные;', 'условия, при которых направление следует изменить или остановить;', 'минимально достаточный следующий шаг.'] },
        { title: 'Результат', paragraphs: ['Результатом является не «оценка идеи» в отрыве от реальности, а карта решения: что подтверждено, что остаётся предположением, какие противоречия существенны и что необходимо проверить дальше.'] },
      ],
      related: [
        { href: '/methodology/research-verification', label: 'Исследование и верификация' },
        { href: '/methodology/uncertainty', label: 'Неопределённость и противоречивые данные' },
      ],
    },
    'research-verification': {
      slug: 'research-verification',
      eyebrow: 'Research & Verification',
      title: 'Исследование и инженерная верификация',
      lead: 'Доказательства должны предшествовать выводу, а источник и статус каждого существенного утверждения должны быть понятны.',
      sections: [
        { title: 'Основные принципы', bullets: ['факт отделяется от вывода и предположения;', 'данные клиента не считаются независимо подтверждёнными без проверки;', 'источник и происхождение данных сохраняются;', 'противоречивые источники не скрываются;', '«не найдено» не означает «не существует»;', 'глубина исследования соответствует значимости решения.'] },
        { title: 'Минимально достаточное исследование', paragraphs: ['Исследование не должно становиться бесконечным сбором информации. Оно должно продолжаться до уровня, на котором дополнительная информация уже не меняет решение либо ясно показывает, какое следующее доказательство необходимо получить.'] },
      ],
    },
    'engineering-estimates': {
      slug: 'engineering-estimates',
      eyebrow: 'Engineering Estimates',
      title: 'Инженерные оценки и расчёты',
      lead: 'Число само по себе не является доказательством. Важно понимать модель, допущения, диапазон применимости и чувствительность результата.',
      sections: [
        { title: 'Структура оценки', paragraphs: ['Исходные данные → Формула или модель → Единицы → Допущения → Диапазон → Чувствительность → Ограничения → Необходимая валидация.'] },
        { title: 'Различаем', bullets: ['теоретическую оценку;', 'оценку порядка величины;', 'benchmark;', 'инженерный расчёт;', 'сценарий;', 'анализ чувствительности;', 'измеренное значение.'] },
        { title: 'Принцип', paragraphs: ['Расчёт не становится доказательством только потому, что в нём много знаков после запятой.'] },
      ],
    },
    quality: {
      slug: 'quality',
      eyebrow: 'Quality Standard',
      title: 'Стандарт качества инженерного анализа',
      lead: 'Качество определяется не объёмом документа, а тем, можно ли проследить логику решения, увидеть неопределённость и понять, что необходимо сделать дальше.',
      sections: [
        { title: 'Критерии качества', bullets: ['decision usefulness;', 'прослеживаемость источников и допущений;', 'явное разделение фактов, выводов и гипотез;', 'видимые противоречия;', 'отсутствие ложной точности;', 'пропорциональность глубины анализа риску решения;', 'понятный следующий шаг.'] },
        { title: 'Не повторять работу без причины', paragraphs: ['Уже выполненные исследования и расчёты сохраняются и переиспользуются, пока новые данные, конфликт источников или изменение задачи не создают основание для пересмотра.'] },
      ],
    },
    'expert-supervision': {
      slug: 'expert-supervision',
      eyebrow: 'Human Expert',
      title: 'Экспертный надзор и роль человека',
      lead: 'AI способен ускорить поиск, сравнение, расчёты и генерацию вариантов. Ответственность за инженерное суждение остаётся за человеком.',
      sections: [
        { title: 'AI полезен для', bullets: ['поиска и извлечения информации;', 'анализа документов;', 'сравнения вариантов;', 'расчётов;', 'поиска аналогов;', 'генерации кандидатов решения;', 'подготовки черновиков.'] },
        { title: 'Эксперт отвечает за', bullets: ['постановку реальной задачи;', 'релевантность данных;', 'выделение существенного противоречия;', 'допустимость предположений;', 'safety significance;', 'контекст решения;', 'необходимость профильного специалиста.'] },
        { title: 'Принцип', paragraphs: ['AI может сгенерировать ответ. Инженерия требует определить, можно ли этому ответу доверять.'] },
      ],
    },
    uncertainty: {
      slug: 'uncertainty',
      eyebrow: 'Uncertainty',
      title: 'Неопределённость и противоречивые данные',
      lead: 'Неизвестные и конфликты данных не должны маскироваться уверенным текстом. Они являются частью инженерного результата.',
      sections: [
        { title: 'Статусы знания', bullets: ['известное / факт;', 'данные клиента;', 'независимо проверенные данные;', 'вывод;', 'предположение;', 'гипотеза;', 'неизвестное;', 'критически важное неизвестное.'] },
        { title: 'Условные выводы', paragraphs: ['Если решение зависит от неподтверждённого параметра, вывод должен быть условным: что можно утверждать сейчас, какое условие должно быть выполнено и какое доказательство снимет неопределённость.'] },
      ],
    },
    checkopp: {
      slug: 'checkopp',
      eyebrow: 'Software implementation',
      title: 'CheckOpp — программная реализация методологии',
      lead: 'CheckOpp формализует существенную часть методологии в виде воспроизводимого аналитического процесса для работы с конкретными проектами и возможностями.',
      sections: [
        { title: 'Что переносится в программную систему', bullets: ['Opportunity Assessment;', 'структурирование известных и неизвестных данных;', 'research & verification;', 'работа с противоречиями и рисками;', 'ARITZ как отдельный маршрут инженерного решения;', 'контроль качества и экспертная эскалация.'] },
        { title: 'Что остаётся методологией', paragraphs: ['koretskiy.com описывает принципы, логику и публичные стандарты. CheckOpp реализует часть этой логики как программный аналитический сервис. Внутренняя архитектура, служебные статусы и технические механизмы CheckOpp не являются частью публичной методологии.'] },
      ],
    },
    'business-processes': {
      slug: 'business-processes',
      eyebrow: 'Business Processes',
      title: 'Анализ и модернизация бизнес-процессов',
      lead: 'Та же логика системного анализа применима к процессам: сначала цель и границы, затем bottleneck, противоречия, ресурсы, варианты изменения и проверка результата.',
      sections: [
        { title: 'Базовая последовательность', paragraphs: ['Цель → Границы процесса → Текущее состояние → Узкое место → Противоречия → Ресурсы → Альтернативы → Проверка → Перестроенный процесс → Метрики.'] },
        { title: 'Область применения', bullets: ['операционные процессы;', 'взаимодействие подразделений;', 'закупки и согласования;', 'процессы продаж и обслуживания;', 'техническое управление;', 'процессы принятия решений;', 'модернизация существующих процедур без обязательной замены всей системы.'] },
        { title: 'Цифровая реализация', paragraphs: ['Методология может быть основой специализированного цифрового инструмента для анализа и модернизации бизнес-процессов. Отдельный программный продукт будет представлен только после появления реальной работающей реализации.'] },
      ],
    },
    library: {
      slug: 'library',
      eyebrow: 'Reference Library',
      title: 'Публичная библиотека методологии',
      lead: 'Здесь будут доступны справочные версии методологии для просмотра и скачивания.',
      sections: [
        { title: 'Языки', bullets: ['Русский;', 'English;', 'Українська;', 'Srpski.'] },
        { title: 'Формат', paragraphs: ['PDF-файлы готовятся параллельно и будут добавлены сюда после публикации. Предпочтительный вариант — просмотр в браузере и прямое скачивание с koretskiy.com при сохранении мастер-копий в Google Drive.'] },
      ],
    },
  },
  en: {},
  uk: {},
  sr: {},
};

const translations: Record<Exclude<Lang, 'ru'>, Record<string, MethodologyPage>> = {
  en: {
    'opportunity-assessment': {
      slug: 'opportunity-assessment', eyebrow: 'Koretskiy Methodology', title: 'Opportunity Assessment',
      lead: 'A structured assessment of a project, technology, development or business opportunity before substantial time and money are committed.',
      sections: [
        { title: 'Purpose', paragraphs: ['The purpose is not to prove that an idea is good or to produce the largest possible report. It is to show what is known, what is not known, where the critical constraints are and which next step can materially change the decision.'] },
        { title: 'What is assessed', bullets: ['the real objective and desired outcome;', 'the current bottleneck;', 'technical and physical plausibility;', 'market, analogues and prior art;', 'resources and constraints;', 'critical unknowns;', 'conditions that would change or stop the direction;', 'the smallest decision-relevant next step.'] },
        { title: 'Output', paragraphs: ['The result is a decision map: what is supported, what remains an assumption, which contradictions matter and what should be verified next.'] },
      ],
      related: [{ href: '/methodology/research-verification', label: 'Research & Verification' }, { href: '/methodology/uncertainty', label: 'Uncertainty & conflicting evidence' }],
    },
    'research-verification': {
      slug:'research-verification', eyebrow:'Research & Verification', title:'Research and engineering verification',
      lead:'Evidence should precede conclusions, and the origin and status of every material claim should be understandable.',
      sections:[
        {title:'Core principles', bullets:['separate fact from inference and assumption;','client-provided data is not independently verified unless actually checked;','preserve source provenance;','keep conflicting evidence visible;','“not found” does not mean “does not exist”;','research depth should match decision significance.']},
        {title:'Minimum sufficient research', paragraphs:['Research should not become endless information collection. It should continue until more information is unlikely to change the decision, or until the next evidence needed is clearly identified.']},
      ],
    },
    'engineering-estimates': {
      slug:'engineering-estimates', eyebrow:'Engineering Estimates', title:'Engineering estimates and calculations',
      lead:'A number is not evidence by itself. The model, assumptions, applicable range and sensitivity of the result must be visible.',
      sections:[
        {title:'Estimate structure', paragraphs:['Inputs → Formula or model → Units → Assumptions → Range → Sensitivity → Limitations → Validation need.']},
        {title:'We distinguish', bullets:['theoretical estimate;','order-of-magnitude estimate;','benchmark;','engineering calculation;','scenario;','sensitivity analysis;','measured value.']},
        {title:'Principle', paragraphs:['A calculation does not become evidence simply because it contains many decimal places.']},
      ],
    },
    quality: {
      slug:'quality', eyebrow:'Quality Standard', title:'Engineering analysis quality standard',
      lead:'Quality is not the volume of a document. It is whether the reasoning can be traced, uncertainty can be seen and the next action is clear.',
      sections:[
        {title:'Quality criteria', bullets:['decision usefulness;','traceable sources and assumptions;','clear separation of facts, inferences and hypotheses;','visible contradictions;','no false precision;','analysis depth proportional to decision risk;','a clear next step.']},
        {title:'Do not repeat work without cause', paragraphs:['Completed research and calculations are preserved and reused until new evidence, a source conflict or a changed task justifies revision.']},
      ],
    },
    'expert-supervision': {
      slug:'expert-supervision', eyebrow:'Human Expert', title:'Expert supervision and the human role',
      lead:'AI can accelerate search, comparison, calculations and candidate generation. Engineering judgement and responsibility remain human.',
      sections:[
        {title:'AI is useful for', bullets:['research and retrieval;','document analysis;','comparison;','calculations;','analogue search;','candidate generation;','drafting.']},
        {title:'The expert remains responsible for', bullets:['defining the real problem;','relevance of evidence;','material contradictions;','acceptable assumptions;','safety significance;','decision context;','specialist escalation.']},
        {title:'Principle', paragraphs:['AI may generate an answer. Engineering requires determining whether that answer is allowed to be trusted.']},
      ],
    },
    uncertainty: {
      slug:'uncertainty', eyebrow:'Uncertainty', title:'Uncertainty and conflicting evidence',
      lead:'Unknowns and conflicts should not be hidden behind confident prose. They are part of the engineering result.',
      sections:[
        {title:'Knowledge states', bullets:['known / fact;','client-provided;','independently verified;','inference;','assumption;','hypothesis;','unknown;','critical unknown.']},
        {title:'Conditional conclusions', paragraphs:['When a decision depends on an unverified parameter, the conclusion should state what can be said now, which condition must hold and which evidence would resolve the uncertainty.']},
      ],
    },
    checkopp: {
      slug:'checkopp', eyebrow:'Software implementation', title:'CheckOpp — software implementation of the methodology',
      lead:'CheckOpp formalizes substantial parts of the methodology as a reproducible analytical process for real projects and opportunities.',
      sections:[
        {title:'What is implemented', bullets:['Opportunity Assessment;','structured knowns and unknowns;','research & verification;','conflict and risk handling;','ARITZ as an engineering problem-solving route;','quality control and expert escalation.']},
        {title:'What remains methodology', paragraphs:['koretskiy.com explains the public principles, logic and standards. CheckOpp implements part of that logic as an analytical software service. Its internal architecture, runtime statuses and technical mechanisms are not part of the public methodology.']},
      ],
    },
    'business-processes': {
      slug:'business-processes', eyebrow:'Business Processes', title:'Business-process analysis and modernization',
      lead:'The same system logic can be applied to processes: objective and boundary first, then bottleneck, contradictions, resources, alternatives and verification.',
      sections:[
        {title:'Core sequence', paragraphs:['Goal → Process Boundary → Current State → Bottleneck → Contradictions → Resources → Alternatives → Verification → Redesigned Process → Metrics.']},
        {title:'Applications', bullets:['operations;','cross-functional workflows;','procurement and approvals;','sales and service processes;','technical management;','decision processes;','modernization of existing procedures without automatically replacing the whole system.']},
        {title:'Digital implementation', paragraphs:['The methodology can become the basis of a specialized digital tool for business-process analysis and modernization. A separate product should only be presented once a real working implementation exists.']},
      ],
    },
    library: {
      slug:'library', eyebrow:'Reference Library', title:'Public methodology library',
      lead:'Reference editions of the methodology will be available here for viewing and download.',
      sections:[
        {title:'Languages', bullets:['Русский;','English;','Українська;','Srpski.']},
        {title:'Format', paragraphs:['The PDF editions are being prepared in parallel and will be added here after publication. The preferred setup is browser viewing and direct download from koretskiy.com while master copies remain stored in Google Drive.']},
      ],
    },
  },
  uk: {
    'opportunity-assessment': {slug:'opportunity-assessment', eyebrow:'Koretskiy Methodology', title:'Opportunity Assessment', lead:'Структурована оцінка проєкту, технології, розробки або бізнес-можливості до того, як на неї буде витрачено значні час і кошти.', sections:[{title:'Мета оцінки',paragraphs:['Мета — не довести, що ідея хороша, а показати, що відомо, що невідомо, де критичні обмеження і який наступний крок здатний реально змінити рішення.']},{title:'Що розглядається',bullets:['реальна мета та очікуваний результат;','поточне вузьке місце;','технічна і фізична правдоподібність;','ринок, аналоги та prior art;','ресурси й обмеження;','критичні невідомі;','умови зміни або зупинки напряму;','мінімально достатній наступний крок.']},{title:'Результат',paragraphs:['Результат — карта рішення: що підтверджено, що залишається припущенням, які суперечності суттєві і що потрібно перевірити далі.']}], related:[{href:'/methodology/research-verification',label:'Дослідження та верифікація'},{href:'/methodology/uncertainty',label:'Невизначеність і суперечливі дані'}]},
    'research-verification': {slug:'research-verification',eyebrow:'Research & Verification',title:'Дослідження та інженерна верифікація',lead:'Докази мають передувати висновку, а походження і статус кожного суттєвого твердження мають бути зрозумілими.',sections:[{title:'Основні принципи',bullets:['відокремлювати факт від висновку і припущення;','дані клієнта не вважати незалежно перевіреними без фактичної перевірки;','зберігати походження джерел;','не приховувати суперечливі дані;','«не знайдено» не означає «не існує»;','глибина дослідження відповідає значущості рішення.']},{title:'Мінімально достатнє дослідження',paragraphs:['Дослідження триває до рівня, на якому додаткова інформація вже не змінює рішення або чітко визначає наступний доказ, який потрібно отримати.']}]},
    'engineering-estimates': {slug:'engineering-estimates',eyebrow:'Engineering Estimates',title:'Інженерні оцінки та розрахунки',lead:'Число саме по собі не є доказом. Важливо бачити модель, припущення, діапазон застосування та чутливість результату.',sections:[{title:'Структура оцінки',paragraphs:['Вхідні дані → Формула або модель → Одиниці → Припущення → Діапазон → Чутливість → Обмеження → Необхідна валідація.']},{title:'Розрізняємо',bullets:['теоретичну оцінку;','оцінку порядку величини;','benchmark;','інженерний розрахунок;','сценарій;','аналіз чутливості;','виміряне значення.']},{title:'Принцип',paragraphs:['Розрахунок не стає доказом лише тому, що містить багато знаків після коми.']}]},
    quality: {slug:'quality',eyebrow:'Quality Standard',title:'Стандарт якості інженерного аналізу',lead:'Якість визначається не обсягом документа, а тим, чи можна простежити логіку рішення, побачити невизначеність і зрозуміти наступну дію.',sections:[{title:'Критерії якості',bullets:['корисність для рішення;','простежуваність джерел і припущень;','розділення фактів, висновків і гіпотез;','видимі суперечності;','відсутність хибної точності;','глибина аналізу пропорційна ризику;','чіткий наступний крок.']},{title:'Не повторювати роботу без причини',paragraphs:['Завершені дослідження і розрахунки зберігаються та повторно використовуються, доки нові дані, конфлікт джерел або зміна задачі не вимагають перегляду.']}]},
    'expert-supervision': {slug:'expert-supervision',eyebrow:'Human Expert',title:'Експертний нагляд і роль людини',lead:'AI може прискорити пошук, порівняння, розрахунки та генерацію варіантів. Інженерне судження і відповідальність залишаються за людиною.',sections:[{title:'AI корисний для',bullets:['пошуку інформації;','аналізу документів;','порівняння;','розрахунків;','пошуку аналогів;','генерації кандидатів;','підготовки чернеток.']},{title:'Експерт відповідає за',bullets:['постановку реальної задачі;','релевантність доказів;','суттєві суперечності;','допустимість припущень;','safety significance;','контекст рішення;','залучення профільного спеціаліста.']},{title:'Принцип',paragraphs:['AI може згенерувати відповідь. Інженерія вимагає визначити, чи можна цій відповіді довіряти.']}]},
    uncertainty: {slug:'uncertainty',eyebrow:'Uncertainty',title:'Невизначеність і суперечливі дані',lead:'Невідомі та конфлікти даних не повинні маскуватися впевненим текстом. Вони є частиною інженерного результату.',sections:[{title:'Статуси знання',bullets:['відоме / факт;','дані клієнта;','незалежно перевірені дані;','висновок;','припущення;','гіпотеза;','невідоме;','критично важливе невідоме.']},{title:'Умовні висновки',paragraphs:['Коли рішення залежить від неперевіреного параметра, висновок має показувати, що можна стверджувати зараз, яка умова має виконуватися і який доказ зніме невизначеність.']}]},
    checkopp: {slug:'checkopp',eyebrow:'Software implementation',title:'CheckOpp — програмна реалізація методології',lead:'CheckOpp формалізує суттєву частину методології як відтворюваний аналітичний процес для реальних проєктів і можливостей.',sections:[{title:'Що реалізується',bullets:['Opportunity Assessment;','структурування відомого і невідомого;','research & verification;','робота з конфліктами і ризиками;','ARITZ як маршрут інженерного рішення;','контроль якості та експертна ескалація.']},{title:'Що залишається методологією',paragraphs:['koretskiy.com описує публічні принципи, логіку і стандарти. CheckOpp реалізує частину цієї логіки як програмний аналітичний сервіс. Внутрішня архітектура, runtime-статуси й технічні механізми не є частиною публічної методології.']}]},
    'business-processes': {slug:'business-processes',eyebrow:'Business Processes',title:'Аналіз і модернізація бізнес-процесів',lead:'Та сама системна логіка застосовується до процесів: спочатку мета і межі, потім вузьке місце, суперечності, ресурси, альтернативи і перевірка.',sections:[{title:'Базова послідовність',paragraphs:['Мета → Межі процесу → Поточний стан → Вузьке місце → Суперечності → Ресурси → Альтернативи → Перевірка → Перебудований процес → Метрики.']},{title:'Застосування',bullets:['операційні процеси;','взаємодія підрозділів;','закупівлі та погодження;','продажі й обслуговування;','технічне управління;','процеси прийняття рішень;','модернізація наявних процедур без автоматичної заміни всієї системи.']},{title:'Цифрова реалізація',paragraphs:['Методологія може стати основою спеціалізованого цифрового інструмента. Окремий продукт буде представлено тільки після появи реально працюючої реалізації.']}]},
    library: {slug:'library',eyebrow:'Reference Library',title:'Публічна бібліотека методології',lead:'Тут будуть доступні довідкові версії методології для перегляду і завантаження.',sections:[{title:'Мови',bullets:['Русский;','English;','Українська;','Srpski.']},{title:'Формат',paragraphs:['PDF-версії готуються паралельно і будуть додані після публікації. Бажаний варіант — перегляд у браузері та пряме завантаження з koretskiy.com зі збереженням master-копій у Google Drive.']}]},
  },
  sr: {
    'opportunity-assessment': {slug:'opportunity-assessment',eyebrow:'Koretskiy Methodology',title:'Opportunity Assessment',lead:'Strukturisana procena projekta, tehnologije, razvoja ili poslovne prilike pre nego što se ulože značajno vreme i novac.',sections:[{title:'Cilj procene',paragraphs:['Cilj nije da se dokaže da je ideja dobra, već da se pokaže šta je poznato, šta nije poznato, gde su kritična ograničenja i koji sledeći korak može stvarno promeniti odluku.']},{title:'Šta se razmatra',bullets:['stvarni cilj i željeni rezultat;','trenutno usko grlo;','tehnička i fizička izvodljivost;','tržište, analogije i prior art;','resursi i ograničenja;','kritične nepoznanice;','uslovi za promenu ili zaustavljanje pravca;','najmanji sledeći korak relevantan za odluku.']},{title:'Rezultat',paragraphs:['Rezultat je mapa odluke: šta je potvrđeno, šta ostaje pretpostavka, koje su kontradikcije važne i šta treba proveriti dalje.']}],related:[{href:'/methodology/research-verification',label:'Istraživanje i verifikacija'},{href:'/methodology/uncertainty',label:'Neizvesnost i konfliktni podaci'}]},
    'research-verification': {slug:'research-verification',eyebrow:'Research & Verification',title:'Istraživanje i inženjerska verifikacija',lead:'Dokazi treba da prethode zaključku, a poreklo i status svake važne tvrdnje treba da budu jasni.',sections:[{title:'Osnovni principi',bullets:['odvojiti činjenicu od zaključka i pretpostavke;','podatke klijenta ne smatrati nezavisno potvrđenim bez stvarne provere;','sačuvati poreklo izvora;','ne skrivati konfliktne dokaze;','„nije pronađeno” ne znači „ne postoji”;','dubina istraživanja odgovara značaju odluke.']},{title:'Minimalno dovoljno istraživanje',paragraphs:['Istraživanje se nastavlja dok dodatne informacije više verovatno ne menjaju odluku ili dok se jasno ne utvrdi koji sledeći dokaz treba pribaviti.']}]},
    'engineering-estimates': {slug:'engineering-estimates',eyebrow:'Engineering Estimates',title:'Inženjerske procene i proračuni',lead:'Broj sam po sebi nije dokaz. Potrebno je videti model, pretpostavke, opseg primene i osetljivost rezultata.',sections:[{title:'Struktura procene',paragraphs:['Ulazni podaci → Formula ili model → Jedinice → Pretpostavke → Opseg → Osetljivost → Ograničenja → Potrebna validacija.']},{title:'Razlikujemo',bullets:['teorijsku procenu;','procenu reda veličine;','benchmark;','inženjerski proračun;','scenario;','analizu osetljivosti;','izmerenu vrednost.']},{title:'Princip',paragraphs:['Proračun ne postaje dokaz samo zato što sadrži mnogo decimalnih mesta.']}]},
    quality: {slug:'quality',eyebrow:'Quality Standard',title:'Standard kvaliteta inženjerske analize',lead:'Kvalitet nije obim dokumenta, već mogućnost da se prati logika odluke, vidi neizvesnost i razume sledeći korak.',sections:[{title:'Kriterijumi kvaliteta',bullets:['korisnost za odluku;','sledljivost izvora i pretpostavki;','jasno odvajanje činjenica, zaključaka i hipoteza;','vidljive kontradikcije;','bez lažne preciznosti;','dubina analize proporcionalna riziku odluke;','jasan sledeći korak.']},{title:'Ne ponavljati posao bez razloga',paragraphs:['Završena istraživanja i proračuni čuvaju se i ponovo koriste dok novi podaci, konflikt izvora ili promena zadatka ne opravdaju reviziju.']}]},
    'expert-supervision': {slug:'expert-supervision',eyebrow:'Human Expert',title:'Ekspertski nadzor i uloga čoveka',lead:'AI može ubrzati pretragu, poređenje, proračune i generisanje opcija. Inženjersko prosuđivanje i odgovornost ostaju ljudski.',sections:[{title:'AI je koristan za',bullets:['pretragu i pronalaženje informacija;','analizu dokumenata;','poređenje;','proračune;','traženje analogija;','generisanje kandidata;','izradu nacrta.']},{title:'Ekspert odgovara za',bullets:['definisanje stvarnog problema;','relevantnost dokaza;','materijalne kontradikcije;','prihvatljivost pretpostavki;','safety significance;','kontekst odluke;','uključivanje specijaliste.']},{title:'Princip',paragraphs:['AI može generisati odgovor. Inženjerstvo zahteva procenu da li tom odgovoru sme da se veruje.']}]},
    uncertainty: {slug:'uncertainty',eyebrow:'Uncertainty',title:'Neizvesnost i konfliktni podaci',lead:'Nepoznanice i konflikti podataka ne treba da budu sakriveni iza samouverenog teksta. Oni su deo inženjerskog rezultata.',sections:[{title:'Statusi znanja',bullets:['poznato / činjenica;','podaci klijenta;','nezavisno potvrđeni podaci;','zaključak;','pretpostavka;','hipoteza;','nepoznato;','kritična nepoznanica.']},{title:'Uslovni zaključci',paragraphs:['Kada odluka zavisi od nepotvrđenog parametra, zaključak treba da pokaže šta se sada može tvrditi, koji uslov mora da važi i koji dokaz bi uklonio neizvesnost.']}]},
    checkopp: {slug:'checkopp',eyebrow:'Software implementation',title:'CheckOpp — softverska realizacija metodologije',lead:'CheckOpp formalizuje značajan deo metodologije kao ponovljiv analitički proces za realne projekte i prilike.',sections:[{title:'Šta se realizuje',bullets:['Opportunity Assessment;','strukturisanje poznatog i nepoznatog;','research & verification;','rad sa konfliktima i rizicima;','ARITZ kao ruta za inženjersko rešavanje problema;','kontrola kvaliteta i ekspertska eskalacija.']},{title:'Šta ostaje metodologija',paragraphs:['koretskiy.com objašnjava javne principe, logiku i standarde. CheckOpp realizuje deo te logike kao softverski analitički servis. Interna arhitektura, runtime statusi i tehnički mehanizmi nisu deo javne metodologije.']}]},
    'business-processes': {slug:'business-processes',eyebrow:'Business Processes',title:'Analiza i modernizacija poslovnih procesa',lead:'Ista sistemska logika može se primeniti na procese: prvo cilj i granice, zatim usko grlo, kontradikcije, resursi, alternative i provera.',sections:[{title:'Osnovni sled',paragraphs:['Cilj → Granice procesa → Trenutno stanje → Usko grlo → Kontradikcije → Resursi → Alternative → Provera → Redizajnirani proces → Metrike.']},{title:'Primena',bullets:['operativni procesi;','međusektorski tokovi;','nabavka i odobravanja;','prodaja i korisničke usluge;','tehničko upravljanje;','procesi donošenja odluka;','modernizacija postojećih procedura bez automatske zamene čitavog sistema.']},{title:'Digitalna realizacija',paragraphs:['Metodologija može biti osnova specijalizovanog digitalnog alata za analizu i modernizaciju poslovnih procesa. Poseban proizvod treba predstavljati tek kada postoji stvarna radna realizacija.']}]},
    library: {slug:'library',eyebrow:'Reference Library',title:'Javna biblioteka metodologije',lead:'Ovde će biti dostupna referentna izdanja metodologije za pregled i preuzimanje.',sections:[{title:'Jezici',bullets:['Русский;','English;','Українська;','Srpski.']},{title:'Format',paragraphs:['PDF izdanja se pripremaju paralelno i biće dodata nakon objavljivanja. Poželjno rešenje je pregled u pregledaču i direktno preuzimanje sa koretskiy.com, dok master kopije ostaju u Google Drive-u.']}]},
  },
};

commonPages.en = translations.en;
commonPages.uk = translations.uk;
commonPages.sr = translations.sr;

export const methodology: Record<Lang, MethodologyCopy> = {
  ru: {
    authorship: 'Методология разработана Александром Корецким на основе многолетней инженерной, проектной и консультационной практики и формализована для системного анализа технических, технологических и бизнес-задач.',
    pdfTitle: 'Справочная версия методологии',
    pdfText: 'Публичная краткая версия методологии доступна на русском, английском, украинском и сербском языках для просмотра в браузере и скачивания.',
    pdfPending: 'Открыть библиотеку PDF',
    softwareLabel: 'Программная реализация',
    softwareText: 'Существенная часть методологии формализована в аналитической системе CheckOpp.',
    softwareCta: 'Открыть CheckOpp',
    pages: commonPages.ru,
  },
  en: {
    authorship: 'The methodology was developed by Oleksandr Koretskiy from long-term engineering, project and consulting practice and formalized for systematic analysis of technical, technological and business problems.',
    pdfTitle: 'Methodology reference edition',
    pdfText: 'The public methodology summary is available in Russian, English, Ukrainian and Serbian for browser viewing and download.',
    pdfPending: 'Open PDF library',
    softwareLabel: 'Software implementation',
    softwareText: 'Substantial parts of the methodology are formalized in the CheckOpp analytical system.',
    softwareCta: 'Open CheckOpp',
    pages: commonPages.en,
  },
  uk: {
    authorship: 'Методологію розробив Олександр Корецький на основі багаторічної інженерної, проєктної та консультаційної практики і формалізував для системного аналізу технічних, технологічних та бізнес-задач.',
    pdfTitle: 'Довідкова версія методології',
    pdfText: 'Публічна коротка версія методології доступна російською, англійською, українською та сербською мовами для перегляду у браузері та завантаження.',
    pdfPending: 'Відкрити бібліотеку PDF',
    softwareLabel: 'Програмна реалізація',
    softwareText: 'Суттєву частину методології формалізовано в аналітичній системі CheckOpp.',
    softwareCta: 'Відкрити CheckOpp',
    pages: commonPages.uk,
  },
  sr: {
    authorship: 'Metodologiju je razvio Oleksandr Koretskiy na osnovu dugogodišnje inženjerske, projektne i konsultantske prakse i formalizovao je za sistemsku analizu tehničkih, tehnoloških i poslovnih problema.',
    pdfTitle: 'Referentno izdanje metodologije',
    pdfText: 'Javni sažetak metodologije dostupan je na ruskom, engleskom, ukrajinskom i srpskom jeziku za pregled u pregledaču i preuzimanje.',
    pdfPending: 'Otvori PDF biblioteku',
    softwareLabel: 'Softverska realizacija',
    softwareText: 'Značajan deo metodologije formalizovan je u analitičkom sistemu CheckOpp.',
    softwareCta: 'Otvori CheckOpp',
    pages: commonPages.sr,
  },
};

export const methodologySlugs = [
  'opportunity-assessment',
  'research-verification',
  'engineering-estimates',
  'quality',
  'expert-supervision',
  'uncertainty',
  'checkopp',
  'business-processes',
  'library',
] as const;
