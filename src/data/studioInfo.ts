export interface StudioAmenity {
  id: string;
  name: string;
  description: string;
  iconName: "grid" | "mic" | "video" | "monitor" | "wind" | "wifi" | "coffee" | "lock";
}

export const STUDIO_AMENITIES: StudioAmenity[] = [
  {
    id: "amenity-1",
    name: "Infinity Cyclorama",
    description: "3-sided pristine white infinity curve with motorized RGB ceiling wash.",
    iconName: "grid"
  },
  {
    id: "amenity-2",
    name: "Green Screen Stage",
    description: "Evenly lit Chroma Key green wall engineered for clean edge compositing.",
    iconName: "video"
  },
  {
    id: "amenity-3",
    name: "Podcast Acoustic Suite",
    description: "Sound-isolated booth with 4x Shure SM7B mics and multi-cam broadcast switching.",
    iconName: "mic"
  },
  {
    id: "amenity-4",
    name: "Studio Lighting Kit",
    description: "Aputure 600d/1200d, Nanlite Pavotubes, motorized truss grid, and c-stands included.",
    iconName: "grid"
  },
  {
    id: "amenity-5",
    name: "Multi-Cam Monitoring",
    description: "Wireless calibrated client monitors with real-time video assist in client lounge.",
    iconName: "monitor"
  },
  {
    id: "amenity-6",
    name: "Climate Controlled & Silent AC",
    description: "Ultra-quiet HVAC system designed to run during active sound recording.",
    iconName: "wind"
  },
  {
    id: "amenity-7",
    name: "Gigabit Fiber Internet",
    description: "Dedicated symmetrical 1Gbps fiber connection with on-site cloud offload servers.",
    iconName: "wifi"
  },
  {
    id: "amenity-8",
    name: "Green Room & Hair/Makeup",
    description: "Private VIP dressing suite, lighted vanity mirrors, steamer, and espresso bar.",
    iconName: "coffee"
  }
];

export const STUDIO_SPECS = {
  totalArea: "4,500 SQ FT",
  ceilingHeight: "18 FT CLEAR",
  powerSupply: "3-PHASE 200A CAMLOCK",
  soundIsolation: "NC-25 ACOUSTIC RATING",
  driveInAccess: "14FT ROLL-UP DOOR",
  parking: "25 RESERVED VEHICLE BAYS"
};

export const COMPANY_CONTACT = {
  name: "ARCC Media Production",
  legalName: "ARCC Studios & Media Production LLC",
  tagline: "End-to-End Media Production House",
  phoneDisplay: "+1 (800) 492-ARCC",
  phoneRaw: "+18004922722",
  whatsappDisplay: "+1 (555) 019-ARCC",
  whatsappRaw: "15550192722",
  email: "hello@arccmedia.studio",
  bookingsEmail: "bookings@arccmedia.studio",
  addressLine1: "104 Studio Row, Production District",
  addressLine2: "Sound Stage 4, Building B",
  city: "Los Angeles",
  state: "CA",
  postalCode: "90028",
  country: "United States",
  hours: "Monday – Saturday: 08:00 AM – 09:00 PM | 24/7 Crew On Demand",
  socials: [
    { name: "Instagram", url: "https://instagram.com", handle: "@arccmedia" },
    { name: "Vimeo", url: "https://vimeo.com", handle: "arccproduction" },
    { name: "YouTube", url: "https://youtube.com", handle: "@arccmedia" },
    { name: "LinkedIn", url: "https://linkedin.com", handle: "arcc-media-production" }
  ]
};
