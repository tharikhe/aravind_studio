'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Filter, Menu, Phone, Play, X } from 'lucide-react';
import LeadModal from '@/components/LeadModal';

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  categorySlug: string;
  src: string;
  aspect?: 'tall' | 'wide' | 'square';
  description: string;
  tags: string[];
}

const CATEGORIES = [
  { name: 'All Frames', slug: 'all' },
  { name: 'Weddings', slug: 'weddings' },
  { name: 'Pre-Wedding', slug: 'pre-wedding' },
  { name: 'Fashion & Editorial', slug: 'fashion' },
  { name: 'Corporate & Branding', slug: 'corporate' },
  { name: 'Product & Commercial', slug: 'product' },
  { name: 'Events & Celebrations', slug: 'events' },
  { name: 'Maternity', slug: 'maternity' },
  { name: 'Podcast & Audio', slug: 'podcast' },
  { name: 'Studio Spaces', slug: 'studios' },
];

const ARCHIVE_ITEMS: GalleryItem[] = [
  // Weddings
  {
    id: 'wed-01',
    title: 'Heritage Ritual & Vows',
    category: 'Weddings',
    categorySlug: 'weddings',
    src: '/scroll-img/wedding.jpg',
    aspect: 'tall',
    description: 'Traditional ceremony captures balancing sacred rituals with spontaneous candid joy.',
    tags: ['Ceremony', 'Candid', 'Portraits'],
  },
  {
    id: 'prewed-01',
    title: 'The Golden Hour Promenade',
    category: 'Pre-Wedding',
    categorySlug: 'pre-wedding',
    src: '/scroll-img/prewedding.jpg',
    aspect: 'wide',
    description: 'Cinematic outdoor twilight romance framed with natural lens flare and authentic intimacy.',
    tags: ['Couple Shoots', 'Outdoor', 'Cinematic'],
  },

  // Fashion & Editorial
  {
    id: 'fash-01',
    title: 'Sculpted Silhouette & Haute Couture',
    category: 'Fashion & Editorial',
    categorySlug: 'fashion',
    src: '/scroll-img/fashion.jpg',
    aspect: 'tall',
    description: 'Editorial direction with high-contrast strobe lighting sculpting fabrics and forms.',
    tags: ['Editorial', 'Lookbook', 'High-Fashion'],
  },
  {
    id: 'fash-02',
    title: 'Modern Minimal Portrait Study',
    category: 'Fashion & Editorial',
    categorySlug: 'fashion',
    src: '/images/gallery/gallery-06.jpeg',
    aspect: 'wide',
    description: 'Intimate studio portrait exploring raw texture, delicate shadows, and subtle movement.',
    tags: ['Contemporary', 'Studio', 'Monochrome'],
  },
  {
    id: 'fash-03',
    title: 'Raw Expression Study',
    category: 'Fashion & Editorial',
    categorySlug: 'fashion',
    src: '/images/intro-portrait-placeholder.jpg',
    aspect: 'tall',
    description: 'Direct lens connection emphasizing unfiltered character, relaxed demeanor, and honest posture.',
    tags: ['Portraiture', 'Minimal', 'Character'],
  },

  // Corporate & Branding
  {
    id: 'corp-01',
    title: 'Executive Leadership Profiles',
    category: 'Corporate & Branding',
    categorySlug: 'corporate',
    src: '/scroll-img/corparate.jpg',
    aspect: 'square',
    description: 'Contemporary boardroom portraits for innovators, founders, and industry leaders.',
    tags: ['Headshots', 'Founders', 'Branding'],
  },
  {
    id: 'corp-02',
    title: 'Dialogue Chamber & Grey Room',
    category: 'Corporate & Branding',
    categorySlug: 'corporate',
    src: '/images/setups/setup-brand-grey.jpg',
    aspect: 'wide',
    description: 'Purpose-engineered sound-treated grey cyclorama backdrop for corporate interviews.',
    tags: ['Studio', 'Interviews', 'Brand Story'],
  },

  // Product & Commercial
  {
    id: 'prod-01',
    title: 'Luxury Goods & Precision Packshot',
    category: 'Product & Commercial',
    categorySlug: 'product',
    src: '/scroll-img/product.jpg',
    aspect: 'square',
    description: 'Macro illumination detailing material textures, edges, reflective surfaces, and packaging.',
    tags: ['E-Commerce', 'Packshot', 'Luxury'],
  },
  {
    id: 'prod-02',
    title: 'The Infinite White Horizon',
    category: 'Product & Commercial',
    categorySlug: 'product',
    src: '/images/setups/setup-white-infinity.jpg',
    aspect: 'wide',
    description: 'Floor-to-ceiling seamless curved cyclorama engineered for automotive, fashion, and large products.',
    tags: ['Cyc Wall', 'Seamless', 'Commercial'],
  },

  // Events & Celebrations
  {
    id: 'event-01',
    title: 'Keynote & Amphitheater Gathering',
    category: 'Events & Celebrations',
    categorySlug: 'events',
    src: '/scroll-img/events.jpg',
    aspect: 'wide',
    description: 'Multi-camera live event coverage capturing stage atmosphere and audience immersion.',
    tags: ['Conference', 'Keynote', 'Atmosphere'],
  },
  {
    id: 'event-02',
    title: 'Milestone Jubilee & Revelry',
    category: 'Events & Celebrations',
    categorySlug: 'events',
    src: '/scroll-img/birthday.jpg',
    aspect: 'square',
    description: 'Vibrant party documentation preserving spontaneous laughter and celebratory milestones.',
    tags: ['Party', 'Celebration', 'Candid'],
  },

  // Maternity
  {
    id: 'mat-01',
    title: 'Maternal Grace & Warmth',
    category: 'Maternity',
    categorySlug: 'maternity',
    src: '/scroll-img/maternity.jpg',
    aspect: 'tall',
    description: 'Tender maternal lighting framing expectant mothers with gentle, radiant golden tones.',
    tags: ['Maternity', 'Intimate', 'Warm Tones'],
  },

  // Podcast & Audio
  {
    id: 'pod-01',
    title: 'Broadcast Podcast Suite',
    category: 'Podcast & Audio',
    categorySlug: 'podcast',
    src: '/images/gallery/gallery-02.jpeg',
    aspect: 'wide',
    description: 'Multi-camera 4K podcast session equipped with Shure broadcast mics and soft acoustic lighting.',
    tags: ['Video Podcast', 'Multi-Cam', 'Sound Treated'],
  },
  {
    id: 'pod-02',
    title: 'The Roundtable Forum',
    category: 'Podcast & Audio',
    categorySlug: 'podcast',
    src: '/images/setups/setup-round-table.jpg',
    aspect: 'wide',
    description: 'Circular conversation configuration encouraging organic multi-person discussions and panels.',
    tags: ['Panel Format', 'Multi-Guest', 'Broadcast'],
  },
  {
    id: 'pod-03',
    title: 'Director Station & Live Monitors',
    category: 'Podcast & Audio',
    categorySlug: 'podcast',
    src: '/images/gallery/gallery-04.jpeg',
    aspect: 'tall',
    description: 'Real-time switching desk and color-calibrated monitors running live multicam feeds.',
    tags: ['Behind The Scenes', 'Engineering', 'Direction'],
  },

  // Studio Spaces & Production Floor
  {
    id: 'stu-01',
    title: 'The Black Room',
    category: 'Studio Spaces',
    categorySlug: 'studios',
    src: '/images/setups/setup-executive-dark.jpg',
    aspect: 'wide',
    description: 'Deep matte black soundproof cocoon crafted for founder interviews and cinematic dialogue.',
    tags: ['Dark Aesthetic', 'Acoustic', 'Intimate'],
  },
  {
    id: 'stu-02',
    title: 'The Royal Blue Salon',
    category: 'Studio Spaces',
    categorySlug: 'studios',
    src: '/images/setups/setup-royal-blue.jpg',
    aspect: 'square',
    description: 'Rich jewel-toned velvet backdrop introducing warmth, status, and refined visual texture.',
    tags: ['Colour Set', 'Lounge', 'Character'],
  },
  {
    id: 'stu-03',
    title: 'The Fireside Lounge',
    category: 'Studio Spaces',
    categorySlug: 'studios',
    src: '/images/setups/setup-warm-lounge.jpg',
    aspect: 'wide',
    description: 'Ambient warm residential vibe allowing guests to unwind into honest conversations.',
    tags: ['Residential Vibe', 'Warm Light', 'Relaxed'],
  },
  {
    id: 'stu-04',
    title: 'Rigging & Camera Payload Calibration',
    category: 'Studio Spaces',
    categorySlug: 'studios',
    src: '/images/gallery/gallery-01.jpeg',
    aspect: 'tall',
    description: 'Cinema-grade motorized slider, prime lenses, and matte box configuration on set.',
    tags: ['Production', 'Cinema Line', 'Rigging'],
  },
  {
    id: 'stu-05',
    title: 'Between The Takes',
    category: 'Studio Spaces',
    categorySlug: 'studios',
    src: '/images/gallery/gallery-05.jpeg',
    aspect: 'square',
    description: 'Floor team fine-tuning key light diffusion and framing geometry ahead of camera roll.',
    tags: ['Floor Prep', 'Lighting', 'Candid'],
  },
  {
    id: 'stu-06',
    title: 'Acoustic Suite Tuning',
    category: 'Podcast & Audio',
    categorySlug: 'podcast',
    src: '/images/gallery/gallery-07.jpeg',
    aspect: 'square',
    description: 'Sound-isolation checks maintaining pristine broadcast clarity with zero ambient bleed.',
    tags: ['Audio Engineering', 'Acoustics', 'Broadcast'],
  },
  {
    id: 'stu-07',
    title: 'Grid Architecture & Diffusers',
    category: 'Studio Spaces',
    categorySlug: 'studios',
    src: '/images/gallery/gallery-08.jpeg',
    aspect: 'square',
    description: 'Overhead C-stand rigging and honeycomb grids shaping directional soft light.',
    tags: ['Lighting Grid', 'Technical', 'Atmosphere'],
  },
];

