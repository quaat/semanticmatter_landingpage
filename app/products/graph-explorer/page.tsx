import Link from "next/link";
import type { ComponentType } from "react";
import {
  AlertTriangle,
  ArrowRight,
  BrainCircuit,
  Boxes,
  CheckCircle2,
  Cloud,
  Database,
  Eye,
  FileCode2,
  Filter,
  Gauge,
  GitBranch,
  Network,
  ScanSearch,
  SearchCheck,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Waypoints
} from "lucide-react";
import ProductCarousel from "@/components/ui/ProductCarousel";

type IconType = ComponentType<{ className?: string }>;

const implementedCapabilities: Array<{
  title: string;
  description: string;
  icon: IconType;
}> = [
  {
    title: "Turtle Import and Parsing",
    description:
      "Ingest .ttl files, parse with N3, and build in-memory GraphData node and edge structures.",
    icon: FileCode2
  },
  {
    title: "Interactive Cytoscape Rendering",
    description:
      "Explore graph topology with multiple layouts, node selection, minimap support, and local relayout behavior.",
    icon: Network
  },
  {
    title: "Filter-Driven Exploration",
    description:
      "Apply predicate visibility, literal toggles, and text filtering for high-signal navigation.",
    icon: Filter
  },
  {
    title: "Neighborhood Expansion",
    description:
      "Expand one-hop neighborhoods plus existing rdf:type and rdfs:subClassOf context for guided exploration.",
    icon: Waypoints
  },
  {
    title: "API-Connected Reasoning",
    description:
      "Run remote reasoning jobs with profile selection (disabled, rdfs, owlrl), auto polling, merge, and export.",
    icon: Cloud
  },
  {
    title: "API-Connected SHACL Validation",
    description:
      "Upload shapes, run validation jobs, retrieve reports, and focus violations directly in the graph.",
    icon: ShieldCheck
  }
];

const painPoints = [
  "High visual density and edge clutter in dense RDF graphs.",
  "Slow movement between global topology and local semantic context.",
  "Disconnected parsing, filtering, and analysis toolchains.",
  "Lack of integrated validation and reasoning loops during exploration."
];

const architectureLayers: Array<{
  title: string;
  icon: IconType;
  bullets: string[];
}> = [
  {
    title: "App Orchestration Layer (App.tsx)",
    icon: ServerCog,
    bullets: [
      "Central state orchestration with useState and memoized derivations.",
      "Derived graph pipeline for filteredGraph, expandedGraph, mergedGraph, and renderGraph.",
      "Interaction state for selection, focus mode, layout nonce, and graph version."
    ]
  },
  {
    title: "RDF Parsing Layer (rdfService)",
    icon: Database,
    bullets: [
      "N3 Parser and Store pipeline for Turtle parsing and quad storage.",
      "Prefix extraction and CURIE generation logic.",
      "Label precedence strategy based on rdfs:label, skos:prefLabel, foaf:name, CURIE, and local IRI."
    ]
  },
  {
    title: "View and Traversal Layer (graphViewService)",
    icon: SearchCheck,
    bullets: [
      "Graph index generation via nodeById and edgesByNode maps.",
      "1-hop neighborhood traversal and taxonomy walk via rdfs:subClassOf.",
      "Predicate visibility policy enforcement before render."
    ]
  },
  {
    title: "Knowledge Graph Analysis API Layer (kgApiService)",
    icon: Cloud,
    bullets: [
      "Health and capability checks plus graph upload lifecycle.",
      "Reasoning and SHACL job orchestration with auto polling.",
      "Result retrieval, report download, and user-facing error handling."
    ]
  }
];

const statusCards = [
  {
    title: "API-Backed Reasoning (RDFS and OWLRL)",
    status: "Implemented",
    description:
      "Reasoning jobs are created via Knowledge Graph Analysis API and results are parsed back into graph form."
  },
  {
    title: "API-Backed SHACL Validation",
    status: "Implemented",
    description:
      "Shape upload, validation jobs, and interactive SHACL report panel are wired into the Analyze workflow."
  },
  {
    title: "Local In-Browser Formal Reasoning Engine",
    status: "Not Implemented",
    description:
      "No client-side RDFS or OWL closure engine is present; formal reasoning is delegated to external API endpoints."
  },
  {
    title: "Local In-Browser SHACL Engine",
    status: "Not Implemented",
    description:
      "SHACL execution does not run in-browser; validation is executed through remote job endpoints."
  },
  {
    title: "SPARQL Query Interface",
    status: "Not Implemented",
    description:
      "No SPARQL authoring or endpoint query view in the current UI."
  },
  {
    title: "Community Detection (Local)",
    status: "Implemented",
    description:
      "Custom label-propagation analytics remain available locally and integrate with color-mode workflows."
  }
];

