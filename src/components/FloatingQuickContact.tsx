"use client";

import React, { useState } from "react";
import { MessageSquare, Phone, X, ChevronUp, Sparkles } from "lucide-react";
import { COMPANY_CONTACT } from "@/data/studioInfo";

export default function FloatingQuickContact() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <aside aria-label="Quick contact widget" className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {/* Popover Card */}
      {isExpanded && (
        <div className="bg-black border border-white/80 p-4 shadow-2xl w-64 text-white animate-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-center justify-between pb-2 mb-3 border-b border-[#4D4D4D]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#B0B0B0]">
                Producer Live Line
              </span>
            </div>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-[#7D7D7D] hover:text-white"
              aria-label="Close fast contact box"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-[#B0B0B0] mb-3 leading-relaxed">
            Need immediate shoot crew availability or studio bookings?
          </p>

          <div className="space-y-2">
            <a
              href={`https://wa.me/${COMPANY_CONTACT.whatsappRaw}?text=${encodeURIComponent("Hi ARCC Media, I have a quick production inquiry.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 bg-white text-black font-heading font-bold text-xs uppercase tracking-wider hover:bg-[#B0B0B0] transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </a>
            <a
              href={`tel:${COMPANY_CONTACT.phoneRaw}`}
              className="flex items-center justify-center gap-2 w-full py-2 border border-[#7D7D7D] text-white font-mono text-xs uppercase tracking-wider hover:border-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Direct Call</span>
            </a>
          </div>
        </div>
      )}

      {/* Floating Action Pill / Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center gap-2 px-3.5 py-3 bg-black text-white border border-[#7D7D7D] hover:border-white shadow-2xl transition-all hover:scale-105 group cursor-pointer"
        aria-label="Toggle Quick Contact"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
        </span>
        <span className="font-mono text-xs uppercase tracking-wider font-semibold text-white group-hover:text-white">
          Direct Line
        </span>
        {isExpanded ? (
          <X className="w-4 h-4 text-[#B0B0B0]" />
        ) : (
          <MessageSquare className="w-4 h-4 text-[#B0B0B0] group-hover:text-white transition-colors" />
        )}
      </button>
    </aside>
  );
}
