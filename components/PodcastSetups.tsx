'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X, ArrowRight } from 'lucide-react';
import { PODCAST_SETUPS, PodcastSetup } from '@/data/setups';

interface PodcastSetupsProps {
  onOpenModal?: (inquiry?: string) => void;
}

export default function PodcastSetups({ onOpenModal }: PodcastSetupsProps) {
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
    <section className="divider-top" id="podcast-setups">
      <div className="stg-container">
        {/* Head */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
          <p
            style={{
              margin: '0 0 0.5rem',
              fontSize: '0.75rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--bringer-s-text-accent)',
              fontWeight: 600,
            }}
          >
            Inside the Facility
          </p>
          <h2 style={{ fontSize: 'clamp(1.85rem, 3.2vw, 2.6rem)', marginBottom: '0.75rem' }}>
            Explore Our Podcast Setups
          </h2>
          <p
            className="bringer-large-text"
            style={{
              maxWidth: '38em',
              marginLeft: 'auto',
              marginRight: 'auto',
              fontSize: 'clamp(0.95rem, 1.2vw, 1.05rem)',
              color: 'rgba(255, 255, 255, 0.72)',
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
            gap: 'clamp(1rem, 1.8vw, 1.5rem)',
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
                  background: 'linear-gradient(160deg, rgba(26, 29, 36, 0.8) 0%, rgba(14, 17, 23, 0.7) 100%)',
                  border: isSelected
                    ? '1px solid #5C9DFF'
                    : '1px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: isSelected
                    ? '0 0 0 1px rgba(92, 157, 255, 0.4), 0 16px 40px rgba(0,0,0,0.6)'
                    : '0 4px 20px rgba(0,0,0,0.3)',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  transform: isSelected ? 'scale(1.015)' : 'none',
                }}
                onMouseEnter={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.borderColor = 'rgba(92, 157, 255, 0.35)';
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
                      background: 'rgba(7, 9, 13, 0.8)',
                      backdropFilter: 'blur(6px)',
                      padding: '3px 8px',
                      borderRadius: '4px',
                      fontSize: '0.7rem',
                      fontWeight: 600,
                      color: '#5C9DFF',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    {setup.tag}
                  </div>

                  <div
                    style={{
                      position: 'absolute',
                      bottom: '10px',
                      right: '10px',
                      background: 'rgba(0, 0, 0, 0.65)',
                      padding: '2px 7px',
                      borderRadius: '4px',
                      fontSize: '0.68rem',
                      color: 'rgba(255, 255, 255, 0.8)',
                    }}
                  >
                    Click to View Setup →
                  </div>
                </div>

                <div style={{ padding: '1.1rem 1.25rem 1.25rem' }}>
                  <h4 style={{ fontSize: '1.15rem', marginBottom: '0.35rem', color: '#F5F7FA', fontWeight: 600 }}>
                    {setup.title}
                  </h4>
                  <p
                    style={{
                      margin: 0,
                      fontSize: '0.86rem',
                      lineHeight: 1.5,
                      color: 'rgba(255, 255, 255, 0.72)',
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
              background: 'rgba(14, 17, 23, 0.98)',
              border: '1px solid rgba(92, 157, 255, 0.4)',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 24px 60px rgba(0, 0, 0, 0.8)',
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
                <p style={{ fontSize: '0.92rem', lineHeight: 1.6, color: 'rgba(255, 255, 255, 0.8)' }}>
                  {selectedSetup.desc}
                </p>

                {onOpenModal && (
                  <button
                    type="button"
                    className="bringer-button"
                    onClick={() => onOpenModal(`Setup ${selectedSetup.index}: ${selectedSetup.title}`)}
                    style={{
                      marginTop: '1.25rem',
                      width: '100%',
                      fontSize: '0.88rem',
                      padding: '0.75rem 1.25rem',
                    }}
                  >
                    <span>Book This Setup</span>
                    <ArrowRight size={15} />
                  </button>
                )}
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
