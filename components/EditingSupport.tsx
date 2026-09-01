'use client';

import React from 'react';

const EDITING_ITEMS = [
  {
    title: 'Full episode editing',
    desc: 'Structured edits with pacing, cuts, and platform-ready masters.',
  },
  {
    title: 'Shorts and reels',
    desc: 'Vertical and short-form clips from the same podcast session.',
  },
  {
    title: 'Audio cleanup',
    desc: 'Noise reduction, levelling, and dialogue polish.',
  },
  {
    title: 'Colour correction',
    desc: 'Consistent colour across cameras and episodes.',
  },
  {
    title: 'Intro/outro',
    desc: 'Branded openers and closers for recurring series.',
  },
  {
    title: 'Thumbnail support',
    desc: 'Episode thumbnails aligned to your show identity.',
  },
];

export default function EditingSupport() {
  return (
    <section className="divider-top" id="editing-support">
      <div className="stg-container">
        {/* Head */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}>
          <h2 style={{ fontSize: 'clamp(1.85rem, 3.5vw, 2.75rem)', marginBottom: '0.85rem' }}>
            Podcast Editing Support
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
            Shoot once and convert the same session into full episodes, reels, shorts, teasers,
            thumbnails, and platform-ready exports.
          </p>
        </div>

        {/* 3-Col Grid */}
        <div
          className="editing-support-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            gap: 'var(--stg-gap)',
          }}
        >
          {EDITING_ITEMS.map((item, idx) => (
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
          :global(.editing-support-grid) {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }
        @media (max-width: 640px) {
          :global(.editing-support-grid) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
