"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Global smooth-scroll provider.
 *
 * Initialises Lenis and wires it into GSAP's ScrollTrigger so every
 * scrub / pin / trigger in the app rides the same interpolated scroll
 * position instead of the browser's raw, jittery one.
 */
const SmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      // @ts-expect-error – Lenis v1 typing quirk
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    // Pipe Lenis's interpolated scroll into ScrollTrigger on every frame.
    lenis.on("scroll", ScrollTrigger.update);

    // Use GSAP's ticker as the single RAF loop so Lenis and ScrollTrigger
    // are always in lock-step — no double-RAF, no drift.
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000); // GSAP gives seconds, Lenis expects ms
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  return null;
};

export default SmoothScroll;
