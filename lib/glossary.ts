import type { Lang } from './translations';

export type GlossaryTerm = {
  id: string;
  canonical: string;
  terms: Record<Lang, string>;
  definition: Record<Lang, string>;
  formal?: boolean;
};

export const glossaryTerms: GlossaryTerm[] = [
  {
    id: '01',
    canonical: 'Evidence',
    terms: { en: 'evidence', ru: 'доказательства / доказательная база', uk: 'докази / доказова база', sr: 'dokazi / dokazna osnova' },
    definition: {
      en: 'Information, data, measurements, documents, calculations, sources or verification results on which a material conclusion is based.',
      ru: 'Информация, данные, измерения, документы, расчёты, источники или результаты проверки, на которых основан существенный вывод.',
      uk: 'Інформація, дані, вимірювання, документи, розрахунки, джерела або результати перевірки, на яких ґрунтується суттєвий висновок.',
      sr: 'Informacije, podaci, merenja, dokumenti, proračuni, izvori ili rezultati provere na kojima se zasniva bitan zaključak.',
    },
  },
  {
    id: '02',
    canonical: 'Evidence before conclusion',
    terms: { en: 'evidence before conclusion', ru: 'доказательства до выводов / сначала доказательства, затем вывод', uk: 'докази перед висновками / спочатку докази, потім висновок', sr: 'dokazi pre zaključka' },
    definition: {
      en: 'A core principle: a conclusion should not come before a verifiable factual basis.',
      ru: 'Базовый принцип: вывод не должен предшествовать проверяемой основе.',
      uk: 'Базовий принцип: висновок не повинен передувати перевірюваній основі.',
      sr: 'Osnovni princip: zaključak ne treba da prethodi proverljivoj osnovi.',
    },
  },
  {
    id: '03',
    canonical: 'Verification',
    terms: { en: 'verification', ru: 'проверка / верификация', uk: 'перевірка / верифікація', sr: 'provera / verifikacija' },
    definition: {
      en: 'Checking a claim, calculation, parameter, source or solution against available evidence and requirements.',
      ru: 'Проверка утверждения, расчёта, параметра, источника или решения на соответствие доступным доказательствам и требованиям.',
      uk: 'Перевірка твердження, розрахунку, параметра, джерела або рішення на відповідність доступним доказам і вимогам.',
      sr: 'Provera tvrdnje, proračuna, parametra, izvora ili rešenja prema dostupnim dokazima i zahtevima.',
    },
  },
  {
    id: '04',
    canonical: 'Validation',
    terms: { en: 'validation', ru: 'валидация / подтверждение применимости', uk: 'валідація / підтвердження застосовності', sr: 'validacija / potvrda primenljivosti' },
    definition: {
      en: 'Checking that a model, solution or result is fit for real use under the stated conditions.',
      ru: 'Проверка того, что модель, решение или результат пригодны для реального применения в заданных условиях.',
      uk: 'Перевірка того, що модель, рішення або результат придатні для реального застосування в заданих умовах.',
      sr: 'Provera da li su model, rešenje ili rezultat prikladni za stvarnu primenu u zadatim uslovima.',
    },
  },
  {
    id: '05',
    canonical: 'Provenance',
    terms: { en: 'provenance', ru: 'происхождение данных / прослеживаемость источника', uk: 'походження даних / простежуваність джерела', sr: 'poreklo podataka / sledljivost izvora' },
    definition: {
      en: 'The ability to identify the source, context and origin path of material data or claims.',
      ru: 'Возможность установить источник, контекст и путь происхождения существенных данных или утверждений.',
      uk: 'Можливість встановити джерело, контекст і шлях походження суттєвих даних або тверджень.',
      sr: 'Mogućnost da se utvrde izvor, kontekst i poreklo bitnih podataka ili tvrdnji.',
    },
  },
  {
    id: '06',
    canonical: 'Fact / Known',
    terms: { en: 'fact / known', ru: 'факт / известное', uk: 'факт / відоме', sr: 'činjenica / poznato' },
    definition: {
      en: 'Information treated as established within the current analysis and supported well enough for that purpose.',
      ru: 'Информация, которая считается установленной в рамках текущего анализа и имеет достаточную опору.',
      uk: 'Інформація, яка вважається встановленою в межах поточного аналізу й має достатню опору.',
      sr: 'Informacija koja se u okviru trenutne analize smatra utvrđenom i dovoljno potkrepljenom.',
    },
  },
  {
    id: '07',
    canonical: 'Client-provided data',
    terms: { en: 'client-provided data', ru: 'данные клиента', uk: 'дані клієнта', sr: 'podaci klijenta' },
    definition: {
      en: 'Information supplied by the client that is not independently verified until it is checked separately.',
      ru: 'Информация, предоставленная клиентом и не считающаяся независимо подтверждённой до отдельной проверки.',
      uk: 'Інформація, надана клієнтом, яка не вважається незалежно підтвердженою до окремої перевірки.',
      sr: 'Informacija koju je dao klijent i koja se ne smatra nezavisno potvrđenom dok se posebno ne proveri.',
    },
  },
  {
    id: '08',
    canonical: 'Independently verified',
    terms: { en: 'independently verified', ru: 'независимо проверено / независимо подтверждено', uk: 'незалежно перевірено / незалежно підтверджено', sr: 'nezavisno provereno / nezavisno potvrđeno' },
    definition: {
      en: 'Data or a claim confirmed by a source or method independent of the original assertion.',
      ru: 'Данные или утверждение, подтверждённые источником или методом, независимым от исходного утверждения.',
      uk: 'Дані або твердження, підтверджені джерелом чи методом, незалежним від початкового твердження.',
      sr: 'Podatak ili tvrdnja potvrđeni izvorom ili metodom nezavisnim od početne tvrdnje.',
    },
  },
  {
    id: '09',
    canonical: 'Inference',
    terms: { en: 'inference', ru: 'вывод / аналитический вывод', uk: 'висновок / аналітичний висновок', sr: 'zaključak / analitički zaključak' },
    definition: {
      en: 'A conclusion logically derived from known information; it is not itself a primary fact.',
      ru: 'Логически полученный вывод на основе известных данных, который сам по себе не является первичным фактом.',
      uk: 'Логічно отриманий висновок на основі відомих даних, який сам по собі не є первинним фактом.',
      sr: 'Zaključak izveden logički iz poznatih podataka, koji sam po sebi nije primarna činjenica.',
    },
  },
  {
    id: '10',
    canonical: 'Assumption',
    terms: { en: 'assumption', ru: 'допущение / предположение', uk: 'припущення', sr: 'pretpostavka' },
    definition: {
      en: 'A value or condition temporarily accepted for analysis without sufficient independent confirmation.',
      ru: 'Значение или условие, временно принятое для анализа без достаточного независимого подтверждения.',
      uk: 'Значення або умова, тимчасово прийняті для аналізу без достатнього незалежного підтвердження.',
      sr: 'Vrednost ili uslov privremeno prihvaćeni za analizu bez dovoljne nezavisne potvrde.',
    },
  },
  {
    id: '11',
    canonical: 'Hypothesis',
    terms: { en: 'hypothesis', ru: 'гипотеза', uk: 'гіпотеза', sr: 'hipoteza' },
    definition: {
      en: 'A possible explanation, mechanism or claim that requires testing.',
      ru: 'Возможное объяснение, механизм или утверждение, которое требует проверки.',
      uk: 'Можливе пояснення, механізм або твердження, яке потребує перевірки.',
      sr: 'Moguće objašnjenje, mehanizam ili tvrdnja koja zahteva proveru.',
    },
  },
  {
    id: '12',
    canonical: 'Unknown',
    terms: { en: 'unknown', ru: 'неизвестное / неизвестный параметр', uk: 'невідоме / невідомий параметр', sr: 'nepoznato / nepoznati parametar' },
    definition: {
      en: 'Material information that is missing or not confirmed at the current stage.',
      ru: 'Существенная информация, отсутствующая или не подтверждённая на текущем этапе.',
      uk: 'Суттєва інформація, відсутня або не підтверджена на поточному етапі.',
      sr: 'Bitna informacija koja nedostaje ili nije potvrđena u trenutnoj fazi.',
    },
  },
  {
    id: '13',
    canonical: 'Critical unknown',
    terms: { en: 'critical unknown', ru: 'критически важное неизвестное', uk: 'критично важлива невідомість / критично невідомий параметр', sr: 'kritična nepoznanica' },
    definition: {
      en: 'An unknown fact or parameter capable of changing the direction, architecture, safety, economics or the decision itself.',
      ru: 'Неизвестный параметр или факт, способный изменить направление, архитектуру, безопасность, экономику или само решение.',
      uk: 'Невідомий параметр або факт, здатний змінити напрям, архітектуру, безпеку, економіку або саме рішення.',
      sr: 'Nepoznati parametar ili činjenica koji mogu promeniti pravac, arhitekturu, bezbednost, ekonomiku ili samu odluku.',
    },
  },
  {
    id: '14',
    canonical: 'Uncertainty',
    terms: { en: 'uncertainty', ru: 'неопределённость', uk: 'невизначеність', sr: 'neizvesnost' },
    definition: {
      en: 'A state in which some material data, parameters or relationships are not sufficiently known for an unconditional conclusion.',
      ru: 'Состояние, при котором часть значимых данных, параметров или связей недостаточно определена для безусловного вывода.',
      uk: 'Стан, за якого частина значущих даних, параметрів або зв’язків недостатньо визначена для безумовного висновку.',
      sr: 'Stanje u kome deo bitnih podataka, parametara ili veza nije dovoljno određen za bezuslovan zaključak.',
    },
  },
  {
    id: '15',
    canonical: 'Conflicting evidence',
    terms: { en: 'conflicting evidence', ru: 'противоречивые данные / конфликтующие доказательства', uk: 'суперечливі дані / конфліктні докази', sr: 'konfliktni podaci / protivrečni dokazi' },
    definition: {
      en: 'A situation in which relevant sources or checks support incompatible conclusions.',
      ru: 'Ситуация, когда релевантные источники или результаты проверки дают несовместимые выводы.',
      uk: 'Ситуація, коли релевантні джерела або результати перевірки дають несумісні висновки.',
      sr: 'Situacija u kojoj relevantni izvori ili rezultati provere daju nespojive zaključke.',
    },
  },
  {
    id: '16',
    canonical: 'Decision-relevant',
    terms: { en: 'decision-relevant', ru: 'значимый для решения / способный повлиять на решение', uk: 'значущий для рішення / здатний вплинути на рішення', sr: 'relevantan za odluku / sposoban da utiče na odluku' },
    definition: {
      en: 'Information or work capable of materially changing a decision, direction, architecture, economics, safety or next step.',
      ru: 'Информация или работа, способная существенно изменить решение, направление, архитектуру, экономику, безопасность или следующий шаг.',
      uk: 'Інформація або робота, здатна суттєво змінити рішення, напрям, архітектуру, економіку, безпеку або наступний крок.',
      sr: 'Informacija ili rad koji mogu bitno promeniti odluku, pravac, arhitekturu, ekonomiku, bezbednost ili sledeći korak.',
    },
  },
  {
    id: '17',
    canonical: 'Decision-grade evidence',
    terms: { en: 'decision-grade evidence', ru: 'доказательства, достаточные для принятия решения', uk: 'докази, достатні для прийняття рішення', sr: 'dokazi dovoljnog kvaliteta za donošenje odluke' },
    definition: {
      en: 'Evidence strong enough for a specific decision, taking its risk and consequences into account.',
      ru: 'Уровень доказательной базы, достаточный для конкретного решения с учётом его риска и последствий.',
      uk: 'Рівень доказової бази, достатній для конкретного рішення з урахуванням його ризику та наслідків.',
      sr: 'Nivo dokazne osnove dovoljan za konkretnu odluku uzimajući u obzir njen rizik i posledice.',
    },
  },
  {
    id: '18',
    canonical: 'Bottleneck',
    terms: { en: 'bottleneck', ru: 'узкое место / основной ограничивающий фактор', uk: 'вузьке місце / основний обмежувальний фактор', sr: 'usko grlo / glavni ograničavajući faktor' },
    definition: {
      en: 'The element, parameter, conflict or uncertainty that currently limits progress more than anything else.',
      ru: 'Элемент, параметр, конфликт или неопределённость, которые в текущий момент сильнее всего ограничивают возможность двигаться дальше.',
      uk: 'Елемент, параметр, конфлікт або невизначеність, які на поточному етапі найбільше обмежують подальший рух.',
      sr: 'Element, parametar, konflikt ili neizvesnost koji u datom trenutku najviše ograničavaju dalji napredak.',
    },
  },
  {
    id: '19',
    canonical: 'Constraint',
    terms: { en: 'constraint', ru: 'ограничение', uk: 'обмеження', sr: 'ograničenje' },
    definition: {
      en: 'A condition or limit that must be respected when a solution is formed and checked.',
      ru: 'Условие или предел, который должен учитываться при формировании и проверке решения.',
      uk: 'Умова або межа, яку потрібно враховувати під час формування та перевірки рішення.',
      sr: 'Uslov ili granica koji se moraju uzeti u obzir pri formiranju i proveri rešenja.',
    },
  },
  {
    id: '20',
    canonical: 'Hard constraint',
    terms: { en: 'hard constraint', ru: 'жёсткое ограничение', uk: 'жорстке обмеження', sr: 'čvrsto ograničenje' },
    definition: {
      en: 'A constraint that an acceptable solution is not allowed to violate.',
      ru: 'Ограничение, которое нельзя нарушать в допустимом решении.',
      uk: 'Обмеження, яке не можна порушувати в допустимому рішенні.',
      sr: 'Ograničenje koje prihvatljivo rešenje ne sme da prekrši.',
    },
  },
  {
    id: '21',
    canonical: 'Contradiction',
    terms: { en: 'contradiction', ru: 'противоречие / инженерное противоречие', uk: 'суперечність / інженерна суперечність', sr: 'kontradikcija / inženjerska kontradikcija' },
    definition: {
      en: 'A conflict of requirements where improving one parameter causes an unacceptable deterioration of another.',
      ru: 'Конфликт требований, при котором улучшение одного параметра вызывает недопустимое ухудшение другого.',
      uk: 'Конфлікт вимог, за якого покращення одного параметра спричиняє неприйнятне погіршення іншого.',
      sr: 'Sukob zahteva pri kome poboljšanje jednog parametra izaziva neprihvatljivo pogoršanje drugog.',
    },
  },
  {
    id: '22',
    canonical: 'System boundary',
    terms: { en: 'system boundary', ru: 'границы системы / границы анализа', uk: 'межі системи / межі аналізу', sr: 'granice sistema / granice analize' },
    definition: {
      en: 'The explicitly defined boundary between the system, its environment and related subsystems used to frame the problem.',
      ru: 'Явно определённая граница между системой, её окружением и связанными подсистемами, используемая для постановки задачи.',
      uk: 'Явно визначена межа між системою, її оточенням і пов’язаними підсистемами, що використовується для постановки задачі.',
      sr: 'Jasno definisana granica između sistema, njegovog okruženja i povezanih podsistema koja se koristi za postavljanje zadatka.',
    },
  },
  {
    id: '23',
    canonical: 'Resource',
    terms: { en: 'resource', ru: 'ресурс системы', uk: 'ресурс системи', sr: 'resurs sistema' },
    definition: {
      en: 'An existing possibility in the system or its environment — material, energy, spatial, time, information, organizational or functional — that can be used in a solution.',
      ru: 'Уже существующая в системе или окружении возможность — материальная, энергетическая, пространственная, временная, информационная, организационная или функциональная — которую можно использовать в решении.',
      uk: 'Уже наявна в системі або оточенні можливість — матеріальна, енергетична, просторова, часова, інформаційна, організаційна чи функціональна — яку можна використати в рішенні.',
      sr: 'Postojeća mogućnost u sistemu ili okruženju — materijalna, energetska, prostorna, vremenska, informaciona, organizaciona ili funkcionalna — koja se može iskoristiti u rešenju.',
    },
  },
  {
    id: '24',
    canonical: 'Desired result',
    terms: { en: 'desired result', ru: 'желаемый результат', uk: 'бажаний результат', sr: 'željeni rezultat' },
    definition: {
      en: 'The required, practically achievable outcome of the work or system change.',
      ru: 'Требуемый практически достижимый результат работы или изменения системы.',
      uk: 'Потрібний практично досяжний результат роботи або зміни системи.',
      sr: 'Traženi, praktično ostvariv rezultat rada ili promene sistema.',
    },
  },
  {
    id: '25',
    canonical: 'Ideal result',
    terms: { en: 'ideal result', ru: 'идеальный результат', uk: 'ідеальний результат', sr: 'idealni rezultat' },
    definition: {
      en: 'A search direction in which the required function is achieved with minimal added resources, complexity, losses and new failure modes.',
      ru: 'Направление поиска, при котором нужная функция достигается с минимальными дополнительными ресурсами, сложностью, потерями и новыми отказами.',
      uk: 'Напрям пошуку, за якого потрібна функція досягається з мінімальними додатковими ресурсами, складністю, втратами та новими відмовами.',
      sr: 'Pravac traženja u kome se potrebna funkcija postiže uz minimalne dodatne resurse, složenost, gubitke i nove načine otkaza.',
    },
  },
  {
    id: '26',
    canonical: 'Engineering estimate',
    terms: { en: 'engineering estimate', ru: 'инженерная оценка', uk: 'інженерна оцінка', sr: 'inženjerska procena' },
    definition: {
      en: 'A quantitative estimate based on a model, inputs and assumptions, with explicit limitations.',
      ru: 'Количественная оценка, основанная на модели, исходных данных и допущениях, с явно указанными ограничениями.',
      uk: 'Кількісна оцінка, заснована на моделі, вихідних даних і припущеннях, з явно зазначеними обмеженнями.',
      sr: 'Kvantitativna procena zasnovana na modelu, ulaznim podacima i pretpostavkama, uz jasno navedena ograničenja.',
    },
  },
  {
    id: '27',
    canonical: 'Order-of-magnitude estimate',
    terms: { en: 'order-of-magnitude estimate', ru: 'оценка порядка величины', uk: 'оцінка порядку величини', sr: 'procena reda veličine' },
    definition: {
      en: 'An approximate estimate of scale used before precise data are available.',
      ru: 'Приближённая оценка масштаба параметра, используемая до получения точных данных.',
      uk: 'Наближена оцінка масштабу параметра, що використовується до отримання точних даних.',
      sr: 'Približna procena reda veličine koja se koristi pre nego što su dostupni precizni podaci.',
    },
  },
  {
    id: '28',
    canonical: 'Sensitivity analysis',
    terms: { en: 'sensitivity analysis', ru: 'анализ чувствительности', uk: 'аналіз чутливості', sr: 'analiza osetljivosti' },
    definition: {
      en: 'Checking how strongly the result depends on changes in key inputs and assumptions.',
      ru: 'Проверка того, насколько результат зависит от изменения ключевых входных параметров и допущений.',
      uk: 'Перевірка того, наскільки результат залежить від зміни ключових вхідних параметрів і припущень.',
      sr: 'Provera koliko rezultat zavisi od promena ključnih ulaznih parametara i pretpostavki.',
    },
  },
  {
    id: '29',
    canonical: 'Scenario',
    terms: { en: 'scenario', ru: 'сценарий', uk: 'сценарій', sr: 'scenario' },
    definition: {
      en: 'A consistent set of assumptions and parameters used to assess a possible outcome when exact data are lacking.',
      ru: 'Набор согласованных предположений и параметров для оценки возможного результата при недостатке точных данных.',
      uk: 'Набір узгоджених припущень і параметрів для оцінки можливого результату за браку точних даних.',
      sr: 'Usklađen skup pretpostavki i parametara za procenu mogućeg ishoda kada nema dovoljno preciznih podataka.',
    },
  },
  {
    id: '30',
    canonical: 'Stop condition',
    terms: { en: 'stop condition', ru: 'условие остановки', uk: 'умова зупинки', sr: 'uslov zaustavljanja' },
    definition: {
      en: 'A condition under which analysis or progression to the next stage must stop until more evidence, verification or expert judgement is obtained.',
      ru: 'Условие, при котором дальнейший аналитический вывод или переход к следующему этапу не должен выполняться без дополнительного доказательства, проверки или экспертного решения.',
      uk: 'Умова, за якої подальший аналітичний висновок або перехід до наступного етапу не повинен виконуватися без додаткового доказу, перевірки чи експертного рішення.',
      sr: 'Uslov pri kome se analiza ili prelazak u sledeću fazu mora zaustaviti dok se ne pribave dodatni dokazi, provera ili stručno mišljenje.',
    },
  },
  {
    id: '31',
    canonical: 'STOP',
    terms: { en: 'STOP', ru: 'STOP / остановка анализа', uk: 'STOP / зупинка аналізу', sr: 'STOP / zaustavljanje analize' },
    definition: {
      en: 'A formal marker that the current conclusion may not be extended because of risk, critical uncertainty, missing data or a required external check.',
      ru: 'Формальная фиксация предела допустимого вывода из-за риска, критической неопределённости, отсутствия данных или необходимости обязательной внешней проверки.',
      uk: 'Формальна фіксація межі допустимого висновку через ризик, критичну невизначеність, відсутність даних або необхідність обов’язкової зовнішньої перевірки.',
      sr: 'Formalna oznaka granice dopuštenog zaključka zbog rizika, kritične neizvesnosti, nedostatka podataka ili obavezne spoljne provere.',
    },
    formal: true,
  },
  {
    id: '32',
    canonical: 'Expert supervision',
    terms: { en: 'expert supervision', ru: 'экспертный надзор / экспертная проверка', uk: 'експертний нагляд / експертна перевірка', sr: 'ekspertski nadzor / stručna provera' },
    definition: {
      en: 'Human expert involvement to control the analysis, resolve material conflicts, assess high risk or make a responsible professional judgement.',
      ru: 'Участие человека-эксперта для контроля анализа, разрешения существенных конфликтов, оценки высокого риска или принятия ответственного профессионального решения.',
      uk: 'Участь експерта-людини для контролю аналізу, вирішення суттєвих конфліктів, оцінки високого ризику або прийняття відповідального професійного рішення.',
      sr: 'Učešće ljudskog eksperta radi kontrole analize, rešavanja bitnih konflikata, procene visokog rizika ili donošenja odgovorne stručne odluke.',
    },
  },
  {
    id: '33',
    canonical: 'Expert review',
    terms: { en: 'expert review', ru: 'экспертная проверка / экспертное рассмотрение', uk: 'експертна перевірка / експертний розгляд', sr: 'stručna provera / ekspertski pregled' },
    definition: {
      en: 'A targeted check of a specific conclusion or question by a relevant specialist.',
      ru: 'Целевая проверка конкретного вывода или вопроса профильным специалистом.',
      uk: 'Цільова перевірка конкретного висновку або питання профільним фахівцем.',
      sr: 'Ciljana provera konkretnog zaključka ili pitanja od strane odgovarajućeg stručnjaka.',
    },
  },
  {
    id: '34',
    canonical: 'Specialist escalation',
    terms: { en: 'specialist escalation', ru: 'привлечение профильного специалиста', uk: 'залучення профільного фахівця', sr: 'uključivanje odgovarajućeg stručnjaka' },
    definition: {
      en: 'Passing a specific narrow question to a specialist when it should not be resolved by general analysis alone.',
      ru: 'Передача конкретного узкого вопроса специалисту, когда он не должен решаться общей аналитикой.',
      uk: 'Передача конкретного вузького питання фахівцю, коли його не слід вирішувати лише загальною аналітикою.',
      sr: 'Prosleđivanje konkretnog uskog pitanja stručnjaku kada ga ne treba rešavati samo opštom analizom.',
    },
  },
  {
    id: '35',
    canonical: 'Opportunity Assessment',
    terms: { en: 'Opportunity Assessment', ru: 'Opportunity Assessment / структурированная оценка возможности', uk: 'Opportunity Assessment / структуроване оцінювання можливості', sr: 'Opportunity Assessment / strukturisana procena prilike' },
    definition: {
      en: 'A methodology route for assessing a project, technology, development or opportunity in order to identify what is known, what is unknown, the main bottleneck and the rational next step.',
      ru: 'Методологический маршрут оценки проекта, технологии, разработки или возможности с целью определить, что известно, что неизвестно, где основное узкое место и какой следующий шаг рационален.',
      uk: 'Методологічний маршрут оцінювання проєкту, технології, розробки або можливості, щоб визначити, що відомо, що невідомо, де основне вузьке місце і який наступний крок є раціональним.',
      sr: 'Metodološka ruta za procenu projekta, tehnologije, razvoja ili prilike kako bi se utvrdilo šta je poznato, šta nije, gde je glavno usko grlo i koji je racionalan sledeći korak.',
    },
    formal: true,
  },
  {
    id: '36',
    canonical: 'Opportunity Map',
    terms: { en: 'Opportunity Map', ru: 'Opportunity Map / карта возможности', uk: 'Opportunity Map / карта можливості', sr: 'Opportunity Map / mapa prilike' },
    definition: {
      en: 'A structured picture of what is established, what needs verification, where the main bottleneck lies and which conditions could change the conclusion.',
      ru: 'Структурированная картина того, что установлено, что требует проверки, где находится ключевое узкое место и какие условия способны изменить вывод.',
      uk: 'Структурована картина того, що встановлено, що потребує перевірки, де знаходиться ключове вузьке місце і які умови здатні змінити висновок.',
      sr: 'Strukturisana slika onoga što je utvrđeno, šta zahteva proveru, gde je ključno usko grlo i koji uslovi mogu promeniti zaključak.',
    },
    formal: true,
  },
  {
    id: '37',
    canonical: 'Research & Verification',
    terms: { en: 'Research & Verification', ru: 'Research & Verification / исследование и проверка', uk: 'Research & Verification / дослідження та перевірка', sr: 'Research & Verification / istraživanje i verifikacija' },
    definition: {
      en: 'A methodology block for finding relevant sources, checking claims, analysing conflicts in evidence and determining evidence sufficiency.',
      ru: 'Методологический блок поиска релевантных источников, проверки утверждений, анализа конфликтов данных и определения достаточности доказательств.',
      uk: 'Методологічний блок пошуку релевантних джерел, перевірки тверджень, аналізу конфліктів даних і визначення достатності доказів.',
      sr: 'Metodološki blok za pronalaženje relevantnih izvora, proveru tvrdnji, analizu konflikata u podacima i određivanje dovoljnosti dokaza.',
    },
    formal: true,
  },
  {
    id: '38',
    canonical: 'ARITZ',
    terms: { en: 'ARITZ', ru: 'ARITZ / АРИЗ', uk: 'ARITZ / АРИЗ', sr: 'ARITZ' },
    definition: {
      en: 'A practical engineering problem-solving route used when the main obstacle is an engineering problem or contradiction, not merely missing information.',
      ru: 'Практический инженерный маршрут решения задач, применяемый, когда главным препятствием является инженерная проблема или противоречие, а не просто недостаток информации.',
      uk: 'Практичний інженерний маршрут розв’язання задач, який застосовується, коли головною перешкодою є інженерна проблема або суперечність, а не просто брак інформації.',
      sr: 'Praktična inženjerska ruta za rešavanje problema kada je glavna prepreka inženjerski problem ili kontradikcija, a ne samo nedostatak informacija.',
    },
    formal: true,
  },
  {
    id: '39',
    canonical: 'DIAGNOSE',
    terms: { en: 'DIAGNOSE', ru: 'DIAGNOSE — понять реальную проблему', uk: 'DIAGNOSE — зрозуміти реальну проблему', sr: 'DIAGNOSE — razumeti stvarni problem' },
    definition: {
      en: 'The ARITZ stage in which the real problem, system boundary, contradiction, resources, constraints and critical unknowns are defined.',
      ru: 'Стадия ARITZ, на которой формируются реальная постановка задачи, границы системы, противоречие, ресурсы, ограничения и критические неизвестные.',
      uk: 'Стадія ARITZ, на якій формуються реальна постановка задачі, межі системи, суперечність, ресурси, обмеження і критичні невідомі.',
      sr: 'ARITZ faza u kojoj se definišu stvarni problem, granice sistema, kontradikcija, resursi, ograničenja i kritične nepoznanice.',
    },
    formal: true,
  },
  {
    id: '40',
    canonical: 'INVENT',
    terms: { en: 'INVENT', ru: 'INVENT — построить варианты решения', uk: 'INVENT — побудувати варіанти рішення', sr: 'INVENT — formirati opcije rešenja' },
    definition: {
      en: 'The ARITZ stage for directed generation of candidate solutions from the structure of the problem rather than free brainstorming.',
      ru: 'Стадия ARITZ направленного формирования вариантов из структуры задачи, а не свободного поиска идей.',
      uk: 'Стадія ARITZ спрямованого формування варіантів зі структури задачі, а не вільного пошуку ідей.',
      sr: 'ARITZ faza usmerenog formiranja opcija iz strukture zadatka, a ne slobodnog generisanja ideja.',
    },
    formal: true,
  },
  {
    id: '41',
    canonical: 'VERIFY',
    terms: { en: 'VERIFY', ru: 'VERIFY — инженерная проверка', uk: 'VERIFY — інженерна перевірка', sr: 'VERIFY — inženjerska verifikacija' },
    definition: {
      en: 'The ARITZ stage in which a candidate is checked by calculations, analogues, literature, standards, manufacturer data, simulation, testing or expert confirmation.',
      ru: 'Стадия ARITZ, на которой кандидат проверяется расчётами, аналогами, литературой, стандартами, данными производителя, моделированием, испытанием или экспертным подтверждением.',
      uk: 'Стадія ARITZ, на якій кандидат перевіряється розрахунками, аналогами, літературою, стандартами, даними виробника, моделюванням, випробуванням або експертним підтвердженням.',
      sr: 'ARITZ faza u kojoj se kandidat proverava proračunima, analogijama, literaturom, standardima, podacima proizvođača, simulacijom, testiranjem ili stručnom potvrdom.',
    },
    formal: true,
  },
  {
    id: '42',
    canonical: 'TRIZ / ARIZ',
    terms: { en: 'TRIZ / ARIZ', ru: 'ТРИЗ / АРИЗ', uk: 'ТРІЗ / АРИЗ', sr: 'TRIZ / ARIZ' },
    definition: {
      en: 'The established classical methodology foundation on which ARITZ builds.',
      ru: 'Классическая методологическая основа, на которую опирается ARITZ.',
      uk: 'Класична методологічна основа, на яку спирається ARITZ.',
      sr: 'Klasična metodološka osnova na kojoj se ARITZ zasniva.',
    },
    formal: true,
  },
  {
    id: '43',
    canonical: 'Workflow',
    terms: { en: 'workflow', ru: 'рабочий процесс / последовательность работы', uk: 'робочий процес / послідовність роботи', sr: 'radni tok / radni proces' },
    definition: {
      en: 'A sequence of actions or stages through which the analysis is performed.',
      ru: 'Последовательность действий или стадий выполнения анализа.',
      uk: 'Послідовність дій або етапів виконання аналізу.',
      sr: 'Niz radnji ili faza kroz koje se analiza sprovodi.',
    },
  },
  {
    id: '44',
    canonical: 'Route',
    terms: { en: 'route', ru: 'маршрут анализа / направление работы', uk: 'маршрут аналізу / напрям роботи', sr: 'ruta analize / pravac rada' },
    definition: {
      en: 'The selected methodology path after the initial assessment, for example Opportunity Assessment, focused validation or ARITZ.',
      ru: 'Выбранный методологический путь работы после первичной оценки: например Opportunity Assessment, focused validation или ARITZ.',
      uk: 'Обраний методологічний шлях роботи після первинного оцінювання: наприклад Opportunity Assessment, focused validation або ARITZ.',
      sr: 'Izabrani metodološki put rada nakon početne procene, na primer Opportunity Assessment, fokusirana provera ili ARITZ.',
    },
  },
  {
    id: '45',
    canonical: 'Focused validation',
    terms: { en: 'focused validation', ru: 'сфокусированная проверка конкретного вопроса', uk: 'сфокусована перевірка конкретного питання', sr: 'fokusirana provera konkretnog pitanja' },
    definition: {
      en: 'A narrow analytical task aimed at one critical question that can change the decision.',
      ru: 'Узкая аналитическая работа, направленная на один критический вопрос, который способен изменить решение.',
      uk: 'Вузька аналітична робота, спрямована на одне критичне питання, здатне змінити рішення.',
      sr: 'Uska analitička aktivnost usmerena na jedno kritično pitanje koje može promeniti odluku.',
    },
  },
  {
    id: '46',
    canonical: 'Case',
    terms: { en: 'case', ru: 'кейс / конкретная задача', uk: 'кейс / конкретна задача', sr: 'slučaj / konkretan zadatak' },
    definition: {
      en: 'An individual project, problem or opportunity handled in CheckOpp or used in methodology examples.',
      ru: 'Отдельный проект, задача или возможность, рассматриваемые в CheckOpp или в методологических примерах.',
      uk: 'Окремий проєкт, задача або можливість, що розглядаються в CheckOpp або в методологічних прикладах.',
      sr: 'Pojedinačni projekat, zadatak ili prilika koji se obrađuju u CheckOpp-u ili koriste u metodološkim primerima.',
    },
  },
  {
    id: '47',
    canonical: 'Decision gate',
    terms: { en: 'decision gate', ru: 'точка принятия решения / контрольная точка решения', uk: 'точка прийняття рішення / контрольна точка', sr: 'tačka donošenja odluke / kontrolna tačka' },
    definition: {
      en: 'A stage at which new evidence is used to select the next direction.',
      ru: 'Этап, на котором на основании новых доказательств выбирается дальнейшее направление.',
      uk: 'Етап, на якому на підставі нових доказів обирається подальший напрям.',
      sr: 'Faza u kojoj se na osnovu novih dokaza bira dalji pravac.',
    },
  },
  {
    id: '48',
    canonical: 'Next-best evidence',
    terms: { en: 'next-best evidence', ru: 'следующее наиболее полезное доказательство', uk: 'наступний найбільш корисний доказ', sr: 'sledeći najkorisniji dokaz' },
    definition: {
      en: 'The specific additional evidence or action most likely to change the current decision.',
      ru: 'Конкретное дополнительное доказательство или действие, которое с наибольшей вероятностью способно изменить текущее решение.',
      uk: 'Конкретний додатковий доказ або дія, які з найбільшою ймовірністю здатні змінити поточне рішення.',
      sr: 'Konkretan dodatni dokaz ili radnja koji sa najvećom verovatnoćom mogu promeniti trenutnu odluku.',
    },
  },
  {
    id: '49',
    canonical: 'Minimum sufficient evidence',
    terms: { en: 'minimum sufficient evidence', ru: 'минимально достаточная доказательная база', uk: 'мінімально достатня доказова база', sr: 'minimalno dovoljna dokazna osnova' },
    definition: {
      en: 'The smallest amount of relevant information and checking sufficient for the current decision, given its risk.',
      ru: 'Минимальный объём релевантной информации и проверок, достаточный для текущего решения с учётом его риска.',
      uk: 'Мінімальний обсяг релевантної інформації та перевірок, достатній для поточного рішення з урахуванням його ризику.',
      sr: 'Najmanji obim relevantnih informacija i provera dovoljan za trenutnu odluku, uzimajući u obzir njen rizik.',
    },
  },
  {
    id: '50',
    canonical: 'Decision usefulness',
    terms: { en: 'decision usefulness', ru: 'полезность для принятия решения', uk: 'корисність для прийняття рішення', sr: 'korisnost za donošenje odluke' },
    definition: {
      en: 'The primary quality criterion: whether the analysis helps make or change a specific decision.',
      ru: 'Основной критерий качества анализа: помогает ли результат принять или изменить конкретное решение.',
      uk: 'Основний критерій якості аналізу: чи допомагає результат прийняти або змінити конкретне рішення.',
      sr: 'Glavni kriterijum kvaliteta analize: da li rezultat pomaže da se donese ili promeni konkretna odluka.',
    },
  },
];

