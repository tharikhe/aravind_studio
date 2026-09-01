'use client';

// This component animates an SVG path using stroke-dashoffset (1 -> 0) to reveal a curved journey line on scroll.
// An ultra-lightweight requestAnimationFrame loop lerps current progress toward the scroll target (0.08 factor) and mutates the DOM directly via refs for 60fps jank-free rendering without React state thrashing.

import React, { useEffect, useRef, useState } from 'react';
import { Mic, Video, Briefcase, GraduationCap, Film } from 'lucide-react';

export interface MilestoneItem {
  id: string;
  badge: string;
  title: string;
  desc: string;
  threshold: number; // progress 0..1
  icon: React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>;
}

const DEFAULT_MILESTONES: MilestoneItem[] = [
  {
    id: 'm1',
    badge: 'Stage 01 · Concept & Voice',
    title: 'Founder & Executive Podcasts',
    desc: 'Intimate, soundproofed on-camera dialogues tailored for founders, VCs, and thought leaders building authentic brand authority.',
    threshold: 0.05,
    icon: Mic,
  },
  {
    id: 'm2',
    badge: 'Stage 02 · 4K Multi-Cam Capture',
    title: 'High-Retention YouTube Shows',
    desc: 'Video-first production with 3-camera Sony FX cinema lines, studio Godox lighting grids, and live teleprompter support for audience retention.',
    threshold: 0.22,
    icon: Video,
  },
  {
    id: 'm3',
    badge: 'Stage 03 · Enterprise Broadcast',
    title: 'Corporate Series & Town Halls',
    desc: 'Multi-guest panel staging and roundtable setups for high-growth company announcements, stakeholder reports, and internal media channels.',
    threshold: 0.44,
    icon: Briefcase,
  },
  {
    id: 'm4',
    badge: 'Stage 04 · Knowledge Sharing',
    title: 'Masterclasses & Keynote Series',
    desc: 'Structured episodic knowledge sharing pairing dual-feed presentation slides with pristine Shure broadcast audio and high-key cycloramas.',
    threshold: 0.66,
    icon: GraduationCap,
  },
  {
    id: 'm5',
    badge: 'Stage 05 · Multi-Platform Reach',
    title: 'Viral Reels & LinkedIn Cutdowns',
    desc: 'Extract 15–20 high-hook vertical shorts, reels, and audiograms with animated subtitles directly from your master recording session.',
    threshold: 0.88,
    icon: Film,
  },
];

export interface ScrollJourneyProps {
  milestones?: MilestoneItem[];
}

