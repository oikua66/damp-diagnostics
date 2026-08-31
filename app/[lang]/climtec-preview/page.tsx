import { notFound } from 'next/navigation';
import ClimtecPreviewCalculator from '../../components/ClimtecPreviewCalculator';

export default async function ClimtecPreviewPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (lang !== 'ru') notFound();

  return (
    <main className="ct-page">
      <header className="ct-preview-header">
        <a href="/ru" className="ct-brand">Koretskiy Consulting</a>
        <span>CLIMTEC preview</span>
      </header>

      <section className="ct-hero">
        <p className="eyebrow">Децентрализованная вентиляция с рекуперацией</p>
        <h1>CLIMTEC</h1>
        <p className="ct-lead">Компактные приточно-вытяжные установки с рекуперацией тепла для квартир, домов и других помещений, где монтаж обычной сети воздуховодов затруднён или нецелесообразен.</p>
        <div className="ct-hero-actions">
          <a className="button button-dark" href="#calculator">Подобрать оборудование</a>
          <a className="button button-light" href="/ru/damp-diagnostics">Диагностика сырости</a>
        </div>
      </section>

      <section className="ct-intro">
        <div>
          <p className="eyebrow">Когда это имеет смысл</p>
          <h2>Вентиляция — не универсальное лечение сырости.</h2>
        </div>
        <div className="ct-copy">
          <p>CLIMTEC стоит рассматривать там, где причиной конденсата, плесени или повышенной влажности является недостаточный воздухообмен либо где нужна постоянная подача свежего воздуха без больших строительных работ.</p>
          <p>Устройства одновременно удаляют вытяжной воздух и подают наружный, передавая тепло между потоками через раздельные каналы теплообменника. Производитель заявляет эффективность рекуперации до 93% для большинства бытовых моделей.</p>
          <p>Окончательный выбор зависит не только от площади помещения, но и от количества людей, толщины и конструкции наружной стены, планировки и возможности выполнить монтаж.</p>
        </div>
      </section>

      <section className="ct-series">
        <article><span>RD</span><h3>Практичная базовая серия</h3><p>Круглая внутренняя панель, несколько типоразмеров и производительность от 40 до 240 м³/ч в бытовом диапазоне.</p></article>
        <article><span>QUATTRO</span><h3>Дерево и расширенное управление</h3><p>Натуральное дерево, Wi‑Fi, датчики температуры и влажности; в версиях Profi — дополнительные датчики и функции.</p></article>
        <article><span>OPTIMA</span><h3>Акриловая лицевая панель</h3><p>Современный дизайн, Wi‑Fi и возможность индивидуального оформления фронтальной панели.</p></article>
      </section>

      <ClimtecPreviewCalculator />

      <section className="ct-note">
        <p className="eyebrow">Важно</p>
        <h2>Предварительный подбор — только первый шаг.</h2>
        <p>Для окончательной конфигурации нужно проверить существующую вентиляцию, размещение устройств, фасад, толщину и состав стены, наружное утепление и условия бурения.</p>
      </section>
    </main>
  );
}
