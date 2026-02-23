"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Network, X } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import DropdownMenu from "@/components/layout/DropdownMenu";
import Button from "@/components/ui/Button";
import { openRequestDemoEmail } from "@/lib/requestDemoEmail";
import { cn } from "@/lib/utils";

const productItems = [
  {
    name: "THiNK",
    path: "/products/think",
    description: "Reasoning workspace for knowledge operations"
  },
  {
    name: "Blobfish",
    path: "/products/blobfish",
    description: "Adaptive metadata ingestion and modeling"
  },
  {
    name: "Data Federation",
    path: "/products/data-federation",
    description: "Unified query across distributed systems"
  },
  {
    name: "Graph Explorer",
    path: "/products/graph-explorer",
    description: "Interactive relationship analytics"
  }
];

const navItems = [
  { name: "Overview", path: "/" },
  { name: "Use Cases", path: "/use-cases" },
  { name: "Developers", path: "/developers" },
  { name: "Learn", path: "/learn" }
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const isProductsActive = pathname.startsWith("/products");
  const closeMobileMenu = () => setMobileOpen(false);
  const handleRequestDemo = () => {
    openRequestDemoEmail();
    closeMobileMenu();
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#04050a]/72 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="flex items-center gap-2 font-[var(--font-heading)] text-xl font-semibold tracking-tight"
        >
          <Network className="h-6 w-6 text-teal-300" />
          <span>
            Semantic <span className="text-slate-400">Matter</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const active = pathname === item.path;
            return (
              <div key={item.path} className="relative">
                <Link
                  href={item.path}
                  className={cn(
                    "text-sm font-medium transition-colors",
                    active ? "text-white" : "text-slate-400 hover:text-teal-300"
                  )}
                >
                  {item.name}
                </Link>
                {active ? (
                  <motion.div
                    layoutId="desktop-nav-indicator"
                    className="absolute -bottom-6 left-0 right-0 h-0.5 bg-teal-400"
                    transition={{ type: "spring", bounce: 0.55, duration: 1.8 }}
                  />
                ) : null}
              </div>
            );
          })}
          <DropdownMenu label="Products" items={productItems} isActive={isProductsActive} />
        </nav>

        <div className="hidden md:block">
          <Button variant="ghost" className="px-5 py-2.5" onClick={handleRequestDemo}>
            Request Demo
          </Button>
        </div>

        <button
          onClick={() => setMobileOpen((prev) => !prev)}
          className="rounded-md border border-white/15 p-2 text-slate-100 md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen ? (
        <div className="border-t border-white/10 bg-[#050508]/95 px-6 py-5 md:hidden">
          <div className="flex flex-col gap-3">
            <Link href="/" className="py-1.5 text-sm text-slate-200" onClick={closeMobileMenu}>
              Overview
            </Link>
            <Link
              href="/products"
              className="py-1.5 text-sm text-slate-200"
              onClick={closeMobileMenu}
            >
              Products
            </Link>
            {productItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="pl-3 text-xs uppercase tracking-wide text-slate-400"
                onClick={closeMobileMenu}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/use-cases"
              className="py-1.5 text-sm text-slate-200"
              onClick={closeMobileMenu}
            >
              Use Cases
            </Link>
            <Link
              href="/developers"
              className="py-1.5 text-sm text-slate-200"
              onClick={closeMobileMenu}
            >
              Developers
            </Link>
            <Link
              href="/learn"
              className="py-1.5 text-sm text-slate-200"
              onClick={closeMobileMenu}
            >
              Learn
            </Link>
            <Button variant="primary" className="mt-2 w-full" onClick={handleRequestDemo}>
              Request Demo
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
