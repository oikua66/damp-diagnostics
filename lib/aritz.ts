import type { Lang } from './translations';

export type AritzPage = {
  slug: string;
  title: string;
  lead: string;
  sections: { title: string; paragraphs?: string[]; bullets?: string[] }[];
};

export const aritzSlugs = [
  'problem-formulation',
  'system-boundary',
  'contradictions',
  'resources',
  'constraints',
  'desired-result',
  'diagnose',
  'invent',
  'verify',
] as const;

const ru: Record<string, AritzPage> = {
  'problem-formulation': {
    slug:'problem-formulation',
    title:'Постановка инженерной задачи',
    lead:'Качество решения начинается не с поиска идей, а с правильного определения того, что именно должно измениться и почему.',
    sections:[
      {title:'От симптома к задаче',paragraphs:['Исходная формулировка часто описывает симптом, привычное решение или пожелание. Инженерная постановка должна показать функцию, нежелательный эффект, требуемый результат и ограничения.']},
      {title:'Проверочные вопросы',bullets:['Что фактически не работает или работает недостаточно?','Для кого и при каких условиях это является проблемой?','Какой результат нужен вместо текущего состояния?','Какие решения уже пробовали и почему они не удовлетворяют?','Какие ограничения нельзя нарушать?']},
    ],
  },
  'system-boundary': {
    slug:'system-boundary',
    title:'Система и границы анализа',
    lead:'Нельзя решать задачу, не определив, что входит в систему, что находится снаружи и какие связи реально влияют на результат.',
    sections:[
      {title:'Почему границы важны',paragraphs:['Слишком узкая граница заставляет оптимизировать отдельный элемент вместо результата системы. Слишком широкая — размывает задачу и делает анализ бесконечным.']},
      {title:'Что фиксируется',bullets:['основная функция системы;','входы и выходы;','соседние подсистемы;','внешняя среда;','потоки энергии, вещества, информации и денег;','границы ответственности и управления.']},
    ],
  },
  contradictions: {
    slug:'contradictions',
    title:'Инженерные противоречия',
    lead:'Сильная задача часто содержит требование одновременно улучшить один параметр и не ухудшить другой.',
    sections:[
      {title:'Смысл противоречия',paragraphs:['Противоречие показывает, почему очевидное улучшение вызывает нежелательное последствие. Его задача — не усложнить формулировку, а сделать видимым реальный конфликт требований.']},
      {title:'Пример структуры',paragraphs:['Если увеличить X, улучшается полезный эффект A, но ухудшается B. Если уменьшить X, сохраняется B, но ухудшается A. Следующий шаг — искать способ разделить эти требования или изменить сам механизм.']},
    ],
  },
  resources: {
    slug:'resources',
    title:'Ресурсы системы',
    lead:'До добавления нового оборудования, энергии или процесса следует понять, какие ресурсы уже существуют в системе и вокруг неё.',
    sections:[
      {title:'Типы ресурсов',bullets:['пространство и геометрия;','время и последовательность операций;','вещество и материалы;','энергия и тепловые потоки;','поля и физические эффекты;','информация и сигналы;','существующие элементы и их побочные функции;','люди, компетенции и организационные возможности.']},
      {title:'Принцип',paragraphs:['Предпочтительно сначала использовать уже доступный ресурс, затем перераспределять или переопределять функции и только после этого добавлять новые элементы.']},
    ],
  },
  constraints: {
    slug:'constraints',
    title:'Ограничения',
    lead:'Ограничение — это не помеха методике, а часть задачи. Решение, игнорирующее критическое ограничение, не является решением.',
    sections:[
      {title:'Категории',bullets:['физические и технические;','безопасность;','нормативные;','экономические;','сроки;','пространство и инфраструктура;','совместимость;','эксплуатация и обслуживание;','организационные ограничения.']},
      {title:'Жёсткие и условные',paragraphs:['Жёсткое ограничение нельзя нарушать. Условное ограничение может быть пересмотрено, если доказано, что его изменение рационально и безопасно. Такое различие позволяет не принимать привычные правила за физические законы.']},
    ],
  },
  'desired-result': {
    slug:'desired-result',
    title:'Желаемый и идеальный результат',
    lead:'Желаемый результат описывает, что система должна обеспечить. Идеальный результат помогает проверить, можно ли получить функцию с меньшей сложностью и меньшим количеством новых элементов.',
    sections:[
      {title:'Практический смысл',paragraphs:['Идеальность здесь не означает фантазию. Это направление поиска: нужный эффект достигается при минимальных дополнительных ресурсах, усложнении, потерях и новых отказах.']},
      {title:'Проверка варианта',bullets:['какую новую функцию он создаёт;','какие новые элементы добавляет;','какие риски и обслуживание создаёт;','можно ли получить тот же эффект существующими ресурсами;','можно ли убрать элемент вместо добавления нового.']},
    ],
  },
  diagnose: {
    slug:'diagnose',
    title:'DIAGNOSE — понять реальную проблему',
    lead:'DIAGNOSE превращает исходное описание в инженерную модель задачи, пригодную для поиска решений.',
    sections:[
      {title:'На входе',bullets:['исходная проблема;','имеющиеся данные;','текущая архитектура;','известные ограничения;','предыдущие попытки решения.']},
      {title:'На выходе',bullets:['реальная функция и нежелательный эффект;','границы системы;','ключевое узкое место;','противоречие;','ресурсы;','ограничения;','критические неизвестные;','критерии приемлемого результата.']},
    ],
  },
  invent: {
    slug:'invent',
    title:'INVENT — построение вариантов решения',
    lead:'INVENT — не мозговой штурм. Варианты выводятся из структуры задачи и проверяются на соответствие ограничениям.',
    sections:[
      {title:'Источники вариантов',bullets:['разделение противоречивых требований во времени или пространстве;','изменение архитектуры;','перераспределение функций;','использование внутренних ресурсов;','замена физического механизма;','управление вместо постоянного режима;','удаление элемента или операции;','объединение функций;','изменение масштаба или последовательности.']},
      {title:'Не количество, а качество',paragraphs:['Цель — не собрать десятки идей, а получить несколько принципиально разных вариантов, которые имеют объяснимый механизм действия и могут быть проверены.']},
    ],
  },
  verify: {
    slug:'verify',
    title:'VERIFY — инженерная проверка решения',
    lead:'До рекомендации вариант должен пройти последовательную проверку от физической правдоподобности до доказательств, расчётов и условий внедрения.',
    sections:[
      {title:'Цепочка проверки',paragraphs:['Концепция → Физическая правдоподобность → Расчёт / оценка → Аналоги → Литература / патенты / стандарты → Данные производителя / поставщика → Чувствительность → Эксперимент / моделирование / специалист → Решение.']},
      {title:'Результат проверки',bullets:['что подтверждено;','что остаётся предположением;','какие параметры критичны;','где нужна дополнительная валидация;','какие условия могут изменить вывод;','можно ли переходить к пилоту, проектированию или внедрению.']},
    ],
  },
};

