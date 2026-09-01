'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Phone, ChevronLeft, ChevronRight, ArrowRight, Video, Mic, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenModal: (inquiry?: string) => void;
}

const HERO_SETUPS = [
  {
    id: 'setup-1',
    name: 'Brand Bookshelf',
    tag: 'Setup 01',
    cam: 'Sony FX3 · 35mm',
    image: '/images/setups/setup-brand-grey.jpg',
    alt: 'Brand grey podcast studio with wooden bookshelf backdrop at ARCC Media Production',
  },
  {
    id: 'setup-2',
    name: 'Warm Lounge',
    tag: 'Setup 02',
    cam: 'Sony FX6 · 50mm',
    image: '/images/setups/setup-warm-lounge.jpg',
    alt: 'Warm lounge podcast studio with armchairs and fluted wall at ARCC Media Production',
  },
  {
    id: 'setup-3',
    name: 'Executive Dark',
    tag: 'Setup 03',
    cam: 'Sony FX6 · 85mm',
    image: '/images/setups/setup-executive-dark.jpg',
    alt: 'Executive dark grey podcast studio with leather seating at ARCC Media Production',
  },
  {
    id: 'setup-4',
    name: 'Royal Blue Stage',
    tag: 'Setup 04',
    cam: 'Sony FX3 · 24mm',
    image: '/images/setups/setup-royal-blue.jpg',
    alt: 'Blue podcast studio stage with broadcast mics at ARCC Media Production',
  },
  {
    id: 'setup-5',
    name: 'Round Table',
    tag: 'Setup 05',
    cam: 'Sony FX6 · 50mm',
    image: '/images/setups/setup-round-table.jpg',
    alt: 'Roundtable podcast studio with 4 mics and armchairs at ARCC Media Production',
  },
];

