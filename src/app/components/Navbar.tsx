'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

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
                <Link href="/" className="mb-4 md:mb-0">
                    <Image src="/img/Nb.png" alt="Noah_pfp" className="h-24 w-24" width={96} height={96} />
                </Link>

                {/* Navigation Links */}
                <div className="hidden md:flex space-x-8 text-white">
                    <Link href="/" className="hover:text-gray-400">Accueil</Link>
                    <div className="relative">
                        <button
                            className="hover:text-gray-400"
                            onClick={togglePortfolio}
                        >
                            Galerie
                        </button>
                        {isPortfolioOpen && (
                            <ul className="absolute bg-black text-white mt-2 space-y-2 p-2 rounded-md shadow-lg w-40 z-10">
                                <li><Link href="concerts" className="block py-2 px-4 hover:bg-gray-700">Concerts</Link></li>
                                <li><Link href="voitures" className="block py-2 px-4 hover:bg-gray-700">Voitures</Link></li>
                                <li><Link href="portraits" className="block py-2 px-4 hover:bg-gray-700">Portraits</Link></li>
                                <li><Link href="voyages" className="block py-2 px-4 hover:bg-gray-700">Voyages</Link></li>
                            </ul>
                        )}
                    </div>
                    <Link href="about" className="hover:text-gray-400">À propos</Link>
                    <Link href="contact" className="hover:text-gray-400">Contact</Link>
                </div>

                {/* Social Media Icons (Desktop only) */}
                <div className="hidden md:flex items-center space-x-2">
                    <Link href="https://www.instagram.com/noahdkr_" className="text-white hover:text-gray-400">
                        <Image src="/img/instagram.png" alt="instagram" className="h-7 w-7" width={28} height={28} />
                    </Link>
                    <Link href="https://www.tiktok.com/@noahdkr_" className="text-white hover:text-gray-400">
                        <Image src="/img/tiktok.png" alt="tiktok" className="h-7 w-7" width={28} height={28} />
                    </Link>
                    <Link href="https://www.linkedin.com/in/noah-dkr/" className="text-white hover:text-gray-400">
                        <Image src="/img/linkedin.png" alt="linkedin" className="h-7 w-7" width={28} height={28} />
                    </Link>
                </div>
            </div>

            {/* Mobile Navbar */}
            <div className="md:hidden flex justify-between items-center px-4 py-2">
                {/* Logo centered */}
                <div className="flex-1 text-center">
                    <Link href="/">
                        <Image src="/img/Nb.png" alt="Noah_pfp" className="h-20 w-20 mx-auto" width={80} height={80} />
                    </Link>
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
                    <Link href="/" className="block hover:text-gray-400">Accueil</Link>
                    <div>
                        <button onClick={togglePortfolio} className="hover:text-gray-400">Galerie</button>
                        {isPortfolioOpen && (
                            <ul className="mt-2 space-y-2 ml-4">
                                <li><Link href="concerts" className="block hover:text-gray-400">Concerts</Link></li>
                                <li><Link href="voitures" className="block hover:text-gray-400">Voitures</Link></li>
                                <li><Link href="portraits" className="block hover:text-gray-400">Portraits</Link></li>
                                <li><Link href="voyages" className="block hover:text-gray-400">Voyages</Link></li>
                            </ul>
                        )}
                    </div>
                    <Link href="about" className="block hover:text-gray-400">À propos</Link>
                    <Link href="contact" className="block hover:text-gray-400">Contact</Link>

                    <hr className="border-gray-600 my-4" />

                    {/* Social icons (mobile only) */}
                    <div className="flex justify-center space-x-4">
                        <Link href="https://www.instagram.com/noahdkr_">
                            <Image src="/img/instagram.png" alt="instagram" className="h-7 w-7" width={28} height={28} />
                        </Link>
                        <Link href="https://www.tiktok.com/@noahdkr_">
                            <Image src="/img/tiktok.png" alt="tiktok" className="h-7 w-7" width={28} height={28} />
                        </Link>
                        <Link href="https://www.linkedin.com/in/noah-dkr/">
                            <Image src="/img/linkedin.png" alt="linkedin" className="h-7 w-7" width={28} height={28} />
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
