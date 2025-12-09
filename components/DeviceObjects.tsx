import React, { useRef, useMemo } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

import { DeviceType } from '../types';

interface DeviceProps {
  type: DeviceType;
  color: string;
  roughness?: number;
  isSelected: boolean;
  isHovered: boolean;
  onClick: (e: any) => void;
  onPointerOver: (e: any) => void;
  onPointerOut: () => void;
}





// Custom Hook for Smooth Hover Animation
const useHoverAnimation = (
  initialY: number,
  isHovered: boolean,
  isSelected: boolean,
  baseRotation?: [number, number, number],
  tiltRotation?: [number, number, number],
  selectedY?: number
) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      let targetY = initialY;

      if (isSelected) {
        // Floating Animation
        const baseHeight = selectedY !== undefined ? selectedY : (initialY + 0.2);
        targetY = baseHeight + Math.sin(state.clock.getElapsedTime() * 2) * 0.05;
      } else if (isHovered) {
        // Hover Lift: Fixed at 0.2
        targetY = initialY + 0.2;
      }


      // Smoothly interpolate to the target position
      // Using lerp prevents jumps when switching between states (e.g. Select -> Default)
      groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, targetY, delta * 5);

      // Rotation Animation
      if (baseRotation && tiltRotation) {
        const targetRotation = isSelected ? tiltRotation : baseRotation;
        groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotation[0], delta * 5);
        groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotation[1], delta * 5);
        groupRef.current.rotation.z = THREE.MathUtils.lerp(groupRef.current.rotation.z, targetRotation[2], delta * 5);
      }
    }
  });

  return groupRef;
};

export const XRHeadset: React.FC<DeviceProps> = ({ color, roughness, isSelected, isHovered, onClick, onPointerOver, onPointerOut }) => {
  const { scene } = useGLTF(`${import.meta.env.BASE_URL}models/XR.glb`);
  const initialY = -.8;
  const baseRotation: [number, number, number] = [0, Math.PI + .8, 0];
  const tiltRotation: [number, number, number] = [-.3, Math.PI + .8, 0];
  const groupRef = useHoverAnimation(initialY, isHovered, isSelected, baseRotation, tiltRotation, 0);

  const clone = useMemo(() => {
    const c = scene.clone();
    c.traverse((child: any) => {
      if (child.isMesh && child.material) {
        child.material = child.material.clone();
        child.material.roughness = roughness ?? 1;
      }
    });
    return c;
  }, [scene, roughness]);

  return (
    <group
      ref={groupRef}
      //XR position
      onClick={onClick}
      onPointerOver={onPointerOver}
      onPointerOut={onPointerOut}
      position={[2.5, initialY, 0]} // Resting position
      rotation={baseRotation}
    >
      <primitive
        object={clone}
        scale={2.5}
      />
    </group>
  );
};





export const MobilePhone: React.FC<DeviceProps> = ({ color, roughness, isSelected, isHovered, onClick, onPointerOver, onPointerOut }) => {
  const { scene } = useGLTF(`${import.meta.env.BASE_URL}models/phone.glb`);
  const initialY = -.15;
  const baseRotation: [number, number, number] = [0, Math.PI / 2 + Math.PI + 0.3, Math.PI / 2];
  const tiltRotation: [number, number, number] = [-2.4, Math.PI / 2 + Math.PI + 2.7, 1.2]; // Tilt forward (negative X)
  // const tiltRotation: [number, number, number] = [Math.PI - 1, Math.PI / 2 + Math.PI + 3, Math.PI]; // Tilt forward (negative X)
  const groupRef = useHoverAnimation(initialY, isHovered, isSelected, baseRotation, tiltRotation, 0.7);

  // Clone the scene to allow independent rendering if used multiple times
  const clone = useMemo(() => {
    const c = scene.clone();
    c.traverse((child: any) => {
      if (child.isMesh && child.material) {
        child.material = child.material.clone();
        child.material.roughness = roughness ?? 1; // Default from user edit
      }
    });
    return c;
  }, [scene, roughness]);

  // phone position
  return (
    <group
      ref={groupRef}
      position={[-0.5, initialY, -0.5]} // Phone GLB likely has its own centering, adjusting on desk in Experience might be needed or here
      rotation={baseRotation}
      onClick={onClick}
      onPointerOver={onPointerOver}
      onPointerOut={onPointerOut}
    >
      <primitive
        object={clone}
        scale={.4} // Heuristic scale, similar to Monitor/XR
      />
    </group>
  );
};