export default function Hero({ onOpenModal }: HeroProps) {
  const [activeSetupIdx, setActiveSetupIdx] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const currentSetup = HERO_SETUPS[activeSetupIdx];

  const nextSlide = useCallback(() => {
    setActiveSetupIdx((prev) => (prev + 1) % HERO_SETUPS.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveSetupIdx((prev) => (prev - 1 + HERO_SETUPS.length) % HERO_SETUPS.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(timer);
  }, [nextSlide, isAutoPlaying]);

  return (
    <section
      className="home-hero"
      style={{
        paddingTop: 'clamp(2rem, 3.5vw, 3.5rem)',
        paddingBottom: 'clamp(2rem, 3.5vw, 3.5rem)',
        position: 'relative',
        background: '#FFFFFF',
      }}
    >
      <div className="stg-container">
        <div
          className="stg-row"
          style={{
            alignItems: 'center',
            rowGap: '2.5rem',
          }}
        >
          {/* Left Column: Thesis & Proposition */}
          <div
            className="stg-col-5 stg-tp-col-12"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}
          >
            {/* Live Studio Status Pill */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.35rem 0.85rem',
                borderRadius: '999px',
                background: '#F4F5F7',
                border: '1px solid #E5E7EB',
                marginBottom: '1rem',
              }}
            >
              <span
                style={{
                  width: '7px',
                  height: '7px',
                  borderRadius: '50%',
                  backgroundColor: '#10B981',
                  boxShadow: '0 0 8px rgba(16, 185, 129, 0.6)',
                }}
              />
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: '#18181B',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                }}
              >
                Studio Open · Indiranagar
              </span>
            </div>

            {/* Headline with deliberate typographic contrast */}
            <h1
              style={{
                fontSize: 'clamp(2.3rem, 3.8vw, 3.3rem)',
                fontWeight: 800,
                lineHeight: 1.12,
                letterSpacing: '-0.035em',
                marginBottom: '1rem',
                color: '#0A0A0A',
              }}
            >
              Podcast Studio <br className="stg-hide-tp" />
              <span
                style={{
                  background: 'linear-gradient(135deg, #000000 0%, #52525B 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                in Bangalore.
              </span>
            </h1>

            {/* Tight, characterful copy */}
            <p
              className="bringer-large-text"
              style={{
                fontSize: 'clamp(0.95rem, 1.2vw, 1.1rem)',
                lineHeight: 1.55,
                color: '#4A5568',
                marginBottom: '1.5rem',
                maxWidth: '440px',
              }}
            >
              Multi-camera 4K recording, broadcast audio, and cinematic soundproof sets. Walk in with an idea, walk out with ready-to-publish episodes.
            </p>

            {/* Primary Action Button Bar */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '0.85rem',
                width: '100%',
                marginBottom: '1.5rem',
              }}
            >
              <button
                type="button"
                className="bringer-button"
                onClick={() => onOpenModal('Podcast Production')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.8rem 1.6rem',
                  fontSize: '0.92rem',
                  minHeight: '46px',
                }}
              >
                <span>Book a Session</span>
                <ArrowRight size={16} />
              </button>

              <a
                href="#podcast-setups"
                className="bringer-button is-secondary"
                style={{
                  padding: '0.8rem 1.5rem',
                  fontSize: '0.92rem',
                  minHeight: '46px',
                }}
              >
                Explore 6 Setups
              </a>
            </div>

            {/* Studio Specs Bar */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.65rem 1.15rem',
                paddingTop: '1rem',
                borderTop: '1px solid #E5E7EB',
                width: '100%',
                fontSize: '0.82rem',
                color: '#52525B',
              }}
            >
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: '#18181B', fontWeight: 500 }}>
                <Video size={14} style={{ color: '#000000' }} /> 4K Multi-Cam
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: '#18181B', fontWeight: 500 }}>
                <Mic size={14} style={{ color: '#000000' }} /> Shure &amp; Rode Mics
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: '#18181B', fontWeight: 500 }}>
                <Sparkles size={14} style={{ color: '#000000' }} /> Soundproofed
              </span>
            </div>

            {/* Direct Contact Phone Link */}
            <div style={{ marginTop: '0.75rem' }}>
              <a
                href="tel:+919605533366"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  fontSize: '0.88rem',
                  color: '#4A5568',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#000000')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#4A5568')}
              >
                <Phone size={14} style={{ color: '#000000' }} />
                <span>Direct Line: <strong style={{ color: '#000000' }}>+91 960 55 333 66</strong></span>
              </a>
            </div>
          </div>

          {/* Right Column: Signature Studio Viewfinder & Setup Switcher */}
          <div className="stg-col-7 stg-tp-col-12">
            <div
              style={{
                position: 'relative',
                width: '100%',
                borderRadius: '18px',
                padding: '8px',
                background: '#111827',
                border: '1px solid #1F2937',
                boxShadow: '0 20px 48px rgba(0, 0, 0, 0.18)',
              }}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              {/* 16:9 Viewfinder Monitor Screen */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '16 / 9',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  background: '#000000',
                }}
              >
                {HERO_SETUPS.map((setup, idx) => (
                  <div
                    key={setup.id}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      opacity: idx === activeSetupIdx ? 1 : 0,
                      transition: 'opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                      pointerEvents: idx === activeSetupIdx ? 'auto' : 'none',
                    }}
                  >
                    <Image
                      src={setup.image}
                      alt={setup.alt}
                      fill
                      sizes="(max-width: 960px) 100vw, 60vw"
                      priority={idx === 0}
                      style={{
                        objectFit: 'cover',
                        objectPosition: 'center',
                      }}
                    />
                  </div>
                ))}

                {/* Broadcast Viewfinder HUD Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    pointerEvents: 'none',
                    padding: '12px 16px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    background: 'linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 25%, rgba(0,0,0,0) 75%, rgba(0,0,0,0.75) 100%)',
                  }}
                >
                  {/* Top HUD bar */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      fontFamily: 'ui-monospace, monospace',
                      fontSize: '0.72rem',
                      letterSpacing: '0.06em',
                      color: '#FFFFFF',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                      <span
                        style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          backgroundColor: '#EF4444',
                          boxShadow: '0 0 8px rgba(239, 68, 68, 0.8)',
                        }}
                      />
                      <span style={{ fontWeight: 700, color: '#FFFFFF' }}>REC 4K UHD</span>
                    </div>

                    <div
                      style={{
                        background: 'rgba(0, 0, 0, 0.75)',
                        padding: '2px 8px',
                        borderRadius: '4px',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        color: '#E5E7EB',
                      }}
                    >
                      {currentSetup.cam}
                    </div>
                  </div>

                  {/* Bottom HUD bar */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'flex-end',
                      justifyContent: 'space-between',
                    }}
                  >
                    <div>
                      <span
                        style={{
                          display: 'inline-block',
                          fontSize: '0.68rem',
                          fontFamily: 'ui-monospace, monospace',
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          color: '#000000',
                          background: '#FFFFFF',
                          padding: '2px 6px',
                          borderRadius: '3px',
                          marginBottom: '2px',
                          fontWeight: 700,
                        }}
                      >
                        {currentSetup.tag}
                      </span>
                      <h4
                        style={{
                          margin: 0,
                          fontSize: '1rem',
                          color: '#FFFFFF',
                          fontWeight: 600,
                          textShadow: '0 2px 8px rgba(0,0,0,0.8)',
                        }}
                      >
                        {currentSetup.name}
                      </h4>
                    </div>

                    <div
                      style={{
                        display: 'flex',
                        gap: '3px',
                        alignItems: 'flex-end',
                        height: '14px',
                      }}
                    >
                      <span style={{ width: '3px', height: '40%', background: '#22C55E', borderRadius: '1px' }} />
                      <span style={{ width: '3px', height: '70%', background: '#22C55E', borderRadius: '1px' }} />
                      <span style={{ width: '3px', height: '90%', background: '#22C55E', borderRadius: '1px' }} />
                      <span style={{ width: '3px', height: '55%', background: '#EAB308', borderRadius: '1px' }} />
                    </div>
                  </div>
                </div>

                {/* Left/Right Nav Arrows */}
                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label="Previous studio setup"
                  style={{
                    position: 'absolute',
                    left: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 10,
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: 'rgba(0, 0, 0, 0.75)',
                    border: '1px solid rgba(255, 255, 255, 0.25)',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#FFFFFF';
                    e.currentTarget.style.color = '#000000';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(0, 0, 0, 0.75)';
                    e.currentTarget.style.color = '#FFFFFF';
                  }}
                >
                  <ChevronLeft size={18} />
                </button>

                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Next studio setup"
                  style={{
                    position: 'absolute',
                    right: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 10,
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: 'rgba(0, 0, 0, 0.75)',
                    border: '1px solid rgba(255, 255, 255, 0.25)',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#FFFFFF';
                    e.currentTarget.style.color = '#000000';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(0, 0, 0, 0.75)';
                    e.currentTarget.style.color = '#FFFFFF';
                  }}
                >
                  <ChevronRight size={18} />
                </button>
              </div>

              {/* Interactive Setup Switcher Tabs */}
              <div
                style={{
                  display: 'flex',
                  gap: '6px',
                  marginTop: '8px',
                  padding: '2px',
                  overflowX: 'auto',
                }}
              >
                {HERO_SETUPS.map((setup, idx) => {
                  const isActive = idx === activeSetupIdx;
                  return (
                    <button
                      key={setup.id}
                      type="button"
                      onClick={() => setActiveSetupIdx(idx)}
                      style={{
                        flex: 1,
                        padding: '0.45rem 0.65rem',
                        fontSize: '0.75rem',
                        fontWeight: isActive ? 700 : 500,
                        color: isActive ? '#000000' : '#D1D5DB',
                        background: isActive ? '#FFFFFF' : 'rgba(255, 255, 255, 0.08)',
                        border: isActive ? '1px solid #FFFFFF' : '1px solid rgba(255, 255, 255, 0.12)',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        whiteSpace: 'nowrap',
                        transition: 'all 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        if (!isActive) {
                          e.currentTarget.style.color = '#FFFFFF';
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.16)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive) {
                          e.currentTarget.style.color = '#D1D5DB';
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                        }
                      }}
                    >
                      {setup.name}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
