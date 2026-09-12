'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenModal: (inquiry?: string) => void;
}

export default function Header({ onOpenModal }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <>
      <header
        id="glissando-header"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          background: isScrolled ? 'rgba(10, 10, 10, 0.94)' : 'rgba(10, 10, 10, 0.65)',
          backdropFilter: 'blur(16px)',
          borderBottom: isScrolled
            ? '1px solid rgba(255, 255, 255, 0.12)'
            : '1px solid rgba(255, 255, 255, 0.05)',
        }}
      >
        <div
          className="stg-container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: isScrolled ? '66px' : '76px',
            transition: 'height 0.3s ease',
          }}
        >
          {/* Logo with Glissando Viewfinder Reticle Corners */}
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
            {/* Viewfinder corner brackets */}
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
                height: isScrolled ? '32px' : '38px',
                width: isScrolled ? '114px' : '136px',
                display: 'flex',
                alignItems: 'center',
                transition: 'all 0.3s ease',
              }}
            >
              <Image
                src="/logo.png"
                alt="ARCC Media Production"
                fill
                priority
                style={{
                  objectFit: 'contain',
                  objectPosition: 'center',
                  mixBlendMode: 'screen',
                }}
              />
            </div>
          </Link>

          {/* Desktop Navigation Links (Glissando Uppercase Minimal) */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2rem',
            }}
            className="desktop-nav"
          >
            <ul
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.6rem',
                margin: 0,
                padding: 0,
                listStyle: 'none',
              }}
            >
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    style={{
                      color: 'rgba(255, 255, 255, 0.72)',
                      fontSize: '0.74rem',
                      fontWeight: 600,
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                      padding: '4px 0',
                      position: 'relative',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#ffffff';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'rgba(255, 255, 255, 0.72)';
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Glissando Outline CTA Button */}
            <button
              type="button"
              className="btn-glissando btn-glissando-light"
              onClick={() => onOpenModal('General Inquiry')}
              style={{
                padding: '0.55rem 1.35rem',
                fontSize: '0.72rem',
                letterSpacing: '0.18em',
              }}
            >
              Book Studio
            </button>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className="mobile-menu-trigger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'none',
              color: '#ffffff',
              padding: '6px',
            }}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <style jsx>{`
          @media (max-width: 960px) {
            .desktop-nav {
              display: none !important;
            }
            .mobile-menu-trigger {
              display: flex !important;
              align-items: center;
              justify-content: center;
            }
          }
        `}</style>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99,
            background: 'rgba(10, 10, 10, 0.98)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '2rem',
            backdropFilter: 'blur(20px)',
          }}
        >
          {/* Top Bar with Logo & Close Button */}
          <div
            style={{
              position: 'absolute',
              top: '1.5rem',
              left: '1.5rem',
              right: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ position: 'relative', height: '36px', width: '130px' }}>
              <Image
                src="/logo.png"
                alt="ARCC Media Production"
                fill
                style={{
                  objectFit: 'contain',
                  objectPosition: 'left center',
                  mixBlendMode: 'screen',
                }}
              />
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#ffffff',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <X size={20} />
            </button>
          </div>

          <ul
            style={{
              listStyle: 'none',
              margin: 0,
              padding: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1.75rem',
            }}
          >
            {navLinks.map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    color: '#ffffff',
                    fontSize: '1rem',
                    fontWeight: 600,
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div style={{ marginTop: '2.5rem' }}>
            <button
              type="button"
              className="btn-glissando btn-glissando-light"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenModal('General Inquiry');
              }}
            >
              Book Studio
            </button>
          </div>
        </div>
      )}
    </>
  );
}
