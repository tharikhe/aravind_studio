"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
    const portfolioRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const page8 = document.querySelector("#page8");
        if (page8) {
            gsap.to(Array.from(page8.children), {
                scrollTrigger: {
                    trigger: page8,
                    start: "top 100%",
                    scrub: 1
                },
                stagger: 0.5,
                top: 0,
                ease: "circ.inOut"
            });
        }

        gsap.to(".image1", {
            scrollTrigger: {
                trigger: "#page8",
                pin: true,
                start: "top 0%",
                end: "140% 0%",
                scrub: 1,
            }
        });

        const images = document.querySelectorAll("#page8 .images img");
        images.forEach((img) => {
            gsap.to(img, {
                scrollTrigger: {
                    trigger: img,
                    start: "-=1000 100%",
                    scrub: 1
                },
                scale: 1.2
            });
        });

        // Stagger entrance of image containers
        const containers = document.querySelectorAll("#page8 .images");
        containers.forEach((container: any) => {
            // Logic simplified for React: usually just parallax the images
        });

    }, { scope: portfolioRef });

    return (
        <div id="page8-1" ref={portfolioRef}>
            <div id="page8">
                <div className="image1">
                    <img src="/images/amish-thakkar-7O422yG_b80-unsplash.jpg" alt="Wedding Photography" loading="lazy" />
                    <div className="overlay">
                        <div className="text">
                            <h2>1/4</h2>
                            <h1>WEDDINGS</h1>
                        </div>
                    </div>
                </div>
                <div className="images">
                    <img src="/images/anik-das-wbLCos9rVLQ-unsplash.jpg" alt="Pre-wedding Photography" loading="lazy" />
                    <div className="overlay">
                        <div className="text">
                            <h2>2/4</h2>
                            <h1>PRE-WEDDING</h1>
                        </div>
                    </div>
                </div>
                <div className="images">
                    <img src="/images/fashion.jpg" alt="Fashion Photography Model" loading="lazy" />
                    <div className="overlay">
                        <div className="text">
                            <h2>3/4</h2>
                            <h1>FASHION</h1>
                        </div>
                    </div>
                </div>
                <div className="images">
                    <img src="/images/arto-suraj-YTEj-9pUH_k-unsplash.jpg" alt="Event Photography" loading="lazy" />
                    <div className="overlay">
                        <div className="text">
                            <h2>4/4</h2>
                            <h1>EVENTS</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
