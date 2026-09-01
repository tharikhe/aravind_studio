"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play, Eye, ArrowUpRight, Filter } from "lucide-react";
import { FEATURED_PROJECTS, Project } from "@/data/projects";
import { DIVISIONS } from "@/data/divisions";
import VideoModal from "@/components/VideoModal";

export default function WorkPage() {
  const [selectedDivisionFilter, setSelectedDivisionFilter] = useState("all");
  const [activeVideoProject, setActiveVideoProject] = useState<Project | null>(null);

  const filteredProjects =
    selectedDivisionFilter === "all"
      ? FEATURED_PROJECTS
      : FEATURED_PROJECTS.filter((p) => p.divisionId === selectedDivisionFilter);

  return (
    <>
      <main className="bg-black min-h-screen pt-28 sm:pt-36 pb-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mb-12 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-white" />
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#B0B0B0]">
                Curated Production Archive
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-heading font-black text-white uppercase tracking-tight">
              SELECTED WORK
            </h1>
            <p className="text-sm sm:text-base font-mono text-[#B0B0B0] leading-relaxed">
              Explore our recent commercial brand films, editorial stills, multi-cam live broadcasts, and studio productions.
            </p>
          </div>

          {/* Division Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-6 mb-12 no-scrollbar border-b border-[#333333]">
            <button
              onClick={() => setSelectedDivisionFilter("all")}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                selectedDivisionFilter === "all"
                  ? "bg-white text-black font-bold"
                  : "bg-[#111111] text-[#B0B0B0] border border-[#333333] hover:border-white hover:text-white"
              }`}
            >
              All Work ({FEATURED_PROJECTS.length})
            </button>
            {DIVISIONS.map((div) => {
              const count = FEATURED_PROJECTS.filter((p) => p.divisionId === div.id).length;
              return (
                <button
                  key={div.id}
                  onClick={() => setSelectedDivisionFilter(div.id)}
                  className={`px-4 py-2 text-xs font-mono uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                    selectedDivisionFilter === div.id
                      ? "bg-white text-black font-bold"
                      : "bg-[#111111] text-[#B0B0B0] border border-[#333333] hover:border-white hover:text-white"
                  }`}
                >
                  <span className="text-[#7D7D7D] mr-1.5">{div.number}</span>
                  {div.name} {count > 0 ? `(${count})` : ""}
                </button>
              );
            })}
          </div>

          {/* Projects Masonry / Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => {
                  if (project.videoUrl) setActiveVideoProject(project);
                }}
                className="group bg-[#0a0a0a] border border-[#333333] hover:border-white transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-black">
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    className="object-cover arcc-media-img group-hover:scale-105 transition-all duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

                  <div className="absolute top-3 inset-x-3 flex items-center justify-between text-[10px] font-mono text-white/90">
                    <span className="bg-black/80 px-2 py-0.5 border border-[#4D4D4D]">
                      {project.projectNumber}
                    </span>
                    <span className="bg-black/80 px-2 py-0.5 border border-[#4D4D4D]">
                      {project.categoryTag}
                    </span>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110">
                      {project.videoUrl ? (
                        <Play className="w-6 h-6 ml-0.5 fill-black" />
                      ) : (
                        <Eye className="w-6 h-6" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#7D7D7D]">
                    <span>{project.divisionName}</span>
                    <span>{project.year}</span>
                  </div>

                  <h2 className="text-base sm:text-lg font-heading font-black text-white uppercase group-hover:text-white line-clamp-1">
                    {project.title}
                  </h2>

                  <p className="text-xs text-[#B0B0B0] line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="pt-3 border-t border-[#262626] flex items-center justify-between text-xs font-mono text-[#7D7D7D]">
                    <span>Client: <strong className="text-white font-normal">{project.client}</strong></span>
                    <span className="text-white group-hover:translate-x-1 transition-transform">
                      {project.videoUrl ? "Play Reel" : "Inspect"} →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Video Modal */}
      <VideoModal
        isOpen={!!activeVideoProject}
        onClose={() => setActiveVideoProject(null)}
        videoUrl={activeVideoProject?.videoUrl}
        title={activeVideoProject?.title || ""}
        category={activeVideoProject?.categoryTag}
      />
    </>
  );
}
