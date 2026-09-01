"use client";

import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, MessageSquare, ArrowRight, CheckCircle2, Navigation } from "lucide-react";
import { COMPANY_CONTACT } from "@/data/studioInfo";
import { DIVISIONS } from "@/data/divisions";

export default function LocationContact() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [selectedService, setSelectedService] = useState("photography");
  const [projectDetails, setProjectDetails] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <section className="py-24 sm:py-32 bg-[#050505] border-t border-[#4D4D4D]/60 relative" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-white" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#B0B0B0]">
              Studio Location & Direct Dispatch
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-black text-white uppercase tracking-tight">
            LOCATION & CONTACT
          </h2>
          <p className="text-sm sm:text-base text-[#B0B0B0] font-mono leading-relaxed">
            Visit our private production stages or initiate a shoot inquiry directly with our production leads.
          </p>
        </div>

        {/* 2-Column Grid: Left Studio Details / Map + Right Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Studio Specs, Address & Dark Map (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 bg-black border border-[#333333] space-y-6">
              <h3 className="text-xl font-heading font-black text-white uppercase">
                PRODUCTION HQ & STAGES
              </h3>

              <div className="space-y-4 text-xs font-mono text-[#B0B0B0]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-white shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-sans font-bold text-sm">
                      {COMPANY_CONTACT.addressLine1}
                    </strong>
                    <span>{COMPANY_CONTACT.addressLine2}</span>
                    <br />
                    <span>
                      {COMPANY_CONTACT.city}, {COMPANY_CONTACT.state} {COMPANY_CONTACT.postalCode}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2 border-t border-[#262626]">
                  <Phone className="w-4 h-4 text-white shrink-0" />
                  <a href={`tel:${COMPANY_CONTACT.phoneRaw}`} className="hover:text-white transition-colors">
                    {COMPANY_CONTACT.phoneDisplay}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <MessageSquare className="w-4 h-4 text-white shrink-0" />
                  <a
                    href={`https://wa.me/${COMPANY_CONTACT.whatsappRaw}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    WhatsApp: {COMPANY_CONTACT.whatsappDisplay}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-white shrink-0" />
                  <a href={`mailto:${COMPANY_CONTACT.email}`} className="hover:text-white transition-colors">
                    {COMPANY_CONTACT.email}
                  </a>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-[#262626]">
                  <Clock className="w-4 h-4 text-white shrink-0 mt-0.5" />
                  <span>{COMPANY_CONTACT.hours}</span>
                </div>
              </div>
            </div>

            {/* Stylized Monochrome Interactive Map Container */}
            <div className="relative aspect-[16/10] bg-[#111111] border border-[#4D4D4D] overflow-hidden group">
              {/* Map Graphic Lines & Stylized Roads */}
              <div className="absolute inset-0 bg-[#0c0c0c] flex items-center justify-center p-6 select-none">
                <svg className="w-full h-full opacity-40" viewBox="0 0 400 250">
                  <line x1="0" y1="60" x2="400" y2="60" stroke="#333333" strokeWidth="2" />
                  <line x1="0" y1="140" x2="400" y2="140" stroke="#444444" strokeWidth="3" />
                  <line x1="0" y1="200" x2="400" y2="200" stroke="#333333" strokeWidth="1.5" />
                  <line x1="80" y1="0" x2="80" y2="250" stroke="#333333" strokeWidth="2" />
                  <line x1="220" y1="0" x2="220" y2="250" stroke="#555555" strokeWidth="4" />
                  <line x1="330" y1="0" x2="330" y2="250" stroke="#333333" strokeWidth="2" />
                  <circle cx="220" cy="140" r="28" fill="#FFFFFF" fillOpacity="0.05" />
                  <circle cx="220" cy="140" r="16" fill="#FFFFFF" fillOpacity="0.1" />
                </svg>

                {/* Studio Location Pin Marker */}
                <div className="absolute center flex flex-col items-center">
                  <div className="px-2 py-1 bg-white text-black text-[10px] font-mono font-bold uppercase tracking-wider mb-1 shadow-2xl animate-bounce">
                    ARCC STUDIOS HQ
                  </div>
                  <div className="w-3 h-3 bg-white rotate-45" />
                </div>
              </div>

              {/* Map Footer Overlay */}
              <div className="absolute bottom-0 inset-x-0 p-3 bg-black/90 border-t border-[#333333] flex items-center justify-between text-[10px] font-mono text-[#B0B0B0]">
                <span>34.0928° N, 118.3287° W</span>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(`${COMPANY_CONTACT.addressLine1}, ${COMPANY_CONTACT.city}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:underline flex items-center gap-1"
                >
                  <Navigation className="w-3 h-3" /> Get Directions
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Project Enquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-black border border-[#4D4D4D] p-8 sm:p-12">
            {isSubmitted ? (
              <div className="py-16 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-9 h-9 stroke-[2.5]" />
                </div>
                <h3 className="text-2xl font-heading font-black text-white uppercase">
                  MESSAGE DISPATCHED
                </h3>
                <p className="text-sm font-mono text-[#B0B0B0] max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-white font-bold">{fullName}</strong>. Your shoot parameters have been sent to our line producer. We will contact you at <span className="text-white">{email}</span> within 2 hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2.5 border border-[#7D7D7D] text-xs font-mono uppercase text-white hover:border-white transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <div>
                <div className="mb-8 pb-4 border-b border-[#333333]">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#7D7D7D] block mb-1">
                    Direct Inquiry Form
                  </span>
                  <h3 className="text-2xl font-heading font-black text-white uppercase">
                    TELL US ABOUT YOUR PROJECT
                  </h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-[#B0B0B0] mb-2 font-mono">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Elena Sterling"
                        className="w-full arcc-input py-2 text-sm placeholder:text-[#7D7D7D]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-[#B0B0B0] mb-2 font-mono">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+1 (555) 123-4567"
                        className="w-full arcc-input py-2 text-sm placeholder:text-[#7D7D7D]"
                      />
                    </div>
                  </div>

                  {/* Email & Service Dropdown */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-[#B0B0B0] mb-2 font-mono">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="elena@company.com"
                        className="w-full arcc-input py-2 text-sm placeholder:text-[#7D7D7D]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-[#B0B0B0] mb-2 font-mono">
                        Service of Interest *
                      </label>
                      <select
                        value={selectedService}
                        onChange={(e) => setSelectedService(e.target.value)}
                        className="w-full arcc-input py-2 text-sm bg-black text-white"
                      >
                        {DIVISIONS.map((div) => (
                          <option key={div.id} value={div.slug} className="bg-black text-white">
                            {div.number} — {div.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-[#B0B0B0] mb-2 font-mono">
                      Project Details & Scope *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={projectDetails}
                      onChange={(e) => setProjectDetails(e.target.value)}
                      placeholder="Outline your shoot dates, locations, reference links, deliverables, or studio equipment needed..."
                      className="w-full arcc-input py-2 text-sm placeholder:text-[#7D7D7D] resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#333333]">
                    <span className="text-[11px] font-mono text-[#7D7D7D]">
                      Average producer response time: <strong>&lt; 2 Hours</strong>
                    </span>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-8 py-3.5 bg-white text-black font-heading font-black text-xs uppercase tracking-widest hover:bg-[#B0B0B0] transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>SENDING...</span>
                      ) : (
                        <>
                          <span>SUBMIT INQUIRY</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
