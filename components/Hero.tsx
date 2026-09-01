'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Phone, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';

interface HeroProps {
  onOpenModal: (inquiry?: string) => void;
}

const HERO_SLIDES = [
  {
    image: 'https://winterfox.studio/img/slider/landing1.jpg',
    alt: 'Podcast interview set with grey armchairs, microphones, and bookshelf backdrop at ARCC Media Production',
  },
  {
    image: 'https://winterfox.studio/img/slider/landing10.jpg',
    alt: 'Red-wall podcast conversation set with armchairs, microphones, and studio lighting at ARCC Media Production',
  },
  {
    image: 'https://winterfox.studio/img/podcast-experience/studio-grey.jpg',
    alt: 'Grey podcast studio with professional overhead lighting and dual seating at ARCC Media Production',
  },
  {
    image: 'https://winterfox.studio/img/podcast-experience/studio-red.jpg',
    alt: 'Red-wall podcast interview studio with dual seating and professional microphones at ARCC Media Production',
  },
  {
    image: 'https://winterfox.studio/img/slider/landing4.jpg',
    alt: 'Grey podcast studio with facing armchairs, microphones, and wooden bookshelf at ARCC Media Production',
  },
  {
    image: 'https://winterfox.studio/img/podcast-experience/blue-studio.jpg',
    alt: 'Blue-wall podcast production stage with professional lighting at ARCC Media Production',
  },
];

export default function Hero({ onOpenModal }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section
      className="home-hero backlight-bottom"
      style={{
        paddingTop: 'clamp(1.5rem, 2.5vw, 2.5rem)',
        paddingBottom: 'clamp(2rem, 3.5vw, 3.5rem)',
      }}
    >
      <div className="stg-container">
        <div
          className="stg-row"
          style={{
            alignItems: 'center',
            rowGap: '2rem',
          }}
        >
          {/* Left Column: Hero Content */}
          <div
            className="stg-col-5 stg-tp-col-12"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}
          >
            <h1
              style={{
                fontSize: 'clamp(2.35rem, 4vw, 3.3rem)',
                fontWeight: 700,
                lineHeight: 1.15,
                letterSpacing: '-0.035em',
                marginBottom: '1rem',
                color: '#F5F7FA',
              }}
            >
              Podcast Studio in Bangalore
            </h1>

            <p
              className="bringer-large-text"
              style={{
                fontSize: 'clamp(1rem, 1.25vw, 1.125rem)',
                lineHeight: 1.6,
                color: 'rgba(255, 255, 255, 0.8)',
                marginBottom: '1.75rem',
              }}
            >
              Premium podcast and video studio in Bengaluru offering fully equipped recording spaces,
              multi-camera production, professional lighting, broadcast-quality audio, and
              post-production editing services.
            </p>

            {/* Clean, Prominent CTAs */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
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
                  padding: '0.8rem 1.75rem',
                  fontSize: '0.92rem',
                }}
              >
                Book a Shoot
              </button>
              <a
                href="#podcast-setups"
                className="bringer-button is-secondary"
                style={{
                  padding: '0.8rem 1.75rem',
                  fontSize: '0.92rem',
                }}
              >
                View Setups
              </a>
            </div>

            {/* Minimal & Elegant Direct Contact */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '0.65rem 1rem',
                paddingTop: '1rem',
                borderTop: '1px solid rgba(245, 247, 250, 0.1)',
                width: '100%',
              }}
            >
              <span
                style={{
                  fontSize: '0.8rem',
                  color: '#8A99AD',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  fontWeight: 600,
                }}
              >
                Call / WhatsApp:
              </span>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <a
                  href="tel:+919605533366"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    color: '#F5F7FA',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#5C9DFF')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#F5F7FA')}
                >
                  <Phone size={15} style={{ color: '#5C9DFF' }} />
                  <span>+91 960 55 333 66</span>
                </a>

                <a
                  href="https://wa.me/919605533366?text=Hi%20ARCC%20Media%20Production%2C%20I%20am%20interested%20in%20booking%20the%20podcast%20studio."
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat on WhatsApp"
                  title="Chat on WhatsApp"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'rgba(37, 211, 102, 0.15)',
                    border: '1px solid rgba(37, 211, 102, 0.4)',
                    color: '#25D366',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#25D366';
                    e.currentTarget.style.color = '#000';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(37, 211, 102, 0.15)';
                    e.currentTarget.style.color = '#25D366';
                  }}
                >
                  <MessageCircle size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Slider */}
          <div className="stg-col-7 stg-tp-col-12">
            <div
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '16 / 9',
                borderRadius: '14px',
                overflow: 'hidden',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                background: '#0e1117',
              }}
            >
              {HERO_SLIDES.map((slide, idx) => (
                <div
                  key={idx}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    opacity: idx === currentSlide ? 1 : 0,
                    transition: 'opacity 0.6s ease-in-out',
                    pointerEvents: idx === currentSlide ? 'auto' : 'none',
                  }}
                >
                  <Image
                    src={slide.image}
                    alt={slide.alt}
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

              {/* Slider Nav Arrows */}
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous slide"
                style={{
                  position: 'absolute',
                  left: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 10,
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(0, 0, 0, 0.65)',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(0, 0, 0, 0.9)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(0, 0, 0, 0.65)')}
              >
                <ChevronLeft size={20} />
              </button>

              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next slide"
                style={{
                  position: 'absolute',
                  right: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 10,
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(0, 0, 0, 0.65)',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(0, 0, 0, 0.9)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(0, 0, 0, 0.65)')}
              >
                <ChevronRight size={20} />
              </button>

              {/* Dots / Indicators */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '12px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  zIndex: 10,
                  display: 'flex',
                  gap: '6px',
                  background: 'rgba(0, 0, 0, 0.5)',
                  padding: '4px 8px',
                  borderRadius: '12px',
                  backdropFilter: 'blur(4px)',
                }}
              >
                {HERO_SLIDES.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    aria-label={`Slide ${idx + 1}`}
                    onClick={() => setCurrentSlide(idx)}
                    style={{
                      width: idx === currentSlide ? '18px' : '6px',
                      height: '6px',
                      borderRadius: '3px',
                      background: idx === currentSlide ? '#5C9DFF' : 'rgba(255, 255, 255, 0.4)',
                      transition: 'all 0.25s ease',
                      border: 'none',
                      padding: 0,
                      cursor: 'pointer',
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
