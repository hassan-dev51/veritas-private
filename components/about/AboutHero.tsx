"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

const slides = [
  {
    image: "/images/bio-burden.jpg",
    eyebrow: "Veritas Lab Testing Pvt Ltd",
    title: "Testing That Supports Better Medical Devices",
    description:
      "A dedicated medical-device testing laboratory supporting manufacturers with reliable, technically focused testing and clear reporting.",
  },
  {
    image: "/images/bio-compt.jpg",
    eyebrow: "OUR LABORATORY",
    title: "A Laboratory Built Around Medical Device Testing",
    description:
      "Our work is focused on helping manufacturers evaluate materials, biological safety, microbiological risks, sterilization, reusability, and related requirements.",
  },
  {
    image: "/images/cytotoxicity.jpg",
    eyebrow: "TECHNICAL APPROACH",
    title: "Practical Testing. Clear Technical Results.",
    description:
      "We combine appropriate test methods, controlled laboratory practices, documented procedures, and traceable technical reporting.",
  },
  {
    image: "/images/material.jpg",
    eyebrow: "YOUR TESTING PARTNER",
    title: "Supporting Manufacturers From Testing to Technical Documentation",
    description:
      "We work with medical-device manufacturers and exporters to provide testing information that supports product development, quality evaluation, and regulatory documentation.",
  },
  {
    image: "/images/reusability.jpg",
    eyebrow: "REUSABILITY TESTING",
    title: "Supporting the Safe Reuse of Medical Devices",
    description:
      "We evaluate reusable medical devices through appropriate cleaning, disinfection, sterilisation, reprocessing, and repeated-use assessments to support safety, functionality, and product lifecycle requirements.",
  },
  {
    image: "/images/sterilization.jpg",
    eyebrow: "STERILIZATION TESTING",
    title: "Sterilization Testing for Medical Device Safety",
    description:
      "We provide sterilization testing and related microbiological evaluations to help manufacturers assess sterilization effectiveness, product safety, and applicable requirements for sterile medical devices.",
  },
];

export default function AboutHero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setActiveIndex((current) => (current + 1) % slides.length);
  }, []);

  const previousSlide = useCallback(() => {
    setActiveIndex((current) => (current - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const interval = window.setInterval(nextSlide, 5500);

    return () => window.clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <section
      className="relative isolate min-h-180 overflow-hidden bg-slate-950 sm:min-h-190"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.image}
            className={`absolute inset-0 transition-opacity duration-1200 ease-in-out ${
              index === activeIndex ? "z-10 opacity-100" : "z-0 opacity-0"
            }`}
            aria-hidden={index !== activeIndex}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              sizes="70vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Dark background overlays */}
      <div className="absolute inset-0 z-20 bg-linear-to-r from-slate-950/90 via-slate-950/75 to-slate-950/40" />
      <div className="absolute inset-x-0 bottom-0 z-20 h-48 bg-linear-to-t from-slate-950 to-transparent" />

      {/* Content */}
      <div className="relative z-30 mx-auto flex min-h-180 max-w-7xl items-center px-6 py-28 sm:min-h-190 lg:px-8">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div className="mb-6 flex items-center gap-3">
            <span className="h-0.5 w-10 bg-cyan-400 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]" />
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
              {slides[activeIndex].eyebrow}
            </p>
          </div>

          <div className="min-h-60 sm:min-h-55 lg:min-h-62.5">
            {/* Title: Pure crisp white for maximum contrast */}
            <h1 className="max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] sm:text-5xl lg:text-7xl">
              {slides[activeIndex].title}
            </h1>

            {/* Description: Light slate for high legibility */}
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-200 drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)] sm:text-lg">
              {slides[activeIndex].description}
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Discuss Your Testing Requirements
              <ArrowRight className="size-4" />
            </Link>

            <Link
              href="/testing"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/30 bg-slate-950/40 px-6 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/10 hover:border-white/50"
            >
              Explore Our Testing Services
            </Link>
          </div>
        </div>
      </div>

      {/* Slider controls */}
      <div className="absolute bottom-8 left-6 right-6 z-40 mx-auto flex max-w-7xl items-center justify-between lg:left-8 lg:right-8">
        <div className="flex items-center gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.image}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === activeIndex}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "w-10 bg-white"
                  : "w-5 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={previousSlide}
            aria-label="Previous slide"
            className="flex size-11 items-center justify-center rounded-full border border-white/25 bg-black/20 text-white backdrop-blur-sm transition hover:bg-white/15"
          >
            <ChevronLeft className="size-5" />
          </button>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next slide"
            className="flex size-11 items-center justify-center rounded-full border border-white/25 bg-black/20 text-white backdrop-blur-sm transition hover:bg-white/15"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
