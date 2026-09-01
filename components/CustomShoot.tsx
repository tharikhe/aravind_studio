'use client';

import React from 'react';

const CUSTOM_SHOOT_ITEMS = [
  {
    title: 'Brand colour styling',
    desc: 'Match backdrop, accents, and set dressing to your brand palette.',
  },
  {
    title: 'Custom furniture arrangement',
    desc: 'Configure seating and layout for your show format and guest count.',
  },
  {
    title: 'Product placement',
    desc: 'Integrate products naturally into the frame for brand-led shows.',
  },
  {
    title: 'Multi-guest setup',
    desc: 'Expand seating and camera coverage for panel or group podcasts.',
  },
  {
    title: 'Founder interview setup',
    desc: 'Polished one-on-one layouts for leadership and founder conversations.',
  },
  {
    title: 'Corporate podcast setup',
    desc: 'Professional environments for company-owned shows and series.',
  },
];

export default function CustomShoot() {
  return (
    <section className="divider-top" id="custom-shoot">
      <div className="stg-container">
        {/* Head */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}>
          <h2 style={{ fontSize: 'clamp(1.85rem, 3.5vw, 2.75rem)', marginBottom: '0.85rem' }}>
            Need a Custom Podcast Setup?
          </h2>
          <p
            className="bringer-large-text"
            style={{
              maxWidth: '38em',
              marginLeft: 'auto',
              marginRight: 'auto',
              fontSize: 'clamp(0.95rem, 1.3vw, 1.1rem)',
            }}
          >
            We can adapt the set, background, furniture, lighting, framing, and brand elements based on
            your podcast format.
          </p>
        </div>

        {/* 3-Col Grid */}
        <div
          className="custom-shoot-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            gap: 'var(--stg-gap)',
          }}
        >
          {CUSTOM_SHOOT_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="bringer-block"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '1.6rem 1.4rem',
                minHeight: '100%',
                background: 'rgba(26, 29, 36, 0.65)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '12px',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(92, 157, 255, 0.35)';
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.35)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.25)';
              }}
            >
              <div>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '0.65rem', color: '#F5F7FA' }}>
                  {item.title}
                </h4>
                <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: 1.5, color: 'rgba(255, 255, 255, 0.72)' }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          :global(.custom-shoot-grid) {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }
        @media (max-width: 640px) {
          :global(.custom-shoot-grid) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
