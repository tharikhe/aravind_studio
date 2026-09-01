'use client';

import React from 'react';

interface InternalLinksProps {
  onOpenModal: (inquiry?: string) => void;
}

export default function InternalLinks({ onOpenModal }: InternalLinksProps) {
  return (
    <section className="divider-top" style={{ paddingBottom: '3rem' }}>
      <div className="stg-container">
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div
            className="bringer-block"
            style={{
              padding: '1.5rem 1.75rem',
              background: 'rgba(26, 29, 36, 0.65)',
              borderRadius: '14px',
            }}
          >
            <h5 style={{ fontSize: '1.05rem', marginBottom: '0.65rem', color: '#F5F7FA' }}>
              Explore Winterfox
            </h5>
            <p
              className="bringer-meta"
              style={{
                lineHeight: 1.9,
                margin: 0,
                fontSize: '0.85rem',
                textTransform: 'none',
                letterSpacing: 'normal',
                color: 'rgba(255, 255, 255, 0.75)',
              }}
            >
              <a href="#podcast-setups" style={{ color: '#5C9DFF' }}>
                Podcast Studio in Bangalore
              </a>{' '}
              &nbsp;·&nbsp;{' '}
              <a href="#editing-support" style={{ color: '#5C9DFF' }}>
                Podcast Editing in Bangalore
              </a>{' '}
              &nbsp;·&nbsp;{' '}
              <a href="#what-you-can-create" style={{ color: '#5C9DFF' }}>
                Podcast Studio Guide for Bangalore Brands
              </a>{' '}
              &nbsp;·&nbsp;{' '}
              <button
                type="button"
                onClick={() => onOpenModal('Podcast Production')}
                style={{
                  color: '#5C9DFF',
                  fontWeight: 600,
                  cursor: 'pointer',
                  textDecoration: 'underline',
                  display: 'inline',
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  fontSize: 'inherit',
                }}
              >
                Book a Shoot
              </button>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
