import Link from "next/link";

const products = [
  {
    title: "THiNK",
    href: "/products/think",
    description:
      "Model, organize, and reason over structured knowledge using shared ontologies and graph-based methods."
  },
  {
    title: "Blobfish",
    href: "/products/blobfish",
    description:
      "Ingest and standardize metadata from heterogeneous systems into a consistent, usable structure."
  },
  {
    title: "Data Federation",
    href: "/products/data-federation",
    description:
      "Query distributed data sources through a single interface without centralizing raw data."
  },
  {
    title: "Graph Explorer",
    href: "/products/graph-explorer",
    description:
      "Explore and analyze connected data through an interactive graph interface."
  }
];

export default function ProductsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20">
      <h1 className="font-[var(--font-heading)] text-4xl font-semibold md:text-5xl">
        Products
      </h1>
      <p className="mt-4 max-w-2xl text-slate-300">
        Products for teams that need to model, connect, and query data across systems.
      </p>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {products.map((product) => (
          <Link
            key={product.href}
            href={product.href}
            className="glass rounded-2xl p-6 transition-colors hover:bg-white/10"
          >
            <h2 className="font-[var(--font-heading)] text-2xl font-semibold">
              {product.title}
            </h2>
            <p className="mt-3 text-slate-300">{product.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
