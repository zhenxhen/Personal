export enum DeviceType {
  XR_HEADSET = 'XR_HEADSET',
  MOBILE = 'MOBILE',
  TABLET = 'TABLET',
  WATCH = 'WATCH',
  MONITOR = 'MONITOR',
  HEADPHONE = 'HEADPHONE'
}

export interface Project {
  id: string;
  title: string;
  category: string;
  deviceType: DeviceType;
  description: string;
  details: string; // Static detailed description
  color: string;
  position: [number, number, number];
}
