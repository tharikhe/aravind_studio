'use client';

import React from 'react';
import ScrollJourney from './ScrollJourney';

export default function WhatYouCanCreate() {
  return (
    <section className="divider-top" id="what-you-can-create" style={{ background: '#F8F9FA' }}>
      <div className="stg-container">
        {/* Head */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 3.5vw, 3rem)' }}>
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
            Production Formats &amp; Journey
          </p>
          <h2 style={{ fontSize: 'clamp(1.85rem, 3.2vw, 2.6rem)', marginBottom: '0.75rem', color: '#0A0A0A' }}>
            What You Can Create Here
          </h2>
          <p
            className="bringer-large-text"
            style={{
              maxWidth: '38em',
              marginLeft: 'auto',
              marginRight: 'auto',
              fontSize: 'clamp(0.95rem, 1.2vw, 1.05rem)',
              color: '#52525B',
            }}
          >
            From founder interviews to multi-camera enterprise series and viral shorts, follow the production journey crafted at ARCC Media Production.
          </p>
        </div>
      </div>

      {/* Buttery-Smooth Scroll-Driven SVG Journey Line */}
      <ScrollJourney />
    </section>
  );
}
