"use client";
import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Loader = () => {
    const loaderRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline();

        // Simulate loading or wait for window load
        const content = document.querySelector("#fs");

        // Disable scroll initially
        document.body.style.overflow = "hidden";

        // Allow some time for "loading"
        setTimeout(() => {
            if (loaderRef.current) {
                loaderRef.current.style.transform = "translateY(-100%)";
                loaderRef.current.style.opacity = "0";

                // Re-enable scroll
                document.body.style.overflow = "visible";
            }
        }, 2000); // 2 second fake load

    }, { scope: loaderRef });

    return (
        <div id="fs" ref={loaderRef}>
            <div id="loader">
                <div className="new-loader" />
            </div>
            <div id="curve"></div>
        </div>
    );
};

export default Loader;
