'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import { PODCAST_VIDEOS, PodcastVideo } from '@/data/videos';

export default function PodcastWork() {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  // Triple the array for seamless infinite marquee loop
  const marqueeVideos = [...PODCAST_VIDEOS, ...PODCAST_VIDEOS, ...PODCAST_VIDEOS];

  return (
    <section className="divider-top" id="podcast-work" style={{ background: '#FFFFFF', overflow: 'hidden' }}>
      <div className="stg-container">
        {/* Head */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 3.5vw, 2.75rem)' }}>
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
            Showcase Episodes
          </p>
          <h2 style={{ fontSize: 'clamp(1.85rem, 3.2vw, 2.6rem)', marginBottom: '0.75rem', color: '#0A0A0A' }}>
            Podcasts Shot at ARCC Media Production
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
            Real podcast and interview episodes recorded inside our studio.
          </p>
        </div>
      </div>

      {/* Auto-Flowing Infinite Marquee Container */}
      <div
        className="marquee-wrapper"
        style={{
          position: 'relative',
          width: '100%',
          overflow: 'hidden',
          padding: '0.5rem 0 1.5rem',
        }}
      >
        {/* Left & Right Soft Fade Gradients */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            width: 'clamp(40px, 8vw, 120px)',
            background: 'linear-gradient(to right, #FFFFFF, rgba(255, 255, 255, 0))',
            zIndex: 10,
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            width: 'clamp(40px, 8vw, 120px)',
            background: 'linear-gradient(to left, #FFFFFF, rgba(255, 255, 255, 0))',
            zIndex: 10,
            pointerEvents: 'none',
          }}
        />

        {/* Continuous Track */}
        <div
          className="marquee-track"
          style={{
            display: 'flex',
            gap: '1.25rem',
            width: 'max-content',
          }}
        >
          {marqueeVideos.map((video, idx) => {
            const isPlaying = activeVideoId === video.youtubeId;
            const thumbUrl = `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`;

            return (
              <button
                key={`${video.id}-${idx}`}
                type="button"
                onClick={() => setActiveVideoId(isPlaying ? null : video.youtubeId)}
                className="marquee-video-card"
                style={{
                  position: 'relative',
                  width: 'clamp(280px, 26vw, 360px)',
                  aspectRatio: '16 / 9',
                  flexShrink: 0,
                  padding: 0,
                  border: isPlaying ? '2px solid #000000' : '1px solid #E5E7EB',
                  borderRadius: '16px',
                  background: '#000000',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  textAlign: 'left',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06)',
                  transition: 'transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
                }}
              >
                {/* Thumbnail */}
                <Image
                  src={thumbUrl}
                  alt={video.title}
                  fill
                  sizes="360px"
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
                    background: 'rgba(255, 255, 255, 0.95)',
                    border: '1px solid rgba(0, 0, 0, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.25)',
                    pointerEvents: 'none',
                  }}
                >
                  <div
                    style={{
                      width: 0,
                      height: 0,
                      borderTop: '7px solid transparent',
                      borderBottom: '7px solid transparent',
                      borderLeft: '11px solid #000000',
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
                      'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.85) 50%, rgba(0,0,0,0.98) 100%)',
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
                      color: '#E5E7EB',
                      fontWeight: 600,
                    }}
                  >
                    {video.category}
                  </span>
                  <h3
                    style={{
                      fontSize: '0.88rem',
                      fontWeight: 600,
                      color: '#FFFFFF',
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
      </div>

      <div className="stg-container">
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
              boxShadow: '0 24px 60px rgba(0, 0, 0, 0.25)',
              border: '2px solid #000000',
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
            marginTop: '1.25rem',
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
        .marquee-track {
          animation: marqueeScroll 32s linear infinite;
        }

        .marquee-wrapper:hover .marquee-track {
          animation-play-state: paused;
        }

        .marquee-video-card:hover {
          transform: translateY(-4px) scale(1.02);
          border-color: #000000 !important;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.14) !important;
        }

        @keyframes marqueeScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }
      `}</style>
    </section>
  );
}
