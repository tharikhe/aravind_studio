'use client';

import React from 'react';

const OTHER_SERVICES = [
  'Video Editing & Post Production',
  'Corporate Videos',
  'Outdoor Video Shoots',
  'Product & E-Commerce Shoots',
  'Live Streaming',
  'Commercial Ad Films',
];

interface OtherServicesProps {
  onOpenModal: (service?: string) => void;
}

export default function OtherServices({ onOpenModal }: OtherServicesProps) {
  return (
    <section className="divider-top" id="other-services">
      <div className="stg-container">
        {/* Head */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3.2vw, 2.5rem)', margin: 0 }}>
            We Also Support
          </h2>
        </div>

        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div
            className="bringer-block"
            style={{
              padding: '1.75rem 2rem',
              background: 'rgba(26, 29, 36, 0.7)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '16px',
            }}
          >
            <ul
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '0.75rem 1rem',
                margin: 0,
                padding: 0,
                listStyle: 'none',
              }}
            >
              {OTHER_SERVICES.map((service, idx) => (
                <li key={idx}>
                  <button
                    type="button"
                    onClick={() => onOpenModal(service)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '0.6rem 1.2rem',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      borderRadius: '999px',
                      color: 'rgba(255, 255, 255, 0.85)',
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(63, 110, 233, 0.2)';
                      e.currentTarget.style.borderColor = '#5C9DFF';
                      e.currentTarget.style.color = '#fff';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                      e.currentTarget.style.color = 'rgba(255, 255, 255, 0.85)';
                      e.currentTarget.style.transform = 'none';
                    }}
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
