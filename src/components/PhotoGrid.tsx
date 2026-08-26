"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

/*
 * Placeholder images — the user will swap these out later.
 * Using the existing project photos in a mixed-size masonry layout.
 */
const gridImages = [
  { src: "/images/amish-thakkar-7O422yG_b80-unsplash.jpg",    alt: "Wedding ceremony",       span: "tall"   },
  { src: "/images/anik-das-wbLCos9rVLQ-unsplash.jpg",         alt: "Pre-wedding shoot",      span: "normal" },
  { src: "/images/fashion.jpg",                                 alt: "Fashion photography",    span: "wide"   },
  { src: "/images/arto-suraj-YTEj-9pUH_k-unsplash.jpg",       alt: "Event photography",      span: "normal" },
  { src: "/images/arka-karmakar-TusMg03NLf4-unsplash.jpg",     alt: "Portrait photography",   span: "tall"   },
  { src: "/images/arto-suraj-yS6e3uhm_ZM-unsplash.jpg",        alt: "Candid photography",     span: "normal" },
  { src: "/images/ashwini-chaudhary-monty-9gUvnFDE86o-unsplash.jpg", alt: "Traditional ceremony", span: "wide" },
  { src: "/images/benmoses-m-MDaD_usOE90-unsplash.jpg",        alt: "Outdoor shoot",          span: "normal" },
  { src: "/images/jayesh-jalodara-bWQ6-0c_ZcM-unsplash.jpg",   alt: "Creative composition",   span: "tall"   },
  { src: "/images/mohammed-sultan-farooqui-JjOm8445mXw-unsplash.jpg", alt: "Cultural celebration", span: "normal" },
  { src: "/images/pixel-studios-eZXqmTEaYA8-unsplash.jpg",     alt: "Studio photography",     span: "normal" },
  { src: "/images/rajat-sarki-NvuOJFK53sE-unsplash.jpg",       alt: "Cinematic portrait",     span: "wide"   },
];

const PhotoGrid = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Staggered reveal: each card fades up as it enters the viewport
      const cards = sectionRef.current?.querySelectorAll(".grid-card");
      if (cards) {
        gsap.from(cards, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 60%",
            scrub: 1,
          },
          y: 60,
          opacity: 0,
          scale: 0.95,
          stagger: 0.06,
          ease: "power2.out",
        });
      }

      // Heading reveal
      const heading = sectionRef.current?.querySelector(".grid-heading");
      if (heading) {
        gsap.from(heading, {
          scrollTrigger: {
            trigger: heading,
            start: "top 88%",
            end: "top 60%",
            scrub: 1,
          },
          y: 50,
          opacity: 0,
          ease: "power3.out",
        });
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="photo-grid"
      ref={sectionRef}
      style={{
        position: "relative",
        width: "100%",
        backgroundColor: "var(--black)",
        padding: "10vh 4vw 16vh",
        zIndex: 21,
        overflow: "hidden",
      }}
    >
      {/* Section heading */}
      <div
        className="grid-heading"
        style={{
          textAlign: "center",
          marginBottom: "6vh",
        }}
      >
        <h2
          style={{
            fontFamily: "playfair",
            fontStyle: "oblique",
            fontSize: "clamp(2rem, 6vw, 6rem)",
            fontWeight: 400,
            color: "var(--white)",
            lineHeight: 1,
            letterSpacing: "2px",
            textTransform: "uppercase",
            margin: 0,
          }}
        >
          Moments
        </h2>
        <p
          style={{
            fontFamily: "gilroy",
            fontSize: "clamp(0.7rem, 1vw, 0.95rem)",
            fontWeight: 100,
            color: "rgba(255,255,255,0.4)",
            letterSpacing: "3px",
            textTransform: "uppercase",
            marginTop: "1.5vh",
          }}
        >
          A collection of our finest work
        </p>
      </div>

      {/* Masonry-style CSS grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridAutoRows: "22vw",
          gap: "clamp(6px, 0.6vw, 12px)",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        {gridImages.map((img, i) => {
          // Determine grid span based on the layout hint
          const style: React.CSSProperties = {
            position: "relative",
            overflow: "hidden",
            borderRadius: "clamp(6px, 0.6vw, 12px)",
            cursor: "pointer",
          };

          if (img.span === "tall") {
            style.gridRow = "span 2";
          } else if (img.span === "wide") {
            style.gridColumn = "span 2";
          }

          return (
            <div key={i} className="grid-card" style={style}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                decoding="async"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  transition: "transform 0.6s cubic-bezier(0.19, 1, 0.22, 1), filter 0.6s ease",
                  filter: "brightness(0.85)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.06)";
                  e.currentTarget.style.filter = "brightness(1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.filter = "brightness(0.85)";
                }}
              />
              {/* Subtle gradient overlay at the bottom */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "40%",
                  background: "linear-gradient(to top, rgba(0,0,0,0.5), transparent)",
                  pointerEvents: "none",
                  opacity: 0.7,
                  transition: "opacity 0.4s ease",
                }}
              />
            </div>
          );
        })}
      </div>

      {/* Curved bottom transition into the light footer */}
      <div
        style={{
          position: "absolute",
          bottom: "-1px",
          left: "-5%",
          width: "110%",
          height: "10vh",
          backgroundColor: "var(--black)",
          borderBottomLeftRadius: "50%",
          borderBottomRightRadius: "50%",
          zIndex: 2,
        }}
      />
    </section>
  );
};

export default PhotoGrid;
