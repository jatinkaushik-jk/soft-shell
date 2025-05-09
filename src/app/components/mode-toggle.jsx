"use client"
import React from 'react'
import { Sun, Moon } from 'lucide-react';

const ModeToggleButton = () => {
    const [darkMode, setDarkMode] = React.useState(false);
    React.useEffect(() => {
        // Check user's preferred color scheme
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setDarkMode(true);
        }
        // Apply dark mode class to document
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };
    return (
        <button
            onClick={toggleDarkMode}
            className={`cursor-pointer ml-4 p-2 rounded-full dark:hover:bg-gray-600 dark:bg-gray-700 dark:text-yellow-300 bg-gray-200 hover:bg-gray-300 text-gray-800 transition-colors duration-300`}
            aria-label="Toggle dark mode"
        >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
    )
}

export default ModeToggleButton