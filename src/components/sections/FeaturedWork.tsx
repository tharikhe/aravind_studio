"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Play, Eye, ArrowUpRight } from "lucide-react";
import { FEATURED_PROJECTS, Project } from "@/data/projects";
import VideoModal from "@/components/VideoModal";

export default function FeaturedWork() {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [selectedVideoProject, setSelectedVideoProject] = useState<Project | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -420 : 420;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <>
      <section className="py-24 sm:py-32 bg-black relative border-t border-[#4D4D4D]/60 overflow-hidden" id="work">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header & Controls */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="space-y-4 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-white" />
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#B0B0B0]">
                  Selected Case Studies & Stills
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-heading font-black text-white uppercase tracking-tight">
                FEATURED WORK
              </h2>
              <p className="text-xs sm:text-sm font-mono text-[#B0B0B0]">
                Desaturated at rest. Hover to bring stories to life.
              </p>
            </div>

            {/* Navigation & Full Portfolio Link */}
            <div className="flex items-center gap-4">
              <Link
                href="/work"
                className="text-xs font-mono uppercase tracking-widest text-[#B0B0B0] hover:text-white flex items-center gap-1.5 border-b border-[#7D7D7D] pb-1 hover:border-white transition-colors"
              >
                View Full Portfolio <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => scroll("left")}
                  className="w-10 h-10 border border-[#7D7D7D] hover:border-white text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Scroll featured work left"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => scroll("right")}
                  className="w-10 h-10 border border-[#7D7D7D] hover:border-white text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Scroll featured work right"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Draggable / Scrollable Project Carousel */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-8 pt-2 no-scrollbar snap-x snap-mandatory cursor-grab active:cursor-grabbing"
          >
            {FEATURED_PROJECTS.map((project) => (
              <div
                key={project.id}
                onClick={() => {
                  if (project.videoUrl) setSelectedVideoProject(project);
                }}
                className="group flex-none w-[310px] sm:w-[380px] md:w-[440px] bg-[#111111] border border-[#4D4D4D] snap-start overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-white cursor-pointer"
              >
                {/* Media Frame with Signature Grayscale-to-Color Interaction */}
                <div className="relative aspect-[16/10] overflow-hidden bg-black">
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    className="object-cover arcc-media-img group-hover:scale-105 transition-all duration-700"
                    sizes="(max-width: 768px) 320px, 440px"
                  />

                  {/* Dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

                  {/* Project Number & Year */}
                  <div className="absolute top-3 inset-x-3 flex items-center justify-between text-[11px] font-mono uppercase tracking-widest text-white/90 drop-shadow">
                    <span className="bg-black/60 px-2 py-0.5 border border-[#4D4D4D]">
                      {project.projectNumber}
                    </span>
                    <span className="bg-black/60 px-2 py-0.5 border border-[#4D4D4D]">
                      {project.year}
                    </span>
                  </div>

                  {/* Play or View Overlay Indicator */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110">
                      {project.videoUrl ? (
                        <Play className="w-6 h-6 ml-1 fill-black" />
                      ) : (
                        <Eye className="w-6 h-6" />
                      )}
                    </div>
                  </div>

                  {/* Duration / Format Tag */}
                  {project.duration && (
                    <div className="absolute bottom-3 right-3 text-[10px] font-mono uppercase px-2 py-0.5 bg-black/80 border border-[#7D7D7D] text-[#B0B0B0]">
                      {project.duration}
                    </div>
                  )}
                </div>

                {/* Project Info Card Details */}
                <div className="p-6 space-y-3 bg-[#0a0a0a]">
                  <div className="flex items-center justify-between text-[11px] font-mono uppercase text-[#7D7D7D]">
                    <span>{project.divisionName}</span>
                    <span className="text-[#B0B0B0] border border-[#333333] px-2 py-0.5">
                      {project.categoryTag}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-heading font-black text-white uppercase group-hover:text-white transition-colors line-clamp-1">
                    {project.title}
                  </h3>

                  <p className="text-xs text-[#B0B0B0] line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="pt-3 border-t border-[#333333] flex items-center justify-between text-[11px] font-mono text-[#7D7D7D]">
                    <span>Client: <strong className="text-white font-normal">{project.client}</strong></span>
                    <span className="text-white group-hover:translate-x-1 transition-transform flex items-center gap-1">
                      {project.videoUrl ? "Play Reel" : "View Stills"} →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal if clicked */}
      <VideoModal
        isOpen={!!selectedVideoProject}
        onClose={() => setSelectedVideoProject(null)}
        videoUrl={selectedVideoProject?.videoUrl}
        title={selectedVideoProject?.title || ""}
        category={selectedVideoProject?.categoryTag}
      />
    </>
  );
}
