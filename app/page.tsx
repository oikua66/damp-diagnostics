const services = [
  'Engineering consulting',
  'Technical due diligence',
  'Independent project review',
  'Energy systems',
  'Industrial facilities',
  'Process optimisation',
  'Business and technical audits',
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
          <a href="#philosophy">Philosophy</a>
          <a href="#services">Services</a>
          <a href="#damp">Damp diagnostics</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <p className="eyebrow">Independent engineering consulting</p>
        <h1>Finding the essential.</h1>
        <p className="lead">Because true engineering elegance lies in simplicity.</p>
        <p className="lead-small">
          Independent engineering consulting for complex technical and business decisions.
        </p>
        <div className="hero-actions">
          <a className="button button-dark" href="#contact">Let&apos;s talk</a>
          <a className="button button-light" href="#damp">Damp diagnostics</a>
        </div>
      </section>

      <section className="section split" id="philosophy">
        <div>
          <p className="eyebrow">Our philosophy</p>
          <h2>Finding the essential. Eliminating the unnecessary.</h2>
        </div>
        <div className="prose">
          <p>
            Modern businesses are surrounded by an endless stream of technologies, methodologies,
            software platforms and management frameworks. Too often, the proposed solution becomes
            more complicated than the problem it is supposed to solve.
          </p>
          <p>
            We believe consulting should do the opposite: understand the real problem and identify the
            simplest solution that delivers the desired result.
          </p>
          <p>
            We do not recommend technologies because they are fashionable. We do not make projects more
            complicated to demonstrate expertise. Every recommendation should have a clear purpose,
            create measurable value and remain no more complex than necessary.
          </p>
          <p>
            We do not begin with equipment specifications, software platforms or vendors. We begin with
            questions: Why does this system exist? What problem is it actually solving? What outcome is
            the client trying to achieve? What can be removed without reducing that outcome?
          </p>
          <p>
            Sometimes the right answer is a new project. Sometimes it is improving an existing one.
            Sometimes it is deciding not to build, buy or implement anything at all. We see that as success.
          </p>
        </div>
      </section>

      <section className="section" id="services">
        <div className="section-heading">
          <p className="eyebrow">What we can help you with</p>
          <h2>Independent support before the decision becomes expensive.</h2>
        </div>
        <div className="cards">
          {services.map((service, index) => (
            <div className="card" key={service}>
              <span className="card-number">{String(index + 1).padStart(2, '0')}</span>
              <h3>{service}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="section split" id="ai">
        <div>
          <p className="eyebrow">Technology</p>
          <h2>AI is a tool, not the goal.</h2>
        </div>
        <div className="prose">
          <p>
            Artificial intelligence helps us analyse large volumes of information, compare alternatives,
            prepare and review documentation, translate technical materials, automate repetitive work and
            accelerate research.
          </p>
          <p>
            Used correctly, AI improves speed and efficiency. Used blindly, it simply produces more noise.
            It does not replace engineering judgement, define the problem, challenge assumptions or accept
            responsibility for decisions. Those responsibilities remain with people.
          </p>
        </div>
      </section>

      <section className="section damp" id="damp">
        <div className="damp-copy">
          <p className="eyebrow">Specialised service</p>
          <h2>Damp diagnostics</h2>
          <p className="lead-small">
            A wet wall, mould or condensation does not automatically mean a waterproofing problem.
            The cause may be thermal bridging, insufficient ventilation, rain penetration, plumbing leakage,
            rising damp or several factors acting together.
          </p>
          <div className="diagnostic-list">
            <span>Photo screening</span>
            <span>On-site diagnostics</span>
            <span>Cause analysis</span>
            <span>Recommended next steps</span>
          </div>
          <p className="note">
            The objective is to determine the probable cause first and only then decide what intervention,
            if any, is justified.
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
            <li>Repairs that addressed the symptom rather than the cause</li>
          </ul>
        </div>
      </section>

      <section className="section contact" id="contact">
        <p className="eyebrow">Let&apos;s talk</p>
        <h2>Start with the problem, not the product.</h2>
        <p>
          Send a short description of the situation, what has already been tried and any relevant photos or documents.
        </p>
        <a className="button button-dark" href="mailto:consulting@koretskiy.com">consulting@koretskiy.com</a>
      </section>

      <footer>
        <span>© 2026 Koretskiy Consulting</span>
        <span>Independent engineering consulting</span>
      </footer>
    </main>
  );
}
