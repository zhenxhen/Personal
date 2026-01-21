import { DeviceType, Project, WorkItem } from './types';

export const PLATFORM_CONCEPTS: Project[] = [
  {
    id: 'xr-calendar',
    title: 'Spatial Experience',
    category: 'Spatial Computing',
    deviceType: DeviceType.XR_HEADSET,

    details: 'An infinite canvas that transcends physical boundaries. It provides deep immersion through natural interaction with your gaze and gestures.',
    color: '#8b5cf6', // Violet
    position: [0, 1.0, -0.5] // Floating above desk center
  },
  {
    id: 'mobile-music',
    title: 'Mobile Experience',
    category: 'On-the-Go',
    deviceType: DeviceType.MOBILE,
    details: 'The most personal and immediate device. It provides new experiences intuitively and efficiently within the user\'s daily life.',
    color: '#ec4899', // Pink
    position: [-1.2, 0.15, 0.8] // Front left on desk
  },
  {
    id: 'tablet-reminder',
    title: 'Large-Screen Experience',
    category: 'Productivity',
    deviceType: DeviceType.TABLET,

    details: 'Designs workflows utilizing tablets and foldable devices. Delivers across the boundaries of mobile and desktop.',
    color: '#3b82f6', // Blue
    position: [1.5, 0.15, 0.2] // Right side on desk
  },
  {
    id: 'watch-alarm',
    title: 'Wearable Experience',
    category: 'Wearable',
    deviceType: DeviceType.WATCH,

    details: 'The device that understands your context most intimately. Managing user data, it accompanies you through your daily life.',
    color: '#10b981', // Emerald
    position: [0.2, 0.08, 1.2] // Front center on desk
  }
];

// Re-export as PROJECTS for backward compatibility if needed, or refactor consumers
export const PROJECTS = PLATFORM_CONCEPTS;

export const MONITOR_DATA: Project = {
  id: 'monitor',
  title: 'Web Design',
  category: 'Development',
  deviceType: DeviceType.MONITOR,

  details: 'Delivers digital experiences that satisfy both performance and aesthetics by leveraging the latest web standards technologies.',
  color: '#000000',
  position: [0, 0, 0] // Static position handled in Experience
};

export const HEADPHONE_DATA: Project = {
  id: 'headphone',
  title: 'Play Ground',
  category: 'Creative',
  deviceType: DeviceType.HEADPHONE,

  details: 'Personal Interactive Lab. Explore a collection of synesthetic digital artworks combining music, sound effects, and visual elements.',
  color: '#333333',
  position: [0, 0, 0] // Static position handled in Experience
};

export const NAVIGATION_ORDER = [
  'tablet-reminder',
  'mobile-music',
  'watch-alarm',
  'monitor',
  'xr-calendar',
  'headphone'
];

export const WORK_ITEMS: WorkItem[] = [
  {
    id: 'work-1',
    title: 'Efficient Daily Experiences',
    category: 'Reminder App',
    image: '/Personal/tumbnail/1.png',
    year: '2025'
  },
  {
    id: 'work-2',
    title: 'Shared Schedule Experience',
    category: 'Calendar App',
    image: '/Personal/tumbnail/2.png',
    year: '2025'
  },
  {
    id: 'work-3',
    title: 'Productive Widget Management',
    category: 'Widget Optimization',
    image: '/Personal/tumbnail/3.png',
    year: '2024'
  },
  {
    id: 'work-4',
    title: 'Aesthetic Time Management',
    category: 'Clock App',
    image: '/Personal/tumbnail/4.png',
    year: '2024'
  },
  {
    id: 'work-5',
    title: 'Social Critique Computing',
    category: 'Creative Computing Project',
    image: '/Personal/tumbnail/5.png',
    year: '2025'
  },
  {
    id: 'work-6',
    title: 'Universal Wearable Product',
    category: 'Wearable Computing Project',
    image: '/Personal/tumbnail/6.png',
    year: '2023'
  }
];