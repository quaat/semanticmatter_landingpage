"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type Item = {
  name: string;
  path: string;
  description?: string;
};

type DropdownMenuProps = {
  label: string;
  items: Item[];
  isActive?: boolean;
};

export default function DropdownMenu({
  label,
  items,
  isActive
}: DropdownMenuProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    window.addEventListener("mousedown", handleOutsideClick);
    return () => window.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-haspopup="menu"
        className={cn(
          "inline-flex items-center gap-1.5 text-sm font-medium transition-colors",
          isActive ? "text-white" : "text-slate-400 hover:text-teal-300"
        )}
      >
        {label}
        <ChevronDown
          className={cn("h-4 w-4 transition-transform", open && "rotate-180")}
        />
      </button>
      {open ? (
        <div
          role="menu"
          className="absolute right-0 top-full z-50 w-80 rounded-xl border border-white/10 bg-[#06070d]/95 p-2 shadow-2xl backdrop-blur-xl"
        >
          {items.length === 0 ? (
            <p className="px-3 py-3 text-sm text-slate-400">No products available.</p>
          ) : (
            items.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="block rounded-lg px-3 py-3 transition-colors hover:bg-white/8"
                onClick={() => setOpen(false)}
              >
                <p className="text-sm font-semibold text-slate-100">{item.name}</p>
                {item.description ? (
                  <p className="mt-1 text-xs text-slate-400">{item.description}</p>
                ) : null}
              </Link>
            ))
          )}
        </div>
      ) : null}
    </div>
  );
}
