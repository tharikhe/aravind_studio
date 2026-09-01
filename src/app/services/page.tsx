import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Camera, Video, Mic, Film, Sparkles, Layers } from "lucide-react";
import { DIVISIONS } from "@/data/divisions";

export const metadata: Metadata = {
  title: "Production Divisions & Services — ARCC Media Production",
  description: "Explore all six integrated production pillars at ARCC: Photography, Film & Video, Events, Creative Direction, Post-Production, and Studio Rental.",
};

export default function ServicesIndexPage() {
  const divisionIcons: Record<string, React.ReactNode> = {
    photography: <Camera className="w-6 h-6" />,
    "film-and-video": <Video className="w-6 h-6" />,
    events: <Sparkles className="w-6 h-6" />,
    creative: <Mic className="w-6 h-6" />,
    "post-production": <Layers className="w-6 h-6" />,
    studio: <Film className="w-6 h-6" />,
  };

  return (
    <main className="bg-black min-h-screen pt-28 sm:pt-36 pb-24 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-white" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#B0B0B0]">
              Full Capability Catalog
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-heading font-black text-white uppercase tracking-tight">
            PRODUCTION DIVISIONS
          </h1>
          <p className="text-base sm:text-lg font-mono text-[#B0B0B0] leading-relaxed">
            Six standalone departments, unified by a single vision and streamlined production infrastructure.
          </p>
        </div>

        {/* Divisions Detailed Stack */}
        <div className="space-y-12">
          {DIVISIONS.map((div) => (
            <div
              key={div.id}
              className="bg-[#0a0a0a] border border-[#333333] hover:border-white p-8 sm:p-12 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center group"
            >
              {/* Left Info (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-3xl sm:text-4xl font-heading font-light text-[#7D7D7D] group-hover:text-white transition-colors">
                    {div.number}
                  </span>
                  <div className="p-3 bg-black border border-[#4D4D4D] text-[#B0B0B0] group-hover:text-white group-hover:border-white transition-all">
                    {divisionIcons[div.id]}
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl font-heading font-black text-white uppercase mb-2">
                    {div.name}
                  </h2>
                  <p className="text-xs sm:text-sm font-mono text-white/80">
                    {div.tagline}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[#B0B0B0] leading-relaxed">
                  {div.shortDescription}
                </p>

                {/* Sub-services pills */}
                <div className="space-y-2 pt-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#7D7D7D] block">
                    Specialized Disciplines:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {div.subServices.map((sub, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-3 py-1 bg-black border border-[#333333] text-xs font-mono text-[#B0B0B0]"
                      >
                        {sub.name}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <Link
                    href={`/services/${div.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-heading font-bold text-xs uppercase tracking-widest hover:bg-[#B0B0B0] transition-colors"
                  >
                    <span>View Division Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Right Media Preview (5 cols) */}
              <div className="lg:col-span-5 relative aspect-[16/10] bg-black border border-[#4D4D4D] overflow-hidden">
                <Image
                  src={div.heroImage}
                  alt={div.name}
                  fill
                  className="object-cover arcc-media-img group-hover:scale-105 transition-all duration-700"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