export default function ScrollJourney({ milestones = DEFAULT_MILESTONES }: ScrollJourneyProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);
  const bloomPathRef = useRef<SVGPathElement | null>(null);

  // Traveling Head Glow Circles
  const headCoreRef = useRef<SVGCircleElement | null>(null);
  const headGlowRef = useRef<SVGCircleElement | null>(null);
  const headHaloRef = useRef<SVGCircleElement | null>(null);

  // Smoothness Engine State (direct DOM ref mutation, zero setState per frame)
  const currentProgressRef = useRef(0);
  const targetProgressRef = useRef(0);
  const rafIdRef = useRef<number | null>(null);
  const isRunningRef = useRef(false);
  const pathLengthRef = useRef(1);

  // Batched state strictly for infrequent milestone activations
  const [activatedNodes, setActivatedNodes] = useState<boolean[]>(() => [true, false, false, false, false]);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Accessibility check
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motionQuery.matches) {
      setReducedMotion(true);
      setActivatedNodes(new Array(milestones.length).fill(true));
      if (pathRef.current) pathRef.current.setAttribute('stroke-dashoffset', '0');
      if (bloomPathRef.current) bloomPathRef.current.setAttribute('stroke-dashoffset', '0');
      return;
    }

    const container = containerRef.current;
    const path = pathRef.current;
    const bloomPath = bloomPathRef.current;
    const headCore = headCoreRef.current;
    const headGlow = headGlowRef.current;
    const headHalo = headHaloRef.current;

    if (!container || !path) return;

    // Cache total length of SVG path
    const updatePathLength = () => {
      if (path) {
        try {
          const len = path.getTotalLength();
          pathLengthRef.current = len > 0 ? len : 1;
        } catch {
          pathLengthRef.current = 1;
        }
      }
    };
    updatePathLength();

    // Calculate normalized scroll target [0, 1] relative to section position
    const updateScrollTarget = () => {
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalDistance = rect.height - windowHeight * 0.2;
      if (totalDistance <= 0) return;

      const scrolled = windowHeight * 0.7 - rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / totalDistance));
      targetProgressRef.current = progress;

      // Wake up rAF loop if paused
      if (!isRunningRef.current) {
        isRunningRef.current = true;
        rafIdRef.current = requestAnimationFrame(tick);
      }
    };

    // Smooth lerp frame loop
    const tick = () => {
      const target = targetProgressRef.current;
      let current = currentProgressRef.current;

      // Lerp current toward target with 0.08 damping factor
      current += (target - current) * 0.08;
      currentProgressRef.current = current;

      // Direct DOM mutation for SVG stroke-dashoffset
      const offsetVal = Math.max(0, Math.min(1, 1 - current));
      const offsetStr = String(offsetVal);
      if (path) path.setAttribute('stroke-dashoffset', offsetStr);
      if (bloomPath) bloomPath.setAttribute('stroke-dashoffset', offsetStr);

      // Traveling Head Glow Coordinates
      if (pathLengthRef.current > 0 && path) {
        try {
          const pt = path.getPointAtLength(current * pathLengthRef.current);
          if (headCore) {
            headCore.setAttribute('cx', String(pt.x));
            headCore.setAttribute('cy', String(pt.y));
            headCore.style.opacity = current > 0.01 ? '1' : '0';
          }
          if (headGlow) {
            headGlow.setAttribute('cx', String(pt.x));
            headGlow.setAttribute('cy', String(pt.y));
            headGlow.style.opacity = current > 0.01 ? '0.85' : '0';
          }
          if (headHalo) {
            headHalo.setAttribute('cx', String(pt.x));
            headHalo.setAttribute('cy', String(pt.y));
            headHalo.style.opacity = current > 0.01 ? '0.4' : '0';
          }
        } catch {
          // fallback
        }
      }

      // Infrequent batched state updates for milestone nodes
      setActivatedNodes((prev) => {
        let changed = false;
        const next = [...prev];
        milestones.forEach((m, idx) => {
          const isActivated = current >= m.threshold;
          if (next[idx] !== isActivated) {
            next[idx] = isActivated;
            changed = true;
          }
        });
        return changed ? next : prev;
      });

      // Pause loop when target reached (|target - current| < 0.0005)
      if (Math.abs(target - current) < 0.0005) {
        currentProgressRef.current = target;
        isRunningRef.current = false;
        rafIdRef.current = null;
      } else {
        rafIdRef.current = requestAnimationFrame(tick);
      }
    };

    // Passive scroll listener & debounced resize
    window.addEventListener('scroll', updateScrollTarget, { passive: true });
    let resizeTimer: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        updatePathLength();
        updateScrollTarget();
      }, 100);
    };
    window.addEventListener('resize', handleResize, { passive: true });

    // Initial trigger
    updateScrollTarget();

    return () => {
      window.removeEventListener('scroll', updateScrollTarget);
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, [milestones]);

  return (
    <div
      ref={containerRef}
      className="scroll-journey-root"
      style={{
        position: 'relative',
        width: '100%',
        padding: '1rem 0 3.5rem',
      }}
    >
      {/* SVG Curved Journey Path (Absolute Centered Track) */}
      <div
        className="journey-svg-overlay"
        style={{
          position: 'absolute',
          top: '40px',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '120px',
          height: 'calc(100% - 80px)',
          pointerEvents: 'none',
          zIndex: 2,
        }}
      >
        <svg
          viewBox="0 0 100 1000"
          preserveAspectRatio="none"
          style={{
            width: '100%',
            height: '100%',
            overflow: 'visible',
          }}
        >
          <defs>
            {/* Smooth Vibrant Gradient */}
            <linearGradient id="journeyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="30%" stopColor="#8B5CF6" />
              <stop offset="65%" stopColor="#EC4899" />
              <stop offset="100%" stopColor="#F59E0B" />
            </linearGradient>

            <linearGradient id="journeyGlowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="50%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>

            {/* Bloom Filters */}
            <filter id="bloomFilter" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="4" />
            </filter>
            <filter id="glowBlur4" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="4" />
            </filter>
            <filter id="haloBlur8" x="-80%" y="-80%" width="260%" height="260%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="8" />
            </filter>
          </defs>

          {/* Background Guide Line */}
          <path
            d="M 50,0 C 90,120 90,180 50,250 C 10,320 10,420 50,500 C 90,580 90,680 50,750 C 10,820 10,920 50,1000"
            fill="none"
            stroke="#E5E7EB"
            strokeWidth="3"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />

          {/* Layer 1: Blurred Bloom Copy for Glow */}
          <path
            ref={bloomPathRef}
            d="M 50,0 C 90,120 90,180 50,250 C 10,320 10,420 50,500 C 90,580 90,680 50,750 C 10,820 10,920 50,1000"
            fill="none"
            stroke="url(#journeyGradient)"
            strokeWidth="8"
            strokeLinecap="round"
            pathLength={1}
            strokeDasharray="1"
            strokeDashoffset={reducedMotion ? '0' : '1'}
            filter="url(#bloomFilter)"
            opacity="0.5"
            vectorEffect="non-scaling-stroke"
          />

          {/* Layer 2: Crisp Foreground Animated Line */}
          <path
            ref={pathRef}
            d="M 50,0 C 90,120 90,180 50,250 C 10,320 10,420 50,500 C 90,580 90,680 50,750 C 10,820 10,920 50,1000"
            fill="none"
            stroke="url(#journeyGradient)"
            strokeWidth="3.5"
            strokeLinecap="round"
            pathLength={1}
            strokeDasharray="1"
            strokeDashoffset={reducedMotion ? '0' : '1'}
            vectorEffect="non-scaling-stroke"
          />

          {/* Traveling Head Glow */}
          {!reducedMotion && (
            <>
              <circle
                ref={headHaloRef}
                cx="50"
                cy="0"
                r="18"
                fill="url(#journeyGlowGrad)"
                filter="url(#haloBlur8)"
                opacity="0"
                vectorEffect="non-scaling-stroke"
              />
              <circle
                ref={headGlowRef}
                cx="50"
                cy="0"
                r="10"
                fill="url(#journeyGlowGrad)"
                filter="url(#glowBlur4)"
                opacity="0"
                vectorEffect="non-scaling-stroke"
              />
              <circle
                ref={headCoreRef}
                cx="50"
                cy="0"
                r="5"
                fill="#FFFFFF"
                stroke="#000000"
                strokeWidth="1.5"
                opacity="0"
                vectorEffect="non-scaling-stroke"
              />
            </>
          )}
        </svg>
      </div>

      {/* Alternating Milestone Cards Container */}
      <div
        className="stg-container"
        style={{
          position: 'relative',
          zIndex: 3,
          display: 'flex',
          flexDirection: 'column',
          gap: 'clamp(2.5rem, 5vw, 4rem)',
        }}
      >
        {milestones.map((milestone, idx) => {
          const isActivated = activatedNodes[idx] || reducedMotion;
          const isEven = idx % 2 === 0;
          const Icon = milestone.icon;

          return (
            <div
              key={milestone.id}
              className={`journey-row ${isEven ? 'journey-row-left' : 'journey-row-right'}`}
              style={{
                display: 'flex',
                justifyContent: isEven ? 'flex-start' : 'flex-end',
                width: '100%',
              }}
            >
              {/* Card Container */}
              <div
                className="journey-card"
                style={{
                  width: '100%',
                  maxWidth: '500px',
                  background: isActivated ? '#FFFFFF' : '#FAFAFA',
                  border: isActivated ? '2px solid #000000' : '1px solid #E5E7EB',
                  borderRadius: '18px',
                  padding: 'clamp(1.35rem, 2.5vw, 1.75rem)',
                  boxShadow: isActivated
                    ? '0 16px 36px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(139, 92, 246, 0.08)'
                    : '0 2px 8px rgba(0, 0, 0, 0.03)',
                  opacity: isActivated ? 1 : 0.85,
                  transform: isActivated ? 'translateY(0) scale(1)' : 'translateY(8px) scale(0.99)',
                  transition:
                    'opacity 0.4s ease-out, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease, box-shadow 0.3s ease, background 0.3s ease',
                  willChange: 'transform, opacity',
                }}
              >
                {/* Badge (Delay: 0ms) */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '0.75rem',
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: isActivated ? '#8B5CF6' : '#52525B',
                      background: isActivated ? 'rgba(139, 92, 246, 0.1)' : '#F3F4F6',
                      padding: '3px 10px',
                      borderRadius: '999px',
                      border: isActivated ? '1px solid rgba(139, 92, 246, 0.25)' : '1px solid #E5E7EB',
                    }}
                  >
                    {milestone.badge}
                  </span>

                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '10px',
                      background: isActivated ? '#000000' : '#E5E7EB',
                      color: isActivated ? '#FFFFFF' : '#374151',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s ease',
                      boxShadow: isActivated ? '0 2px 8px rgba(0,0,0,0.15)' : 'none',
                    }}
                  >
                    <Icon size={18} />
                  </div>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: 'clamp(1.15rem, 1.8vw, 1.35rem)',
                    fontWeight: 700,
                    color: '#0A0A0A',
                    lineHeight: 1.25,
                    marginBottom: '0.5rem',
                  }}
                >
                  {milestone.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontSize: '0.9rem',
                    lineHeight: 1.55,
                    color: '#4A5568',
                    margin: 0,
                  }}
                >
                  {milestone.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <style jsx>{`
        @media (max-width: 960px) {
          :global(.journey-svg-overlay) {
            left: 28px !important;
            transform: none !important;
            width: 40px !important;
          }
          :global(.journey-row) {
            justify-content: flex-start !important;
            padding-left: 50px !important;
          }
          :global(.journey-card) {
            max-width: 100% !important;
          }
        }
      `}</style>
    </div>
  );
}
