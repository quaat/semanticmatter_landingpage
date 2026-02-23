import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  Database,
  FileText,
  Network,
  ScanText,
  ShieldCheck,
  Sparkles,
  Workflow
} from "lucide-react";

const interoperabilityChallenges = [
  {
    title: "Inconsistent documentation",
    description:
      "Datasets often arrive without the context people need to reuse them or trust the results."
  },
  {
    title: "Semantics live in people",
    description:
      "Units, concepts, and relationships are known by the team, but not captured in a shared, formal model."
  },
  {
    title: "Paper still holds the evidence",
    description:
      "Lab sheets, notebooks, and handwritten forms contain key details that never make it into digital systems."
  }
];

const coreCapabilities = [
  {
    icon: Network,
    title: "Shared meaning across teams",
    description:
      "Define domain concepts with ontologies and controlled vocabularies so different groups describe data the same way."
  },
  {
    icon: BrainCircuit,
    title: "Faster metadata capture",
    description:
      "Turn text and tabular snippets into structured metadata, with review steps that keep the result defensible."
  },
  {
    icon: Workflow,
    title: "Human-reviewed automation",
    description:
      "Let the system propose shapes, units, and links—then have experts confirm and adjust before anything is published."
  },
  {
    icon: Database,
    title: "Knowledge graph foundation",
    description:
      "Store ontologies, mappings, and metadata in a versioned graph model that supports SPARQL and reasoning when needed."
  },
  {
    icon: ShieldCheck,
    title: "Governance that matches ownership",
    description:
      "Manage access and policies at the resource level, while keeping data ownership with the teams that run the sources."
  },
  {
    icon: FileText,
    title: "FAIR in day-to-day work",
    description:
      "Make data easier to find, access, combine, and reuse by capturing provenance and semantics as part of normal workflows."
  }
];

const analogPipeline = [
  "OCR text capture",
  "Semantic extraction",
  "Ontology mapping",
  "SHACL validation",
  "Graph update"
];

const useCases = [
  {
    title: "Reconstruct lab context",
    description:
      "Turn handwritten and mixed-language lab notes into consistent metadata with traceable provenance."
  },
  {
    title: "Support FAIR data management",
    description:
      "Back FAIR plans with searchable metadata, access controls, ontology alignment, and reuse-ready provenance."
  },
  {
    title: "Provide a backbone for digital twins",
    description:
      "Keep models and simulations in sync with data through event-driven updates grounded in a shared knowledge graph."
  }
];

const standards = ["RDF/OWL", "SHACL", "PROV-O", "DCAT", "SKOS", "FNO", "DC"];

const roadmap = [
  "Lock the initial feature set",
  "Publish user and developer docs",
  "Run real-world pilots",
  "Close the feedback loop",
  "Stabilize and test end-to-end"
];

const transformationalImpact = [
  "Files → Shared, queryable knowledge",
  "Manual metadata → Assisted capture with review",
  "Static datasets → Workflows that react to change",
  "Paper context → Digital metadata you can search",
  "Local reuse → Cross-team interoperability"
];

