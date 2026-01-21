import React from 'react';

export const Contact: React.FC = () => {
    return (
        <div className="w-full min-h-screen bg-white text-black p-8 mt-12 md:mt-0 mx-auto">
            {/* Header */}
            <header className="mb-16">
                <h1 className="title mb-6">
                    Please do not hesitate <br />to request additional information.
                </h1>
                <a href="mailto:jinn.human@gmail.com" className="subtitle hover:text-gray-600 transition-colors border-b border-black pb-1">
                    jinn.human@gmail.com
                </a>
            </header>

            {/* Contact Details */}
            <section className="space-y-12">

                <div>
                    <div className="flex flex-col items-start gap-4">
                        <a target="_blank" href="https://www.linkedin.com/in/jinwon-eugene-lee/" className="subtitle hover:text-gray-600 transition-colors">
                            LinkedIn
                        </a>
                        <a target="_blank" href="https://www.instagram.com/eeezeen/" className="subtitle hover:text-gray-600 transition-colors">
                            Instagram
                        </a>
                        <a target="_blank" href="https://drive.google.com/file/d/1m8HhnaSv1ECcNSok6q0YawZzTF1V4cFn/view?usp=sharing" className="subtitle hover:text-gray-600 transition-colors">
                            View CV
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};
