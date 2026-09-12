'use client';

import React from 'react';

interface WelcomeSectionProps {
  onOpenModal?: (inquiry?: string) => void;
}

export default function WelcomeSection({ onOpenModal }: WelcomeSectionProps) {
  const scrollToWorks = () => {
    const el = document.getElementById('glissando-works');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="glissando-welcome"
      style={{
        position: 'relative',
        background: '#ffffff',
        color: '#0a0a0a',
        paddingTop: 'clamp(5rem, 8vw, 7.5rem)',
        paddingBottom: 'clamp(5rem, 8vw, 7.5rem)',
        zIndex: 1,
      }}
    >
      {/* Delicate Haerim Elizabeth Lee Editorial Wireframe Box in Background */}
      <div
        style={{
          position: 'absolute',
          top: '15%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'min(90%, 800px)',
          height: '70%',
          border: '1px solid rgba(0, 0, 0, 0.06)',
          pointerEvents: 'none',
        }}
      />

      <div className="stg-container">
        <div className="glissando-header">
          <p
            style={{
              fontSize: '0.72rem',
              letterSpacing: '0.24em',
              textTransform: 'uppercase',
              fontWeight: 600,
              color: '#71717a',
              marginBottom: '0.5rem',
            }}
          >
            Philosophy &amp; Atelier
          </p>
          <h2 className="glissando-title on-light">Welcome to ARCC Studio</h2>
          <span className="glissando-dash" style={{ color: '#0a0a0a' }} />
          <p className="glissando-subtext on-light">
            ARCC is a dedicated media production atelier engineered for creators, visionary founders,
            and prestige brands. Combining calibrated Sony Cinema Line optics, acoustic isolation suites,
            and sculpted architectural backdrops, we craft broadcast content with museum-grade minimalism.
          </p>
        </div>

        {/* 3 Core Philosophical Pillars (Minimalist Editorial Grid) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 'clamp(1.5rem, 3vw, 2.5rem)',
            maxWidth: '1000px',
            margin: '0 auto 3rem',
          }}
          className="welcome-pillars"
        >
          <div style={{ textAlign: 'center', padding: '1rem' }}>
            <span
              style={{
                display: 'block',
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#a1a1aa',
                marginBottom: '0.5rem',
              }}
            >
              01 / VISION
            </span>
            <h3
              style={{
                fontSize: '1rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: '0.6rem',
                color: '#0a0a0a',
              }}
            >
              Cine-Grade Fidelity
            </h3>
            <p style={{ fontSize: '0.84rem', color: '#71717a', lineHeight: 1.6 }}>
              Triple-angle Sony FX3 and FX6 Cinema Line cameras capturing uncompressed 4K 10-bit color science.
            </p>
          </div>

          <div style={{ textAlign: 'center', padding: '1rem', borderLeft: '1px solid #f4f4f5', borderRight: '1px solid #f4f4f5' }}>
            <span
              style={{
                display: 'block',
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#a1a1aa',
                marginBottom: '0.5rem',
              }}
            >
              02 / ACOUSTICS
            </span>
            <h3
              style={{
                fontSize: '1rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: '0.6rem',
                color: '#0a0a0a',
              }}
            >
              Pure Sonic Clarity
            </h3>
            <p style={{ fontSize: '0.84rem', color: '#71717a', lineHeight: 1.6 }}>
              Acoustically isolated chambers, Shure SM7B broadcast microphones, and live audio engineer monitoring.
            </p>
          </div>

          <div style={{ textAlign: 'center', padding: '1rem' }}>
            <span
              style={{
                display: 'block',
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#a1a1aa',
                marginBottom: '0.5rem',
              }}
            >
              03 / SPACES
            </span>
            <h3
              style={{
                fontSize: '1rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: '0.6rem',
                color: '#0a0a0a',
              }}
            >
              Architectural Sets
            </h3>
            <p style={{ fontSize: '0.84rem', color: '#71717a', lineHeight: 1.6 }}>
              Ten bespoke modular studio environments designed for intimate dialogues, roundtables, and high-impact founder talks.
            </p>
          </div>
        </div>

        {/* Centered Glissando Outline Action Button */}
        <div style={{ textAlign: 'center' }}>
          <button
            type="button"
            className="btn-glissando btn-glissando-dark"
            onClick={scrollToWorks}
          >
            Learn More
          </button>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .welcome-pillars {
            grid-template-columns: 1fr !important;
          }
          .welcome-pillars > div {
            border-left: none !important;
            border-right: none !important;
            border-bottom: 1px solid #f4f4f5;
          }
        }
      `}</style>
    </section>
  );
}
