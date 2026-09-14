'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

interface CategoryCard {
  title: string;
  subtitle: string;
  image: string;
  tags: string[];
}

const categories: CategoryCard[] = [
  {
    title: 'Wedding',
    subtitle: 'Timeless moments, beautifully held',
    image: '/scroll-img/wedding.jpg',
    tags: ['Ceremony', 'Candid', 'Portraits'],
  },
  {
    title: 'Pre-Wedding',
    subtitle: 'The story before the story',
    image: '/scroll-img/prewedding.jpg',
    tags: ['Couple Shoots', 'Outdoor', 'Cinematic'],
  },
  {
    title: 'Birthday',
    subtitle: 'Joy in every frame',
    image: '/scroll-img/birthday.jpg',
    tags: ['Kids', 'Milestone', 'Party'],
  },
  {
    title: 'Corporate',
    subtitle: 'Portraits that mean business',
    image: '/scroll-img/corparate.jpg',
    tags: ['Headshots', 'Events', 'Branding'],
  },
  {
    title: 'Product',
    subtitle: 'Objects with presence',
    image: '/scroll-img/product.jpg',
    tags: ['E-Commerce', 'Lifestyle', 'Packshot'],
  },
  {
    title: 'Fashion',
    subtitle: 'Style, sculpted by light',
    image: '/scroll-img/fashion.jpg',
    tags: ['Editorial', 'Lookbook', 'Campaign'],
  },
  {
    title: 'Events',
    subtitle: 'The room, remembered',
    image: '/scroll-img/events.jpg',
    tags: ['Live', 'Multi-Cam', 'Streaming'],
  },
  {
    title: 'Maternity',
    subtitle: 'A chapter worth framing',
    image: '/scroll-img/maternity.jpg',
    tags: ['Studio', 'Outdoor', 'Intimate'],
  },
];

export default function HorizontalShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    // Calculate how far the track needs to scroll
    const getScrollAmount = () => {
      return -(track.scrollWidth - window.innerWidth);
    };

    // Horizontal scroll tween driven by vertical scroll
    const tween = gsap.to(track, {
      x: getScrollAmount,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: () => `+=${Math.abs(getScrollAmount())}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
        anticipatePin: 1,
      },
    });

    // Parallax each card image slightly
    const cards = track.querySelectorAll('.hscroll-card-image');
    cards.forEach((card) => {
      gsap.to(card, {
        xPercent: -15,
        ease: 'none',
        scrollTrigger: {
          trigger: card,
          containerAnimation: tween,
          start: 'left right',
          end: 'right left',
          scrub: 1,
        },
      });
    });

    // Fade in heading
    if (headingRef.current) {
      gsap.from(headingRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });
    }

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === section || st.vars.containerAnimation === tween) {
          st.kill();
        }
      });
    };
  }, []);

  return (
    <section ref={sectionRef} className="hscroll-section" aria-label="Photography categories showcase">
      {/* Sticky heading overlay */}
      <div className="hscroll-heading" ref={headingRef}>
        <p className="arcc-section-label">What we shoot</p>
        <h2>
          Every story<br />
          <em>deserves its frame.</em>
        </h2>
      </div>

      {/* Progress bar */}
      <div className="hscroll-progress-track">
        <div className="hscroll-progress-bar" />
      </div>

      {/* Horizontal track */}
      <div ref={trackRef} className="hscroll-track">
        {/* Leading spacer so heading is visible on entry */}
        <div className="hscroll-spacer" />

        {categories.map((cat, i) => (
          <article key={cat.title} className="hscroll-card">
            <div className="hscroll-card-visual">
              <div className="hscroll-card-image">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  loading="lazy"
                  sizes="(max-width: 760px) 80vw, 420px"
                />
              </div>
              <div className="hscroll-card-wash" />
              <span className="hscroll-card-number">
                {String(i + 1).padStart(2, '0')}
              </span>
            </div>
            <div className="hscroll-card-info">
              <h3>{cat.title}</h3>
              <p>{cat.subtitle}</p>
              <div className="hscroll-card-tags">
                {cat.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </article>
        ))}

        {/* Trailing CTA card */}
        <article className="hscroll-card hscroll-cta-card">
          <div className="hscroll-cta-content">
            <p className="arcc-section-label">Ready?</p>
            <h3>Let&apos;s make<br /><em>your frame.</em></h3>
            <span className="hscroll-cta-arrow"><ArrowUpRight size={28} /></span>
          </div>
        </article>
      </div>
    </section>
  );
}
