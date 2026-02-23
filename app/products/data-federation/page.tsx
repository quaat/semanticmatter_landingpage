import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  GitBranch,
  Layers,
  Network,
  ShieldCheck,
  TableProperties,
  Waypoints
} from "lucide-react";
import ProductCarousel from "@/components/ui/ProductCarousel";

const painPoints = [
  "Access is spread across many source systems",
  "Governance differs from team to team",
  "New integrations take too long to build and maintain",
  "Trust is low without lineage and quality signals"
];

const federationVsReplication = [
  {
    title: "Federation",
    subtitle: "One access layer, sources stay owned by their teams",
    bullets: [
      "Query across nodes without moving all raw data into a central store",
      "Keep ownership and operations with the teams running each source",
      "Reduce copy-heavy ETL when you need cross-domain access"
    ]
  },
  {
    title: "Replication",
    subtitle: "Copy-first approach",
    bullets: [
      "Large data movement and lag between source and copy",
      "Lineage and governance get duplicated across copies",
      "Each new dataset adds integration work and maintenance"
    ]
  }
];

const capabilityStatus = [
  {
    capability: "Node registry UI",
    status: "Implemented",
    notes: "Node cards, health states, protocol fields, and inspection views."
  },
  {
    capability: "API contract docs",
    status: "Implemented",
    notes: "REST endpoints, query options, and examples rendered in the docs UI."
  },
  {
    capability: "Metadata + FAIR wizard",
    status: "Implemented",
    notes: "Multi-step flow, readiness checks, and scoring are in place."
  },
  {
    capability: "Parallel query orchestration",
    status: "Illustrated",
    notes: "Shown in the architecture flow; the planner service is not in this repo."
  },
  {
    capability: "Policy checks at the gateway",
    status: "Illustrated",
    notes: "Described in the product flow; no runtime evaluator is included here."
  },
  {
    capability: "Production connectors",
    status: "Partial",
    notes: "Adapter contracts exist; several concrete connectors are still stubbed."
  }
];

const architecturePlanes = [
  {
    title: "User experience",
    bullets: [
      "Node operations and health status",
      "Federated explorer and API guidance",
      "Metadata, semantics, and workflow UI"
    ],
    icon: Waypoints
  },
  {
    title: "Federation management",
    bullets: [
      "Node registry and connector setup",
      "Metadata catalog and semantic mappings",
      "Policies and workflow orchestration"
    ],
    icon: Layers
  },
  {
    title: "Query runtime",
    bullets: [
      "Single API for federated queries",
      "Plans queries across registered nodes",
      "Normalizes and merges results before returning"
    ],
    icon: Network
  }
];

const requestSequence = [
  "Client sends a query with filters, selected fields, and paging.",
  "Gateway verifies authentication and checks policy scope.",
  "Planner selects eligible nodes from the registry.",
  "Subqueries run in parallel with pushdown where possible.",
  "Results are normalized, deduplicated, and merged.",
  "Response returns unified results plus lineage context."
];

const connectorPatterns = [
  "`CatalogAdapter` and `WorkflowsAdapter` define clean integration boundaries.",
  "Adapter contracts map endpoints and translate payloads.",
  "Mock and production modes support a staged rollout.",
  "Add or upgrade connectors without changing the UI."
];

const governanceAndOps = [
  "Capture metadata with FAIR guidance and readiness scoring.",
  "Track node health with clear degraded states.",
  "Workflow runs follow a simple lifecycle: queued, running, failed, completed.",
  "Operational targets: 99.9% gateway uptime, P95 query latency under 2s, freshness lag under 5 minutes."
];

const roadmap = [
  "Build the production planner/executor with pushdown optimization.",
  "Replace adapter stubs with contract-tested connectors.",
  "Add a policy runtime for RBAC/ABAC with decision logging.",
  "Add tracing, metrics, and SLO-based alerting.",
  "Store wizard outputs in a versioned catalog service.",
  "Add tenant-scoped registries, credentials, and policy namespaces.",
  "Publish machine-readable API contracts (OpenAPI and SensorThings profiles).",
  "Harden security with OIDC and encrypted connector secrets."
];

