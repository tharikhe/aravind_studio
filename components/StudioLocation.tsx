'use client';

import React from 'react';

interface StudioLocationProps {
  onOpenModal: (inquiry?: string) => void;
}

export default function StudioLocation({ onOpenModal }: StudioLocationProps) {
  return (
    <section className="divider-top" id="studio-location">
      <div className="stg-container">
        {/* Head */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}>
          <h2 style={{ fontSize: 'clamp(1.85rem, 3.5vw, 2.75rem)', marginBottom: '0.85rem' }}>
            Based in Indiranagar, Bengaluru
          </h2>
          <p
            className="bringer-large-text"
            style={{
              maxWidth: '38em',
              marginLeft: 'auto',
              marginRight: 'auto',
              fontSize: 'clamp(0.95rem, 1.3vw, 1.1rem)',
            }}
          >
            Our podcast studio is in Indiranagar, central Bangalore. Studio visits available by
            appointment.
          </p>
        </div>

        {/* 2-Column Content */}
        <div
          className="stg-row"
          style={{
            alignItems: 'stretch',
            rowGap: '1.5rem',
            marginBottom: '2rem',
          }}
        >
          {/* Address info card */}
          <div className="stg-col-4 stg-tp-col-12">
            <div
              className="bringer-block"
              style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '2rem 1.75rem',
                background: 'rgba(26, 29, 36, 0.8)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '16px',
              }}
            >
              <div>
                <h5 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: '#F5F7FA' }}>
                  Address<span className="bringer-accent">.</span>
                </h5>
                <p style={{ fontSize: '0.92rem', lineHeight: 1.6, color: 'rgba(255, 255, 255, 0.78)', marginBottom: '1.5rem' }}>
                  Winterfox Studios, 2nd floor, 8th main, 80 feet road, next to Bata showroom, HAL 2nd
                  stage, Indiranagar, Bengaluru, 560038
                </p>

                <h5 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: '#F5F7FA' }}>
                  Phone<span className="bringer-accent">.</span>
                </h5>
                <p style={{ fontSize: '1.1rem', fontWeight: 600, color: '#fff', margin: 0 }}>
                  <a href="tel:+919605533366" style={{ color: '#5C9DFF' }}>
                    +91 960 55 333 66
                  </a>
                </p>
              </div>

              <div style={{ marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#8A99AD' }}>
                  Studio Timings
                </span>
                <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.85)', margin: '0.25rem 0 0' }}>
                  Monday – Sunday: 8:00 AM – 10:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Google Map Embed */}
          <div className="stg-col-8 stg-tp-col-12">
            <div
              style={{
                width: '100%',
                height: '100%',
                minHeight: '340px',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3887.9816718600937!2d77.646698!3d12.973023999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDU4JzIyLjkiTiA3N8KwMzgnNDguMSJF!5e0!3m2!1sen!2sin!4v1740675813580!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '340px', display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Winterfox Studios podcast studio location map"
              />
            </div>
          </div>
        </div>

        {/* CTA Actions */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.85rem',
            justifyContent: 'center',
            marginTop: '1.5rem',
          }}
        >
          <button
            type="button"
            className="bringer-button"
            onClick={() => onOpenModal('Podcast Production')}
            style={{ minHeight: '46px' }}
          >
            Book a Shoot
          </button>
          <button
            type="button"
            className="bringer-button is-secondary"
            onClick={() => onOpenModal('Studio Visit')}
            style={{ minHeight: '46px' }}
          >
            Schedule a Studio Visit
          </button>
        </div>
      </div>
    </section>
  );
}
