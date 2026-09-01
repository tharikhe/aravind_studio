'use client';

import React from 'react';
import { STUDIO_FEATURES } from '@/data/features';

export default function StudioFeatures() {
  const getFeatureIcon = (icon: string) => {
    switch (icon) {
      case 'ac':
        return (
          <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round">
            <rect x="8" y="6" width="32" height="18" rx="2.5" />
            <path d="M12 12h24" />
            <path d="M12 16h24" />
            <path d="M12 20h24" />
            <path d="M14 30q4 8 0 14" />
            <path d="M24 30q4 8 0 14" />
            <path d="M34 30q-4 8 0 14" />
          </svg>
        );
      case 'coffee':
        return (
          <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 10h20l-2 28a4 4 0 0 1-4 3.6H20a4 4 0 0 1-4-3.6L14 10z" />
            <path d="M12 16h24" />
            <path d="M28 6c0 2-2 4-4 4s-4-2-4-4" />
          </svg>
        );
      case 'dining':
        return (
          <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round">
            <rect x="8" y="20" width="32" height="6" rx="2" />
            <path d="M14 26v12" />
            <path d="M34 26v12" />
            <rect x="16" y="12" width="16" height="8" rx="2" />
            <path d="M20 16h8" />
          </svg>
        );
      case 'lighting':
        return (
          <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round">
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
          <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round">
            <rect x="6" y="10" width="36" height="28" rx="3" />
            <path d="M6 24h36" />
            <circle cx="16" cy="32" r="3" />
            <path d="M28 30h10" />
            <path d="M28 34h6" />
          </svg>
        );
      case 'makeup':
        return (
          <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round">
            <rect x="8" y="12" width="32" height="24" rx="3" />
            <circle cx="24" cy="24" r="8" />
            <path d="M16 8v4" />
            <path d="M32 8v4" />
            <path d="M20 8h8" />
          </svg>
        );
      case 'monitor':
        return (
          <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round">
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
          <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 38V18l14-10 14 10v20" />
            <path d="M10 38h28" />
            <rect x="18" y="26" width="12" height="12" rx="1" />
            <path d="M24 18v4" />
          </svg>
        );
      case 'mics':
        return (
          <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round">
            <rect x="18" y="6" width="12" height="22" rx="6" />
            <path d="M12 22a12 12 0 0 0 24 0" />
            <path d="M24 34v8" />
            <path d="M16 42h16" />
          </svg>
        );
      case 'cameras':
        return (
          <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round">
            <rect x="6" y="14" width="28" height="20" rx="3" />
            <path d="M34 20l8-4v16l-8-4" />
            <circle cx="20" cy="24" r="6" />
            <path d="M14 10h4" />
          </svg>
        );
      case 'soundproof':
        return (
          <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 20h6l8-8v24l-8-8H8z" />
            <path d="M28 16a8 8 0 0 1 0 16" />
            <path d="M34 12a14 14 0 0 1 0 24" />
          </svg>
        );
      case 'space':
        return (
          <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round">
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
          <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 24h32v10a3 3 0 0 1-3 3H11a3 3 0 0 1-3-3V24z" />
            <path d="M11 24V18a2 2 0 0 1 2-2h22a2 2 0 0 1 2 2v6" />
            <path d="M8 28H6a2 2 0 0 0-2 2v3h6" />
            <path d="M40 28h2a2 2 0 0 1 2 2v3h-6" />
          </svg>
        );
      case 'armchairs':
      default:
        return (
          <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 22h28v12a4 4 0 0 1-4 4H14a4 4 0 0 1-4-4V22z" />
            <path d="M14 22V16a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v6" />
            <path d="M12 38v4" />
            <path d="M36 38v4" />
          </svg>
        );
    }
  };

  return (
    <section className="divider-top backlight-both" id="studio-features">
      <div className="stg-container">
        {/* Head */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
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
            Studio Infrastructure
          </p>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3.2vw, 2.6rem)', margin: 0 }}>
            Fully Equipped for Podcast &amp; Video
          </h2>
        </div>

        {/* 7-Col Grid */}
        <div
          className="studio-features-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(7, minmax(0, 1fr))',
            gap: 'clamp(0.85rem, 1.6vw, 1.25rem)',
            width: '100%',
          }}
        >
          {STUDIO_FEATURES.map((item) => (
            <article
              key={item.id}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '1.15rem 0.65rem 1.15rem',
                textAlign: 'center',
                background: 'rgba(26, 29, 36, 0.4)',
                border: '1px solid rgba(255, 255, 255, 0.07)',
                borderRadius: '10px',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(92, 157, 255, 0.35)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.background = 'rgba(26, 29, 36, 0.8)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.07)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.background = 'rgba(26, 29, 36, 0.4)';
              }}
            >
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  color: 'var(--bringer-s-text-accent)',
                  flexShrink: 0,
                }}
              >
                {getFeatureIcon(item.icon)}
              </div>
              <p
                style={{
                  margin: 0,
                  fontSize: '0.8rem',
                  lineHeight: 1.3,
                  color: 'rgba(255, 255, 255, 0.88)',
                  fontWeight: 500,
                }}
              >
                <span>{item.title}</span>
                {item.subtitle && (
                  <span
                    style={{
                      display: 'block',
                      fontSize: '0.72rem',
                      color: 'rgba(255, 255, 255, 0.55)',
                      marginTop: '2px',
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

      <style jsx>{`
        @media (max-width: 1200px) {
          :global(.studio-features-grid) {
            grid-template-columns: repeat(5, minmax(0, 1fr)) !important;
          }
        }
        @media (max-width: 900px) {
          :global(.studio-features-grid) {
            grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
          }
        }
        @media (max-width: 640px) {
          :global(.studio-features-grid) {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }
      `}</style>
    </section>
  );
}
