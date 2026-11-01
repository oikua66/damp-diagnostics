import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import SiteHeader from '../../../components/SiteHeader';
import VentureContactForm from '../../../components/VentureContactForm';
import { business } from '../../../../lib/business';
import { languages, type Lang } from '../../../../lib/translations';
import { getPublicVentures, getVentureBySlug } from '../../../../lib/ventures';
import styles from '../../../ventures.module.css';

type Props = { params: Promise<{ lang: string; slug: string }> };

export function generateStaticParams() {
  return languages.flatMap((lang) => getPublicVentures().map((venture) => ({ lang, slug: venture.slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  const venture = getVentureBySlug(slug);
  if (!venture || !languages.includes(lang as Lang)) return {};
  const url = `https://koretskiy.com/${lang}/ventures/${venture.slug}`;
  return {
    title: `${venture.name} | Venture Portfolio | Koretskiy Consulting`,
    description: venture.tagline,
    alternates: { canonical: url },
    openGraph: { title: `${venture.name} — Venture Portfolio`, description: venture.tagline, url, type: 'website' },
  };
}

export default async function VenturePage({ params }: Props) {
  const { lang, slug } = await params;
  if (!languages.includes(lang as Lang)) notFound();
  const safeLang = lang as Lang;
  const venture = getVentureBySlug(slug);
  if (!venture) notFound();

  const isInternalTool = venture.kind === 'tool' || venture.status === 'Internal Tool';
  const isHackathonProject = venture.status === 'Hackathon Project';
  const isPilotReady = venture.status === 'Pilot Ready';

  return (
    <main className={styles.page}>
      <SiteHeader lang={safeLang} languagePath={`/ventures/${venture.slug}`} />
      <div className={styles.shell}>
        <section className={styles.detailHero}>
          <a className={styles.back} href={`/${safeLang}/ventures`}>← Venture Portfolio</a>
          <div className={styles.eyebrow}>{venture.category.join(' / ')}</div>
          <h1>{venture.name}</h1>
          <p className={styles.lead}>{venture.tagline}</p>
          <div className={styles.meta}><span className={styles.pill}>{venture.id}</span><span className={styles.pill}>{venture.stage}</span><span className={styles.pill}>{venture.status}</span></div>
          <div className={styles.actions}>
            {venture.production_url ? <a className={styles.primary} href={venture.production_url} target="_blank" rel="noreferrer">{venture.slug === 'checkopp' ? 'Open CheckOpp' : 'Open Live Product'} →</a> : null}
            {!isInternalTool ? <a className={styles.secondary} href="#discuss">Discuss This Venture</a> : null}
          </div>
        </section>

        <section className={styles.section}><div className={styles.twoCol}><div className={styles.copy}><h2>Problem</h2><p>{venture.problem}</p></div><div className={styles.copy}><h2>Opportunity</h2><p>{venture.opportunity}</p></div></div></section>
        <section className={styles.section}><div className={styles.twoCol}><div className={styles.copy}><h2>Solution</h2><p>{venture.solution}</p></div><div className={styles.copy}><h2>How It Works</h2><ol className={styles.list}>{venture.howItWorks.map((item) => <li key={item}>{item}</li>)}</ol></div></div></section>

        <section className={styles.section}>
          <div className={styles.twoCol}>
            <div className={styles.copy}><h2>Current Stage</h2><p>What already exists for this {isInternalTool ? 'tool' : 'venture'}:</p><ul className={styles.assetList}>{venture.assets.map((asset) => <li key={asset}>{asset}</li>)}</ul></div>
            <div className={styles.copy}><h2>Validation</h2>{venture.validation.length ? <ul className={styles.list}>{venture.validation.map((item) => <li key={`${item.type}-${item.name}`}><strong>{item.name}</strong>{item.status ? ` — ${item.status}` : ''}</li>)}</ul> : <p className={styles.validationEmpty}>No external validation is claimed publicly yet.</p>}</div>
          </div>
        </section>

        <section className={styles.section}><div className={styles.twoCol}><div className={styles.copy}><h2>{isInternalTool ? 'Role' : 'Business Model'}</h2><ul className={styles.list}>{venture.businessModel.map((item) => <li key={item}>{item}</li>)}</ul></div><div className={styles.copy}><h2>What Happens Next</h2><ol className={styles.list}>{venture.nextSteps.map((item) => <li key={item}>{item}</li>)}</ol></div></div></section>

        {isInternalTool ? (
          <section className={styles.section}>
            <div className={styles.contact}>
              <div className={styles.eyebrow}>Internal Development Infrastructure</div>
              <h2>Built to support the venture-building workflow.</h2>
              <p>This is an internal working tool rather than a venture currently offered for partnership, licensing or transfer.</p>
            </div>
          </section>
        ) : (
          <section className={styles.section} id="discuss">
            <div className={styles.contact}>
              <div className={styles.eyebrow}>{isHackathonProject ? 'Hackathon Project / Next Validation Step' : isPilotReady ? 'Pilot / Collaboration' : 'Partnership / Licensing / Transfer'}</div>
              <h2>{isHackathonProject ? 'Interested in what happens after the hackathon?' : isPilotReady ? 'Interested in testing this in a real pilot?' : 'Interested in taking this venture further?'}</h2>
              <p>{isHackathonProject
                ? 'This project was built in a hackathon context. The next step is validation: deciding whether the concept deserves continued development, a pilot, licensing or handoff.'
                : isPilotReady
                  ? 'The working MVP is ready for a focused real-world pilot. A pilot can test the workflow, collect feedback and determine whether further productization or partnership makes sense.'
                  : 'Depending on the venture, the next step may be a strategic partnership, licensing, technology transfer, acquisition/project transfer or a co-venture. Public pricing is intentionally not shown.'}</p>
              <VentureContactForm ventureId={venture.id} ventureName={venture.name} email={business.email} />
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
