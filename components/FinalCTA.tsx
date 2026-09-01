'use client';

import React from 'react';

interface FinalCTAProps {
  onOpenModal: (inquiry?: string) => void;
}

export default function FinalCTA({ onOpenModal }: FinalCTAProps) {
  return (
    <section
      className="divider-top backlight-top"
      id="home-final-cta"
      style={{
        paddingTop: 'clamp(3rem, 6vw, 5rem)',
        paddingBottom: 'clamp(3rem, 6vw, 5rem)',
        textAlign: 'center',
      }}
    >
      <div className="stg-container">
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4.2vw, 3.2rem)', marginBottom: '1rem', color: '#F5F7FA' }}>
            Ready to Record Your Podcast?
          </h2>
          <p
            className="bringer-large-text"
            style={{
              fontSize: 'clamp(1rem, 1.4vw, 1.2rem)',
              lineHeight: 1.6,
              color: 'rgba(255, 255, 255, 0.8)',
              marginBottom: '2rem',
            }}
          >
            Visit our studio in Indiranagar, explore the setups, and plan your podcast shoot with our
            team.
          </p>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.85rem',
              justifyContent: 'center',
            }}
          >
            <button
              type="button"
              className="bringer-button"
              onClick={() => onOpenModal('Podcast Production')}
              style={{
                minHeight: '48px',
                padding: '0.85rem 1.85rem',
                fontSize: '0.95rem',
              }}
            >
              Book a Shoot
            </button>
            <button
              type="button"
              className="bringer-button is-secondary"
              onClick={() => onOpenModal('Studio Visit')}
              style={{
                minHeight: '48px',
                padding: '0.85rem 1.85rem',
                fontSize: '0.95rem',
              }}
            >
              Schedule a Studio Visit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
