'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const exploreLinks = [
    { label: 'Studio', href: '#podcast-setups' },
    { label: 'Production Services', href: '#studio-features' },
    { label: 'Work', href: '#podcast-work' },
    { label: 'Frames', href: '#podcast-frames' },
    { label: 'Why Choose', href: '#why-choose' },
    { label: 'About', href: '#what-you-can-create' },
  ];

  const resourceLinks = [
    { label: 'Video Production', href: '#studio-features' },
    { label: 'Podcast Production', href: '#podcast-setups' },
    { label: 'Podcast Production Experience', href: '#podcast-work' },
    { label: 'Video Editing', href: '#editing-support' },
    { label: 'Studio Production', href: '#custom-shoot' },
    { label: 'Corporate Videos', href: '#other-services' },
    { label: 'Product Shoots', href: '#other-services' },
    { label: 'Reviews', href: '#google-reviews' },
    { label: 'Studio Location', href: '#studio-location' },
  ];

  return (
    <footer
      id="bringer-footer"
      style={{
        borderTop: '1px solid rgba(245, 247, 250, 0.1)',
        background: 'rgba(7, 9, 13, 0.95)',
        paddingTop: 'clamp(3rem, 5vw, 4.5rem)',
        paddingBottom: '2.5rem',
      }}
    >
      <div className="stg-container">
        {/* Widgets Row */}
        <div
          className="stg-row"
          style={{
            rowGap: '2.5rem',
            marginBottom: '3rem',
          }}
        >
          {/* Brand Info Widget */}
          <div className="stg-col-5 stg-tp-col-12">
            <Link
              href="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.65rem',
                textDecoration: 'none',
                marginBottom: '1.25rem',
              }}
            >
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, #3F6EE9 0%, #1e3a8a 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: '1.2rem',
                }}
              >
                W
              </div>
              <span
                style={{
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  color: '#F5F7FA',
                }}
              >
                WINTERFOX STUDIOS
              </span>
            </Link>

            <p
              style={{
                fontSize: '0.9rem',
                lineHeight: 1.6,
                color: 'rgba(255, 255, 255, 0.72)',
                marginBottom: '1rem',
                maxWidth: '380px',
              }}
            >
              Winterfox Studios is a video production company with an in-house content studio, helping
              teams plan, shoot, edit, and deliver content from one place.
            </p>

            <p
              style={{
                fontSize: '0.85rem',
                lineHeight: 1.5,
                color: 'rgba(255, 255, 255, 0.6)',
                marginBottom: '0.5rem',
                maxWidth: '380px',
              }}
            >
              Winterfox Studios, 2nd floor, 8th main, 80 feet road, next to Bata showroom, HAL 2nd
              stage, Indiranagar, Bengaluru, 560038
            </p>

            <p style={{ fontSize: '0.88rem', marginBottom: '1.25rem' }}>
              <a href="tel:+919605533366" style={{ color: '#5C9DFF', fontWeight: 600 }}>
                +91 960 55 333 66
              </a>
            </p>

            <span
              style={{
                display: 'block',
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: '#8A99AD',
                marginBottom: '0.65rem',
                fontWeight: 600,
              }}
            >
              Follow us:
            </span>

            {/* Social Links */}
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a
                href="https://www.instagram.com/winterfox.studios/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(63, 110, 233, 0.3)';
                  e.currentTarget.style.borderColor = '#5C9DFF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/company/winterfox-studios/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(63, 110, 233, 0.3)';
                  e.currentTarget.style.borderColor = '#5C9DFF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>

          {/* Explore Links */}
          <div className="stg-col-3 stg-tp-col-6">
            <h6 style={{ fontSize: '1rem', color: '#F5F7FA', marginBottom: '1.25rem' }}>Explore</h6>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {exploreLinks.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    style={{
                      fontSize: '0.88rem',
                      color: 'rgba(255, 255, 255, 0.7)',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#5C9DFF')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)')}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div className="stg-col-4 stg-tp-col-6">
            <h6 style={{ fontSize: '1rem', color: '#F5F7FA', marginBottom: '1.25rem' }}>Resources</h6>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {resourceLinks.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    style={{
                      fontSize: '0.88rem',
                      color: 'rgba(255, 255, 255, 0.7)',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#5C9DFF')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)')}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Line */}
        <div
          style={{
            paddingTop: '1.75rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            fontSize: '0.85rem',
            color: 'rgba(255, 255, 255, 0.55)',
          }}
        >
          <div>Made with excellence in Bengaluru.</div>
          <div>Copyright &copy; 2026 Winterfox Studios. All Rights Reserved.</div>
        </div>
      </div>
    </footer>
  );
}
