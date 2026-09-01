"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Camera, Film, Mic, Video } from "lucide-react";
import QuoteModal from "@/components/QuoteModal";

export default function ClosingCTA() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <>
      <section className="py-24 sm:py-36 bg-black border-t border-[#4D4D4D]/60 relative overflow-hidden text-center">
        {/* Background Subtle Motifs */}
        <div className="absolute inset-0 flex items-center justify-between px-8 sm:px-24 opacity-5 pointer-events-none">
          <Camera className="w-48 h-48 text-white" />
          <Film className="w-48 h-48 text-white" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#111111] border border-[#4D4D4D] text-[#B0B0B0] font-mono text-[11px] uppercase tracking-[0.25em]">
            <span className="w-1.5 h-1.5 bg-white" />
            <span>DIRECT PRODUCTION DISPATCH</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-heading font-black text-white uppercase tracking-tight leading-tight">
            READY TO BRING YOUR STORY TO LIFE?
          </h2>

          <p className="text-sm sm:text-base text-[#B0B0B0] font-mono max-w-xl mx-auto leading-relaxed">
            One team. Six core divisions. Zero vendor friction. Get an estimate and crew availability schedule within 2 hours.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setIsQuoteOpen(true)}
              className="w-full sm:w-auto px-10 py-4 bg-white text-black font-heading font-black text-xs uppercase tracking-widest hover:bg-[#B0B0B0] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-2xl"
            >
              <span>Book a Shoot</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setIsQuoteOpen(true)}
              className="w-full sm:w-auto px-10 py-4 border border-[#7D7D7D] text-white font-heading font-bold text-xs uppercase tracking-widest hover:border-white hover:bg-white/5 transition-colors cursor-pointer"
            >
              Get a Quote
            </button>
          </div>
        </div>
      </section>

      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </>
  );
}
