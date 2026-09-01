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
    <section className="divider-top" id="other-services">
      <div className="stg-container">
        {/* Head */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
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
            Production Capabilities
          </p>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.4rem)', marginBottom: '0.75rem', color: '#FFFFFF' }}>
            We Also Support
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
                border: '1px solid #4D4D4D',
                background: '#0d0d0d',
                color: '#FFFFFF',
                fontSize: '0.9rem',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.4)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#FFFFFF';
                e.currentTarget.style.background = '#FFFFFF';
                e.currentTarget.style.color = '#000000';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#4D4D4D';
                e.currentTarget.style.background = '#0d0d0d';
                e.currentTarget.style.color = '#FFFFFF';
                e.currentTarget.style.transform = 'none';
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
