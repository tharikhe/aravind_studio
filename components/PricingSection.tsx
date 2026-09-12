'use client';

import React from 'react';
import { Check } from 'lucide-react';

interface PricingSectionProps {
  onOpenModal: (inquiry?: string, service?: string) => void;
}

interface PricingTier {
  id: string;
  name: string;
  price: string;
  period: string;
  desc: string;
  isPopular?: boolean;
  features: string[];
}

const PRICING_TIERS: PricingTier[] = [
  {
    id: 'tier-standard',
    name: 'STANDARD',
    price: '₹2,499',
    period: '/ hour',
    desc: 'Self-recording for independent podcasters and solo creators who need broadcast acoustics.',
    features: [
      '1x Setup Environment of Choice',
      'Dual Shure SM7B Microphones',
      'Acoustically Isolated Chamber',
      'High-Speed RAW Audio Offload',
      'Studio Floor Assistant',
    ],
  },
  {
    id: 'tier-creative',
    name: 'CREATIVE',
    price: '₹7,999',
    period: '/ 2-hr block',
    desc: 'Multi-camera cine capture with an on-site camera operator and live audio technician.',
    features: [
      'Choice of 10 Architectural Sets',
      '3x Sony FX3 4K Cinema Line Cameras',
      'Full Aputure Key & Rim Lighting',
      'Live Sound Engineer Monitoring',
      'Immediate 4K 10-Bit File Handover',
    ],
  },
  {
    id: 'tier-deluxe',
    name: 'DELUXE',
    price: '₹14,999',
    period: '/ episode master',
    desc: 'Full end-to-end podcast production including multicam shoot, master edit, and viral clips.',
    isPopular: true,
    features: [
      '3-Hour Dedicated Studio Session',
      '3x Sony Cinema Line FX6/FX3 Rig',
      'Full Multi-Cam Master Episode Edit',
      '3x Polished Vertical Reels (9:16)',
      'DaVinci Resolve Color Master',
      'Thumbnail Art & Waveform Teaser',
    ],
  },
  {
    id: 'tier-vip',
    name: 'VIP RESIDENCY',
    price: '₹44,999',
    period: '/ monthly retain',
    desc: 'Complete seasonal broadcast partnership for executive founders and venture media shows.',
    features: [
      '4x Full Production Episodes / Month',
      'Custom Backdrop Branding & Props',
      '12x Edited Vertical Viral Reels',
      'Priority Greenroom & Hospitality',
      'Dedicated Producer & Colorist',
      'Same-Week Priority Turnaround',
    ],
  },
];

export default function PricingSection({ onOpenModal }: PricingSectionProps) {
  return (
    <section
      id="glissando-pricing"
      style={{
        position: 'relative',
        background: '#ffffff',
        color: '#0a0a0a',
        paddingTop: 'clamp(5.5rem, 8vw, 8rem)',
        paddingBottom: 'clamp(5.5rem, 8vw, 8rem)',
        zIndex: 1,
      }}
    >
      <div className="stg-container">
        {/* Glissando Section Header */}
        <div className="glissando-header">
          <p
            style={{
              fontSize: '0.72rem',
              letterSpacing: '0.24em',
              textTransform: 'uppercase',
              fontWeight: 600,
              color: '#71717a',
              marginBottom: '0.5rem',
            }}
          >
            Clear &amp; Transparent Rates
          </p>
          <h2 className="glissando-title on-light">Our Pricing</h2>
          <span className="glissando-dash" style={{ color: '#0a0a0a' }} />
          <p className="glissando-subtext on-light">
            Engineered packages with zero hidden fees. Book single sessions or secure monthly atelier residencies.
          </p>
        </div>

        {/* 4-Column Pricing Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 'clamp(1rem, 2vw, 1.5rem)',
            alignItems: 'stretch',
          }}
          className="pricing-grid"
        >
          {PRICING_TIERS.map((tier) => {
            const isHighlight = tier.isPopular;
            return (
              <div
                key={tier.id}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: 'clamp(1.75rem, 2.5vw, 2.25rem)',
                  background: isHighlight ? '#0a0a0a' : '#ffffff',
                  color: isHighlight ? '#ffffff' : '#0a0a0a',
                  border: isHighlight ? '1px solid #0a0a0a' : '1px solid #e4e4e7',
                  boxShadow: isHighlight
                    ? '0 12px 36px rgba(0, 0, 0, 0.2)'
                    : '0 2px 10px rgba(0, 0, 0, 0.03)',
                  position: 'relative',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
                className="pricing-card"
              >
                {/* Popular Tag */}
                {isHighlight && (
                  <span
                    style={{
                      position: 'absolute',
                      top: '-12px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: '#ffffff',
                      color: '#000000',
                      fontSize: '0.62rem',
                      fontWeight: 800,
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      padding: '3px 12px',
                    }}
                  >
                    Recommended
                  </span>
                )}

                <div>
                  {/* Plan Name */}
                  <h3
                    style={{
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      letterSpacing: '0.22em',
                      textTransform: 'uppercase',
                      marginBottom: '1rem',
                      color: isHighlight ? '#ffffff' : '#0a0a0a',
                    }}
                  >
                    {tier.name}
                  </h3>

                  {/* Price */}
                  <div style={{ marginBottom: '1.25rem' }}>
                    <span
                      style={{
                        fontSize: 'clamp(1.75rem, 2.5vw, 2.25rem)',
                        fontWeight: 800,
                        letterSpacing: '-0.02em',
                        lineHeight: 1,
                      }}
                    >
                      {tier.price}
                    </span>
                    <span
                      style={{
                        fontSize: '0.74rem',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: isHighlight ? '#a1a1aa' : '#71717a',
                        marginLeft: '4px',
                      }}
                    >
                      {tier.period}
                    </span>
                  </div>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: '0.78rem',
                      lineHeight: 1.55,
                      color: isHighlight ? '#a1a1aa' : '#71717a',
                      marginBottom: '1.75rem',
                      minHeight: '48px',
                    }}
                  >
                    {tier.desc}
                  </p>

                  {/* Divider */}
                  <div
                    style={{
                      height: '1px',
                      background: isHighlight ? 'rgba(255, 255, 255, 0.12)' : '#f4f4f5',
                      marginBottom: '1.5rem',
                    }}
                  />

                  {/* Features List */}
                  <ul
                    style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: '0 0 2rem 0',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.8rem',
                    }}
                  >
                    {tier.features.map((feat, fIdx) => (
                      <li
                        key={fIdx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.6rem',
                          fontSize: '0.78rem',
                          lineHeight: 1.45,
                          color: isHighlight ? '#e4e4e7' : '#3f3f46',
                        }}
                      >
                        <Check
                          size={13}
                          style={{
                            flexShrink: 0,
                            marginTop: '2px',
                            color: isHighlight ? '#ffffff' : '#0a0a0a',
                          }}
                        />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button
                  type="button"
                  className={
                    isHighlight
                      ? 'btn-glissando btn-glissando-light'
                      : 'btn-glissando btn-glissando-dark'
                  }
                  style={{ width: '100%' }}
                  onClick={() => onOpenModal('Pricing Plan', `${tier.name} (${tier.price})`)}
                >
                  Book Plan
                </button>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .pricing-card:hover {
          transform: translateY(-4px);
        }
        @media (max-width: 1100px) {
          .pricing-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .pricing-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
