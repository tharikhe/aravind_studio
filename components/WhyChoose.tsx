'use client';

import React from 'react';

const WHY_CHOOSE_ITEMS = [
  {
    index: '01',
    title: 'Multiple podcast setups',
    desc: 'Choose from different studio environments for your show format and brand look.',
  },
  {
    index: '02',
    title: 'Multi-camera recording',
    desc: 'Capture host, guest, and wide conversation angles in one session.',
  },
  {
    index: '03',
    title: 'Professional audio',
    desc: 'Sound-treated rooms with boom mics and monitored recording for clean dialogue.',
  },
  {
    index: '04',
    title: 'Controlled lighting',
    desc: 'Studio lighting designed for consistent, flattering on-camera results.',
  },
  {
    index: '05',
    title: 'Crew support during shoot',
    desc: 'On-set operators help with framing, audio, and smooth recording flow.',
  },
  {
    index: '06',
    title: 'Editing and reels available',
    desc: 'Turn the same session into episodes, shorts, teasers, and platform clips.',
  },
  {
    index: '07',
    title: 'Located in Indiranagar',
    desc: 'Central Bangalore studio with prep rooms, lounge, and guest-friendly amenities.',
  },
];

export default function WhyChoose() {
  return (
    <section className="divider-top" id="why-choose">
      <div className="stg-container">
        {/* Head */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}>
          <p
            style={{
              margin: '0 0 0.65rem',
              fontSize: '0.75rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--bringer-s-text-accent)',
              fontWeight: 600,
            }}
          >
            Why ARCC Media Production
          </p>
          <h2 style={{ fontSize: 'clamp(1.85rem, 3.5vw, 2.75rem)', marginBottom: '0.85rem' }}>
            Why Choose ARCC for Your Podcast?
          </h2>
          <p
            className="bringer-large-text"
            style={{
              maxWidth: '40em',
              marginLeft: 'auto',
              marginRight: 'auto',
              fontSize: 'clamp(0.95rem, 1.3vw, 1.1rem)',
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
            gap: 'var(--stg-gap)',
          }}
        >
          {WHY_CHOOSE_ITEMS.map((item) => (
            <article
              key={item.index}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.65rem',
                padding: '1.5rem 1.35rem 1.6rem',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                background:
                  'linear-gradient(165deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.015) 100%)',
                boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.05)',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(92, 157, 255, 0.35)';
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow =
                  '0 12px 32px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = 'inset 0 1px 0 rgba(255, 255, 255, 0.05)';
              }}
            >
              <span
                style={{
                  fontSize: '0.75rem',
                  letterSpacing: '0.1em',
                  fontFamily: 'ui-monospace, monospace',
                  color: '#5C9DFF',
                  fontWeight: 600,
                }}
              >
                {item.index}
              </span>
              <h4 style={{ margin: 0, fontSize: '1.15rem', color: '#F5F7FA', lineHeight: 1.35 }}>
                {item.title}
              </h4>
              <p
                style={{
                  margin: 0,
                  fontSize: '0.9rem',
                  lineHeight: 1.55,
                  color: 'rgba(255, 255, 255, 0.72)',
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