const presentationSlides = [
  {
    title: "Dataset discovery",
    caption:
      "Browse distributed datasets through a federated catalog view.",
    src: "../../federated-presentation/dataset_discovery.png",
    width: 1600,
    height: 900
  },
  {
    title: "Connected knowledge across datasets",
    caption:
      "Link records across sources so teams can follow relationships, not just files.",
    src: "../../federated-presentation/dataset_connected_knowledge.png",
    width: 1600,
    height: 900
  },
  {
    title: "FAIR alignment view",
    caption:
      "Track metadata readiness and FAIR alignment as part of federation workflows.",
    src: "../../federated-presentation/FAIR_alignment.png",
    width: 1600,
    height: 900
  }
];

const apiExamples = {
  listQuery: `curl -H "Authorization: Bearer <token>" \\
  "https://<fdl-host>/api/v1/Entity?$filter=status eq 'active'&$select=id,name,updatedAt&$top=100&$skip=0"`,
  postObservation: `curl -X POST -H "Authorization: Bearer <token>" -H "Content-Type: application/json" \\
  "https://<fdl-host>/api/v1/Observations" \\
  -d '{"phenomenonTime":"2026-02-18T10:00:00Z","result":12.5,"Datastream":{"@iot.id":1}}'`
};

function statusClasses(status: string) {
  if (status === "Implemented") {
    return "border-teal-300/40 bg-teal-300/15 text-teal-100";
  }
  if (status === "Illustrated") {
    return "border-amber-300/40 bg-amber-300/15 text-amber-100";
  }
  return "border-violet-300/40 bg-violet-300/15 text-violet-100";
}

