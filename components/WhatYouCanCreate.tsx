'use client';

import React from 'react';
import { Mic, Video, Users, Youtube, Briefcase, GraduationCap, Film, Share2 } from 'lucide-react';

const CREATION_FORMATS = [
  {
    title: 'Founder Podcasts',
    desc: 'On-camera conversations for founders building an authentic personal brand.',
    icon: Mic,
  },
  {
    title: 'Brand Shows',
    desc: 'Flagship episodic series for marketing teams and high-growth brands.',
    icon: Video,
  },
  {
    title: 'Expert Interviews',
    desc: 'Structured long-form interviews with specialists, leaders, and guests.',
    icon: Users,
  },
  {
    title: 'YouTube Podcasts',
    desc: 'Video-first podcast formats optimized for retention on YouTube.',
    icon: Youtube,
  },
  {
    title: 'Corporate Series',
    desc: 'Internal and external town-hall shows for teams and global stakeholders.',
    icon: Briefcase,
  },
  {
    title: 'Educational Masterclasses',
    desc: 'Knowledge-sharing podcast formats with presentation slides and dual feeds.',
    icon: GraduationCap,
  },
  {
    title: 'Viral Reels & Shorts',
    desc: 'High-hook vertical clips extracted directly from your master recording.',
    icon: Film,
  },
  {
    title: 'LinkedIn & Social Cutdowns',
    desc: 'Platform-ready cutdowns with animated subtitles for social distribution.',
    icon: Share2,
  },
];

export default function WhatYouCanCreate() {
  return (
    <section className="divider-top" id="what-you-can-create">
      <div className="stg-container">
        {/* Head */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
          <p
            style={{
              margin: '0 0 0.5rem',
              fontSize: '0.75rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#B0B0B0',
              fontWeight: 600,
            }}
          >
            Production Formats
          </p>
          <h2 style={{ fontSize: 'clamp(1.85rem, 3.2vw, 2.6rem)', margin: 0, color: '#FFFFFF' }}>
            What You Can Create Here
          </h2>
        </div>

        {/* 4-Col Grid */}
        <div
          className="what-create-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
            gap: 'clamp(0.85rem, 1.4vw, 1.25rem)',
          }}
        >
          {CREATION_FORMATS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bringer-block"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  padding: '1.4rem 1.25rem',
                  minHeight: '100%',
                  background: '#0d0d0d',
                  border: '1px solid #4D4D4D',
                  borderRadius: '14px',
                  transition: 'all 0.25s ease',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.4)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#FFFFFF';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 10px 28px rgba(255, 255, 255, 0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#4D4D4D';
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.4)';
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid #4D4D4D',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '0.25rem',
                  }}
                >
                  <Icon size={18} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.08rem', marginBottom: '0.4rem', color: '#FFFFFF', fontWeight: 600 }}>
                    {item.title}
                  </h4>
                  <p style={{ margin: 0, fontSize: '0.86rem', lineHeight: 1.5, color: '#B0B0B0' }}>
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
