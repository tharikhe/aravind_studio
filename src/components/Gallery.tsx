"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  CoverflowCarousel,
  type CoverflowSlide,
} from "@/components/ui/coverflow-carousel";

gsap.registerPlugin(ScrollTrigger);

const gallerySlides: CoverflowSlide[] = [
  {
    src: "/images/amish-thakkar-7O422yG_b80-unsplash.jpg",
    alt: "Wedding ceremony",
    title: "Weddings",
    subtitle: "Timeless moments, beautifully preserved",
  },
  {
    src: "/images/anik-das-wbLCos9rVLQ-unsplash.jpg",
    alt: "Pre-wedding shoot",
    title: "Pre-Wedding",
    subtitle: "The magic before the big day",
  },
  {
    src: "/images/fashion.jpg",
    alt: "Fashion photography",
    title: "Fashion",
    subtitle: "Bold looks, striking frames",
  },
  {
    src: "/images/arto-suraj-YTEj-9pUH_k-unsplash.jpg",
    alt: "Event photography",
    title: "Events",
    subtitle: "Every celebration, every detail",
  },
  {
    src: "/images/arka-karmakar-TusMg03NLf4-unsplash.jpg",
    alt: "Portrait photography",
    title: "Portraits",
    subtitle: "Faces that tell stories",
  },
  {
    src: "/images/arto-suraj-yS6e3uhm_ZM-unsplash.jpg",
    alt: "Candid photography",
    title: "Candid",
    subtitle: "Real emotions, unscripted",
  },
  {
    src: "/images/ashwini-chaudhary-monty-9gUvnFDE86o-unsplash.jpg",
    alt: "Traditional ceremony",
    title: "Traditional",
    subtitle: "Heritage & elegance",
  },
  {
    src: "/images/benmoses-m-MDaD_usOE90-unsplash.jpg",
    alt: "Outdoor shoot",
    title: "Outdoor",
    subtitle: "Nature as the canvas",
  },
  {
    src: "/images/jayesh-jalodara-bWQ6-0c_ZcM-unsplash.jpg",
    alt: "Creative composition",
    title: "Creative",
    subtitle: "Art meets photography",
  },
  {
    src: "/images/mohammed-sultan-farooqui-JjOm8445mXw-unsplash.jpg",
    alt: "Cultural celebration",
    title: "Cultural",
    subtitle: "Vibrant traditions captured",
  },
  {
    src: "/images/pixel-studios-eZXqmTEaYA8-unsplash.jpg",
    alt: "Studio photography",
    title: "Studio",
    subtitle: "Controlled light, perfect shot",
  },
  {
    src: "/images/rajat-sarki-NvuOJFK53sE-unsplash.jpg",
    alt: "Cinematic portrait",
    title: "Cinematic",
    subtitle: "Frames from a film",
  },
];

const Gallery = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Character-by-character heading reveal, scrubbed to scroll
      if (headingRef.current) {
        gsap.from(headingRef.current.querySelectorAll(".gallery-char"), {
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            end: "top 45%",
            scrub: 1,
          },
          y: 100,
          opacity: 0,
          rotateX: -90,
          stagger: 0.03,
          ease: "power3.out",
        });

        // Subtitle fade
        gsap.from(headingRef.current.querySelector(".gallery-subtitle"), {
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 70%",
            end: "top 45%",
            scrub: 1,
          },
          y: 30,
          opacity: 0,
          ease: "power2.out",
        });
      }

      // Carousel scales up from slightly smaller with a fade
      const carouselEl = sectionRef.current?.querySelector(
        ".gallery-carousel-wrapper"
      );
      if (carouselEl) {
        gsap.from(carouselEl, {
          scrollTrigger: {
            trigger: carouselEl,
            start: "top 95%",
            end: "top 55%",
            scrub: 1,
          },
          y: 80,
          opacity: 0,
          scale: 0.92,
          ease: "power2.out",
        });
      }
    },
    { scope: sectionRef }
  );

  const headingText = "OUR GALLERY";

  return (
    <section
      id="gallery"
      ref={sectionRef}
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "var(--black)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "12vh 0 14vh",
        overflow: "hidden",
        /* Match #page8-1 z-index so it layers correctly above the
           fixed hero and sits flush with the Portfolio section */
        zIndex: 20,
      }}
    >
      {/* Heading */}
      <div
        ref={headingRef}
        style={{
          textAlign: "center",
          marginBottom: "3vh",
          overflow: "hidden",
          perspective: "600px",
        }}
      >
        <h2
          style={{
            fontFamily: "playfair",
            fontStyle: "oblique",
            fontSize: "clamp(2.5rem, 8vw, 8rem)",
            fontWeight: 400,
            color: "var(--white)",
            lineHeight: 1,
            letterSpacing: "2px",
            textTransform: "uppercase",
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            margin: 0,
          }}
        >
          {headingText.split("").map((char, i) => (
            <span
              key={i}
              className="gallery-char"
              style={{
                display: "inline-block",
                whiteSpace: char === " " ? "pre" : undefined,
                willChange: "transform, opacity",
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h2>
        <p
          className="gallery-subtitle"
          style={{
            fontFamily: "gilroy",
            fontSize: "clamp(0.75rem, 1.2vw, 1rem)",
            fontWeight: 100,
            color: "rgba(255,255,255,0.45)",
            letterSpacing: "4px",
            textTransform: "uppercase",
            marginTop: "2vh",
            willChange: "transform, opacity",
          }}
        >
          Swipe or drag to explore
        </p>
      </div>

      {/* Coverflow Carousel */}
      <div
        className="gallery-carousel-wrapper"
        style={{
          width: "100%",
          maxWidth: "100vw",
          willChange: "transform, opacity",
        }}
      >
        <CoverflowCarousel
          slides={gallerySlides}
          cardWidth="clamp(180px, 28vw, 340px)"
          rotate={48}
          depth={0.55}
          perspective={2.8}
          falloff={0.5}
          fade={0.12}
          gap={0.06}
          loop={true}
          showCaption={true}
          showPagination={true}
          showNavigation={true}
          label="Photography gallery"
        />
      </div>

      {/*
        Curved bottom transition — mirrors the site's #top-wrap-bubble
        design language. The inverted border-radius creates a concave
        scoop that visually merges this section into the Portfolio below.
      */}
      <div
        style={{
          position: "absolute",
          bottom: "-1px",
          left: "-5%",
          width: "110%",
          height: "8vh",
          backgroundColor: "black",
          borderTopLeftRadius: "50%",
          borderTopRightRadius: "50%",
          zIndex: 2,
        }}
      />
    </section>
  );
};

export default Gallery;
