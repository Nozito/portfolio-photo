'use client'

import React, { useState } from 'react'

export function Navbar() {
    const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);

    const togglePortfolio = () => {
        setIsPortfolioOpen(!isPortfolioOpen);
    };

    return (
        <nav className="bg-black">
            <div className="container mx-auto px-4 py-2 flex flex-col md:flex-row justify-between items-center">
                {/* Logo */}
                <a href="/" className="mb-4 md:mb-0">
                    <img src="img/Nb.png" alt="Noah_pfp" className="h-24 w-24" />
                </a>

                {/* Navigation Links */}
                <div className="hidden md:flex space-x-8 text-white">
                    <a href="/" className="hover:text-gray-400">Accueil</a>
                    <div className="relative">
                        <button
                            className="hover:text-gray-400"
                            onClick={togglePortfolio}
                        >
                            Portfolio
                        </button>
                        {isPortfolioOpen && (
                            <ul className="absolute bg-black text-white mt-2 space-y-2 p-2 rounded-md shadow-lg w-40 z-10">
                                <li>
                                    <a href="concerts" className="block py-2 px-4 hover:bg-gray-700">
                                        Concerts
                                    </a>
                                </li>
                                <li>
                                    <a href="voitures" className="block py-2 px-4 hover:bg-gray-700">
                                        Voitures
                                    </a>
                                </li>
                                <li>
                                    <a href="portraits" className="block py-2 px-4 hover:bg-gray-700">
                                        Portraits
                                    </a>
                                </li>
                            </ul>
                        )}
                    </div>
                    <a href="about" className="hover:text-gray-400">À propos</a>
                    <a href="contact" className="hover:text-gray-400">Contact</a>
                </div>

                {/* Social Media Icons */}
                <div className="flex flex-col items-center space-y-2 md:flex-row md:space-y-0 md:space-x-2">
                    <a href="https://www.instagram.com/noahdkr_" className="text-white hover:text-gray-400">
                        <img src="img/instagram.png" alt="instagram" className="h-7 w-7" />
                    </a>
                    <a href="https://www.tiktok.com/@noahdkr_" className="text-white hover:text-gray-400">
                        <img src="img/tiktok.png" alt="tiktok" className="h-7 w-7" />
                    </a>
                    <a href="https://twitter.com/noahdkr_" className="text-white hover:text-gray-400">
                        <img src="img/twitter.png" alt="twitter" className="h-7 w-7" />
                    </a>
                </div>
            </div>

            {/* Mobile Navbar */}
            <div className="md:hidden flex justify-between items-center text-white">
                <button className="text-white hover:text-gray-400" aria-label="Menu Toggle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </nav>
    )
}
