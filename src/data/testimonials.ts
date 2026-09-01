export interface Testimonial {
  id: string;
  quote: string;
  clientName: string;
  role: string;
  company: string;
  projectType: string;
  rating: number;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-01",
    quote: "ARCC produced our global brand film and campaign stills simultaneously. The cohesion across photo and video was something no multi-agency setup has ever delivered for us. Flawless execution.",
    clientName: "Elena Rostova",
    role: "Chief Marketing Officer",
    company: "Aethelgard Dynamics",
    projectType: "Brand Film & Campaign Stills",
    rating: 5
  },
  {
    id: "test-02",
    quote: "From initial storyboards to the final DaVinci color grade, ARCC felt like an extension of our internal team. They delivered our TV commercial 4 days ahead of deadline with zero compromises on quality.",
    clientName: "Marcus Thorne",
    role: "Brand Director",
    company: "Veloce Motors",
    projectType: "Commercial Ad & VFX",
    rating: 5
  },
  {
    id: "test-03",
    quote: "Their studio space is unmatched. We booked their podcast stage and infinity cyc for a 3-day marathon shoot. Pre-lit, soundproofed, and the on-site tech crew was exceptionally responsive.",
    clientName: "Sarah Chen",
    role: "Head of Content",
    company: "Monolith Media Group",
    projectType: "Studio Rental & Multi-Cam Podcast",
    rating: 5
  },
  {
    id: "test-04",
    quote: "ARCC handled our 3-day international tech summit with 8 live cameras, streaming to over 120,000 live viewers worldwide without a single glitch. Their same-night recap video stole the show.",
    clientName: "David K. Vance",
    role: "VP of Global Events",
    company: "Nexus Technologies",
    projectType: "Multi-Camera Live Stream & Highlights",
    rating: 5
  },
  {
    id: "test-05",
    quote: "The macro product photography and 3D kinetic motion assets created for our luxury watch launch directly elevated our brand perception and drove record pre-orders.",
    clientName: "Julian Duprès",
    role: "Creative Director",
    company: "Chronos Geneve",
    projectType: "Product Photography & 3D Motion",
    rating: 5
  }
];

export const TESTIMONIAL_STATS = {
  averageRating: "5.0",
  totalReviews: "140+",
  satisfiedRate: "99.4%",
  projectsDelivered: "650+"
};
