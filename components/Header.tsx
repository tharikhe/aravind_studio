'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface HeaderProps {
  onOpenModal: (inquiry?: string) => void;
}

export default function Header({ onOpenModal }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Setups', href: '#podcast-setups' },
    { label: 'Infrastructure', href: '#studio-features' },
    { label: 'Frames', href: '#podcast-frames' },
    { label: 'Episodes', href: '#podcast-work' },
    { label: 'Why ARCC', href: '#why-choose' },
    { label: 'Reviews', href: '#google-reviews' },
    { label: 'Location', href: '#studio-location' },
  ];

  return (
    <>
      <header
        id="bringer-header"
        className="is-frosted is-sticky"
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          transition: 'all 0.3s ease',
          background: isScrolled
            ? 'rgba(255, 255, 255, 0.95)'
            : 'rgba(255, 255, 255, 0.88)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid #E5E7EB',
          boxShadow: isScrolled ? '0 4px 20px rgba(0,0,0,0.06)' : 'none',
        }}
      >
        <div
          className="stg-container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: isScrolled ? '68px' : '76px',
            transition: 'height 0.3s ease',
          }}
        >
          {/* Logo Section (Inverted to Black for Light Theme) */}
          <Link
            href="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              textDecoration: 'none',
            }}
          >
            <div
              style={{
                position: 'relative',
                height: '42px',
                width: '180px',
                filter: 'invert(1)',
              }}
            >
              <Image
                src="/logo.png"
                alt="ARCC Media Production"
                fill
                priority
                style={{
                  objectFit: 'contain',
                  objectPosition: 'left center',
                }}
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            className="bringer-nav"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.75rem',
            }}
          >
            <ul
              className="main-menu"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem',
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
                      color: '#4A5568',
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      letterSpacing: '0.02em',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#000000')}
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = '#4A5568')
                    }
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Header Right CTA */}
            <div style={{ marginLeft: '0.5rem' }}>
              <button
                type="button"
                className="bringer-button"
                onClick={() => onOpenModal('General Inquiry')}
                style={{
                  fontSize: '0.85rem',
                  padding: '0.55rem 1.25rem',
                  minHeight: '38px',
                }}
              >
                Get a Quote
              </button>
            </div>
          </nav>

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            className="mobile-nav-toggle"
            aria-label="Toggle navigation menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'none',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              width: '40px',
              height: '40px',
              gap: '5px',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
            }}
          >
            <span
              style={{
                display: 'block',
                width: '22px',
                height: '2px',
                backgroundColor: '#000000',
                transition: 'all 0.3s ease',
                transform: mobileMenuOpen
                  ? 'rotate(45deg) translate(5px, 5px)'
                  : 'none',
              }}
            />
            <span
              style={{
                display: 'block',
                width: '22px',
                height: '2px',
                backgroundColor: '#000000',
                transition: 'all 0.3s ease',
                opacity: mobileMenuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: 'block',
                width: '22px',
                height: '2px',
                backgroundColor: '#000000',
                transition: 'all 0.3s ease',
                transform: mobileMenuOpen
                  ? 'rotate(-45deg) translate(5px, -5px)'
                  : 'none',
              }}
            />
          </button>
        </div>
      </header>

      {/* Mobile Slide-Over Drawer */}
      <div
        className="mobile-drawer"
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: 'min(320px, 85vw)',
          backgroundColor: '#FFFFFF',
          zIndex: 1000,
          transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
          boxShadow: '-10px 0 30px rgba(0, 0, 0, 0.15)',
          borderLeft: '1px solid #E5E7EB',
          display: 'flex',
          flexDirection: 'column',
          padding: '2rem 1.5rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '2rem',
          }}
        >
          <div style={{ position: 'relative', height: '36px', width: '150px', filter: 'invert(1)' }}>
            <Image
              src="/logo.png"
              alt="ARCC Media Production"
              fill
              style={{ objectFit: 'contain', objectPosition: 'left center' }}
            />
          </div>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
            style={{
              background: '#F3F4F6',
              border: 'none',
              color: '#000000',
              width: '34px',
              height: '34px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            ✕
          </button>
        </div>

        <ul
          style={{
            listStyle: 'none',
            padding: 0,
            margin: '0 0 2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
          }}
        >
          {navLinks.map((link, idx) => (
            <li key={idx}>
              <a
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  color: '#18181B',
                  fontSize: '1.05rem',
                  fontWeight: 500,
                  textDecoration: 'none',
                  display: 'block',
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="bringer-button"
          onClick={() => {
            setMobileMenuOpen(false);
            onOpenModal('General Inquiry');
          }}
          style={{
            width: '100%',
            marginTop: 'auto',
          }}
        >
          Get a Quote
        </button>
      </div>

      {/* Backdrop for mobile drawer */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            backdropFilter: 'blur(4px)',
            zIndex: 999,
          }}
        />
      )}

      <style jsx>{`
        @media (max-width: 960px) {
          :global(.bringer-nav) {
            display: none !important;
          }
          :global(.mobile-nav-toggle) {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
}
