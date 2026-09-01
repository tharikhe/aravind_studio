'use client';

import React from 'react';
import { Palette, Armchair, Package, Users, UserCheck, Building2 } from 'lucide-react';

interface CustomShootProps {
  onOpenModal?: (inquiry?: string) => void;
}

const CUSTOM_SHOOT_ITEMS = [
  {
    title: 'Brand Colour Styling',
    desc: 'Match backdrop, lighting tones, and set dressing to your corporate brand palette.',
    icon: Palette,
  },
  {
    title: 'Custom Furniture Arrangement',
    desc: 'Configure armchairs, modular tables, and staging for your specific guest count.',
    icon: Armchair,
  },
  {
    title: 'Product Showcase Integration',
    desc: 'Integrate physical products naturally into the frame for D2C and sponsor-led shows.',
    icon: Package,
  },
  {
    title: 'Multi-Guest Panel Setup',
    desc: 'Expand 3-to-4 guest seating and dedicated camera coverage for roundtables and panels.',
    icon: Users,
  },
  {
    title: 'Founder Spotlight Layout',
    desc: 'Polished one-on-one layouts tailored for leadership, VC, and executive podcasts.',
    icon: UserCheck,
  },
  {
    title: 'Enterprise Studio Series',
    desc: 'Custom recurring set designs for internal town-halls and enterprise media channels.',
    icon: Building2,
  },
];

export default function CustomShoot({ onOpenModal }: CustomShootProps) {
  return (
    <section className="divider-top" id="custom-shoot">
      <div className="stg-container">
        {/* Head */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
          <p
            style={{
              margin: '0 0 0.5rem',
              fontSize: '0.75rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--bringer-s-text-accent)',
              fontWeight: 600,
            }}
          >
            Bespoke Production
          </p>
          <h2 style={{ fontSize: 'clamp(1.85rem, 3.2vw, 2.6rem)', marginBottom: '0.75rem' }}>
            Need a Custom Podcast Setup?
          </h2>
          <p
            className="bringer-large-text"
            style={{
              maxWidth: '38em',
              marginLeft: 'auto',
              marginRight: 'auto',
              fontSize: 'clamp(0.95rem, 1.2vw, 1.05rem)',
              color: 'rgba(255, 255, 255, 0.72)',
            }}
          >
            We can adapt the set, background, furniture, lighting, framing, and brand elements based on
            your specific show format.
          </p>
        </div>

        {/* 3-Col Grid */}
        <div
          className="custom-shoot-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            gap: 'clamp(1rem, 1.6vw, 1.5rem)',
          }}
        >
          {CUSTOM_SHOOT_ITEMS.map((item, idx) => {
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
                  background: 'linear-gradient(160deg, rgba(26, 29, 36, 0.75) 0%, rgba(14, 17, 23, 0.6) 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '14px',
                  transition: 'all 0.25s ease',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.25)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(92, 157, 255, 0.4)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 10px 28px rgba(63, 110, 233, 0.18)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.25)';
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: 'rgba(63, 110, 233, 0.15)',
                    border: '1px solid rgba(92, 157, 255, 0.3)',
                    color: '#5C9DFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '0.25rem',
                  }}
                >
                  <Icon size={18} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '0.4rem', color: '#F5F7FA', fontWeight: 600 }}>
                    {item.title}
                  </h4>
                  <p style={{ margin: 0, fontSize: '0.86rem', lineHeight: 1.55, color: 'rgba(255, 255, 255, 0.72)' }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {onOpenModal && (
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <button
              type="button"
              className="bringer-button is-secondary"
              onClick={() => onOpenModal('Custom Setup Request')}
              style={{
                fontSize: '0.9rem',
                padding: '0.75rem 1.6rem',
              }}
            >
              Discuss Custom Setup Requirements →
            </button>
          </div>
        )}
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
