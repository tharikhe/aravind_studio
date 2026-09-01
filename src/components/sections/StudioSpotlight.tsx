"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Grid, Mic, Video, Monitor, Wind, Wifi, Coffee, Lock } from "lucide-react";
import { STUDIO_AMENITIES, STUDIO_SPECS } from "@/data/studioInfo";
import QuoteModal from "@/components/QuoteModal";

export default function StudioSpotlight() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const amenityIcons: Record<string, React.ReactNode> = {
    grid: <Grid className="w-4 h-4" />,
    video: <Video className="w-4 h-4" />,
    mic: <Mic className="w-4 h-4" />,
    monitor: <Monitor className="w-4 h-4" />,
    wind: <Wind className="w-4 h-4" />,
    wifi: <Wifi className="w-4 h-4" />,
    coffee: <Coffee className="w-4 h-4" />,
    lock: <Lock className="w-4 h-4" />,
  };

  return (
    <>
      <section className="py-24 sm:py-32 bg-black border-t border-[#4D4D4D]/60 relative overflow-hidden" id="studio">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Callout Grid: 2 Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            {/* Left: Studio Vision & Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-white" />
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#B0B0B0]">
                  Division 06 // Production Facility
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-heading font-black text-white uppercase tracking-tight leading-none">
                FLAGSHIP STUDIO & SOUND STAGE
              </h2>

              <p className="text-sm sm:text-base text-[#B0B0B0] font-mono leading-relaxed max-w-xl">
                A 4,500 sq ft private production campus featuring an infinity cyclorama, soundproof multi-mic podcast lounge, green screen stage, and pre-rigged lighting grid.
              </p>

              {/* Specs Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 bg-[#111111] border border-[#333333]">
                  <span className="text-[10px] font-mono text-[#7D7D7D] uppercase block">STAGE SIZE</span>
                  <span className="text-sm font-heading font-bold text-white uppercase">{STUDIO_SPECS.totalArea}</span>
                </div>
                <div className="p-3 bg-[#111111] border border-[#333333]">
                  <span className="text-[10px] font-mono text-[#7D7D7D] uppercase block">CEILING CLEAR</span>
                  <span className="text-sm font-heading font-bold text-white uppercase">{STUDIO_SPECS.ceilingHeight}</span>
                </div>
                <div className="p-3 bg-[#111111] border border-[#333333]">
                  <span className="text-[10px] font-mono text-[#7D7D7D] uppercase block">POWER</span>
                  <span className="text-sm font-heading font-bold text-white uppercase">200A CAMLOCK</span>
                </div>
              </div>

              {/* Studio Actions */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => setIsQuoteOpen(true)}
                  className="px-8 py-4 bg-white text-black font-heading font-black text-xs uppercase tracking-widest hover:bg-[#B0B0B0] transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Rent Our Studio</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <Link
                  href="/services/studio"
                  className="px-8 py-4 border border-[#7D7D7D] text-white font-heading font-bold text-xs uppercase tracking-widest hover:border-white transition-colors text-center"
                >
                  View Stage Blueprint
                </Link>
              </div>
            </div>

            {/* Right: Studio Imagery Composite */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] bg-[#111111] border border-[#4D4D4D] overflow-hidden group">
                <Image
                  src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1200&auto=format&fit=crop"
                  alt="ARCC Sound Stage and Cyclorama"
                  fill
                  className="object-cover arcc-media-img group-hover:scale-105 transition-all duration-700"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute top-3 left-3 px-2 py-1 bg-black/80 border border-[#7D7D7D] text-[10px] font-mono text-white">
                  STAGE 01 // SOUNDPROOF SUITE
                </div>
              </div>
            </div>
          </div>

          {/* Amenities Grid */}
          <div className="border-t border-[#333333] pt-12">
            <div className="mb-6 flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-widest text-[#B0B0B0]">
                Included Stage Amenities & Equipment
              </span>
              <span className="text-xs font-mono text-[#7D7D7D]">8 INCLUDED FEATURES</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {STUDIO_AMENITIES.map((amenity) => (
                <div
                  key={amenity.id}
                  className="p-5 bg-[#0a0a0a] border border-[#262626] hover:border-white transition-all group"
                >
                  <div className="flex items-center gap-2.5 mb-2 text-white group-hover:text-white">
                    <div className="p-1.5 bg-[#111111] border border-[#4D4D4D] text-[#B0B0B0] group-hover:text-white group-hover:border-white transition-colors">
                      {amenityIcons[amenity.iconName]}
                    </div>
                    <h4 className="text-sm font-heading font-black uppercase text-white">
                      {amenity.name}
                    </h4>
                  </div>
                  <p className="text-xs text-[#B0B0B0] leading-relaxed">
                    {amenity.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote modal with preselected studio division */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        initialDivision="studio"
      />
    </>
  );
}
