export type VentureStage = 'Exploring' | 'Concept' | 'Prototype' | 'MVP' | 'Validated';
export type VentureStatus =
  | 'Private'
  | 'Open for Partnership'
  | 'Open for Strategic Partnership'
  | 'Available for Licensing'
  | 'Available for Transfer'
  | 'Seeking Development Partners'
  | 'In Negotiation'
  | 'Active Venture'
  | 'Transferred'
  | 'Licensed'
  | 'Archived';

export type VentureValidation = {
  type: 'hackathon' | 'pilot' | 'award' | 'user-testing' | 'loi' | 'customer-interview' | 'transaction' | 'customer';
  name: string;
  status?: string;
};

export type Venture = {
  id: string;
  slug: string;
  name: string;
  category: string[];
  stage: VentureStage;
  status: VentureStatus;
  visibility: 'public' | 'private';
  created: string;
  tagline: string;
  teaser: string;
  problem: string;
  opportunity: string;
  solution: string;
  howItWorks: string[];
  businessModel: string[];
  validation: VentureValidation[];
  assets: string[];
  nextSteps: string[];
  infrastructure?: boolean;
  owner?: string;
  contributors?: string[];
  created_at?: string;
  updated_at?: string;
  repository?: string;
  production_url?: string;
  demo_url?: string;
  documentation?: string[];
  ip_status?: string;
  external_dependencies?: string[];
  estimated_development_hours?: number;
  actual_development_hours?: number;
  direct_costs?: number;
  contacts?: string[];
  leads?: string[];
  nda_required?: boolean;
  handoff_readiness?: 'Concept' | 'Technical Proof' | 'MVP Ready' | 'Documented' | 'Transfer Ready';
  handoff_checklist?: string[];
  next_action?: string;
  next_action_date?: string;
  notes?: string;
};

