'use client';

import React from 'react';
import Image from 'next/image';

export default function QuoteBanner() {
  return (
    <section
      className="glissando-cut-both-right"
      style={{
        position: 'relative',
        minHeight: '380px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#0a0a0a',
        overflow: 'hidden',
        paddingTop: 'clamp(5rem, 8vw, 7rem)',
        paddingBottom: 'clamp(5rem, 8vw, 7rem)',
        textAlign: 'center',
      }}
    >
      {/* High-Contrast Monochromatic Landscape Image */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.38,
        }}
      >
        <Image
          src="/images/glissando/quote-bg.jpg"
          alt="Atmospheric Monochromatic Mountain"
          fill
          loading="lazy"
          style={{
            objectFit: 'cover',
            objectPosition: 'center 40%',
            filter: 'grayscale(100%) contrast(120%) brightness(0.65)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(circle, rgba(10, 10, 10, 0.4) 0%, rgba(10, 10, 10, 0.85) 100%)',
          }}
        />
      </div>

      <div className="film-grain-overlay" />

      {/* Quote Content */}
      <div
        className="stg-container"
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '850px',
        }}
      >
        <p
          style={{
            fontSize: 'clamp(1.2rem, 2.6vw, 1.95rem)',
            fontWeight: 600,
            lineHeight: 1.45,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#ffffff',
            marginBottom: '1rem',
          }}
        >
          &ldquo;Don&rsquo;t just record content. Frame your legacy.&rdquo;
        </p>
        <p
          style={{
            fontSize: '0.74rem',
            letterSpacing: '0.24em',
            textTransform: 'uppercase',
            color: 'rgba(255, 255, 255, 0.6)',
            margin: 0,
          }}
        >
          ARCC Production Manifesto
        </p>
      </div>
    </section>
  );
}
