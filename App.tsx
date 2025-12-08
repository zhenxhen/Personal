import React, { useState, useEffect } from 'react';
import { Experience } from './components/Experience';
import { UIOverlay } from './components/UIOverlay';
import { Header } from './components/Header';
import { ProjectList } from './components/ProjectList';
import { Project } from './types';
import { PROJECTS, NAVIGATION_ORDER, MONITOR_DATA, HEADPHONE_DATA } from './constants';
import { Move3d, Rotate3d, ZoomIn, Eye } from 'lucide-react';

const App: React.FC = () => {
  const [currentProject, setCurrentProject] = useState<Project | null>(null);
  const [isAdminMode, setIsAdminMode] = useState(false);

  // Camera State - For Admin Mode Control Only
  const [azimuth, setAzimuth] = useState<number>(0);
  const [polar, setPolar] = useState<number>(1);
  const [distance, setDistance] = useState<number>(100);
  const [targetY, setTargetY] = useState<number>(0);

  const handleProjectSelect = (project: Project | null) => {
    setCurrentProject(project);
    // Exit admin mode when viewing a project to keep UI clean
    if (project) setIsAdminMode(false);
  };

  const copyConfig = () => {
    const config = `azimuth: ${azimuth}, polar: ${polar}, distance: ${distance}, targetY: ${targetY}`;
    navigator.clipboard.writeText(config);
    alert('Copied to clipboard: ' + config);
  };

  return (
    <div className="relative w-full min-h-screen bg-white overflow-y-auto selection:bg-black selection:text-white">
      {/* Header */}
      <Header />

      {/* 3D Background / Hero Section */}
      <div className="fixed inset-0 w-full h-full z-0">
        <Experience
          currentProjectId={currentProject?.id || null}
          onProjectSelect={handleProjectSelect}
          // Only pass camera settings when in Admin Mode to allow Experience defaults to work otherwise
          cameraSettings={isAdminMode ? { azimuth, polar, distance, targetY } : undefined}
        />
      </div>

      {/* Project List */}
      <div className="relative z-10 pt-[100vh] pointer-events-none">
        <ProjectList />
      </div>

      {/* UI Overlay */}
      <UIOverlay
        selectedProject={currentProject}
        onClose={() => setCurrentProject(null)}
        onNext={() => {
          if (!currentProject) return;
          const currentIndex = NAVIGATION_ORDER.indexOf(currentProject.id);
          const nextIndex = (currentIndex + 1) % NAVIGATION_ORDER.length;
          const nextId = NAVIGATION_ORDER[nextIndex];

          if (nextId === 'monitor') handleProjectSelect(MONITOR_DATA);
          else if (nextId === 'headphone') handleProjectSelect(HEADPHONE_DATA);
          else {
            const nextProject = PROJECTS.find(p => p.id === nextId);
            handleProjectSelect(nextProject || null);
          }
        }}
        onPrev={() => {
          if (!currentProject) return;
          const currentIndex = NAVIGATION_ORDER.indexOf(currentProject.id);
          const prevIndex = (currentIndex - 1 + NAVIGATION_ORDER.length) % NAVIGATION_ORDER.length;
          const prevId = NAVIGATION_ORDER[prevIndex];

          if (prevId === 'monitor') handleProjectSelect(MONITOR_DATA);
          else if (prevId === 'headphone') handleProjectSelect(HEADPHONE_DATA);
          else {
            const prevProject = PROJECTS.find(p => p.id === prevId);
            handleProjectSelect(prevProject || null);
          }
        }}
        currentIndex={currentProject ? NAVIGATION_ORDER.indexOf(currentProject.id) : -1}
        totalCount={NAVIGATION_ORDER.length}
      />

      {/* Admin Toggle - Top Right */}
      {!currentProject && (
        <button
          onClick={() => setIsAdminMode(!isAdminMode)}
          className={`absolute top-24 right-8 z-50 p-3 rounded-full transition-all duration-300 ${isAdminMode ? 'bg-black text-white shadow-xl' : 'bg-white/50 text-gray-400 hover:text-black hover:bg-white'}`}
        >
          {isAdminMode ? <Eye className="w-5 h-5" /> : <Rotate3d className="w-5 h-5" />}
        </button>
      )}

      {/* Camera Control Panel - Admin Only */}
      {isAdminMode && !currentProject && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-3 w-full max-w-2xl px-6 animate-fade-in-up">
          <div className="bg-white/90 backdrop-blur-xl p-6 rounded-3xl shadow-2xl border border-gray-200 w-full flex flex-col gap-6">

            <div className="flex justify-between items-center border-b border-gray-100 pb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Camera Admin</span>
              <button onClick={copyConfig} className="text-[10px] bg-black text-white px-2 py-1 rounded hover:opacity-80 transition-opacity">
                Copy Config
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Rotation Control */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between text-xs font-bold text-gray-500 uppercase tracking-wider">
                  <div className="flex items-center gap-2">
                    <Rotate3d className="w-4 h-4" />
                    <span>Azimuth</span>
                  </div>
                  <span className="text-black font-mono">{azimuth.toFixed(2)}</span>
                </div>
                <input
                  type="range"
                  min={-Math.PI}
                  max={Math.PI}
                  step={0.01}
                  value={azimuth}
                  onChange={(e) => setAzimuth(Number(e.target.value))}
                  className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-black hover:accent-gray-800 transition-all"
                />
                <div className="text-[10px] text-gray-400 font-mono truncate" title={azimuth.toString()}>
                  Raw: {azimuth}
                </div>
              </div>

              {/* Angle Control */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between text-xs font-bold text-gray-500 uppercase tracking-wider">
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    <span>Polar</span>
                  </div>
                  <span className="text-black font-mono">{polar.toFixed(2)}</span>
                </div>
                <input
                  type="range"
                  min={0.1}
                  max={Math.PI / 1.5}
                  step={0.01}
                  value={polar}
                  onChange={(e) => setPolar(Number(e.target.value))}
                  className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-black hover:accent-gray-800 transition-all"
                />
                <div className="text-[10px] text-gray-400 font-mono truncate" title={polar.toString()}>
                  Raw: {polar}
                </div>
              </div>

              {/* Zoom Control */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between text-xs font-bold text-gray-500 uppercase tracking-wider">
                  <div className="flex items-center gap-2">
                    <ZoomIn className="w-4 h-4" />
                    <span>Distance</span>
                  </div>
                  <span className="text-black font-mono">{distance}</span>
                </div>
                <input
                  type="range"
                  min={10}
                  max={200}
                  step={1}
                  value={distance}
                  onChange={(e) => setDistance(Number(e.target.value))}
                  className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-black hover:accent-gray-800 transition-all"
                />
                <div className="text-[10px] text-gray-400 font-mono truncate">
                  Raw: {distance}
                </div>
              </div>

              {/* Target Y Control */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between text-xs font-bold text-gray-500 uppercase tracking-wider">
                  <div className="flex items-center gap-2">
                    <Move3d className="w-4 h-4" />
                    <span>Target Y</span>
                  </div>
                  <span className="text-black font-mono">{targetY}</span>
                </div>
                <input
                  type="range"
                  min={-10}
                  max={10}
                  step={0.1}
                  value={targetY}
                  onChange={(e) => setTargetY(Number(e.target.value))}
                  className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-black hover:accent-gray-800 transition-all"
                />
                <div className="text-[10px] text-gray-400 font-mono truncate">
                  Raw: {targetY}
                </div>
              </div>
            </div>

            <div className="text-[10px] text-gray-400 text-center font-mono bg-gray-50 p-2 rounded border border-gray-100 select-all">
              {`azimuth={${azimuth}} polar={${polar}} distance={${distance}} targetY={${targetY}}`}
            </div>

          </div>
        </div>
      )}

      {/* Global Branding - Hide in Admin Mode to reduce clutter? Or Keep? Keeping for context. */}

    </div>
  );
};

export default App;