const workflows = [
  {
    title: "Local Exploration Workflow",
    steps: [
      "Upload .ttl file or load demo dataset.",
      "Parse Turtle into GraphData and rebuild indexes.",
      "Apply filters and predicate policy.",
      "Inspect, focus, and expand node neighborhoods."
    ]
  },
  {
    title: "Analyze Workflow (API Connected)",
    steps: [
      "Configure API base URL and run health check.",
      "Auto-upload current graph snapshot for analysis.",
      "Run reasoning or SHACL job with auto polling.",
      "Merge inferred triples or open SHACL report pane and focus violations."
    ]
  }
];

const apiEndpoints = [
  "/health and /capabilities",
  "/graphs and /graphs/{graphId}/stats",
  "/reasoning/jobs and /reasoning/run",
  "/reasoning/jobs/{jobId}/result",
  "/shacl/shapes and /shacl/jobs",
  "/shacl/jobs/{jobId}/report"
];

const limits = [
  "Reasoning and SHACL depend on external API availability and latency.",
  "No local fallback reasoner or local SHACL engine.",
  "No persistence layer for saved sessions or analysis workspaces.",
  "No worker-based offloading for parse, layout, or analytics.",
  "Edge IDs include random suffixes, limiting deterministic diffability.",
  "No SPARQL editor or endpoint browsing workflow."
];

const performanceSignals = [
  "Entire graph loads into browser memory with full in-memory representations.",
  "Expansion warning appears when neighborhood size exceeds 200.",
  "Taxonomy traversal safety counter stops at 5000 steps.",
  "Potential hotspots: dense Cytoscape render cost, repeated array filtering, minimap redraw frequency.",
  "API analysis introduces network and job-queue latency into reasoning and SHACL operations."
];

const roadmap = [
  "Add optional local worker-based reasoning and SHACL execution for offline workflows.",
  "Add SPARQL query panel with result-to-subgraph highlighting.",
  "Move parse and heavy analytics to Web Workers for large graph responsiveness.",
  "Add persistence options via IndexedDB and optional backend sync.",
  "Improve deterministic graph element identifiers for cache and diff stability.",
  "Add structured telemetry for API job durations and validation coverage."
];

const screenshots = [
  {
    title: "Data Tab and Initial Graph View",
    caption:
      "Import, export, and graph stats controls with live graph and minimap context.",
    src: "../../graph_explorer_presentation/graphview1.png",
    width: 1713,
    height: 904
  },
  {
    title: "View Tab Controls",
    caption:
      "Layout, coloring, labels, and predicate filter controls integrated with visual exploration.",
    src: "../../graph_explorer_presentation/graphview2.png",
    width: 1709,
    height: 908
  },
  {
    title: "Analyze Tab with API Workflows",
    caption:
      "Reasoning and SHACL workflows with auto polling, inferred merge, and report operations.",
    src: "../../graph_explorer_presentation/graphview3.png",
    width: 1715,
    height: 907
  }
];

const moduleInventory: Array<{
  module: string;
  responsibility: string;
}> = [
  {
    module: "App.tsx",
    responsibility:
      "State orchestration, workflow wiring, local graph derivation, and API analyze flow."
  },
  {
    module: "services/rdfService.ts",
    responsibility:
      "Turtle parsing, prefix extraction, and graph model construction."
  },
  {
    module: "services/graphViewService.ts",
    responsibility:
      "Indexing, filtering, expansion, and predicate visibility policies."
  },
  {
    module: "services/kgApiService.ts",
    responsibility:
      "Knowledge Graph Analysis API client for graph, reasoning, and SHACL endpoints."
  },
  {
    module: "components/Report/ShaclReportPanel.tsx",
    responsibility:
      "Interactive SHACL violations panel with focus-on-node navigation."
  },
  {
    module: "components/Graph/GraphViewer.tsx",
    responsibility: "Cytoscape graph rendering, style, layout, and interaction."
  }
];

function statusTone(status: string) {
  if (status === "Implemented") {
    return "border-teal-300/40 bg-teal-300/15 text-teal-100";
  }
  return "border-amber-300/40 bg-amber-300/15 text-amber-100";
}