function map(base: Record<string,AritzPage>, lang:'en'|'uk'|'sr'): Record<string,AritzPage> {
  const dict = translations[lang];
  return Object.fromEntries(Object.entries(base).map(([slug,p]) => [slug, dict[slug] ?? p]));
}

const translations: Record<'en'|'uk'|'sr', Record<string,AritzPage>> = {
  en: {
    'problem-formulation':{slug:'problem-formulation',title:'Engineering problem formulation',lead:'Solution quality starts not with idea generation, but with defining what must change and why.',sections:[{title:'From symptom to problem',paragraphs:['An initial statement often describes a symptom, a familiar solution or a wish. Engineering formulation should identify the function, unwanted effect, required outcome and constraints.']},{title:'Questions to ask',bullets:['What actually fails or underperforms?','For whom and under which conditions is it a problem?','What result is required instead?','What has already been tried and why was it insufficient?','Which constraints must not be violated?']}]},
    'system-boundary':{slug:'system-boundary',title:'System and analysis boundary',lead:'A problem cannot be solved reliably without defining what belongs to the system, what is outside it and which interactions affect the result.',sections:[{title:'Why boundaries matter',paragraphs:['A boundary that is too narrow optimizes a component instead of the system result. A boundary that is too wide makes the task diffuse and endless.']},{title:'What is fixed',bullets:['main system function;','inputs and outputs;','adjacent subsystems;','external environment;','flows of energy, matter, information and money;','responsibility and control boundaries.']}]},
    contradictions:{slug:'contradictions',title:'Engineering contradictions',lead:'A strong engineering problem often requires improving one parameter without worsening another.',sections:[{title:'Meaning',paragraphs:['A contradiction makes visible why an obvious improvement creates an unwanted consequence. It exposes the real conflict between requirements.']},{title:'Structure',paragraphs:['If X increases, useful effect A improves but B worsens. If X decreases, B is preserved but A worsens. The next task is to separate the requirements or change the mechanism.']}]},
    resources:{slug:'resources',title:'System resources',lead:'Before adding equipment, energy or process steps, identify what resources already exist in and around the system.',sections:[{title:'Resource types',bullets:['space and geometry;','time and sequence;','matter and materials;','energy and heat flows;','fields and physical effects;','information and signals;','existing elements and side functions;','people, skills and organizational capacity.']},{title:'Principle',paragraphs:['Prefer existing resources first, then redistribution or functional change, and only then additional elements.']}]},
    constraints:{slug:'constraints',title:'Constraints',lead:'A constraint is part of the problem. A solution that ignores a critical constraint is not a valid solution.',sections:[{title:'Categories',bullets:['physical and technical;','safety;','regulatory;','economic;','time;','space and infrastructure;','compatibility;','operation and maintenance;','organizational.']},{title:'Hard vs conditional',paragraphs:['A hard constraint cannot be violated. A conditional constraint may be revisited if changing it is shown to be rational and safe.']}]},
    'desired-result':{slug:'desired-result',title:'Desired and ideal result',lead:'The desired result states what the system must achieve. The ideal result tests whether the function can be achieved with less complexity and fewer added elements.',sections:[{title:'Practical meaning',paragraphs:['Ideality is not fantasy. It is a search direction: obtain the required effect with minimum additional resources, complexity, losses and new failure modes.']},{title:'Option check',bullets:['What new function is created?','What new elements are added?','What risks and maintenance are added?','Can existing resources provide the same effect?','Can an element be removed instead of added?']}]},
    diagnose:{slug:'diagnose',title:'DIAGNOSE — understand the real problem',lead:'DIAGNOSE turns the initial description into an engineering model suitable for solution development.',sections:[{title:'Inputs',bullets:['initial problem;','available data;','current architecture;','known constraints;','previous attempts.']},{title:'Outputs',bullets:['real function and unwanted effect;','system boundary;','key bottleneck;','contradiction;','resources;','constraints;','critical unknowns;','acceptance criteria.']}]},
    invent:{slug:'invent',title:'INVENT — build solution options',lead:'INVENT is not free brainstorming. Options are derived from the problem structure and checked against constraints.',sections:[{title:'Sources of options',bullets:['separate conflicting requirements in time or space;','change architecture;','redistribute functions;','use internal resources;','replace the physical mechanism;','use control instead of a permanent regime;','remove an element or operation;','combine functions;','change scale or sequence.']},{title:'Quality over quantity',paragraphs:['The goal is not dozens of ideas but several fundamentally different options with an explainable mechanism that can be verified.']}]},
    verify:{slug:'verify',title:'VERIFY — engineering validation',lead:'Before recommendation, an option should pass a structured check from physical plausibility through evidence, calculations and implementation conditions.',sections:[{title:'Verification chain',paragraphs:['Concept → Physical plausibility → Calculation / estimate → Analogues → Literature / patents / standards → Manufacturer / supplier data → Sensitivity → Experiment / simulation / specialist → Decision.']},{title:'Verification output',bullets:['what is supported;','what remains an assumption;','which parameters are critical;','where more validation is needed;','which conditions can change the conclusion;','whether the option can move to pilot, design or implementation.']}]},
  },
  uk: {
    'problem-formulation':{slug:'problem-formulation',title:'Постановка інженерної задачі',lead:'Якість рішення починається не з пошуку ідей, а з правильного визначення того, що саме має змінитися і чому.',sections:[{title:'Від симптому до задачі',paragraphs:['Початкове формулювання часто описує симптом, звичне рішення або побажання. Інженерна постановка має визначити функцію, небажаний ефект, потрібний результат та обмеження.']},{title:'Контрольні питання',bullets:['Що фактично не працює або працює недостатньо?','Для кого і за яких умов це проблема?','Який результат потрібен замість поточного стану?','Що вже пробували і чому цього недостатньо?','Які обмеження не можна порушувати?']}]},
    'system-boundary':{slug:'system-boundary',title:'Система та межі аналізу',lead:'Надійне рішення неможливе без визначення того, що входить у систему, що знаходиться зовні та які взаємодії впливають на результат.',sections:[{title:'Чому межі важливі',paragraphs:['Надто вузька межа оптимізує елемент замість результату системи. Надто широка — розмиває задачу.']},{title:'Що фіксується',bullets:['основна функція;','входи й виходи;','сусідні підсистеми;','зовнішнє середовище;','потоки енергії, речовини, інформації та грошей;','межі відповідальності й керування.']}]},
    contradictions:{slug:'contradictions',title:'Інженерні суперечності',lead:'Сильна задача часто вимагає поліпшити один параметр і не погіршити інший.',sections:[{title:'Суть',paragraphs:['Суперечність показує, чому очевидне поліпшення породжує небажаний наслідок і де насправді конфліктують вимоги.']},{title:'Структура',paragraphs:['Якщо збільшити X, поліпшується A, але погіршується B. Якщо зменшити X, зберігається B, але погіршується A. Далі потрібно розділити вимоги або змінити механізм.']}]},
    resources:{slug:'resources',title:'Ресурси системи',lead:'Перед додаванням нового обладнання чи енергії потрібно зрозуміти, які ресурси вже існують у системі та навколо неї.',sections:[{title:'Типи ресурсів',bullets:['простір і геометрія;','час і послідовність;','матеріали;','енергія й теплові потоки;','фізичні ефекти;','інформація;','наявні елементи;','люди й компетенції.']},{title:'Принцип',paragraphs:['Спочатку використовувати наявні ресурси, потім перерозподіляти функції і лише після цього додавати нові елементи.']}]},
    constraints:{slug:'constraints',title:'Обмеження',lead:'Обмеження є частиною задачі. Рішення, що ігнорує критичне обмеження, не є прийнятним.',sections:[{title:'Категорії',bullets:['фізичні й технічні;','безпека;','нормативні;','економічні;','строки;','простір та інфраструктура;','сумісність;','експлуатація;','організаційні.']},{title:'Жорсткі та умовні',paragraphs:['Жорстке обмеження не можна порушувати. Умовне можна переглянути, якщо зміна доведена як раціональна й безпечна.']}]},
    'desired-result':{slug:'desired-result',title:'Бажаний та ідеальний результат',lead:'Бажаний результат описує потрібну функцію. Ідеальний результат перевіряє, чи можна отримати її з меншою складністю.',sections:[{title:'Практичний зміст',paragraphs:['Ідеальність — це не фантазія, а напрям пошуку: потрібний ефект із мінімумом нових ресурсів, втрат і відмов.']},{title:'Перевірка варіанта',bullets:['яку функцію він створює;','що додає;','які ризики створює;','чи можна використати наявні ресурси;','чи можна щось прибрати замість додавання.']}]},
    diagnose:{slug:'diagnose',title:'DIAGNOSE — зрозуміти реальну проблему',lead:'DIAGNOSE перетворює початковий опис на інженерну модель задачі.',sections:[{title:'На вході',bullets:['початкова проблема;','наявні дані;','поточна архітектура;','обмеження;','попередні спроби.']},{title:'На виході',bullets:['функція і небажаний ефект;','межі системи;','вузьке місце;','суперечність;','ресурси;','обмеження;','критичні невідомі;','критерії результату.']}]},
    invent:{slug:'invent',title:'INVENT — побудова варіантів',lead:'INVENT — не вільний пошук ідей. Варіанти виводяться зі структури задачі.',sections:[{title:'Джерела варіантів',bullets:['розділення вимог у часі або просторі;','зміна архітектури;','перерозподіл функцій;','використання внутрішніх ресурсів;','заміна фізичного механізму;','керування замість постійного режиму;','видалення елемента;','об’єднання функцій;','зміна масштабу чи послідовності.']},{title:'Якість замість кількості',paragraphs:['Мета — кілька принципово різних варіантів із пояснюваним механізмом, які можна перевірити.']}]},
    verify:{slug:'verify',title:'VERIFY — інженерна перевірка',lead:'До рекомендації варіант проходить послідовну перевірку фізичної правдоподібності, доказів, розрахунків та умов реалізації.',sections:[{title:'Ланцюжок',paragraphs:['Концепція → Фізична правдоподібність → Розрахунок / оцінка → Аналоги → Література / патенти / стандарти → Дані виробника → Чутливість → Експеримент / моделювання / спеціаліст → Рішення.']},{title:'Результат',bullets:['що підтверджено;','що є припущенням;','критичні параметри;','потреба у валідації;','умови зміни висновку;','готовність до пілота чи впровадження.']}]},
  },
  sr: {
    'problem-formulation':{slug:'problem-formulation',title:'Formulisanje inženjerskog problema',lead:'Kvalitet rešenja počinje pravilnim definisanjem onoga što treba promeniti i zašto, a ne generisanjem ideja.',sections:[{title:'Od simptoma do problema',paragraphs:['Početna formulacija često opisuje simptom, poznato rešenje ili želju. Inženjerska formulacija treba da utvrdi funkciju, neželjeni efekat, potreban rezultat i ograničenja.']},{title:'Kontrolna pitanja',bullets:['Šta stvarno ne radi dovoljno dobro?','Za koga i pod kojim uslovima je to problem?','Koji rezultat je potreban?','Šta je već pokušano?','Koja ograničenja se ne smeju prekršiti?']}]},
    'system-boundary':{slug:'system-boundary',title:'Sistem i granice analize',lead:'Pouzdano rešavanje zahteva da se odredi šta pripada sistemu, šta je izvan njega i koje interakcije utiču na rezultat.',sections:[{title:'Zašto su granice važne',paragraphs:['Preuska granica optimizuje komponentu umesto rezultata sistema. Preširoka granica čini problem neodređenim.']},{title:'Šta se definiše',bullets:['glavna funkcija;','ulazi i izlazi;','susedni podsistemi;','spoljno okruženje;','tokovi energije, materije, informacija i novca;','granice odgovornosti i upravljanja.']}]},
    contradictions:{slug:'contradictions',title:'Inženjerske kontradikcije',lead:'Snažan problem često zahteva poboljšanje jednog parametra bez pogoršanja drugog.',sections:[{title:'Suština',paragraphs:['Kontradikcija pokazuje zašto očigledno poboljšanje stvara neželjenu posledicu i gde se zahtevi stvarno sukobljavaju.']},{title:'Struktura',paragraphs:['Ako se X poveća, A se poboljšava ali B se pogoršava. Ako se X smanji, B ostaje prihvatljiv ali A se pogoršava. Sledeći korak je razdvojiti zahteve ili promeniti mehanizam.']}]},
    resources:{slug:'resources',title:'Resursi sistema',lead:'Pre dodavanja nove opreme ili energije treba utvrditi koji resursi već postoje u sistemu i njegovom okruženju.',sections:[{title:'Vrste resursa',bullets:['prostor i geometrija;','vreme i redosled;','materijali;','energija i toplotni tokovi;','fizički efekti;','informacije;','postojeći elementi;','ljudi i kompetencije.']},{title:'Princip',paragraphs:['Prvo koristiti postojeće resurse, zatim menjati raspodelu funkcija, a tek potom dodavati nove elemente.']}]},
    constraints:{slug:'constraints',title:'Ograničenja',lead:'Ograničenje je deo zadatka. Rešenje koje ignoriše kritično ograničenje nije validno.',sections:[{title:'Kategorije',bullets:['fizička i tehnička;','bezbednost;','regulatorna;','ekonomska;','rokovi;','prostor i infrastruktura;','kompatibilnost;','održavanje;','organizacija.']},{title:'Čvrsta i uslovna',paragraphs:['Čvrsto ograničenje ne sme se prekršiti. Uslovno se može preispitati ako je promena racionalna i bezbedna.']}]},
    'desired-result':{slug:'desired-result',title:'Željeni i idealni rezultat',lead:'Željeni rezultat opisuje potrebnu funkciju. Idealni rezultat proverava da li se ona može postići sa manje složenosti.',sections:[{title:'Praktično značenje',paragraphs:['Idealnost nije fantazija već smer traženja: potreban efekat uz minimum dodatnih resursa, složenosti, gubitaka i novih kvarova.']},{title:'Provera opcije',bullets:['koju funkciju stvara;','šta dodaje;','koje rizike stvara;','da li se postojeći resursi mogu iskoristiti;','da li se nešto može ukloniti umesto dodati.']}]},
    diagnose:{slug:'diagnose',title:'DIAGNOSE — razumeti stvarni problem',lead:'DIAGNOSE pretvara početni opis u inženjerski model problema.',sections:[{title:'Ulazi',bullets:['početni problem;','dostupni podaci;','trenutna arhitektura;','ograničenja;','prethodni pokušaji.']},{title:'Izlazi',bullets:['funkcija i neželjeni efekat;','granice sistema;','usko grlo;','kontradikcija;','resursi;','ograničenja;','kritične nepoznanice;','kriterijumi prihvatljivosti.']}]},
    invent:{slug:'invent',title:'INVENT — formiranje opcija',lead:'INVENT nije slobodno generisanje ideja. Opcije proizlaze iz strukture problema.',sections:[{title:'Izvori opcija',bullets:['razdvajanje zahteva u vremenu ili prostoru;','promena arhitekture;','preraspodela funkcija;','korišćenje internih resursa;','zamena fizičkog mehanizma;','upravljanje umesto stalnog režima;','uklanjanje elementa;','spajanje funkcija;','promena razmere ili redosleda.']},{title:'Kvalitet pre količine',paragraphs:['Cilj je nekoliko principijelno različitih opcija sa jasnim mehanizmom koje se mogu proveriti.']}]},
    verify:{slug:'verify',title:'VERIFY — inženjerska verifikacija',lead:'Pre preporuke, opcija prolazi proveru od fizičke izvodljivosti do dokaza, proračuna i uslova realizacije.',sections:[{title:'Lanac provere',paragraphs:['Koncept → Fizička izvodljivost → Proračun / procena → Analogije → Literatura / patenti / standardi → Podaci proizvođača → Osetljivost → Eksperiment / simulacija / specijalista → Odluka.']},{title:'Rezultat',bullets:['šta je potvrđeno;','šta je pretpostavka;','kritični parametri;','potrebna validacija;','uslovi koji menjaju zaključak;','spremnost za pilot ili realizaciju.']}]},
  },
};

export const aritzPages: Record<Lang, Record<string,AritzPage>> = {
  ru,
  en: map(ru,'en'),
  uk: map(ru,'uk'),
  sr: map(ru,'sr'),
};
