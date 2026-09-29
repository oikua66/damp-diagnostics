import type { Lang } from './translations';
import type { AritzPage } from './aritz';

export const aritzExtraSlugs = [
  'engineering-estimates',
  'evidence-validation',
  'safety-stop',
  'human-expert',
  'uncertainty',
  'aritz-vs-triz',
  'cases',
  'faq',
] as const;

const extra: Record<Lang, Record<string, AritzPage>> = {
  ru: {
    'engineering-estimates': {
      slug:'engineering-estimates',
      title:'Инженерные оценки и расчёты в ARITZ',
      lead:'Расчёт используется не как украшение идеи, а как способ проверить её физический смысл, диапазон работоспособности и чувствительность к исходным данным.',
      sections:[
        {title:'Что должен показывать расчёт',bullets:['исходные данные и их источник;','единицы измерения;','формулу или модель;','ключевые допущения;','диапазон применимости;','чувствительность результата;','ограничения модели;','что ещё требуется проверить.']},
        {title:'Когда точное число неуместно',paragraphs:['Если исходные данные недостаточны или параметр зависит от режима, вместо одного «точного» значения используются диапазоны, сценарии и анализ чувствительности. Ложная точность не повышает качество решения.']},
      ],
    },
    'evidence-validation': {
      slug:'evidence-validation',
      title:'Доказательства и валидация',
      lead:'Для каждого существенного вывода должно быть понятно, на чём он основан и насколько сильна эта опора.',
      sections:[
        {title:'Статусы доказательств',bullets:['факт / известное;','данные клиента;','независимо проверенные данные;','инженерный вывод;','предположение;','гипотеза;','неизвестное;','критически важное неизвестное.']},
        {title:'Правила проверки',bullets:['данные клиента не становятся независимым фактом без проверки;','публичные значения используются как диапазоны или сценарные предположения, если нет подтверждения для конкретного проекта;','отсутствие найденного аналога не доказывает новизну;','отсутствие найденного требования не доказывает, что требования нет;','конфликтующие источники не усредняются механически.']},
        {title:'Цель валидации',paragraphs:['Валидация нужна не для того, чтобы сделать текст убедительнее, а чтобы понять, какое решение уже допустимо, а что ещё рано утверждать.']},
      ],
    },
    'safety-stop': {
      slug:'safety-stop',
      title:'Безопасность и условия остановки анализа',
      lead:'Методология должна уметь не только продолжать поиск решения, но и вовремя остановиться, если неопределённость, риск или отсутствие обязательной проверки делают дальнейший вывод ненадёжным.',
      sections:[
        {title:'Когда анализ должен быть ограничен',bullets:['высокий риск для людей, оборудования или окружающей среды;','регулируемая область требует формального согласования;','критическое неизвестное определяет решение;','не хватает данных для расчёта или проверки;','результат требует испытания, сертификации или профильного заключения.']},
        {title:'Что означает STOP',paragraphs:['STOP не означает провал. Это корректный инженерный результат: зафиксировать предел достоверности и определить конкретное доказательство, испытание или специалиста, без которого нельзя двигаться дальше.']},
      ],
    },
    'human-expert': {
      slug:'human-expert',
      title:'AI и роль инженера',
      lead:'AI ускоряет исследование и структурирование, но не заменяет ответственное инженерное суждение.',
      sections:[
        {title:'Что можно делегировать AI',bullets:['поиск и извлечение информации;','анализ документов;','сравнение вариантов;','расчёты и сценарии;','поиск аналогов;','генерацию кандидатов решения;','подготовку черновиков.']},
        {title:'Что требует человека',bullets:['определение реальной задачи;','оценка релевантности доказательств;','выделение существенного противоречия;','оценка допустимости допущений;','решения по безопасности;','профессиональная ответственность;','решение о привлечении профильного специалиста.']},
        {title:'Принцип',paragraphs:['AI может предложить ответ. Инженер должен определить, можно ли этому ответу доверять и при каких условиях.']},
      ],
    },
    uncertainty: {
      slug:'uncertainty',
      title:'Неопределённость и противоречивые данные',
      lead:'Неопределённость не скрывается ради ощущения завершённости. Она остаётся частью результата и влияет на следующий шаг.',
      sections:[
        {title:'Как работать с неопределённостью',bullets:['явно отделять неизвестное от предположения;','показывать критически важные неизвестные отдельно;','фиксировать конфликт источников;','не заполнять пробелы выдуманными значениями;','формулировать условные выводы;','указывать доказательство, которое способно изменить решение.']},
        {title:'Условный вывод',paragraphs:['Если результат зависит от неподтверждённого параметра, вывод должен описывать не только текущую позицию, но и условие, при котором она изменится.']},
      ],
    },
    'aritz-vs-triz': {
      slug:'aritz-vs-triz',
      title:'ARITZ, АРИЗ и классическая ТРИЗ',
      lead:'ARITZ опирается на классическую логику ТРИЗ/АРИЗ, но используется здесь как практический инженерный процесс с обязательной проверкой доказательствами.',
      sections:[
        {title:'Методологическая основа',paragraphs:['Классическая ТРИЗ и АРИЗ дают язык противоречий, ресурсов, идеальности и направленного поиска. Эта основа сохраняется.']},
        {title:'Практическое расширение',bullets:['явная работа с доказательствами;','происхождение данных и прослеживаемость источников;','расчёты и анализ чувствительности;','фиксация неопределённости;','связь с Research & Verification;','условия STOP;','привлечение профильного специалиста;','проверка решения до рекомендации.']},
        {title:'Не замена ТРИЗ',paragraphs:['ARITZ в этой методологии не претендует на замену всего корпуса ТРИЗ. Это рабочая инженерная реализация для анализа конкретных задач и принятия решений.']},
      ],
    },
    cases: {
      slug:'cases',
      title:'Примеры применения ARITZ',
      lead:'Публичные кейсы будут добавляться по мере появления реальных инженерных задач, которые можно опубликовать без раскрытия конфиденциальной информации.',
      sections:[
        {title:'Формат будущих кейсов',paragraphs:['Проблема → Границы системы → Противоречие → Недостающие данные → Ресурсы → Варианты → Проверка → Решение.']},
        {title:'Политика публикации',bullets:['реальные кейсы анонимизируются при необходимости;','конфиденциальные данные не публикуются;','учебные примеры всегда прямо помечаются как учебные;','синтетические тестовые кейсы CheckOpp не выдаются за реальные проекты.']},
      ],
    },
    faq: {
      slug:'faq',
      title:'ARITZ — вопросы и ответы',
      lead:'Краткие ответы на основные вопросы о месте ARITZ в методологии.',
      sections:[
        {title:'ARITZ нужен для любой задачи?',paragraphs:['Нет. Если проблема решается выбором известного решения, достаточно исследования, сравнения и проверки. ARITZ нужен, когда ключевое препятствие — инженерное противоречие или необходимость изменить систему.']},
        {title:'ARITZ начинается с генерации идей?',paragraphs:['Нет. Сначала формулируются функция, условия, ограничения, границы системы и противоречие. Генерация вариантов начинается после DIAGNOSE.']},
        {title:'Можно ли считать вариант решением после INVENT?',paragraphs:['Нет. Любой кандидат должен пройти VERIFY: расчёты, аналоги, литературу, данные производителя, испытание, моделирование или другую подходящую проверку.']},
        {title:'Когда нужен внешний эксперт?',paragraphs:['Когда остаётся существенный конфликт, высокий риск, ответственное профессиональное решение, обязательное согласование или неопределённость, которую нельзя закрыть desk research и расчётами.']},
      ],
    },
  },
  en: {
    'engineering-estimates': {
      slug:'engineering-estimates', title:'Engineering estimates and calculations in ARITZ',
      lead:'Calculations are used to test physical meaning, operating range and sensitivity — not to decorate an idea.',
      sections:[
        {title:'What a calculation should show',bullets:['inputs and their source;','units;','formula or model;','key assumptions;','applicable range;','result sensitivity;','model limitations;','what still requires validation.']},
        {title:'When a precise number is not justified',paragraphs:['If inputs are incomplete or operating conditions vary, use ranges, scenarios and sensitivity analysis instead of one falsely precise value.']},
      ],
    },
    'evidence-validation': {
      slug:'evidence-validation', title:'Evidence and validation',
      lead:'For every material conclusion it should be clear what supports it and how strong that support is.',
      sections:[
        {title:'Evidence states',bullets:['known / fact;','client-provided data;','independently verified data;','engineering inference;','assumption;','hypothesis;','unknown;','critical unknown.']},
        {title:'Validation rules',bullets:['client data do not become independently verified facts without checking;','public values are used as ranges or scenario assumptions unless confirmed for the specific project;','failure to find an analogue does not prove novelty;','failure to find a requirement does not prove no requirement exists;','conflicting sources are not mechanically averaged.']},
        {title:'Purpose',paragraphs:['Validation is not about making prose more persuasive. It determines what can already be decided and what is still premature to claim.']},
      ],
    },
    'safety-stop': {
      slug:'safety-stop', title:'Safety and stop conditions',
      lead:'A sound methodology must know when to stop analysis because risk, uncertainty or mandatory validation makes a stronger conclusion unjustified.',
      sections:[
        {title:'When analysis should be bounded',bullets:['high risk to people, equipment or environment;','regulated work requires formal approval;','a critical unknown controls the decision;','data are insufficient for calculation or verification;','testing, certification or specialist sign-off is required.']},
        {title:'What STOP means',paragraphs:['STOP is not failure. It is a valid engineering outcome: state the reliability boundary and identify the specific evidence, test or specialist needed before proceeding.']},
      ],
    },
    'human-expert': {
      slug:'human-expert', title:'AI and the engineer’s role',
      lead:'AI accelerates research and structuring, but it does not replace responsible engineering judgement.',
      sections:[
        {title:'AI can support',bullets:['search and retrieval;','document analysis;','option comparison;','calculations and scenarios;','analogue search;','candidate generation;','drafting.']},
        {title:'The human remains responsible for',bullets:['defining the real problem;','judging evidence relevance;','identifying the material contradiction;','acceptable assumptions;','safety decisions;','professional responsibility;','specialist escalation.']},
        {title:'Principle',paragraphs:['AI may suggest an answer. The engineer must determine whether that answer can be trusted and under which conditions.']},
      ],
    },
    uncertainty: {
      slug:'uncertainty', title:'Uncertainty and conflicting evidence',
      lead:'Uncertainty remains visible instead of being hidden to make the analysis look complete.',
      sections:[
        {title:'Working with uncertainty',bullets:['separate unknown from assumption;','show critical unknowns explicitly;','preserve source conflicts;','do not invent missing values;','state conditional conclusions;','identify the evidence that could change the decision.']},
        {title:'Conditional conclusion',paragraphs:['If a result depends on an unverified parameter, the conclusion should state both the current position and the condition that would change it.']},
      ],
    },
    'aritz-vs-triz': {
      slug:'aritz-vs-triz', title:'ARITZ, ARIZ and classical TRIZ',
      lead:'ARITZ builds on classical TRIZ/ARIZ logic but is used here as a practical engineering process with explicit evidence and verification.',
      sections:[
        {title:'Methodological foundation',paragraphs:['Classical TRIZ and ARIZ provide the language of contradictions, resources, ideality and directed problem solving. That foundation is retained.']},
        {title:'Practical extension',bullets:['explicit evidence handling;','source provenance;','calculations and sensitivity;','visible uncertainty;','Research & Verification linkage;','STOP conditions;','specialist escalation;','validation before recommendation.']},
        {title:'Not a replacement for TRIZ',paragraphs:['ARITZ in this methodology does not claim to replace the full body of TRIZ. It is a practical implementation for concrete engineering analysis and decisions.']},
      ],
    },
    cases: {
      slug:'cases', title:'ARITZ application cases',
      lead:'Public cases will be added as suitable real engineering problems become available and can be published without revealing confidential client information.',
      sections:[
        {title:'Case format',paragraphs:['Problem → System Boundary → Contradiction → Missing Data → Resources → Options → Verification → Decision.']},
        {title:'Publication policy',bullets:['real cases may be anonymized;','confidential data are not published;','educational examples are explicitly marked illustrative;','synthetic CheckOpp acceptance-test fixtures are not presented as real projects.']},
      ],
    },
    faq: {
      slug:'faq', title:'ARITZ — questions and answers',
      lead:'Short answers to common questions about the role of ARITZ in the methodology.',
      sections:[
        {title:'Is ARITZ needed for every problem?',paragraphs:['No. If a problem can be solved by selecting and verifying a known solution, research and comparison may be sufficient. ARITZ is used when the barrier is an engineering contradiction or a need to change the system.']},
        {title:'Does ARITZ start with idea generation?',paragraphs:['No. Required function, operating conditions, constraints, system boundary and contradiction are defined first. Candidate generation starts after DIAGNOSE.']},
        {title:'Is a candidate from INVENT already a solution?',paragraphs:['No. Every candidate must pass VERIFY through calculations, analogues, literature, supplier data, testing, simulation or other appropriate evidence.']},
        {title:'When is an outside expert needed?',paragraphs:['When there is material conflict, high risk, a responsible professional decision, mandatory approval or uncertainty that cannot be closed by desk research and calculations.']},
      ],
    },
  },
  uk: {},
  sr: {},
};

