'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';

const galleryItems = [
  { src: '/images/gallery/gallery-01.jpeg', alt: 'ARCC production gallery image 1', layout: 'gallery-tile-tall' },
  { src: '/images/gallery/gallery-02.jpeg', alt: 'ARCC production gallery image 2', layout: 'gallery-tile-wide' },
  { src: '/images/gallery/gallery-04.jpeg', alt: 'ARCC production gallery image 4', layout: 'gallery-tile-tall' },
  { src: '/images/gallery/gallery-05.jpeg', alt: 'ARCC production gallery image 5', layout: 'gallery-tile-square' },
  { src: '/images/gallery/gallery-06.jpeg', alt: 'ARCC production gallery image 6', layout: 'gallery-tile-wide' },
  { src: '/images/gallery/gallery-07.jpeg', alt: 'ARCC production gallery image 7', layout: 'gallery-tile-square' },
  { src: '/images/gallery/gallery-08.jpeg', alt: 'ARCC production gallery image 8', layout: 'gallery-tile-square' },
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

      {selected && selectedIndex !== null && (
        <div className="gallery-viewer" data-lenis-prevent role="dialog" aria-modal="true" aria-label={'Gallery image ' + (selectedIndex + 1)} onClick={closeViewer}>
          <div className="gallery-viewer-top"><span>ARCC / FRAME 0{selectedIndex + 1} / 08</span><button onClick={closeViewer} aria-label="Close gallery viewer"><X size={22} /></button></div>
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
