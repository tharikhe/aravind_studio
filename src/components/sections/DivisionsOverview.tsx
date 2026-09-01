import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Camera, Video, Mic, Film, Sparkles, Layers } from "lucide-react";
import { DIVISIONS } from "@/data/divisions";

export default function DivisionsOverview() {
  const divisionIcons: Record<string, React.ReactNode> = {
    photography: <Camera className="w-5 h-5" />,
    "film-and-video": <Video className="w-5 h-5" />,
    events: <Sparkles className="w-5 h-5" />,
    creative: <Mic className="w-5 h-5" />,
    "post-production": <Layers className="w-5 h-5" />,
    studio: <Film className="w-5 h-5" />,
  };

  return (
    <section className="py-24 sm:py-32 bg-black relative border-t border-[#4D4D4D]/60" id="divisions">
      {/* Background Ghost Motif Watermark */}
      <div className="absolute top-12 right-6 sm:right-12 ghost-number text-8xl sm:text-9xl pointer-events-none">
        01-06
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-white" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#B0B0B0]">
              Complete End-to-End Capabilities
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-black text-white uppercase tracking-tight">
            SIX DIVISIONS. ONE ROOF.
          </h2>
          <p className="text-sm sm:text-base text-[#B0B0B0] font-mono leading-relaxed">
            Eliminate vendor fragmentation. Every discipline is equipped with dedicated leads, cinema-calibrated hardware, and seamless internal hand-offs.
          </p>
        </div>

        {/* 3x2 Desktop / 1-col Mobile Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {DIVISIONS.map((div) => (
            <Link
              key={div.id}
              href={`/services/${div.slug}`}
              className="group relative bg-[#4D4D4D]/25 border border-[#4D4D4D] p-8 sm:p-10 flex flex-col justify-between min-h-[380px] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-white hover:bg-[#4D4D4D]/40"
            >
              {/* Background Thumbnail reveal on Hover */}
              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none">
                <Image
                  src={div.heroImage}
                  alt={div.name}
                  fill
                  className="object-cover arcc-media-img grayscale group-hover:grayscale-0"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
              </div>

              {/* Card Top: Number & Icon */}
              <div className="relative z-10 flex items-start justify-between">
                <span className="text-4xl sm:text-5xl font-heading font-light text-white/40 group-hover:text-white transition-colors">
                  {div.number}
                </span>
                <div className="p-3 bg-black/60 border border-[#7D7D7D] text-[#B0B0B0] group-hover:text-white group-hover:border-white transition-all">
                  {divisionIcons[div.id]}
                </div>
              </div>

              {/* Card Middle: Division Name, Description & Sub-Service Tags */}
              <div className="relative z-10 my-6 space-y-4">
                <h3 className="text-2xl font-heading font-black text-white uppercase tracking-tight group-hover:text-white transition-colors">
                  {div.name}
                </h3>

                <p className="text-xs sm:text-sm text-[#B0B0B0] leading-relaxed">
                  {div.shortDescription}
                </p>

                {/* Sub-services Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {div.subServices.map((sub, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-1 text-[10px] font-mono uppercase tracking-wider text-[#B0B0B0] border border-[#7D7D7D]/50 bg-black/40 group-hover:border-[#B0B0B0] group-hover:text-white transition-colors"
                    >
                      {sub.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Bottom: Arrow link */}
              <div className="relative z-10 pt-4 border-t border-[#4D4D4D]/70 flex items-center justify-between text-xs font-mono uppercase tracking-widest text-[#B0B0B0] group-hover:text-white transition-colors">
                <span>Explore Division</span>
                <span className="w-8 h-8 flex items-center justify-center bg-white text-black font-black transition-transform group-hover:translate-x-1">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
