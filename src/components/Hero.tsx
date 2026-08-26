"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const heroRef = useRef<HTMLDivElement>(null);
    const videoIndexRef = useRef(0);
    const videoList = [
        "/new-main-video.webm",
        "/new-main-video-1.webm",
        "/new-main-video2.webm"
    ];

    useGSAP(() => {
        // Text Animation
        const tl = gsap.timeline();
        tl.from("#page1 h1", {
            opacity: 0,
            y: "30px",
            z: "-50px",
            rotateX: "-92deg",
            skewX: "-5deg",
            skewY: "-10deg",
            ease: "expo.out",
            duration: 0.9,
            delay: 2 // Wait for loader
        });

        tl.from("#page1 p", {
            opacity: 0,
            y: 10
        }, "-=1");

        // Icon Scroll Trigger
        gsap.to("#icon", {
            scrollTrigger: {
                trigger: "#page1",
                start: "top 0%",
                scrub: 1,
            },
            duration: 1,
            y: -250,
            scaleY: 1.08
        });

        // Video Move Effect
        const video = document.querySelector("#video") as HTMLElement;
        if (video) {
            video.addEventListener("mousemove", (dets) => {
                video.style.left = `${dets.offsetX * 0.1}px`;
                video.style.top = `${dets.offsetY * 0.1}px`;
            });
        }

        // Video Scroll Trigger
        gsap.to("#page3 #mainvideo", {
            scrollTrigger: {
                trigger: "#page3",
                start: "top 100%",
                scrub: 1,
            },
            duration: 1,
            y: -400,
        });

    }, { scope: heroRef });

    useEffect(() => {
        // Image Rotator for Page 2
        // Using local images distributed across arrays
        const localImages = [
            "/images/hero-new.png",
            "/images/fashion.jpg",
            "/images/amish-thakkar-7O422yG_b80-unsplash.jpg",
            "/images/anik-das-wbLCos9rVLQ-unsplash.jpg",
            "/images/arto-suraj-YTEj-9pUH_k-unsplash.jpg",
            "/images/arto-suraj-yS6e3uhm_ZM-unsplash.jpg",
            "/images/ashwini-chaudhary-monty-9gUvnFDE86o-unsplash.jpg",
            "/images/benmoses-m-MDaD_usOE90-unsplash.jpg",
            "/images/jayesh-jalodara-bWQ6-0c_ZcM-unsplash.jpg",
            "/images/mohammed-sultan-farooqui-JjOm8445mXw-unsplash.jpg",
            "/images/pixel-studios-eZXqmTEaYA8-unsplash.jpg",
            "/images/rajat-sarki-NvuOJFK53sE-unsplash.jpg"
        ];

        // Helper to get random image from local set
        const getRand = () => localImages[Math.floor(Math.random() * localImages.length)];

        // Initialize arrays with random selection from local images
        const arr1 = Array(6).fill(null).map(getRand);
        const arr2 = Array(6).fill(null).map(getRand);
        const arr3 = Array(6).fill(null).map(getRand);
        const arr4 = Array(6).fill(null).map(getRand);

        const i1 = setInterval(() => {
            const img = document.querySelector("#page2 #img1") as HTMLImageElement;
            if (img) img.src = arr1[Math.floor(Math.random() * 6)];
        }, 1000);

        const i2 = setInterval(() => {
            const img = document.querySelector("#page2 #img2") as HTMLImageElement;
            if (img) img.src = arr2[Math.floor(Math.random() * 6)];
        }, 2000);

        const i3 = setInterval(() => {
            const img = document.querySelector("#page2 #img3") as HTMLImageElement;
            if (img) img.src = arr3[Math.floor(Math.random() * 6)];
        }, 3000);

        const i4 = setInterval(() => {
            const img = document.querySelector("#page2 #img4") as HTMLImageElement;
            if (img) img.src = arr4[Math.floor(Math.random() * 6)];
        }, 4000);

        return () => {
            clearInterval(i1);
            clearInterval(i2);
            clearInterval(i3);
            clearInterval(i4);
        }
    }, []);

    return (
        <div ref={heroRef}>
            <div id="page1">
                <h1 className="high">Love.</h1>
                <h1 className="end">
                    Laughter.
                    <span>
                        <h2>*</h2>
                        <p>
                            Professional Photography Services —<br />
                            Capturing your special moments.
                        </p>
                    </span>
                </h1>
                <h1 className="digital">Captured</h1>
                <h1 className="expe">Forever</h1>
                <div id="icon">
                    <img src="/Arrow - Down 3.png" alt="" loading="lazy" />
                </div>
            </div>

            <div id="page2">
                <img
                    id="img1"
                    src="/images/hero-new.png"
                    alt=""
                    loading="lazy"
                    decoding="async"
                />
                <img
                    id="img2"
                    src="/images/fashion.jpg"
                    alt=""
                    loading="lazy"
                    decoding="async"
                />
                <div id="image-2">
                    <img
                        id="img3"
                        src="/images/amish-thakkar-7O422yG_b80-unsplash.jpg"
                        alt=""
                        loading="lazy"
                        decoding="async"
                    />
                    <img
                        id="img4"
                        src="/images/anik-das-wbLCos9rVLQ-unsplash.jpg"
                        alt=""
                        loading="lazy"
                        decoding="async"
                    />
                </div>
            </div>

            <div id="all">
                <div id="page3">
                    <div id="mainvideo">
                        <a href="#" className="vid">
                            <div id="video">
                                <span>
                                    <video
                                        src={videoList[0]}
                                        autoPlay
                                        muted
                                        playsInline
                                        preload="metadata"
                                        onEnded={(e) => {
                                            videoIndexRef.current = (videoIndexRef.current + 1) % videoList.length;
                                            const nextSrc = videoList[videoIndexRef.current];
                                            e.currentTarget.src = nextSrc;
                                            e.currentTarget.play();
                                        }}
                                    ></video>
                                </span>
                                <div id="overlay"></div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
