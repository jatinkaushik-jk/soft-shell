import React from 'react'

export const Footer = () => {
    return (
        <footer className={`py-8 dark:bg-gray-800/50 bg-gray-100`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="md:flex md:items-center md:justify-between">
                    <div className="flex justify-center md:justify-start">
                        <div className="flex items-center">
                            <span className={`text-2xl font-bold text-primary`}>Soft</span>
                            <span className={`text-2xl font-bold dark:text-white text-gray-900`}>Sell</span>
                        </div>
                    </div>
                    <div className="mt-8 md:mt-0">
                        <p className={`text-center md:text-right text-sm dark:text-gray-400 text-gray-500`}>
                            &copy; {new Date().getFullYear()} SoftSell. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