export const glossaryIntro: Record<Lang, {
  title: string;
  lead: string;
  note: string;
  languageLabels: Record<Lang, string>;
}> = {
  en: {
    title: 'Project glossary',
    lead: 'A shared terminology reference for Koretskiy Methodology, ARITZ and CheckOpp.',
    note: 'Formal methodology names may remain in English. Ordinary technical and analytical terms are localized whenever a clear professional equivalent exists.',
    languageLabels: { en: 'EN', ru: 'RU', uk: 'UA', sr: 'SR' },
  },
  ru: {
    title: 'Глоссарий проекта',
    lead: 'Общий терминологический справочник для Koretskiy Methodology, ARITZ и CheckOpp.',
    note: 'Формальные названия методологических сущностей могут сохраняться на английском. Обычные технические и аналитические термины локализуются, если существует ясный профессиональный эквивалент.',
    languageLabels: { en: 'EN', ru: 'RU', uk: 'UA', sr: 'SR' },
  },
  uk: {
    title: 'Глосарій проєкту',
    lead: 'Спільний термінологічний довідник для Koretskiy Methodology, ARITZ і CheckOpp.',
    note: 'Формальні назви методологічних сутностей можуть зберігатися англійською. Звичайні технічні та аналітичні терміни локалізуються, якщо існує чіткий професійний відповідник.',
    languageLabels: { en: 'EN', ru: 'RU', uk: 'UA', sr: 'SR' },
  },
  sr: {
    title: 'Glosar projekta',
    lead: 'Zajednički terminološki vodič za Koretskiy Methodology, ARITZ i CheckOpp.',
    note: 'Formalni nazivi metodoloških pojmova mogu ostati na engleskom. Uobičajeni tehnički i analitički termini lokalizuju se kada postoji jasan stručni ekvivalent.',
    languageLabels: { en: 'EN', ru: 'RU', uk: 'UA', sr: 'SR' },
  },
};
