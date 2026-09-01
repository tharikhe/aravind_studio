import React from "react";
import Hero from "@/components/sections/Hero";
import DivisionsOverview from "@/components/sections/DivisionsOverview";
import FeaturedWork from "@/components/sections/FeaturedWork";
import ContactSheet from "@/components/sections/ContactSheet";
import FilmShowcase from "@/components/sections/FilmShowcase";
import WhatWeDeliver from "@/components/sections/WhatWeDeliver";
import WhyARCC from "@/components/sections/WhyARCC";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import StudioSpotlight from "@/components/sections/StudioSpotlight";
import Testimonials from "@/components/sections/Testimonials";
import ClosingCTA from "@/components/sections/ClosingCTA";
import LocationContact from "@/components/sections/LocationContact";

export default function HomePage() {
  return (
    <main className="flex flex-col w-full bg-black">
      {/* 01: Hero Section */}
      <Hero />

      {/* 02: Divisions Overview (01-06) */}
      <DivisionsOverview />

      {/* 03: Featured Work Draggable Carousel */}
      <FeaturedWork />

      {/* 04: Photographic Contact Sheet Gallery */}
      <ContactSheet />

      {/* 05: Film & Video Showcase with Video Player */}
      <FilmShowcase />

      {/* 06: What We Deliver 8-Card Grid */}
      <WhatWeDeliver />

      {/* 07: Why ARCC Numbered Differentiators */}
      <WhyARCC />

      {/* 08: The Process 5-Step Timeline */}
      <ProcessTimeline />

      {/* 09: Studio Spotlight Callout & Amenities */}
      <StudioSpotlight />

      {/* 10: Testimonials & Verified Rating */}
      <Testimonials />

      {/* 11: Closing CTA Band */}
      <ClosingCTA />

      {/* 12: Studio Location, Map & Inquiry Form */}
      <LocationContact />
    </main>
  );
}
