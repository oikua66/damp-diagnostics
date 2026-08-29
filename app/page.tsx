const services = [
  {
    title: 'Damp diagnostics',
    text: 'Identify the real cause of moisture, mould and cold-wall problems before choosing a remedy.',
    href: '#damp',
  },
  {
    title: 'Independent second opinion',
    text: 'A structured review of a project, contractor proposal or technical decision before you commit.',
    href: '#approach',
  },
  {
    title: 'Technical consulting',
    text: 'From problem definition and requirements to contractor briefs, comparisons and decision support.',
    href: '#contact',
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Koretskiy Consulting home">
          <span className="brand-mark">KC</span>
          <span>Koretskiy Consulting</span>
        </a>
        <nav>
          <a href="#services">Services</a>
          <a href="#approach">Approach</a>
          <a href="#damp">Damp diagnostics</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <p className="eyebrow">Independent consulting · Serbia / Europe</p>
        <h1>Finding the essential.</h1>
        <p className="lead">
          Complex technical and business problems rarely need more noise. They need the right question,
          a clear diagnosis and a decision that still makes sense after the contractors arrive.
        </p>
        <div className="hero-actions">
          <a className="button button-dark" href="#contact">Discuss a problem</a>
          <a className="button button-light" href="#damp">Damp diagnostics</a>
        </div>
      </section>

      <section className="section" id="services">
        <div className="section-heading">
          <p className="eyebrow">What I do</p>
          <h2>Start with the problem, not the product.</h2>
        </div>
        <div className="cards">
          {services.map((service) => (
            <a className="card" href={service.href} key={service.title}>
              <span className="card-number">0{services.indexOf(service) + 1}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="section split" id="approach">
        <div>
          <p className="eyebrow">Method</p>
          <h2>First define what has to be true.</h2>
        </div>
        <div className="prose">
          <p>
            My role is not to sell a predetermined solution. I help establish the real objective,
            separate symptoms from causes, inventory available resources and constraints, and turn the
            result into a practical brief for the people who will execute it.
          </p>
          <p>
            That can mean a second opinion before a major purchase, a technical specification before a
            design commission, or a diagnostic process before anyone starts opening walls.
          </p>
        </div>
      </section>

      <section className="section damp" id="damp">
        <div className="damp-copy">
          <p className="eyebrow">New service</p>
          <h2>Damp diagnostics</h2>
          <p className="lead-small">
            A wet wall, mould or condensation does not automatically mean “waterproofing problem”.
            The cause may be thermal bridging, ventilation, rain penetration, plumbing leakage,
            rising damp or several factors at once.
          </p>
          <div className="diagnostic-list">
            <span>Photo screening</span>
            <strong>50 €</strong>
            <span>On-site diagnostics</span>
            <strong>from 250 € + travel</strong>
          </div>
          <p className="note">
            The objective is a reasoned diagnosis and a clear next step — not a catalogue of products.
          </p>
        </div>
        <div className="damp-panel">
          <h3>What we look for</h3>
          <ul>
            <li>Condensation and inadequate ventilation</li>
            <li>Cold bridges and insufficient insulation</li>
            <li>Rain or façade penetration</li>
            <li>Rising or lateral moisture</li>
            <li>Hidden plumbing leakage</li>
            <li>Previous repairs that treated the symptom only</li>
          </ul>
        </div>
      </section>

      <section className="section contact" id="contact">
        <p className="eyebrow">Contact</p>
        <h2>Before buying a solution, define the problem.</h2>
        <p>
          Send a short description of the situation, what has already been tried, and photos if relevant.
        </p>
        <a className="button button-dark" href="mailto:consulting@koretskiy.com">consulting@koretskiy.com</a>
      </section>

      <footer>
        <span>© 2026 Koretskiy Consulting</span>
        <span>Independent technical consulting</span>
      </footer>
    </main>
  );
}
