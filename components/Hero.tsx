'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Phone, ChevronLeft, ChevronRight } from 'lucide-react';

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
        paddingTop: 'clamp(1.5rem, 3.5vw, 3rem)',
        paddingBottom: 'clamp(2.5rem, 5vw, 4.5rem)',
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
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.35rem 0.85rem',
                borderRadius: '999px',
                background: 'rgba(92, 157, 255, 0.1)',
                border: '1px solid rgba(92, 157, 255, 0.25)',
                marginBottom: '1rem',
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#5C9DFF',
                  boxShadow: '0 0 8px #5C9DFF',
                }}
              />
              <span
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  color: '#5C9DFF',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                ARCC Media Production
              </span>
            </div>

            <h1
              style={{
                fontSize: 'clamp(2.35rem, 4.2vw, 3.4rem)',
                fontWeight: 700,
                lineHeight: 1.12,
                letterSpacing: '-0.04em',
                marginBottom: '1.25rem',
                color: '#F5F7FA',
              }}
            >
              Podcast Studio in Bangalore
            </h1>

            <p
              className="bringer-large-text"
              style={{
                fontSize: 'clamp(1rem, 1.3vw, 1.125rem)',
                lineHeight: 1.55,
                color: 'rgba(255, 255, 255, 0.82)',
                marginBottom: '1.75rem',
              }}
            >
              ARCC Media Production is Bengaluru&apos;s premier podcast and video studio offering fully equipped recording spaces,
              multi-camera production, professional lighting, broadcast-quality audio, and
              post-production editing services.
            </p>

            {/* CTAs */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.75rem',
                width: '100%',
                marginBottom: '1.75rem',
              }}
            >
              <button
                type="button"
                className="bringer-button"
                onClick={() => onOpenModal('Podcast Production')}
                style={{
                  flex: '1 1 auto',
                  minHeight: '48px',
                  fontSize: '0.9rem',
                }}
              >
                Book a Shoot
              </button>
              <a
                href="#podcast-setups"
                className="bringer-button is-secondary"
                style={{
                  flex: '1 1 auto',
                  minHeight: '48px',
                  fontSize: '0.9rem',
                }}
              >
                View Setups
              </a>
            </div>

            {/* Direct Contact Block */}
            <div
              className="wf-direct-contact"
              style={{
                width: '100%',
                paddingTop: '1.25rem',
                borderTop: '1px solid rgba(245, 247, 250, 0.12)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.35rem',
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: '0.75rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#8A99AD',
                  fontWeight: 600,
                }}
              >
                Call or WhatsApp
              </p>
              <a
                href="tel:+919605533366"
                style={{
                  fontSize: 'clamp(1.35rem, 2.2vw, 1.6rem)',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  letterSpacing: '0.02em',
                  margin: '0.2rem 0 0.5rem',
                  textDecoration: 'none',
                }}
              >
                +91 960 55 333 66
              </a>

              <div
                style={{
                  display: 'flex',
                  gap: '0.65rem',
                  width: '100%',
                }}
              >
                <a
                  href="tel:+919605533366"
                  style={{
                    flex: 1,
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.45rem',
                    minHeight: '42px',
                    padding: '0.5rem 1rem',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: '#5C9DFF',
                    background: 'rgba(63, 110, 233, 0.12)',
                    border: '1px solid rgba(63, 110, 233, 0.35)',
                    borderRadius: '6px',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <Phone size={16} />
                  <span>Call</span>
                </a>

                <a
                  href="https://wa.me/919605533366?text=Hi%20ARCC%20Media%20Production%2C%20I%20am%20interested%20in%20booking%20the%20podcast%20studio."
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    flex: 1,
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.45rem',
                    minHeight: '42px',
                    padding: '0.5rem 1rem',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: '#25D366',
                    background: 'rgba(37, 211, 102, 0.12)',
                    border: '1px solid rgba(37, 211, 102, 0.35)',
                    borderRadius: '6px',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    width="16"
                    height="16"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span>WhatsApp</span>
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
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 16px 48px rgba(0, 0, 0, 0.55)',
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
