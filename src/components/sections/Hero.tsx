"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, MessageSquare, Play, Camera, Film, Mic, Sparkles } from "lucide-react";
import { COMPANY_CONTACT } from "@/data/studioInfo";
import QuoteModal from "@/components/QuoteModal";

/*
  ALTERNATE HERO HEADLINES (for brand A/B testing):
  Option 1: "ONE STUDIO. EVERY STORY."
  Option 2: "CONCEPT TO SCREEN, END TO END."
  Option 3: "SIX DIVISIONS. ZERO VENDOR FRICTION."
*/

const HERO_BACKGROUNDS = [
  {
    url: "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=1800&auto=format&fit=crop",
    caption: "Division 02 // Cinema Principal Photography",
    tag: "Film & Video"
  },
  {
    url: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1800&auto=format&fit=crop",
    caption: "Division 01 // High Fashion Editorial Stills",
    tag: "Photography"
  },
  {
    url: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1800&auto=format&fit=crop",
    caption: "Division 06 // Flagship Acoustic Stage",
    tag: "Studio"
  },
  {
    url: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1800&auto=format&fit=crop",
    caption: "Division 03 // 4K Multi-Camera Live Stream",
    tag: "Events"
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  // Auto-advance hero background slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_BACKGROUNDS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section className="relative min-h-[92vh] flex flex-col justify-between pt-28 sm:pt-36 pb-8 bg-black overflow-hidden select-none">
        {/* Background Image Carousel with Dark Cinematic Overlay */}
        <div className="absolute inset-0 z-0">
          {HERO_BACKGROUNDS.map((bg, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                idx === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
              }`}
            >
              <Image
                src={bg.url}
                alt={bg.caption}
                fill
                priority={idx === 0}
                className="object-cover arcc-media-img brightness-[0.45] contrast-125"
                sizes="100vw"
              />
            </div>
          ))}

          {/* Gradients to blend into black seamlessly */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/80" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/40 to-black/90" />
        </div>

        {/* Hero Central Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-8">
          <div className="max-w-4xl space-y-6">
            {/* Eyebrow with status marker */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 bg-black/80 border border-[#4D4D4D] text-[#B0B0B0] font-mono text-[11px] uppercase tracking-[0.25em]">
              <span className="w-1.5 h-1.5 bg-white" />
              <span>END-TO-END MEDIA PRODUCTION</span>
              <span className="text-[#7D7D7D]">|</span>
              <span className="text-[#7D7D7D]">LOS ANGELES HQ</span>
            </div>

            {/* Main Punchy Geometric Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-black text-white leading-[0.92] tracking-tighter uppercase">
              ONE STUDIO.
              <br />
              <span className="text-white/90">EVERY STORY.</span>
            </h1>

            {/* Six Divisions Subheading in one breath */}
            <div className="pt-2">
              <p className="text-sm sm:text-base md:text-lg font-mono text-[#B0B0B0] max-w-2xl leading-relaxed tracking-wide">
                <span className="text-white font-medium">Photography</span> ·{" "}
                <span className="text-white font-medium">Film & Video</span> ·{" "}
                <span className="text-white font-medium">Events</span> ·{" "}
                <span className="text-white font-medium">Creative</span> ·{" "}
                <span className="text-white font-medium">Post-Production</span> ·{" "}
                <span className="text-white font-medium">Studio</span>
              </p>
              <p className="text-xs text-[#7D7D7D] font-mono uppercase tracking-widest mt-2">
                All six production pillars under one roof. No outsourcing. Zero vendor friction.
              </p>
            </div>

            {/* Dual CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => setIsQuoteOpen(true)}
                className="px-8 py-4 bg-white text-black font-heading font-black text-xs uppercase tracking-[0.2em] hover:bg-[#B0B0B0] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xl"
              >
                <span>Book a Shoot</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                href="/work"
                className="px-8 py-4 border border-[#7D7D7D] text-white font-heading font-bold text-xs uppercase tracking-[0.2em] hover:border-white hover:bg-white/5 transition-all text-center"
              >
                See Our Work
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Strip: Current Slide Tag + Direct Contact Strip */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-6 border-t border-[#4D4D4D]/50">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            {/* Slide Indicators */}
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-mono text-[#7D7D7D] uppercase tracking-widest">
                SLIDE 0{currentSlide + 1} / 0{HERO_BACKGROUNDS.length}
              </span>
              <div className="flex items-center gap-1.5">
                {HERO_BACKGROUNDS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    aria-label={`Jump to hero slide ${idx + 1}`}
                    className={`h-1 transition-all ${
                      idx === currentSlide ? "w-6 bg-white" : "w-2 bg-[#4D4D4D] hover:bg-[#7D7D7D]"
                    }`}
                  />
                ))}
              </div>
              <span className="text-[10px] font-mono text-[#B0B0B0] uppercase hidden sm:inline">
                [{HERO_BACKGROUNDS[currentSlide].tag}]
              </span>
            </div>

            {/* Click-to-call and WhatsApp Quick Contact Strip */}
            <div className="flex items-center gap-6 text-xs font-mono text-[#B0B0B0]">
              <a
                href={`tel:${COMPANY_CONTACT.phoneRaw}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-white" />
                <span className="hidden sm:inline">CALL:</span>
                <span>{COMPANY_CONTACT.phoneDisplay}</span>
              </a>

              <span className="text-[#4D4D4D]">|</span>

              <a
                href={`https://wa.me/${COMPANY_CONTACT.whatsappRaw}?text=${encodeURIComponent("Hi ARCC Media Production, I would like to book a shoot.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-white" />
                <span className="hidden sm:inline">WHATSAPP:</span>
                <span>{COMPANY_CONTACT.whatsappDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quote / Brief Modal */}
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </>
  );
}
