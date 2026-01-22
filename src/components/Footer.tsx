"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
    const footerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Bubble Animation
        gsap.to("#top-wrap-bubble2", {
            scrollTrigger: {
                trigger: "#top-wrap-bubble2",
                start: "+=20% 90%",
                end: "+=20% 50%",
                scrub: 1,
            },
            transform: "translate3d(0px, -10vw, 0px) scale3d(1, 1, 1) scale(1.2)",
            borderTopRightRadius: "40%",
            borderTopLeftRadius: "40%",
            ease: "circ.in",
            duration: 1
        });

        // Text Scroll Animation
        gsap.from("#scroll-line2", {
            scrollTrigger: {
                trigger: "#scroll-line2",
                start: "top 90%"
            },
            x: 200
        });
        gsap.from("#scroll-line3", {
            scrollTrigger: {
                trigger: "#scroll-line3",
                start: "top 90%"
            },
            x: -200
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#scroll-line2",
                start: "top 100%",
                scrub: 1,
            }
        });

        tl.to("#scroll-line2", { x: -200 })
            .to("#scroll-line3", { x: 200 }, "<");

    }, { scope: footerRef });

    return (
        <div id="footer" ref={footerRef}>
            <div id="top-wrap-bubble2"></div>

            <div id="scroller">
                <div id="scroll2">
                    <div id="scroll-line2">
                        <h2>Showcase <img src="/icons/Arrow right.png" alt="" style={{ filter: "invert()", width: "5vw", padding: "1vw" }} loading="lazy" /> Showcase <img src="/icons/Arrow right.png" alt="" style={{ filter: "invert()", width: "5vw", padding: "1vw" }} loading="lazy" /> Showcase <img src="/icons/Arrow right.png" alt="" style={{ filter: "invert()", width: "5vw", padding: "1vw" }} loading="lazy" /></h2>
                    </div>
                    <div id="scroll-line3">
                        <h2>Vercel <img src="/icons/Arrow right.png" alt="" style={{ filter: "invert()", width: "5vw", padding: "1vw" }} loading="lazy" /> Ranboo <img src="/icons/Arrow right.png" alt="" style={{ filter: "invert()", width: "5vw", padding: "1vw" }} loading="lazy" /> Dynaboard <img src="/icons/Arrow right.png" alt="" style={{ filter: "invert()", width: "5vw", padding: "1vw" }} loading="lazy" /></h2>
                    </div>
                </div>
            </div>

            <div id="logoText">
                <h1>AESTHETIC<span>&</span>TIMELESS PHOTOGRAPHY</h1>
                <h3 style={{ textAlign: "center", color: "var(--white)", marginTop: "2vw", fontFamily: "gilroy" }}>gwastudiox@gmail.com</h3>
            </div>

            <p>©{new Date().getFullYear()} gwastudioX Inc. - All Rights Reserved <span style={{ textDecoration: "underline" }}>@gwastudioX</span></p>
        </div>
    );
};

export default Footer;
