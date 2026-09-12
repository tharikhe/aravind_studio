'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Twitter, Instagram, Linkedin } from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'team-1',
    name: 'ELENA VANCE',
    role: 'CREATIVE DIRECTOR & ATELIER LEAD',
    image: '/images/glissando/team-1.jpg',
    bio: 'Overseeing set architecture, lighting continuity, and brand narrative for marquee podcasts and commercial broadcasts.',
  },
  {
    id: 'team-2',
    name: 'MICHAEL JEFFERSON',
    role: 'CHIEF AUDIO ENGINEER',
    image: '/images/glissando/team-2.jpg',
    bio: 'Acoustic specialist tuning studio dynamics, vocal mastering, and multi-channel microphone calibration.',
  },
  {
    id: 'team-3',
    name: 'MARCUS STERLING',
    role: 'DIRECTOR OF PHOTOGRAPHY',
    image: '/images/glissando/team-3.jpg',
    bio: 'Cinema Line specialist configuring multi-cam Sony FX3 and FX6 sensor arrays for uncompressed fidelity.',
  },
];

export default function CreativeTeam() {
  const [activeIdx, setActiveIdx] = useState(1); // Default to middle like Glissando screenshot

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? TEAM_MEMBERS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev === TEAM_MEMBERS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="glissando-team"
      className="glissando-cut-both-left"
      style={{
        background: '#121212',
        color: '#ffffff',
        paddingTop: 'clamp(6rem, 10vw, 9rem)',
        paddingBottom: 'clamp(6rem, 10vw, 9rem)',
        position: 'relative',
      }}
    >
      <div className="film-grain-overlay" />

      <div className="stg-container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Glissando Section Header */}
        <div className="glissando-header">
          <p
            style={{
              fontSize: '0.72rem',
              letterSpacing: '0.24em',
              textTransform: 'uppercase',
              fontWeight: 600,
              color: '#a1a1aa',
              marginBottom: '0.5rem',
            }}
          >
            The Atelier Collective
          </p>
          <h2 className="glissando-title on-dark">Creative Team</h2>
          <span className="glissando-dash" style={{ color: '#ffffff' }} />
          <p className="glissando-subtext on-dark">
            Our directors, sound masters, and cinematographers bring decades of broadcast expertise to every shoot.
          </p>
        </div>

        {/* Team Display with Glissando Navigation Arrows */}
        <div
          style={{
            position: 'relative',
            maxWidth: '1100px',
            margin: '0 auto',
          }}
        >
          {/* Left Arrow */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous team member"
            style={{
              position: 'absolute',
              left: '-24px',
              top: '40%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              color: 'rgba(255, 255, 255, 0.65)',
              padding: '12px',
              cursor: 'pointer',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.65)')}
          >
            <ChevronLeft size={36} strokeWidth={1} />
          </button>

          {/* Right Arrow */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next team member"
            style={{
              position: 'absolute',
              right: '-24px',
              top: '40%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              color: 'rgba(255, 255, 255, 0.65)',
              padding: '12px',
              cursor: 'pointer',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.65)')}
          >
            <ChevronRight size={36} strokeWidth={1} />
          </button>

          {/* 3 Team Cards Row */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 'clamp(1rem, 2.5vw, 2rem)',
            }}
            className="team-grid"
          >
            {TEAM_MEMBERS.map((member, idx) => {
              const isActive = activeIdx === idx;
              return (
                <div
                  key={member.id}
                  onClick={() => setActiveIdx(idx)}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    cursor: 'pointer',
                    opacity: isActive ? 1 : 0.6,
                    transition: 'all 0.3s ease',
                    transform: isActive ? 'scale(1.02)' : 'scale(0.98)',
                  }}
                  className="team-card"
                >
                  {/* Portrait Image (Black and White Editorial) */}
                  <div
                    style={{
                      position: 'relative',
                      width: '100%',
                      aspectRatio: '1 / 1.15',
                      overflow: 'hidden',
                      marginBottom: '1.25rem',
                      background: '#1a1a1a',
                      border: isActive
                        ? '1px solid rgba(255, 255, 255, 0.35)'
                        : '1px solid rgba(255, 255, 255, 0.08)',
                    }}
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      style={{
                        objectFit: 'cover',
                        filter: 'grayscale(100%) contrast(115%)',
                      }}
                    />
                  </div>

                  {/* Member Name */}
                  <h3
                    style={{
                      fontSize: '0.92rem',
                      fontWeight: 700,
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: '#ffffff',
                      marginBottom: '0.35rem',
                    }}
                  >
                    {member.name}
                  </h3>

                  {/* Member Role */}
                  <p
                    style={{
                      fontSize: '0.68rem',
                      letterSpacing: '0.16em',
                      textTransform: 'uppercase',
                      color: '#a1a1aa',
                      fontWeight: 500,
                      marginBottom: '0.85rem',
                    }}
                  >
                    {member.role}
                  </p>

                  {/* Circular Outline Social Icons (Exact Glissando Detail) */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      marginBottom: '0.85rem',
                    }}
                  >
                    <span
                      style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        border: '1px solid rgba(255, 255, 255, 0.35)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'rgba(255, 255, 255, 0.8)',
                      }}
                    >
                      <Twitter size={12} />
                    </span>
                    <span
                      style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        border: '1px solid rgba(255, 255, 255, 0.35)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'rgba(255, 255, 255, 0.8)',
                      }}
                    >
                      <Instagram size={12} />
                    </span>
                    <span
                      style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        border: '1px solid rgba(255, 255, 255, 0.35)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'rgba(255, 255, 255, 0.8)',
                      }}
                    >
                      <Linkedin size={12} />
                    </span>
                  </div>

                  {/* Active Underline Accent Bar (Glissando signature) */}
                  <div
                    style={{
                      width: '40px',
                      height: '2px',
                      background: isActive ? '#ffffff' : 'transparent',
                      transition: 'background 0.3s ease',
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .team-grid {
            grid-template-columns: 1fr !important;
          }
          .team-card {
            max-width: 320px;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
}
