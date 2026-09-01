"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play, Film } from "lucide-react";
import { VIDEO_SHOWCASE, VideoShowcaseItem } from "@/data/projects";
import VideoModal from "@/components/VideoModal";

export default function FilmShowcase() {
  const [selectedVideo, setSelectedVideo] = useState<VideoShowcaseItem | null>(null);

  return (
    <>
      <section className="py-24 sm:py-32 bg-black border-t border-[#4D4D4D]/60 relative" id="films">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mb-16 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-white" />
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#B0B0B0]">
                Motion Picture & Cinema Suite
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-black text-white uppercase tracking-tight">
              FILM & VIDEO SHOWCASE
            </h2>
            <p className="text-sm sm:text-base text-[#B0B0B0] font-mono leading-relaxed">
              Cinema-grade cameras, anamorphic optics, calibrated motion control, and narrative pacing engineered for maximum conversion and cultural resonance.
            </p>
          </div>

          {/* 6 Video Thumbnails Grid (16:9) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {VIDEO_SHOWCASE.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedVideo(item)}
                className="group bg-[#111111] border border-[#4D4D4D] hover:border-white transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between"
              >
                {/* 16:9 Thumbnail Frame with Play Overlay */}
                <div className="relative aspect-video overflow-hidden bg-black">
                  <Image
                    src={item.thumbnailUrl}
                    alt={item.title}
                    fill
                    className="object-cover arcc-media-img group-hover:scale-105 transition-all duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  {/* Dark Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

                  {/* Top Tag & Duration */}
                  <div className="absolute top-3 inset-x-3 flex items-center justify-between">
                    <span className="px-2 py-0.5 bg-black/80 text-[10px] font-mono uppercase tracking-wider text-white border border-[#4D4D4D]">
                      {item.tag}
                    </span>
                    <span className="px-2 py-0.5 bg-black/80 text-[10px] font-mono uppercase tracking-wider text-[#B0B0B0] border border-[#4D4D4D]">
                      {item.duration}
                    </span>
                  </div>

                  {/* Center Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-115 group-hover:bg-white">
                      <Play className="w-6 h-6 ml-0.5 fill-black" />
                    </div>
                  </div>
                </div>

                {/* Video Meta info */}
                <div className="p-5 bg-[#0a0a0a] space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#7D7D7D] block">
                    CLIENT: {item.client}
                  </span>
                  <h3 className="text-base font-heading font-black text-white uppercase group-hover:text-white transition-colors line-clamp-1">
                    {item.title}
                  </h3>
                  <div className="pt-2 flex items-center justify-between text-xs font-mono text-[#B0B0B0]">
                    <span className="text-[11px] text-[#7D7D7D]">4K MASTER / 24FPS</span>
                    <span className="text-white group-hover:translate-x-1 transition-transform">
                      Watch Reel →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Lightbox Modal */}
      <VideoModal
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
        videoUrl={selectedVideo?.videoUrl}
        title={selectedVideo?.title || ""}
        category={selectedVideo?.tag}
      />
    </>
  );
}
