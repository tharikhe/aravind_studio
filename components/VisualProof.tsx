'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { VISUAL_FRAMES, VisualFrame } from '@/data/frames';

export default function VisualProof() {
  const [selectedFrameIndex, setSelectedFrameIndex] = useState<number | null>(null);

  const selectedFrame: VisualFrame | null =
    selectedFrameIndex !== null ? VISUAL_FRAMES[selectedFrameIndex] : null;

  const handleCardClick = (idx: number) => {
    if (selectedFrameIndex === idx) {
      setSelectedFrameIndex(null);
    } else {
      setSelectedFrameIndex(idx);
    }
  };

  const handleNextFrame = () => {
    if (selectedFrameIndex === null) return;
    const nextIdx = (selectedFrameIndex + 1) % VISUAL_FRAMES.length;
    setSelectedFrameIndex(nextIdx);
  };

  const handlePrevFrame = () => {
    if (selectedFrameIndex === null) return;
    const prevIdx = (selectedFrameIndex - 1 + VISUAL_FRAMES.length) % VISUAL_FRAMES.length;
    setSelectedFrameIndex(prevIdx);
  };

  return (
    <section className="divider-top backlight-both" id="podcast-frames">
      <div className="stg-container">
        {/* Head */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
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
            Contact Sheet
          </p>
          <h2 style={{ fontSize: 'clamp(1.85rem, 3.5vw, 2.75rem)', marginBottom: '0.85rem' }}>
            See What Your Podcast Can Look Like
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
            Real podcast frames shot at Winterfox Studios.
          </p>
        </div>

        {/* 4-Col Grid */}
        <div
          className="frame-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
            gap: 'var(--stg-gap)',
          }}
        >
          {VISUAL_FRAMES.map((frame, idx) => {
            const isSelected = selectedFrameIndex === idx;
            return (
              <div
                key={frame.id}
                onClick={() => handleCardClick(idx)}
                style={{
                  position: 'relative',
                  background: 'rgba(0, 0, 0, 0.35)',
                  border: isSelected
                    ? '1px solid #5C9DFF'
                    : '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  boxShadow: isSelected
                    ? '0 0 0 1px rgba(92, 157, 255, 0.3), 0 8px 24px rgba(0,0,0,0.5)'
                    : '0 2px 10px rgba(0,0,0,0.2)',
                  transition: 'all 0.25s ease',
                  transform: isSelected ? 'scale(1.02)' : 'none',
                }}
                onMouseEnter={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.22)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.transform = 'none';
                  }
                }}
              >
                <span
                  style={{
                    position: 'absolute',
                    top: '8px',
                    left: '8px',
                    zIndex: 2,
                    fontSize: '0.68rem',
                    letterSpacing: '0.06em',
                    fontFamily: 'ui-monospace, monospace',
                    color: 'rgba(255, 255, 255, 0.85)',
                    background: 'rgba(0, 0, 0, 0.65)',
                    padding: '0.2em 0.45em',
                    borderRadius: '4px',
                  }}
                >
                  {frame.index}
                </span>

                <div
                  style={{
                    position: 'relative',
                    aspectRatio: '16 / 9',
                    width: '100%',
                    background: '#07090D',
                  }}
                >
                  <Image
                    src={frame.image}
                    alt={frame.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 25vw"
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'center',
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Inline Frame Preview Expander */}
        {selectedFrame && (
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
            {/* Image View */}
            <div
              style={{
                flex: '1 1 68%',
                minWidth: '300px',
                aspectRatio: '16 / 9',
                position: 'relative',
                background: '#07090D',
              }}
            >
              <Image
                src={selectedFrame.image}
                alt={selectedFrame.alt}
                fill
                sizes="(max-width: 960px) 100vw, 68vw"
                style={{ objectFit: 'cover' }}
              />
            </div>

            {/* Details & Metadata Panel */}
            <div
              style={{
                flex: '0 1 32%',
                minWidth: '260px',
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
                onClick={() => setSelectedFrameIndex(null)}
                aria-label="Close frame preview"
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
                    marginBottom: '0.75rem',
                    fontFamily: 'monospace',
                  }}
                >
                  Frame {selectedFrame.index}
                </span>

                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.4rem',
                    marginBottom: '1rem',
                  }}
                >
                  {selectedFrame.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      style={{
                        fontSize: '0.72rem',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        padding: '0.25rem 0.55rem',
                        borderRadius: '999px',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        background: 'rgba(255, 255, 255, 0.06)',
                        color: 'rgba(255, 255, 255, 0.85)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p
                  style={{
                    fontSize: '0.95rem',
                    lineHeight: 1.6,
                    color: 'rgba(255, 255, 255, 0.8)',
                    margin: 0,
                  }}
                >
                  {selectedFrame.alt}
                </p>
              </div>

              {/* Prev / Next Frame Nav */}
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
                  onClick={handlePrevFrame}
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
                  {selectedFrame.index} / {String(VISUAL_FRAMES.length).padStart(2, '0')}
                </span>
                <button
                  type="button"
                  onClick={handleNextFrame}
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
        @media (max-width: 1200px) {
          :global(.frame-grid) {
            grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
          }
        }
        @media (max-width: 760px) {
          :global(.frame-grid) {
            grid-template-columns: minmax(0, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