export default function GalleryArchive() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const filteredItems = useMemo(() => {
    if (activeCategory === 'all') return ARCHIVE_ITEMS;
    return ARCHIVE_ITEMS.filter((item) => item.categorySlug === activeCategory);
  }, [activeCategory]);

  const selectedItem = selectedIndex !== null ? filteredItems[selectedIndex] : null;

  const closeViewer = () => setSelectedIndex(null);
  const showPrev = () => setSelectedIndex((i) => (i === null ? null : (i + filteredItems.length - 1) % filteredItems.length));
  const showNext = () => setSelectedIndex((i) => (i === null ? null : (i + 1) % filteredItems.length));

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') closeViewer();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };
    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKey);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [selectedIndex, filteredItems.length]);

  return (
    <div className="archive-page">
      {/* Header */}
      <header className="archive-header">
        <Link className="arcc-logo-link" href="/" aria-label="ARCC Media Production home">
          <Image
            src="/logo.png"
            alt="ARCC Media Production"
            width={145}
            height={44}
            priority
            className="arcc-logo-img"
          />
        </Link>

        <nav className="archive-nav" aria-label="Archive navigation">
          <Link href="/">← Home</Link>
          <Link href="/#reel">Reel</Link>
          <Link href="/#services">Capabilities</Link>
          <Link href="/#studios">Studios</Link>
          <Link href="/#contact">Visit</Link>
        </nav>

        <button className="archive-book-btn" onClick={() => setBookingOpen(true)}>
          Book a session <ArrowUpRight size={15} />
        </button>

        <button className="archive-menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={21} /> : <Menu size={22} />}
        </button>
      </header>

      {menuOpen && (
        <nav className="archive-mobile-nav" aria-label="Mobile navigation">
          <Link href="/" onClick={() => setMenuOpen(false)}>← Back to Home</Link>
          <Link href="/#reel" onClick={() => setMenuOpen(false)}>Reel</Link>
          <Link href="/#services" onClick={() => setMenuOpen(false)}>Capabilities</Link>
          <Link href="/#studios" onClick={() => setMenuOpen(false)}>Studios</Link>
          <Link href="/#contact" onClick={() => setMenuOpen(false)}>Visit us</Link>
          <button onClick={() => { setMenuOpen(false); setBookingOpen(true); }}>
            Book a session <ArrowUpRight size={17} />
          </button>
        </nav>
      )}

      {/* Hero Header */}
      <main className="archive-main">
        <section className="archive-hero">
          <div className="archive-hero-copy">
            <div className="archive-kicker">
              <span>ARCC / VISUAL ARCHIVE</span>
              <span>{filteredItems.length} FRAMES CATALOGED</span>
            </div>
            <h1>
              Every frame.<br />
              <em>A purposeful story.</em>
            </h1>
            <p>
              A categorized showcase across weddings, high-fashion editorials, podcast production,
              commercial packshots, brand narratives, and acoustically treated studio spaces.
            </p>
          </div>
        </section>

        {/* Category Filter Pills */}
        <section className="archive-filter-section" aria-label="Category filters">
          <div className="archive-filter-scroll">
            {CATEGORIES.map((cat) => {
              const count = cat.slug === 'all'
                ? ARCHIVE_ITEMS.length
                : ARCHIVE_ITEMS.filter((i) => i.categorySlug === cat.slug).length;
              const isActive = activeCategory === cat.slug;

              return (
                <button
                  type="button"
                  key={cat.slug}
                  className={`archive-filter-pill ${isActive ? 'archive-filter-pill-active' : ''}`}
                  onClick={() => {
                    setActiveCategory(cat.slug);
                    setSelectedIndex(null);
                  }}
                >
                  <span>{cat.name}</span>
                  <small>{count}</small>
                </button>
              );
            })}
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="archive-grid-section" aria-label="Gallery collection">
          <div className="archive-grid">
            {filteredItems.map((item, index) => (
              <article
                key={item.id}
                className={`archive-card archive-card-${item.aspect || 'square'}`}
                onClick={() => setSelectedIndex(index)}
              >
                <div className="archive-card-image-wrap">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1080px) 50vw, 33vw"
                    className="archive-card-img"
                  />
                  <div className="archive-card-wash" />
                </div>

                <div className="archive-card-meta-top">
                  <span className="archive-card-num">0{index + 1}</span>
                  <span className="archive-card-cat">{item.category}</span>
                </div>

                <div className="archive-card-meta-bottom">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="archive-card-tags">
                    {item.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="archive-card-hover-prompt">
                  <span>View Frame <ArrowUpRight size={14} /></span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Bottom Booking CTA Banner */}
        <section className="archive-cta">
          <div className="archive-cta-inner">
            <p className="arcc-section-label">Your project starts here</p>
            <h2>Plan your next<br /><em>shoot or session.</em></h2>
            <p>From custom studio lighting to full podcast multi-cam productions, our atelier in Bangalore is ready.</p>
            <div className="archive-cta-actions">
              <button className="archive-cta-btn" onClick={() => setBookingOpen(true)}>
                Book the studio <ArrowUpRight size={16} />
              </button>
              <Link href="/#contact" className="archive-cta-link">
                Directions & Hours →
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox Fullscreen Viewer */}
      {selectedItem && selectedIndex !== null && (
        <div
          className="gallery-viewer"
          data-lenis-prevent
          role="dialog"
          aria-modal="true"
          aria-label={selectedItem.title}
          onClick={closeViewer}
        >
          <div className="gallery-viewer-top">
            <span>
              ARCC / {selectedItem.category.toUpperCase()} / FRAME 0{selectedIndex + 1} OF 0{filteredItems.length}
            </span>
            <button onClick={closeViewer} aria-label="Close image viewer">
              <X size={22} />
            </button>
          </div>

          <div className="gallery-viewer-image" onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedItem.src}
              alt={selectedItem.title}
              fill
              loading="lazy"
              sizes="94vw"
            />
          </div>

          <div className="gallery-viewer-controls" onClick={(e) => e.stopPropagation()}>
            <button onClick={showPrev} aria-label="Previous photo">
              <ArrowLeft size={22} />
            </button>
            <div className="gallery-viewer-caption">
              <strong>{selectedItem.title}</strong>
              <small>{selectedItem.description}</small>
            </div>
            <button onClick={showNext} aria-label="Next photo">
              <ArrowRight size={22} />
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="arcc-footer">
        <div className="arcc-footer-brand">
          <Image
            src="/logo.png"
            alt="ARCC Media Production"
            width={130}
            height={39}
            loading="lazy"
            className="arcc-logo-img"
          />
        </div>
        <p>Visual Archive · Bangalore 560083</p>
        <p>© {new Date().getFullYear()} ARCC Media Production</p>
      </footer>

      {/* Floating Action Buttons */}
      <div className="arcc-floating-actions" role="region" aria-label="Quick contact actions">
        <a className="arcc-call" href="tel:+918248288388" aria-label="Call ARCC Studio">
          <Phone size={13} strokeWidth={2} /> Call studio
        </a>
        <a
          className="arcc-whatsapp"
          href="https://wa.me/918248288388?text=Hi%20ARCC%2C%20I%20would%20like%20to%20book%20a%20studio%20session."
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp ARCC Media Production"
        >
          <Play size={13} fill="currentColor" /> WhatsApp
        </a>
      </div>

      <LeadModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        defaultInquiry="Gallery Shoot Inquiry"
      />
    </div>
  );
}
