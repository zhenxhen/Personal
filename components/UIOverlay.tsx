import React, { useEffect, useState } from 'react';
import { Project } from '../types';
import { MousePointer2, ChevronRight, ArrowLeft, ArrowRight, Rotate3D } from 'lucide-react';
import { useProgress } from '@react-three/drei';

interface UIOverlayProps {
  selectedProject: Project | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  currentIndex: number;
  totalCount: number;
}

export const UIOverlay: React.FC<UIOverlayProps> = ({
  selectedProject,
  onClose,
  onNext,
  onPrev,
  currentIndex,
  totalCount
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const { progress, active } = useProgress();
  const [hasLoaded, setHasLoaded] = useState(false);

  // Initial load completion handler
  useEffect(() => {
    if (progress === 100 && !active) {
      // Add a small delay for smoother transition after 100%
      setTimeout(() => {
        setHasLoaded(true);
      }, 500);
    }
  }, [progress, active]);

  useEffect(() => {
    if (selectedProject) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [selectedProject]);

  // Format index to be 01, 02, etc.
  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="absolute top-0 left-0 w-full h-screen z-5 pointer-events-none">

      {/* 1. Intro Content - Slides OUT to Left when project selected */}
      <div
        className={`absolute top-16 md:top-8 left-8 right-8 md:left-8 md:right-auto select-none transition-all duration-700 ease-in-out ${selectedProject ? 'opacity-0 -translate-x-12' : 'opacity-100 translate-x-0'}`}
      >
        {!hasLoaded ? (
          /* Loading State - Text Only */
          // Note: using tabular-nums ensures width doesn't jump around
          <h1 className="title tabular-nums">
            {Math.round(progress)}%
          </h1>
        ) : (
          /* Content State - Appear after load */
          <div className="animate-fade-in">
            <h1 className="title">
              UX Designer<br /> & Developer
            </h1>
            <p className="text mt-4 w-full md:max-w-xs text-gray-500">
              I specialize in designing new usability and developing systems across diverse devices and platforms.<br />
            </p>
          </div>
        )}
      </div>

      {/* 2. Project Content - Slides IN from Right (or appears) when project selected */}
      {/* Positioned exactly same as Intro */}
      <div
        className={`absolute top-16 md:top-8 left-8 right-8 md:left-8 md:right-auto select-none transition-all duration-700 ease-in-out ${selectedProject ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
      >
        {selectedProject && (
          <div className="max-w-md flex flex-col items-start">

            <div className="flex items-start gap-4 mb-4">
              <h2 className="title">
                {selectedProject.title.split(' ').map((word, i) => (
                  <span key={i} className="block">{word}</span>
                ))}
              </h2>
              {selectedProject.id === 'headphone' && (
                <button className="subtext border border-gray-400 text-gray-500 hover:text-black hover:border-black transition-colors rounded-full px-4 py-1 whitespace-nowrap mt-1">
                  Welcome to Playground
                </button>
              )}
            </div>

            <div className="space-y-6 mb-8">


              <p className="text text-gray-500">
                {selectedProject.details}
              </p>
            </div>

            <div className="flex flex-col gap-6 pointer-events-auto">
              {/* Navigation Controls */}
              <div className="flex items-center justify-start gap-6">
                <button
                  onClick={onPrev}
                  className="nav-btn group -ml-2"
                >
                  <ArrowLeft className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" />
                </button>

                <span className="subtext text-gray-900">
                  {formatNumber(currentIndex + 1)} <span className="text-gray-300 mx-1">/</span> {formatNumber(totalCount)}
                </span>

                <button
                  onClick={onNext}
                  className="nav-btn group"
                >
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};