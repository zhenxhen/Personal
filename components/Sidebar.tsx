import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface SidebarProps {
    onNavigate: (page: string) => void;
    activePage: 'home' | 'about';
}

export const Sidebar: React.FC<SidebarProps> = ({ onNavigate, activePage }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Helper to determine if a link is active based on current page
    const isActive = (linkName: string) => {
        if (linkName === 'Projects' && activePage === 'home') return true;
        if (linkName === 'About' && activePage === 'about') return true;
        return false;
    };

    const links = [
        { name: 'Projects', href: '#' },
        { name: 'About', href: '#' },
        { name: 'Contact', href: '#' },
        { name: 'View CV', href: '#' },
    ];

    const handleNavClick = (e: React.MouseEvent, name: string) => {
        e.preventDefault();

        if (name === 'Projects') {
            onNavigate('home');
            // Allow state update to propagate then scroll
            setTimeout(() => {
                const element = document.getElementById('projects-section');
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else if (name === 'About') {
            onNavigate('about');
        } else {
            // Default behavior for other links if any
        }

        setIsMenuOpen(false);
    };

    return (
        <>
            {/* Desktop Sidebar */}
            <aside className="hidden md:flex flex-col w-64 h-screen fixed left-0 top-0 bg-white z-50 p-8 border-r border-gray-100">
                {/* Logo / Title */}
                <div className="mb-12 cursor-pointer" onClick={() => onNavigate('home')}>
                    <h1 className="subtitle">
                        Jinwon Lee
                    </h1>
                    <p className="subtext mt-1">UX Designer & Developer<br></br> Based in London, Seoul</p>
                </div>

                {/* Navigation */}
                <nav className="flex flex-col gap-2">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.name)}
                            className={`subtitle transition-colors duration-300 ${isActive(link.name) ? 'text-black' : 'text-gray-400 hover:text-black'}`}
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                <div className="mt-auto subtext text-gray-400">
                    © {new Date().getFullYear()} Jinwon Lee
                </div>
            </aside >

            {/* Mobile Header (retained for mobile responsiveness) */}
            <header className="md:hidden fixed top-0 left-0 w-full z-50 px-8 py-2 flex justify-between items-center bg-white/50 backdrop-blur-sm">
                <h1 className="subtitle" onClick={() => onNavigate('home')}>
                    Jinwon Lee
                </h1>
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="p-2"
                >
                    {isMenuOpen ? (
                        <X className="w-5 h-5 text-black" />
                    ) : (
                        <Menu className="w-5 h-5 text-black" />
                    )}
                </button>
            </header>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-40 backdrop-blur-sm bg-black/5 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    } md:hidden`}
                onClick={() => setIsMenuOpen(false)}
            >
                <div
                    className="w-full bg-white pt-20 pb-8 shadow-sm"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="px-8 flex flex-col">
                        <nav className="flex flex-col gap-6">
                            {links.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.name)}
                                    className={`subtitle ${isActive(link.name) ? 'text-black' : 'text-gray-400'}`}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
};
