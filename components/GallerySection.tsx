'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, X } from 'lucide-react';

const galleryItems = [
  { src: '/images/gallery/gallery-01.jpeg', alt: 'Professional studio portrait session with cinema lighting at ARCC Bangalore', layout: 'gallery-tile-tall' },
  { src: '/images/gallery/gallery-02.jpeg', alt: 'Multi-camera podcast recording setup with Aputure lighting at ARCC studio', layout: 'gallery-tile-wide' },
  { src: '/images/gallery/gallery-04.jpeg', alt: 'Founder interview video shoot with branded backdrop at ARCC studio Bangalore', layout: 'gallery-tile-tall' },
  { src: '/images/gallery/gallery-05.jpeg', alt: 'Commercial product photography on white infinity cyc at ARCC Bannerghatta', layout: 'gallery-tile-square' },
  { src: '/images/gallery/gallery-06.jpeg', alt: 'Corporate event coverage with multi-camera cinematic setup by ARCC Media Production', layout: 'gallery-tile-wide' },
  { src: '/images/gallery/gallery-07.jpeg', alt: 'Fashion editorial photoshoot with professional studio lighting at ARCC Bangalore', layout: 'gallery-tile-square' },
  { src: '/images/gallery/gallery-08.jpeg', alt: 'Brand film production behind-the-scenes at ARCC Media Production studio', layout: 'gallery-tile-square' },
];

export default function GallerySection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selected = selectedIndex === null ? null : galleryItems[selectedIndex];

  const closeViewer = () => setSelectedIndex(null);
  const showPrevious = () => setSelectedIndex((index) => index === null ? null : (index + galleryItems.length - 1) % galleryItems.length);
  const showNext = () => setSelectedIndex((index) => index === null ? null : (index + 1) % galleryItems.length);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (event.key === 'Escape') closeViewer();
      if (event.key === 'ArrowLeft') showPrevious();
      if (event.key === 'ArrowRight') showNext();
    };

    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [selectedIndex]);

  return (
    <section className="arcc-gallery" id="gallery" aria-labelledby="gallery-title">
      <div className="arcc-gallery-heading">
        <p className="arcc-section-label">Selected frames</p>
        <div><h2 id="gallery-title">A few things<br /><em>we have seen.</em></h2><p>Moments from the floor, the studio and the work between the work.</p></div>
      </div>
      <div className="arcc-gallery-grid">
        {galleryItems.map((item, index) => (
          <button type="button" key={item.src} className={'gallery-tile ' + item.layout} onClick={() => setSelectedIndex(index)} aria-label={'Open image ' + (index + 1) + ' of ' + galleryItems.length}>
            <Image src={item.src} alt={item.alt} fill loading="lazy" sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 33vw" />
            <span className="gallery-tile-index">0{index + 1}</span>
            <span className="gallery-tile-open">Open frame</span>
          </button>
        ))}
      </div>

      <div className="arcc-gallery-footer">
        <p>Explore full categorized collections across weddings, fashion, podcasts, commercial products, and studio spaces.</p>
        <Link href="/gallery" className="arcc-gallery-more-btn">
          See more <ArrowUpRight size={16} />
        </Link>
      </div>

      {selected && selectedIndex !== null && (
        <div className="gallery-viewer" data-lenis-prevent role="dialog" aria-modal="true" aria-label={'Gallery image ' + (selectedIndex + 1)} onClick={closeViewer}>
          <div className="gallery-viewer-top"><span>ARCC / FRAME 0{selectedIndex + 1} / 0{galleryItems.length}</span><button onClick={closeViewer} aria-label="Close gallery viewer"><X size={22} /></button></div>
          <div className="gallery-viewer-image" onClick={(event) => event.stopPropagation()}>
            <Image src={selected.src} alt={selected.alt} fill loading="lazy" sizes="92vw" />
          </div>
          <div className="gallery-viewer-controls">
            <button onClick={(event) => { event.stopPropagation(); showPrevious(); }} aria-label="Previous gallery image"><ArrowLeft size={22} /></button>
            <span>{selectedIndex + 1} / {galleryItems.length}</span>
            <button onClick={(event) => { event.stopPropagation(); showNext(); }} aria-label="Next gallery image"><ArrowRight size={22} /></button>
          </div>
        </div>
      )}
    </section>
  );
}
