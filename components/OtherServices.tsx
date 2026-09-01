'use client';

import React from 'react';

interface OtherServicesProps {
  onOpenModal: (serviceName?: string) => void;
}

const SERVICES = [
  { label: 'Brand Shoots', query: 'Brand Shoots' },
  { label: 'Fashion Lookbooks', query: 'Fashion Lookbooks' },
  { label: 'E-commerce Stills', query: 'E-commerce Stills' },
  { label: 'Ad Films', query: 'Ad Films' },
  { label: 'Corporate Headshots', query: 'Corporate Headshots' },
  { label: 'Green Matte Shoots', query: 'Green Matte Shoots' },
  { label: 'Music Videos', query: 'Music Videos' },
];

export default function OtherServices({ onOpenModal }: OtherServicesProps) {
  return (
    <section className="divider-top" id="other-services" style={{ background: '#F8F9FA' }}>
      <div className="stg-container">
        {/* Head */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
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
            Production Capabilities
          </p>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.4rem)', marginBottom: '0.75rem', color: '#0A0A0A' }}>
            We Also Support
          </h2>
          <p
            className="bringer-large-text"
            style={{
              maxWidth: '36em',
              marginLeft: 'auto',
              marginRight: 'auto',
              fontSize: 'clamp(0.95rem, 1.2vw, 1.05rem)',
              color: '#52525B',
            }}
          >
            Beyond podcasts, our Indiranagar facility is fully equipped for multi-format commercial production.
          </p>
        </div>

        {/* Horizontal Pill Wrap */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.75rem',
            justifyContent: 'center',
            maxWidth: '840px',
            margin: '0 auto',
          }}
        >
          {SERVICES.map((srv, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => onOpenModal(srv.query)}
              style={{
                padding: '0.65rem 1.4rem',
                borderRadius: '999px',
                border: '1px solid #E5E7EB',
                background: '#FFFFFF',
                color: '#18181B',
                fontSize: '0.9rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#000000';
                e.currentTarget.style.background = '#000000';
                e.currentTarget.style.color = '#FFFFFF';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#E5E7EB';
                e.currentTarget.style.background = '#FFFFFF';
                e.currentTarget.style.color = '#18181B';
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.04)';
              }}
            >
              {srv.label} &rarr;
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
