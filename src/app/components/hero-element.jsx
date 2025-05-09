"use client";
import React from 'react'
import Tilt from 'react-parallax-tilt';

const HeroElement = () => {
    return (
        <Tilt tiltMaxAngleX={6} tiltMaxAngleY={6} gyroscope={true} >
            <div className="relative h-64 sm:h-72 md:h-96 lg:h-full" style={{ height: '400px' }}>
                <div className={`absolute inset-0 rounded-lg overflow-hidden dark:bg-gradient-to-br dark:from-blue-800 dark:to-green-700 dark:opacity-40 bg-gradient-to-br from-blue-100 to-green-100`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <svg className="w-3/4 h-3/4 text-blue-500 dark:text-blue-400 opacity-20" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 2H8.828a2 2 0 00-1.414.586L6.293 3.707A1 1 0 015.586 4H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>
                <div className="relative h-full flex items-center justify-center p-8 ">
                    <div className={`p-4 rounded-lg shadow-lg dark:bg-gray-800 bg-white max-w-sm`}>
                        <div className="flex items-center mb-4">
                            <div className={`w-10 h-10 flex items-center justify-center rounded-full dark:bg-blue-600 bg-blue-100`}>
                                <svg className={`w-6 h-6 dark:text-white text-blue-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                            </div>
                            <div className="ml-3">
                                <h3 className={`text-lg font-medium dark:text-white text-gray-900`}>75% ROI</h3>
                                <p className={`text-sm dark:text-gray-400 text-gray-500`}>Average return on unused licenses</p>
                            </div>
                        </div>
                        <div className="flex items-center mb-4">
                            <div className={`w-10 h-10 flex items-center justify-center rounded-full dark:bg-green-600 bg-green-100`}>
                                <svg className={`w-6 h-6 dark:text-white text-green-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div className="ml-3">
                                <h3 className={`text-lg font-medium dark:text-white text-gray-900`}>48 Hours</h3>
                                <p className={`text-sm dark:text-gray-400 text-gray-500`}>Average time to payment</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className={`w-10 h-10 flex items-center justify-center rounded-full dark:bg-purple-600 bg-purple-100`}>
                                <svg className={`w-6 h-6 dark:text-white text-purple-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <div className="ml-3">
                                <h3 className={`text-lg font-medium dark:text-white text-gray-900`}>5,000+</h3>
                                <p className={`text-sm dark:text-gray-400 text-gray-500`}>Satisfied business clients</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Tilt>
    )
}

export default HeroElement