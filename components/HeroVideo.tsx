'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';

const heroVideos = [
  {
    id: 'cut-01',
    src: '/videos/hero/hero-1.mp4',
    title: 'Studio Floor',
    label: 'Reel 01',
  },
  {
    id: 'cut-02',
    src: '/videos/hero/hero-2.mp4',
    title: 'Motion Floor',
    label: 'Reel 02',
  },
];

export default function HeroVideo() {
  const [activeCut, setActiveCut] = useState(0);
  const activeCutRef = useRef(0);
  const video0Ref = useRef<HTMLVideoElement | null>(null);
  const video1Ref = useRef<HTMLVideoElement | null>(null);
  const isTransitioningRef = useRef(false);

  // Keep activeCutRef in sync with state
  useEffect(() => {
    activeCutRef.current = activeCut;
  }, [activeCut]);

  const switchVideo = useCallback((nextIndex: number) => {
    if (isTransitioningRef.current) return;
    isTransitioningRef.current = true;

    const currentIdx = activeCutRef.current;
    const currentVideo = currentIdx === 0 ? video0Ref.current : video1Ref.current;
    const nextVideo = nextIndex === 0 ? video0Ref.current : video1Ref.current;

    if (nextVideo) {
      nextVideo.currentTime = 0;
      nextVideo.play().catch(() => undefined);
    }

    setActiveCut(nextIndex);

    // Once crossfade completes (after CSS 0.9s transition), pause the previous video
    setTimeout(() => {
      if (currentVideo && activeCutRef.current !== currentIdx) {
        currentVideo.pause();
        currentVideo.currentTime = 0;
      }
      isTransitioningRef.current = false;
    }, 1000);
  }, []);

  const handleNext = useCallback(
    (fromIndex: number) => {
      if (fromIndex === activeCutRef.current && !isTransitioningRef.current) {
        const nextIndex = (fromIndex + 1) % heroVideos.length;
        switchVideo(nextIndex);
      }
    },
    [switchVideo]
  );

  // Initial playback on mount and visibility change handler
  useEffect(() => {
    const v0 = video0Ref.current;
    const v1 = video1Ref.current;
    if (v0) {
      v0.muted = true;
      v0.play().catch(() => undefined);
    }
    if (v1) {
      v1.muted = true;
    }

    const handleVisibility = () => {
      if (!document.hidden) {
        const activeVid = activeCutRef.current === 0 ? video0Ref.current : video1Ref.current;
        if (activeVid && activeVid.paused) {
          activeVid.play().catch(() => undefined);
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibility);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, []);

  // Safety fallback timer to guarantee alternating even if an event is delayed
  useEffect(() => {
    const fallbackDuration = activeCut === 0 ? 7000 : 6500;
    const timer = setTimeout(() => {
      handleNext(activeCut);
    }, fallbackDuration);

    return () => clearTimeout(timer);
  }, [activeCut, handleNext]);

  return (
    <div className="arcc-hero-video-wrap">
      <video
        ref={video0Ref}
        src={heroVideos[0].src}
        className={`arcc-hero-video ${activeCut === 0 ? 'arcc-hero-video-active' : ''}`}
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={() => handleNext(0)}
        onTimeUpdate={(e) => {
          const vid = e.currentTarget;
          if (
            activeCut === 0 &&
            !isTransitioningRef.current &&
            vid.duration &&
            vid.duration > 1 &&
            vid.currentTime >= vid.duration - 0.4
          ) {
            handleNext(0);
          }
        }}
        aria-label={heroVideos[0].title}
      />
      <video
        ref={video1Ref}
        src={heroVideos[1].src}
        className={`arcc-hero-video ${activeCut === 1 ? 'arcc-hero-video-active' : ''}`}
        muted
        playsInline
        preload="auto"
        onEnded={() => handleNext(1)}
        onTimeUpdate={(e) => {
          const vid = e.currentTarget;
          if (
            activeCut === 1 &&
            !isTransitioningRef.current &&
            vid.duration &&
            vid.duration > 1 &&
            vid.currentTime >= vid.duration - 0.4
          ) {
            handleNext(1);
          }
        }}
        aria-label={heroVideos[1].title}
      />
    </div>
  );
}
