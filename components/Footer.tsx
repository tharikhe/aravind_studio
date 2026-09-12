'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUp, Instagram, Youtube, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'HOME', href: '#glissando-hero' },
    { label: 'ABOUT', href: '#glissando-welcome' },
    { label: 'WORKS', href: '#glissando-works' },
    { label: 'SERVICES', href: '#glissando-services' },
    { label: 'TEAM', href: '#glissando-team' },
    { label: 'CLIENTS', href: '#glissando-clients' },
    { label: 'PRICING', href: '#glissando-pricing' },
    { label: 'LOCATION', href: '#studio-location' },
  ];

  return (
    <footer
      id="glissando-footer"
      style={{
        background: '#070707',
        color: '#ffffff',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        paddingTop: 'clamp(4rem, 6vw, 5.5rem)',
        paddingBottom: '3.5rem',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div className="stg-container">
        {/* Top Footer Row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '2rem',
            paddingBottom: '3rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          {/* Logo with Viewfinder Framing */}
          <Link
            href="/"
            aria-label="ARCC Media Production Home"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              textDecoration: 'none',
              position: 'relative',
              padding: '6px 14px',
              transition: 'opacity 0.2s ease',
            }}
          >
            <span
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '8px',
                height: '8px',
                borderTop: '1.5px solid #ffffff',
                borderLeft: '1.5px solid #ffffff',
              }}
            />
            <span
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '8px',
                height: '8px',
                borderTop: '1.5px solid #ffffff',
                borderRight: '1.5px solid #ffffff',
              }}
            />
            <span
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '8px',
                height: '8px',
                borderBottom: '1.5px solid #ffffff',
                borderLeft: '1.5px solid #ffffff',
              }}
            />
            <span
              style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                width: '8px',
                height: '8px',
                borderBottom: '1.5px solid #ffffff',
                borderRight: '1.5px solid #ffffff',
              }}
            />

            <div
              style={{
                position: 'relative',
                height: '42px',
                width: '145px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Image
                src="/logo.png"
                alt="ARCC Media Production"
                fill
                style={{
                  objectFit: 'contain',
                  objectPosition: 'center',
                  mixBlendMode: 'screen',
                }}
              />
            </div>
          </Link>

          {/* Glissando Uppercase Nav Links */}
          <ul
            style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 'clamp(1rem, 2vw, 1.75rem)',
              listStyle: 'none',
              margin: 0,
              padding: 0,
            }}
          >
            {navLinks.map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.href}
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'rgba(255, 255, 255, 0.65)',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.65)')}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Smooth Back to Top */}
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            style={{
              width: '38px',
              height: '38px',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#ffffff';
              e.currentTarget.style.color = '#000000';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#ffffff';
            }}
          >
            <ArrowUp size={16} />
          </button>
        </div>

        {/* Bottom Metadata & Copyright */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
            paddingTop: '2.5rem',
            fontSize: '0.72rem',
            color: 'rgba(255, 255, 255, 0.45)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}
        >
          <p style={{ margin: 0 }}>
            &copy; {new Date().getFullYear()} ARCC MEDIA PRODUCTION · MINIMALIST BROADCAST ATELIER
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <span
              style={{
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'rgba(255, 255, 255, 0.6)',
              }}
            >
              <Instagram size={13} />
            </span>
            <span
              style={{
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'rgba(255, 255, 255, 0.6)',
              }}
            >
              <Youtube size={13} />
            </span>
            <span
              style={{
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'rgba(255, 255, 255, 0.6)',
              }}
            >
              <Twitter size={13} />
            </span>
            <span
              style={{
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'rgba(255, 255, 255, 0.6)',
              }}
            >
              <Linkedin size={13} />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
