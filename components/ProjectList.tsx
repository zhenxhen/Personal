import React from 'react';

const DUMMY_PROJECTS = Array.from({ length: 9 }).map((_, i) => ({
    id: `project-${i + 1}`,
    title: `Project ${i + 1}`,
    category: i % 3 === 0 ? 'Mobile App' : i % 3 === 1 ? 'Web Interface' : 'XR Experience',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800', // Abstract placeholder
    year: '2024'
}));

export const ProjectList: React.FC = () => {
    return (
        <div className="w-full max-w-7xl mx-auto px-6 pt-12 pb-24 bg-white/70 backdrop-blur-md pointer-events-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-12">Selected Works</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12">
                {DUMMY_PROJECTS.map((project) => (
                    <div key={project.id} className="group cursor-pointer">
                        {/* Image Placeholder */}
                        <div className="aspect-[4/3] bg-gray-100 mb-4 overflow-hidden rounded-sm relative">
                            <div className="absolute inset-0 bg-gray-200 animate-pulse group-hover:bg-gray-300 transition-colors duration-500" />
                            {/* Actual image tag can go here later */}
                            {/* <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" /> */}
                        </div>

                        {/* Content */}
                        <div className="flex flex-col gap-1">
                            <div className="flex justify-between items-baseline">
                                <h3 className="text-sm font-medium text-gray-900 group-hover:text-gray-600 transition-colors">
                                    {project.title}
                                </h3>
                                <span className="text-xs text-gray-400 font-mono">{project.year}</span>
                            </div>
                            <p className="text-xs text-gray-500">{project.category}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
