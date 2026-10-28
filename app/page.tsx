'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ArrowUpRight, Menu, Mic2, Phone, Play, X } from 'lucide-react';
import GallerySection from '@/components/GallerySection';
import HeroVideo from '@/components/HeroVideo';
import LeadModal from '@/components/LeadModal';
import MotionReel from '@/components/MotionReel';
import HorizontalShowcase from '@/components/HorizontalShowcase';
import { services } from '@/lib/services';

const studioFrames = [
  { image: '/images/setups/setup-brand-grey.jpg', name: 'The Conversation Room', note: '2–4 people · video podcast', alt: 'ARCC podcast studio conversation room setup for 2-4 person video podcasts in Bangalore' },
  { image: '/images/setups/setup-executive-dark.jpg', name: 'The Black Room', note: 'Founder films · interviews', alt: 'Dark executive studio setup for founder films and interviews at ARCC Bangalore' },
  { image: '/images/setups/setup-white-infinity.jpg', name: 'The Infinite', note: 'Product · portrait · campaign', alt: 'White infinity cyclorama studio for product photography and portraits at ARCC' },
  { image: '/images/setups/setup-round-table.jpg', name: 'The Round Table', note: 'Panels · community formats', alt: 'Round table panel discussion studio setup for multi-person recordings at ARCC' },
];

