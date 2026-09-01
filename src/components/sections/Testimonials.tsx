"use client";

import React, { useState } from "react";
import { Star, ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { TESTIMONIALS, TESTIMONIAL_STATS } from "@/data/testimonials";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="py-24 sm:py-32 bg-[#050505] border-t border-[#4D4D4D]/60 relative overflow-hidden" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header & Stats Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-white" />
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#B0B0B0]">
                Client Endorsements & Track Record
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-black text-white uppercase tracking-tight">
              TESTIMONIALS
            </h2>
            <p className="text-sm sm:text-base text-[#B0B0B0] font-mono leading-relaxed">
              Trusted by global lifestyle brands, technology leaders, indie artists, and Fortune 500 enterprises.
            </p>
          </div>

          {/* Rating Badge */}
          <div className="flex items-center gap-6 p-5 bg-black border border-[#333333]">
            <div>
              <div className="flex items-center gap-1 mb-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-white text-white" />
                ))}
              </div>
              <span className="text-xl font-heading font-black text-white block">
                {TESTIMONIAL_STATS.averageRating} / 5.0
              </span>
            </div>
            <div className="border-l border-[#333333] pl-6 text-xs font-mono text-[#7D7D7D]">
              <span className="text-white font-bold block">{TESTIMONIAL_STATS.totalReviews}</span>
              <span>VERIFIED REVIEWS</span>
            </div>
          </div>
        </div>

        {/* Carousel Card */}
        <div className="relative bg-black border border-[#4D4D4D] p-8 sm:p-14 transition-all duration-300">
          <Quote className="w-12 h-12 text-[#333333] mb-6" />

          {/* Quote Text */}
          <blockquote className="text-xl sm:text-2xl md:text-3xl font-heading font-medium text-white leading-relaxed mb-10 max-w-4xl">
            &ldquo;{current.quote}&rdquo;
          </blockquote>

          {/* Client Metadata & Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-8 border-t border-[#333333]">
            <div>
              <h3 className="text-base sm:text-lg font-heading font-black text-white uppercase">
                {current.clientName}
              </h3>
              <p className="text-xs sm:text-sm font-mono text-[#B0B0B0] mt-0.5">
                {current.role} — <span className="text-white">{current.company}</span>
              </p>
              <div className="inline-block mt-2 px-2.5 py-0.5 bg-[#111111] border border-[#333333] text-[10px] font-mono uppercase tracking-wider text-[#B0B0B0]">
                Scope: {current.projectType}
              </div>
            </div>

            {/* Carousel Navigation Buttons */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-[#7D7D7D] mr-2">
                0{currentIndex + 1} / 0{TESTIMONIALS.length}
              </span>
              <button
                onClick={handlePrev}
                className="w-12 h-12 border border-[#7D7D7D] hover:border-white text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-12 h-12 border border-[#7D7D7D] hover:border-white text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Next testimonial"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
