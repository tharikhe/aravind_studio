'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface ClientTestimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

const TESTIMONIALS: ClientTestimonial[] = [
  {
    id: 't-1',
    quote:
      'ARCC provided the exact cinematic fidelity and seamless production workflow our podcast needed. The sound isolation, Aputure lighting, and multi-cam Sony FX6 setup are unmatched.',
    author: 'JESSICA RAO',
    role: 'HOST & CREATOR / THE VENTURE HORIZON',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
  },
  {
    id: 't-2',
    quote:
      'The acoustic isolation is absolute. We walked in, plugged in our notes, and walked away with 4K color-graded master episodes and 15 viral vertical cutdowns within 48 hours.',
    author: 'VIKRAM SUNDARAM',
    role: 'FOUNDER & MANAGING PARTNER / PEAKSCALE',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
  },
  {
    id: 't-3',
    quote:
      'From editorial portraiture to multi-mic panel discussions, ARCC delivers international production quality right in Chennai and Bangalore. Outstanding facility and crew.',
    author: 'PRIYA CHANDRASEKHAR',
    role: 'HEAD OF BRAND & MEDIA / NEXUS GLOBAL',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
  },
];

export default function TestimonialsClients() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeTestimonial = TESTIMONIALS[activeIdx];

  return (
    <section
      id="glissando-clients"
      style={{
        position: 'relative',
        background: '#ffffff',
        color: '#0a0a0a',
        paddingTop: 'clamp(5.5rem, 8vw, 8rem)',
        paddingBottom: 'clamp(5.5rem, 8vw, 8rem)',
        zIndex: 1,
      }}
    >
      <div className="stg-container">
        {/* Glissando Section Header */}
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
            Verified Client Praise
          </p>
          <h2 className="glissando-title on-light">Our Happy Clients</h2>
          <span className="glissando-dash" style={{ color: '#0a0a0a' }} />
          <p className="glissando-subtext on-light">
            Recognized by top creators, tech leaders, and media networks across India for exceptional production quality.
          </p>
        </div>

        {/* Glissando Boxed Quote Container */}
        <div
          style={{
            maxWidth: '820px',
            margin: '0 auto 2.5rem',
            padding: 'clamp(2rem, 4vw, 3rem)',
            background: '#ffffff',
            border: '1px solid #e4e4e7',
            textAlign: 'center',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
            position: 'relative',
          }}
        >
          {/* Subtle Wireframe Corner Marks */}
          <span
            style={{
              position: 'absolute',
              top: '-1px',
              left: '-1px',
              width: '12px',
              height: '12px',
              borderTop: '2px solid #000000',
              borderLeft: '2px solid #000000',
            }}
          />
          <span
            style={{
              position: 'absolute',
              bottom: '-1px',
              right: '-1px',
              width: '12px',
              height: '12px',
              borderBottom: '2px solid #000000',
              borderRight: '2px solid #000000',
            }}
          />

          <p
            style={{
              fontSize: 'clamp(0.95rem, 1.25vw, 1.12rem)',
              lineHeight: 1.8,
              color: '#18181b',
              fontWeight: 400,
              fontStyle: 'normal',
              marginBottom: '1.75rem',
            }}
          >
            &ldquo;{activeTestimonial.quote}&rdquo;
          </p>

          <p
            style={{
              fontSize: '0.74rem',
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#0a0a0a',
              margin: 0,
            }}
          >
            {activeTestimonial.author}
          </p>
          <p
            style={{
              fontSize: '0.68rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#71717a',
              marginTop: '4px',
              marginBottom: 0,
            }}
          >
            {activeTestimonial.role}
          </p>
        </div>

        {/* Glissando Avatar Switcher Row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '4.5rem',
          }}
        >
          {TESTIMONIALS.map((t, idx) => {
            const isSelected = activeIdx === idx;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => setActiveIdx(idx)}
                aria-label={`Select testimonial by ${t.author}`}
                style={{
                  position: 'relative',
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: isSelected ? '2px solid #000000' : '2px solid transparent',
                  opacity: isSelected ? 1 : 0.45,
                  transform: isSelected ? 'scale(1.1)' : 'scale(1)',
                  transition: 'all 0.25s ease',
                  cursor: 'pointer',
                  padding: 0,
                }}
              >
                <Image
                  src={t.avatar}
                  alt={t.author}
                  fill
                  loading="lazy"
                  style={{
                    objectFit: 'cover',
                    filter: 'grayscale(100%)',
                  }}
                />
              </button>
            );
          })}
        </div>

        {/* Monochromatic Partner & Gear Logo Band (Exact Glissando Detail) */}
        <div
          style={{
            borderTop: '1px solid #f4f4f5',
            paddingTop: '3rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: 'clamp(2rem, 5vw, 4.5rem)',
            opacity: 0.7,
          }}
        >
          {['SPOTIFY', 'APPLE PODCASTS', 'YOUTUBE CINE', 'SONY CINEMA', 'SHURE', 'SENNHEISER'].map(
            (brand) => (
              <span
                key={brand}
                style={{
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: '#71717a',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#000000')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#71717a')}
              >
                {brand}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
