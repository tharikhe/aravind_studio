'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface HeaderProps {
  onOpenModal: (inquiry?: string) => void;
}

export default function Header({ onOpenModal }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Studio', href: '#podcast-setups' },
    { label: 'Production Services', href: '#studio-features' },
    { label: 'Work', href: '#podcast-work' },
    { label: 'Frames', href: '#podcast-frames' },
    { label: 'Reviews', href: '#google-reviews' },
    { label: 'Location', href: '#studio-location' },
  ];

  return (
    <header
      id="bringer-header"
      style={{
        position: 'sticky',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: isScrolled ? 'rgba(7, 9, 13, 0.92)' : 'rgba(7, 9, 13, 0.75)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(245, 247, 250, 0.08)',
        transition: 'background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
        boxShadow: isScrolled ? '0 8px 32px rgba(0, 0, 0, 0.45)' : 'none',
      }}
    >
      <div
        className="stg-container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          minHeight: '74px',
          paddingTop: '0.5rem',
          paddingBottom: '0.5rem',
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.65rem',
            textDecoration: 'none',
          }}
        >
          <div
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, #3F6EE9 0%, #1e3a8a 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontWeight: 700,
              fontSize: '1.25rem',
              boxShadow: '0 4px 12px rgba(63, 110, 233, 0.35)',
            }}
          >
            W
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                fontSize: '1.2rem',
                fontWeight: 700,
                letterSpacing: '-0.03em',
                color: '#F5F7FA',
                lineHeight: 1.1,
              }}
            >
              WINTERFOX
            </span>
            <span
              style={{
                fontSize: '0.65rem',
                letterSpacing: '0.22em',
                color: '#5C9DFF',
                textTransform: 'uppercase',
                fontWeight: 600,
                lineHeight: 1.2,
              }}
            >
              STUDIOS · BENGALURU
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav
          style={{
            display: 'none',
          }}
          className="desktop-nav"
        >
          <ul
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.75rem',
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
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    color: idx === 0 ? '#FFFFFF' : '#C5C7CE',
                    transition: 'color 0.2s ease',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#5C9DFF')}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = idx === 0 ? '#FFFFFF' : '#C5C7CE')
                  }
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Header Right Action */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <button
            type="button"
            className="bringer-button desktop-cta"
            onClick={() => onOpenModal('Request a Quote')}
            style={{
              fontSize: '0.85rem',
              padding: '0.65rem 1.25rem',
            }}
          >
            Get a Quote
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="mobile-toggler"
            aria-label="Toggle navigation menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              width: '44px',
              height: '44px',
              background: mobileMenuOpen ? 'rgba(63, 110, 233, 0.25)' : 'var(--bringer-s-accent)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '8px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '5px',
              cursor: 'pointer',
              transition: 'background 0.25s ease',
            }}
          >
            <span
              style={{
                width: '20px',
                height: '2px',
                background: '#fff',
                borderRadius: '2px',
                transform: mobileMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
                transition: 'transform 0.25s ease',
              }}
            />
            <span
              style={{
                width: '20px',
                height: '2px',
                background: '#fff',
                borderRadius: '2px',
                opacity: mobileMenuOpen ? 0 : 1,
                transition: 'opacity 0.25s ease',
              }}
            />
            <span
              style={{
                width: '20px',
                height: '2px',
                background: '#fff',
                borderRadius: '2px',
                transform: mobileMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
                transition: 'transform 0.25s ease',
              }}
            />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'rgba(7, 9, 13, 0.98)',
            borderBottom: '1px solid rgba(245, 247, 250, 0.15)',
            padding: '1.5rem clamp(1rem, 4vw, 2rem) 2rem',
            boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
            animation: 'fadeIn 0.2s ease',
          }}
        >
          <ul
            style={{
              listStyle: 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              marginBottom: '1.5rem',
            }}
          >
            {navLinks.map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    display: 'block',
                    fontSize: '1.15rem',
                    fontWeight: 600,
                    color: '#F5F7FA',
                    padding: '0.35rem 0',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
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
              onOpenModal('Request a Quote');
            }}
            style={{ width: '100%', padding: '0.85rem' }}
          >
            Get a Quote
          </button>
        </div>
      )}

      <style jsx>{`
        @media (min-width: 961px) {
          :global(.desktop-nav) {
            display: block !important;
          }
          :global(.desktop-cta) {
            display: inline-flex !important;
          }
          :global(.mobile-toggler) {
            display: none !important;
          }
        }
        @media (max-width: 960px) {
          :global(.desktop-nav) {
            display: none !important;
          }
          :global(.desktop-cta) {
            display: none !important;
          }
          :global(.mobile-toggler) {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
}
