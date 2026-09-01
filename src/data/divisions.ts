export interface SubService {
  name: string;
  shortDesc: string;
  deliverables?: string[];
}

export interface Division {
  id: string;
  slug: string;
  number: string;
  name: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  iconName: "camera" | "video" | "mic" | "film" | "sparkles" | "layers";
  subServices: SubService[];
  heroImage: string;
  galleryImages: {
    url: string;
    caption: string;
    category: string;
    aspectRatio?: "square" | "landscape" | "portrait";
  }[];
  processSteps: {
    step: string;
    title: string;
    description: string;
  }[];
}

export const DIVISIONS: Division[] = [
  {
    id: "photography",
    slug: "photography",
    number: "01",
    name: "Photography",
    tagline: "Stills that capture atmosphere, texture, and uncompromising emotion.",
    shortDescription: "High-resolution commercial, editorial, product, and milestone imagery crafted with precision lighting.",
    fullDescription: "From intimate luxury weddings to large-scale commercial campaigns, our photography division approaches every frame with editorial rigor, calibrated color fidelity, and deliberate composition. We create enduring imagery that defines brands and immortalizes moments.",
    iconName: "camera",
    heroImage: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1600&auto=format&fit=crop",
    subServices: [
      {
        name: "Weddings",
        shortDesc: "Cinematic, non-intrusive documentary coverage capturing genuine emotion and celebration.",
        deliverables: ["Full-day coverage", "Curated digital album", "Handcrafted heirloom prints", "High-res raw archives"]
      },
      {
        name: "Fashion",
        shortDesc: "Editorial and lookbook campaigns with visionary styling, model direction, and sharp color grading.",
        deliverables: ["E-commerce lookbooks", "High-fashion editorials", "On-location lighting", "Color-matched retouches"]
      },
      {
        name: "Products",
        shortDesc: "Macro-precision e-commerce, packshots, and dramatic hero stills for luxury and consumer brands.",
        deliverables: ["Clean white packshots", "Lifestyle flat-lays", "360-degree spins", "Reflective surface control"]
      },
      {
        name: "Corporate",
        shortDesc: "Executive portraits, headquarters architecture, annual reports, and PR press kits.",
        deliverables: ["Executive headshots", "C-suite portraiture", "Workplace in-action", "Architectural facility stills"]
      },
      {
        name: "Portraits",
        shortDesc: "Intimate character studies, creative artist portraits, and striking personal branding.",
        deliverables: ["Studio session", "Creative lighting designs", "Bespoke retouching", "Multi-format outputs"]
      }
    ],
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
        caption: "Luxury Destination Nuptials",
        category: "Weddings",
        aspectRatio: "landscape"
      },
      {
        url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop",
        caption: "High Contrast Monochrome Portrait",
        category: "Portraits",
        aspectRatio: "portrait"
      },
      {
        url: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop",
        caption: "Editorial Autumn Lookbook",
        category: "Fashion",
        aspectRatio: "portrait"
      },
      {
        url: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop",
        caption: "Precision Timepiece Macro",
        category: "Products",
        aspectRatio: "landscape"
      },
      {
        url: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop",
        caption: "Leadership Summit Keynote",
        category: "Corporate",
        aspectRatio: "landscape"
      },
      {
        url: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200&auto=format&fit=crop",
        caption: "Vogue Street Editorial",
        category: "Fashion",
        aspectRatio: "portrait"
      }
    ],
    processSteps: [
      { step: "01", title: "Creative Brief", description: "Moodboards, lighting concepts, shot list, and talent styling alignment." },
      { step: "02", title: "Pre-Production", description: "Location scouting, set construction, gear staging, and lighting calibration." },
      { step: "03", title: "The Shoot", description: "Tethered high-res capture with real-time client monitoring and review." },
      { step: "04", title: "Curation & Grade", description: "Master selection, color-balance calibration, frequency separation retouching." },
      { step: "05", title: "Asset Delivery", description: "Full-resolution master tiffs, web-optimized JPEGs, and print-ready proofs." }
    ]
  },
  {
    id: "film-and-video",
    slug: "film-and-video",
    number: "02",
    name: "Film & Video",
    tagline: "Moving pictures with visceral impact, cinematic rhythm, and sonic depth.",
    shortDescription: "Full-scale commercial film production, narrative brand stories, high-energy music videos, and digital video campaigns.",
    fullDescription: "We build narrative worlds. Using cinema-grade sensors, anamorphic lenses, calibrated motion rigs, and dynamic sound design, we produce films that demand attention and convert audiences across broadcast and digital channels.",
    iconName: "video",
    heroImage: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1600&auto=format&fit=crop",
    subServices: [
      {
        name: "Brand Films",
        shortDesc: "High-concept narrative anthems establishing legacy, ethos, and deep emotional resonance.",
        deliverables: ["4K Cinema master", "Social cutdowns (15s/30s/60s)", "Director's cut", "Custom score integration"]
      },
      {
        name: "Ads",
        shortDesc: "Punchy, conversion-engineered commercial spots for TV broadcast, OTT, and programmatic digital ad platforms.",
        deliverables: ["Broadcast safe deliverables", "A/B testing hook variations", "Vertical 9:16 cuts", "Sound master"]
      },
      {
        name: "Corporate",
        shortDesc: "Documentary-style brand overviews, internal vision pieces, case study narratives, and investor reels.",
        deliverables: ["Executive interviews", "B-roll cinematic library", "Animated graphics integration", "Multilingual subs"]
      },
      {
        name: "Music Videos",
        shortDesc: "Avant-garde visual storytelling, synchronized performance capture, and hyper-stylized color grades.",
        deliverables: ["Full track visualizer", "Teaser snippets", "Behind-the-scenes reel", "Color LUT master"]
      },
      {
        name: "YouTube",
        shortDesc: "High-retention episodic content, studio talk shows, dynamic docs, and YouTube channel launch suites.",
        deliverables: ["Thumbnail optimization stills", "Modular graphics packages", "Chapter markers", "SEO-optimized exports"]
      }
    ],
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200&auto=format&fit=crop",
        caption: "Automotive Cinema Commercial",
        category: "Ads",
        aspectRatio: "landscape"
      },
      {
        url: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200&auto=format&fit=crop",
        caption: "Underground Music Video Production",
        category: "Music Videos",
        aspectRatio: "landscape"
      },
      {
        url: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1200&auto=format&fit=crop",
        caption: "Director On Anamorphic Rig",
        category: "Behind the Scenes",
        aspectRatio: "portrait"
      },
      {
        url: "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=1200&auto=format&fit=crop",
        caption: "Global Tech Anthem Commercial",
        category: "Brand Films",
        aspectRatio: "landscape"
      },
      {
        url: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=1200&auto=format&fit=crop",
        caption: "Cinematic Lighting Rig on Set",
        category: "Studio",
        aspectRatio: "landscape"
      }
    ],
    processSteps: [
      { step: "01", title: "Treatment & Script", description: "Scriptwriting, shot breakdowns, beat sheets, and mood animatics." },
      { step: "02", title: "Pre-Production", description: "Casting, technical rehearsals, equipment checkout, and permits." },
      { step: "03", title: "Principal Photography", description: "Cinema multi-cam capture, gimbal/dolly rigs, on-set audio recording." },
      { step: "04", title: "Post & Color", description: "Assembly cut, Foley/sound mix, DaVinci Resolve color grading." },
      { step: "05", title: "Mastering & Distribution", description: "ProRes 4444 masters, web encodes, and social format package." }
    ]
  },
  {
    id: "events",
    slug: "events",
    number: "03",
    name: "Events",
    tagline: "Live moments captured with multi-angle speed, fidelity, and zero margin for error.",
    shortDescription: "End-to-end event coverage: multi-camera live streaming, festival photo pits, corporate summits, and hybrid conferences.",
    fullDescription: "Events happen once. Our elite event crews deploy robust wireless rigs, multi-switched live production suites, and rapid photo delivery pipelines to ensure your moment is experienced globally in real-time.",
    iconName: "sparkles",
    heroImage: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1600&auto=format&fit=crop",
    subServices: [
      {
        name: "Photo",
        shortDesc: "High-speed live photo turnarounds, on-site editing suites, and real-time cloud press galleries.",
        deliverables: ["Live cloud gallery", "Keynote express highlights", "VIP press kit stills", "Full event archive"]
      },
      {
        name: "Cinema",
        shortDesc: "High-energy event recap films, festival highlight reels, and emotional keynote documentaries.",
        deliverables: ["Same-night recap teaser", "Full cinematic aftermovie", "Sponsor sizzle reel", "Raw footage vault"]
      },
      {
        name: "Multi-Camera",
        shortDesc: "Live switched multi-cam setups with instant replay, stage monitors, and remote camera operators.",
        deliverables: ["Dedicated vision mixer", "ISO recording on every cam", "Wireless tally systems", "Clean program feeds"]
      },
      {
        name: "Live Streaming",
        shortDesc: "Broadcast-grade redundant streaming to YouTube, Twitch, custom paywalled portals, and Zoom.",
        deliverables: ["Bonded cellular failover", "Low-latency RTMP/SRT", "Lower-third graphics", "Audience Q&A overlay"]
      }
    ],
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1200&auto=format&fit=crop",
        caption: "Arena Festival Production",
        category: "Festival",
        aspectRatio: "landscape"
      },
      {
        url: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
        caption: "International Tech Keynote",
        category: "Corporate",
        aspectRatio: "landscape"
      },
      {
        url: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1200&auto=format&fit=crop",
        caption: "Live Stage Light & Sound Sync",
        category: "Multi-Camera",
        aspectRatio: "landscape"
      },
      {
        url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop",
        caption: "Executive Gala Ceremony",
        category: "Photo",
        aspectRatio: "portrait"
      }
    ],
    processSteps: [
      { step: "01", title: "Site Survey & Tech Run", description: "Bandwidth testing, cable routes, audio feeds, and multi-cam sightlines." },
      { step: "02", title: "Rigging & Signal Check", description: "Vision mixer deployment, wireless video links, and intercom sync." },
      { step: "03", title: "Live Execution", description: "Live switching, real-time live-streaming, and live-to-air audio engineering." },
      { step: "04", title: "Rapid Turnaround", description: "Same-day photo drops and next-morning highlight teaser exports." },
      { step: "05", title: "Archival Delivery", description: "Complete ISO camera feeds, master stream records, and press galleries." }
    ]
  },
  {
    id: "creative",
    slug: "creative",
    number: "04",
    name: "Creative",
    tagline: "Strategic storytelling and visionary concepts engineered to cut through the noise.",
    shortDescription: "Brand ideation, creative direction, scriptwriting, dynamic storyboarding, and 360-degree campaign architecture.",
    fullDescription: "Great production starts with a bulletproof idea. Our creative directors and strategists bridge brand intent with cultural resonance, transforming abstract business goals into compelling narrative frameworks.",
    iconName: "mic",
    heroImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop",
    subServices: [
      {
        name: "Concept",
        shortDesc: "High-impact creative angles, thematic hooks, and positioning strategies that resonate.",
        deliverables: ["Strategic brief", "Creative concept deck", "Target audience analysis", "Tone of voice guide"]
      },
      {
        name: "Script",
        shortDesc: "Punchy dialogue, cinematic narrative arcs, voiceover copy, and commercial timing scripts.",
        deliverables: ["Two-column AV scripts", "Voiceover scratch track", "Script revisions", "Legal/timing clearances"]
      },
      {
        name: "Storyboard",
        shortDesc: "Frame-by-frame visual choreography, camera angle planning, and visual moodboards.",
        deliverables: ["Hand-drawn frame boards", "Animatic motion test", "Shot-by-shot lens guide", "Lighting reference board"]
      },
      {
        name: "Campaigns",
        shortDesc: "Holistic 360 multi-platform rollout strategies combining film, stills, and digital engagement.",
        deliverables: ["Rollout schedule", "Multi-channel content matrix", "Asset dimension guide", "Paid media creative kit"]
      },
      {
        name: "Branding",
        shortDesc: "Visual identity systems, motion design guidelines, and kinetic brand toolkits.",
        deliverables: ["Brand identity guide", "Motion logo kit", "Typography & color system", "Social media templates"]
      }
    ],
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=1200&auto=format&fit=crop",
        caption: "Creative Strategy & Ideation Lab",
        category: "Concept",
        aspectRatio: "landscape"
      },
      {
        url: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1200&auto=format&fit=crop",
        caption: "Visual Storyboarding & Frame Choreography",
        category: "Storyboard",
        aspectRatio: "portrait"
      },
      {
        url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
        caption: "Campaign War Room & Direction",
        category: "Campaigns",
        aspectRatio: "landscape"
      }
    ],
    processSteps: [
      { step: "01", title: "Discovery Workshop", description: "Deep dive into your product, brand philosophy, and audience psychology." },
      { step: "02", title: "Concept Pitch", description: "Presentation of 3 distinct creative directions with moodboards and sample hooks." },
      { step: "03", title: "Script & Storyboard", description: "Drafting words, framing scenes, and sequencing the emotional arc." },
      { step: "04", title: "Production Alignment", description: "Hand-off to directors, DPs, and post supervisors for seamless execution." },
      { step: "05", title: "Campaign Integration", description: "Final asset optimization across paid, owned, and organic channels." }
    ]
  },
  {
    id: "post-production",
    slug: "post-production",
    number: "05",
    name: "Post-Production",
    tagline: "Precision editing, color science, motion design, and immersive spatial audio.",
    shortDescription: "Dedicated in-house post-production: offline/online editing, DaVinci color grading, 2D/3D motion graphics, and audio mastering.",
    fullDescription: "Where raw footage transforms into cinematic art. Our edit suites are calibrated with OLED reference monitors, dedicated audio mixing stages, and lightning-fast render nodes to execute complex turnarounds without compromise.",
    iconName: "layers",
    heroImage: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1600&auto=format&fit=crop",
    subServices: [
      {
        name: "Editing",
        shortDesc: "Pacing-driven offline and online editing, multi-cam sync, and narrative refinement.",
        deliverables: ["Assembly & rough cuts", "Director's lock", "Multi-aspect ratio outputs", "Clean project archives"]
      },
      {
        name: "Colour",
        shortDesc: "Industry-standard DaVinci Resolve color grading on calibrated Flanders/Sony OLED masters.",
        deliverables: ["Film print emulation", "HDR & SDR masters", "Shot-to-shot matching", "Custom show LUT creation"]
      },
      {
        name: "Motion Graphics",
        shortDesc: "2D kinetic typography, 3D product renders, UI screen replacements, and title sequences.",
        deliverables: ["Animated title packages", "VFX cleanups & compositing", "Infographic overlays", "3D simulations"]
      },
      {
        name: "Sound",
        shortDesc: "Custom sound design, dialogue de-noising, Foley effects, and Dolby Atmos/5.1 surround mastering.",
        deliverables: ["Dialogue isolation", "Bespoke sound design bed", "LUFS broadcast master", "Stem package"]
      }
    ],
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1200&auto=format&fit=crop",
        caption: "Mastering Console & Reference Audio Stage",
        category: "Sound",
        aspectRatio: "landscape"
      },
      {
        url: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1200&auto=format&fit=crop",
        caption: "DaVinci Resolve Color Grading Suite",
        category: "Colour",
        aspectRatio: "landscape"
      },
      {
        url: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop",
        caption: "Motion Graphics & 3D Rendering Pipeline",
        category: "Motion Graphics",
        aspectRatio: "portrait"
      }
    ],
    processSteps: [
      { step: "01", title: "Ingest & Proxy Setup", description: "Checksum verified offload, proxy generation, and multi-cam metadata sync." },
      { step: "02", title: "Assembly & Cut Lock", description: "Narrative structuring, pace tuning, and client review rounds." },
      { step: "03", title: "Color Calibration", description: "DaVinci color pass, skin tone accuracy, and cinematic film response." },
      { step: "04", title: "Sound Design & Mix", description: "SFX layering, dialogue cleaning, score balance, and master limiting." },
      { step: "05", title: "Master Export & QC", description: "Bit-budget checks, color profile tags, and broadcast deliverable packages." }
    ]
  },
  {
    id: "studio",
    slug: "studio",
    number: "06",
    name: "Studio",
    tagline: "Soundproofed, pre-lit, and fully rigged production space ready for creators.",
    shortDescription: "Private studio rental with infinity cyclorama, soundproof podcast suite, green screen stage, and pro lighting kits.",
    fullDescription: "Our flagship creative facility is designed from the ground up for frictionless shoots. Featuring a motorized overhead lighting grid, 3-sided white cyc, broadcast podcast setup, green screen wall, and comfortable client lounges.",
    iconName: "film",
    heroImage: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1600&auto=format&fit=crop",
    subServices: [
      {
        name: "Studio Rental",
        shortDesc: "Flexible hourly and daily studio hire with dedicated facility manager and gear support.",
        deliverables: ["2,500 sq ft main stage", "Drive-in access", "High-speed gigabit Wi-Fi", "Green room lounge"]
      },
      {
        name: "Podcast",
        shortDesc: "Acoustically isolated multi-mic podcast studio with Shure SM7B mics and 4K multi-cam switcher.",
        deliverables: ["4-person mic layout", "Live ISO video switcher", "Automated camera tracking", "Same-day WAV/MP4 files"]
      },
      {
        name: "Product Shoots",
        shortDesc: "Dedicated tabletop cyclorama with precision motorized turntables and micro-lighting.",
        deliverables: ["Product cyc stage", "Macro lens package", "Motorized 360 turntable", "Tethered workstation"]
      },
      {
        name: "Green Screen",
        shortDesc: "Evenly illuminated Chroma Key green screen corner for VFX, virtual production, and keying.",
        deliverables: ["Seamless Chroma green cyc", "Pre-balanced soft lights", "Real-time keying monitor", "VFX markers"]
      }
    ],
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1200&auto=format&fit=crop",
        caption: "Soundproof Podcast Lounge with Shure SM7Bs",
        category: "Podcast",
        aspectRatio: "landscape"
      },
      {
        url: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=1200&auto=format&fit=crop",
        caption: "Main Stage White Infinity Cyclorama",
        category: "Studio Rental",
        aspectRatio: "landscape"
      },
      {
        url: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop",
        caption: "Macro Tabletop Product Setup",
        category: "Product Shoots",
        aspectRatio: "portrait"
      }
    ],
    processSteps: [
      { step: "01", title: "Select Stage & Time", description: "Choose half-day or full-day block, add-on lighting, grip, or audio packages." },
      { step: "02", title: "Pre-Light & Staging", description: "Our studio tech pre-configures your lighting grid and sets up camera bays." },
      { step: "03", title: "Shoot Day", description: "Full access to amenities, kitchen, green room, styling station, and tethering." },
      { step: "04", title: "Media Offload", description: "High-speed on-site NAS backup or direct transfer to portable drives." },
      { step: "05", title: "Wrap & Departure", description: "Zero teardown stress — our on-site team assists with rapid pack-down." }
    ]
  }
];