export default function ThinkPage() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-hero-grid opacity-60" />

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-20 md:pt-24">
        <div className="glass overflow-hidden rounded-3xl">
          <div className="grid gap-10 p-8 md:grid-cols-[1.2fr_0.8fr] md:p-12">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-teal-300/35 bg-teal-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-teal-200">
                <Sparkles className="h-3.5 w-3.5" />
                SemanticMatter THiNK Platform
              </p>
              <h1 className="mt-5 font-[var(--font-heading)] text-4xl font-semibold tracking-tight md:text-6xl">
                THiNK
                <span className="mt-2 block bg-gradient-to-r from-cyan-200 via-teal-300 to-violet-300 bg-clip-text text-transparent">
                  Semantic documentation and interoperability
                </span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
                THiNK helps you document data with shared semantics, connect it
                across systems, and keep the context that makes it reusable.
                It combines a federated catalog, ontology-based modeling, and
                assisted documentation in one web interface.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/learn"
                  className="inline-flex items-center gap-2 rounded-full border border-teal-300 bg-teal-300 px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-teal-200"
                >
                  Read whitepaper
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/use-cases"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 transition-colors hover:bg-white/10"
                >
                  Explore use cases
                </Link>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1">
              <article className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  Catalog model
                </p>
                <p className="mt-2 text-2xl font-semibold text-white">
                  Groups {"→"} Packages {"→"} Resources
                </p>
                <p className="mt-2 text-sm text-slate-300">
                  Organize datasets by team and project, with clear ownership,
                  policies, and searchable metadata at the resource level.
                </p>
              </article>
              <article className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  Governance
                </p>
                <p className="mt-2 text-2xl font-semibold text-white">
                  Provenance and access control
                </p>
                <p className="mt-2 text-sm text-slate-300">
                  Track where data came from and how it was produced, and apply
                  role-based access where it matters.
                </p>
              </article>
              <article className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:col-span-2 md:col-span-1">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  Technical stack
                </p>
                <p className="mt-2 text-lg font-semibold text-white">
                  RDF/OWL, DC, SKOS, SHACL, PROV-O, DCAT, SKOS, FNO
                </p>
                <p className="mt-2 text-sm text-slate-300">
                  Open standards you can keep using over time—inside your own
                  stack and across partners.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <h2 className="font-[var(--font-heading)] text-3xl font-semibold md:text-4xl">
          Where interoperability breaks down
        </h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {interoperabilityChallenges.map((item) => (
            <article key={item.title} className="glass rounded-2xl p-6">
              <h3 className="font-[var(--font-heading)] text-2xl font-semibold">
                {item.title}
              </h3>
              <p className="mt-3 text-slate-300">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-[var(--font-heading)] text-3xl font-semibold md:text-4xl">
            What THiNK does
          </h2>
          <p className="max-w-2xl text-sm text-slate-300 md:text-base">
            Built for teams that need strong semantics without turning every
            project into a knowledge engineering effort.
          </p>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {coreCapabilities.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/[0.08]"
              >
                <div className="inline-flex rounded-lg bg-white/10 p-2 text-teal-200 transition-transform group-hover:scale-110">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-[var(--font-heading)] text-xl font-semibold">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-5 md:grid-cols-2">
          <article className="glass rounded-2xl p-6">
            <div className="inline-flex rounded-lg bg-white/10 p-2 text-teal-200">
              <ScanText className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-[var(--font-heading)] text-2xl font-semibold">
              From paper to structured metadata
            </h3>
            <p className="mt-3 text-slate-300">
              Capture context from scanned notebooks, photographed forms, and
              handwritten notes—then attach it to the datasets it belongs to.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {analogPipeline.map((step) => (
                <span
                  key={step}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-slate-200"
                >
                  {step}
                </span>
              ))}
            </div>
          </article>
          <article className="glass rounded-2xl p-6">
            <h3 className="font-[var(--font-heading)] text-2xl font-semibold">
              Standards and FAIR alignment
            </h3>
            <p className="mt-3 text-slate-300">
              Use open standards so your metadata stays portable, machine-readable,
              and usable across tools and organizations.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {standards.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-teal-300/30 bg-teal-300/10 px-3 py-1 text-xs text-teal-100"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <h2 className="font-[var(--font-heading)] text-3xl font-semibold md:text-4xl">
          Priority use cases
        </h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {useCases.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="font-[var(--font-heading)] text-xl font-semibold text-slate-100">
                {item.title}
              </h3>
              <p className="mt-3 text-sm text-slate-300">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="glass rounded-3xl p-8 md:p-10">
          <h2 className="font-[var(--font-heading)] text-3xl font-semibold md:text-4xl">
            Roadmap and expected impact
          </h2>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {roadmap.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-slate-200"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-teal-300/30 bg-teal-300/[0.08] p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-teal-100">
              What changes in practice
            </p>
            <div className="mt-4 grid gap-2 md:grid-cols-2">
              {transformationalImpact.map((item) => (
                <p key={item} className="text-sm text-slate-100">
                  {item}
                </p>
              ))}
            </div>
            <p className="mt-5 max-w-3xl text-sm text-slate-100/90">
              THiNK helps you bring older, poorly documented datasets into the
              same workflow as newer data—without losing provenance or forcing
              everyone into bespoke documentation practices.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/developers"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/20"
              >
                Start integration
              </Link>
              <Link
                href="/learn"
                className="inline-flex items-center gap-2 rounded-full border border-teal-300 bg-teal-300 px-5 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-teal-200"
              >
                Read whitepaper
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
