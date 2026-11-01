export type VentureStage = 'Exploring' | 'Concept' | 'Prototype' | 'MVP' | 'Validated';
export type VentureStatus =
  | 'Private'
  | 'Open for Partnership'
  | 'Open for Strategic Partnership'
  | 'Available for Licensing'
  | 'Available for Transfer'
  | 'In Negotiation'
  | 'Active Venture'
  | 'Internal Tool'
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
  kind?: 'venture' | 'tool';
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
    id: 'VENTURE-001', slug: 'checkopp', name: 'CheckOpp',
    category: ['AI', 'Opportunity Intelligence', 'Decision Support'], stage: 'MVP', status: 'Active Venture', visibility: 'public', created: '2026',
    tagline: 'A structured AI-assisted environment for turning opportunities and complex questions into decision-ready work.',
    teaser: 'CheckOpp combines intake, structured analysis and reusable project workflows for opportunity assessment and complex decision support.',
    problem: 'Promising opportunities are often evaluated through fragmented notes, generic searches and unstructured advice.',
    opportunity: 'Teams need a practical bridge between an initial idea and a decision-ready body of evidence.',
    solution: 'A working platform that structures an opportunity, gathers context, supports deeper analysis and packages the result for action.',
    howItWorks: ['Describe the opportunity or decision.', 'Structure the problem and evidence.', 'Run focused analysis and verification.', 'Package the result into a decision artifact.'],
    businessModel: ['Paid analysis', 'B2B services', 'Enterprise workflow integration'], validation: [],
    assets: ['Working production application', 'Repository', 'Documented workflows', 'Operator console'],
    nextSteps: ['Continue product validation', 'Refine commercial packaging', 'Expand repeatable analysis workflows'],
    production_url: 'https://checkopp.com', handoff_readiness: 'MVP Ready',
  },
  {
    id: 'VENTURE-002', slug: 'ai-microwallet', name: 'AI MicroWallet',
    category: ['AI', 'FinTech', 'Payments'], stage: 'MVP', status: 'Open for Partnership', visibility: 'public', created: '2026-10',
    tagline: 'Infrastructure for economical AI microtransactions using a prefunded balance and internal ledger.',
    teaser: 'A wallet layer designed for small AI purchases where conventional per-transaction payment costs make little economic sense.',
    problem: 'Very small AI payments are poorly served by conventional card and bank transaction economics.',
    opportunity: 'A prefunded balance can aggregate external payments while allowing many low-value internal transactions.',
    solution: 'Users top up once, spend from an internal ledger, and sellers settle aggregated balances.',
    howItWorks: ['Top up a balance.', 'Pay for AI actions internally.', 'Accumulate seller earnings.', 'Settle externally in larger batches.'],
    businessModel: ['Transaction fee', 'B2B infrastructure licensing', 'White label'], validation: [],
    assets: ['Working MVP', 'Repository', 'Architecture', 'Documentation', 'Demo'],
    nextSteps: ['Production hardening', 'Partner validation', 'Compliance and payment review', 'Commercial pilot'], handoff_readiness: 'MVP Ready',
  },
  {
    id: 'VENTURE-003', slug: 'private-family-ai-home-cloud', name: 'Private Family AI Home Cloud',
    category: ['AI', 'NAS', 'Consumer Technology'], stage: 'Concept', status: 'Open for Strategic Partnership', visibility: 'public', created: '2026-10',
    tagline: 'A private AI operating layer for the family archive, documents, memories and household workflows stored on a NAS.',
    teaser: 'The phone becomes the capture interface; the NAS becomes permanent family memory; local AI makes the archive usable instead of merely stored.',
    problem: 'Family files accumulate across devices but remain difficult to search, connect and reuse safely.',
    opportunity: 'NAS hardware can evolve from passive storage into a private household knowledge layer.',
    solution: 'A family AI layer over NAS storage that organizes content, retrieves it and creates useful household outputs.',
    howItWorks: ['Back up devices.', 'Classify household content.', 'Retrieve and connect information with AI.', 'Generate useful family outputs.'],
    businessModel: ['OEM integration', 'NAS software licensing', 'Premium AI feature package'], validation: [],
    assets: ['System concept', 'Workflow architecture', 'Prioritized use-case set'],
    nextSteps: ['Verify platform capabilities', 'Build one end-to-end scenario', 'Test permissions', 'Package OEM proposal'], handoff_readiness: 'Concept',
  },
  {
    id: 'VENTURE-004', slug: 'property-intelligence-crew', name: 'Property Intelligence Crew',
    category: ['Agentic AI', 'PropTech'], stage: 'Concept', status: 'Open for Partnership', visibility: 'public', created: '2026-10',
    tagline: 'An agentic property intelligence layer that turns fragmented listings and owner inputs into normalized, continuously updated property records.',
    teaser: 'Agents monitor accessible sources, normalize messy inputs and generate a current presentation on demand.',
    problem: 'Property information arrives in inconsistent formats across listings, emails, conversations, photos and documents.',
    opportunity: 'Agentic workflows can normalize permitted public information and keep structured property records current.',
    solution: 'A structured property registry fed by agents and human inputs, with dynamically generated property pages.',
    howItWorks: ['Collect property data.', 'Normalize it into a common schema.', 'Store facts separately from presentation.', 'Recheck selected sources.', 'Generate a fresh presentation.'],
    businessModel: ['B2B SaaS', 'Agency licensing', 'Per-property processing', 'White label'], validation: [],
    assets: ['Product concept', 'Data-flow model', 'MVP scope'],
    nextSteps: ['Select open sources', 'Build demo registry', 'Implement normalization workflow', 'Test update cycle'], handoff_readiness: 'Concept',
  },
  {
    id: 'VENTURE-005', slug: 'interactive-book-production', name: 'Interactive Book Production',
    category: ['Publishing Technology', 'Education', 'Interactive Content'], stage: 'MVP', status: 'Open for Partnership', visibility: 'public', created: '2026',
    tagline: 'A production workflow that turns authored PDF material into structured interactive digital books without rewriting the source content.',
    teaser: 'A reusable system for converting conventional authored material into interactive web-based books and learning experiences.',
    problem: 'Interactive book production usually requires repeated manual restructuring, asset preparation and front-end assembly.',
    opportunity: 'The production workflow can be standardized for publishers, educators and subject-matter authors.',
    solution: 'A PDF-first workflow that extracts structure, supports editorial review, adds missing assets and produces an interactive preview and deployable book.',
    howItWorks: ['Upload the PDF.', 'Review extracted structure.', 'Add missing media and interactive assets.', 'Generate preview.', 'Publish the digital book.'],
    businessModel: ['Production service', 'B2B licensing', 'Publisher workflow tooling', 'White label'], validation: [],
    assets: ['Working builder', 'Interactive lesson demo', 'Repository', 'Production deployment', 'Supabase-backed project'],
    nextSteps: ['Generalize beyond the original demo content', 'Define reusable book schemas', 'Package publisher workflows'], handoff_readiness: 'MVP Ready',
  },
  {
    id: 'VENTURE-006', slug: 'ai-property-inspection', name: 'AI Property Inspection',
    category: ['AI', 'PropTech', 'Property Inspection'], stage: 'MVP', status: 'Active Venture', visibility: 'public', created: '2026',
    tagline: 'A unified AI-assisted property inspection that turns photos, documents, seller claims and observations into a structured technical risk picture.',
    teaser: 'One inspection flow with depth determined by available evidence: inspect, structure, identify risks, plan renovation scope and produce conclusions.',
    problem: 'Property evidence is fragmented across photos, documents, seller statements and observations.',
    opportunity: 'A structured inspection workflow can separate facts, claims and unknowns and turn them into a practical technical result.',
    solution: 'A unified inspection system that organizes evidence, records data sufficiency, identifies risks and builds renovation and specialist-check recommendations.',
    howItWorks: ['Collect property identity and evidence.', 'Separate facts, claims and unknowns.', 'Assess technical risks.', 'Build renovation and specialist-check recommendations.', 'Produce a reviewable result.'],
    businessModel: ['Paid inspection report', 'B2B service', 'Partner licensing'], validation: [],
    assets: ['Working property platform', 'Unified inspection flow', 'Structured result model', 'Renovation planner', 'Repository', 'Production deployment'],
    nextSteps: ['Production hardening', 'Collect real inspection feedback', 'Refine specialist-check logic', 'Package partner workflow'],
    production_url: 'https://tools.koretskiy.rs', handoff_readiness: 'MVP Ready',
  },
  {
    id: 'VENTURE-007', slug: 'project-orchestrator', name: 'Project Orchestrator', kind: 'tool',
    category: ['Agentic AI', 'Development Tooling', 'Workflow Orchestration'], stage: 'MVP', status: 'Internal Tool', visibility: 'public', created: '2026-10',
    tagline: 'An internal control layer for coordinating AI-assisted software projects through explicit tasks, agent runs, reviews and corrective loops.',
    teaser: 'A development instrument for structured MASTER → execution → review cycles across multiple software projects.',
    problem: 'Multi-agent development becomes unreliable when state, reviews and corrective work live only in chat history or manual actions.',
    opportunity: 'A persistent orchestration layer can make agent work observable, bounded and repeatable across projects.',
    solution: 'A project-control system with task state, agent-run tracking, review gates, corrective branches, budgets and explicit owner-action states.',
    howItWorks: ['Register a project and task.', 'Dispatch bounded agent work.', 'Capture run state and evidence.', 'Require MASTER review.', 'Create corrective work when verification fails.'],
    businessModel: ['Internal development tool'], validation: [],
    assets: ['Working MVP', 'Separate repository', 'Production deployment', 'Task and agent-run state', 'MASTER review cycle', 'Corrective retry flow'],
    nextSteps: ['Increase autonomous cycle completion', 'Automate verification handoffs', 'Reduce manual continue actions', 'Harden safety boundaries'],
    production_url: 'https://orchestrator.koretskiy.com', handoff_readiness: 'MVP Ready',
  },
];

export function getPublicVentures() {
  return ventures.filter((venture) => venture.visibility === 'public' && venture.status !== 'Private');
}

export function getVentureBySlug(slug: string) {
  return getPublicVentures().find((venture) => venture.slug === slug);
}
