'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, Maximize2, Camera, Mic } from 'lucide-react';

interface WorksPortfolioProps {
  onOpenModal: (inquiry?: string, service?: string) => void;
}

type WorkCategory = 'all' | 'setups' | 'photography' | 'frames' | 'video';

interface WorkItem {
  id: string;
  title: string;
  category: WorkCategory;
  categoryLabel: string;
  image: string;
  specs: string;
  desc: string;
  details?: {
    camera: string;
    mic: string;
    lighting: string;
  };
}

export default function WorksPortfolio({ onOpenModal }: WorksPortfolioProps) {
  const [activeCategory, setActiveCategory] = useState<WorkCategory>('all');
  const [selectedItem, setSelectedItem] = useState<WorkItem | null>(null);
  const [showAll, setShowAll] = useState(false);

  // Combine real setups and frames into high-craft portfolio items
  const allWorks: WorkItem[] = [
    {
      id: 'work-1',
      title: 'Brand Bookshelf Chamber',
      category: 'setups',
      categoryLabel: 'PODCAST SETUPS',
      image: '/images/setups/setup-brand-grey.jpg',
      specs: 'Sony FX3 · 35mm f/1.4 · Shure SM7B',
      desc: 'Deep charcoal seating with custom oak bookshelf and acoustic bass traps for executive and founder series.',
      details: {
        camera: '3x Sony Cinema Line FX3',
        mic: '2x Shure SM7B Broadcast Mics',
        lighting: 'Aputure 300d II with Light Dome 150',
      },
    },
    {
      id: 'work-2',
      title: 'Executive Dark Studio',
      category: 'setups',
      categoryLabel: 'PODCAST SETUPS',
      image: '/images/setups/setup-executive-dark.jpg',
      specs: 'Sony FX6 · 50mm f/1.2 · 4K 10-Bit',
      desc: 'Black leather club chairs, textured slate walls, and edge-lit rim lighting for moody, authoritative talks.',
      details: {
        camera: 'Sony FX6 Full-Frame Cine',
        mic: 'Dual Shure SM7B + Cloudlifter CL-1',
        lighting: 'Nanlite Pavotube 30X RGB + Godox Softboxes',
      },
    },
    {
      id: 'work-3',
      title: 'Warm Lounge Architecture',
      category: 'setups',
      categoryLabel: 'PODCAST SETUPS',
      image: '/images/setups/setup-warm-lounge.jpg',
      specs: 'Sony FX3 · 85mm f/1.4 · Dual Cam',
      desc: 'Fluted natural wood acoustic backdrop and plush cream armchairs tailored for relaxed creator interviews.',
      details: {
        camera: '2x Sony FX3 Cine Rig',
        mic: 'Rode NTG5 Shotgun Booms',
        lighting: 'Diffused Top Grid Lanterns',
      },
    },
    {
      id: 'work-4',
      title: 'Editorial High-Key Frame',
      category: 'photography',
      categoryLabel: 'PHOTOGRAPHY',
      image: '/images/glissando/quote-bg.jpg',
      specs: 'Hasselblad Look · 1/250s · f/8 · ISO 100',
      desc: 'High-contrast stark monochromatic composition highlighting structural geometry and dramatic shadows.',
      details: {
        camera: 'Sony A7R V High-Resolution',
        mic: 'Studio Ambience Capture',
        lighting: 'Strobe Broncolor Para 133',
      },
    },
    {
      id: 'work-5',
      title: 'Roundtable Four-Mic Pod',
      category: 'setups',
      categoryLabel: 'PODCAST SETUPS',
      image: '/images/setups/setup-round-table.jpg',
      specs: 'Multi-Cam 4K · 4x Shure SM7B',
      desc: 'Radial table setup with 4 isolated microphone channels, designed for lively panel discussions and roundtables.',
      details: {
        camera: '4x Sony FX3 Switched Live',
        mic: '4x Shure SM7B with Focusrite ISA',
        lighting: 'Omnidirectional Overhead Chandelier Grid',
      },
    },
    {
      id: 'work-6',
      title: 'Founder Monologue Frame',
      category: 'frames',
      categoryLabel: 'EDITORIAL FRAMES',
      image: 'https://winterfox.studio/img/podcast-experience/frames/9.jpg',
      specs: 'Sony FX6 · 50mm Prime · Cine EI 800',
      desc: 'Intimate single-subject framing with soft background separation and cinematic low-key depth.',
      details: {
        camera: 'Sony FX6 4K 24fps',
        mic: 'Sennheiser MKH 416 Boom',
        lighting: 'Key Key Light 45° with Eggcrate Grid',
      },
    },
    {
      id: 'work-7',
      title: 'White Infinity Studio',
      category: 'photography',
      categoryLabel: 'PHOTOGRAPHY',
      image: '/images/setups/setup-white-infinity.jpg',
      specs: 'Seamless Cyclorama · Infinite Depth',
      desc: 'Pure seamless cyclorama wall with ceiling motorized grid for commercial lookbooks and product photography.',
      details: {
        camera: 'Sony A7R V · 24-70mm GM II',
        mic: 'Wireless Sennheiser G4',
        lighting: 'Continuous Skypanels 5600K',
      },
    },
    {
      id: 'work-8',
      title: 'Royal Blue Stage Pod',
      category: 'setups',
      categoryLabel: 'PODCAST SETUPS',
      image: '/images/setups/setup-royal-blue.jpg',
      specs: 'Broadcast Stage · Dual Armchairs',
      desc: 'Vibrant acoustic blue backdrop with golden hour backlighting and broadcast-calibrated audio.',
      details: {
        camera: '3x Sony FX3 Cine Rig',
        mic: '2x Rode PodMic Pro',
        lighting: 'Dual Fresnel Backlights',
      },
    },
    {
      id: 'work-9',
      title: 'Cinematic Dialogue Still',
      category: 'video',
      categoryLabel: 'VIDEO SHOWREEL',
      image: 'https://winterfox.studio/img/podcast-experience/frames/16.jpg',
      specs: 'DaVinci Resolve Rec.709 Master · 4K',
      desc: 'Color-graded export frame from an episodic series broadcast across YouTube and Spotify Video.',
      details: {
        camera: 'Sony FX6 S-Cinetone',
        mic: 'Shure SM7B + DBX 286s Preamp',
        lighting: '3-Point Naturalistic Studio Rig',
      },
    },
  ];

  const filteredWorks = allWorks.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  const displayedWorks = showAll ? filteredWorks : filteredWorks.slice(0, 6);

  return (
    <section
      id="glissando-works"
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
            Portfolio &amp; Production Environments
          </p>
          <h2 className="glissando-title on-dark">Our Works</h2>
          <span className="glissando-dash" style={{ color: '#ffffff' }} />
          <p className="glissando-subtext on-dark">
            A curated selection of our bespoke studio setups, photographic contact sheets, and broadcast frames
            captured inside ARCC.
          </p>
        </div>

        {/* Glissando Filter Tabs */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'clamp(0.6rem, 2vw, 1.8rem)',
            flexWrap: 'wrap',
            marginBottom: 'clamp(2rem, 4vw, 3.5rem)',
          }}
        >
          {[
            { id: 'all', label: 'ALL' },
            { id: 'setups', label: 'PODCAST SETUPS' },
            { id: 'photography', label: 'PHOTOGRAPHY' },
            { id: 'frames', label: 'EDITORIAL FRAMES' },
            { id: 'video', label: 'VIDEO' },
          ].map((tab) => {
            const isSelected = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  setActiveCategory(tab.id as WorkCategory);
                  setShowAll(false);
                }}
                style={{
                  padding: '6px 14px',
                  fontSize: '0.74rem',
                  fontWeight: 600,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: isSelected ? '#ffffff' : 'rgba(255, 255, 255, 0.55)',
                  background: 'transparent',
                  borderBottom: isSelected ? '1.5px solid #ffffff' : '1.5px solid transparent',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Glissando 3-Column Square Portfolio Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 'clamp(1rem, 2vw, 1.75rem)',
            marginBottom: '3rem',
          }}
          className="glissando-works-grid"
        >
          {displayedWorks.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              style={{
                position: 'relative',
                aspectRatio: '1 / 1',
                overflow: 'hidden',
                background: '#1a1a1a',
                cursor: 'pointer',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
              className="work-card mono-img-hover"
            >
              {/* Monochromatic Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="mono-img"
                style={{
                  objectFit: 'cover',
                }}
              />

              {/* Viewfinder Corner Overlays (Appears on Hover) */}
              <div className="card-reticles">
                <span className="viewfinder-corner-tl" style={{ top: 12, left: 12, width: 12, height: 12 }} />
                <span className="viewfinder-corner-tr" style={{ top: 12, right: 12, width: 12, height: 12 }} />
                <span className="viewfinder-corner-bl" style={{ bottom: 12, left: 12, width: 12, height: 12 }} />
                <span className="viewfinder-corner-br" style={{ bottom: 12, right: 12, width: 12, height: 12 }} />
              </div>

              {/* Hover Metadata Mask */}
              <div
                className="card-overlay"
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.2) 100%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: 'clamp(1rem, 2vw, 1.75rem)',
                  transition: 'opacity 0.3s ease',
                  opacity: 0,
                }}
              >
                <span
                  style={{
                    fontSize: '0.68rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: '#a1a1aa',
                    fontWeight: 600,
                    marginBottom: '0.35rem',
                  }}
                >
                  {item.categoryLabel}
                </span>
                <h3
                  style={{
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: '#ffffff',
                    marginBottom: '0.4rem',
                    lineHeight: 1.25,
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.74rem',
                    color: 'rgba(255, 255, 255, 0.75)',
                    letterSpacing: '0.06em',
                    margin: 0,
                  }}
                >
                  {item.specs}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Glissando Outline Button: MORE WORKS */}
        {filteredWorks.length > 6 && (
          <div style={{ textAlign: 'center' }}>
            <button
              type="button"
              className="btn-glissando btn-glissando-light"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? 'Show Fewer Works' : 'More Works'}
            </button>
          </div>
        )}
      </div>

      {/* High-Resolution Full Detail Inspection Modal */}
      {selectedItem && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            background: 'rgba(0, 0, 0, 0.95)',
            backdropFilter: 'blur(20px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 'clamp(1rem, 3vw, 2.5rem)',
          }}
          onClick={() => setSelectedItem(null)}
        >
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '1020px',
              background: '#141414',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              display: 'grid',
              gridTemplateColumns: '1.2fr 1fr',
              overflow: 'hidden',
            }}
            onClick={(e) => e.stopPropagation()}
            className="modal-container"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedItem(null)}
              aria-label="Close modal"
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                zIndex: 10,
                color: '#ffffff',
                background: 'rgba(0, 0, 0, 0.6)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                padding: '6px',
                cursor: 'pointer',
              }}
            >
              <X size={20} />
            </button>

            {/* Left: Large Image Preview */}
            <div style={{ position: 'relative', minHeight: '380px', background: '#000000' }}>
              <Image
                src={selectedItem.image}
                alt={selectedItem.title}
                fill
                loading="lazy"
                style={{
                  objectFit: 'cover',
                }}
              />
            </div>

            {/* Right: Technical Atelier Specs */}
            <div
              style={{
                padding: 'clamp(1.5rem, 3vw, 2.5rem)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: '0.7rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: '#a1a1aa',
                    fontWeight: 600,
                  }}
                >
                  {selectedItem.categoryLabel}
                </span>
                <h3
                  style={{
                    fontSize: '1.35rem',
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: '#ffffff',
                    marginTop: '0.4rem',
                    marginBottom: '0.75rem',
                  }}
                >
                  {selectedItem.title}
                </h3>
                <span
                  style={{
                    display: 'block',
                    width: '28px',
                    height: '2px',
                    background: '#ffffff',
                    marginBottom: '1rem',
                  }}
                />
                <p
                  style={{
                    fontSize: '0.86rem',
                    lineHeight: 1.6,
                    color: '#a1a1aa',
                    marginBottom: '1.5rem',
                  }}
                >
                  {selectedItem.desc}
                </p>

                {/* Specs breakdown */}
                {selectedItem.details && (
                  <div
                    style={{
                      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                      paddingTop: '1rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.75rem',
                      fontSize: '0.78rem',
                      color: 'rgba(255, 255, 255, 0.85)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                      <Camera size={14} style={{ color: '#a1a1aa' }} />
                      <span>{selectedItem.details.camera}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                      <Mic size={14} style={{ color: '#a1a1aa' }} />
                      <span>{selectedItem.details.mic}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                      <Maximize2 size={14} style={{ color: '#a1a1aa' }} />
                      <span>{selectedItem.details.lighting}</span>
                    </div>
                  </div>
                )}
              </div>

              <div style={{ marginTop: '2rem' }}>
                <button
                  type="button"
                  className="btn-glissando btn-glissando-light"
                  style={{ width: '100%' }}
                  onClick={() => {
                    const title = selectedItem.title;
                    setSelectedItem(null);
                    onOpenModal('Studio Booking', title);
                  }}
                >
                  Book This Setup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .mono-img {
          filter: grayscale(100%) contrast(110%);
          transition: filter 0.45s ease, transform 0.6s cubic-bezier(0.2, 0.75, 0.2, 1);
        }
        .work-card:hover .mono-img {
          filter: grayscale(0%) contrast(102%) !important;
          transform: scale(1.05);
        }
        .work-card:hover .card-overlay {
          opacity: 1 !important;
        }
        .card-reticles {
          opacity: 0;
          transition: opacity 0.3s ease;
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 2;
        }
        .work-card:hover .card-reticles {
          opacity: 1;
        }
        @media (max-width: 960px) {
          .glissando-works-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .modal-container {
            grid-template-columns: 1fr !important;
            max-height: 90vh;
            overflow-y: auto;
          }
        }
        @media (max-width: 600px) {
          .glissando-works-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
