import React from 'react';

export const About: React.FC = () => {
    return (
        <div className="w-full min-h-screen bg-white text-black p-8 mt-12 md:mt-0 mx-auto">
            {/* Header */}
            <header className="mb-16">
                <h1 className="title mb-6">
                    About
                </h1>
                <p className="subtitle text-gray-600 max-w-2xl">
                    Hello, I'm Jinwon Lee, an UX Designer at Samsung Electronics. <br /> I design the moments when technology connects with people.
                </p>
            </header>

            {/* Introduction */}
            <section>
                <h2 className="subtitle text-gray-400 mb-8">Introduction</h2>
                <div className="subtitle text-gray-600 space-y-6 max-w-2xl">
                    <p>
                        Specializing in visual design and human-computer interaction, I explore how technology shapes our daily lives. I focus on creating universal, intuitive, and meaningful interactions across diverse platforms, from mobile to virtual reality.
                    </p>
                    <p>
                        I believe great design is not just about aesthetics, but about solving problems and enhancing human capabilities. I design for diverse audiences to validate ideas and discover new possibilities.
                    </p>
                </div>
            </section>


            {/* Main Content */}
            <div className="space-y-32 mt-32"> {/* Increased spacing for better separation */}


                <section className="border-t border-gray-100 pt-16 -mx-8 px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-normal leading-tight text-black">
                                Human-centered <br />System design
                            </h2>
                        </div>
                        <div>
                            <ul className="space-y-1 text-lg text-gray-600">
                                <li className="flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                                    Universal Design
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                                    Real-World Feedback
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                                    Device Ecosystem Integration
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                                    W3C / EAA Design Guidelines
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-normal leading-tight text-black">
                                Technology-driven <br />Platform design
                            </h2>
                        </div>
                        <div>
                            <ul className="space-y-1 text-lg text-gray-600">
                                <li className="flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                                    Cross-Device & Platform
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                                    AI Experience Optimization
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                                    Framework Driven Design
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                                    Readability & Command Alignment
                                </li>
                            </ul>
                        </div>

                    </div>
                    <p className="subtitle text-gray-600 max-w-2xl mt-16">
                        I increased sales by approximately 40% through designs that improved accessibility and universality, and enhanced internal productivity by integrating design development guidelines.
                        This ethos led to international design competition wins and international patents.
                    </p>
                </section>

                {/* Experience & Education Grid (RESTORED) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-gray-100 pt-16 -mx-8 px-8">
                    {/* Experience */}
                    <section>
                        <h2 className="subtitle text-gray-400 mb-8">Experience</h2>
                        <div className="space-y-12">
                            <div className="group">
                                <div className="flex flex-col md:flex-row md:items-baseline justify-between">
                                    <h3 className="subtitle group-hover:text-gray-600 transition-colors">Samsung Electronics</h3>
                                </div>
                                <p className="text text-gray-600 mb-4">UX Designer <br /> <p className="text-gray-400">Mobile eXperience Division<br />Seoul, South Korea</p></p>
                                <p className="text text-gray-500">
                                    6 years of experience in Core UX for One UI.<br /><br />

                                    Maintenance and support of ecosystem applications to maximize productivity.<br /><br />

                                    Optimization and experience research for mobile, wearable, XR, foldable devices, tablets, and PC environments.<br /><br />

                                    Designing next-generation mobile experiences for Galaxy devices, focusing on productivity and seamless ecosystem integration.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Education */}
                    <section>
                        <h2 className="subtitle text-gray-400 mb-8">Education</h2>
                        <div className="space-y-12">
                            <div className="group">
                                <div className="flex flex-col md:flex-row md:items-baseline justify-between">
                                    <h3 className="subtitle group-hover:text-gray-600 transition-colors">UAL Creative Computing Institute</h3>
                                </div>
                                <p className="text text-gray-600 mb-4">MS Creative Computing<p className="text-gray-400">London, UK</p></p>
                                <p className="text text-gray-500">
                                    Engage in advanced study at the intersection of creative computing and human-centered design. This program emphasizes creative coding, interactive systems, and experimental approaches to human-computer interaction.
                                </p>
                            </div>

                            <div className="group">
                                <div className="flex flex-col md:flex-row md:items-baseline justify-between">
                                    <h3 className="subtitle group-hover:text-gray-600 transition-colors">SADI</h3>
                                </div>
                                <p className="text text-gray-600 mb-4">BA Visual Communication Design<p className="text-gray-400">Seoul, South Korea</p></p>
                                <p className="text text-gray-500">
                                    Creative computation, UX, visual design, product design, fashion, and typography. Explored the potential of various technologies through academic experimentation and industry-oriented approaches.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Patents & Awards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-gray-100 pt-16 -mx-8 px-8">
                    {/* Patents */}
                    <section>
                        <h2 className="subtitle text-gray-400 mb-8">Patents</h2>
                        <div className="space-y-8">
                            <div className="group">
                                <h3 className="text group-hover:text-gray-800 transition-colors">[WO]2025116227<br />[US]20250173977</h3>
                                <p className="subtext text-gray-500">
                                    Wearable device for providing a virtual object for guiding the capture of an image or video, and method thereof
                                </p>
                            </div>
                            <div className="group">
                                <h3 className="text group-hover:text-gray-800 transition-colors">[WO]2025135766<br />[US]20250199612</h3>
                                <p className="subtext text-gray-500">
                                    Wearable device for providing an immersive experience and control method thereof
                                </p>
                            </div>
                            <div className="group">
                                <h3 className="text group-hover:text-gray-800 transition-colors">[WO]2025110493</h3>
                                <p className="subtext text-gray-500">
                                    Wearable electronic device for displaying augmented reality images, operation method thereof, and storage medium
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Awards */}
                    <section>
                        <h2 className="subtitle text-gray-400 mb-8">Awards</h2>
                        <div className="space-y-2">
                            <div className="group">
                                <h3 className="text group-hover:text-gray-800 transition-colors">International Busan Design Awards</h3>
                                <p className="subtext text-gray-500">Grand Prize</p>
                            </div>
                            <div className="group">
                                <h3 className="text group-hover:text-gray-800 transition-colors">Asia Design Prize</h3>
                                <p className="subtext text-gray-500">Gold Prize</p>
                            </div>
                            <div className="group">
                                <h3 className="text group-hover:text-gray-800 transition-colors">Universal Design</h3>
                                <p className="subtext text-gray-500">Special Prize</p>
                            </div>
                            <div className="group">
                                <h3 className="text group-hover:text-gray-800 transition-colors">Runway [Gen:48]</h3>
                                <p className="subtext text-gray-500">Ofiicial Selection</p>
                            </div>
                            <div className="group">
                                <h3 className="text group-hover:text-gray-800 transition-colors">Korea International Design Awards</h3>
                                <p className="subtext text-gray-500">Special Prize, Winner (2)</p>
                            </div>
                            <div className="group">
                                <h3 className="text group-hover:text-gray-800 transition-colors">Reddot</h3>
                                <p className="subtext text-gray-500">Concept : Official Finalist (3)</p>
                            </div>
                            <div className="group">
                                <h3 className="text group-hover:text-gray-800 transition-colors">CineTech Future Fest</h3>
                                <p className="subtext text-gray-500">Official Selection</p>
                            </div>
                            <div className="group">
                                <h3 className="text group-hover:text-gray-800 transition-colors">International Busan Design Awards</h3>
                                <p className="subtext text-gray-500">Best Designer</p>
                            </div>
                            <div className="group">
                                <h3 className="text group-hover:text-gray-800 transition-colors">K-Design Award</h3>
                                <p className="subtext text-gray-500">Winner</p>
                            </div>
                        </div>
                    </section>
                </div>


                {/* Tools Grid & Skills */}
                <section className="border-t border-gray-100 pt-16 -mx-8 px-8">
                    <h2 className="subtitle text-gray-400 mb-8">Skills & Tools</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                        <div>
                            <h3 className="subtitle mb-4">Design</h3>
                            <p className="text text-gray-600">
                                User Interface (UI), User Experience (UX), Interaction Design, Wireframing, Prototyping, 3D Modeling, Motion Design
                            </p>
                        </div>
                        <div>
                            <h3 className="subtitle mb-4">Development</h3>
                            <p className="text text-gray-600">
                                React, Next.js, TypeScript, Three.js, R3F, WebGL, Tailwind CSS, Python, Git
                            </p>
                        </div>
                    </div>
                </section>

                {/* [NEW] Closing Statement */}
                <section className="py-20 md:py-32">
                    <h2 className="title leading-tight tracking-tight">

                        Human come before technology,<br />
                        building sustainable systems and platforms together.
                    </h2>
                </section>

                {/* Contact */}
                <section className="pb-20 border-t border-gray-100 pt-16 -mx-8 px-8">
                    <div className="flex flex-col md:flex-row justify-between items-start">
                        <div>
                            <h2 className="subtitle text-gray-400 mb-8">Contact</h2>
                            <a href="mailto:jinn.human@gmail.com" className="subtitle hover:text-gray-600 transition-colors cursor-pointer inline-block border-b border-black pb-1">
                                jinn.human@gmail.com
                            </a>
                        </div>
                        <div className="mt-8 md:mt-0 mr-20 flex flex-col gap-1 text-gray-400">
                            {/* Spacer to align with email address */}
                            <div className="subtitle mb-8 invisible hidden md:block">Contact</div>
                            <a target="_blank" href="https://www.linkedin.com/in/jinwon-eugene-lee/">LinkedIn</a>
                            <a target="_blank" href="https://www.instagram.com/eeezeen/">Instagram</a>
                            <a target="_blank" href="https://drive.google.com/file/d/1m8HhnaSv1ECcNSok6q0YawZzTF1V4cFn/view?usp=sharing">View CV</a>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
};