export default function GraphExplorerPage() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-hero-grid opacity-55" />
      <div className="pointer-events-none absolute -left-20 top-14 -z-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-6 -z-10 h-80 w-80 rounded-full bg-violet-400/15 blur-3xl" />

      <section className="mx-auto max-w-7xl px-6 pb-16 pt-20 md:pt-24">
        <div className="glass overflow-hidden rounded-3xl border-white/15">
          <div className="grid gap-10 p-8 md:grid-cols-[1.2fr_0.8fr] md:p-12">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-cyan-300/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">
                <Sparkles className="h-3.5 w-3.5" />
                RDF Graph Explorer v0.0.0
              </p>
              <h1 className="mt-5 font-[var(--font-heading)] text-4xl font-semibold tracking-tight md:text-6xl">
                Graph Explorer
                <span className="mt-2 block bg-gradient-to-r from-cyan-200 via-teal-300 to-violet-300 bg-clip-text text-transparent">
                  Local RDF Visualization + API-Connected Reasoning and SHACL
                </span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
                A React and TypeScript RDF/Turtle exploration interface that
                combines fast in-browser graph navigation with Knowledge Graph
                Analysis API workflows for formal reasoning and SHACL
                validation.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://semanticmatter.github.io/graph-explorer/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-cyan-300 bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-200"
                >
                  Open live application
                  <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  href="/developers"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-slate-100 transition-colors hover:bg-white/20"
                >
                  Request walkthrough
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
              <article className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  Key differentiator
                </p>
                <p className="mt-2 text-lg font-semibold text-white">
                  Hybrid Analyze Model
                </p>
                <p className="mt-2 text-sm text-slate-300">
                  Local-first graph interaction with API-powered reasoning and
                  SHACL workflows.
                </p>
              </article>
              <article className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  Exploration philosophy
                </p>
                <p className="mt-2 text-lg font-semibold text-white">
                  Incremental Context Expansion
                </p>
                <p className="mt-2 text-sm text-slate-300">
                  Combine filtering and selective neighborhood expansion for
                  speed and readability.
                </p>
              </article>
              <article className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  Primary users
                </p>
                <p className="mt-2 text-lg font-semibold text-white">
                  KG Engineers and Data Architects
                </p>
                <p className="mt-2 text-sm text-slate-300">
                  Structural graph inspection plus validation and inference loops
                  in one interface.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <h2 className="font-[var(--font-heading)] text-3xl font-semibold md:text-4xl">
          Implemented capabilities
        </h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {implementedCapabilities.map((capability) => {
            const Icon = capability.icon;
            return (
              <article
                key={capability.title}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/[0.08]"
              >
                <div className="inline-flex rounded-lg bg-white/10 p-2 text-cyan-200 transition-transform group-hover:scale-110">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-[var(--font-heading)] text-xl font-semibold">
                  {capability.title}
                </h3>
                <p className="mt-2 text-sm text-slate-300">{capability.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <h2 className="font-[var(--font-heading)] text-3xl font-semibold md:text-4xl">
          Live application views
        </h2>
        <p className="mt-4 max-w-3xl text-slate-300">
          Screenshots from the Graph Explorer application showing Data, View,
          and Analyze workflows.
        </p>
        <p className="mt-3 text-sm text-slate-300">
          Try it live:{" "}
          <a
            href="https://semanticmatter.github.io/graph-explorer/"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-200 underline decoration-cyan-300/60 underline-offset-4 hover:text-cyan-100"
          >
            semanticmatter.github.io/graph-explorer
          </a>
        </p>
        <div className="mt-8">
          <ProductCarousel slides={screenshots} autoAdvanceMs={6000} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <h2 className="font-[var(--font-heading)] text-3xl font-semibold md:text-4xl">
          Problem statement
        </h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {painPoints.map((point) => (
            <article
              key={point}
              className="rounded-2xl border border-red-300/20 bg-red-300/[0.06] p-5"
            >
              <p className="text-sm text-slate-200">{point}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <h2 className="font-[var(--font-heading)] text-3xl font-semibold md:text-4xl">
          Architecture deep dive
        </h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {architectureLayers.map((layer) => {
            const Icon = layer.icon;
            return (
              <article key={layer.title} className="glass rounded-2xl p-6">
                <div className="inline-flex rounded-lg bg-white/10 p-2 text-teal-200">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-[var(--font-heading)] text-xl font-semibold">
                  {layer.title}
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-300">
                  {layer.bullets.map((bullet) => (
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
          Reasoning and SHACL status
        </h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {statusCards.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="font-[var(--font-heading)] text-xl font-semibold">
                  {item.title}
                </h3>
                <span
                  className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] ${statusTone(item.status)}`}
                >
                  {item.status}
                </span>
              </div>
              <p className="mt-3 text-sm text-slate-300">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <h2 className="font-[var(--font-heading)] text-3xl font-semibold md:text-4xl">
          User workflows
        </h2>
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {workflows.map((workflow) => (
            <article key={workflow.title} className="glass rounded-2xl p-6">
              <h3 className="font-[var(--font-heading)] text-2xl font-semibold">
                {workflow.title}
              </h3>
              <ol className="mt-4 space-y-3 text-sm text-slate-300">
                {workflow.steps.map((step, idx) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-300/20 text-xs font-semibold text-cyan-100">
                      {idx + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="font-[var(--font-heading)] text-2xl font-semibold md:text-3xl">
            Knowledge Graph Analysis API surface
          </h2>
          <p className="mt-3 text-sm text-slate-300">
            API operations currently wired in `services/kgApiService.ts`.
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {apiEndpoints.map((endpoint) => (
              <div
                key={endpoint}
                className="rounded-lg border border-white/10 bg-black/20 px-3 py-2 font-mono text-xs text-cyan-200"
              >
                {endpoint}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <article className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="font-[var(--font-heading)] text-2xl font-semibold md:text-3xl">
              Performance and scalability signals
            </h2>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              {performanceSignals.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Gauge className="mt-0.5 h-4 w-4 text-teal-200" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
          <article className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="font-[var(--font-heading)] text-2xl font-semibold md:text-3xl">
              Confirmed limitations
            </h2>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              {limits.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <AlertTriangle className="mt-0.5 h-4 w-4 text-amber-200" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <article className="glass rounded-2xl p-6">
            <h2 className="font-[var(--font-heading)] text-2xl font-semibold md:text-3xl">
              Security and observability posture
            </h2>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <ShieldCheck className="mt-0.5 h-4 w-4 text-teal-200" />
                Local parsing and graph operations are client-side; reasoning and
                SHACL are remote API actions.
              </li>
              <li className="flex items-start gap-2">
                <ShieldCheck className="mt-0.5 h-4 w-4 text-teal-200" />
                No first-party auth UI in this app codebase; API auth and access
                control are expected to be handled by deployed API infrastructure.
              </li>
              <li className="flex items-start gap-2">
                <ShieldCheck className="mt-0.5 h-4 w-4 text-teal-200" />
                Error handling includes network, timeout, 4xx/5xx normalization,
                plus UI-level status for reasoning and SHACL jobs.
              </li>
            </ul>
          </article>
          <article className="glass rounded-2xl p-6">
            <h2 className="font-[var(--font-heading)] text-2xl font-semibold md:text-3xl">
              Deployment model
            </h2>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <Boxes className="mt-0.5 h-4 w-4 text-violet-200" />
                Vite build output is static and deployable to standard static
                hosting platforms.
              </li>
              <li className="flex items-start gap-2">
                <Boxes className="mt-0.5 h-4 w-4 text-violet-200" />
                Local development uses Vite dev server; production integration
                requires an available KG Analysis API base URL.
              </li>
              <li className="flex items-start gap-2">
                <Boxes className="mt-0.5 h-4 w-4 text-violet-200" />
                CI/CD model runs tests and build before static deployment.
              </li>
            </ul>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <h2 className="font-[var(--font-heading)] text-3xl font-semibold md:text-4xl">
          Module inventory (key files)
        </h2>
        <div className="mt-8 grid gap-4">
          {moduleInventory.map((item) => (
            <article
              key={item.module}
              className="rounded-xl border border-white/10 bg-white/[0.04] p-4"
            >
              <p className="font-mono text-xs text-cyan-200">{item.module}</p>
              <p className="mt-1 text-sm text-slate-300">{item.responsibility}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="glass rounded-3xl p-8 md:p-10">
          <h2 className="font-[var(--font-heading)] text-3xl font-semibold md:text-4xl">
            Roadmap recommendations
          </h2>
          <div className="mt-6 grid gap-3">
            {roadmap.map((item, idx) => (
              <article
                key={item}
                className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-slate-200"
              >
                <span className="mr-2 text-cyan-200">{idx + 1}.</span>
                {item}
              </article>
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-cyan-300/35 bg-cyan-300/[0.1] p-6">
            <h3 className="font-[var(--font-heading)] text-2xl font-semibold text-slate-100">
              Build the next exploration tier
            </h3>
            <p className="mt-3 max-w-3xl text-sm text-slate-200">
              Graph Explorer supports API workflows for
              reasoning and SHACL validation. Next priorities are local compute
              acceleration, richer query interfaces, and persistent collaboration
              workflows.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/developers"
                className="inline-flex items-center gap-2 rounded-full border border-cyan-300 bg-cyan-300 px-5 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-200"
              >
                Start integration
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/products/data-federation"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/20"
              >
                Explore Data Federation
                <GitBranch className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
