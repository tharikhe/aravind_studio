'use client';
import React from 'react';
import { cn } from '@/lib/utils';
import Lenis from '@studio-freight/lenis'
import { ZoomParallax } from "@/components/ui/zoom-parallax";

export default function DefaultDemo() {

    React.useEffect(() => {
        const lenis = new Lenis()

        function raf(time: number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    }, [])


    const images = [
        {
            src: '/images/arto-suraj-yS6e3uhm_ZM-unsplash.jpg',
            alt: 'Portrait Photography 1',
        },
        {
            src: '/images/ashwini-chaudhary-monty-9gUvnFDE86o-unsplash.jpg',
            alt: 'Portrait Photography 2',
        },
        {
            src: '/images/benmoses-m-MDaD_usOE90-unsplash.jpg',
            alt: 'Portrait Photography 3',
        },
        {
            src: '/images/jayesh-jalodara-bWQ6-0c_ZcM-unsplash.jpg',
            alt: 'Portrait Photography 4',
        },
        {
            src: '/images/mohammed-sultan-farooqui-JjOm8445mXw-unsplash.jpg',
            alt: 'Portrait Photography 5',
        },
        {
            src: '/images/pixel-studios-eZXqmTEaYA8-unsplash.jpg',
            alt: 'Portrait Photography 6',
        },
        {
            src: '/images/rajat-sarki-NvuOJFK53sE-unsplash.jpg',
            alt: 'Portrait Photography 7',
        },
    ];

    return (
        <div className="relative min-h-screen w-full bg-white text-black">
            {/* Note: Added bg-white and text-black since the global theme is dark, but the demo might expect light mode. 
             Ideally we'd adapt it, but for a "copy paste" fidelity, let's keep it clean or make it fit. 
             If sticking to the dark theme, we can remove bg-white. */}
            <div className="relative flex h-[50vh] items-center justify-center">
                {/* Radial spotlight */}
                <div
                    aria-hidden="true"
                    className={cn(
                        'pointer-events-none absolute -top-1/2 left-1/2 h-[120vmin] w-[120vmin] -translate-x-1/2 rounded-full',
                        'bg-[radial-gradient(ellipse_at_center,--theme(--color-foreground/.1),transparent_50%)]',
                        'blur-[30px]',
                    )}
                />
                <h1 className="text-center text-4xl font-bold">
                    Scroll Down for Zoom Parallax
                </h1>
            </div>
            <ZoomParallax images={images} />
            <div className="h-[50vh]" />
        </div>
    );
}
