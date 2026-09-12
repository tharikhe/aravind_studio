'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ArrowDownRight, ArrowLeft, ArrowUpRight, Check, Menu, MoveRight, X } from 'lucide-react';
import LeadModal from '@/components/LeadModal';
import { services, type StudioService } from '@/lib/services';

type ServiceExperienceProps = {
  service: StudioService;
};

export default function ServiceExperience({ service }: ServiceExperienceProps) {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const serviceIndex = services.findIndex(({ slug }) => slug === service.slug);
  const nextService = services[(serviceIndex + 1) % services.length];

  return (
    <div className="service-page">
      <header className="service-header">
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
        <nav className="service-nav" aria-label="Service navigation">
          <Link href="/#studios">Studios</Link>
          <Link href="/#services">All divisions</Link>
          <Link href="/#reel">Reel</Link>
          <Link href="/#gallery">Gallery</Link>
          <Link href="/#contact">Visit</Link>
        </nav>
        <button className="service-book-nav" onClick={() => setBookingOpen(true)}>Book this service <ArrowUpRight size={15} /></button>
        <button className="service-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={21} /> : <Menu size={22} />}
        </button>
      </header>

      {menuOpen && (
        <nav className="service-mobile-nav" aria-label="Mobile service navigation">
          <Link href="/#studios" onClick={() => setMenuOpen(false)}>Studios</Link>
          <Link href="/#services" onClick={() => setMenuOpen(false)}>All divisions</Link>
          <Link href="/#reel" onClick={() => setMenuOpen(false)}>Reel</Link>
          <Link href="/#gallery" onClick={() => setMenuOpen(false)}>Gallery</Link>
          <Link href="/#contact" onClick={() => setMenuOpen(false)}>Visit us</Link>
          <button onClick={() => { setMenuOpen(false); setBookingOpen(true); }}>Book this service <ArrowUpRight size={17} /></button>
        </nav>
      )}

      <main>
        <section className="service-hero">
          <div className="service-hero-image service-hero-reveal">
            <Image src={service.image} alt={service.title} fill priority sizes="100vw" />
          </div>
          <div className="service-hero-shade" />
          <div className="service-hero-content">
            <div className="service-hero-label service-enter service-delay-one"><span>{service.number}</span><p>{service.eyebrow}</p></div>
            <h1 className="service-enter service-delay-two">{service.title}</h1>
            <div className="service-hero-footer service-enter service-delay-three">
              <p>{service.detail}</p>
              <button onClick={() => setBookingOpen(true)} className="service-down-button" aria-label={'Book ' + service.title}><ArrowDownRight size={25} /></button>
            </div>
          </div>
          <div className="service-hero-side">ARCC / {service.number} / 06</div>
        </section>

        <section className="service-intro service-scroll-reveal">
          <p className="arcc-section-label">The brief, considered</p>
          <div>
            <h2>{service.summary}</h2>
            <button className="service-dark-button" onClick={() => setBookingOpen(true)}>Start a conversation <ArrowUpRight size={17} /></button>
          </div>
        </section>

        <section className="service-feature" aria-label={service.title + ' visual direction'}>
          <div className="service-feature-main service-scroll-reveal">
            <Image src={service.secondaryImage} alt={service.title + ' production environment'} fill loading="lazy" sizes="(max-width: 820px) 100vw, 65vw" />
          </div>
          <div className="service-feature-note service-scroll-reveal">
            <span className="service-note-index">/ {service.number}</span>
            <p>Every project gets a working point of view—not a generic template. The format should feel made for the people in it.</p>
          </div>
          <div className="service-feature-small service-scroll-reveal">
            <Image src={service.tertiaryImage} alt="ARCC studio detail" fill loading="lazy" sizes="(max-width: 820px) 70vw, 31vw" />
          </div>
        </section>

        <section className="service-offerings service-scroll-reveal">
          <div className="service-offerings-heading"><p className="arcc-section-label">What we can make</p><h2>Useful, not<br /><em>over-produced.</em></h2></div>
          <ul>
            {service.offerings.map((offering) => <li key={offering}><Check size={16} strokeWidth={1.6} />{offering}</li>)}
          </ul>
        </section>

        <section className="service-process">
          <div className="service-process-title service-scroll-reveal"><p className="arcc-section-label">A working rhythm</p><h2>Good work<br />has a pace.</h2></div>
          <div className="service-process-list">
            {service.process.map((step, index) => (
              <article className="service-process-step service-scroll-reveal" key={step.label}>
                <span>0{index + 1}</span><h3>{step.label}</h3><p>{step.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="service-statement">
          <p className="arcc-section-label">ARCC point of view</p>
          <blockquote>“{service.statement}”</blockquote>
        </section>

        <section className="service-cta">
          <Image src={service.image} alt="" fill loading="lazy" sizes="100vw" />
          <div className="service-cta-wash" />
          <div className="service-cta-content service-scroll-reveal">
            <p className="arcc-section-label">Bannerghatta Main Road · Bangalore</p>
            <h2>Let’s make<br />something <em>worth keeping.</em></h2>
            <button className="arcc-outline-light" onClick={() => setBookingOpen(true)}>Book {service.title} <ArrowUpRight size={16} /></button>
          </div>
        </section>

        <section className="service-next">
          <p className="arcc-section-label">Keep exploring</p>
          <Link href={'/services/' + nextService.slug} className="service-next-link">
            <span>Next division</span><strong>{nextService.title}</strong><MoveRight size={32} />
          </Link>
          <Link href="/#services" className="service-back-link"><ArrowLeft size={15} /> All divisions</Link>
        </section>
      </main>

      <footer className="arcc-footer service-footer">
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
        <p>Photography · Film · Events · Creative · Post · Studio</p>
        <p>© {new Date().getFullYear()} ARCC Media Production</p>
      </footer>

      <LeadModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} defaultInquiry={service.title} defaultService={service.title} />
    </div>
  );
}
