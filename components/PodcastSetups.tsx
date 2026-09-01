'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { PODCAST_SETUPS, PodcastSetup } from '@/data/setups';

export default function PodcastSetups() {
  const [selectedSetupIndex, setSelectedSetupIndex] = useState<number | null>(null);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);

  const selectedSetup: PodcastSetup | null =
    selectedSetupIndex !== null ? PODCAST_SETUPS[selectedSetupIndex] : null;

  const handleCardClick = (idx: number) => {
    if (selectedSetupIndex === idx) {
      setSelectedSetupIndex(null);
    } else {
      setSelectedSetupIndex(idx);
      setCurrentGalleryIndex(0);
    }
  };

  const handleNextSetup = () => {
    if (selectedSetupIndex === null) return;
    const nextIdx = (selectedSetupIndex + 1) % PODCAST_SETUPS.length;
    setSelectedSetupIndex(nextIdx);
    setCurrentGalleryIndex(0);
  };

  const handlePrevSetup = () => {
    if (selectedSetupIndex === null) return;
    const prevIdx = (selectedSetupIndex - 1 + PODCAST_SETUPS.length) % PODCAST_SETUPS.length;
    setSelectedSetupIndex(prevIdx);
    setCurrentGalleryIndex(0);
  };

  const handleNextGallery = () => {
    if (!selectedSetup) return;
    setCurrentGalleryIndex((prev) => (prev + 1) % selectedSetup.gallery.length);
  };

  const handlePrevGallery = () => {
    if (!selectedSetup) return;
    setCurrentGalleryIndex(
      (prev) => (prev - 1 + selectedSetup.gallery.length) % selectedSetup.gallery.length
    );
  };

  return (
    <section className="divider-top backlight-both" id="podcast-setups">
      <div className="stg-container">
        {/* Head */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}>
          <p
            style={{
              margin: '0 0 0.65rem',
              fontSize: '0.75rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--bringer-s-text-accent)',
              fontWeight: 600,
            }}
          >
            Inside the Facility
          </p>
          <h2 style={{ fontSize: 'clamp(1.85rem, 3.5vw, 2.75rem)', marginBottom: '0.85rem' }}>
            Explore Our Podcast Setups
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
            Different production environments across the ARCC Media Production facility, each configured for a
            specific podcast or interview format.
          </p>
        </div>

        {/* Bento Grid */}
        <div
          className="setup-bento-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            gap: 'var(--stg-gap)',
            alignItems: 'start',
          }}
        >
          {PODCAST_SETUPS.map((setup, idx) => {
            const isSelected = selectedSetupIndex === idx;
            return (
              <article
                key={setup.index}
                onClick={() => handleCardClick(idx)}
                style={{
                  background: 'rgba(26, 29, 36, 0.75)',
                  border: isSelected
                    ? '1px solid #5C9DFF'
                    : '1px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: isSelected
                    ? '0 0 0 1px rgba(92, 157, 255, 0.3), 0 12px 32px rgba(0,0,0,0.45)'
                    : '0 4px 16px rgba(0,0,0,0.25)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  transform: isSelected ? 'scale(1.02)' : 'none',
                }}
                onMouseEnter={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.transform = 'none';
                  }
                }}
              >
                <div
                  style={{
                    position: 'relative',
                    aspectRatio: '16 / 10',
                    width: '100%',
                    background: '#0a0d13',
                    overflow: 'hidden',
                  }}
                >
                  <Image
                    src={setup.image}
                    alt={setup.title}
                    fill
                    sizes="(max-width: 760px) 100vw, (max-width: 960px) 50vw, 33vw"
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'center',
                      transition: 'transform 0.4s ease',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '10px',
                      left: '10px',
                      background: 'rgba(7, 9, 13, 0.75)',
                      backdropFilter: 'blur(4px)',
                      padding: '3px 8px',
                      borderRadius: '4px',
                      fontSize: '0.7rem',
                      fontWeight: 600,
                      color: '#5C9DFF',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {setup.tag}
                  </div>
                </div>

                <div style={{ padding: '1.1rem 1.25rem 1.35rem' }}>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '0.35rem', color: '#F5F7FA' }}>
                    {setup.title}
                  </h4>
                  <p
                    style={{
                      margin: 0,
                      fontSize: '0.875rem',
                      lineHeight: 1.5,
                      color: 'rgba(255, 255, 255, 0.75)',
                    }}
                  >
                    {setup.desc}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        {/* Inline Preview Expander */}
        {selectedSetup && (
          <div
            style={{
              marginTop: '2rem',
              background: 'rgba(14, 17, 23, 0.95)',
              border: '1px solid rgba(92, 157, 255, 0.4)',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 20px 56px rgba(0, 0, 0, 0.75)',
              display: 'flex',
              flexWrap: 'wrap',
              animation: 'fadeIn 0.3s ease',
            }}
          >
            {/* Gallery Media */}
            <div
              style={{
                flex: '1 1 65%',
                minWidth: '300px',
                aspectRatio: '16 / 10',
                position: 'relative',
                background: '#07090D',
              }}
            >
              <Image
                src={selectedSetup.gallery[currentGalleryIndex]?.image || selectedSetup.image}
                alt={selectedSetup.gallery[currentGalleryIndex]?.alt || selectedSetup.title}
                fill
                sizes="(max-width: 960px) 100vw, 65vw"
                style={{ objectFit: 'cover' }}
              />

              {/* Multi-image navigation if available */}
              {selectedSetup.gallery.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={handlePrevGallery}
                    aria-label="Previous gallery image"
                    style={{
                      position: 'absolute',
                      left: '12px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: 'rgba(0, 0, 0, 0.75)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      color: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                    }}
                  >
                    <ChevronLeft size={22} />
                  </button>

                  <button
                    type="button"
                    onClick={handleNextGallery}
                    aria-label="Next gallery image"
                    style={{
                      position: 'absolute',
                      right: '12px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: 'rgba(0, 0, 0, 0.75)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      color: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                    }}
                  >
                    <ChevronRight size={22} />
                  </button>

                  <div
                    style={{
                      position: 'absolute',
                      bottom: '12px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      display: 'flex',
                      gap: '6px',
                      background: 'rgba(0, 0, 0, 0.6)',
                      padding: '4px 8px',
                      borderRadius: '10px',
                    }}
                  >
                    {selectedSetup.gallery.map((_, gIdx) => (
                      <span
                        key={gIdx}
                        style={{
                          width: gIdx === currentGalleryIndex ? '14px' : '6px',
                          height: '6px',
                          borderRadius: '3px',
                          background: gIdx === currentGalleryIndex ? '#5C9DFF' : 'rgba(255,255,255,0.4)',
                        }}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Details Panel */}
            <div
              style={{
                flex: '0 1 35%',
                minWidth: '280px',
                padding: '2rem 1.75rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                background: 'rgba(26, 29, 36, 0.95)',
                borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
                position: 'relative',
              }}
            >
              <button
                type="button"
                onClick={() => setSelectedSetupIndex(null)}
                aria-label="Close preview"
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  color: 'rgba(255, 255, 255, 0.6)',
                  cursor: 'pointer',
                  padding: '4px',
                }}
              >
                <X size={20} />
              </button>

              <div>
                <span
                  style={{
                    fontSize: '0.8rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: '#5C9DFF',
                    fontWeight: 600,
                    display: 'block',
                    marginBottom: '0.5rem',
                  }}
                >
                  Setup {selectedSetup.index}
                </span>
                <h3 style={{ fontSize: '1.45rem', marginBottom: '0.85rem', color: '#F5F7FA' }}>
                  {selectedSetup.title}
                </h3>
                <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'rgba(255, 255, 255, 0.8)' }}>
                  {selectedSetup.desc}
                </p>
              </div>

              {/* Prev / Next Setup Nav */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: '1.5rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <button
                  type="button"
                  onClick={handlePrevSetup}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    color: '#5C9DFF',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                  }}
                >
                  <ChevronLeft size={16} /> Previous
                </button>
                <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>
                  {selectedSetup.index} / {String(PODCAST_SETUPS.length).padStart(2, '0')}
                </span>
                <button
                  type="button"
                  onClick={handleNextSetup}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    color: '#5C9DFF',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                  }}
                >
                  Next <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @media (max-width: 960px) {
          :global(.setup-bento-grid) {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }
        @media (max-width: 640px) {
          :global(.setup-bento-grid) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
