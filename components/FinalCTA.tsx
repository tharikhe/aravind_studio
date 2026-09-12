'use client';

import React from 'react';

interface FinalCTAProps {
  onOpenModal: (inquiry?: string) => void;
}

export default function FinalCTA({ onOpenModal }: FinalCTAProps) {
  return (
    <section
      id="home-final-cta"
      className="glissando-cut-both-left"
      style={{
        position: 'relative',
        background: '#0a0a0a',
        color: '#ffffff',
        paddingTop: 'clamp(6rem, 10vw, 8.5rem)',
        paddingBottom: 'clamp(6rem, 10vw, 8.5rem)',
        textAlign: 'center',
        overflow: 'hidden',
      }}
    >
      <div className="film-grain-overlay" />

      <div
        className="stg-container"
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '820px',
        }}
      >
        {/* Viewfinder Reticle Framing */}
        <div
          className="viewfinder-reticle"
          style={{
            marginBottom: '1rem',
            color: '#ffffff',
          }}
        >
          <span className="viewfinder-corner-tl" style={{ width: 18, height: 18 }} />
          <span className="viewfinder-corner-tr" style={{ width: 18, height: 18 }} />
          <span className="viewfinder-corner-bl" style={{ width: 18, height: 18 }} />
          <span className="viewfinder-corner-br" style={{ width: 18, height: 18 }} />

          <h2
            style={{
              fontSize: 'clamp(1.6rem, 3.8vw, 2.75rem)',
              fontWeight: 800,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: '#ffffff',
              margin: '0.25rem 0.5rem',
              lineHeight: 1.2,
            }}
          >
            Ready to Record?
          </h2>
        </div>

        <span className="glissando-dash" style={{ color: '#ffffff' }} />

        <p
          className="glissando-subtext on-dark"
          style={{
            marginBottom: '2.75rem',
            fontSize: 'clamp(0.9rem, 1.2vw, 1.05rem)',
          }}
        >
          Schedule your session in Indiranagar. Experience our Cinema Line camera suites, soundproof stages,
          and dedicated post-production editors.
        </p>

        {/* Dual Glissando Outline Buttons */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1.25rem',
            justifyContent: 'center',
          }}
        >
          <button
            type="button"
            className="btn-glissando btn-glissando-light"
            onClick={() => onOpenModal('Podcast Production')}
          >
            Book a Session
          </button>
          <button
            type="button"
            className="btn-glissando btn-glissando-solid-light"
            onClick={() => onOpenModal('Studio Visit')}
          >
            Schedule Studio Tour
          </button>
        </div>
      </div>
    </section>
  );
}
