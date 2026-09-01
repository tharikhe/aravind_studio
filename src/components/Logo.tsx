import React from "react";
import Link from "next/link";

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  showSubtext?: boolean;
  className?: string;
  isLink?: boolean;
}

export default function Logo({
  size = "md",
  showSubtext = true,
  className = "",
  isLink = true,
}: LogoProps) {
  // Dimensions scaling
  const scaleMap = {
    sm: { letterH: 26, letterW: 24, fontSize: 8, gap: 4 },
    md: { letterH: 34, letterW: 32, fontSize: 10, gap: 6 },
    lg: { letterH: 48, letterW: 44, fontSize: 13, gap: 8 },
    xl: { letterH: 64, letterW: 58, fontSize: 16, gap: 10 },
  };

  const { letterH, letterW, fontSize, gap } = scaleMap[size];

  const content = (
    <div className={`inline-flex flex-col items-start select-none group ${className}`}>
      {/* ARCC Glyphs Container */}
      <div className="flex items-center" style={{ gap: `${gap}px` }}>
        {/* Letter A with Camcorder */}
        <div
          className="relative flex items-center justify-center bg-white text-black font-black transition-transform duration-300 group-hover:-translate-y-0.5"
          style={{ width: `${letterW}px`, height: `${letterH}px` }}
        >
          <span className="font-extrabold tracking-tighter" style={{ fontSize: `${letterH * 0.72}px` }}>
            A
          </span>
          {/* Embedded Camcorder Motif */}
          <svg
            className="absolute bottom-1 right-1 opacity-90"
            width={letterW * 0.42}
            height={letterH * 0.38}
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M4 6H14C15.1 6 16 6.9 16 8V16C16 17.1 15.1 18 14 18H4C2.9 18 2 17.1 2 16V8C2 6.9 2.9 6 4 6Z" />
            <path d="M18 10L22 7V17L18 14V10Z" />
            <circle cx="6" cy="10" r="1.5" fill="#FFFFFF" />
          </svg>
        </div>

        {/* Letter R with Microphone */}
        <div
          className="relative flex items-center justify-center bg-white text-black font-black transition-transform duration-300 group-hover:-translate-y-0.5"
          style={{ width: `${letterW}px`, height: `${letterH}px` }}
        >
          <span className="font-extrabold tracking-tighter" style={{ fontSize: `${letterH * 0.72}px` }}>
            R
          </span>
          {/* Embedded Microphone Motif */}
          <svg
            className="absolute top-1 right-1 opacity-90"
            width={letterW * 0.38}
            height={letterH * 0.38}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" fill="currentColor" />
            <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
            <line x1="12" x2="12" y1="19" y2="22" />
          </svg>
        </div>

        {/* Letter C with Play Button */}
        <div
          className="relative flex items-center justify-center bg-white text-black font-black transition-transform duration-300 group-hover:-translate-y-0.5"
          style={{ width: `${letterW}px`, height: `${letterH}px` }}
        >
          <span className="font-extrabold tracking-tighter" style={{ fontSize: `${letterH * 0.72}px` }}>
            C
          </span>
          {/* Embedded Play Button Triangle */}
          <svg
            className="absolute center"
            style={{ width: `${letterW * 0.32}px`, height: `${letterH * 0.32}px` }}
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <polygon points="6 4 20 12 6 20 6 4" />
          </svg>
        </div>

        {/* Letter C with Film Reel & Unspooling Strip */}
        <div
          className="relative flex items-center justify-center bg-white text-black font-black transition-transform duration-300 group-hover:-translate-y-0.5"
          style={{ width: `${letterW}px`, height: `${letterH}px` }}
        >
          <span className="font-extrabold tracking-tighter" style={{ fontSize: `${letterH * 0.72}px` }}>
            C
          </span>
          {/* Embedded Film Reel & Strip Motif */}
          <svg
            className="absolute -top-0.5 -right-0.5"
            width={letterW * 0.44}
            height={letterH * 0.44}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="3" fill="currentColor" />
            <circle cx="7" cy="8" r="1.5" fill="currentColor" />
            <circle cx="17" cy="8" r="1.5" fill="currentColor" />
            <circle cx="12" cy="18" r="1.5" fill="currentColor" />
            <path d="M19 19L23 23" strokeWidth="2.5" />
          </svg>
        </div>
      </div>

      {/* Subtext: MEDIA PRODUCTION */}
      {showSubtext && (
        <div
          className="text-white/80 font-mono uppercase tracking-[0.28em] mt-1.5 font-medium transition-colors group-hover:text-white"
          style={{ fontSize: `${fontSize}px` }}
        >
          MEDIA PRODUCTION
        </div>
      )}
    </div>
  );

  if (isLink) {
    return (
      <Link href="/" aria-label="ARCC Media Production Home" className="focus:outline-none focus-visible:ring-1 focus-visible:ring-white">
        {content}
      </Link>
    );
  }

  return content;
}
