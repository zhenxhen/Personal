import { WORK_ITEMS } from '../constants';

export const ProjectList: React.FC = () => {
    return (
        <div className="w-full px-8 pt-12 pb-24 bg-white pointer-events-auto border-t border-gray-100">
            <h2 className="subtitle mb-8">Selected Works</h2>
            <div className="grid grid-cols-1 min-[1000px]:grid-cols-2 min-[1600px]:grid-cols-3 gap-x-6 gap-y-12">
                {WORK_ITEMS.map((project) => (
                    <div key={project.id} className="group cursor-pointer">
                        {/* Image Placeholder */}
                        <div className="aspect-[4/3] bg-gray-100 mb-4 overflow-hidden relative">
                            <div className="absolute inset-0 bg-gray-50 group-hover:bg-gray-100 transition-colors duration-500" />
                            <img src={project.image} alt={project.title} className="relative z-10 w-full h-full object-cover transition-all duration-700 ease-in-out transform-gpu group-hover:scale-105" />
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
