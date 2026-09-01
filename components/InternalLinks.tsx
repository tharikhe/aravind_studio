'use client';

import React from 'react';

interface InternalLinksProps {
  onOpenModal: (inquiry?: string) => void;
}

export default function InternalLinks({ onOpenModal }: InternalLinksProps) {
  return (
    <section
      className="divider-top"
      id="internal-links"
      style={{
        paddingTop: 'clamp(2.5rem, 4.5vw, 3.5rem)',
        paddingBottom: 'clamp(2.5rem, 4.5vw, 3.5rem)',
        background: '#F8F9FA',
        borderTop: '1px solid #E5E7EB',
      }}
    >
      <div className="stg-container">
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
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
            Directory &amp; Overview
          </p>
          <h2 style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)', marginBottom: '1.25rem', color: '#0A0A0A' }}>
            Explore ARCC Media Production
          </h2>

          <p
            style={{
              fontSize: '0.92rem',
              lineHeight: 1.8,
              color: '#4A5568',
              margin: '0 auto 1.5rem',
            }}
          >
            Planning your next series? Check our{' '}
            <a href="#podcast-setups" style={{ color: '#000000', fontWeight: 600, textDecoration: 'underline' }}>
              podcast studio setups
            </a>
            , explore{' '}
            <a href="#editing-support" style={{ color: '#000000', fontWeight: 600, textDecoration: 'underline' }}>
              post-production editing and reels
            </a>
            , browse{' '}
            <a href="#what-you-can-create" style={{ color: '#000000', fontWeight: 600, textDecoration: 'underline' }}>
              show formats
            </a>
            , or{' '}
            <button
              type="button"
              onClick={() => onOpenModal('Production Enquiry')}
              style={{
                color: '#000000',
                background: 'none',
                border: 'none',
                textDecoration: 'underline',
                cursor: 'pointer',
                fontFamily: 'inherit',
                fontSize: 'inherit',
                padding: 0,
                fontWeight: 700,
              }}
            >
              request a custom quote
            </button>{' '}
            for full multi-camera studio recording in Indiranagar, Bengaluru.
          </p>
        </div>
      </div>
    </section>
  );
}
