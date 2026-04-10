import { Service } from '@/types';

export const NAV_ITEMS = [
  'Home',
  'About',
  'Service',
  'Resume',
  'Project',
  'Contact',
] as const;

export const SERVICES: Service[] = [
  {
    id: 1,
    title: 'UI / UX Design',
    image: '/images/service-1.webp',
  },
  {
    id: 2,
    title: 'Web Design',
    image: '/images/service-2.webp',
  },
  {
    id: 3,
    title: 'Landing Page',
    image: '/images/service-3.webp',
  },
];