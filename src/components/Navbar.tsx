"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";

const Navbar = () => {
  const navRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Logo Text Splitting
    const logos = document.querySelectorAll("#navbar .logo span");
    logos.forEach((elem) => {
      if (elem.textContent) {
        const text = elem.textContent;
        elem.innerHTML = "";
        text.split("").forEach((char) => {
          elem.innerHTML += `<span>${char}</span>`;
        });
      }
    });

    // Logo Hover Animation
    const logoContainers = document.querySelectorAll("#navbar .logo");
    logoContainers.forEach((elem) => {
      elem.addEventListener("mouseenter", () => {
        const spans = document.querySelectorAll("#navbar span");
        spans.forEach((span: any) => {
          gsap.to(span.children, {
            stagger: 0.05,
            y: -33,
            ease: "circ.inOut",
          });
        });
      });
      elem.addEventListener("mouseleave", () => {
        const spans = document.querySelectorAll("#navbar span");
        spans.forEach((span: any) => {
          gsap.to(span.children, {
            stagger: -0.05,
            y: 20,
            ease: "expo.inOut",
          });
        });
      });
    });

    // Magnet Effect for Nav Links
    const links = document.querySelectorAll(".magnet");
    links.forEach((link) => {
      const animateLink = (e: any) => {
        const span = link.querySelector("span") as HTMLElement;
        const { offsetX: x, offsetY: y } = e;
        const { offsetWidth: width, offsetHeight: height } = link as HTMLElement;

        const intensity = 0.1;
        const xMove = (x / width) * (intensity * 2) - intensity;
        const yMove = (y / height) * (intensity * 2) - intensity;

        if(span) span.style.transform = `translate(${xMove}px, ${yMove}px)`;
        
        if (e.type === "mouseleave" && span) span.style.transform = "";
      };

      link.addEventListener("mousemove", animateLink);
      link.addEventListener("mouseleave", animateLink);
    });
  }, { scope: navRef });

  return (
    <>
      <div id="navbar" ref={navRef}>
        <div id="nav2">
          <div id="navleft">
            <a href="#" className="magnet">
              <span>
                <h3>GWA</h3>
              </span>
            </a>
            <br />
            <a href="#" className="magnet">
              <span>
                <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;STUDIOX</h3>
              </span>
            </a>
          </div>
          <div id="navright">
            <a href="#" className="magnet">
              <span>
                <h3>MENU</h3>
              </span>
            </a>
          </div>
        </div>

        <div className="logo" id="logo">
          <h1>
            G<span>WA</span>
          </h1>
          <h1>
            S<span>TUDIOX</span>
          </h1>
        </div>
        <div className="logo">
          <h1>
            M<span>ENU</span>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Navbar;
