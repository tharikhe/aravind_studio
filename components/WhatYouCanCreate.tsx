'use client';

import React from 'react';

const CREATION_FORMATS = [
  {
    title: 'Founder podcasts',
    desc: 'On-camera conversations for founders building a personal brand.',
  },
  {
    title: 'Brand podcasts',
    desc: 'Series content for marketing teams and growing brands.',
  },
  {
    title: 'Expert interviews',
    desc: 'Structured interviews with specialists, leaders, and guests.',
  },
  {
    title: 'YouTube podcasts',
    desc: 'Video-first podcast formats built for YouTube publishing.',
  },
  {
    title: 'Corporate podcasts',
    desc: 'Internal and external shows for teams and stakeholders.',
  },
  {
    title: 'Educational shows',
    desc: 'Lesson-style and knowledge-sharing podcast formats.',
  },
  {
    title: 'Reels from podcast episodes',
    desc: 'Short vertical clips cut from the same recording session.',
  },
  {
    title: 'LinkedIn and YouTube clips',
    desc: 'Platform-ready cutdowns for social distribution.',
  },
];

export default function WhatYouCanCreate() {
  return (
    <section className="divider-top" id="what-you-can-create">
      <div className="stg-container">
        {/* Head */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}>
          <h2 style={{ fontSize: 'clamp(1.85rem, 3.5vw, 2.75rem)', margin: 0 }}>
            What You Can Create Here
          </h2>
        </div>

        {/* 4-Col Grid */}
        <div
          className="what-create-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
            gap: 'var(--stg-gap)',
          }}
        >
          {CREATION_FORMATS.map((item, idx) => (
            <div
              key={idx}
              className="bringer-block"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '1.5rem 1.35rem',
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
                <h4 style={{ fontSize: '1.15rem', marginBottom: '0.65rem', color: '#F5F7FA' }}>
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
          :global(.what-create-grid) {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }
        @media (max-width: 640px) {
          :global(.what-create-grid) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
