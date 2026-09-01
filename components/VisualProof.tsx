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
    <section className="divider-top" id="podcast-frames" style={{ background: '#F8F9FA' }}>
      <div className="stg-container">
        {/* Head */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
          <p
            style={{
              margin: '0 0 0.5rem',
              fontSize: '0.75rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#52525B',
              fontWeight: 600,
            }}
          >
            Contact Sheet
          </p>
          <h2 style={{ fontSize: 'clamp(1.85rem, 3.2vw, 2.6rem)', marginBottom: '0.75rem', color: '#0A0A0A' }}>
            See What Your Podcast Can Look Like
          </h2>
          <p
            className="bringer-large-text"
            style={{
              maxWidth: '38em',
              marginLeft: 'auto',
              marginRight: 'auto',
              fontSize: 'clamp(0.95rem, 1.2vw, 1.05rem)',
              color: '#52525B',
            }}
          >
            Real podcast frames shot at ARCC Media Production across different lighting setups and camera configurations.
          </p>
        </div>

        {/* 4-Col Grid */}
        <div
          className="frame-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
            gap: 'clamp(0.75rem, 1.4vw, 1.15rem)',
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
                  background: '#FFFFFF',
                  border: isSelected
                    ? '2px solid #000000'
                    : '1px solid #E5E7EB',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  boxShadow: isSelected
                    ? '0 10px 28px rgba(0,0,0,0.12)'
                    : '0 2px 10px rgba(0,0,0,0.04)',
                  transition: 'all 0.25s ease',
                  transform: isSelected ? 'scale(1.02)' : 'none',
                }}
                onMouseEnter={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.borderColor = '#000000';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.borderColor = '#E5E7EB';
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
                    color: '#FFFFFF',
                    background: '#000000',
                    padding: '2px 6px',
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
                    background: '#F3F4F6',
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
              background: '#FFFFFF',
              border: '2px solid #000000',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 24px 60px rgba(0, 0, 0, 0.15)',
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
                background: '#000000',
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
                background: '#F8F9FA',
                borderLeft: '1px solid #E5E7EB',
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
                  color: '#52525B',
                  background: '#FFFFFF',
                  border: '1px solid #E5E7EB',
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  padding: '4px',
                }}
              >
                <X size={18} />
              </button>

              <div>
                <span
                  style={{
                    fontSize: '0.8rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: '#000000',
                    fontWeight: 700,
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
                        border: '1px solid #E5E7EB',
                        background: '#FFFFFF',
                        color: '#18181B',
                        fontWeight: 600,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p
                  style={{
                    fontSize: '0.92rem',
                    lineHeight: 1.6,
                    color: '#52525B',
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
                  gap: '0.35rem',
                  justifyContent: 'space-between',
                  marginTop: '1.5rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid #E5E7EB',
                }}
              >
                <button
                  type="button"
                  onClick={handlePrevFrame}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    color: '#000000',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                  }}
                >
                  <ChevronLeft size={16} /> Previous
                </button>
                <span style={{ fontSize: '0.8rem', color: '#71717A' }}>
                  {selectedFrame.index} / {String(VISUAL_FRAMES.length).padStart(2, '0')}
                </span>
                <button
                  type="button"
                  onClick={handleNextFrame}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    color: '#000000',
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
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }
        @media (max-width: 480px) {
          :global(.frame-grid) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
