import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const links = [
        { name: 'Projects', href: '#' },
        { name: 'About', href: '#' },
        { name: 'Contact', href: '#' },
        { name: 'View CV', href: '#' },
    ];

    return (
        <>
            <header className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center pointer-events-none">
                {/* Logo / Title */}
                <div className="pointer-events-auto">
                    <h1 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
                        Jinwon Lee
                    </h1>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8 pointer-events-auto">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-gray-500 hover:text-black transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMenuOpen(true)}
                    className="md:hidden pointer-events-auto p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                    <Menu className="w-6 h-6 text-gray-900" />
                </button>
            </header>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-[60] bg-white transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    } md:hidden`}
            >
                <div className="p-6 flex flex-col h-full">
                    <div className="flex justify-between items-center mb-12">
                        <h1 className="text-xl font-bold text-gray-900 tracking-tight">
                            Jinwon Lee
                        </h1>
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                        >
                            <X className="w-6 h-6 text-gray-900" />
                        </button>
                    </div>

                    <nav className="flex flex-col gap-6">
                        {links.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="text-2xl font-medium text-gray-900 hover:text-gray-500 transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    <div className="mt-auto text-sm text-gray-400">
                        © {new Date().getFullYear()} Jinwon Lee. All rights reserved.
                    </div>
                </div>
            </div>
        </>
    );
};
