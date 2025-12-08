import { DeviceType, Project } from './types';

export const PLATFORM_CONCEPTS: Project[] = [
  {
    id: 'xr-calendar',
    title: 'XR Experience',
    category: 'Spatial Computing',
    deviceType: DeviceType.XR_HEADSET,
    description: '공간의 깊이를 활용한 몰입형 UX',
    details: '물리적 한계를 넘어선 무한한 캔버스. 시선과 손짓으로 자연스럽게 상호작용하며, 평면 화면에 갇혀있던 정보를 3차원 공간으로 확장하여 직관적인 조작과 깊이 있는 몰입감을 제공합니다.',
    color: '#8b5cf6', // Violet
    position: [0, 1.0, -0.5] // Floating above desk center
  },
  {
    id: 'mobile-music',
    title: 'Mobile Experience',
    category: 'On-the-Go',
    deviceType: DeviceType.MOBILE,
    description: '손끝에서 느껴지는 직관적인 인터랙션',
    details: '가장 개인적이고 즉각적인 디바이스. 엄지손가락 범위 내에서의 효율적인 내비게이션과 햅틱 피드백을 통해, 작은 화면 안에서도 풍부하고 감각적인 사용자 경험을 전달합니다.',
    color: '#ec4899', // Pink
    position: [-1.2, 0.15, 0.8] // Front left on desk
  },
  {
    id: 'tablet-reminder',
    title: 'Tablet Experience',
    category: 'Productivity',
    deviceType: DeviceType.TABLET,
    description: '생산성과 휴대성의 완벽한 균형',
    details: '모바일의 휴대성과 데스크탑의 정보량을 동시에. 분할 화면과 드래그 앤 드롭을 활용한 멀티태스킹 최적화로, 복잡한 워크플로우를 단순하고 유연하게 시각화합니다.',
    color: '#3b82f6', // Blue
    position: [1.5, 0.15, 0.2] // Right side on desk
  },
  {
    id: 'watch-alarm',
    title: 'Watch Experience',
    category: 'Wearable',
    deviceType: DeviceType.WATCH,
    description: '신체와 연결되는 마이크로 UX',
    details: '사용자의 맥락을 가장 가까이서 이해하는 인터페이스. 불필요한 정보를 배제하고 핵심 정보만을 적시에 전달하며, 탭과 제스처로 즉각적인 피드백을 주고받는 초개인화된 경험을 설계합니다.',
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
  description: '웹 기술과 디자인의 융합',
  details: '사용자 경험을 최우선으로 고려한 웹 디자인과 퍼블리싱. 최신 웹 표준 기술을 활용하여 성능과 심미성을 동시에 만족시키는 디지털 경험을 구축합니다.',
  color: '#000000',
  position: [0, 0, 0] // Static position handled in Experience
};

export const HEADPHONE_DATA: Project = {
  id: 'headphone',
  title: 'PlayGround',
  category: 'Creative',
  deviceType: DeviceType.HEADPHONE,
  description: '청각적 경험과 창의성의 놀이터',
  details: '소리를 매개로 한 새로운 형태의 인터랙티브 실험. 음악, 사운드 이펙트, 그리고 시각적 요소가 결합된 공감각적인 디지털 아트워크 컬렉션입니다.',
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