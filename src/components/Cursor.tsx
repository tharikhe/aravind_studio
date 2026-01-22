"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Cursor = () => {
    const cursorRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const moveCursor = (e: MouseEvent) => {
            gsap.to(cursorRef.current, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
                ease: "power2.out"
            });
        };
        window.addEventListener("mousemove", moveCursor);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
        };
    }, { scope: cursorRef });

    return <div id="cursor" ref={cursorRef}></div>;
};

export default Cursor;
