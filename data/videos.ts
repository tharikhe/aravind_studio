export interface PodcastVideo {
  id: string;
  youtubeId: string;
  category: string;
  title: string;
  thumbnail?: string;
}

export const PODCAST_VIDEOS: PodcastVideo[] = [
  {
    id: 'vid-1',
    youtubeId: '5CK-_zWG9xw',
    category: 'Podcast Interview',
    title: 'Founder interview recorded at ARCC Media Production',
  },
  {
    id: 'vid-2',
    youtubeId: 'gfUhJ83LjYk',
    category: 'Leadership Talk',
    title: 'Leadership conversation filmed in studio',
  },
  {
    id: 'vid-3',
    youtubeId: 'ZqtRr41dUzk',
    category: 'Brand Story',
    title: 'Brand story podcast session',
  },
  {
    id: 'vid-4',
    youtubeId: 'p7jmb9kmR_0',
    category: 'Expert Interview',
    title: 'Expert interview with multi-camera coverage',
  },
  {
    id: 'vid-5',
    youtubeId: 'upCl-oXkIB4',
    category: 'Studio Session',
    title: 'In-studio podcast recording session',
  },
  {
    id: 'vid-6',
    youtubeId: 'mfskJ2oP7uw',
    category: 'Podcast Episode',
    title: 'Long-form podcast episode at ARCC Media Production',
  },
  {
    id: 'vid-7',
    youtubeId: 'Y4hj5Qbsqu0',
    category: 'Brand Story',
    title: 'The Big Bear Story: What it Takes to Build a Menswear Brand in India',
  },
];
