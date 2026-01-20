import React, { useState, useEffect } from 'react';
import { Experience } from './components/Experience';
import { UIOverlay } from './components/UIOverlay';
import { Sidebar } from './components/Sidebar';
import { ProjectList } from './components/ProjectList';
import { About } from './components/About';
import { Project } from './types';
import { PROJECTS, NAVIGATION_ORDER, MONITOR_DATA, HEADPHONE_DATA } from './constants';

const App: React.FC = () => {
  const [currentProject, setCurrentProject] = useState<Project | null>(null);
  const [currentView, setCurrentView] = useState<'home' | 'about'>('home');

  const handleProjectSelect = (project: Project | null) => {
    setCurrentProject(project);
  };

  const handleNavigation = (page: string) => {
    if (page === 'home' || page === 'about') {
      setCurrentView(page as 'home' | 'about');
      if (page === 'about') {
        setCurrentProject(null); // Clear selection when going to about
      }
      // Reset scroll position to top on navigation
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-white overflow-y-auto selection:bg-black selection:text-white">
      {/* Sidebar Navigation */}
      <Sidebar onNavigate={handleNavigation} activePage={currentView} />

      {/* Main Content Area */}
      <main className="flex-1 ml-0 md:ml-64 relative min-h-screen">

        {currentView === 'home' ? (
          <>
            {/* 3D Background / Hero Section */}
            <div className="fixed inset-0 md:left-64 w-auto h-full z-0">
              <Experience
                currentProjectId={currentProject?.id || null}
                onProjectSelect={handleProjectSelect}
              />
            </div>

            {/* Project List */}
            <div className="relative z-10 pt-[75vh] pointer-events-none">
              <div id="projects-section">
                <ProjectList />
              </div>
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
          </>
        ) : (
          /* About Page */
          <About />
        )}

        {/* Global Branding - Hide in Admin Mode to reduce clutter? Or Keep? Keeping for context. */}

      </main>
    </div>
  );
};

export default App;