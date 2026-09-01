"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Phone, MessageSquare, Menu, X, ArrowRight, Camera, Video, Mic, Film, Sparkles, Layers } from "lucide-react";
import Logo from "@/components/Logo";
import { DIVISIONS } from "@/data/divisions";
import { COMPANY_CONTACT } from "@/data/studioInfo";
import QuoteModal from "@/components/QuoteModal";

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const servicesDropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(e.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  }, [pathname]);

  const divisionIcons: Record<string, React.ReactNode> = {
    photography: <Camera className="w-4 h-4" />,
    "film-and-video": <Video className="w-4 h-4" />,
    events: <Sparkles className="w-4 h-4" />,
    creative: <Mic className="w-4 h-4" />,
    "post-production": <Layers className="w-4 h-4" />,
    studio: <Film className="w-4 h-4" />,
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#000000]/95 backdrop-blur-md border-b border-[#4D4D4D]/60 py-3 shadow-2xl"
            : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5 sm:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Left */}
          <div className="flex items-center">
            <Logo size={isScrolled ? "sm" : "md"} />
          </div>

          {/* Desktop Nav Center/Right */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className={`text-xs uppercase tracking-widest font-mono transition-colors ${
                pathname === "/" ? "text-white font-bold" : "text-[#B0B0B0] hover:text-white"
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative" ref={servicesDropdownRef}>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                onMouseEnter={() => setIsServicesOpen(true)}
                className={`flex items-center gap-1 text-xs uppercase tracking-widest font-mono transition-colors cursor-pointer ${
                  pathname.startsWith("/services") ? "text-white font-bold" : "text-[#B0B0B0] hover:text-white"
                }`}
                aria-expanded={isServicesOpen}
              >
                <span>Services</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`} />
              </button>

              {/* Mega Dropdown */}
              {isServicesOpen && (
                <div
                  onMouseLeave={() => setIsServicesOpen(false)}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[600px] bg-[#000000] border border-[#4D4D4D] p-5 shadow-2xl transition-all animate-in fade-in slide-in-from-top-2 duration-200"
                >
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#4D4D4D]">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#7D7D7D]">
                      Core Production Divisions (01–06)
                    </span>
                    <Link
                      href="/services"
                      onClick={() => setIsServicesOpen(false)}
                      className="text-[10px] font-mono uppercase tracking-widest text-white hover:text-[#B0B0B0] flex items-center gap-1"
                    >
                      All Services <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {DIVISIONS.map((div) => (
                      <Link
                        key={div.id}
                        href={`/services/${div.slug}`}
                        onClick={() => setIsServicesOpen(false)}
                        className="p-3 bg-[#0a0a0a] border border-transparent hover:border-[#7D7D7D] hover:bg-[#4D4D4D]/20 transition-all group/item block"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[10px] font-mono text-[#7D7D7D] group-hover/item:text-white">
                            {div.number}
                          </span>
                          <span className="text-[#7D7D7D] group-hover/item:text-white transition-colors">
                            {divisionIcons[div.id]}
                          </span>
                        </div>
                        <div className="font-heading text-sm font-bold text-white uppercase group-hover/item:text-white">
                          {div.name}
                        </div>
                        <p className="text-[11px] text-[#7D7D7D] line-clamp-1 mt-0.5">
                          {div.subServices.map((s) => s.name).join(", ")}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/work"
              className={`text-xs uppercase tracking-widest font-mono transition-colors ${
                pathname === "/work" ? "text-white font-bold" : "text-[#B0B0B0] hover:text-white"
              }`}
            >
              Work
            </Link>

            <Link
              href="/about"
              className={`text-xs uppercase tracking-widest font-mono transition-colors ${
                pathname === "/about" ? "text-white font-bold" : "text-[#B0B0B0] hover:text-white"
              }`}
            >
              About
            </Link>

            <Link
              href="/contact"
              className={`text-xs uppercase tracking-widest font-mono transition-colors ${
                pathname === "/contact" ? "text-white font-bold" : "text-[#B0B0B0] hover:text-white"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Actions Right */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={`tel:${COMPANY_CONTACT.phoneRaw}`}
              aria-label={`Call ${COMPANY_CONTACT.phoneDisplay}`}
              className="p-2 text-[#B0B0B0] hover:text-white border border-[#4D4D4D] hover:border-white transition-colors"
              title="Direct Call"
            >
              <Phone className="w-4 h-4" />
            </a>

            <a
              href={`https://wa.me/${COMPANY_CONTACT.whatsappRaw}?text=${encodeURIComponent("Hi ARCC Studio, I would like to inquire about a production.")}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="p-2 text-[#B0B0B0] hover:text-white border border-[#4D4D4D] hover:border-white transition-colors"
              title="Instant WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>

            {/* Get a Quote Button */}
            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="px-4 py-2 bg-white text-black font-heading font-black text-xs uppercase tracking-widest hover:bg-black hover:text-white hover:border-white border border-white transition-all cursor-pointer"
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="px-3 py-1.5 bg-white text-black font-heading font-black text-[10px] uppercase tracking-wider"
            >
              Quote
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-white border border-[#4D4D4D]"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-black border-b border-[#4D4D4D] px-6 py-6 space-y-5 animate-in slide-in-from-top duration-200">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-sm font-heading font-bold text-white uppercase tracking-wider"
              >
                00 // Home
              </Link>
              <div className="border-t border-[#4D4D4D]/60 pt-3">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#7D7D7D] block mb-2">
                  Divisions
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {DIVISIONS.map((div) => (
                    <Link
                      key={div.id}
                      href={`/services/${div.slug}`}
                      className="p-2 bg-[#111111] border border-[#333333] text-xs font-mono uppercase text-[#B0B0B0] hover:text-white"
                    >
                      <span className="text-[#7D7D7D] mr-1">{div.number}</span>
                      {div.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/work"
                className="text-sm font-heading font-bold text-white uppercase tracking-wider"
              >
                Portfolio & Work
              </Link>
              <Link
                href="/about"
                className="text-sm font-heading font-bold text-white uppercase tracking-wider"
              >
                About ARCC
              </Link>
              <Link
                href="/contact"
                className="text-sm font-heading font-bold text-white uppercase tracking-wider"
              >
                Contact & Studio
              </Link>
            </div>

            <div className="pt-4 border-t border-[#4D4D4D] flex items-center justify-between gap-3">
              <a
                href={`tel:${COMPANY_CONTACT.phoneRaw}`}
                className="flex-1 py-2.5 text-center text-xs font-mono uppercase border border-[#7D7D7D] text-white"
              >
                Call Studio
              </a>
              <a
                href={`https://wa.me/${COMPANY_CONTACT.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 text-center text-xs font-mono uppercase bg-white text-black font-bold"
              >
                WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Global Quote / Brief Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />
    </>
  );
}
