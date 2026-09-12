'use client';

import React from 'react';
import { Camera, Lightbulb, MessageSquare, Video, Sliders, Coffee } from 'lucide-react';

export default function StudioFeatures() {
  const services = [
    {
      id: 'srv-1',
      title: 'PHOTOGRAPHY & LOOKBOOK',
      icon: Camera,
      desc: 'High-fashion editorial, commercial lookbooks, founder portraits, and seamless cyclorama shoots with high-precision Broncolor and Godox lighting.',
    },
    {
      id: 'srv-2',
      title: 'CREATIVE PRODUCTION',
      icon: Lightbulb,
      desc: 'Concept architecture, episodic podcast format design, set styling, and live camera switching engineered to captivate audiences.',
    },
    {
      id: 'srv-3',
      title: 'AUDIO & ACOUSTICS',
      icon: MessageSquare,
      desc: 'Acoustically isolated dialogue chambers with Shure SM7B broadcast microphones, cloudlifters, and dedicated on-site sound engineers.',
    },
    {
      id: 'srv-4',
      title: '4K CINE BROADCAST',
      icon: Video,
      desc: 'Triple-angle Sony FX3 and FX6 Cinema Line setups delivering uncompressed 10-bit color, cinematic depth of field, and precision framing.',
    },
    {
      id: 'srv-5',
      title: 'POST-PRODUCTION & REELS',
      icon: Sliders,
      desc: 'DaVinci Resolve color grading, multi-camera dialogue synchronization, vertical reels extraction, and same-week master file turnaround.',
    },
    {
      id: 'srv-6',
      title: 'CREATOR AMENITIES',
      icon: Coffee,
      desc: 'Private vanity greenroom with makeup mirrors, high-speed fiber internet, artisanal espresso bar, and executive guest lounge.',
    },
  ];

  return (
    <section
      id="glissando-services"
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
            Capabilities &amp; Infrastructure
          </p>
          <h2 className="glissando-title on-light">Services</h2>
          <span className="glissando-dash" style={{ color: '#0a0a0a' }} />
          <p className="glissando-subtext on-light">
            Every element inside ARCC Studio has been engineered to deliver flawless production value,
            combining elite cinema technology with bespoke creator comfort.
          </p>
        </div>

        {/* Glissando 3-Column Services Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            columnGap: 'clamp(1.5rem, 3.5vw, 3rem)',
            rowGap: 'clamp(2.5rem, 4.5vw, 4rem)',
            maxWidth: '1100px',
            margin: '0 auto',
          }}
          className="services-grid"
        >
          {services.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  padding: '1rem',
                  transition: 'transform 0.25s ease',
                }}
                className="service-item"
              >
                {/* Thin Minimalist Line Icon */}
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.25rem',
                    color: '#0a0a0a',
                  }}
                >
                  <Icon size={34} strokeWidth={1.25} />
                </div>

                {/* Uppercase Title */}
                <h3
                  style={{
                    fontSize: '0.88rem',
                    fontWeight: 700,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    marginBottom: '0.75rem',
                    color: '#0a0a0a',
                  }}
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontSize: '0.82rem',
                    lineHeight: 1.65,
                    color: '#71717a',
                    margin: 0,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .services-grid {
            grid-template-columns: 1fr !important;
          }
        }
        .service-item:hover {
          transform: translateY(-4px);
        }
      `}</style>
    </section>
  );
}
