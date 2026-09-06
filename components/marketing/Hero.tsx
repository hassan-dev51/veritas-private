"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  Award,
  Building2,
  FileCheck2,
  Clock,
  RefreshCw,
  Dna,
  Microscope,
  Bug,
  Flame,
  TestTube2,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
} from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import { Button } from "@/components/ui/button";

const TRUST_SIGNALS = [
  { icon: ShieldCheck, label: "ISO/IEC 17025 accredited" },
  { icon: Award, label: "PNAC recognized" },
  { icon: Building2, label: "China-affiliated membership" },
];

const SLIDES = [
  {
    id: "reusability",
    title: "Reusability & Reprocessing Validation",
    description:
      "Multi-cycle durability and cleaning validation to ensure reusable medical devices maintain structural integrity across repeated sterilization cycles.",
    bgImage: "/images/reusability.jpg",
    tintClass: "from-slate-950/90 via-slate-950/75 to-blue-950/60",
    badge: "ISO 17664 / AAMI ST98",
    icon: RefreshCw,
    certificate: {
      test: "Reusability Test",
      standard: "ISO 17664",
      method: "100-Cycle Steam Autoclave",
      result: "Pass - Zero Wear/Corrosion",
      sampleId: "MDL-26-0881",
    },
  },
  {
    id: "biocompatibility",
    title: "Comprehensive Biocompatibility Testing",
    description:
      "Biological evaluation for medical device materials according to ISO 10993 standards to guarantee systemic safety and tissue compatibility.",
    bgImage: "/images/bio-compt.jpg",
    tintClass: "from-slate-950/90 via-slate-950/75 to-teal-950/60",
    badge: "ISO 10993-1 / FDA Standards",
    icon: Dna,
    certificate: {
      test: "Biocompatibility Test",
      standard: "ISO 10993-1",
      method: "Systemic & Local Effect Assay",
      result: "Non-Sensitizing / Pass",
      sampleId: "MDL-26-0882",
    },
  },
  {
    id: "cytotoxicity",
    title: "In Vitro Cytotoxicity Assessment",
    description:
      "Rapid, highly sensitive cell culture screening to evaluate potential toxic leaching and biological reactivity in medical instruments.",
    bgImage: "/images/cytotoxicity.jpg",
    tintClass: "from-slate-950/90 via-slate-950/75 to-indigo-950/60",
    badge: "ISO 10993-5 Verified",
    icon: Microscope,
    certificate: {
      test: "Cytotoxicity Test",
      standard: "ISO 10993-5",
      method: "MEM Elution Assay",
      result: "Grade 0 (Non-cytotoxic)",
      sampleId: "MDL-26-0883",
    },
  },
  {
    id: "bioburden",
    title: "Bioburden & Microbial Limits Testing",
    description:
      "Determining precise pre-sterilization microbial counts to validate effective sterilization doses and maintain regulatory compliance.",
    bgImage: "/images/bio-burden.jpg",
    tintClass: "from-slate-950/90 via-slate-950/75 to-emerald-950/60",
    badge: "ISO 11737-1 Compliant",
    icon: Bug,
    certificate: {
      test: "Bioburden Test",
      standard: "ISO 11737-1",
      method: "Membrane Filtration",
      result: "< 10 CFU / Device",
      sampleId: "MDL-26-0884",
    },
  },
  {
    id: "sterilization",
    title: "Sterilization Process Validation",
    description:
      "Verifying Sterility Assurance Levels (SAL 10⁻⁶) using biological indicators across steam, EO gas, and dry heat processing.",
    bgImage: "/images/sterilization.jpg",
    tintClass: "from-slate-950/90 via-slate-950/75 to-cyan-950/60",
    badge: "ISO 11135 / ISO 17665",
    icon: Flame,
    certificate: {
      test: "Sterilization Validation",
      standard: "ISO 11135",
      method: "Biological Indicator Assay",
      result: "SAL 10⁻⁶ Confirmed",
      sampleId: "MDL-26-0885",
    },
  },
  {
    id: "material-testing",
    title: "Medical Material & Alloy Analysis",
    description:
      "Rigorous metallurgical, mechanical, and chemical composition analysis for surgical stainless steels, titanium alloys, and polymers.",
    bgImage: "/images/material.jpg",
    tintClass: "from-slate-950/90 via-slate-950/75 to-sky-950/60",
    badge: "ASTM F138 / ISO 5832",
    icon: TestTube2,
    certificate: {
      test: "Material Testing",
      standard: "ASTM F138",
      method: "Spectrometry & Tensile Test",
      result: "316L Grade Verified",
      sampleId: "MDL-26-0886",
    },
  },
];

