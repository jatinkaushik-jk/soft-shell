"use client"
import React from 'react'
import ModeToggleButton from './mode-toggle'

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <nav className={`fixed w-full z-10 dark:bg-gray-900 bg-white `}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 flex items-center">
                            <span className={`text-2xl font-bold text-primary`}>Soft</span>
                            <span className={`text-2xl font-bold dark:text-white text-gray-900`}>Sell</span>
                        </div>
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                        <a href="#how-it-works" className={`px-3 py-2 rounded-md text-sm font-medium dark:text-gray-300 dark:hover:bg-gray-700 text-gray-700 hover:bg-gray-100`}>How It Works</a>
                        <a href="#why-choose-us" className={`px-3 py-2 rounded-md text-sm font-medium dark:text-gray-300 dark:hover:bg-gray-700 text-gray-700 hover:bg-gray-100`}>Why Choose Us</a>
                        <a href="#testimonials" className={`px-3 py-2 rounded-md text-sm font-medium dark:text-gray-300 dark:hover:bg-gray-700 text-gray-700 hover:bg-gray-100`}>Testimonials</a>
                        <a href="#contact" className={`px-3 py-2 rounded-md text-sm font-medium dark:text-gray-300 dark:hover:bg-gray-700 text-gray-700 hover:bg-gray-100`}>Contact</a>

                        <ModeToggleButton />
                    </div>

                    <div className="flex gap-x-2 md:hidden items-center">
                        <ModeToggleButton />

                        <button
                            onClick={toggleMenu}
                            className={`p-2 rounded-md dark:text-gray-300 dark:hover:bg-gray-700 text-gray-700 hover:bg-gray-100`}
                            aria-label="Toggle menu"
                        >
                            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu, show/hide based on menu state. */}
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 dark:bg-gray-800 bg-white`}>
                        <a href="#how-it-works" className={`block px-3 py-2 rounded-md text-base font-medium dark:text-white dark:hover:bg-gray-700 text-gray-700 hover:bg-gray-100`}>How It Works</a>
                        <a href="#why-choose-us" className={`block px-3 py-2 rounded-md text-base font-medium dark:text-white dark:hover:bg-gray-700 text-gray-700 hover:bg-gray-100`}>Why Choose Us</a>
                        <a href="#testimonials" className={`block px-3 py-2 rounded-md text-base font-medium dark:text-white dark:hover:bg-gray-700 text-gray-700 hover:bg-gray-100`}>Testimonials</a>
                        <a href="#contact" className={`block px-3 py-2 rounded-md text-base font-medium dark:text-white dark:hover:bg-gray-700 text-gray-700 hover:bg-gray-100`}>Contact</a>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar