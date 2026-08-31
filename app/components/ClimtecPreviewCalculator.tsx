'use client';

import { useMemo, useState } from 'react';

type Model = {
  name: string;
  series: 'RD' | 'QUATTRO' | 'OPTIMA';
  variant: string;
  maxAirflow: number;
  area: number;
  people: number;
  minLength: number;
  maxLength: number;
  hole: number;
  efficiency: string;
  features: string[];
};

const models: Model[] = [
  { name: 'RD 100 Standard', series: 'RD', variant: 'Standard', maxAirflow: 40, area: 15, people: 2, minLength: 325, maxLength: 650, hole: 112, efficiency: 'до 93%', features: ['4 скорости', 'рекуперация / приток / вытяжка'] },
  { name: 'RD 125 Standard', series: 'RD', variant: 'Standard', maxAirflow: 60, area: 25, people: 4, minLength: 430, maxLength: 1000, hole: 142, efficiency: 'до 93%', features: ['автоматический клапан', 'управление со смартфона'] },
  { name: 'RD 150 Standard', series: 'RD', variant: 'Standard', maxAirflow: 100, area: 40, people: 5, minLength: 475, maxLength: 1000, hole: 162, efficiency: 'до 93%', features: ['автоматический клапан', 'нагреватель 100 Вт'] },
  { name: 'RD 200 Standard', series: 'RD', variant: 'Standard', maxAirflow: 185, area: 70, people: 6, minLength: 515, maxLength: 1000, hole: 225, efficiency: 'до 93%', features: ['автоматический клапан', 'нагреватель 300 Вт'] },
  { name: 'RD 200+ Standard', series: 'RD', variant: 'Standard', maxAirflow: 240, area: 90, people: 8, minLength: 515, maxLength: 1000, hole: 225, efficiency: 'до 93%', features: ['автоматический клапан', 'нагреватель 300 Вт'] },
  { name: 'Quattro 100 Standard', series: 'QUATTRO', variant: 'Standard', maxAirflow: 40, area: 15, people: 2, minLength: 320, maxLength: 650, hole: 112, efficiency: 'до 93%', features: ['натуральное дерево', 'Wi‑Fi', 'датчик влажности'] },
  { name: 'Quattro 125 Standard', series: 'QUATTRO', variant: 'Standard', maxAirflow: 60, area: 25, people: 4, minLength: 410, maxLength: 1000, hole: 142, efficiency: 'до 93%', features: ['Wi‑Fi', 'датчики температуры и влажности'] },
  { name: 'Quattro 150 Profi', series: 'QUATTRO', variant: 'Profi', maxAirflow: 100, area: 40, people: 5, minLength: 460, maxLength: 1000, hole: 162, efficiency: 'до 93%', features: ['CO₂', 'Wi‑Fi', 'подогрев дренажа'] },
  { name: 'Quattro 200+ Profi', series: 'QUATTRO', variant: 'Profi', maxAirflow: 240, area: 90, people: 8, minLength: 480, maxLength: 1000, hole: 225, efficiency: 'до 93%', features: ['CO₂', 'Wi‑Fi', 'подогрев дренажа'] },
  { name: 'Optima 100 Standard', series: 'OPTIMA', variant: 'Standard', maxAirflow: 40, area: 15, people: 2, minLength: 320, maxLength: 650, hole: 112, efficiency: 'до 93%', features: ['акриловая панель', 'Wi‑Fi', 'датчик влажности'] },
  { name: 'Optima 125 Standard', series: 'OPTIMA', variant: 'Standard', maxAirflow: 60, area: 25, people: 4, minLength: 410, maxLength: 1000, hole: 142, efficiency: 'до 93%', features: ['акриловая панель', 'Wi‑Fi'] },
  { name: 'Optima 150 Profi', series: 'OPTIMA', variant: 'Profi', maxAirflow: 100, area: 40, people: 5, minLength: 460, maxLength: 1000, hole: 162, efficiency: 'до 93%', features: ['CO₂', 'Wi‑Fi', 'индивидуальный дизайн панели'] },
  { name: 'Optima 200+ Profi', series: 'OPTIMA', variant: 'Profi', maxAirflow: 240, area: 90, people: 8, minLength: 480, maxLength: 1000, hole: 225, efficiency: 'до 93%', features: ['CO₂', 'Wi‑Fi', 'индивидуальный дизайн панели'] },
];

export default function ClimtecPreviewCalculator() {
  const [area, setArea] = useState(20);
  const [height, setHeight] = useState(2.7);
  const [people, setPeople] = useState(2);
  const [wall, setWall] = useState(380);
  const [material, setMaterial] = useState('кирпич');
  const [insulation, setInsulation] = useState('не знаю');
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [city, setCity] = useState('');

  const matches = useMemo(() => {
    const suitable = models.filter((m) => m.area >= area && m.people >= people);
    const byCapacity = suitable.length ? suitable : models.filter((m) => m.maxAirflow >= Math.max(40, area * 2));
    return [...byCapacity]
      .sort((a, b) => a.maxAirflow - b.maxAirflow)
      .filter((m, i, arr) => arr.findIndex((x) => x.series === m.series) === i)
      .slice(0, 3);
  }, [area, people]);

  const volume = Math.round(area * height);
  const maxSupportedWall = matches.length ? Math.max(...matches.map((m) => m.maxLength)) : 1000;
  const wallNote = wall < 250
    ? 'Толщина стены меньше 250 мм — требуется отдельная проверка монтажного решения.'
    : wall <= maxSupportedWall
      ? 'Толщина стены подходит для штатного монтажа. Для тонких стен производителем предусмотрены специальные монтажные решения.'
      : 'Толщина стены больше стандартного диапазона модулей — потребуется уточнение монтажного решения.';

  const mailBody = encodeURIComponent([
    'Заявка на предварительный подбор CLIMTEC',
    '',
    `Имя: ${name || '—'}`,
    `Контакт: ${contact || '—'}`,
    `Город: ${city || '—'}`,
    `Площадь помещения: ${area} м²`,
    `Высота: ${height} м`,
    `Объём: ${volume} м³`,
    `Количество людей: ${people}`,
    `Материал стены: ${material}`,
    `Толщина стены: ${wall} мм`,
    `Наружное утепление: ${insulation}`,
    '',
    `Предварительные варианты: ${matches.map((m) => m.name).join(', ') || 'нужен ручной подбор'}`,
    '',
    'Прошу проверить конфигурацию и возможность монтажа.'
  ].join('\n'));

  return (
    <section className="ct-calc" id="calculator">
      <div className="ct-calc-head">
        <p className="eyebrow">Предварительный подбор</p>
        <h2>Подберём класс устройства по помещению и проверим монтаж по стене.</h2>
        <p>Расчёт использует рекомендованные площади, число людей и монтажные размеры из каталога производителя. Это не заменяет окончательную инженерную проверку.</p>
      </div>

      <div className="ct-grid">
        <div className="ct-form">
          <label>Площадь помещения, м²<input type="number" min="5" max="200" value={area} onChange={(e) => setArea(Number(e.target.value))} /></label>
          <label>Высота потолка, м<input type="number" min="2" max="6" step="0.1" value={height} onChange={(e) => setHeight(Number(e.target.value))} /></label>
          <label>Количество людей<input type="number" min="1" max="30" value={people} onChange={(e) => setPeople(Number(e.target.value))} /></label>
          <label>Материал наружной стены<select value={material} onChange={(e) => setMaterial(e.target.value)}><option>кирпич</option><option>бетон</option><option>газобетон</option><option>блок</option><option>каркас / SIP</option><option>комбинированная</option><option>не знаю</option></select></label>
          <label>Толщина наружной стены, мм<input type="number" min="100" max="1500" step="10" value={wall} onChange={(e) => setWall(Number(e.target.value))} /></label>
          <label>Наружное утепление<select value={insulation} onChange={(e) => setInsulation(e.target.value)}><option>нет</option><option>есть</option><option>не знаю</option></select></label>
          <div className="ct-summary"><strong>{volume} м³</strong><span>объём помещения</span></div>
          <p className="ct-wall-note">{wallNote}</p>
        </div>

        <div className="ct-results">
          <p className="eyebrow">Подходящие варианты</p>
          {matches.length ? matches.map((m) => (
            <article className="ct-card" key={m.name}>
              <div className="ct-card-top"><span>{m.series}</span><span>{m.variant}</span></div>
              <h3>{m.name}</h3>
              <dl>
                <div><dt>Воздухообмен</dt><dd>до {m.maxAirflow} м³/ч</dd></div>
                <div><dt>Рекомендуемая площадь</dt><dd>до {m.area} м²</dd></div>
                <div><dt>Людей</dt><dd>до {m.people}</dd></div>
                <div><dt>Отверстие</dt><dd>Ø {m.hole} мм</dd></div>
                <div><dt>Длина рабочего модуля</dt><dd>{m.minLength}–{m.maxLength} мм</dd></div>
                <div><dt>Рекуперация</dt><dd>{m.efficiency}</dd></div>
              </dl>
              <p>{m.features.join(' · ')}</p>
            </article>
          )) : <p>Для этих данных нужен ручной подбор.</p>}
        </div>
      </div>

      <div className="ct-order">
        <div><p className="eyebrow">Заявка на расчёт</p><h2>Отправить исходные данные для проверки.</h2><p>Предварительный результат попадёт в письмо автоматически. Останется только добавить контакты.</p></div>
        <div className="ct-order-fields">
          <label>Имя<input value={name} onChange={(e) => setName(e.target.value)} /></label>
          <label>Телефон / email / мессенджер<input value={contact} onChange={(e) => setContact(e.target.value)} /></label>
          <label>Город<input value={city} onChange={(e) => setCity(e.target.value)} /></label>
          <a className="button button-dark" href={`mailto:consulting@koretskiy.com?subject=CLIMTEC%20—%20предварительный%20подбор&body=${mailBody}`}>Отправить на расчёт</a>
        </div>
      </div>
    </section>
  );
}
