"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
    const servicesRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Page 4 Text
        gsap.from(".h1-4", {
            scrollTrigger: {
                trigger: "#page4",
                start: "top 80%",
                scrub: 1
            },
            y: 50,
            opacity: 0,
            stagger: 0.2
        });

        // Circles Animation
        const circles = document.querySelectorAll(".circle");
        circles.forEach((elem) => {
            elem.addEventListener("click", function (this: HTMLElement) {
                gsap.to(this, {
                    rotateX: "1440deg",
                    ease: "linear",
                    duration: 2,
                });
            });
        });

        gsap.to("#circles", {
            scrollTrigger: {
                trigger: "#circles",
                start: "top 90%",
                end: "bottom -45%",
                scrub: 1,
            },
            x: "-52vw",
            ease: "circ.out"
        });

        // Page 5 Text Stagger
        const h1s = document.querySelectorAll("#page5 h1");
        gsap.from(h1s, {
            scrollTrigger: {
                trigger: "#page5",
                start: "top 80%",
            },
            y: 100,
            opacity: 0,
            stagger: 0.1,
            duration: 1
        });

    }, { scope: servicesRef });

    return (
        <div id="all2" ref={servicesRef}>
            <div className="section" id="page4">
                <div id="top-wrap-bubble"></div>
                <h1 className="h1-4" id="we">CAPTURING</h1>
                <h1 className="h1-4" id="help">YOUR BEST</h1>
                <h1 className="h1-4" id="stand">MOMENTS</h1>
            </div>

            <div className="section" id="page5">
                <div id="circles">
                    {Array.from({ length: 10 }).map((_, i) => (
                        <div key={i} className="circle"></div>
                    ))}
                </div>
                <h1><span style={{ fontStyle: "normal" }}>&</span>WEDDINGS<span
                    style={{ fontFamily: "gilroy", marginLeft: "2vw", fontStyle: "normal", fontWeight: 600 }}>FASHION</span>
                </h1>
                <h1>& ALL YOUR</h1>
                <h1>SPECIAL EVENTS<span style={{ fontSize: "5rem", fontStyle: "normal", marginLeft: "2vw" }}>*</span>
                </h1>
            </div>

            <div className="section" id="page6">
                <h2>*<span>
                    <p>Specializing in Weddings, Pre-wedding, Fashion, Birthday, Maternity, and Corporate events.</p>
                </span></h2>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; gwastudioX is a
                    creative photography agency focused on capturing emotions. With every single one of our clients, we bring forth
                    a deep passion for storytelling — which is what we deliver in the form of timeless and
                    memorable photographs.</p>
            </div>

            <div className="section" id="page7">
                <div id="text">
                    <h1>FEATURED</h1>
                    <h1>WORK</h1>
                </div>
            </div>
        </div>
    );
};

export default Services;
