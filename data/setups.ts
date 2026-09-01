export interface SetupGalleryItem {
  image: string;
  alt: string;
}

export interface PodcastSetup {
  index: string;
  title: string;
  desc: string;
  tag: string;
  capacity: string;
  cameras: string;
  audio: string;
  bestFor: string;
  image: string;
  gallery: SetupGalleryItem[];
}

export const PODCAST_SETUPS: PodcastSetup[] = [
  {
    index: '01',
    title: 'Brand Bookshelf Setup',
    tag: 'Setup 01',
    capacity: '2 Guests',
    cameras: '3x 4K Cinema Line',
    audio: '2x Shure SM7B + Rode Boom',
    bestFor: 'Founder & Leadership Podcasts',
    desc: 'Charcoal armchairs with a warm oak bookshelf backdrop and sound-treated walls for authoritative, polished leadership and expert conversations.',
    image: '/images/setups/setup-brand-grey.jpg',
    gallery: [
      {
        image: '/images/setups/setup-brand-grey.jpg',
        alt: 'Brand bookshelf podcast studio with charcoal armchairs, wooden bookshelf, and broadcast microphones at ARCC Media Production',
      },
    ],
  },
  {
    index: '02',
    title: 'Warm Acoustic Lounge',
    tag: 'Setup 02',
    capacity: '2 Guests',
    cameras: '3x 4K Sony FX6/FX3',
    audio: '2x Shure SM7B Broadcast Mics',
    bestFor: 'Casual Interviews & Creator Shows',
    desc: 'Warm terracotta fluted acoustic wood paneling with soft ambient lighting and plush cream lounge chairs for relaxed storytelling and creator series.',
    image: '/images/setups/setup-warm-lounge.jpg',
    gallery: [
      {
        image: '/images/setups/setup-warm-lounge.jpg',
        alt: 'Warm lounge podcast studio with cream armchairs, fluted wood backdrop, and warm lighting at ARCC Media Production',
      },
    ],
  },
  {
    index: '03',
    title: 'Executive Dark Studio',
    tag: 'Setup 03',
    capacity: '2 Guests',
    cameras: '3x Sony Cinema 4K',
    audio: '2x Rode PodMic / SM7B',
    bestFor: 'VC, Tech & Corporate Shows',
    desc: 'Charcoal slate acoustic panels with brass inlays, moody cinematic key lighting, and dark leather club chairs for high-impact executive dialogues.',
    image: '/images/setups/setup-executive-dark.jpg',
    gallery: [
      {
        image: '/images/setups/setup-executive-dark.jpg',
        alt: 'Executive dark podcast studio with leather club chairs, slate walls, and brass accents at ARCC Media Production',
      },
    ],
  },
  {
    index: '04',
    title: 'Royal Blue Production Stage',
    tag: 'Setup 04',
    capacity: '2–3 Guests',
    cameras: '4x Sony Multi-Cam Rig',
    audio: 'Multi-channel Audio Monitored',
    bestFor: 'Talking Head, Brand Series & D2C',
    desc: 'Vivid cobalt-blue stage with geometric ambient backlighting, overhead softboxes, and teleprompter-ready framing for vibrant modern video shows.',
    image: '/images/setups/setup-royal-blue.jpg',
    gallery: [
      {
        image: '/images/setups/setup-royal-blue.jpg',
        alt: 'Royal blue podcast studio stage with geometric lighting, monitors, and broadcast mics at ARCC Media Production',
      },
    ],
  },
  {
    index: '05',
    title: 'Multi-Guest Roundtable',
    tag: 'Setup 05',
    capacity: '4 Guests',
    cameras: '4x 4K Independent Feeds',
    audio: '4x Shure SM7B + Cloudlifters',
    bestFor: 'Group Panels & Debate Podcasts',
    desc: 'Circular dark walnut conference table with four ergonomic navy armchairs, warm suspended lighting, and dedicated 4-camera isolation feeds for group panels.',
    image: '/images/setups/setup-round-table.jpg',
    gallery: [
      {
        image: '/images/setups/setup-round-table.jpg',
        alt: 'Multi-guest roundtable podcast studio with 4 armchairs, circular table, and 4 microphones at ARCC Media Production',
      },
    ],
  },
  {
    index: '06',
    title: 'White Infinity Cyclorama',
    tag: 'Setup 06',
    capacity: '1–3 Guests',
    cameras: 'Sony FX6 4K High-Key Rig',
    audio: 'Wireless Lav + Boom Mics',
    bestFor: 'Keynotes, Product Launches & Ads',
    desc: 'Seamless curved white cyclorama with ceiling softbox grid and clean minimalist seating for high-key commercial interviews, portraits, and product launches.',
    image: '/images/setups/setup-white-infinity.jpg',
    gallery: [
      {
        image: '/images/setups/setup-white-infinity.jpg',
        alt: 'White infinity cyclorama studio stage with minimalist leather seating and overhead grid at ARCC Media Production',
      },
    ],
  },
];
