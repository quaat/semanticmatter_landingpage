import Link from "next/link";
import type { ComponentType } from "react";
import {
  ArrowRight,
  CheckCircle2,
  CircleDashed,
  FileSearch,
  FlaskConical,
  GitBranch,
  Handshake,
  Landmark,
  Layers,
  Network,
  ScanLine,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import ProductCarousel from "@/components/ui/ProductCarousel";

type IconType = ComponentType<{ className?: string }>;

const valueProps = [
  {
    title: "FAIR by Design",
    description:
      "Findable, Accessible, Interoperable, and Reusable data from day one.",
    icon: ShieldCheck
  },
  {
    title: "Automated Pipelines",
    description:
      "Connect captured metadata to modeling and analytics workflows.",
    icon: GitBranch
  },
  {
    title: "Defensible IP",
    description:
      "Audit-ready provenance and consistent vocabulary alignment.",
    icon: Landmark
  }
];

const painPoints = [
  "Knowledge loss when experts leave the organization",
  "Siloed data that resists cross-department analysis",
  "Heavy manual burden for QA and regulatory compliance",
  "Inability to feed digital twins with reliable, structured inputs"
];

const assistantFlow = [
  {
    title: "Ingest",
    description:
      "Scanned pages, scientific articles, equipment logs, and databases."
  },
  {
    title: "Identify",
    description:
      "Extract key entities, variables, parameters, and relationships automatically."
  },
  {
    title: "Map",
    description:
      "Align local terms to standard ontologies and create a unified schema."
  },
  {
    title: "Serve",
    description:
      "Deliver FAIR-aligned data to downstream tools and decision makers."
  }
];

const presentationHighlights = [
  {
    title: "Blobfish Component Architecture",
    caption:
      "OpenAI-compatible interface, model handlers, and specialized generator stack.",
    src: "../../blobfish-presentation/image10.png",
    width: 2884,
    height: 3124,
    imageBackgroundClassName: "bg-slate-100/80"
  },
  {
    title: "Image to Markdown Handler",
    caption:
      "Example conversion of handwritten and tabular source material into structured markdown.",
    src: "../../blobfish-presentation/image12.png",
    width: 1517,
    height: 1308
  },
  {
    title: "Entity Generator Output",
    caption:
      "Schema-oriented metadata generation from extracted text and structured fields.",
    src: "../../blobfish-presentation/image13.png",
    width: 1129,
    height: 890
  },
  {
    title: "Concept Extraction for Ontology Development",
    caption:
      "Ontology concept extraction from publication.",
    src: "../../blobfish-presentation/image18.png",
    width: 1656,
    height: 1280
  }
];

const capabilities: Array<{
  title: string;
  icon: IconType;
  bullets: string[];
}> = [
  {
    title: "Metadata Generation",
    icon: FileSearch,
    bullets: [
      "Text-to-Entity from tables, reports, and SQL.",
      "Handles unstructured free text and source code.",
      "Automated context extraction."
    ]
  },
  {
    title: "Provenance Capture",
    icon: Network,
    bullets: [
      "Human-in-the-loop validation workflows.",
      "Visual provenance graph proposals.",
      "Audit-ready history tracking."
    ]
  },
  {
    title: "Ontology Alignment",
    icon: Layers,
    bullets: [
      "Text-to-OWL generation.",
      "Align local terminology to standard vocabularies.",
      "Community standard compliance."
    ]
  },
  {
    title: "Industrial Knowledge Graph",
    icon: CircleDashed,
    bullets: [
      "Cross-department Q&A and discovery.",
      "Run graph queries for cross-team analysis.",
      "Keep semantic context attached to the data."
    ]
  },
  {
    title: "OpenAI v1-Compatible API",
    icon: Handshake,
    bullets: [
      "Connect to existing LLM infrastructure.",
      "Use standard orchestrators such as LangChain.",
      "Route supported tasks to Blobfish handlers.",
      "Run in controlled enterprise environments."
    ]
  }
];

const decisionFlow = [
  { title: "Lab Experiment", description: "Raw Data Generation" },
  { title: "Blobfish Ingestion", description: "Structure and Validate" },
  { title: "Knowledge Graph", description: "FAIR-Aligned Asset" },
  { title: "Business Insight", description: "Analytics and Decisions" }
];

const impacts = [
  {
    title: "Regulatory Documentation and Audit",
    description:
      "Automate the creation of audit-ready provenance trails from scattered lab notes.",
    gains: ["Reduced manual curation time by 70%", "100% traceability for compliance"]
  },
  {
    title: "Digital Twin Integration",
    description:
      "Feed simulation frameworks with structured, validated, and unit-aligned data inputs.",
    gains: ["Zero formatting errors in simulation inputs", "Faster iteration cycles"]
  },
  {
    title: "Multi-Site Lab Harmonization",
    description:
      "Align terminology and data structures across global R&D centers automatically.",
    gains: ["Unified vocabulary across 5+ sites", "Seamless cross-team data reuse"]
  },
  {
    title: "Research Program Overview",
    description:
      "Enable 'what did we learn?' queries across thousands of past experiments.",
    gains: [
      "Unlock dark data from past projects",
      "Prevent redundant experiments"
    ]
  }
];

const investorNarrative = [
  {
    title: "Defensible IP",
    description:
      "Proprietary model handlers and ontology workflows create a deep moat against generic LLM wrappers."
  },
  {
    title: "Scalable Infrastructure",
    description:
      "OpenAI v1-compatible APIs reduce integration work in existing MLOps stacks."
  },
  {
    title: "Massive Market Need",
    description:
      "Driven by regulatory pressure (FAIR mandates) and the need for clean data to fuel AI initiatives."
  },
  {
    title: "Strategic Expansion",
    description:
      "A phased rollout strategy grows from marine operations into chemicals, materials, energy, manufacturing, and food tech."
  }
];

const expansionPhases = [
  {
    phase: "Phase 1",
    title: "Offshore Asset Integrity and Marine Operations",
    description:
      "SemanticMatter expands Blobfish into marine operations, providing a FAIR data backbone for offshore asset integrity. By turning inspection reports, sensor feeds, and maintenance histories into a unified knowledge graph, operators get traceable, machine-readable inputs for digital twins, risk models, and operational decision support."
  },
  {
    phase: "Phase 2",
    title: "Chemicals and Materials Science",
    description:
      "SemanticMatter brings Blobfish into the heart of chemicals and materials R&D, creating a FAIR knowledge graph over experiments, formulations, and characterization data. By turning human-written lab notes and instrument outputs into machine-readable, ontology-aligned metadata, organizations gain a traceable memory of what was tried, what worked, and why, ready to power optimization models, scale-up decisions, and regulatory submissions."
  },
  {
    phase: "Phase 3",
    title: "Energy, Manufacturing and Food Tech",
    description:
      "SemanticMatter extends Blobfish into Energy, Manufacturing, and Food Tech as a FAIR data spine connecting lab, plant, and quality systems. By converting recipes, process logs, and QA data into a machine-readable, ontology-aligned knowledge graph, organizations gain a unified view of how process decisions impact yield, quality, and compliance, fueling optimization models, digital twins, and trustworthy reporting."
  }
];

const howItWorks = [
  {
    title: "Ingest",
    description:
      "Upload files or stream data via API. We handle PDFs, images, SQL, and more."
  },
  {
    title: "Understand and Structure",
    description:
      "LLM agents identify entities and relationships using domain-specific context."
  },
  {
    title: "Align and Enrich",
    description:
      "Map local variables to standard ontologies (for example, QUDT and BFO) and enrich with external metadata."
  },
  {
    title: "Validate",
    description:
      "Human-in-the-loop workflows allow experts to review and approve generated graphs."
  },
  {
    title: "Deploy",
    description:
      "Push validated knowledge graphs to data lakes, digital twins, or analytics platforms."
  }
];

const faqs = [
  {
    question: "How does Blobfish integrate with our existing LLM stack?",
    answer:
      "Blobfish exposes an OpenAI v1-compatible API. You can switch the base URL in clients such as LangChain or LlamaIndex to route relevant tasks to specialized handlers."
  },
  {
    question: "What standards and ontologies do you support?",
    answer:
      "Blobfish supports community standards such as QUDT, BFO, and SOSA/SSN, plus custom OWL and RDF ontologies."
  },
  {
    question: "Can we keep all data on-premise or in a private cloud?",
    answer:
      "Yes. Blobfish can run in private VPC or on-premise infrastructure so data remains under your control."
  },
  {
    question: "How does human validation fit into the workflow?",
    answer:
      "A dedicated human-in-the-loop validation interface lets domain experts review, correct, and approve generated knowledge graphs."
  },
  {
    question: "What is required to start a pilot?",
    answer:
      "A typical pilot starts with a scoped dataset, such as 50-100 lab notebooks or reports, followed by a technical scoping session."
  }
];

export default function BlobfishPage() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-hero-grid opacity-60" />
      <div className="pointer-events-none absolute -left-20 top-28 -z-10 h-80 w-80 rounded-full bg-teal-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 top-10 -z-10 h-72 w-72 rounded-full bg-violet-400/15 blur-3xl" />

      <section className="mx-auto max-w-7xl px-6 pb-16 pt-20 md:pt-24">
        <div className="glass overflow-hidden rounded-3xl border-white/15">
          <div className="grid gap-10 p-8 md:grid-cols-[1.25fr_0.75fr] md:p-12">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-teal-300/40 bg-teal-300/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-teal-100">
                <Sparkles className="h-3.5 w-3.5" />
                OpenAI v1-Compatible API for R&D
              </p>
              <h1 className="mt-5 font-[var(--font-heading)] text-4xl font-semibold tracking-tight md:text-6xl">
                From Lab Notebooks to
                <span className="mt-2 block bg-gradient-to-r from-cyan-200 via-teal-300 to-violet-300 bg-clip-text text-transparent">
                  Machine-Readable Knowledge Graphs
                </span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
                Turn mixed lab records into FAIR-aligned data assets. Blobfish
                helps teams move from experiment records to analysis-ready data
                using repeatable extraction and mapping workflows.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/developers"
                  className="inline-flex items-center gap-2 rounded-full border border-teal-300 bg-teal-300 px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-teal-200"
                >
                  Request walkthrough
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/learn"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 transition-colors hover:bg-white/10"
                >
                  Read whitepaper
                </Link>
              </div>
            </div>
            <div className="grid gap-4">
              {valueProps.map((item) => {
                const Icon = item.icon;
                return (
                  <article
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5"
                  >
                    <div className="inline-flex rounded-lg bg-white/10 p-2 text-cyan-200">
                      <Icon className="h-4 w-4" />
                    </div>
                    <h2 className="mt-3 font-[var(--font-heading)] text-xl font-semibold">
                      {item.title}
                    </h2>
                    <p className="mt-2 text-sm text-slate-300">{item.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h2 className="font-[var(--font-heading)] text-3xl font-semibold md:text-4xl">
            Industrial R&D data in practice
          </h2>
          <p className="mt-4 text-slate-300">
            Even with major digital programs, lab context is often still spread
            across logbooks, mixed-language notes, PDF reports, and equipment files.
          </p>
          <div className="mt-6 space-y-3">
            {painPoints.map((point) => (
              <div
                key={point}
                className="flex items-start gap-3 rounded-xl border border-red-300/20 bg-red-300/[0.06] px-4 py-3 text-sm text-slate-200"
              >
                <span className="mt-0.5 text-red-300">x</span>
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>
        <article className="glass rounded-3xl p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
            Multi-Modal Input Data
          </p>
          <h3 className="mt-2 font-[var(--font-heading)] text-2xl font-semibold">
            Unstructured Information to Graph
          </h3>
          <p className="mt-4 text-sm text-slate-300">
            Blobfish converts scans, tables, logs, and reports into structured
            metadata that teams can query, review, and reuse.
          </p>
          <figure className="mt-5 overflow-hidden rounded-2xl border border-white/10 bg-black/30">
            <img
              src="../../blobfish-presentation/image9.jpeg"
              alt="Blobfish image from presentation cover slide"
              width={1200}
              height={675}
              className="h-auto w-full"
              loading="lazy"
            />
            <figcaption className="border-t border-white/10 px-3 py-2 text-[11px] text-slate-400">
              The blobfish thrives in its natural habitat, adapted to extreme high-pressure conditions.
              {" "}
              Photograph By National Science Foundation-Ocean Observatory
              Initiative/University of Washington/CSSF
            </figcaption>
          </figure>
        </article>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div>
          <h2 className="font-[var(--font-heading)] text-3xl font-semibold md:text-4xl">
            SemanticMatter lab assistant
          </h2>
            <p className="mt-4 text-slate-300">
              Use a focused API workflow to ingest, interpret, and structure
              R&D records into a queryable knowledge graph.
            </p>
          </div>
          <div className="space-y-3">
            {assistantFlow.map((step, idx) => (
              <article
                key={step.title}
                className="rounded-xl border border-white/10 bg-white/5 p-4"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-violet-300/20 text-xs font-semibold text-violet-100">
                    0{idx + 1}
                  </span>
                  <h3 className="font-semibold text-slate-100">{step.title}</h3>
                </div>
                <p className="mt-2 text-sm text-slate-300">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
          <h2 className="font-[var(--font-heading)] text-3xl font-semibold md:text-4xl">
            Core capabilities
          </h2>
        <p className="mt-4 max-w-3xl text-slate-300">
          Built for scientific data workflows that need repeatable extraction,
          mapping, and review.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {capabilities.map((capability) => {
            const Icon = capability.icon;
            return (
              <article
                key={capability.title}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/[0.08]"
              >
                <div className="inline-flex rounded-lg bg-white/10 p-2 text-teal-200 transition-transform group-hover:scale-110">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-[var(--font-heading)] text-xl font-semibold">
                  {capability.title}
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-300">
                  {capability.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-teal-300" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
          <h2 className="font-[var(--font-heading)] text-3xl font-semibold md:text-4xl">
            From the presentation
          </h2>
        <p className="mt-4 max-w-3xl text-slate-300">
          Selected screenshots from the <b>Blobfish presentation</b> showing the
          architecture and model-handler workflow in action.
        </p>
        <div className="mt-8">
          <ProductCarousel slides={presentationHighlights} autoAdvanceMs={6000} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
          <h2 className="font-[var(--font-heading)] text-3xl font-semibold md:text-4xl">
          From lab records to decisions
        </h2>
        <p className="mt-4 text-slate-300">
          Move faster with a reproducible data pipeline.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {decisionFlow.map((step, idx) => (
            <article
              key={step.title}
              className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02] p-5"
            >
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                Step {idx + 1}
              </p>
              <h3 className="mt-2 font-[var(--font-heading)] text-lg font-semibold text-slate-100">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-slate-300">{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <h2 className="font-[var(--font-heading)] text-3xl font-semibold md:text-4xl">
          Proven impact
        </h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {impacts.map((impact) => (
            <article key={impact.title} className="glass rounded-2xl p-6">
              <h3 className="font-[var(--font-heading)] text-xl font-semibold">
                {impact.title}
              </h3>
              <p className="mt-3 text-sm text-slate-300">{impact.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-200">
                {impact.gains.map((gain) => (
                  <li key={gain} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-teal-300" />
                    <span>{gain}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="glass rounded-3xl p-8 md:p-10">
          <h2 className="font-[var(--font-heading)] text-3xl font-semibold md:text-4xl">
            Why Blobfish Matters
          </h2>
          <p className="mt-4 max-w-4xl text-slate-300">
            Blobfish addresses data quality bottlenecks in industrial R&D where
            teams need structured FAIR-aligned data for analytics and AI.
          </p>
          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {investorNarrative.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-white/10 bg-white/[0.04] p-4"
              >
                <h3 className="font-semibold text-slate-100">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <h2 className="font-[var(--font-heading)] text-3xl font-semibold md:text-4xl">
          Industrial Use Cases: Strategic Expansion
        </h2>
        <div className="mt-8 space-y-4">
          {expansionPhases.map((phase) => (
            <article
              key={phase.phase}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-violet-200">
                {phase.phase}
              </p>
              <h3 className="mt-2 font-[var(--font-heading)] text-2xl font-semibold">
                {phase.title}
              </h3>
              <p className="mt-3 text-slate-300">{phase.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <h2 className="font-[var(--font-heading)] text-3xl font-semibold md:text-4xl">
          How it works
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-5">
          {howItWorks.map((step, idx) => (
            <article
              key={step.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                {idx + 1}
              </p>
              <h3 className="mt-2 font-semibold text-slate-100">{step.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <h2 className="font-[var(--font-heading)] text-3xl font-semibold md:text-4xl">
          Frequently asked questions
        </h2>
        <div className="mt-8 space-y-4">
          {faqs.map((faq) => (
            <article
              key={faq.question}
              className="rounded-xl border border-white/10 bg-white/5 p-5"
            >
              <h3 className="font-semibold text-slate-100">{faq.question}</h3>
              <p className="mt-2 text-sm text-slate-300">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-10">
        <div className="rounded-3xl border border-teal-300/35 bg-teal-300/[0.1] p-8 md:p-10">
          <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-teal-100">
                Bring order to lab data
              </p>
              <h2 className="mt-3 font-[var(--font-heading)] text-3xl font-semibold md:text-5xl">
                Machine-readable FAIR data for modern R&D
              </h2>
              <p className="mt-4 max-w-2xl text-slate-100">
                Work with teams building reusable knowledge assets for
                analytics, digital twins, and AI.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link
                href="/developers"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-slate-100"
              >
                Request walkthrough
                <ScanLine className="h-4 w-4" />
              </Link>
              <Link
                href="/learn"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-transparent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Read whitepaper
                <FlaskConical className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
