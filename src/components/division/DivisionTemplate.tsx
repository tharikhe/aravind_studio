"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ArrowUpRight, Camera, Video, Mic, Film, Sparkles, Layers } from "lucide-react";
import { Division, DIVISIONS } from "@/data/divisions";
import QuoteModal from "@/components/QuoteModal";

interface DivisionTemplateProps {
  division: Division;
}

export default function DivisionTemplate({ division }: DivisionTemplateProps) {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  // Other divisions for cross-linking
  const otherDivisions = DIVISIONS.filter((d) => d.id !== division.id);

  const divisionIcons: Record<string, React.ReactNode> = {
    photography: <Camera className="w-5 h-5" />,
    "film-and-video": <Video className="w-5 h-5" />,
    events: <Sparkles className="w-5 h-5" />,
    creative: <Mic className="w-5 h-5" />,
    "post-production": <Layers className="w-5 h-5" />,
    studio: <Film className="w-5 h-5" />,
  };

  return (
    <div className="bg-black min-h-screen pt-24 sm:pt-28 text-white">
      {/* Mini Hero */}
      <section className="relative min-h-[50vh] sm:min-h-[58vh] flex flex-col justify-end pb-16 px-4 sm:px-6 lg:px-8 border-b border-[#4D4D4D]/60 overflow-hidden">
        {/* Background Image with Dark Vignette */}
        <div className="absolute inset-0 z-0">
          <Image
            src={division.heroImage}
            alt={division.name}
            fill
            priority
            className="object-cover arcc-media-img brightness-40 contrast-125"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="max-w-4xl space-y-4">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 bg-white text-black font-mono font-bold text-xs uppercase">
                DIVISION {division.number}
              </span>
              <span className="text-xs font-mono text-[#B0B0B0] uppercase tracking-widest">
                ARCC CORE PILLAR
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-heading font-black text-white uppercase tracking-tight">
              {division.name}
            </h1>

            <p className="text-base sm:text-xl font-mono text-white/90 max-w-2xl leading-relaxed">
              {division.tagline}
            </p>

            <p className="text-xs sm:text-sm text-[#B0B0B0] max-w-2xl leading-relaxed">
              {division.fullDescription}
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => setIsQuoteOpen(true)}
                className="px-8 py-3.5 bg-white text-black font-heading font-black text-xs uppercase tracking-widest hover:bg-[#B0B0B0] transition-colors flex items-center gap-2 cursor-pointer shadow-xl"
              >
                <span>Inquire For {division.name}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#sub-services"
                className="px-6 py-3.5 border border-[#7D7D7D] text-white font-mono text-xs uppercase tracking-wider hover:border-white transition-colors"
              >
                Explore Capabilities ↓
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-Services Block */}
      <section className="py-20 sm:py-28 bg-[#0a0a0a] border-b border-[#4D4D4D]/60" id="sub-services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-white" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#B0B0B0]">
                Disciplines & Core Offerings
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-heading font-black text-white uppercase">
              {division.name} Capabilities
            </h2>
            <p className="text-xs sm:text-sm font-mono text-[#7D7D7D]">
              Exact service scope calibrated with industry-grade equipment and specialized operators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {division.subServices.map((sub, sIdx) => (
              <div
                key={sIdx}
                className="p-8 bg-black border border-[#333333] hover:border-white transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#262626]">
                    <span className="text-xs font-mono text-[#7D7D7D] group-hover:text-white">
                      {division.number}.0{sIdx + 1}
                    </span>
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 border border-[#4D4D4D] text-[#B0B0B0]">
                      Active Discipline
                    </span>
                  </div>

                  <h3 className="text-xl font-heading font-black text-white uppercase tracking-tight mb-2 group-hover:text-white">
                    {sub.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#B0B0B0] leading-relaxed mb-6">
                    {sub.shortDesc}
                  </p>
                </div>

                {sub.deliverables && (
                  <div className="pt-4 border-t border-[#262626] space-y-2">
                    <span className="text-[10px] font-mono uppercase text-[#7D7D7D] tracking-wider block">
                      Deliverables:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {sub.deliverables.map((item, dIdx) => (
                        <span
                          key={dIdx}
                          className="text-[10px] font-mono uppercase px-2 py-0.5 bg-[#111111] text-[#B0B0B0] border border-[#333333]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Division Specific Gallery */}
      <section className="py-20 sm:py-28 bg-black border-b border-[#4D4D4D]/60" id="gallery">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#B0B0B0] block mb-1">
                Visual Proof & Stills
              </span>
              <h2 className="text-2xl sm:text-4xl font-heading font-black text-white uppercase">
                {division.name} Gallery
              </h2>
            </div>
            <span className="text-xs font-mono text-[#7D7D7D]">
              [Hover any frame for full color chroma]
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {division.galleryImages.map((img, gIdx) => (
              <div
                key={gIdx}
                className="group relative bg-[#111111] border border-[#333333] hover:border-white transition-all overflow-hidden"
              >
                <div className="relative aspect-[4/3] bg-black">
                  <Image
                    src={img.url}
                    alt={img.caption}
                    fill
                    className="object-cover arcc-media-img group-hover:scale-105 transition-all duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 px-2 py-0.5 bg-black/80 border border-[#4D4D4D] text-[10px] font-mono text-white">
                    {img.category}
                  </div>
                </div>
                <div className="p-4 bg-[#0a0a0a] flex items-center justify-between text-xs font-mono">
                  <span className="text-white font-bold">{img.caption}</span>
                  <span className="text-[#7D7D7D]">#{gIdx + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Division Tailored Process */}
      <section className="py-20 sm:py-28 bg-[#050505] border-b border-[#4D4D4D]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-white" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#B0B0B0]">
                Standard Operating Procedure
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-heading font-black text-white uppercase">
              How We Execute {division.name}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {division.processSteps.map((step) => (
              <div
                key={step.step}
                className="p-6 bg-black border border-[#333333] hover:border-white transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono font-bold bg-white text-black px-2 py-0.5 mb-4 inline-block">
                    PHASE {step.step}
                  </span>
                  <h3 className="text-base font-heading font-black text-white uppercase mb-2">
                    {step.title}
                  </h3>
                </div>
                <p className="text-xs text-[#B0B0B0] leading-relaxed pt-3 border-t border-[#262626]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-Link Row: Explore Our Other Divisions */}
      <section className="py-16 bg-[#000000] border-b border-[#4D4D4D]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#7D7D7D] block mb-1">
                Integrated Production Ecosystem
              </span>
              <h3 className="text-xl font-heading font-black text-white uppercase">
                Explore Our Other Divisions
              </h3>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {otherDivisions.map((other) => (
                <Link
                  key={other.id}
                  href={`/services/${other.slug}`}
                  className="px-4 py-2.5 bg-[#111111] border border-[#4D4D4D] text-xs font-mono uppercase text-[#B0B0B0] hover:text-black hover:bg-white hover:border-white transition-all flex items-center gap-2 group"
                >
                  <span className="text-[#7D7D7D] group-hover:text-black font-bold">
                    {other.number}
                  </span>
                  <span>{other.name}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA Block */}
      <section className="py-24 sm:py-32 bg-black text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#111111] border border-[#4D4D4D] text-[#B0B0B0] font-mono text-[10px] uppercase tracking-widest">
            <span>Direct {division.name} Producer Contact</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-heading font-black text-white uppercase tracking-tight">
            BOOK YOUR {division.name.toUpperCase()} SHOOT
          </h2>

          <p className="text-sm font-mono text-[#B0B0B0] max-w-lg mx-auto">
            Ready to start? Speak directly with our {division.name.toLowerCase()} supervisor for rapid estimates, gear packages, and booking dates.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setIsQuoteOpen(true)}
              className="w-full sm:w-auto px-8 py-4 bg-white text-black font-heading font-black text-xs uppercase tracking-widest hover:bg-[#B0B0B0] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xl"
            >
              <span>Request Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 border border-[#7D7D7D] text-white font-mono text-xs uppercase tracking-widest hover:border-white transition-colors"
            >
              Contact Studio Desk
            </Link>
          </div>
        </div>
      </section>

      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        initialDivision={division.slug}
      />
    </div>
  );
}
