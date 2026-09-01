'use client';

import React from 'react';

const WHY_CHOOSE_ITEMS = [
  {
    index: '01',
    title: 'Multiple Podcast Setups',
    desc: 'Choose from different studio environments for your show format and brand look.',
  },
  {
    index: '02',
    title: 'Multi-Camera 4K Recording',
    desc: 'Capture host, guest, and wide conversation angles simultaneously in 4K UHD.',
  },
  {
    index: '03',
    title: 'Broadcast Grade Audio',
    desc: 'Sound-treated acoustic room with Shure & Rode boom mics for clean dialogue.',
  },
  {
    index: '04',
    title: 'Studio Lighting Grid',
    desc: 'Godox overhead diffuse lighting designed for consistent on-camera look.',
  },
  {
    index: '05',
    title: 'Crew Support During Shoot',
    desc: 'Dedicated on-set engineers manage multi-camera switching, audio levels, and staging.',
  },
  {
    index: '06',
    title: 'Post-Production & Reels',
    desc: 'Turn each session into full episodes, short-form clips, teasers, and YouTube masters.',
  },
  {
    index: '07',
    title: 'Prime Indiranagar Location',
    desc: 'Centrally located Bangalore facility with lounge, makeup room, and creator amenities.',
  },
];

export default function WhyChoose() {
  return (
    <section className="divider-top" id="why-choose" style={{ background: '#FFFFFF' }}>
      <div className="stg-container">
        {/* Head */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}>
          <p
            style={{
              margin: '0 0 0.5rem',
              fontSize: '0.75rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#52525B',
              fontWeight: 600,
            }}
          >
            Why ARCC Media Production
          </p>
          <h2 style={{ fontSize: 'clamp(1.85rem, 3.2vw, 2.6rem)', marginBottom: '0.75rem', color: '#0A0A0A' }}>
            Why Choose ARCC for Your Podcast?
          </h2>
          <p
            className="bringer-large-text"
            style={{
              maxWidth: '40em',
              marginLeft: 'auto',
              marginRight: 'auto',
              fontSize: 'clamp(0.95rem, 1.2vw, 1.05rem)',
              color: '#52525B',
            }}
          >
            Purpose-built studio infrastructure, on-set production support, and optional post — designed
            for teams that need consistent, professional podcast output.
          </p>
        </div>

        {/* 3-Col Grid */}
        <div
          className="why-choose-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            gap: 'clamp(1rem, 1.6vw, 1.5rem)',
          }}
        >
          {WHY_CHOOSE_ITEMS.map((item, idx) => (
            <article
              key={item.index}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.65rem',
                padding: '1.5rem 1.35rem',
                borderRadius: '14px',
                border: '1px solid #E5E7EB',
                background: '#FFFFFF',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.04)',
                transition: 'all 0.25s ease',
                gridColumn: idx === 6 ? 'span 3' : 'auto',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#000000';
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 10px 28px rgba(0, 0, 0, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#E5E7EB';
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.04)';
              }}
            >
              <span
                style={{
                  fontSize: '0.75rem',
                  letterSpacing: '0.1em',
                  fontFamily: 'ui-monospace, monospace',
                  color: '#000000',
                  fontWeight: 700,
                }}
              >
                {item.index}
              </span>
              <h4 style={{ margin: 0, fontSize: '1.15rem', color: '#0A0A0A', lineHeight: 1.35, fontWeight: 600 }}>
                {item.title}
              </h4>
              <p
                style={{
                  margin: 0,
                  fontSize: '0.88rem',
                  lineHeight: 1.55,
                  color: '#52525B',
                }}
              >
                {item.desc}
              </p>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1200px) {
          :global(.why-choose-grid) {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }
        @media (max-width: 760px) {
          :global(.why-choose-grid) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
