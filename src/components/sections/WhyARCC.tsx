import React from "react";
import { WHY_ARCC } from "@/data/projects";

export default function WhyARCC() {
  return (
    <section className="py-24 sm:py-32 bg-black border-t border-[#4D4D4D]/60 relative" id="why-arcc">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-white" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#B0B0B0]">
              The Production Advantage
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-black text-white uppercase tracking-tight">
            WHY ARCC
          </h2>
          <p className="text-sm sm:text-base text-[#B0B0B0] font-mono leading-relaxed">
            Engineered to remove friction, protect your creative vision, and deliver broadcast-grade results without juggling disconnected agencies.
          </p>
        </div>

        {/* Numbered List 01-06 (3 cols desktop, 2 tablet, 1 mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_ARCC.map((item) => (
            <div
              key={item.number}
              className="p-8 bg-[#0a0a0a] border border-[#333333] hover:border-white transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-baseline justify-between mb-6 pb-4 border-b border-[#262626]">
                  <span className="text-4xl font-heading font-light text-[#7D7D7D] group-hover:text-white transition-colors">
                    {item.number}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#7D7D7D]">
                    ADVANTAGE // {item.number}
                  </span>
                </div>

                <h3 className="text-lg font-heading font-black text-white uppercase tracking-tight mb-3 group-hover:text-white">
                  {item.microHeadline}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-[#B0B0B0] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