export function Hero() {
  // 1. We still use a ref to store the plugin instance, but we don't initialize it yet.

  const autoplayRef = React.useRef<ReturnType<typeof Autoplay> | null>(null);

  // 2. We use state to track if the plugin is playing, as before.
  const [isPlaying, setIsPlaying] = React.useState(true);

  // 3. We use the hook without plugins for the initial render.
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, []);

  // 4. We use state to track the selected index.
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  // 5. We initialize the plugin and reInit Embla in an effect.
  React.useEffect(() => {
    if (!emblaApi) return;

    // We initialize the plugin only if it doesn't exist yet.
    if (!autoplayRef.current) {
      autoplayRef.current = Autoplay({ delay: 5000, stopOnInteraction: false });

      // We reInit Embla to add the plugin.
      emblaApi.reInit({}, [autoplayRef.current]);
    }

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    const onPause = () => setIsPlaying(false);
    const onPlay = () => setIsPlaying(true);

    emblaApi.on("select", onSelect);
    emblaApi.on("autoplay:stop", onPause);
    emblaApi.on("autoplay:play", onPlay);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("autoplay:stop", onPause);
      emblaApi.off("autoplay:play", onPlay);
    };
  }, [emblaApi]);

  const scrollPrev = React.useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  );
  const scrollNext = React.useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  );

  const toggleAutoplay = React.useCallback(() => {
    const autoplayPlugin = emblaApi?.plugins()?.autoplay;
    if (!autoplayPlugin) return;

    if (autoplayPlugin.isPlaying()) {
      autoplayPlugin.stop();
      setIsPlaying(false);
    } else {
      autoplayPlugin.play();
      setIsPlaying(true);
    }
  }, [emblaApi]);

  return (
    <section
      className="relative w-full overflow-hidden border-b border-border bg-slate-950 text-white"
      onMouseEnter={() => autoplayRef.current?.stop()}
      onMouseLeave={() => isPlaying && autoplayRef.current?.play()}
    >
      {/* Full-width Carousel Viewport */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {SLIDES.map((slide, index) => {
            const SlideIcon = slide.icon;
            return (
              <div
                key={slide.id}
                className="relative min-w-0 flex-[0_0_100%] py-16 md:py-24 lg:py-28"
              >
                {/* Background Image with Tinted Overlay */}
                <div className="absolute inset-0 -z-10 h-full w-full">
                  <Image
                    src={slide.bgImage}
                    alt={slide.title}
                    fill
                    sizes="100vw"
                    priority={index === 0}
                    loading={index === 0 ? "eager" : "lazy"}
                    quality={80}
                    className="object-cover object-center"
                  />
                  {/* Tint Gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-linear-to-r ${slide.tintClass}`}
                  />
                </div>

                {/* Slide Content */}
                <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                  {/* Copy Block */}
                  <div className="flex flex-col gap-6 text-left">
                    <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold backdrop-blur-md">
                      <SlideIcon className="h-3.5 w-3.5 text-blue-400" />
                      <span>{slide.badge}</span>
                    </div>

                    <h1 className="text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-5xl">
                      {slide.title}
                    </h1>

                    <p className="max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
                      {slide.description}
                    </p>

                    <div className="flex flex-wrap gap-3 pt-2">
                      <Button
                        size="lg"
                        className="bg-blue-600 hover:bg-blue-700 text-white"
                        asChild
                      >
                        <Link href="#contact-us">Request a Quote</Link>
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-white/30 bg-white/10 text-white hover:bg-white/20"
                        asChild
                      >
                        <Link href="#services">View Testing Services</Link>
                      </Button>
                    </div>

                    <dl className="flex flex-wrap gap-x-6 gap-y-3 border-t border-white/15 pt-6">
                      {TRUST_SIGNALS.map(({ icon: Icon, label }) => (
                        <div
                          key={label}
                          className="flex items-center gap-2 text-xs sm:text-sm text-slate-300"
                        >
                          <Icon
                            className="h-4 w-4 text-blue-400"
                            strokeWidth={1.8}
                          />
                          <span>{label}</span>
                        </div>
                      ))}
                    </dl>
                  </div>

                  {/* Certificate Card Overlay */}
                  <div className="relative">
                    <div className="rounded-xl border border-white/20 bg-slate-900/80 p-6 backdrop-blur-md shadow-2xl">
                      <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
                        <div className="flex items-center gap-2.5">
                          <FileCheck2
                            className="h-5 w-5 text-blue-400"
                            strokeWidth={1.8}
                          />
                          <span className="text-sm font-semibold text-white">
                            Certificate of Analysis
                          </span>
                        </div>
                        <span className="rounded-full bg-emerald-500/20 px-2.5 py-1 font-mono text-[11px] font-medium text-emerald-400 border border-emerald-500/30">
                          PASS
                        </span>
                      </div>

                      <dl className="flex flex-col gap-3 font-mono text-[13px]">
                        <Row label="Test" value={slide.certificate.test} />
                        <Row
                          label="Standard"
                          value={slide.certificate.standard}
                        />
                        <Row label="Method" value={slide.certificate.method} />
                        <Row label="Result" value={slide.certificate.result} />
                        <Row
                          label="Sample ID"
                          value={slide.certificate.sampleId}
                        />
                      </dl>
                    </div>

                    <div className="absolute -bottom-5 -left-5 hidden items-center gap-2 rounded-lg border border-white/20 bg-slate-900/90 px-4 py-3 shadow-lg backdrop-blur-md sm:flex">
                      <Clock
                        className="h-4 w-4 text-blue-400"
                        strokeWidth={1.8}
                      />
                      <span className="text-xs font-medium text-slate-200">
                        Avg. turnaround 5–7 business days
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Slide Navigation Controls */}
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-4 rounded-full border border-white/20 bg-slate-900/60 px-4 py-2 backdrop-blur-md">
        <button
          onClick={scrollPrev}
          className="text-slate-300 hover:text-white transition-colors"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <div className="flex gap-2">
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => emblaApi?.scrollTo(idx)}
              className={`h-2 rounded-full transition-all ${
                selectedIndex === idx
                  ? "w-6 bg-blue-500"
                  : "w-2 bg-slate-600 hover:bg-slate-400"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <button
          onClick={scrollNext}
          className="text-slate-300 hover:text-white transition-colors"
          aria-label="Next Slide"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        <button
          onClick={toggleAutoplay}
          className="text-slate-300 hover:text-white transition-colors ml-2 pl-2 border-l border-white/20"
          aria-label={isPlaying ? "Pause Autoplay" : "Start Autoplay"}
        >
          {isPlaying ? (
            <Pause className="h-4 w-4" />
          ) : (
            <Play className="h-4 w-4" />
          )}
        </button>
      </div>
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <dt className="text-slate-400 shrink-0">{label}</dt>
      <dd className="font-medium text-slate-100 truncate text-right">
        {value}
      </dd>
    </div>
  );
}
