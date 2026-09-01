import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Camera, Video, Mic, Film, Sparkles, Layers, ShieldCheck, Zap, Award, CheckCircle } from "lucide-react";
import Logo from "@/components/Logo";

export const metadata: Metadata = {
  title: "About ARCC Media Production — Studio Manifesto & Heritage",
  description: "Learn about ARCC Media Production: an end-to-end creative studio uniting photography, film, live events, creative direction, post-production, and private sound stages under one roof.",
};

export default function AboutPage() {
  const values = [
    {
      num: "01",
      title: "No Vendor Fragmentation",
      desc: "We consolidated six specialized production disciplines into a singular, cohesive creative engine to eliminate communication breakdowns.",
    },
    {
      num: "02",
      title: "Cinema Hardware Sovereignty",
      desc: "We own and calibrate our cinema packages, anamorphic optics, lighting grids, and DaVinci color grading suites.",
    },
    {
      num: "03",
      title: "Speed Through Parallel Workflows",
      desc: "Our editors, sound designers, and colorists collaborate directly with directors on set for rapid iteration cycles.",
    },
    {
      num: "04",
      title: "Zero Compromise Aesthetics",
      desc: "Every frame, still, and audio cue is engineered to leave an indelible, visceral imprint on the viewer.",
    },
  ];

  return (
    <main className="bg-black min-h-screen pt-28 sm:pt-36 pb-24 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="max-w-4xl mb-20 space-y-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-white" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#B0B0B0]">
              Studio Manifesto // The ARCC Story
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-heading font-black text-white uppercase tracking-tight leading-[0.95]">
            ONE UNIFIED ENGINE.
            <br />
            ZERO VENDOR CHAOS.
          </h1>

          <p className="text-base sm:text-xl font-mono text-[#B0B0B0] leading-relaxed max-w-3xl">
            ARCC was founded on a simple truth: great creative vision gets diluted when split across six different agencies, contractors, and rental houses.
          </p>
        </div>

        {/* Brand Identity / Logo Story */}
        <div className="p-8 sm:p-14 bg-[#0a0a0a] border border-[#333333] mb-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 flex flex-col items-center justify-center p-8 bg-black border border-[#262626]">
            <Logo size="xl" isLink={false} />
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#7D7D7D] mt-4">
              A-R-C-C IDENTITY DECODED
            </span>
          </div>

          <div className="lg:col-span-7 space-y-4 text-xs sm:text-sm font-mono text-[#B0B0B0] leading-relaxed">
            <h2 className="text-2xl font-heading font-black text-white uppercase mb-2">
              THE ARCC EMBLEM & DISCIPLINE INTEGRATION
            </h2>
            <p>
              Our emblem isn’t just letters — it is a visual blueprint of our end-to-end craft:
            </p>
            <ul className="space-y-2 text-white">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-white" />
                <strong>A (Camcorder)</strong> — Precision cinematography and commercial camera craft.
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-white" />
                <strong>R (Microphone)</strong> — Acoustic sound design, voice, and podcast suites.
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-white" />
                <strong>C (Play Triangle)</strong> — Dynamic motion pictures, commercials, and digital streaming.
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-white" />
                <strong>C (Film Reel)</strong> — Post-production mastery, color grading, and archival delivery.
              </li>
            </ul>
          </div>
        </div>

        {/* Pillars / Values Grid */}
        <div className="mb-24">
          <div className="mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#7D7D7D] block mb-1">
              Core Principles
            </span>
            <h2 className="text-3xl font-heading font-black text-white uppercase">
              HOW WE OPERATE
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.num} className="p-8 bg-[#0a0a0a] border border-[#262626] flex flex-col justify-between">
                <div>
                  <span className="text-2xl font-heading font-light text-[#7D7D7D] mb-4 block">
                    {v.num}
                  </span>
                  <h3 className="text-lg font-heading font-bold text-white uppercase mb-2">
                    {v.title}
                  </h3>
                </div>
                <p className="text-xs text-[#B0B0B0] leading-relaxed pt-4 border-t border-[#262626]">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Studio Equipment Arsenal Overview */}
        <div className="p-8 sm:p-12 bg-black border border-[#4D4D4D] space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#333333]">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#B0B0B0] block">
                Technical Specifications
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-black text-white uppercase">
                IN-HOUSE GEAR ARSENAL
              </h2>
            </div>
            <span className="text-xs font-mono text-[#7D7D7D]">100% OWNED & CALIBRATED</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs font-mono text-[#B0B0B0]">
            <div className="p-5 bg-[#0a0a0a] border border-[#262626] space-y-2">
              <h4 className="font-heading text-sm text-white font-bold uppercase">Cameras & Optics</h4>
              <p>• ARRI Alexa Mini LF / RED V-Raptor 8K</p>
              <p>• Cooke Anamorphic / Full Frame Primes</p>
              <p>• Sony FX9 & FX6 Multi-Cam Broadcast Rig</p>
              <p>• Hasselblad H6D-100c Commercial Stills</p>
            </div>

            <div className="p-5 bg-[#0a0a0a] border border-[#262626] space-y-2">
              <h4 className="font-heading text-sm text-white font-bold uppercase">Lighting & Grip</h4>
              <p>• Aputure 1200d Pro / 600c RGBWW Fixtures</p>
              <p>• Motorized Ceiling Truss System with DMX</p>
              <p>• Dana Dolly / Easyrig Vario 5 Motion Support</p>
              <p>• Full Matthews C-Stand & Flag Packages</p>
            </div>

            <div className="p-5 bg-[#0a0a0a] border border-[#262626] space-y-2">
              <h4 className="font-heading text-sm text-white font-bold uppercase">Post & Sound</h4>
              <p>• DaVinci Resolve Studio with Flanders OLED</p>
              <p>• Dolby Atmos 7.1.4 Surround Mixing Stage</p>
              <p>• Shure SM7B + Neumann U87 Microphone Suite</p>
              <p>• 100GbE High-Speed NAS Central Server</p>
            </div>
          </div>

          <div className="pt-4 flex items-center justify-between">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-black font-heading font-black text-xs uppercase tracking-widest hover:bg-[#B0B0B0] transition-colors"
            >
              <span>Initiate Production Brief</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
