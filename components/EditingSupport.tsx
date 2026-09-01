'use client';

import React from 'react';
import { Scissors, Smartphone, Volume2, Sliders, PlaySquare, Image as ImageIcon } from 'lucide-react';

const EDITING_ITEMS = [
  {
    title: 'Full Episode Editing',
    desc: 'Structured multicam switching, paced cuts, graphic lower thirds, and master exports.',
    icon: Scissors,
  },
  {
    title: 'Shorts, Reels & TikToks',
    desc: 'High-hook vertical clips with dynamic captions and zooms extracted from your recording.',
    icon: Smartphone,
  },
  {
    title: 'Broadcast Audio Cleanup',
    desc: 'Advanced noise removal, voice leveling, EQ compression, and acoustic mastering.',
    icon: Volume2,
  },
  {
    title: 'Cinematic Colour Grading',
    desc: 'Consistent colour tone and LUT application matching across multi-camera Sony angles.',
    icon: Sliders,
  },
  {
    title: 'Custom Intro & Outro Motion',
    desc: 'Branded animated openers, musical stingers, and calls-to-action for show continuity.',
    icon: PlaySquare,
  },
  {
    title: 'High-CTR YouTube Thumbnails',
    desc: 'Click-optimized episode cover art and thumbnails designed for maximum YouTube reach.',
    icon: ImageIcon,
  },
];

export default function EditingSupport() {
  return (
    <section className="divider-top" id="editing-support" style={{ background: '#FFFFFF' }}>
      <div className="stg-container">
        {/* Head */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
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
            Post-Production
          </p>
          <h2 style={{ fontSize: 'clamp(1.85rem, 3.2vw, 2.6rem)', marginBottom: '0.75rem', color: '#0A0A0A' }}>
            Podcast Editing Support
          </h2>
          <p
            className="bringer-large-text"
            style={{
              maxWidth: '38em',
              marginLeft: 'auto',
              marginRight: 'auto',
              fontSize: 'clamp(0.95rem, 1.2vw, 1.05rem)',
              color: '#52525B',
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
            gap: 'clamp(1rem, 1.6vw, 1.5rem)',
          }}
        >
          {EDITING_ITEMS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bringer-block"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  padding: '1.5rem 1.35rem',
                  minHeight: '100%',
                  background: '#FFFFFF',
                  border: '1px solid #E5E7EB',
                  borderRadius: '14px',
                  transition: 'all 0.25s ease',
                  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.04)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#000000';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#E5E7EB';
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.04)';
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: '#F4F5F7',
                    border: '1px solid #E5E7EB',
                    color: '#000000',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '0.25rem',
                  }}
                >
                  <Icon size={18} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '0.4rem', color: '#0A0A0A', fontWeight: 600 }}>
                    {item.title}
                  </h4>
                  <p style={{ margin: 0, fontSize: '0.86rem', lineHeight: 1.55, color: '#52525B' }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
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
