"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type CarouselSlide = {
  title: string;
  caption: string;
  src: string;
  width: number;
  height: number;
  imageBackgroundClassName?: string;
};

type ProductCarouselProps = {
  slides: CarouselSlide[];
  autoAdvanceMs?: number;
};

const swipeThreshold = 50;

export default function ProductCarousel({
  slides,
  autoAdvanceMs = 5500
}: ProductCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const activeSlide = slides[activeIndex];
  const hasSlides = slides.length > 0;

  const goTo = (index: number) => {
    if (!hasSlides) return;
    const normalizedIndex = (index + slides.length) % slides.length;
    setDirection(normalizedIndex >= activeIndex ? 1 : -1);
    setActiveIndex(normalizedIndex);
  };

  const next = useCallback(() => {
    if (!hasSlides) return;
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % slides.length);
  }, [hasSlides, slides.length]);

  const previous = useCallback(() => {
    if (!hasSlides) return;
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, [hasSlides, slides.length]);

  useEffect(() => {
    if (!hasSlides || isPaused || slides.length === 1) return;
    const timer = window.setInterval(next, autoAdvanceMs);
    return () => window.clearInterval(timer);
  }, [autoAdvanceMs, hasSlides, isPaused, next, slides.length]);

  const variants = useMemo(
    () => ({
      enter: (dir: number) => ({
        opacity: 0,
        x: dir > 0 ? 36 : -36
      }),
      center: {
        opacity: 1,
        x: 0
      },
      exit: (dir: number) => ({
        opacity: 0,
        x: dir > 0 ? -36 : 36
      })
    }),
    []
  );

  if (!hasSlides) return null;

  return (
    <div className="w-full">
      <div
        className="relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-slate-900 via-slate-900/90 to-cyan-950/35 shadow-[0_24px_90px_rgba(0,0,0,0.45)]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={(event) => {
          touchStartX.current = event.changedTouches[0]?.clientX ?? null;
          setIsPaused(true);
        }}
        onTouchEnd={(event) => {
          const endX = event.changedTouches[0]?.clientX ?? null;
          if (touchStartX.current !== null && endX !== null) {
            const delta = endX - touchStartX.current;
            if (delta > swipeThreshold) previous();
            if (delta < -swipeThreshold) next();
          }
          touchStartX.current = null;
          setIsPaused(false);
        }}
      >
        <div className="relative aspect-[16/9] w-full bg-slate-950/80">
          <AnimatePresence custom={direction} initial={false} mode="wait">
            <motion.div
              key={activeSlide.src}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
              className={`absolute inset-0 ${activeSlide.imageBackgroundClassName ?? ""}`}
            >
              <img
                src={activeSlide.src}
                alt={activeSlide.title}
                width={activeSlide.width}
                height={activeSlide.height}
                className="h-full w-full object-contain"
                loading={activeIndex === 0 ? "eager" : "lazy"}
              />
            </motion.div>
          </AnimatePresence>

          <button
            type="button"
            aria-label="Previous slide"
            onClick={previous}
            className="absolute left-3 top-1/2 inline-flex -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-slate-950/55 p-2.5 text-white transition-colors hover:bg-slate-900/85 md:left-5"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={next}
            className="absolute right-3 top-1/2 inline-flex -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-slate-950/55 p-2.5 text-white transition-colors hover:bg-slate-900/85 md:right-5"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="border-t border-white/10 bg-slate-950/50 px-5 py-4 md:px-6">
          <h3 className="font-[var(--font-heading)] text-xl font-semibold text-slate-100">
            {activeSlide.title}
          </h3>
          <p className="mt-1 text-sm text-slate-300">{activeSlide.caption}</p>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-3">
        {slides.map((slide, idx) => (
          <button
            key={slide.src}
            type="button"
            aria-label={`Go to slide ${idx + 1}: ${slide.title}`}
            onClick={() => goTo(idx)}
            className={`group overflow-hidden rounded-xl border transition ${
              idx === activeIndex
                ? "border-cyan-300/60 bg-cyan-300/10"
                : "border-white/15 bg-white/[0.03] hover:border-white/30"
            }`}
          >
            <div className="relative aspect-[16/9] w-full">
              <div className={`h-full w-full ${slide.imageBackgroundClassName ?? ""}`}>
                <img
                  src={slide.src}
                  alt={slide.title}
                  width={slide.width}
                  height={slide.height}
                  className={`h-full w-full object-cover transition duration-300 ${
                    idx === activeIndex ? "opacity-100" : "opacity-70 group-hover:opacity-90"
                  }`}
                  loading="lazy"
                />
              </div>
            </div>
            <div className="px-2 py-1.5 text-left text-[11px] text-slate-300">{slide.title}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
