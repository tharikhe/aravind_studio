'use client';

import React, { useState } from 'react';
import { STUDIO_FEATURES, StudioFeature } from '@/data/features';

type CategoryFilter = 'all' | 'gear' | 'space' | 'comfort';

export default function StudioFeatures() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('all');

  const getFeatureIcon = (icon: string) => {
    switch (icon) {
      case 'ac':
        return (
          <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="8" y="8" width="32" height="16" rx="3" />
            <path d="M12 14h24" />
            <path d="M12 18h24" />
            <path d="M14 28q4 6 0 12" />
            <path d="M24 28q4 6 0 12" />
            <path d="M34 28q-4 6 0 12" />
          </svg>
        );
      case 'coffee':
        return (
          <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 12h20l-2 26a4 4 0 0 1-4 3.6H20a4 4 0 0 1-4-3.6L14 12z" />
            <path d="M12 18h24" />
            <path d="M28 6c0 2-2 4-4 4s-4-2-4-4" />
          </svg>
        );
      case 'dining':
        return (
          <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="8" y="20" width="32" height="6" rx="2" />
            <path d="M14 26v12" />
            <path d="M34 26v12" />
            <rect x="16" y="12" width="16" height="8" rx="2" />
            <path d="M20 16h8" />
          </svg>
        );
      case 'lighting':
        return (
          <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M24 6v4" />
            <path d="M10 14l3 3" />
            <path d="M38 14l-3 3" />
            <path d="M6 28h4" />
            <path d="M38 28h4" />
            <rect x="16" y="18" width="16" height="12" rx="2" />
            <path d="M18 36h12v6H18z" />
            <path d="M20 42h8" />
          </svg>
        );
      case 'lobby':
        return (
          <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="6" y="10" width="36" height="28" rx="3" />
            <path d="M6 24h36" />
            <circle cx="16" cy="32" r="3" />
            <path d="M28 30h10" />
            <path d="M28 34h6" />
          </svg>
        );
      case 'makeup':
        return (
          <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="8" y="12" width="32" height="24" rx="3" />
            <circle cx="24" cy="24" r="8" />
            <path d="M16 8v4" />
            <path d="M32 8v4" />
            <path d="M20 8h8" />
          </svg>
        );
      case 'monitor':
        return (
          <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="6" y="10" width="36" height="24" rx="3" />
            <path d="M18 38h12" />
            <path d="M24 34v4" />
            <circle cx="16" cy="22" r="3" />
            <circle cx="24" cy="22" r="3" />
            <circle cx="32" cy="22" r="3" />
          </svg>
        );
      case 'props':
        return (
          <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 38V18l14-10 14 10v20" />
            <path d="M10 38h28" />
            <rect x="18" y="26" width="12" height="12" rx="1" />
            <path d="M24 18v4" />
          </svg>
        );
      case 'mics':
        return (
          <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="18" y="6" width="12" height="22" rx="6" />
            <path d="M12 22a12 12 0 0 0 24 0" />
            <path d="M24 34v8" />
            <path d="M16 42h16" />
          </svg>
        );
      case 'cameras':
        return (
          <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="6" y="14" width="28" height="20" rx="3" />
            <path d="M34 20l8-4v16l-8-4" />
            <circle cx="20" cy="24" r="6" />
            <path d="M14 10h4" />
          </svg>
        );
      case 'soundproof':
        return (
          <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 20h6l8-8v24l-8-8H8z" />
            <path d="M28 16a8 8 0 0 1 0 16" />
            <path d="M34 12a14 14 0 0 1 0 24" />
          </svg>
        );
      case 'space':
        return (
          <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="6" y="14" width="36" height="24" rx="2" />
            <path d="M6 20h36" />
            <path d="M14 14V8" />
            <path d="M34 14V8" />
            <path d="M12 28h24" />
            <path d="M12 32h16" />
          </svg>
        );
      case 'sofas':
        return (
          <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 24h32v10a3 3 0 0 1-3 3H11a3 3 0 0 1-3-3V24z" />
            <path d="M11 24V18a2 2 0 0 1 2-2h22a2 2 0 0 1 2 2v6" />
            <path d="M8 28H6a2 2 0 0 0-2 2v3h6" />
            <path d="M40 28h2a2 2 0 0 1 2 2v3h-6" />
          </svg>
        );
      case 'armchairs':
      default:
        return (
          <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 22h28v12a4 4 0 0 1-4 4H14a4 4 0 0 1-4-4V22z" />
            <path d="M14 22V16a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v6" />
            <path d="M12 38v4" />
            <path d="M36 38v4" />
          </svg>
        );
    }
  };

  const categorizeFeature = (item: StudioFeature): CategoryFilter => {
    if (['cameras', 'mics', 'lighting', 'monitor'].includes(item.icon)) return 'gear';
    if (['space', 'soundproof', 'props', 'sofas', 'armchairs'].includes(item.icon)) return 'space';
    return 'comfort';
  };

  const filteredFeatures = STUDIO_FEATURES.filter((item) => {
    if (activeFilter === 'all') return true;
    return categorizeFeature(item) === activeFilter;
  });

  return (
    <section className="divider-top" id="studio-features">
      <div className="stg-container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(1.5rem, 2.5vw, 2.25rem)' }}>
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
            Studio Infrastructure
          </p>
          <h2 style={{ fontSize: 'clamp(1.85rem, 3.2vw, 2.6rem)', marginBottom: '0.75rem', color: '#FFFFFF' }}>
            Fully Equipped for Podcast &amp; Video
          </h2>
          <p
            className="bringer-large-text"
            style={{
              maxWidth: '36em',
              marginLeft: 'auto',
              marginRight: 'auto',
              fontSize: 'clamp(0.95rem, 1.2vw, 1.05rem)',
              color: '#B0B0B0',
            }}
          >
            Everything you need for seamless on-camera recording, from Sony Cineline cameras and sound treatment to dedicated creator amenities.
          </p>

          {/* Interactive Category Filter Pills */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '4px',
              borderRadius: '999px',
              background: '#0d0d0d',
              border: '1px solid #4D4D4D',
              marginTop: '1.25rem',
            }}
          >
            {[
              { id: 'all', label: 'All Features (14)' },
              { id: 'gear', label: 'Camera & Audio' },
              { id: 'space', label: 'Sets & Space' },
              { id: 'comfort', label: 'Guest Amenities' },
            ].map((tab) => {
              const isSelected = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveFilter(tab.id as CategoryFilter)}
                  style={{
                    padding: '0.4rem 1rem',
                    fontSize: '0.78rem',
                    fontWeight: isSelected ? 700 : 500,
                    borderRadius: '999px',
                    color: isSelected ? '#000000' : '#B0B0B0',
                    background: isSelected ? '#FFFFFF' : 'transparent',
                    border: isSelected ? '1px solid #FFFFFF' : '1px solid transparent',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Responsive Amenities Grid */}
        <div
          className="studio-features-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
            gap: 'clamp(0.75rem, 1.2vw, 1rem)',
            width: '100%',
          }}
        >
          {filteredFeatures.map((item) => (
            <article
              key={item.id}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.65rem',
                padding: '1.25rem 0.75rem',
                textAlign: 'center',
                background: '#0d0d0d',
                border: '1px solid #4D4D4D',
                borderRadius: '12px',
                transition: 'all 0.25s ease',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.4)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#FFFFFF';
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.background = '#141414';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(255, 255, 255, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#4D4D4D';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.background = '#0d0d0d';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.4)';
              }}
            >
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  color: '#FFFFFF',
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {getFeatureIcon(item.icon)}
              </div>
              <p
                style={{
                  margin: 0,
                  fontSize: '0.82rem',
                  lineHeight: 1.35,
                  color: '#FFFFFF',
                  fontWeight: 600,
                }}
              >
                <span>{item.title}</span>
                {item.subtitle && (
                  <span
                    style={{
                      display: 'block',
                      fontSize: '0.72rem',
                      color: '#7D7D7D',
                      marginTop: '2px',
                      fontWeight: 400,
                    }}
                  >
                    {item.subtitle}
                  </span>
                )}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
