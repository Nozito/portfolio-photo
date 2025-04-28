'use client'

import React, { useState } from 'react'

export function Navbar() {
    const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const togglePortfolio = () => setIsPortfolioOpen(!isPortfolioOpen);
    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    return (
        <nav className="bg-black relative">
            {/* Desktop Navbar */}
            <div className="container mx-auto px-4 py-2 hidden md:flex flex-row justify-between items-center">
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
                            Galerie
                        </button>
                        {isPortfolioOpen && (
                            <ul className="absolute bg-black text-white mt-2 space-y-2 p-2 rounded-md shadow-lg w-40 z-10">
                                <li><a href="concerts" className="block py-2 px-4 hover:bg-gray-700">Concerts</a></li>
                                <li><a href="voitures" className="block py-2 px-4 hover:bg-gray-700">Voitures</a></li>
                                <li><a href="portraits" className="block py-2 px-4 hover:bg-gray-700">Portraits</a></li>
                                <li><a href="voyages" className="block py-2 px-4 hover:bg-gray-700">Voyages</a></li>
                            </ul>
                        )}
                    </div>
                    <a href="about" className="hover:text-gray-400">À propos</a>
                    <a href="contact" className="hover:text-gray-400">Contact</a>
                </div>

                {/* Social Media Icons (Desktop only) */}
                <div className="hidden md:flex items-center space-x-2">
                    <a href="https://www.instagram.com/noahdkr_" className="text-white hover:text-gray-400">
                        <img src="img/instagram.png" alt="instagram" className="h-7 w-7" />
                    </a>
                    <a href="https://www.tiktok.com/@noahdkr_" className="text-white hover:text-gray-400">
                        <img src="img/tiktok.png" alt="tiktok" className="h-7 w-7" />
                    </a>
                    <a href="https://www.linkedin.com/in/noah-dkr/" className="text-white hover:text-gray-400">
                        <img src="img/linkedin.png" alt="linkedin" className="h-7 w-7" />
                    </a>
                </div>
            </div>

            {/* Mobile Navbar */}
            <div className="md:hidden flex justify-between items-center px-4 py-2">
                {/* Logo centered */}
                <div className="flex-1 text-center">
                    <a href="/">
                        <img src="img/Nb.png" alt="Noah_pfp" className="h-20 w-20 mx-auto" />
                    </a>
                </div>

                {/* Burger Menu Button */}
                <button onClick={toggleMobileMenu} className="absolute right-4 top-6 text-white" aria-label="Menu Toggle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-black text-white px-6 py-4 space-y-4">
                    <a href="/" className="block hover:text-gray-400">Accueil</a>
                    <div>
                        <button onClick={togglePortfolio} className="hover:text-gray-400">Galerie</button>
                        {isPortfolioOpen && (
                            <ul className="mt-2 space-y-2 ml-4">
                                <li><a href="concerts" className="block hover:text-gray-400">Concerts</a></li>
                                <li><a href="voitures" className="block hover:text-gray-400">Voitures</a></li>
                                <li><a href="portraits" className="block hover:text-gray-400">Portraits</a></li>
                                <li><a href="voyages" className="block hover:text-gray-400">Voyages</a></li>
                            </ul>
                        )}
                    </div>
                    <a href="about" className="block hover:text-gray-400">À propos</a>
                    <a href="contact" className="block hover:text-gray-400">Contact</a>

                    <hr className="border-gray-600 my-4" />

                    {/* Social icons (mobile only) */}
                    <div className="flex justify-center space-x-4">
                        <a href="https://www.instagram.com/noahdkr_">
                            <img src="img/instagram.png" alt="instagram" className="h-7 w-7" />
                        </a>
                        <a href="https://www.tiktok.com/@noahdkr_">
                            <img src="img/tiktok.png" alt="tiktok" className="h-7 w-7" />
                        </a>
                        <a href="https://www.linkedin.com/in/noah-dkr/">
                            <img src="img/linkedin.png" alt="linkedin" className="h-7 w-7" />
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}
