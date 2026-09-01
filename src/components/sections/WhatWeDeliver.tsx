import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { WHAT_WE_DELIVER } from "@/data/projects";

export default function WhatWeDeliver() {
  return (
    <section className="py-24 sm:py-32 bg-[#080808] border-t border-[#4D4D4D]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-white" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#B0B0B0]">
              Deliverables & Core Outputs
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-black text-white uppercase tracking-tight">
            WHAT WE DELIVER
          </h2>
          <p className="text-sm sm:text-base text-[#B0B0B0] font-mono leading-relaxed">
            High-precision creative outputs engineered with speed, consistency, and uncompromising production value.
          </p>
        </div>

        {/* 8-Card Image-Free Grid (4 cols desktop, 2 tablet, 1 mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {WHAT_WE_DELIVER.map((card, idx) => (
            <Link
              key={idx}
              href={`/services/${card.divisionSlug}`}
              className="group bg-[#000000] border border-[#333333] hover:border-white p-7 flex flex-col justify-between min-h-[220px] transition-all duration-300 hover:-translate-y-1 hover:bg-[#111111]"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-[#7D7D7D] group-hover:text-white transition-colors">
                    DIV {card.divisionNumber}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#7D7D7D] group-hover:text-white transition-colors group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <h3 className="text-lg font-heading font-black text-white uppercase tracking-tight mb-2">
                  {card.microTitle}
                </h3>
              </div>

              <p className="text-xs text-[#B0B0B0] leading-relaxed pt-3 border-t border-[#262626]">
                {card.sentence}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
