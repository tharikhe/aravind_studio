export interface Project {
  id: string;
  projectNumber: string;
  title: string;
  client: string;
  divisionId: string;
  divisionName: string;
  categoryTag: string;
  year: string;
  coverImage: string;
  videoUrl?: string;
  duration?: string;
  description: string;
  deliverablesSummary: string[];
}

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "project-01",
    projectNumber: "PROJECT 01",
    title: "Aethelgard Horizon — Global Brand Anthem",
    client: "Aethelgard Dynamics",
    divisionId: "film-and-video",
    divisionName: "Film & Video",
    categoryTag: "Brand Film",
    year: "2025",
    coverImage: "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=1200&auto=format&fit=crop",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-cinematic-mystery-silhouette-in-fog-41551-large.mp4",
    duration: "02:45",
    description: "A visually striking anamorphic brand anthem shot on location across volcanic terrains, highlighting human resilience and technological mastery.",
    deliverablesSummary: ["4K Cinema Master", "Broadcast Cutdowns", "Original Orchestral Score", "Color Grade"]
  },
  {
    id: "project-02",
    projectNumber: "PROJECT 02",
    title: "Vogue Noir — Monochromatic Autumn Editorial",
    client: "Noir Atelier Paris",
    divisionId: "photography",
    divisionName: "Photography",
    categoryTag: "Fashion",
    year: "2025",
    coverImage: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop",
    duration: "18 Stills",
    description: "High-contrast, brutalist studio fashion editorial exploring fabric tension, deep shadows, and architectural silhouette tailoring.",
    deliverablesSummary: ["Print Lookbook", "Digital Campaign Stills", "Retouched Master Files", "Social Motion Crops"]
  },
  {
    id: "project-03",
    projectNumber: "PROJECT 03",
    title: "Apex Nexus — Global Tech Keynote & Stream",
    client: "Nexus Technologies",
    divisionId: "events",
    divisionName: "Events",
    categoryTag: "Live Streaming",
    year: "2025",
    coverImage: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
    duration: "Live Broadcast",
    description: "8-camera live broadcast engineered with zero-latency failover, simultaneous 4K recording, and interactive stage LED backdrop sync.",
    deliverablesSummary: ["Multi-Camera Vision Mix", "Real-Time 4K Stream", "Same-Night Sizzle Reel", "Full ISO Records"]
  },
  {
    id: "project-04",
    projectNumber: "PROJECT 04",
    title: "Chronos Heritage — Precision Macro Horology",
    client: "Chronos Geneve",
    divisionId: "photography",
    divisionName: "Photography",
    categoryTag: "Products",
    year: "2025",
    coverImage: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop",
    duration: "Macro Stills",
    description: "Macro-focus-stacked studio photography of tourbillon movement gears and sapphire crystal dials under polarized softboxes.",
    deliverablesSummary: ["Focus-Stacked Packshots", "360 Spin Sequence", "E-Commerce Transparent Assets"]
  },
  {
    id: "project-05",
    projectNumber: "PROJECT 05",
    title: "Phantom Velocity — Hypercar Launch Commercial",
    client: "Veloce Motors",
    divisionId: "film-and-video",
    divisionName: "Film & Video",
    categoryTag: "Ad",
    year: "2025",
    coverImage: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200&auto=format&fit=crop",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-car-driving-through-a-mountain-road-at-sunset-41618-large.mp4",
    duration: "00:60",
    description: "High-octane commercial captured with Russian Arm tracking cranes on closed mountain switchbacks with Dolby Atmos sound mix.",
    deliverablesSummary: ["National TV Ad", "Dolby Atmos Audio Mix", "9:16 Social Ads", "Behind-The-Scenes Film"]
  },
  {
    id: "project-06",
    projectNumber: "PROJECT 06",
    title: "The Architecture of Sound — Episodic Podcast",
    client: "Monolith Media Group",
    divisionId: "studio",
    divisionName: "Studio",
    categoryTag: "Podcast",
    year: "2025",
    coverImage: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1200&auto=format&fit=crop",
    duration: "12 Episodes",
    description: "Multi-cam podcast series recorded in our flagship acoustic studio with live dynamic lighting shifts matching conversational tempo.",
    deliverablesSummary: ["Multi-Track Stems", "4K Dynamic Switched Cut", "Social Shorts Package", "YouTube SEO Masters"]
  },
  {
    id: "project-07",
    projectNumber: "PROJECT 07",
    title: "Resonance — Experimental Music Video",
    client: "Kavalier & The Echo",
    divisionId: "film-and-video",
    divisionName: "Film & Video",
    categoryTag: "Music Video",
    year: "2025",
    coverImage: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200&auto=format&fit=crop",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-dj-performing-at-a-nightclub-with-neon-lights-42996-large.mp4",
    duration: "04:12",
    description: "An optical illusion-laden visual journey utilizing custom volumetric lasers and 16mm film grain emulation in post-production.",
    deliverablesSummary: ["Official Music Video", "Teaser Cuts", "Cover Art Still", "Film LUT Preset"]
  },
  {
    id: "project-08",
    projectNumber: "PROJECT 08",
    title: "Kinetic Identity — 3D Motion Brand Architecture",
    client: "Aura Fintech",
    divisionId: "post-production",
    divisionName: "Post-Production",
    categoryTag: "Motion Graphics",
    year: "2025",
    coverImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop",
    duration: "Brand Toolkit",
    description: "Comprehensive 3D procedural branding system featuring abstract glass refraction motifs and tactile audio identity.",
    deliverablesSummary: ["3D Kinetic Logo Suite", "UI Motion Design Tokens", "App Launch Stinger", "Sound Logo"]
  }
];

