export type StudioService = {
  slug: string;
  number: string;
  title: string;
  eyebrow: string;
  detail: string;
  summary: string;
  statement: string;
  image: string;
  secondaryImage: string;
  tertiaryImage: string;
  offerings: string[];
  process: { label: string; copy: string }[];
};

export const services: StudioService[] = [
  {
    slug: 'photography',
    number: '01',
    title: 'Photography',
    eyebrow: 'Still images with a pulse',
    detail: 'Weddings · Fashion · Products · Corporate · Portraits',
    summary: 'Photographs with enough restraint to feel current years from now—and enough character to stay with you.',
    statement: 'The image is not a record. It is the feeling that remains after the room has cleared.',
    image: '/images/setups/setup-white-infinity.jpg',
    secondaryImage: '/images/setups/setup-warm-lounge.jpg',
    tertiaryImage: '/images/setups/setup-brand-grey.jpg',
    offerings: ['Weddings & celebrations', 'Fashion & editorial', 'Product & e-commerce', 'Corporate portraits', 'Personal portraiture', 'Campaign stills'],
    process: [
      { label: 'Find the light', copy: 'We start with the person, product or moment—then choose the frame that makes it matter.' },
      { label: 'Build the frame', copy: 'Direction, lighting and styling come together without making the room feel overworked.' },
      { label: 'Finish with feeling', copy: 'A considered edit keeps the work cohesive, human and unmistakably yours.' },
    ],
  },
  {
    slug: 'film-video',
    number: '02',
    title: 'Film & Video',
    eyebrow: 'Motion that holds attention',
    detail: 'Brand Films · Ads · Corporate · Music Videos · YouTube',
    summary: 'From a close-held founder story to a big campaign film, we make motion with clarity, rhythm and a reason to watch again.',
    statement: 'Good video moves more than the camera. It moves the person on the other side of the screen.',
    image: '/images/setups/setup-executive-dark.jpg',
    secondaryImage: '/images/setups/setup-round-table.jpg',
    tertiaryImage: '/images/setups/setup-royal-blue.jpg',
    offerings: ['Brand films', 'Commercials & digital ads', 'Corporate stories', 'Music videos', 'YouTube formats', 'Founder interviews'],
    process: [
      { label: 'Name the story', copy: 'We reduce the brief to one sharp idea the audience can feel in the first few seconds.' },
      { label: 'Shape the shoot', copy: 'A practical production plan gives the camera, light and talent room to do their best work.' },
      { label: 'Cut the rhythm', copy: 'The final edit balances pace, performance, sound and the details that make a film linger.' },
    ],
  },
  {
    slug: 'events',
    number: '03',
    title: 'Events',
    eyebrow: 'The room, remembered',
    detail: 'Photo · Cinema · Multi-Camera · Live Streaming',
    summary: 'Live work is all timing. Our crew works calmly inside the movement, catching the scale, the detail and the moments in between.',
    statement: 'An event moves fast. The right coverage lets it keep moving long after it is over.',
    image: '/images/setups/setup-round-table.jpg',
    secondaryImage: '/images/setups/setup-brand-grey.jpg',
    tertiaryImage: '/images/setups/setup-executive-dark.jpg',
    offerings: ['Event photography', 'Cinematic event films', 'Multi-camera coverage', 'Live streaming', 'Conference & summit coverage', 'Same-day social edits'],
    process: [
      { label: 'Map the moment', copy: 'We understand the run of show, access, key people and the moments that cannot be missed.' },
      { label: 'Cover with calm', copy: 'A clear crew plan means complete coverage without turning the event into a production set.' },
      { label: 'Deliver while it matters', copy: 'Priority selects and social-ready edits can begin moving while the conversation is still live.' },
    ],
  },
  {
    slug: 'creative',
    number: '04',
    title: 'Creative',
    eyebrow: 'An idea with a spine',
    detail: 'Concept · Script · Storyboard · Campaigns · Branding',
    summary: 'Before a camera rolls, the work needs a point of view. We turn a loose brief into an idea people can recognise on sight.',
    statement: 'The most useful creative direction is not louder. It makes every next decision easier.',
    image: '/images/setups/setup-royal-blue.jpg',
    secondaryImage: '/images/setups/setup-white-infinity.jpg',
    tertiaryImage: '/images/setups/setup-warm-lounge.jpg',
    offerings: ['Campaign concepts', 'Scripts & treatments', 'Storyboards', 'Brand language', 'Content systems', 'Creative production direction'],
    process: [
      { label: 'Question the brief', copy: 'We find the tension, audience and cultural truth that gives the work something to say.' },
      { label: 'Make it visible', copy: 'Words become references, scripts, storyboards and a visual language the whole team can use.' },
      { label: 'Carry it through', copy: 'Direction stays close to the production so the original idea arrives intact on screen.' },
    ],
  },
  {
    slug: 'post-production',
    number: '05',
    title: 'Post-Production',
    eyebrow: 'Where it becomes the work',
    detail: 'Editing · Colour · Motion Graphics · Sound',
    summary: 'The last pass is where a project becomes coherent. We shape raw material into work with pace, polish and a distinct voice.',
    statement: 'Post is not the end of a project. It is where the project decides what it wants to be.',
    image: '/images/setups/setup-warm-lounge.jpg',
    secondaryImage: '/images/setups/setup-executive-dark.jpg',
    tertiaryImage: '/images/setups/setup-white-infinity.jpg',
    offerings: ['Offline & online edits', 'Colour grading', 'Motion graphics', 'Sound design & mix', 'Vertical social cutdowns', 'Mastering & delivery'],
    process: [
      { label: 'Find the edit', copy: 'We identify the emotional line first, then begin shaping every cut around it.' },
      { label: 'Give it texture', copy: 'Colour, typography, music and sound design add the finish without stealing focus.' },
      { label: 'Make it travel', copy: 'Every master and cutdown is prepared for the screens and channels where it needs to work.' },
    ],
  },
  {
    slug: 'studio',
    number: '06',
    title: 'Studio',
    eyebrow: 'A room ready for ideas',
    detail: 'Studio Rental · Podcast · Product Shoots · Green Screen',
    summary: 'A practical Bangalore studio with the quiet, flexibility and technical support to let a good session become a great one.',
    statement: 'A good room gives the work somewhere to begin. A great one makes the rest feel possible.',
    image: '/images/setups/setup-brand-grey.jpg',
    secondaryImage: '/images/setups/setup-white-infinity.jpg',
    tertiaryImage: '/images/setups/setup-round-table.jpg',
    offerings: ['Podcast recording', 'Studio rental', 'Product shoots', 'Green screen setup', 'Multi-camera interviews', 'Lighting & sound support'],
    process: [
      { label: 'Plan the room', copy: 'Tell us the format, people and intended output. We will recommend the most useful setup.' },
      { label: 'Set it quietly', copy: 'Camera, light and sound are handled before the talent arrives so the session starts relaxed.' },
      { label: 'Leave with more', copy: 'Take away clean raw footage, edited deliverables, or a post-production plan that keeps moving.' },
    ],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
