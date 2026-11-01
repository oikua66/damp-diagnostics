import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import SiteHeader from '../../components/SiteHeader';
import { languages, type Lang } from '../../../lib/translations';
import { getPublicVentures } from '../../../lib/ventures';
import styles from '../../ventures.module.css';

type Props = { params: Promise<{ lang: string }> };

const pipeline = [
  ['01', 'Discover', 'Identify an underserved problem, technology or market opportunity.'],
  ['02', 'Validate', 'Analyze the opportunity, users, alternatives and commercial potential.'],
  ['03', 'Build', 'Turn the strongest concept into a working MVP.'],
  ['04', 'Prove', 'Test core assumptions through real use, pilots, competitions or external validation.'],
  ['05', 'Package', 'Prepare the venture, technology, documentation and roadmap for transfer.'],
  ['06', 'Handoff', 'Transfer, license or continue developing the venture with the right operator or strategic partner.'],
] as const;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!languages.includes(lang as Lang)) return {};
  return {
    title: 'Venture Builder | Koretskiy Consulting',
    description: 'From opportunity discovery to a working MVP — ventures built, validated and prepared for partnership, licensing or transfer.',
    alternates: { canonical: `https://koretskiy.com/${lang}/ventures` },
    openGraph: {
      title: 'Venture Builder — Koretskiy Consulting',
      description: 'I turn complex opportunities into working ventures.',
      url: `https://koretskiy.com/${lang}/ventures`,
      type: 'website',
    },
  };
}

export default async function VenturesPage({ params }: Props) {
  const { lang } = await params;
  if (!languages.includes(lang as Lang)) notFound();
  const safeLang = lang as Lang;
  const ventures = getPublicVentures();

  return (
    <main className={styles.page}>
      <SiteHeader lang={safeLang} languagePath="/ventures" />
      <div className={styles.shell}>
        <section className={styles.hero}>
          <div className={styles.eyebrow}>Venture Builder</div>
          <h1>From opportunity to working MVP.</h1>
          <p className={styles.lead}>I identify promising opportunities, turn them into product concepts, build working MVPs and validate them in the real world. Successful ventures can then be transferred, licensed or developed together with teams and strategic partners capable of scaling them.</p>
          <div className={styles.actions}>
            <a className={styles.primary} href="#portfolio">Explore Ventures</a>
            <a className={styles.secondary} href={`/${safeLang}#contact`}>Bring Me a Problem</a>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.eyebrow}>How the model works</div>
          <h2 className={styles.sectionTitle}>Discover → Validate → Build → Prove → Package → Handoff</h2>
          <div className={styles.pipeline}>{pipeline.map(([no, title, text]) => <article className={styles.step} key={no}><div className={styles.stepNo}>{no}</div><h3>{title}</h3><p>{text}</p></article>)}</div>
        </section>

        <section className={styles.section} id="portfolio">
          <div className={styles.eyebrow}>Venture Portfolio</div>
          <h2 className={styles.sectionTitle}>Built for continuation, partnership or transfer.</h2>
          <div className={styles.grid}>
            {ventures.map((venture) => (
              <article className={styles.card} key={venture.id}>
                <div className={styles.meta}>
                  <span className={styles.pill}>{venture.kind === 'tool' ? 'Tool' : venture.id}</span>
                  <span className={styles.pill}>{venture.stage}</span>
                  <span className={styles.pill}>{venture.status}</span>
                </div>
                <div className={styles.eyebrow}>{venture.category.join(' / ')}</div>
                <h3>{venture.name}</h3>
                <p className={styles.tagline}>{venture.tagline}</p>
                <p className={styles.teaser}>{venture.teaser}</p>
                <a className={styles.cardLink} href={`/${safeLang}/ventures/${venture.slug}`}>View {venture.kind === 'tool' ? 'Tool' : 'Venture'} →</a>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
