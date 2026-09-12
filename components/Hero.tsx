'use client';

import React from 'react';
import Image from 'next/image';
import { ChevronDown, Video, Mic, Disc } from 'lucide-react';

interface HeroProps {
  onOpenModal: (inquiry?: string) => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  const scrollToWelcome = () => {
    const el = document.getElementById('glissando-welcome');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="glissando-hero"
      className="glissando-cut-bottom-left"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#0a0a0a',
        overflow: 'hidden',
        paddingTop: '100px',
        paddingBottom: 'clamp(5rem, 8vw, 8rem)',
      }}
    >
      {/* Cinematic Dark Misty Background Image with Grain */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          opacity: 0.42,
        }}
      >
        <Image
          src="/images/glissando/hero-bg.jpg"
          alt="Cinematic Monochromatic Landscape"
          fill
          priority
          style={{
            objectFit: 'cover',
            objectPosition: 'center 40%',
            filter: 'grayscale(100%) contrast(110%) brightness(0.7)',
          }}
        />
        {/* Subtle Dark Vignette & Gradient Overlays */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(circle at center, rgba(10, 10, 10, 0.4) 0%, rgba(10, 10, 10, 0.85) 75%, #0a0a0a 100%)',
          }}
        />
      </div>

      <div className="film-grain-overlay" />

      {/* Main Content Container */}
      <div
        className="stg-container"
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          maxWidth: '920px',
        }}
      >
        {/* Glissando Reticle Focus Brackets Around Title Logo */}
        <div
          className="viewfinder-reticle"
          style={{
            marginBottom: '1.25rem',
            color: '#ffffff',
            padding: 'clamp(0.75rem, 1.8vw, 1.4rem) clamp(1.2rem, 3vw, 2.4rem)',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span className="viewfinder-corner-tl" style={{ width: '22px', height: '22px' }} />
          <span className="viewfinder-corner-tr" style={{ width: '22px', height: '22px' }} />
          <span className="viewfinder-corner-bl" style={{ width: '22px', height: '22px' }} />
          <span className="viewfinder-corner-br" style={{ width: '22px', height: '22px' }} />

          <div
            style={{
              position: 'relative',
              width: 'clamp(240px, 38vw, 420px)',
              height: 'clamp(80px, 12.6vw, 140px)',
            }}
          >
            <Image
              src="/logo.png"
              alt="ARCC Media Production"
              fill
              priority
              style={{
                objectFit: 'contain',
                objectPosition: 'center',
                mixBlendMode: 'screen',
              }}
            />
          </div>
          <h1
            style={{
              position: 'absolute',
              width: '1px',
              height: '1px',
              padding: 0,
              margin: '-1px',
              overflow: 'hidden',
              clip: 'rect(0, 0, 0, 0)',
              whiteSpace: 'nowrap',
              border: 0,
            }}
          >
            ARCC Media Production - Creative Minimal Podcast & Photography Atelier
          </h1>
        </div>

        {/* Small Category Sub-label */}
        <p
          style={{
            fontSize: 'clamp(0.75rem, 1vw, 0.88rem)',
            color: 'rgba(255, 255, 255, 0.65)',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            fontWeight: 500,
            marginBottom: 'clamp(2.5rem, 4vw, 3.5rem)',
          }}
        >
          Creative Minimal Podcast & Photography Atelier
        </p>

        {/* Glissando Headline with Top & Bottom Horizontal Accents */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            maxWidth: '680px',
            marginBottom: '2.5rem',
          }}
        >
          {/* Top Divider Line */}
          <div
            style={{
              width: '100px',
              height: '1px',
              background: 'rgba(255, 255, 255, 0.35)',
              marginBottom: '1.25rem',
            }}
          />

          <h2
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.45rem)',
              fontWeight: 600,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: '#ffffff',
              lineHeight: 1.4,
              margin: 0,
            }}
          >
            Simplicity &amp; Minimalism Is Our Passion
          </h2>

          {/* Bottom Divider Line */}
          <div
            style={{
              width: '100px',
              height: '1px',
              background: 'rgba(255, 255, 255, 0.35)',
              marginTop: '1.25rem',
            }}
          />
        </div>

        {/* Camera Specs & Location Indicator */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '1.5rem',
            marginBottom: '3rem',
            fontSize: '0.72rem',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: 'rgba(255, 255, 255, 0.6)',
          }}
        >
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
            <Video size={13} strokeWidth={2} />
            SONY CINEMA LINE FX3 / FX6
          </span>
          <span style={{ opacity: 0.3 }}>·</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
            <Mic size={13} strokeWidth={2} />
            BROADCAST SOUND SUITE
          </span>
          <span style={{ opacity: 0.3 }}>·</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
            <Disc size={13} strokeWidth={2} />
            CHENNAI &amp; BANGALORE
          </span>
        </div>

        {/* Glissando Dual Action Buttons */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.25rem',
            flexWrap: 'wrap',
          }}
        >
          <button
            type="button"
            className="btn-glissando btn-glissando-light"
            onClick={() => onOpenModal('Podcast Production')}
          >
            Book Production
          </button>
          <button
            type="button"
            className="btn-glissando btn-glissando-solid-light"
            onClick={scrollToWelcome}
          >
            Explore Atelier
          </button>
        </div>

        {/* Centered Minimal Chevron Scroll Indicator */}
        <button
          type="button"
          onClick={scrollToWelcome}
          aria-label="Scroll down"
          style={{
            marginTop: 'clamp(3rem, 5vw, 4.5rem)',
            color: 'rgba(255, 255, 255, 0.75)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.4rem',
            transition: 'transform 0.25s ease, color 0.25s ease',
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#ffffff';
            e.currentTarget.style.transform = 'translateY(4px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'rgba(255, 255, 255, 0.75)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          <ChevronDown size={28} strokeWidth={1.5} />
        </button>
      </div>
    </section>
  );
}
