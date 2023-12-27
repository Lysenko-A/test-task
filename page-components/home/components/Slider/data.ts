import { StaticImageData } from 'next/image';

import avatarIconUrl from '@/public/home/slider-avatar.png';

interface SliderData {
  id: number;
  avatarUrl: StaticImageData;
  name: string;
  text: string;
}

export const SLIDER_DATA: SliderData[] = [
  {
    id: 1,
    avatarUrl: avatarIconUrl,
    name: 'Julie Ruberta',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo eget velit non luctus. Duis at enim eu elit facilisis fermentum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo eget velit non luctus. Duis at enim eu elit facilisis fermentum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed  non luctus. '
  },
  {
    id: 2,
    avatarUrl: avatarIconUrl,
    name: 'Joe Doe',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo eget velit non luctus. Duis at enim eu elit facilisis fermentum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo eget velit non luctus.'
  },
  {
    id: 3,
    avatarUrl: avatarIconUrl,
    name: 'Lorem Ipsum',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo eget velit non luctus. Duis at enim eu elit facilisis fermentum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo eget velit non luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
];
