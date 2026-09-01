export interface SetupGalleryItem {
  image: string;
  alt: string;
}

export interface PodcastSetup {
  index: string;
  title: string;
  desc: string;
  tag: string;
  image: string;
  gallery: SetupGalleryItem[];
}

export const PODCAST_SETUPS: PodcastSetup[] = [
  {
    index: '01',
    title: 'Brand Grey Setup',
    tag: 'Setup 01',
    desc: 'Grey armchairs with a full wooden bookshelf backdrop and textured grey walls for polished, brand-safe leadership and expert conversations.',
    image: 'https://winterfox.studio/img/podcast-experience/brand-grey-setup.jpg',
    gallery: [
      {
        image: 'https://winterfox.studio/img/podcast-experience/brand-grey-setup.jpg',
        alt: 'Brand grey podcast studio with grey armchairs, wooden bookshelf, and professional microphones at ARCC Media Production',
      },
    ],
  },
  {
    index: '02',
    title: 'Brand Beige Setup',
    tag: 'Setup 02',
    desc: 'Warm beige armchairs with interchangeable backdrops—open shelving, gallery wall, or round coffee table—for relaxed creator and interview formats.',
    image: 'https://winterfox.studio/img/podcast-experience/brand-beige-setup-bookshelf.jpg',
    gallery: [
      {
        image: 'https://winterfox.studio/img/podcast-experience/brand-beige-setup-bookshelf.jpg',
        alt: 'Brand beige podcast studio with cream armchairs, round wood table, and professional microphones at ARCC Media Production',
      },
      {
        image: 'https://winterfox.studio/img/podcast-experience/brand-beige-setup-wall.jpg',
        alt: 'Brand beige podcast studio with armchairs, grey wall decor, and warm accent lighting at ARCC Media Production',
      },
      {
        image: 'https://winterfox.studio/img/podcast-experience/brand-beige-setup-shelving.jpg',
        alt: 'Brand beige podcast studio with facing armchairs, black shelving backdrop, and boom microphones at ARCC Media Production',
      },
      {
        image: 'https://winterfox.studio/img/podcast-experience/brand-beige-setup.jpg',
        alt: 'Brand beige podcast studio with cream armchairs, wooden bookshelf backdrop, and round coffee table at ARCC Media Production',
      },
    ],
  },
  {
    index: '03',
    title: 'Custom Brand Setup',
    tag: 'Setup 03',
    desc: 'Terracotta-walled set with grey armchairs and bookshelf styling, adaptable to custom colours, furniture, and brand elements for your show identity.',
    image: 'https://winterfox.studio/img/podcast-experience/custom-brand-setup-warm.png',
    gallery: [
      {
        image: 'https://winterfox.studio/img/podcast-experience/custom-brand-setup-warm.png',
        alt: 'Custom brand podcast studio with grey armchairs, terracotta wall, bookshelf backdrop, and studio lighting at ARCC Media Production',
      },
      {
        image: 'https://winterfox.studio/img/slider/landing10.jpg',
        alt: 'Custom brand podcast studio with cream armchairs, red accent wall, and portrait gallery at ARCC Media Production',
      },
    ],
  },
  {
    index: '04',
    title: 'Royal Blue Setup',
    tag: 'Setup 04',
    desc: 'Vivid blue-wall stage with desk or open-floor layout, overhead Godox lighting, and teleprompter-ready framing for talking-head and direct-to-camera formats.',
    image: 'https://winterfox.studio/img/slider/landing5.jpg',
    gallery: [
      {
        image: 'https://winterfox.studio/img/slider/landing5.jpg',
        alt: 'Royal blue podcast studio with white desk, office chair, and professional lighting at ARCC Media Production',
      },
      {
        image: 'https://winterfox.studio/img/podcast-experience/royal-blue-setup-studio.png',
        alt: 'Royal blue podcast studio with overhead Godox lighting, shelving, and wood floor at ARCC Media Production',
      },
    ],
  },
  {
    index: '05',
    title: 'Dark Premium Setup',
    tag: 'Setup 05',
    desc: 'Black drape backdrop with cream armchairs, decorative shelving, and overhead softboxes for moody, cinematic founder and leadership podcasts.',
    image: 'https://winterfox.studio/img/podcast-experience/dark-premium-setup-studio.jpg',
    gallery: [
      {
        image: 'https://winterfox.studio/img/podcast-experience/dark-premium-setup-studio.jpg',
        alt: 'Dark premium podcast studio with cream armchairs, black drapes, overhead softboxes, and professional microphones at ARCC Media Production',
      },
      {
        image: 'https://winterfox.studio/img/podcast-experience/dark-premium-setup.png',
        alt: 'Dark premium podcast studio with cream armchairs, octagonal softboxes, and warm accent lighting at ARCC Media Production',
      },
    ],
  },
  {
    index: '06',
    title: 'Round Table Setup',
    tag: 'Setup 06',
    desc: 'Teal velvet armchairs around a dark wood round table with warm pendant lighting and dual boom mics for intimate face-to-face conversations.',
    image: 'https://winterfox.studio/img/podcast-experience/round-table-setup.jpg',
    gallery: [
      {
        image: 'https://winterfox.studio/img/podcast-experience/round-table-setup.jpg',
        alt: 'Round table podcast studio with teal velvet armchairs, dark wood pedestal table, and professional microphones at ARCC Media Production',
      },
    ],
  },
  {
    index: '07',
    title: 'Three Seater Setup',
    tag: 'Setup 07',
    desc: 'Beige three-seater sofa with dual boom mics—full ARCC studio lighting or a warm styled living-room look for relaxed group and interview formats.',
    image: 'https://winterfox.studio/img/podcast-experience/one-on-one-three-seater-studio.jpg',
    gallery: [
      {
        image: 'https://winterfox.studio/img/podcast-experience/one-on-one-three-seater-studio.jpg',
        alt: 'Three seater podcast studio with beige sofa, ARCC Media Production studio setup, overhead softboxes, and boom microphones',
      },
      {
        image: 'https://winterfox.studio/img/podcast-experience/one-on-one-three-seater-setup.jpg',
        alt: 'Three seater podcast studio with beige sofa, warm accent lighting, and styled living-room backdrop at ARCC Media Production',
      },
    ],
  },
  {
    index: '08',
    title: 'Four Seater Setup',
    tag: 'Setup 08',
    desc: 'Four armchairs around a round wood coffee table with pink and blue seating, sideboard backdrop, and overhead mic for panel discussions and group podcast formats.',
    image: 'https://winterfox.studio/img/podcast-experience/four-seater-setup.jpg',
    gallery: [
      {
        image: 'https://winterfox.studio/img/podcast-experience/four-seater-setup.jpg',
        alt: 'Four seater podcast studio with pink and blue armchairs, round wood table, and sideboard backdrop at ARCC Media Production',
      },
    ],
  },
  {
    index: '09',
    title: 'White Infinity Setup',
    tag: 'Setup 09',
    desc: 'White seamless infinity cove with bar stool, overhead softboxes, and full camera rig for high-key portraits, product shots, and minimalist on-camera formats.',
    image: 'https://winterfox.studio/img/podcast-experience/white-infinity-setup.jpg',
    gallery: [
      {
        image: 'https://winterfox.studio/img/podcast-experience/white-infinity-setup.jpg',
        alt: 'White infinity podcast studio with seamless backdrop, bar stool, overhead softboxes, and professional camera at ARCC Media Production',
      },
    ],
  },
  {
    index: '10',
    title: 'Green Infinity Setup',
    tag: 'Setup 10',
    desc: 'Green seamless chroma key cove with dual cameras, overhead softboxes, and even lighting for virtual backgrounds, VFX compositing, and flexible branded content.',
    image: 'https://winterfox.studio/img/podcast-experience/green-infinity-setup.jpg',
    gallery: [
      {
        image: 'https://winterfox.studio/img/podcast-experience/green-infinity-setup.jpg',
        alt: 'Green infinity podcast studio with seamless chroma key backdrop, dual cameras on tripods, and professional lighting at ARCC Media Production',
      },
    ],
  },
];
