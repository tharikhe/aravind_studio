'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { GOOGLE_REVIEWS } from '@/data/reviews';

export default function GoogleReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleCount = 3;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % GOOGLE_REVIEWS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + GOOGLE_REVIEWS.length) % GOOGLE_REVIEWS.length);
  };

  const getVisibleReviews = () => {
    const items = [];
    for (let i = 0; i < visibleCount; i++) {
      const idx = (currentIndex + i) % GOOGLE_REVIEWS.length;
      items.push(GOOGLE_REVIEWS[idx]);
    }
    return items;
  };

  return (
    <section className="divider-top" id="google-reviews">
      <div className="stg-container">
        {/* Head */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
          <p
            style={{
              margin: '0 0 0.5rem',
              fontSize: '0.75rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#B0B0B0',
              fontWeight: 600,
            }}
          >
            Verified Feedback
          </p>
          <h2 style={{ fontSize: 'clamp(1.85rem, 3.2vw, 2.6rem)', marginBottom: '0.75rem', color: '#FFFFFF' }}>
            What Clients Say About ARCC Media Production
          </h2>
          <p
            className="bringer-large-text"
            style={{
              maxWidth: '38em',
              marginLeft: 'auto',
              marginRight: 'auto',
              fontSize: 'clamp(0.95rem, 1.2vw, 1.05rem)',
              color: '#B0B0B0',
            }}
          >
            Real feedback from creators, brands, and podcast hosts recorded at our Indiranagar studio.
          </p>

          {/* Google Rating Badge */}
          <div
            style={{
              display: 'inline-flex',
              flexDirection: 'column',
              alignItems: 'center',
              margin: '1.25rem auto 0',
              padding: '0.75rem 1.6rem',
              border: '1px solid #4D4D4D',
              borderRadius: '12px',
              background: '#0d0d0d',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.4)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
              <div style={{ display: 'flex', gap: '2px', color: '#FFFFFF' }}>
                {[...Array(5)].map((_, sIdx) => (
                  <Star key={sIdx} size={15} fill="#FFFFFF" strokeWidth={0} />
                ))}
              </div>
              <span style={{ fontSize: '1rem', fontWeight: 700, color: '#FFFFFF' }}>4.9 / 5.0</span>
            </div>
            <p
              style={{
                margin: '0.2rem 0 0',
                fontSize: '0.78rem',
                letterSpacing: '0.04em',
                color: '#B0B0B0',
              }}
            >
              Verified Google Reviews
            </p>
          </div>
        </div>

        {/* Carousel Wrap */}
        <div style={{ position: 'relative', width: '100%', marginBottom: '2rem' }}>
          {/* Arrow Left */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous review"
            style={{
              position: 'absolute',
              left: '-20px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: 'rgba(0, 0, 0, 0.85)',
              border: '1px solid #4D4D4D',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 4px 16px rgba(0,0,0,0.7)',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#FFFFFF';
              e.currentTarget.style.color = '#000000';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(0, 0, 0, 0.85)';
              e.currentTarget.style.color = '#FFFFFF';
            }}
          >
            <ChevronLeft size={22} />
          </button>

          {/* Reviews Grid */}
          <div
            className="reviews-slider-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
              gap: 'clamp(1rem, 1.6vw, 1.5rem)',
            }}
          >
            {getVisibleReviews().map((review, idx) => (
              <article
                key={`${review.id}-${idx}`}
                className="bringer-block"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  padding: '1.5rem 1.35rem',
                  minHeight: '100%',
                  background: '#0d0d0d',
                  border: '1px solid #4D4D4D',
                  borderRadius: '14px',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#FFFFFF';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(255, 255, 255, 0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#4D4D4D';
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
                }}
              >
                {/* Top: Stars + Google Mark */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                  }}
                >
                  <div style={{ display: 'flex', gap: '3px', color: '#FFFFFF' }}>
                    {[...Array(5)].map((_, sIdx) => (
                      <Star key={sIdx} size={15} fill="#FFFFFF" strokeWidth={0} />
                    ))}
                  </div>

                  <a
                    href={review.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      fontSize: '0.72rem',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      color: '#B0B0B0',
                      textDecoration: 'none',
                    }}
                  >
                    <span
                      style={{
                        width: '18px',
                        height: '18px',
                        borderRadius: '50%',
                        background: '#FFFFFF',
                        color: '#000000',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 700,
                        fontSize: '0.65rem',
                      }}
                    >
                      G
                    </span>
                    <span>Reviews</span>
                  </a>
                </div>

                {/* Quote Text */}
                <blockquote
                  style={{
                    flex: '1 1 auto',
                    margin: 0,
                    fontSize: '0.86rem',
                    lineHeight: 1.6,
                    color: '#B0B0B0',
                    fontStyle: 'normal',
                  }}
                >
                  &ldquo;{review.quote}&rdquo;
                </blockquote>

                {/* Footer / Author */}
                <footer
                  style={{
                    paddingTop: '0.5rem',
                    borderTop: '1px solid #4D4D4D',
                  }}
                >
                  <a
                    href={review.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      color: '#FFFFFF',
                      textDecoration: 'none',
                    }}
                  >
                    {review.author}
                  </a>
                </footer>
              </article>
            ))}
          </div>

          {/* Arrow Right */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next review"
            style={{
              position: 'absolute',
              right: '-20px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: 'rgba(0, 0, 0, 0.85)',
              border: '1px solid #4D4D4D',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 4px 16px rgba(0,0,0,0.7)',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#FFFFFF';
              e.currentTarget.style.color = '#000000';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(0, 0, 0, 0.85)';
              e.currentTarget.style.color = '#FFFFFF';
            }}
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* Read All Reviews Link */}
        <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <a
            href="https://www.google.com/maps/search/?api=1&query=ARCC+Media+Production+Bangalore"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              color: '#FFFFFF',
              fontSize: '0.95rem',
              fontWeight: 600,
              textDecoration: 'none',
            }}
          >
            Read All Google Reviews &rarr;
          </a>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          :global(.reviews-slider-grid) {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }
        @media (max-width: 640px) {
          :global(.reviews-slider-grid) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