const localized: Record<'uk'|'sr', Record<string, AritzPage>> = {
  uk: {
    'engineering-estimates': {slug:'engineering-estimates',title:'Інженерні оцінки та розрахунки в ARITZ',lead:'Розрахунок використовується для перевірки фізичного змісту, робочого діапазону та чутливості, а не як прикраса ідеї.',sections:[{title:'Що має показувати розрахунок',bullets:['вхідні дані та їх джерело;','одиниці;','формулу або модель;','ключові припущення;','діапазон застосування;','чутливість;','обмеження моделі;','що ще потрібно перевірити.']},{title:'Коли точне число недоречне',paragraphs:['Якщо даних недостатньо або параметр залежить від режиму, використовуються діапазони, сценарії та аналіз чутливості.']} ]},
    'evidence-validation': {slug:'evidence-validation',title:'Докази та валідація',lead:'Для кожного суттєвого висновку має бути зрозуміло, на чому він ґрунтується і наскільки сильна ця основа.',sections:[{title:'Статуси',bullets:['факт / відоме;','дані клієнта;','незалежно перевірені дані;','інженерний висновок;','припущення;','гіпотеза;','невідоме;','критично важлива невідомість.']},{title:'Правила',bullets:['дані клієнта не стають незалежним фактом без перевірки;','публічні значення використовуються як діапазони або сценарні припущення без підтвердження для конкретного проєкту;','відсутність аналога не доводить новизну;','відсутність знайденої вимоги не доводить, що вимоги немає;','конфліктні джерела не усереднюються механічно.']}]},
    'safety-stop': {slug:'safety-stop',title:'Безпека та умови зупинки аналізу',lead:'Методологія має вміти зупинитися, якщо ризик, невизначеність або обов’язкова перевірка не дозволяють робити сильніший висновок.',sections:[{title:'Коли аналіз обмежується',bullets:['високий ризик;','регульована сфера;','критично важлива невідомість визначає рішення;','бракує даних для розрахунку;','потрібні випробування, сертифікація або профільний висновок.']},{title:'Що означає STOP',paragraphs:['STOP — це коректний інженерний результат: зафіксувати межу достовірності та визначити конкретний доказ, тест або спеціаліста, без якого рухатися далі не можна.']}]},
    'human-expert': {slug:'human-expert',title:'AI та роль інженера',lead:'AI прискорює дослідження та структурування, але не замінює відповідальне інженерне судження.',sections:[{title:'AI може підтримувати',bullets:['пошук;','аналіз документів;','порівняння;','розрахунки;','пошук аналогів;','генерацію кандидатів;','чернетки.']},{title:'Людина відповідає за',bullets:['реальну постановку задачі;','релевантність доказів;','суттєву суперечність;','допустимість припущень;','безпека;','професійну відповідальність;','залучення спеціаліста.']}]},
    uncertainty: {slug:'uncertainty',title:'Невизначеність і суперечливі дані',lead:'Невизначеність не приховується заради відчуття завершеності.',sections:[{title:'Правила',bullets:['відокремлювати невідоме від припущення;','показувати критично важливі невідомості;','зберігати конфлікти джерел;','не вигадувати відсутні значення;','формулювати умовні висновки;','вказувати доказ, що може змінити рішення.']}]},
    'aritz-vs-triz': {slug:'aritz-vs-triz',title:'ARITZ, АРИЗ і класична ТРІЗ',lead:'ARITZ спирається на класичну логіку ТРІЗ/АРИЗ, але використовується як практичний інженерний процес із доказовою перевіркою.',sections:[{title:'Основа',paragraphs:['Класична ТРІЗ і АРИЗ дають мову суперечностей, ресурсів, ідеальності та спрямованого пошуку.']},{title:'Практичне розширення',bullets:['докази;','походження даних / простежуваність джерела;','розрахунки;','невизначеність;','Research & Verification;','STOP;','залучення профільного фахівця;','перевірка до рекомендації.']}]},
    cases: {slug:'cases',title:'Приклади застосування ARITZ',lead:'Публічні кейси додаватимуться в міру появи реальних задач, які можна опублікувати без розкриття конфіденційної інформації.',sections:[{title:'Формат',paragraphs:['Проблема → Межі системи → Суперечність → Відсутні дані → Ресурси → Варіанти → Перевірка → Рішення.']},{title:'Політика',bullets:['реальні кейси можуть бути анонімізовані;','конфіденційні дані не публікуються;','навчальні приклади позначаються прямо;','синтетичні тестові кейси не видаються за реальні.']}]},
    faq: {slug:'faq',title:'ARITZ — питання та відповіді',lead:'Короткі відповіді на основні питання про роль ARITZ.',sections:[{title:'Чи потрібен ARITZ для кожної задачі?',paragraphs:['Ні. Він потрібен, коли головною перешкодою є інженерна суперечність або необхідність змінити систему.']},{title:'Чи починається ARITZ з генерації ідей?',paragraphs:['Ні. Спочатку визначаються функція, умови, обмеження, межі системи та суперечність.']},{title:'Чи є кандидат після INVENT готовим рішенням?',paragraphs:['Ні. Він має пройти VERIFY.']}]},
  },
  sr: {
    'engineering-estimates': {slug:'engineering-estimates',title:'Inženjerske procene i proračuni u ARITZ-u',lead:'Proračun služi proveri fizičkog smisla, radnog opsega i osetljivosti, a ne kao ukras ideje.',sections:[{title:'Šta proračun treba da pokaže',bullets:['ulazne podatke i izvore;','jedinice;','formulu ili model;','ključne pretpostavke;','opseg primene;','osetljivost;','ograničenja modela;','šta još treba proveriti.']},{title:'Kada precizan broj nije opravdan',paragraphs:['Kada podaci nisu dovoljni ili parametar zavisi od režima, koriste se rasponi, scenariji i analiza osetljivosti.']}]},
    'evidence-validation': {slug:'evidence-validation',title:'Dokazi i validacija',lead:'Za svaki materijalni zaključak mora biti jasno na čemu se zasniva i koliko je osnova jaka.',sections:[{title:'Statusi dokaza',bullets:['činjenica / poznato;','podaci klijenta;','nezavisno potvrđeni podaci;','inženjerski zaključak;','pretpostavka;','hipoteza;','nepoznato;','kritična nepoznanica.']},{title:'Pravila',bullets:['podaci klijenta nisu nezavisna činjenica bez provere;','javne vrednosti se koriste kao rasponi ili scenariji bez potvrde za konkretan projekat;','nepostojanje pronađenog analoga ne dokazuje novost;','nepostojanje pronađenog zahteva ne dokazuje da zahteva nema;','konfliktni izvori se ne prosečuju mehanički.']}]},
    'safety-stop': {slug:'safety-stop',title:'Bezbednost i uslovi zaustavljanja analize',lead:'Metodologija mora znati kada treba stati zbog rizika, neizvesnosti ili obavezne stručne provere.',sections:[{title:'Kada ograničiti zaključak',bullets:['visok rizik;','regulisana oblast;','kritična nepoznanica utiče na odluku;','nedovoljno podataka;','potrebni su testiranje, sertifikacija ili stručna potvrda.']},{title:'Šta znači STOP',paragraphs:['STOP nije neuspeh. To je ispravan inženjerski rezultat koji definiše granicu pouzdanosti i sledeći dokaz, test ili stručnjaka.']}]},
    'human-expert': {slug:'human-expert',title:'AI i uloga inženjera',lead:'AI ubrzava istraživanje i strukturisanje, ali ne zamenjuje odgovorno inženjersko prosuđivanje.',sections:[{title:'AI može da podrži',bullets:['pretragu;','analizu dokumenata;','poređenje;','proračune;','traženje analogija;','generisanje kandidata;','nacrte.']},{title:'Čovek ostaje odgovoran za',bullets:['definisanje problema;','relevantnost dokaza;','ključnu kontradikciju;','prihvatljive pretpostavke;','bezbednost;','profesionalnu odgovornost;','uključivanje stručnjaka.']}]},
    uncertainty: {slug:'uncertainty',title:'Neizvesnost i konfliktni podaci',lead:'Neizvesnost ostaje vidljiva i utiče na sledeći korak.',sections:[{title:'Pravila',bullets:['odvojiti nepoznato od pretpostavke;','posebno prikazati kritične nepoznanice;','sačuvati konflikt izvora;','ne izmišljati nedostajuće vrednosti;','formulisati uslovne zaključke;','navesti dokaz koji može promeniti odluku.']}]},
    'aritz-vs-triz': {slug:'aritz-vs-triz',title:'ARITZ, ARIZ i klasični TRIZ',lead:'ARITZ se oslanja na klasičnu TRIZ/ARIZ logiku, ali se ovde koristi kao praktičan inženjerski proces sa eksplicitnom verifikacijom.',sections:[{title:'Osnova',paragraphs:['Klasični TRIZ i ARIZ daju jezik kontradikcija, resursa, idealnosti i usmerenog rešavanja problema.']},{title:'Praktično proširenje',bullets:['dokazi;','poreklo podataka / sledljivost izvora;','proračuni;','neizvesnost;','Research & Verification;','STOP;','uključivanje odgovarajućeg stručnjaka;','verifikacija pre preporuke.']}]},
    cases: {slug:'cases',title:'Primeri primene ARITZ-a',lead:'Javni slučajevi će se dodavati kako budu dostupni realni inženjerski problemi koji se mogu objaviti bez poverljivih podataka.',sections:[{title:'Format',paragraphs:['Problem → Granice sistema → Kontradikcija → Nedostajući podaci → Resursi → Opcije → Verifikacija → Odluka.']},{title:'Politika',bullets:['realni slučajevi mogu biti anonimizovani;','poverljivi podaci se ne objavljuju;','edukativni primeri se jasno označavaju;','sintetički testni slučajevi se ne predstavljaju kao realni projekti.']}]},
    faq: {slug:'faq',title:'ARITZ — pitanja i odgovori',lead:'Kratki odgovori na osnovna pitanja o ulozi ARITZ-a.',sections:[{title:'Da li je ARITZ potreban za svaki problem?',paragraphs:['Ne. Potreban je kada je glavna prepreka inženjerska kontradikcija ili potreba da se sistem promeni.']},{title:'Da li ARITZ počinje idejama?',paragraphs:['Ne. Prvo se definišu funkcija, uslovi, ograničenja, granice sistema i kontradikcija.']},{title:'Da li je kandidat posle INVENT-a već rešenje?',paragraphs:['Ne. Mora proći VERIFY.']}]},
  },
};

extra.uk = localized.uk;
extra.sr = localized.sr;

export const aritzExtraPages = extra;
