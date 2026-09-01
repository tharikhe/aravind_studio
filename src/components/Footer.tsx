import React from "react";
import Link from "next/link";
import Logo from "@/components/Logo";
import { DIVISIONS } from "@/data/divisions";
import { COMPANY_CONTACT } from "@/data/studioInfo";
import { ArrowUpRight, Camera, Video, Mic, Film, Sparkles, Layers, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white border-t border-[#4D4D4D]/80 relative overflow-hidden">
      {/* Subtle brand watermark background */}
      <div className="absolute right-0 bottom-0 text-[18vw] font-black text-white/[0.015] select-none pointer-events-none font-heading leading-none">
        ARCC
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-16 border-b border-[#4D4D4D]/60">
          {/* Col 1: Logo & Mission (2 cols wide on desktop) */}
          <div className="lg:col-span-2 space-y-6">
            <Logo size="lg" />
            <p className="text-sm text-[#B0B0B0] max-w-sm leading-relaxed">
              ARCC Media Production is an end-to-end media house uniting six core production divisions under one roof. Concept to final master, without the friction of multiple vendors.
            </p>

            {/* Motif Icons Showcase */}
            <div className="flex items-center gap-3 pt-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#7D7D7D] mr-1">
                Motifs:
              </span>
              <div className="p-2 bg-[#111111] border border-[#333333] text-[#B0B0B0] hover:text-white hover:border-white transition-colors" title="Camcorder (A)">
                <Camera className="w-3.5 h-3.5" />
              </div>
              <div className="p-2 bg-[#111111] border border-[#333333] text-[#B0B0B0] hover:text-white hover:border-white transition-colors" title="Microphone (R)">
                <Mic className="w-3.5 h-3.5" />
              </div>
              <div className="p-2 bg-[#111111] border border-[#333333] text-[#B0B0B0] hover:text-white hover:border-white transition-colors" title="Play (C)">
                <Video className="w-3.5 h-3.5" />
              </div>
              <div className="p-2 bg-[#111111] border border-[#333333] text-[#B0B0B0] hover:text-white hover:border-white transition-colors" title="Reel (C)">
                <Film className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              {COMPANY_CONTACT.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono uppercase px-2.5 py-1 border border-[#4D4D4D] text-[#B0B0B0] hover:text-white hover:border-white transition-colors"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Core Divisions */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-white flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-white" />
              Divisions
            </h4>
            <ul className="space-y-2.5 text-xs font-mono">
              {DIVISIONS.map((div) => (
                <li key={div.id}>
                  <Link
                    href={`/services/${div.slug}`}
                    className="text-[#B0B0B0] hover:text-white transition-colors flex items-center justify-between group"
                  >
                    <span>
                      <span className="text-[#7D7D7D] mr-1.5">{div.number}</span>
                      {div.name}
                    </span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#B0B0B0]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-white flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-white" />
              Company
            </h4>
            <ul className="space-y-2.5 text-xs font-mono">
              <li>
                <Link href="/work" className="text-[#B0B0B0] hover:text-white transition-colors">
                  Portfolio & Stills
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#B0B0B0] hover:text-white transition-colors">
                  About ARCC
                </Link>
              </li>
              <li>
                <Link href="/services/studio" className="text-[#B0B0B0] hover:text-white transition-colors">
                  Studio Hire & Specs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#B0B0B0] hover:text-white transition-colors">
                  Direct Contact
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#B0B0B0] hover:text-white transition-colors">
                  Rate Card & NDA
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Studio Location & Hours */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-white flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-white" />
              Studio HQ
            </h4>
            <div className="space-y-3 text-xs text-[#B0B0B0] leading-relaxed">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <span>
                  {COMPANY_CONTACT.addressLine1}
                  <br />
                  {COMPANY_CONTACT.city}, {COMPANY_CONTACT.state} {COMPANY_CONTACT.postalCode}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-white shrink-0" />
                <a href={`tel:${COMPANY_CONTACT.phoneRaw}`} className="hover:text-white transition-colors">
                  {COMPANY_CONTACT.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-white shrink-0" />
                <a href={`mailto:${COMPANY_CONTACT.email}`} className="hover:text-white transition-colors">
                  {COMPANY_CONTACT.email}
                </a>
              </div>
              <p className="pt-2 text-[11px] text-[#7D7D7D] font-mono border-t border-[#333333]">
                {COMPANY_CONTACT.hours}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Status Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#7D7D7D]">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-white">
              <span className="w-2 h-2 rounded-full bg-white animate-ping" />
              STAGE READY
            </span>
            <span>•</span>
            <span>© {currentYear} ARCC MEDIA PRODUCTION. ALL RIGHTS RESERVED.</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[#B0B0B0]">MONOCHROME DESIGN SYSTEM</span>
            <a href="#" className="text-[#7D7D7D] hover:text-white transition-colors">
              BACK TO TOP ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
