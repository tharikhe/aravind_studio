import React from "react";
import type { Metadata } from "next";
import LocationContact from "@/components/sections/LocationContact";
import { COMPANY_CONTACT } from "@/data/studioInfo";
import { Phone, Mail, MapPin, Clock, MessageSquare, ShieldCheck, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Studio Hire — ARCC Media Production",
  description: "Connect with executive producers at ARCC Media Production. Book our studio space or schedule a shoot consultation.",
};

export default function ContactPage() {
  const faqs = [
    {
      q: "How fast can you mobilize a production crew?",
      a: "Our core cinema, camera, and lighting packages are fully owned in-house. For local commercial or event shoots, we can deploy crew within 24–48 hours."
    },
    {
      q: "Can I rent the studio stage without hiring ARCC crew?",
      a: "Yes. Our sound stage, cyclorama, green screen, and podcast suites are available for dry hire with an on-site stage manager provided."
    },
    {
      q: "Do you sign Non-Disclosure Agreements (NDAs)?",
      a: "Always. We regularly produce confidential product launches, unreleased automotive campaigns, and executive briefings under strict NDA protection."
    },
    {
      q: "What is your standard turnaround for post-production?",
      a: "Rough assembly cuts are typically delivered within 3–5 business days. For live events, same-night highlight teasers and live photo galleries are standard."
    }
  ];

  return (
    <main className="bg-black min-h-screen pt-28 sm:pt-36 pb-24 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mb-12 space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-white" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#B0B0B0]">
              Direct Producer Dispatch
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-heading font-black text-white uppercase tracking-tight">
            CONTACT & BOOKING
          </h1>
          <p className="text-sm sm:text-base font-mono text-[#B0B0B0] leading-relaxed">
            Have a project brief, timeline, or studio rental inquiry? Connect directly with our production leads.
          </p>
        </div>

        {/* Embedded Complete Interactive Contact & Map section */}
        <div className="mb-20">
          <LocationContact />
        </div>

        {/* Production FAQs */}
        <div className="pt-12 border-t border-[#333333]">
          <div className="mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-[#7D7D7D] block mb-1">
              Common Inquiries
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-black text-white uppercase">
              PRODUCTION & STAGE FAQ
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-6 bg-[#0a0a0a] border border-[#262626] hover:border-[#4D4D4D] transition-colors"
              >
                <h3 className="text-base font-heading font-bold text-white uppercase mb-2">
                  {faq.q}
                </h3>
                <p className="text-xs sm:text-sm text-[#B0B0B0] leading-relaxed font-mono">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
