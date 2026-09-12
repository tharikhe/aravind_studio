'use client';

import { useEffect, useRef, useState } from 'react';
import { Pause, Play } from 'lucide-react';

const reelItems = [
  { number: '01', title: 'On set', detail: 'Photography · Film production', src: '/videos/production-reel.mp4' },
  { number: '02', title: 'In post', detail: 'Editing · Colour · Motion', src: '/videos/post-reel.mp4' },
  { number: '03', title: 'In conversation', detail: 'Podcast · Studio rental', src: '/videos/podcast-reel.mp4' },
  { number: '04', title: 'In the room', detail: 'Events · Multi-camera', src: '/videos/event-reel.mp4' },
];

export default function MotionReel() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    // Attempt playback for all videos initially
    if (!paused) {
      videoRefs.current.forEach((video) => {
        if (video) {
          video.play().catch(() => undefined);
        }
      });
    }

    // Use IntersectionObserver to pause when out of view and resume when in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!paused) {
              videoRefs.current.forEach((video) => {
                if (video && video.paused) {
                  video.play().catch(() => undefined);
                }
              });
            }
          } else {
            videoRefs.current.forEach((video) => {
              if (video && !video.paused) {
                video.pause();
              }
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [paused]);

  const toggleMotion = () => {
    setPaused((currentPaused) => {
      const nextPaused = !currentPaused;
      videoRefs.current.forEach((video) => {
        if (!video) return;
        if (nextPaused) video.pause();
        else video.play().catch(() => undefined);
      });
      return nextPaused;
    });
  };

  return (
    <section ref={sectionRef} className="arcc-motion" id="reel" aria-labelledby="reel-title">
      <div className="arcc-motion-heading">
        <p className="arcc-section-label">ARCC / In motion</p>
        <div>
          <h2 id="reel-title">The work<br /><em>doesn’t stand still.</em></h2>
          <p>A glimpse of what happens behind the frame—from a quiet setup to the final export.</p>
        </div>
        <button type="button" className="arcc-motion-toggle" onClick={toggleMotion} aria-pressed={paused}>
          {paused ? <Play size={14} fill="currentColor" /> : <Pause size={14} fill="currentColor" />} {paused ? 'Play reel' : 'Pause reel'}
        </button>
      </div>
      <div className="arcc-motion-grid">
        {reelItems.map((item, index) => (
          <article
            className={'arcc-motion-tile motion-tile-' + (index + 1)}
            key={item.number}
          >
            <video
              ref={(video) => { videoRefs.current[index] = video; }}
              src={item.src}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-label={item.title}
            />
            <div className="arcc-motion-wash" />
            <div className="arcc-motion-meta">
              <span>{item.number}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
