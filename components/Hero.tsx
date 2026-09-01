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
    image: 'https://winterfox.studio/img/slider/landing1.jpg',
    alt: 'Brand grey podcast studio with wooden bookshelf backdrop at ARCC Media Production',
  },
  {
    id: 'setup-2',
    name: 'Warm Lounge',
    tag: 'Setup 02',
    cam: 'Sony FX6 · 50mm',
    image: 'https://winterfox.studio/img/slider/landing10.jpg',
    alt: 'Warm lounge podcast studio with armchairs and red accent wall at ARCC Media Production',
  },
  {
    id: 'setup-3',
    name: 'Executive Dark',
    tag: 'Setup 03',
    cam: 'Sony FX6 · 85mm',
    image: 'https://winterfox.studio/img/podcast-experience/studio-grey.jpg',
    alt: 'Executive dark grey podcast studio with overhead lighting at ARCC Media Production',
  },
  {
    id: 'setup-4',
    name: 'Red Interview',
    tag: 'Setup 04',
    cam: 'Sony FX3 · 24mm',
    image: 'https://winterfox.studio/img/podcast-experience/studio-red.jpg',
    alt: 'Red interview podcast setup with Rode boom mics at ARCC Media Production',
  },
  {
    id: 'setup-5',
    name: 'Royal Blue Stage',
    tag: 'Setup 05',
    cam: 'Sony FX6 · 50mm',
    image: 'https://winterfox.studio/img/podcast-experience/blue-studio.jpg',
    alt: 'Blue production stage with Godox overhead lighting at ARCC Media Production',
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
      className="home-hero backlight-bottom"
      style={{
        paddingTop: 'clamp(1.5rem, 3vw, 3rem)',
        paddingBottom: 'clamp(2rem, 4vw, 4rem)',
        position: 'relative',
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
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                marginBottom: '1.25rem',
              }}
            >
              <span
                style={{
                  width: '7px',
                  height: '7px',
                  borderRadius: '50%',
                  backgroundColor: '#22C55E',
                  boxShadow: '0 0 10px #22C55E',
                }}
              />
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: 'rgba(255, 255, 255, 0.88)',
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
                fontSize: 'clamp(2.4rem, 4.2vw, 3.5rem)',
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: '-0.04em',
                marginBottom: '1.25rem',
                color: '#F5F7FA',
              }}
            >
              Podcast Studio <br className="stg-hide-tp" />
              <span
                style={{
                  background: 'linear-gradient(135deg, #5C9DFF 0%, #FFFFFF 100%)',
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
                fontSize: 'clamp(1rem, 1.25vw, 1.15rem)',
                lineHeight: 1.6,
                color: 'rgba(255, 255, 255, 0.78)',
                marginBottom: '1.75rem',
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
                marginBottom: '1.75rem',
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
                  padding: '0.85rem 1.85rem',
                  fontSize: '0.95rem',
                  minHeight: '48px',
                }}
              >
                <span>Book a Session</span>
                <ArrowRight size={16} />
              </button>

              <a
                href="#podcast-setups"
                className="bringer-button is-secondary"
                style={{
                  padding: '0.85rem 1.6rem',
                  fontSize: '0.95rem',
                  minHeight: '48px',
                }}
              >
                Explore 10 Setups
              </a>
            </div>

            {/* Studio Specs Bar */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.75rem 1.25rem',
                paddingTop: '1.25rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                width: '100%',
                fontSize: '0.82rem',
                color: 'rgba(255, 255, 255, 0.65)',
              }}
            >
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                <Video size={14} style={{ color: '#5C9DFF' }} /> 4K Multi-Cam
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                <Mic size={14} style={{ color: '#5C9DFF' }} /> Rode Broadcast Mics
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                <Sparkles size={14} style={{ color: '#5C9DFF' }} /> Soundproofed
              </span>
            </div>

            {/* Direct Contact Phone Link */}
            <div style={{ marginTop: '0.85rem' }}>
              <a
                href="tel:+919605533366"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  fontSize: '0.88rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#5C9DFF')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)')}
              >
                <Phone size={14} style={{ color: '#5C9DFF' }} />
                <span>Direct Line: <strong style={{ color: '#fff' }}>+91 960 55 333 66</strong></span>
              </a>
            </div>
          </div>

          {/* Right Column: Signature Studio Viewfinder & Setup Switcher */}
          <div className="stg-col-7 stg-tp-col-12">
            <div
              style={{
                position: 'relative',
                width: '100%',
                borderRadius: '16px',
                padding: '8px',
                background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.02) 100%)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                boxShadow: '0 24px 60px rgba(0, 0, 0, 0.75)',
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
                  borderRadius: '10px',
                  overflow: 'hidden',
                  background: '#07090D',
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
                    background: 'linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0) 25%, rgba(0,0,0,0) 75%, rgba(0,0,0,0.65) 100%)',
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
                      color: 'rgba(255, 255, 255, 0.9)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                      <span
                        style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          backgroundColor: '#EF4444',
                          animation: 'pulse 1.8s infinite',
                        }}
                      />
                      <span style={{ fontWeight: 700, color: '#fff' }}>REC 4K UHD</span>
                    </div>

                    <div
                      style={{
                        background: 'rgba(0, 0, 0, 0.65)',
                        padding: '2px 8px',
                        borderRadius: '4px',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
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
                          color: '#5C9DFF',
                          background: 'rgba(7, 9, 13, 0.75)',
                          padding: '2px 6px',
                          borderRadius: '3px',
                          marginBottom: '2px',
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
                      <span style={{ width: '3px', height: '55%', background: '#22C55E', borderRadius: '1px' }} />
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
                    background: 'rgba(0, 0, 0, 0.7)',
                    border: '1px solid rgba(255, 255, 255, 0.25)',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(0, 0, 0, 0.95)')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(0, 0, 0, 0.7)')}
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
                    background: 'rgba(0, 0, 0, 0.7)',
                    border: '1px solid rgba(255, 255, 255, 0.25)',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(0, 0, 0, 0.95)')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(0, 0, 0, 0.7)')}
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
                        fontWeight: isActive ? 600 : 500,
                        color: isActive ? '#FFFFFF' : 'rgba(255, 255, 255, 0.6)',
                        background: isActive ? 'rgba(63, 110, 233, 0.25)' : 'rgba(255, 255, 255, 0.03)',
                        border: isActive
                          ? '1px solid rgba(92, 157, 255, 0.6)'
                          : '1px solid rgba(255, 255, 255, 0.06)',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        whiteSpace: 'nowrap',
                        transition: 'all 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        if (!isActive) {
                          e.currentTarget.style.color = '#fff';
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive) {
                          e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)';
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
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
