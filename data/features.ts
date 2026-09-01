export interface StudioFeature {
  id: string;
  title: string;
  subtitle?: string;
  icon: string;
}

export const STUDIO_FEATURES: StudioFeature[] = [
  {
    id: 'ac',
    title: 'Air-Conditioned',
    icon: 'ac',
  },
  {
    id: 'coffee',
    title: 'Coffee & Beverages',
    icon: 'coffee',
  },
  {
    id: 'dining',
    title: 'Dining & Breaks',
    icon: 'dining',
  },
  {
    id: 'lighting',
    title: 'Godox Lighting',
    icon: 'lighting',
  },
  {
    id: 'lobby',
    title: 'Guest Lobby',
    icon: 'lobby',
  },
  {
    id: 'makeup',
    title: 'Makeup & Changing Room',
    icon: 'makeup',
  },
  {
    id: 'monitor',
    title: 'Multicam Monitor',
    icon: 'monitor',
  },
  {
    id: 'props',
    title: 'Props & Décor',
    icon: 'props',
  },
  {
    id: 'mics',
    title: 'Rode Podcast Mics',
    icon: 'mics',
  },
  {
    id: 'cameras',
    title: 'Sony Cineline Cameras',
    icon: 'cameras',
  },
  {
    id: 'soundproof',
    title: 'Soundproof Studio',
    icon: 'soundproof',
  },
  {
    id: 'space',
    title: 'Spacious Space',
    subtitle: '(27 x 16)',
    icon: 'space',
  },
  {
    id: 'sofas',
    title: '2 Sofas · 2 Colours',
    icon: 'sofas',
  },
  {
    id: 'armchairs',
    title: '6 Armchairs · 2 Colours',
    icon: 'armchairs',
  },
];
