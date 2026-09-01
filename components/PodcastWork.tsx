'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { PODCAST_VIDEOS, PodcastVideo } from '@/data/videos';

export default function PodcastWork() {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);
  const [startIndex, setStartIndex] = useState(0);

  const visibleCount = 3;

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % PODCAST_VIDEOS.length);
  };

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + PODCAST_VIDEOS.length) % PODCAST_VIDEOS.length);
  };

  const getVisibleVideos = () => {
    const items: { video: PodcastVideo; index: number }[] = [];
    for (let i = 0; i < visibleCount; i++) {
      const idx = (startIndex + i) % PODCAST_VIDEOS.length;
      items.push({ video: PODCAST_VIDEOS[idx], index: idx });
    }
    return items;
  };

  return (
    <section className="divider-top" id="podcast-work">
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
            Showcase Episodes
          </p>
          <h2 style={{ fontSize: 'clamp(1.85rem, 3.2vw, 2.6rem)', marginBottom: '0.75rem' }}>
            Podcasts Shot at ARCC Media Production
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
            Real podcast and interview episodes recorded inside our studio.
          </p>
        </div>

        {/* Video Slider Container */}
        <div style={{ position: 'relative', width: '100%', marginBottom: '2rem' }}>
          {/* Arrow Left */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous podcast videos"
            style={{
              position: 'absolute',
              left: '-20px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: 'rgba(0, 0, 0, 0.75)',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 4px 16px rgba(0,0,0,0.5)',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(0, 0, 0, 0.95)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(0, 0, 0, 0.75)')}
          >
            <ChevronLeft size={22} />
          </button>

          {/* Video Cards Grid */}
          <div
            className="podcast-work-slider-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
              gap: 'clamp(1rem, 1.6vw, 1.5rem)',
            }}
          >
            {getVisibleVideos().map(({ video }, vIdx) => {
              const isPlaying = activeVideoId === video.youtubeId;
              const thumbUrl = `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`;

              return (
                <button
                  key={`${video.id}-${vIdx}`}
                  type="button"
                  onClick={() => setActiveVideoId(isPlaying ? null : video.youtubeId)}
                  style={{
                    position: 'relative',
                    aspectRatio: '16 / 9',
                    width: '100%',
                    padding: 0,
                    border: isPlaying ? '2px solid #5C9DFF' : '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '14px',
                    background: '#000',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    textAlign: 'left',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5)',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.borderColor = 'rgba(92, 157, 255, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.borderColor = isPlaying
                      ? '#5C9DFF'
                      : 'rgba(255, 255, 255, 0.1)';
                  }}
                >
                  {/* Thumbnail */}
                  <Image
                    src={thumbUrl}
                    alt={video.title}
                    fill
                    sizes="(max-width: 760px) 100vw, 33vw"
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'center',
                    }}
                  />

                  {/* Play Button Overlay */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '46px',
                      height: '46px',
                      borderRadius: '50%',
                      background: 'rgba(0, 0, 0, 0.7)',
                      border: '1px solid rgba(255, 255, 255, 0.4)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.5)',
                      pointerEvents: 'none',
                    }}
                  >
                    <div
                      style={{
                        width: 0,
                        height: 0,
                        borderTop: '7px solid transparent',
                        borderBottom: '7px solid transparent',
                        borderLeft: '11px solid #fff',
                        marginLeft: '3px',
                      }}
                    />
                  </div>

                  {/* Gradient Meta Banner */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: '2rem 1rem 0.85rem',
                      background:
                        'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0.95) 100%)',
                      pointerEvents: 'none',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.2rem',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '0.7rem',
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: '#5C9DFF',
                        fontWeight: 600,
                      }}
                    >
                      {video.category}
                    </span>
                    <h3
                      style={{
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        color: '#F5F7FA',
                        lineHeight: 1.3,
                        margin: 0,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                      }}
                    >
                      {video.title}
                    </h3>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Arrow Right */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next podcast videos"
            style={{
              position: 'absolute',
              right: '-20px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: 'rgba(0, 0, 0, 0.75)',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 4px 16px rgba(0,0,0,0.5)',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(0, 0, 0, 0.95)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(0, 0, 0, 0.75)')}
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* Inline Active YouTube Video Player */}
        {activeVideoId && (
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '900px',
              margin: '2rem auto',
              aspectRatio: '16 / 9',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 24px 60px rgba(0, 0, 0, 0.85)',
              border: '1px solid rgba(92, 157, 255, 0.4)',
              background: '#000',
              animation: 'fadeIn 0.3s ease',
            }}
          >
            <button
              type="button"
              onClick={() => setActiveVideoId(null)}
              aria-label="Close video player"
              style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                zIndex: 20,
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: 'rgba(0, 0, 0, 0.8)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <X size={18} />
            </button>

            <iframe
              src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1&rel=0`}
              title="Podcast Video Player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                display: 'block',
              }}
            />
          </div>
        )}

        {/* Bottom Action Buttons */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.75rem',
            justifyContent: 'center',
            marginTop: '1.5rem',
          }}
        >
          <a
            href="#podcast-setups"
            className="bringer-button"
            style={{ minHeight: '44px' }}
          >
            View Our Work
          </a>
          <a
            href="#studio-location"
            className="bringer-button is-secondary"
            style={{ minHeight: '44px' }}
          >
            Growth Stories
          </a>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 960px) {
          :global(.podcast-work-slider-grid) {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }
        @media (max-width: 640px) {
          :global(.podcast-work-slider-grid) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
