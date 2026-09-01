import React from "react";
import { PROCESS_TIMELINE } from "@/data/projects";
import { FileText, Mic, Camera, Layers, CheckCircle } from "lucide-react";

export default function ProcessTimeline() {
  const stepIcons = [
    <FileText key="1" className="w-5 h-5" />,
    <Mic key="2" className="w-5 h-5" />,
    <Camera key="3" className="w-5 h-5" />,
    <Layers key="4" className="w-5 h-5" />,
    <CheckCircle key="5" className="w-5 h-5" />,
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#050505] border-t border-[#4D4D4D]/60 relative" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-white" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#B0B0B0]">
              Proven Production Pipeline
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-black text-white uppercase tracking-tight">
            THE PROCESS
          </h2>
          <p className="text-sm sm:text-base text-[#B0B0B0] font-mono leading-relaxed">
            From initial brainstorm to final broadcast encode, our 5-phase workflow maintains razor-sharp momentum and absolute clarity.
          </p>
        </div>

        {/* 5-Step Horizontal Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
          {PROCESS_TIMELINE.map((item, idx) => (
            <div
              key={item.step}
              className="relative p-6 bg-black border border-[#333333] hover:border-white transition-all duration-300 group flex flex-col justify-between"
            >
              {/* Step Header */}
              <div>
                <div className="flex items-center justify-between mb-6 pb-3 border-b border-[#262626]">
                  <span className="text-xs font-mono font-bold text-white bg-white text-black px-2 py-0.5">
                    STEP {item.step}
                  </span>
                  <div className="p-2 border border-[#4D4D4D] text-[#B0B0B0] group-hover:text-white group-hover:border-white transition-colors">
                    {stepIcons[idx]}
                  </div>
                </div>

                <h3 className="text-base font-heading font-black text-white uppercase tracking-tight mb-2">
                  {item.title}
                </h3>

                <p className="text-xs text-[#B0B0B0] leading-relaxed mb-4">
                  {item.summary}
                </p>
              </div>

              {/* Step Detail Footer */}
              <div className="pt-3 border-t border-[#262626] text-[11px] text-[#7D7D7D] font-mono leading-normal">
                {item.details}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