export const Tablet: React.FC<DeviceProps> = ({ color, roughness, isSelected, isHovered, onClick, onPointerOver, onPointerOut }) => {
  const { scene } = useGLTF(`${import.meta.env.BASE_URL}models/tablet.glb`);
  const initialY = -.13;
  const baseRotation: [number, number, number] = [0, Math.PI - .3, Math.PI / 2];
  const tiltRotation: [number, number, number] = [0.3, Math.PI + .1, Math.PI / 2]; // Tilt forward
  const groupRef = useHoverAnimation(initialY, isHovered, isSelected, baseRotation, tiltRotation, 0.4);

  const clone = useMemo(() => {
    const c = scene.clone();
    c.traverse((child: any) => {
      if (child.isMesh && child.material) {
        child.material = child.material.clone();
        child.material.roughness = roughness ?? 1;
      }
    });
    return c;
  }, [scene, roughness]);

  // tablet position
  return (
    <group
      ref={groupRef}
      position={[-4.8, initialY, -0.5]}
      rotation={baseRotation}
      onClick={onClick}
      onPointerOver={onPointerOver}
      onPointerOut={onPointerOut}
    >
      <primitive
        object={clone}
        scale={2.2}
      />
    </group>
  );
};

export const Watch: React.FC<DeviceProps> = ({ color, roughness, isSelected, isHovered, onClick, onPointerOver, onPointerOut }) => {
  const { scene } = useGLTF(`${import.meta.env.BASE_URL}models/smartwatch.glb`);
  const initialY = 0.1;
  const baseRotation: [number, number, number] = [0, Math.PI / 2 + Math.PI, 0];
  const tiltRotation: [number, number, number] = [-Math.PI / 2 - 0.5, Math.PI / 2 + Math.PI + 1, -1.5]; // Tilt forward
  const groupRef = useHoverAnimation(initialY, isHovered, isSelected, baseRotation, tiltRotation, 0.4);

  const clone = useMemo(() => {
    const c = scene.clone();
    c.traverse((child: any) => {
      if (child.isMesh && child.material) {
        child.material = child.material.clone();
        child.material.roughness = roughness ?? 1;
      }
    });
    return c;
  }, [scene, roughness]);

  // watch position
  return (
    <group
      ref={groupRef}
      position={[-1, initialY, -1.5]}
      rotation={baseRotation}
      // Rotation handled by hook now
      onClick={onClick}
      onPointerOver={onPointerOver}
      onPointerOut={onPointerOut}
    >
      <primitive
        object={clone}
        scale={0.4}
      />
    </group>
  );
};

export const Monitor: React.FC<DeviceProps> = ({ isSelected, roughness, isHovered, onClick, onPointerOver, onPointerOut }) => {
  const { scene } = useGLTF(`${import.meta.env.BASE_URL}models/monitor.glb`);
  const initialY = 0;
  const baseRotation: [number, number, number] = [0, 0, 0];
  const tiltRotation: [number, number, number] = [0, 0, 0];
  const groupRef = useHoverAnimation(initialY, isHovered, isSelected, baseRotation, tiltRotation, 0.2);

  const clone = useMemo(() => {
    const c = scene.clone();
    c.traverse((child: any) => {
      if (child.isMesh && child.material) {
        child.material = child.material.clone();
        child.material.roughness = roughness ?? 1;
      }
    });
    return c;
  }, [scene, roughness]);

  return (
    <group
      ref={groupRef}
      //monitor position
      onClick={onClick}
      onPointerOver={onPointerOver}
      onPointerOut={onPointerOut}
      position={[0, initialY, .2]}
      rotation={baseRotation}
    >
      <primitive
        object={clone}
        scale={5.5} // Adjust scale as needed based on model units
      />
    </group>
  );
};

export const Headphone: React.FC<DeviceProps> = ({ isSelected, roughness, isHovered, onClick, onPointerOver, onPointerOut }) => {
  const { scene } = useGLTF(`${import.meta.env.BASE_URL}models/headphone.glb`);
  const initialY = .27;
  const baseRotation: [number, number, number] = [0, Math.PI / 2 + 2, Math.PI / 2 + .2];
  const tiltRotation: [number, number, number] = [Math.PI / 2, Math.PI + Math.PI / 2, Math.PI / 2];
  const groupRef = useHoverAnimation(initialY, isHovered, isSelected, baseRotation, tiltRotation, 1);

  const clone = useMemo(() => {
    const c = scene.clone();
    c.traverse((child: any) => {
      if (child.isMesh && child.material) {
        child.material = child.material.clone();
        child.material.roughness = roughness ?? 1;
      }
    });
    return c;
  }, [scene, roughness]);

  return (
    <group
      ref={groupRef}
      //headphone position
      onClick={onClick}
      onPointerOver={onPointerOver}
      onPointerOut={onPointerOut}
      position={[0, initialY, -1.4]} // Initial position, will valid in Experience
      rotation={baseRotation}
    >
      <primitive
        object={clone}
        scale={1.4} // Heuristic scale
      />
    </group>
  );
};