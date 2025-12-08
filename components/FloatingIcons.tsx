import React, { useRef } from 'react';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';

const FloatingIcons: React.FC = () => {
    const calendarTex = useLoader(THREE.TextureLoader, `${import.meta.env.BASE_URL}3DUI/calendar.png`);
    const clockTex = useLoader(THREE.TextureLoader, `${import.meta.env.BASE_URL}3DUI/clock.png`);
    const reminderTex = useLoader(THREE.TextureLoader, `${import.meta.env.BASE_URL}3DUI/reminder.png`);

    // Ensure SRGB encoding for correct color output
    calendarTex.colorSpace = THREE.SRGBColorSpace;
    clockTex.colorSpace = THREE.SRGBColorSpace;
    reminderTex.colorSpace = THREE.SRGBColorSpace;

    const calendarRatio = calendarTex.image.width / calendarTex.image.height;
    const clockRatio = clockTex.image.width / clockTex.image.height;
    const reminderRatio = reminderTex.image.width / reminderTex.image.height;

    // Base height for consistency
    const height = 1.25;

    return (
        <group position={[0, 2, -2]}>
            {/* Calendar */}
            <mesh position={[-3, -1, -.5]}>
                <planeGeometry args={[height * calendarRatio, height]} />
                <meshBasicMaterial map={calendarTex} transparent side={THREE.DoubleSide} toneMapped={false} color="white" />
            </mesh>

            {/* Clock */}
            <mesh position={[-1.5, 1, 0]}>
                <planeGeometry args={[height * clockRatio, height]} />
                <meshBasicMaterial map={clockTex} transparent side={THREE.DoubleSide} toneMapped={false} color="white" />
            </mesh>

            {/* Reminder */}
            <mesh position={[2, .5, .5]}>
                <planeGeometry args={[height * reminderRatio, height]} />
                <meshBasicMaterial map={reminderTex} transparent side={THREE.DoubleSide} toneMapped={false} color="white" />
            </mesh>
        </group>
    );
};

export default FloatingIcons;
