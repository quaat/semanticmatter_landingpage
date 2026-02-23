import Link from "next/link";

const links = [
  { label: "Products", href: "/products" },
  { label: "Use Cases", href: "/use-cases" },
  { label: "Developers", href: "/developers" },
  { label: "Learn", href: "/learn" },
  { label: "Contact", href: "/#contact-information" }
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#03040a]/70">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Semantic Matter. All rights reserved.</p>
        <nav className="flex flex-wrap items-center gap-4">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-slate-300">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
