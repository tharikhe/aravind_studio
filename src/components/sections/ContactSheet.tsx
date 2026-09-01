"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CONTACT_SHEET_FRAMES, ContactSheetFrame } from "@/data/projects";
import { Maximize2, X } from "lucide-react";

export default function ContactSheet() {
  const [activeFrame, setActiveFrame] = useState<ContactSheetFrame | null>(null);

  return (
    <>
      <section className="py-20 sm:py-28 bg-[#050505] border-t border-[#4D4D4D]/60 relative overflow-hidden" id="contact-sheet">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Film Leader Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-[#333333]">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-white" />
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-white font-bold block">
                  CONTACT SHEET // ARCHIVE ROLL #ARCC-400TX
                </span>
                <span className="text-[10px] font-mono text-[#7D7D7D] uppercase">
                  RAW 35MM FRAMES • CALIBRATED MASTER PROOFS
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4 text-[11px] font-mono text-[#7D7D7D]">
              <span className="hidden md:inline">ISO 400 • MONOCHROME BASE</span>
              <span className="px-2 py-0.5 border border-[#4D4D4D] text-[#B0B0B0]">
                12 EXPOSURES
              </span>
            </div>
          </div>

          {/* Film Sprockets Top Bar */}
          <div className="w-full h-3 mb-3 bg-repeating-linear-gradient flex items-center justify-between px-2 opacity-40">
            {Array.from({ length: 24 }).map((_, i) => (
              <div key={i} className="w-2.5 h-2 bg-white/30 rounded-[1px]" />
            ))}
          </div>

          {/* Dense Contact Sheet Grid (2 cols mobile, 3 tablet, 6 desktop) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 p-4 bg-[#0a0a0a] border border-[#333333]">
            {CONTACT_SHEET_FRAMES.map((frame) => (
              <div
                key={frame.id}
                onClick={() => setActiveFrame(frame)}
                className="group relative bg-black p-2 border border-[#262626] hover:border-white transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                {/* Frame Image */}
                <div className="relative aspect-[3/2] overflow-hidden bg-[#111111] mb-2">
                  <Image
                    src={frame.imageUrl}
                    alt={frame.title}
                    fill
                    className="object-cover arcc-media-img transition-all duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
                  />

                  {/* Frame Hover Overlay with maximize icon */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Maximize2 className="w-4 h-4 text-white drop-shadow" />
                  </div>
                </div>

                {/* Film Edge Notation */}
                <div className="flex items-center justify-between text-[9px] font-mono uppercase text-[#7D7D7D] group-hover:text-white transition-colors">
                  <span className="font-bold">{frame.frameNumber}</span>
                  <span className="truncate max-w-[70px] text-[8px] text-[#B0B0B0]">
                    {frame.division}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Film Sprockets Bottom Bar */}
          <div className="w-full h-3 mt-3 bg-repeating-linear-gradient flex items-center justify-between px-2 opacity-40">
            {Array.from({ length: 24 }).map((_, i) => (
              <div key={i} className="w-2.5 h-2 bg-white/30 rounded-[1px]" />
            ))}
          </div>

          {/* Contact Sheet Caption */}
          <div className="pt-4 text-center">
            <p className="text-[11px] font-mono text-[#7D7D7D] uppercase tracking-widest">
              [Click any frame to inspect high-resolution still crop]
            </p>
          </div>
        </div>
      </section>

      {/* Frame Lightbox Modal */}
      {activeFrame && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          onClick={() => setActiveFrame(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-black border border-white p-4 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#4D4D4D]">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono uppercase text-white font-bold bg-white text-black px-2 py-0.5">
                  FRAME {activeFrame.frameNumber}
                </span>
                <span className="text-xs font-mono text-[#B0B0B0] uppercase">
                  {activeFrame.title} // {activeFrame.division}
                </span>
              </div>

              <button
                onClick={() => setActiveFrame(null)}
                className="p-1 text-[#7D7D7D] hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-[#111111]">
              <Image
                src={activeFrame.imageUrl}
                alt={activeFrame.title}
                fill
                className="object-contain"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>

            <div className="pt-4 flex items-center justify-between text-xs font-mono text-[#7D7D7D]">
              <span>ROLL: ARCC-400TX // ARCHIVE 2025</span>
              <span className="text-white">FULL COLOR RETOUCH VERIFIED</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