export interface ContactSheetFrame {
  id: string;
  frameNumber: string;
  title: string;
  division: string;
  aspect: string;
  imageUrl: string;
}

export const CONTACT_SHEET_FRAMES: ContactSheetFrame[] = [
  { id: "cs-01", frameNumber: "01A", title: "Shadow Line Portrait", division: "Photography", aspect: "35mm", imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop" },
  { id: "cs-02", frameNumber: "02A", title: "Cinema Rig Dolly Track", division: "Film & Video", aspect: "35mm", imageUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=800&auto=format&fit=crop" },
  { id: "cs-03", frameNumber: "03A", title: "Sound Stage Spotlight", division: "Studio", aspect: "35mm", imageUrl: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=800&auto=format&fit=crop" },
  { id: "cs-04", frameNumber: "04A", title: "Live Concert Strobe", division: "Events", aspect: "35mm", imageUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800&auto=format&fit=crop" },
  { id: "cs-05", frameNumber: "05A", title: "Editorial Tailoring Still", division: "Photography", aspect: "35mm", imageUrl: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop" },
  { id: "cs-06", frameNumber: "06A", title: "DaVinci Color Grade Pass", division: "Post-Production", aspect: "35mm", imageUrl: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800&auto=format&fit=crop" },
  { id: "cs-07", frameNumber: "07A", title: "Executive Podium Keynote", division: "Events", aspect: "35mm", imageUrl: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop" },
  { id: "cs-08", frameNumber: "08A", title: "Creative Storyboard Study", division: "Creative", aspect: "35mm", imageUrl: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800&auto=format&fit=crop" },
  { id: "cs-09", frameNumber: "09A", title: "Reflective Packshot Lens", division: "Photography", aspect: "35mm", imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop" },
  { id: "cs-10", frameNumber: "10A", title: "Anamorphic Flare Test", division: "Film & Video", aspect: "35mm", imageUrl: "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=800&auto=format&fit=crop" },
  { id: "cs-11", frameNumber: "11A", title: "Audio Mastering Console", division: "Post-Production", aspect: "35mm", imageUrl: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=800&auto=format&fit=crop" },
  { id: "cs-12", frameNumber: "12A", title: "Infinite Cyc Floor Rig", division: "Studio", aspect: "35mm", imageUrl: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=800&auto=format&fit=crop" },
];

export interface VideoShowcaseItem {
  id: string;
  title: string;
  tag: "Brand Film" | "Ad" | "Music Video" | "Corporate" | "YouTube";
  duration: string;
  client: string;
  thumbnailUrl: string;
  videoUrl: string;
}

export const VIDEO_SHOWCASE: VideoShowcaseItem[] = [
  {
    id: "vid-01",
    title: "Origins: The Genesis of Modern Craft",
    tag: "Brand Film",
    duration: "03:14",
    client: "Kallisto Luxury Living",
    thumbnailUrl: "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=1200&auto=format&fit=crop",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-cinematic-mystery-silhouette-in-fog-41551-large.mp4"
  },
  {
    id: "vid-02",
    title: "Zero Friction — Mach-1 Electric Speed",
    tag: "Ad",
    duration: "00:45",
    client: "Volt Motors Global",
    thumbnailUrl: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200&auto=format&fit=crop",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-car-driving-through-a-mountain-road-at-sunset-41618-large.mp4"
  },
  {
    id: "vid-03",
    title: "Echo Chamber ft. Solaris",
    tag: "Music Video",
    duration: "03:52",
    client: "Astral Records",
    thumbnailUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200&auto=format&fit=crop",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-dj-performing-at-a-nightclub-with-neon-lights-42996-large.mp4"
  },
  {
    id: "vid-04",
    title: "Global Vision 2030 Investor Reel",
    tag: "Corporate",
    duration: "04:30",
    client: "Strata Global Holdings",
    thumbnailUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-hands-of-business-people-meeting-at-a-table-41712-large.mp4"
  },
  {
    id: "vid-05",
    title: "The Creator Lab: Episode 1 — Master of Light",
    tag: "YouTube",
    duration: "18:24",
    client: "Luminary Studios",
    thumbnailUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1200&auto=format&fit=crop",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-behind-the-scenes-of-a-filmmaker-with-a-camera-42861-large.mp4"
  },
  {
    id: "vid-06",
    title: "Vessel: Autumn Runway Premiere",
    tag: "Brand Film",
    duration: "01:30",
    client: "Atelier Vanguard",
    thumbnailUrl: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-model-walking-on-a-runway-during-a-fashion-show-42988-large.mp4"
  }
];

export interface DeliverableCard {
  divisionNumber: string;
  microTitle: string;
  sentence: string;
  divisionSlug: string;
}

export const WHAT_WE_DELIVER: DeliverableCard[] = [
  {
    divisionNumber: "01",
    microTitle: "Wedding Photography",
    sentence: "Timeless, cinematic stills and documentary coverage captured without staging or interruption.",
    divisionSlug: "photography"
  },
  {
    divisionNumber: "02",
    microTitle: "Commercial Brand Films",
    sentence: "Cinema-grade narrative campaigns crafted to cement brand authority and inspire emotion.",
    divisionSlug: "film-and-video"
  },
  {
    divisionNumber: "03",
    microTitle: "Multi-Camera Live Streaming",
    sentence: "Broadcast-quality live switched multi-angle coverage with redundant bonded cellular feeds.",
    divisionSlug: "events"
  },
  {
    divisionNumber: "04",
    microTitle: "Strategic Brand Direction",
    sentence: "High-concept scriptwriting, narrative arcs, and storyboard choreographies for all channels.",
    divisionSlug: "creative"
  },
  {
    divisionNumber: "05",
    microTitle: "DaVinci Color & Sound Mastering",
    sentence: "Reference-calibrated color science, spatial sound design, and Dolby Atmos mastering in-house.",
    divisionSlug: "post-production"
  },
  {
    divisionNumber: "06",
    microTitle: "Private Studio Rental",
    sentence: "Acoustically treated studio space with infinity cyclorama, green screen, and pre-rigged lighting.",
    divisionSlug: "studio"
  },
  {
    divisionNumber: "01",
    microTitle: "Macro Product Hero Shots",
    sentence: "Precision-focused e-commerce packshots and dramatic hero lighting for luxury consumer goods.",
    divisionSlug: "photography"
  },
  {
    divisionNumber: "05",
    microTitle: "2D / 3D Kinetic Motion Graphics",
    sentence: "Fluid UI animation, kinetic typography, 3D product renders, and visual effects compositing.",
    divisionSlug: "post-production"
  }
];

export interface Differentiator {
  number: string;
  microHeadline: string;
  description: string;
}

export const WHY_ARCC: Differentiator[] = [
  {
    number: "01",
    microHeadline: "Single Point of Contact",
    description: "One unified executive producer oversees your concept from opening brief to final master delivery, eliminating messy agency-to-crew communication breakdowns."
  },
  {
    number: "02",
    microHeadline: "In-House Post-Production Suite",
    description: "We do not outsource color or sound. Our dedicated editors, colorists, and sound designers work directly beside our directors under the same roof."
  },
  {
    number: "03",
    microHeadline: "Dedicated Private Studio Space",
    description: "Complete control over acoustic treatment, lighting grids, cyclorama infinity walls, and green screens without booking separate rental houses."
  },
  {
    number: "04",
    microHeadline: "Multi-Camera Crew & Cinema Gear",
    description: "Fully owned cinema-grade camera bodies, anamorphic glass, wireless monitoring packages, and heavy-duty camera motion rigs ready to deploy."
  },
  {
    number: "05",
    microHeadline: "Concept-To-Delivery Under One Team",
    description: "Walk in with a napkin sketch or rough idea and walk out with broadcast-ready assets, high-res stills, and targeted social cutdowns."
  },
  {
    number: "06",
    microHeadline: "Rapid Turnaround Times",
    description: "Streamlined on-set media offloading and parallel post workflows enable same-night event highlight drops and aggressive commercial delivery schedules."
  }
];

export interface ProcessStepItem {
  step: string;
  title: string;
  summary: string;
  iconType: "brief" | "concept" | "shoot" | "post" | "delivery";
  details: string;
}

export const PROCESS_TIMELINE: ProcessStepItem[] = [
  {
    step: "01",
    title: "Brief & Discovery",
    summary: "Aligning creative objectives, scope, timeline, and measurable success metrics.",
    iconType: "brief",
    details: "We start by breaking down your core audience, brand tone, visual references, and timeline constraints to build a concrete project charter."
  },
  {
    step: "02",
    title: "Concept & Script",
    summary: "Drafting script dialogue, shot lists, visual storyboards, and moodboards.",
    iconType: "concept",
    details: "Our creative team authors the narrative arc, prepares detailed frame-by-frame visual boards, and handles casting/location permits."
  },
  {
    step: "03",
    title: "Principal Shoot",
    summary: "Cinema cameras roll on location or in our pre-lit studio with live client monitoring.",
    iconType: "shoot",
    details: "Tethered high-res capture, multi-camera choreography, and calibrated lighting executed by our experienced on-set crew."
  },
  {
    step: "04",
    title: "Post-Production",
    summary: "Assembly editing, DaVinci Resolve color grading, motion graphics, and audio mix.",
    iconType: "post",
    details: "Your project enters our calibrated suites for editorial pacing, reference color calibration, sound design, and client review cycles."
  },
  {
    step: "05",
    title: "Master Delivery",
    summary: "Full-resolution master exports, web encodings, and multi-channel asset packs.",
    iconType: "delivery",
    details: "Final delivery across broadcast ProRes 4444, digital social cuts, raw stills archives, and permanent cloud vault access."
  }
];