export const ventures: Venture[] = [
  {
    id: 'VENTURE-001',
    slug: 'checkopp',
    name: 'CheckOpp',
    category: ['AI', 'Opportunity Intelligence', 'Decision Support'],
    stage: 'MVP',
    status: 'Active Venture',
    visibility: 'public',
    created: '2026',
    tagline: 'A structured AI-assisted environment for turning opportunities and complex questions into decision-ready work.',
    teaser: 'CheckOpp combines intake, structured analysis and reusable project workflows for opportunity assessment and complex decision support.',
    problem: 'Promising opportunities are often evaluated through fragmented notes, generic searches and unstructured advice, making it hard to compare evidence and move toward a clear decision.',
    opportunity: 'Teams need a practical bridge between an initial idea and a decision-ready body of evidence without commissioning a large consulting engagement from day one.',
    solution: 'A working platform that structures an opportunity, gathers the relevant context, supports deeper analysis and packages the result for further action.',
    howItWorks: ['Describe the opportunity or decision.', 'Structure the problem and available evidence.', 'Run focused analysis and verification.', 'Package the result into a usable decision artifact.'],
    businessModel: ['Paid analysis', 'B2B services', 'Enterprise workflow integration'],
    validation: [],
    assets: ['Working production application', 'Repository', 'Documented workflows', 'Operator console', 'Payment integration workstream'],
    nextSteps: ['Continue product validation', 'Refine commercial packaging', 'Expand repeatable analysis workflows', 'Develop partner and enterprise use cases'],
    production_url: 'https://checkopp.com',
    handoff_readiness: 'MVP Ready',
  },
  {
    id: 'VENTURE-002',
    slug: 'ai-microwallet',
    name: 'AI MicroWallet',
    category: ['AI', 'FinTech', 'Payments'],
    stage: 'MVP',
    status: 'Open for Partnership',
    visibility: 'public',
    created: '2026-10',
    tagline: 'Infrastructure for economical AI microtransactions using a prefunded balance and internal ledger.',
    teaser: 'A wallet layer designed for small AI purchases where conventional per-transaction payment costs make little economic sense.',
    problem: 'AI services increasingly need very small payments, but card and bank transaction economics are poorly suited to charges measured in cents or low single euros.',
    opportunity: 'A prefunded balance can aggregate external payment events while allowing many low-value internal transactions between users and AI services.',
    solution: 'Users top up a wallet, spend against an internal ledger for micro-actions, and sellers settle aggregated balances instead of processing every small action through the banking system.',
    howItWorks: ['Top up a prefunded balance.', 'Pay for AI actions from the internal ledger.', 'Accumulate seller earnings inside the wallet.', 'Aggregate settlement or withdrawal into fewer external transactions.'],
    businessModel: ['Transaction fee', 'B2B infrastructure licensing', 'White label'],
    validation: [],
    assets: ['Working MVP', 'Repository', 'Architecture', 'Documentation', 'Demo'],
    nextSteps: ['Production hardening', 'Partner validation', 'Compliance and payment review', 'Commercial pilot'],
    handoff_readiness: 'MVP Ready',
  },
  {
    id: 'VENTURE-003',
    slug: 'private-family-ai-home-cloud',
    name: 'Private Family AI Home Cloud',
    category: ['AI', 'NAS', 'Consumer Technology'],
    stage: 'Concept',
    status: 'Open for Strategic Partnership',
    visibility: 'public',
    created: '2026-10',
    tagline: 'A private AI operating layer for the family archive, documents, memories and household workflows stored on a NAS.',
    teaser: 'The phone becomes the capture interface; the NAS becomes permanent family memory; local AI makes the archive usable instead of merely stored.',
    problem: 'Family photos, documents, school files, voice notes and household records accumulate across phones and computers but remain difficult to search, connect and reuse safely.',
    opportunity: 'Modern NAS hardware can evolve from passive storage into a private household knowledge layer with local AI and selective cloud assistance for heavier tasks.',
    solution: 'A family AI layer over NAS storage that ingests household content, organizes it, answers questions, creates useful views and supports practical family workflows.',
    howItWorks: ['Back up content from phones and computers.', 'Classify documents, media and notes locally.', 'Use AI to retrieve, summarize and connect household information.', 'Generate practical outputs such as document views, family stories and tasks.'],
    businessModel: ['OEM integration', 'NAS software licensing', 'Premium AI feature package'],
    validation: [],
    assets: ['System concept', 'Workflow architecture', 'Prioritized use-case set'],
    nextSteps: ['Verify platform capabilities', 'Build one end-to-end working scenario', 'Test privacy and permission model', 'Package OEM partnership proposal'],
    handoff_readiness: 'Concept',
  },
  {
    id: 'VENTURE-004',
    slug: 'property-intelligence-crew',
    name: 'Property Intelligence Crew',
    category: ['Agentic AI', 'PropTech'],
    stage: 'Concept',
    status: 'Open for Partnership',
    visibility: 'public',
    created: '2026-10',
    tagline: 'An agentic property intelligence layer that turns fragmented listings and owner inputs into normalized, continuously updated property records.',
    teaser: 'A crew of agents monitors accessible property sources, normalizes messy inputs and generates a current presentation only when someone asks for it.',
    problem: 'Property information arrives in inconsistent formats across listings, emails, conversations, photos and documents, creating duplicated manual work and stale records.',
    opportunity: 'Agentic workflows can collect permitted public information, normalize it into a common schema and keep the underlying record current while generating audience-specific output on demand.',
    solution: 'A structured property registry fed by agents and human inputs, with normalized storage and dynamically generated property pages or communication artifacts.',
    howItWorks: ['Collect property data from permitted sources and direct inputs.', 'Normalize the material into a common property schema.', 'Store evidence and structured facts separately from presentation.', 'Periodically recheck selected sources.', 'Generate a fresh HTML presentation when requested.'],
    businessModel: ['B2B SaaS', 'Agency licensing', 'Per-property processing', 'White label'],
    validation: [],
    assets: ['Product concept', 'Data-flow model', 'MVP scope'],
    nextSteps: ['Select initial open sources', 'Build small demonstration registry', 'Implement normalization workflow', 'Test agent update cycle'],
    handoff_readiness: 'Concept',
  },
  {
    id: 'VENTURE-005',
    slug: 'ai-energy-campus',
    name: 'AI Energy Campus',
    category: ['AI Infrastructure', 'Energy', 'Data Centers'],
    stage: 'Concept',
    status: 'Seeking Development Partners',
    visibility: 'public',
    created: '2026',
    tagline: 'A modular AI-ready infrastructure concept combining local energy generation, cooling, storage and scalable data-center capacity.',
    teaser: 'An infrastructure venture built around the idea that AI compute should be designed together with its energy, cooling and resilience systems.',
    problem: 'AI infrastructure is constrained not only by servers but by power availability, cooling, grid capacity, energy cost and the speed at which integrated infrastructure can be deployed.',
    opportunity: 'Sites with suitable energy conditions and infrastructure can support modular AI capacity when generation, cooling and storage are treated as one engineered system.',
    solution: 'A modular campus architecture for AI/data-center loads combining on-site generation, liquid-cooling-ready infrastructure, thermal management, storage and staged capacity growth.',
    howItWorks: ['Select a site around energy and infrastructure constraints.', 'Design generation, cooling and storage as one system.', 'Deploy a pilot module.', 'Validate operating economics and resilience.', 'Scale capacity in repeatable modules.'],
    businessModel: ['Infrastructure development', 'Joint venture', 'Capacity leasing', 'Technology and project licensing'],
    validation: [],
    assets: ['Engineering concept', 'Pilot-scale model', 'Energy and cooling architecture', 'Development scenarios'],
    nextSteps: ['Site and utility validation', 'Partner consortium', 'Detailed techno-economic model', 'Pilot development package'],
    infrastructure: true,
    handoff_readiness: 'Technical Proof',
  },
];

export function getPublicVentures() {
  return ventures.filter((venture) => venture.visibility === 'public' && venture.status !== 'Private');
}

export function getVentureBySlug(slug: string) {
  return getPublicVentures().find((venture) => venture.slug === slug);
}
