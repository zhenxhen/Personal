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
        <div className="w-full px-8 pt-12 pb-24 bg-white pointer-events-auto border-t border-gray-100">
            <h2 className="subtitle mb-8">Selected Works</h2>
            <div className="grid grid-cols-1 min-[1000px]:grid-cols-2 min-[1600px]:grid-cols-3 gap-x-6 gap-y-12">
                {DUMMY_PROJECTS.map((project) => (
                    <div key={project.id} className="group cursor-pointer">
                        {/* Image Placeholder */}
                        <div className="aspect-[4/3] bg-gray-100 mb-4 overflow-hidden relative">
                            <div className="absolute inset-0 bg-gray-50 group-hover:bg-gray-100 transition-colors duration-500" />
                            {/* Actual image tag can go here later */}
                            {/* <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" /> */}
                        </div>

                        {/* Content */}
                        <div className="flex flex-col gap-1">
                            <div className="flex justify-between items-baseline">
                                <h3 className="subtitle text-black group-hover:text-gray-600 transition-colors">
                                    {project.title}
                                </h3>
                                <span className="subtext">{project.year}</span>
                            </div>
                            <p className="subtext text-gray-500">{project.category}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
