'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X, ArrowRight, Video, Mic, Users, CheckCircle2 } from 'lucide-react';
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
        <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 3.5vw, 3rem)' }}>
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

        {/* High-Craft Bento Grid */}
        <div
          className="setup-bento-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            gap: 'clamp(1.15rem, 2vw, 1.65rem)',
            alignItems: 'stretch',
          }}
        >
          {PODCAST_SETUPS.map((setup, idx) => {
            const isSelected = selectedSetupIndex === idx;
            return (
              <article
                key={setup.index}
                onClick={() => handleCardClick(idx)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  background: 'linear-gradient(165deg, rgba(26, 29, 36, 0.85) 0%, rgba(14, 17, 23, 0.75) 100%)',
                  border: isSelected
                    ? '1px solid #5C9DFF'
                    : '1px solid rgba(255, 255, 255, 0.09)',
                  boxShadow: isSelected
                    ? '0 0 0 1px rgba(92, 157, 255, 0.5), 0 20px 48px rgba(0,0,0,0.7)'
                    : '0 4px 24px rgba(0,0,0,0.35)',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  transform: isSelected ? 'scale(1.015)' : 'none',
                }}
                onMouseEnter={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.borderColor = 'rgba(92, 157, 255, 0.45)';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 12px 36px rgba(63, 110, 233, 0.15)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.09)';
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.35)';
                  }
                }}
              >
                {/* Visual Image Header */}
                <div
                  style={{
                    position: 'relative',
                    aspectRatio: '16 / 9',
                    width: '100%',
                    background: '#07090D',
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
                      transition: 'transform 0.5s ease',
                    }}
                  />

                  {/* Gradient shadow for text contrast */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,0.7) 100%)',
                      pointerEvents: 'none',
                    }}
                  />

                  {/* Setup Index Pill */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      background: 'rgba(7, 9, 13, 0.85)',
                      backdropFilter: 'blur(8px)',
                      padding: '3px 9px',
                      borderRadius: '6px',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      color: '#5C9DFF',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      border: '1px solid rgba(92, 157, 255, 0.3)',
                    }}
                  >
                    {setup.tag}
                  </div>

                  {/* Capacity Pill */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      right: '12px',
                      background: 'rgba(0, 0, 0, 0.75)',
                      backdropFilter: 'blur(6px)',
                      padding: '3px 8px',
                      borderRadius: '6px',
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      color: 'rgba(255, 255, 255, 0.9)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                    }}
                  >
                    <Users size={12} style={{ color: '#5C9DFF' }} />
                    <span>{setup.capacity}</span>
                  </div>

                  {/* Best For Tag Badge */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '10px',
                      left: '12px',
                      right: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '0.72rem',
                        color: 'rgba(255, 255, 255, 0.9)',
                        fontWeight: 500,
                        background: 'rgba(0, 0, 0, 0.65)',
                        padding: '2px 8px',
                        borderRadius: '4px',
                      }}
                    >
                      {setup.bestFor}
                    </span>

                    <span
                      style={{
                        fontSize: '0.7rem',
                        color: '#5C9DFF',
                        fontWeight: 600,
                        background: 'rgba(7, 9, 13, 0.8)',
                        padding: '2px 6px',
                        borderRadius: '4px',
                      }}
                    >
                      Inspect →
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div
                  style={{
                    padding: '1.25rem 1.35rem 1.4rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    flex: '1 0 auto',
                  }}
                >
                  <div>
                    <h3
                      style={{
                        fontSize: '1.2rem',
                        marginBottom: '0.45rem',
                        color: '#F5F7FA',
                        fontWeight: 700,
                      }}
                    >
                      {setup.title}
                    </h3>
                    <p
                      style={{
                        margin: 0,
                        fontSize: '0.86rem',
                        lineHeight: 1.55,
                        color: 'rgba(255, 255, 255, 0.72)',
                        marginBottom: '1rem',
                      }}
                    >
                      {setup.desc}
                    </p>
                  </div>

                  {/* Tech Specs Chips */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.4rem',
                      paddingTop: '0.85rem',
                      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                      fontSize: '0.78rem',
                      color: 'rgba(255, 255, 255, 0.75)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                      <Video size={13} style={{ color: '#5C9DFF', flexShrink: 0 }} />
                      <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {setup.cameras}
                      </span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                      <Mic size={13} style={{ color: '#5C9DFF', flexShrink: 0 }} />
                      <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {setup.audio}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Inline Preview Expander */}
        {selectedSetup && (
          <div
            style={{
              marginTop: '2.5rem',
              background: 'rgba(14, 17, 23, 0.98)',
              border: '1px solid rgba(92, 157, 255, 0.5)',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 28px 70px rgba(0, 0, 0, 0.85)',
              display: 'flex',
              flexWrap: 'wrap',
              animation: 'fadeIn 0.3s ease',
            }}
          >
            {/* Gallery Media */}
            <div
              style={{
                flex: '1 1 65%',
                minWidth: '320px',
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
                padding: '2.25rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                background: 'rgba(26, 29, 36, 0.98)',
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
                  top: '1.25rem',
                  right: '1.25rem',
                  color: 'rgba(255, 255, 255, 0.6)',
                  cursor: 'pointer',
                  padding: '4px',
                }}
              >
                <X size={22} />
              </button>

              <div>
                <span
                  style={{
                    fontSize: '0.8rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: '#5C9DFF',
                    fontWeight: 700,
                    display: 'block',
                    marginBottom: '0.5rem',
                  }}
                >
                  {selectedSetup.tag} · {selectedSetup.capacity}
                </span>

                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem', color: '#F5F7FA', fontWeight: 700 }}>
                  {selectedSetup.title}
                </h3>

                <p style={{ fontSize: '0.92rem', lineHeight: 1.6, color: 'rgba(255, 255, 255, 0.8)', marginBottom: '1.25rem' }}>
                  {selectedSetup.desc}
                </p>

                {/* Specs List in Modal */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem',
                    padding: '1rem',
                    borderRadius: '10px',
                    background: 'rgba(7, 9, 13, 0.6)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    marginBottom: '1.5rem',
                    fontSize: '0.84rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255, 255, 255, 0.9)' }}>
                    <CheckCircle2 size={15} style={{ color: '#22C55E' }} />
                    <span><strong>Cameras:</strong> {selectedSetup.cameras}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255, 255, 255, 0.9)' }}>
                    <CheckCircle2 size={15} style={{ color: '#22C55E' }} />
                    <span><strong>Audio:</strong> {selectedSetup.audio}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255, 255, 255, 0.9)' }}>
                    <CheckCircle2 size={15} style={{ color: '#22C55E' }} />
                    <span><strong>Ideal for:</strong> {selectedSetup.bestFor}</span>
                  </div>
                </div>

                {onOpenModal && (
                  <button
                    type="button"
                    className="bringer-button"
                    onClick={() => onOpenModal(`Setup ${selectedSetup.index}: ${selectedSetup.title}`)}
                    style={{
                      width: '100%',
                      fontSize: '0.92rem',
                      padding: '0.85rem 1.5rem',
                    }}
                  >
                    <span>Book This Setup</span>
                    <ArrowRight size={16} />
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
        @media (max-width: 1024px) {
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
