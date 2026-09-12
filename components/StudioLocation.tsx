'use client';

import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

interface StudioLocationProps {
  onOpenModal: (inquiry?: string) => void;
}

export default function StudioLocation({ onOpenModal }: StudioLocationProps) {
  return (
    <section
      id="studio-location"
      style={{
        position: 'relative',
        background: '#ffffff',
        color: '#0a0a0a',
        paddingTop: 'clamp(5rem, 7vw, 7rem)',
        paddingBottom: 'clamp(5rem, 7vw, 7rem)',
        borderTop: '1px solid #f4f4f5',
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
            Visit Our Atelier
          </p>
          <h2 className="glissando-title on-light">Studio Location</h2>
          <span className="glissando-dash" style={{ color: '#0a0a0a' }} />
          <p className="glissando-subtext on-light">
            Conveniently situated in prime Indiranagar with dedicated soundproof stages, creator suites, and valet access.
          </p>
        </div>

        {/* 2-Column Info & Map Container */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.3fr',
            gap: 'clamp(1.5rem, 3vw, 2.5rem)',
            alignItems: 'stretch',
            maxWidth: '1100px',
            margin: '0 auto',
          }}
          className="location-grid"
        >
          {/* Address & Specs Card with Viewfinder Reticle Framing */}
          <div
            style={{
              background: '#ffffff',
              border: '1px solid #e4e4e7',
              padding: 'clamp(2rem, 3vw, 2.75rem)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
            }}
          >
            {/* Viewfinder Corner Accents */}
            <span className="viewfinder-corner-tl" style={{ width: 14, height: 14, borderColor: '#000000' }} />
            <span className="viewfinder-corner-tr" style={{ width: 14, height: 14, borderColor: '#000000' }} />
            <span className="viewfinder-corner-bl" style={{ width: 14, height: 14, borderColor: '#000000' }} />
            <span className="viewfinder-corner-br" style={{ width: 14, height: 14, borderColor: '#000000' }} />

            <div>
              <span
                style={{
                  display: 'block',
                  fontSize: '0.68rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: '#71717a',
                  fontWeight: 600,
                  marginBottom: '1rem',
                }}
              >
                Coordinates: 12.9730° N, 77.6467° E
              </span>

              {/* Address */}
              <div style={{ marginBottom: '1.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                  <MapPin size={15} color="#000000" />
                  <h3
                    style={{
                      fontSize: '0.88rem',
                      fontWeight: 700,
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: '#0a0a0a',
                      margin: 0,
                    }}
                  >
                    ARCC MEDIA PRODUCTION
                  </h3>
                </div>
                <p style={{ fontSize: '0.82rem', lineHeight: 1.6, color: '#52525b', paddingLeft: '1.5rem', margin: 0 }}>
                  2nd Floor, 8th Main, 80 Feet Road, Next to Bata Showroom, HAL 2nd Stage, Indiranagar, Bengaluru, Karnataka 560038
                </p>
              </div>

              {/* Hours */}
              <div style={{ marginBottom: '1.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                  <Clock size={15} color="#000000" />
                  <h4
                    style={{
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: '#0a0a0a',
                      margin: 0,
                    }}
                  >
                    Atelier Hours
                  </h4>
                </div>
                <p style={{ fontSize: '0.82rem', lineHeight: 1.6, color: '#52525b', paddingLeft: '1.5rem', margin: 0 }}>
                  Monday – Sunday: 8:00 AM – 11:00 PM (By Appointment)
                </p>
              </div>

              {/* Contact */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                  <Phone size={15} color="#000000" />
                  <h4
                    style={{
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: '#0a0a0a',
                      margin: 0,
                    }}
                  >
                    Direct Production Line
                  </h4>
                </div>
                <p style={{ fontSize: '0.82rem', lineHeight: 1.6, color: '#52525b', paddingLeft: '1.5rem', margin: 0 }}>
                  +91 824 828 8388 · business@arccmediaproduction.com
                </p>
              </div>
            </div>

            <div style={{ marginTop: '2.5rem' }}>
              <button
                type="button"
                className="btn-glissando btn-glissando-dark"
                style={{ width: '100%' }}
                onClick={() => onOpenModal('Studio Visit')}
              >
                Schedule Atelier Walkthrough
              </button>
            </div>
          </div>

          {/* High-Contrast Monochromatic Google Map */}
          <div
            style={{
              position: 'relative',
              minHeight: '380px',
              border: '1px solid #e4e4e7',
              overflow: 'hidden',
              background: '#f4f4f5',
            }}
          >
            <iframe
              title="ARCC Media Production Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0264147714896!2d77.64450937507647!3d12.970172987345152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16a67f1b748d%3A0x6a0a0a0a0a0a0a0a!2sIndiranagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: 'grayscale(100%) contrast(120%) invert(92%) hue-rotate(180deg)',
                minHeight: '380px',
                width: '100%',
                display: 'block',
              }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 860px) {
          .location-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
