"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";
import { Database, Mail, MapPin, Phone, ShieldCheck, Workflow } from "lucide-react";
import Button from "@/components/ui/Button";
import FeatureCard from "@/components/ui/FeatureCard";
import { openRequestDemoEmail } from "@/lib/requestDemoEmail";

const HeroGraph = dynamic(() => import("@/components/visualizations/HeroGraph"), {
  ssr: false
});

export default function OverviewPage() {
  return (
    <div className="relative isolate w-full overflow-hidden">
      <div className="pointer-events-none absolute inset-0 z-0 opacity-40">
        <HeroGraph />
      </div>

      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-32 text-center md:pt-36">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: "easeOut" }}
          className="font-[var(--font-heading)] text-5xl font-bold tracking-tight md:text-7xl"
        >
          Semantic Infrastructure for
          <br />
          <span className="bg-gradient-to-r from-teal-400 via-cyan-300 to-violet-500 bg-clip-text text-transparent">
            Complex Data Ecosystems
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="mx-auto mt-8 max-w-3xl text-lg text-slate-300 md:text-xl"
        >
          We build knowledge graph and metadata systems for teams working across
          many tools and data sources. Bring your data together, apply shared
          semantics, and make it easier to query and reuse.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="/products"
            className="rounded-full border border-teal-300 bg-teal-400 px-8 py-3.5 text-sm font-semibold text-ink shadow-[0_0_40px_rgba(17,184,184,0.2)] transition-colors hover:bg-teal-300"
          >
            Explore the Platform
          </Link>
          <Button variant="ghost" onClick={() => openRequestDemoEmail()}>
            Request Demo
          </Button>
          <Link
            href="/learn"
            className="rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-semibold text-slate-100 transition-colors hover:border-white/35 hover:bg-white/10"
          >
            Read whitepaper
          </Link>
        </motion.div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-6 md:grid-cols-3">
          <FeatureCard
            icon={<Database className="h-6 w-6 text-teal-300" />}
            title="Intelligent Data Federation"
            description="Query across decentralized silos as if they were a single, coherent database using semantic metadata."
          />
          <FeatureCard
            icon={<Workflow className="h-6 w-6 text-violet-300" />}
            title="Developer Extensibility"
            description="Engineered around open standards. Deploy in your own environment for full control, and extend through modular integrations"
          />
          <FeatureCard
            icon={<ShieldCheck className="h-6 w-6 text-cyan-300" />}
            title="Enterprise Architecture"
            description="Secure infrastructure for compliance-heavy workflows and decision support."
          />
        </div>
      </section>

      <section id="contact-information" className="relative z-10 mx-auto max-w-7xl px-6 pb-24">
        <div className="rounded-2xl border border-white/15 bg-gradient-to-b from-white/10 to-white/5 p-8 md:p-10">
          <h2 className="font-[var(--font-heading)] text-3xl font-semibold md:text-4xl">
            Contact Us
          </h2>
          <p className="mt-3 text-slate-300">
            Reach SemanticMatter for technical and collaboration inquiries.
          </p>
          <div className="mt-7 grid gap-8 md:grid-cols-2">
            <div>
              <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-teal-200">
                <MapPin className="h-4 w-4" />
                Postal Address
              </p>
              <address className="mt-3 space-y-1 text-base leading-7 not-italic text-slate-200">
                <p>SINTEF Ocean AS</p>
                <p>SemanticMatter</p>
                <p>Att: Sarah Schmidt</p>
                <p>PoBox 4762 Torgard</p>
                <p>N-7465 Trondheim</p>
                <p>Norway</p>
              </address>
            </div>
            <div>
              <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-teal-200">
                <Mail className="h-4 w-4" />
                Contact Methods
              </p>
              <div className="mt-3 space-y-3 text-base leading-7 text-slate-200">
                <p>
                  Email:{" "}
                  <a
                    className="text-teal-200 underline decoration-teal-300/60 underline-offset-4 hover:text-teal-100"
                    href="mailto:Sarah.Schmidt@sintef.no"
                  >
                    Sarah.Schmidt@sintef.no
                  </a>
                </p>
                <p className="inline-flex items-center gap-2">
                  <Phone className="h-4 w-4 text-slate-400" />
                  Phone: Available on request
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