export default function DataFederationPage() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-hero-grid opacity-55" />
      <div className="pointer-events-none absolute -left-20 top-16 -z-10 h-72 w-72 rounded-full bg-teal-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-6 -z-10 h-80 w-80 rounded-full bg-violet-400/15 blur-3xl" />

      <section className="mx-auto max-w-7xl px-6 pb-16 pt-20 md:pt-24">
        <div className="glass overflow-hidden rounded-3xl border-white/15">
          <div className="grid gap-10 p-8 md:grid-cols-[1.15fr_0.85fr] md:p-12">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-teal-300/40 bg-teal-300/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-teal-100">
                <TableProperties className="h-3.5 w-3.5" />
                Federated Data Layer (FDL)
              </p>
              <h1 className="mt-5 font-[var(--font-heading)] text-4xl font-semibold tracking-tight md:text-6xl">
                Data Federation
                <span className="mt-2 block bg-gradient-to-r from-cyan-200 via-teal-300 to-violet-300 bg-clip-text text-transparent">
                  One way to query across distributed sources
                </span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
                Query and govern distributed systems through a single interface,
                without centralizing all raw data. FDL provides federation-first
                access, metadata and semantic workflows, and policy checks at the
                gateway for cross-domain use.
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
              <article className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  Differentiator
                </p>
                <p className="mt-2 text-lg font-semibold text-white">
                  Federation-first approach
                </p>
                <p className="mt-2 text-sm text-slate-300">
                  Register nodes, expose a unified API, and run queries across sources in
                  parallel—without relying on copy-first pipelines.
                </p>
              </article>

              <article className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  Standards
                </p>
                <p className="mt-2 text-lg font-semibold text-white">
                  SensorThings, OData query semantics, and FAIR metadata
                </p>
                <p className="mt-2 text-sm text-slate-300">
                  Use standard query patterns and metadata practices so integrations stay portable.
                </p>
              </article>

              <article className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  Design principle
                </p>
                <p className="mt-2 text-lg font-semibold text-white">
                  Keep ownership with the source teams
                </p>
                <p className="mt-2 text-sm text-slate-300">
                  Share access and governance without taking over how each source is operated.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <h2 className="font-[var(--font-heading)] text-3xl font-semibold md:text-4xl">
          Why teams move to federation
        </h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {painPoints.map((point) => (
            <article
              key={point}
              className="rounded-2xl border border-red-300/20 bg-red-300/[0.06] p-5 text-slate-200"
            >
              <p className="text-sm">{point}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <h2 className="font-[var(--font-heading)] text-3xl font-semibold md:text-4xl">
          Federation vs replication
        </h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {federationVsReplication.map((item) => (
            <article key={item.title} className="glass rounded-2xl p-6">
              <h3 className="font-[var(--font-heading)] text-2xl font-semibold">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-slate-300">{item.subtitle}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-200">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-teal-300" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-[var(--font-heading)] text-3xl font-semibold md:text-4xl">
            What’s built vs what’s next
          </h2>
          <p className="max-w-2xl text-sm text-slate-300 md:text-base">
            A snapshot of what’s implemented in the UI today, and what’s still in progress.
          </p>
        </div>
        <div className="mt-8 space-y-4">
          {capabilityStatus.map((item) => (
            <article
              key={item.capability}
              className="rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="font-[var(--font-heading)] text-xl font-semibold">
                  {item.capability}
                </h3>
                <span
                  className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] ${statusClasses(item.status)}`}
                >
                  {item.status}
                </span>
              </div>
              <p className="mt-3 text-sm text-slate-300">{item.notes}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <h2 className="font-[var(--font-heading)] text-3xl font-semibold md:text-4xl">
          Architecture overview
        </h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {architecturePlanes.map((plane) => {
            const Icon = plane.icon;
            return (
              <article key={plane.title} className="glass rounded-2xl p-6">
                <div className="inline-flex rounded-lg bg-white/10 p-2 text-teal-200">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-[var(--font-heading)] text-xl font-semibold">
                  {plane.title}
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-300">
                  {plane.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <h2 className="font-[var(--font-heading)] text-3xl font-semibold md:text-4xl">
          Live federation views
        </h2>
        <p className="mt-4 max-w-3xl text-slate-300">
          Demonstrational screenshots of a UI application implemented on the federated data interfaces
          for showcasing connected knowledge, and FAIR alignment workflows.
        </p>
        <div className="mt-8">
          <ProductCarousel slides={presentationSlides} autoAdvanceMs={6000} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <article className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="font-[var(--font-heading)] text-2xl font-semibold md:text-3xl">
              How a query runs
            </h2>
            <ol className="mt-5 space-y-3 text-sm text-slate-300">
              {requestSequence.map((step, idx) => (
                <li key={step} className="flex items-start gap-3">
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-300/20 text-xs font-semibold text-teal-100">
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </article>

          <article className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="font-[var(--font-heading)] text-2xl font-semibold md:text-3xl">
              Connectors and adapters
            </h2>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              {connectorPatterns.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <GitBranch className="mt-0.5 h-4 w-4 text-violet-200" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <h2 className="font-[var(--font-heading)] text-3xl font-semibold md:text-4xl">
          API examples
        </h2>
        <p className="mt-4 max-w-3xl text-slate-300">
          Examples that follow the FDL contract model and standard OData-style query parameters.
        </p>
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <article className="rounded-2xl border border-white/10 bg-[#05060e]/90 p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
              Federated list query
            </p>
            <pre className="mt-3 overflow-x-auto whitespace-pre-wrap text-xs text-slate-200">
              {apiExamples.listQuery}
            </pre>
          </article>
          <article className="rounded-2xl border border-white/10 bg-[#05060e]/90 p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
              Publish observation
            </p>
            <pre className="mt-3 overflow-x-auto whitespace-pre-wrap text-xs text-slate-200">
              {apiExamples.postObservation}
            </pre>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <h2 className="font-[var(--font-heading)] text-3xl font-semibold md:text-4xl">
          Governance, security, and operations
        </h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {governanceAndOps.map((item) => (
            <article
              key={item}
              className="rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <div className="flex items-start gap-2">
                <ShieldCheck className="mt-0.5 h-4 w-4 text-teal-200" />
                <p className="text-sm text-slate-200">{item}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="glass rounded-3xl p-8 md:p-10">
          <h2 className="font-[var(--font-heading)] text-3xl font-semibold md:text-4xl">
            Roadmap priorities
          </h2>
          <div className="mt-6 grid gap-3">
            {roadmap.map((item, idx) => (
              <article
                key={item}
                className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-slate-200"
              >
                <span className="mr-2 text-teal-200">{idx + 1}.</span>
                {item}
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-violet-300/30 bg-violet-300/[0.1] p-6">
            <h3 className="font-[var(--font-heading)] text-2xl font-semibold text-slate-100">
              Move from prototype to production federation
            </h3>
            <p className="mt-3 max-w-3xl text-sm text-slate-200">
              The UI already covers node management, documentation, and standards-based governance.
              The next step is the production runtime: planner, policy checks, durable metadata services,
              and connector execution.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/developers"
                className="inline-flex items-center gap-2 rounded-full border border-violet-300 bg-violet-300 px-5 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-violet-200"
              >
                Start integration
              </Link>
              <Link
                href="/products/blobfish"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/20"
              >
                Explore Blobfish
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
