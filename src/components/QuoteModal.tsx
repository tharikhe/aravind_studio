"use client";

import React, { useState, useEffect } from "react";
import { X, CheckCircle, ArrowRight, Sparkles, Phone, Mail } from "lucide-react";
import { DIVISIONS } from "@/data/divisions";
import { COMPANY_CONTACT } from "@/data/studioInfo";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDivision?: string;
}

export default function QuoteModal({
  isOpen,
  onClose,
  initialDivision = "",
}: QuoteModalProps) {
  const [selectedDivision, setSelectedDivision] = useState(initialDivision || "photography");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [projectType, setProjectType] = useState("");
  const [timeline, setTimeline] = useState("Within 2–4 Weeks");
  const [budget, setBudget] = useState("Standard ($3,000 - $10,000)");
  const [projectDetails, setProjectDetails] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialDivision) {
      setSelectedDivision(initialDivision);
    }
  }, [initialDivision]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFullName("");
    setEmail("");
    setPhone("");
    setProjectDetails("");
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#000000] border border-[#4D4D4D] shadow-2xl p-6 sm:p-10 max-h-[90vh] overflow-y-auto no-scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#7D7D7D] hover:text-white hover:bg-[#4D4D4D]/40 transition-colors border border-transparent hover:border-[#7D7D7D]"
          aria-label="Close quote modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="py-12 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center mb-6">
              <CheckCircle className="w-9 h-9 stroke-[2.5]" />
            </div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#B0B0B0] mb-2 font-mono">
              Brief Received // Priority Queue
            </p>
            <h3 className="text-2xl sm:text-3xl font-heading font-black text-white mb-4">
              PROJECT INITIATED
            </h3>
            <p className="text-[#B0B0B0] max-w-md text-sm leading-relaxed mb-8">
              Thank you, <span className="text-white font-semibold">{fullName || "Creator"}</span>. An ARCC executive producer is reviewing your requirements and will reach out within 2 hours with an estimate and timeline.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm">
              <a
                href={`https://wa.me/${COMPANY_CONTACT.whatsappRaw}?text=${encodeURIComponent(`Hi ARCC team, I just submitted a project brief regarding ${selectedDivision}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 bg-white text-black font-heading font-bold text-xs uppercase tracking-widest hover:bg-[#B0B0B0] transition-colors text-center"
              >
                Instant WhatsApp
              </a>
              <button
                onClick={handleReset}
                className="flex-1 py-3 px-4 border border-[#7D7D7D] text-white font-heading font-bold text-xs uppercase tracking-widest hover:border-white transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-block w-2 h-2 bg-white" />
                <p className="text-xs uppercase tracking-[0.25em] text-[#B0B0B0] font-mono">
                  Direct Producer Intake
                </p>
              </div>
              <h2 className="text-2xl sm:text-3xl font-heading font-black text-white uppercase">
                START A PRODUCTION
              </h2>
              <p className="text-xs sm:text-sm text-[#7D7D7D] mt-1">
                Tell us about your story. We deliver concept to final master with zero friction.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Division Selection Pills */}
              <div>
                <label className="block text-xs uppercase tracking-widest text-[#B0B0B0] mb-2.5 font-mono">
                  Select Division / Service Area
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {DIVISIONS.map((div) => {
                    const isSelected = selectedDivision === div.slug || selectedDivision === div.id;
                    return (
                      <button
                        type="button"
                        key={div.id}
                        onClick={() => setSelectedDivision(div.slug)}
                        className={`p-2.5 text-left border transition-all text-xs font-mono uppercase tracking-wider ${
                          isSelected
                            ? "bg-white text-black border-white font-bold"
                            : "bg-[#000000] text-[#B0B0B0] border-[#4D4D4D] hover:border-white hover:text-white"
                        }`}
                      >
                        <span className="opacity-60 mr-1.5">{div.number}</span>
                        {div.name}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#B0B0B0] mb-1.5 font-mono">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Alex Morgan"
                    className="w-full arcc-input py-2 text-sm placeholder:text-[#7D7D7D]"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#B0B0B0] mb-1.5 font-mono">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 (555) 000-0000"
                    className="w-full arcc-input py-2 text-sm placeholder:text-[#7D7D7D]"
                  />
                </div>
              </div>

              {/* Email & Scope */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#B0B0B0] mb-1.5 font-mono">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alex@company.com"
                    className="w-full arcc-input py-2 text-sm placeholder:text-[#7D7D7D]"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#B0B0B0] mb-1.5 font-mono">
                    Target Timeline
                  </label>
                  <select
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    className="w-full arcc-input py-2 text-sm bg-[#000000] text-white"
                  >
                    <option value="Urgent (Next 7 Days)">Urgent (Next 7 Days)</option>
                    <option value="Within 2–4 Weeks">Within 2–4 Weeks</option>
                    <option value="1–2 Months Out">1–2 Months Out</option>
                    <option value="Ongoing / Retainer">Ongoing / Retainer</option>
                  </select>
                </div>
              </div>

              {/* Project Brief */}
              <div>
                <label className="block text-xs uppercase tracking-widest text-[#B0B0B0] mb-1.5 font-mono">
                  Project Brief & Requirements
                </label>
                <textarea
                  rows={3}
                  value={projectDetails}
                  onChange={(e) => setProjectDetails(e.target.value)}
                  placeholder="Describe your vision, deliverables needed, locations, references, or studio rental dates..."
                  className="w-full arcc-input py-2 text-sm placeholder:text-[#7D7D7D] resize-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#4D4D4D]">
                <div className="flex items-center gap-4 text-xs text-[#7D7D7D]">
                  <span className="flex items-center gap-1">
                    <Phone className="w-3 h-3 text-[#B0B0B0]" />
                    {COMPANY_CONTACT.phoneDisplay}
                  </span>
                  <span>•</span>
                  <span>NDA Guaranteed</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3.5 bg-white text-black font-heading font-black text-xs uppercase tracking-widest hover:bg-[#B0B0B0] transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>PROCESSING...</span>
                  ) : (
                    <>
                      <span>SUBMIT BRIEF</span>
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
  );
}
