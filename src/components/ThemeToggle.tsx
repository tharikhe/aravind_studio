"use client";
import React, { useState } from "react";
import gsap from "gsap";

const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(true); // Assuming dark by default or controlled

    const toggleTheme = () => {
        const root = document.documentElement;
        if (!isDark) {
            // Switch to Dark (Default State in CSS vars) - wait, CSS has explicit vars
            // Correct logic from script.js:
            // flag === 0 (Light?) -> set --top: #fff, --white: #000 (?)
            // script.js says: 
            // flag 0: --white #000, --top #fff, --black #E5E5E5 (Inverted?)
            // flag 1: --white #fff, --top #fff, --black rgb(8,8,8) (Dark Mode / Normal)

            // Let's implement simple toggle
            // Standard: Dark Mode
            root.style.setProperty("--white", "#fff");
            root.style.setProperty("--black", "rgb(8, 8, 8)");
            root.style.setProperty("--light", "#E5E5E5");
            root.style.setProperty("--grey", "#1f1f1f");

            (document.querySelector("#switch") as HTMLElement)!.style.left = "3%";
            setIsDark(true);
        } else {
            // Inverted Mode (Light)
            root.style.setProperty("--white", "#000"); // Text becomes black
            root.style.setProperty("--black", "#E5E5E5"); // bg black becomes light
            root.style.setProperty("--light", "#1F1F1F"); // bg light becomes dark
            root.style.setProperty("--grey", "#CCCCCC");

            (document.querySelector("#switch") as HTMLElement)!.style.left = "55%";
            setIsDark(false);
        }
    };

    return (
        <div id="toggle-back">
            <div id="toggle" onClick={toggleTheme}>
                <div id="switch"></div>
            </div>
        </div>
    );
};

export default ThemeToggle;