export default function Home() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="arcc-site">
      <header className="arcc-header">
        <a className="arcc-logo-link" href="#top" aria-label="ARCC Media Production home">
          <Image
            src="/logo.png"
            alt="ARCC Media Production"
            width={145}
            height={44}
            priority
            className="arcc-logo-img"
          />
        </a>
        <nav className="arcc-nav" aria-label="Main navigation">
          <a href="#reel">Reel</a>
          <a href="#services">Capabilities</a>
          <a href="#gallery">Gallery</a>
          <a href="#studios">Studios</a>
          <a href="#contact">Visit</a>
        </nav>
        <button className="arcc-nav-book" onClick={() => setBookingOpen(true)}>Book a session <ArrowUpRight size={15} /></button>
        <button className="arcc-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={21} /> : <Menu size={22} />}
        </button>
      </header>

      {menuOpen && (
        <nav className="arcc-mobile-nav" aria-label="Mobile navigation">
          <a href="#reel" onClick={closeMenu}>Reel</a>
          <a href="#services" onClick={closeMenu}>Capabilities</a>
          <a href="#gallery" onClick={closeMenu}>Gallery</a>
          <a href="#studios" onClick={closeMenu}>Studios</a>
          <a href="#contact" onClick={closeMenu}>Visit us</a>
          <button onClick={() => { closeMenu(); setBookingOpen(true); }}>Book a session <ArrowUpRight size={17} /></button>
        </nav>
      )}

      <main id="top">
        <section className="arcc-hero" aria-labelledby="hero-title">
          <HeroVideo />
          <div className="arcc-hero-shade" />
          <div className="arcc-hero-copy">
            <p className="arcc-kicker">Podcast &amp; Photography Studio in Bangalore</p>
            <h1 id="hero-title">One studio.<br /><em>Countless stories.</em></h1>
            <div className="arcc-hero-bottom">
              <p>A compact creative studio in Bangalore for clear ideas, intimate conversations and images with intent.</p>
            </div>
          </div>
          <div className="arcc-hero-caption"><span></span><span>EST. 2021</span></div>
        </section>

        <HorizontalShowcase />

        <MotionReel />

        <section className="arcc-services" id="services" aria-labelledby="services-title">
          <div className="arcc-services-intro">
            <p className="arcc-section-label">Six core divisions</p>
            <div><h2 id="services-title">One studio.<br />Every angle.</h2><p>From the first thought to the final frame, we make space for the whole production.</p></div>
          </div>
          <div className="arcc-service-grid">
            {services.map((service) => (
              <article key={service.number} className="arcc-service-card">
                <Image src={service.image} alt={service.title} fill loading="lazy" sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" />
                <div className="arcc-service-card-wash" />
                <div className="arcc-service-card-number">{service.number}</div>
                <div className="arcc-service-card-copy">
                  <h3>{service.title}</h3>
                  <p>{service.detail}</p>
                  <Link href={'/services/' + service.slug} aria-label={'Explore ' + service.title}>Explore division <ArrowUpRight size={15} /></Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <GallerySection />

        <section className="arcc-manifesto">
          <div className="arcc-mic"><Mic2 size={42} strokeWidth={1.15} /><span>LIVE<br />ROOM</span></div>
          <blockquote>“A good studio doesn’t take over the story. It gives it somewhere to land.”</blockquote>
          <p>Designed for founders, photographers, artists, brands and the people who make culture move.</p>
        </section>

        <section className="arcc-studios" id="studios" aria-labelledby="studios-title">
          <div className="arcc-section-head">
            <p className="arcc-section-label">Choose a frame</p>
            <h2 id="studios-title">Four rooms.<br />One point of view.</h2>
            <p>Every studio begins neutral. Then it becomes yours.</p>
          </div>
          <div className="arcc-frame-grid">
            {studioFrames.map((frame, index) => (
              <article className={`arcc-frame arcc-frame-${index + 1}`} key={frame.name}>
                <Image src={frame.image} alt={frame.alt} fill loading="lazy" sizes="(max-width: 720px) 100vw, 50vw" />
                <div className="arcc-frame-overlay" />
                <div className="arcc-frame-meta"><span>0{index + 1}</span><div><h3>{frame.name}</h3><p>{frame.note}</p></div></div>
              </article>
            ))}
          </div>
        </section>

        <section className="arcc-workflow" aria-labelledby="workflow-title">
          <div className="arcc-workflow-intro">
            <p className="arcc-section-label">How a project moves</p>
            <h2 id="workflow-title">The work gets<br /><em>better in motion.</em></h2>
          </div>
          <div className="arcc-workflow-steps">
            <article><span>01 / Find the signal</span><h3>Start with the thing only you can say.</h3><p>A useful brief does more than name deliverables. It gives the work a reason to exist.</p></article>
            <article><span>02 / Make the frame</span><h3>Build the right conditions for a good take.</h3><p>People, format, light and sound align before the moment arrives—without making it feel staged.</p></article>
            <article><span>03 / Let it travel</span><h3>Shape it for the places people will see it.</h3><p>From a hero film to the smallest social cutdown, the final work stays true to its first idea.</p></article>
          </div>
        </section>

        <section className="arcc-quote" aria-label="Studio statement">
          <Image src="/images/setups/setup-warm-lounge.jpg" alt="Warm lounge studio setting at ARCC Media Production Bangalore near Bannerghatta Road" fill loading="lazy" sizes="100vw" />
          <div className="arcc-quote-wash" />
          <div><p className="arcc-section-label">Bannerghatta, Bangalore</p><h2>Good light.<br />Better listening.</h2><button className="arcc-outline-light" onClick={() => setBookingOpen(true)}>Start a booking <ArrowUpRight size={16} /></button></div>
        </section>

        <section className="arcc-contact" id="contact" aria-labelledby="contact-title">
          <p className="arcc-section-label">Walk in, look around</p>
          <div className="arcc-contact-grid">
            <h2 id="contact-title">Make your next<br /><em>session count.</em></h2>
            <div className="arcc-contact-details">
              <p>1st Cross, Venkateshwara Temple Street<br />C.K. Palya Road, Bannerghatta Main Road<br />Bangalore 560083</p>
              <p><a href="tel:+918248288388">+91 824 828 8388</a><br /><a href="mailto:info@arccmp.com">info@arccmp.com</a></p>
              <a href="https://maps.google.com/?q=12.8398,77.5922" target="_blank" rel="noopener noreferrer" className="arcc-directions-link" aria-label="Get directions to ARCC Media Production on Google Maps">📍 Get directions on Google Maps</a>
              <button className="arcc-book-large" onClick={() => setBookingOpen(true)}>Book the studio <ArrowUpRight size={21} /></button>
            </div>
          </div>
        </section>
      </main>

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
        <p>Photography · Podcast · Production</p>
        <p>© {new Date().getFullYear()} ARCC Media Production</p>
      </footer>

      <div className="arcc-floating-actions" role="region" aria-label="Quick contact actions">
        <a className="arcc-call" href="tel:+918248288388" aria-label="Call ARCC Media Production">
          <Phone size={13} strokeWidth={2} /> Call studio
        </a>
        <a className="arcc-whatsapp" href="https://wa.me/918248288388?text=Hi%20ARCC%2C%20I%20would%20like%20to%20book%20a%20studio%20session." target="_blank" rel="noreferrer" aria-label="WhatsApp ARCC Media Production">
          <Play size={13} fill="currentColor" /> WhatsApp
        </a>
      </div>
      <LeadModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} defaultInquiry="Studio booking" />
    </div>
  );
}
