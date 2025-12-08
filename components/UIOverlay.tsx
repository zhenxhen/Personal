import React, { useEffect, useState } from 'react';
import { Project } from '../types';
import { MousePointer2, ChevronRight, ArrowLeft, ArrowRight } from 'lucide-react';

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
      {/* Home Screen Text - Always Visible */}
      <div className="absolute top-24 left-6 md:left-12 select-none">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tighter leading-tight">
          UX Design <br />
          Engineer
        </h1>
        <p className="mt-4 text-gray-500 max-w-xs text-sm md:text-base font-medium leading-relaxed">
          Explore the future of Multi-Device UX.<br />
          Click on a device to view the concept.
        </p>

        <div className="mt-8 flex items-center gap-2 text-xs text-gray-400 animate-pulse">
          <MousePointer2 className="w-4 h-4" />
          <span>Based in London and Seoul</span>
        </div>
      </div>

      {/* Right Side: Platform Concept Text - Displays when a device is selected */}
      <div
        className={`absolute bottom-12 right-6 md:right-12 text-right transition-opacity duration-500 ease-in-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
      >
        {selectedProject && (
          <div className="max-w-md ml-auto flex flex-col items-end">

            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tighter mb-6 leading-tight">
              {selectedProject.title.split(' ').map((word, i) => (
                <span key={i} className="block">{word}</span>
              ))}
            </h2>

            <div className="space-y-6 mb-8">
              <p className="text-lg md:text-xl font-medium text-gray-800 leading-snug">
                {selectedProject.description}
              </p>

              <p className="text-sm md:text-base text-gray-500 leading-relaxed font-light">
                {selectedProject.details}
              </p>
            </div>

            <button
              onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
              className="pointer-events-auto group flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full font-bold text-sm tracking-wide transition-all hover:bg-gray-800 hover:scale-105 active:scale-95 shadow-lg shadow-black/20"
            >
              View All Projects
              <ChevronRight className="w-4 h-4 rotate-90 group-hover:translate-y-1 transition-transform" />
            </button>

            {/* Navigation Controls - Moved to Bottom */}
            <div className="flex items-center justify-end gap-6 mt-6 pointer-events-auto">
              <button
                onClick={onPrev}
                className="p-2 hover:bg-black/5 rounded-full transition-colors group"
              >
                <ArrowLeft className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" />
              </button>

              <span className="text-sm font-mono font-bold tracking-widest text-gray-900">
                {formatNumber(currentIndex + 1)} <span className="text-gray-300 mx-1">/</span> {formatNumber(totalCount)}
              </span>

              <button
                onClick={onNext}
                className="p-2 hover:bg-black/5 rounded-full transition-colors group"
              >
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};