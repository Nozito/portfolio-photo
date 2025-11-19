"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 max-w-4xl w-[92%] rounded-xl backdrop-blur-xl bg-white/10 dark:bg-black/20 border border-white/10 shadow-lg">
      {/* Desktop */}
      <div className="hidden md:flex justify-between items-center px-6 py-2 text-white">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/img/Nb.png"
            alt="logo"
            width={44}
            height={44}
            className="rounded-full shadow-lg"
          />
        </Link>

        {/* Nav links */}
        <div className="flex items-center gap-8 text-sm font-medium">

          <Link href="/" className="relative group">
            Accueil
            <span className="absolute bottom-[-3px] left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link href="/portfolio" className="relative group">
            Projets
            <span className="absolute bottom-[-3px] left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link href="/about" className="relative group">
            À propos
            <span className="absolute bottom-[-3px] left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link href="/contact" className="relative group">
            Contact
            <span className="absolute bottom-[-3px] left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>


        {/* Social Icons */}
        <div className="flex items-center gap-2">
          <Link href="https://www.instagram.com/noahdkr_" className="hover:scale-110 transition">
            <Image src="/img/instagram.png" alt="insta" width={28} height={28} />
          </Link>
          <Link href="https://www.tiktok.com/@noahdkr_" className="hover:scale-110 transition">
            <Image src="/img/tiktok.png" alt="tiktok" width={28} height={28} />
          </Link>
          <Link href="https://www.linkedin.com/in/noah-dkr/" className="hover:scale-110 transition">
            <Image src="/img/linkedin.png" alt="linkedin" width={28} height={28} />
          </Link>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden flex justify-between items-center px-3 py-2 text-white">

        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/img/Nb.png"
            alt="logo"
            width={40}
            height={40}
            className="rounded-full shadow-lg"
          />
        </Link>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu toggle"
          className="relative w-8 h-8"
        >
          <span className={`absolute top-1/2 left-0 w-full h-[3px] bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'}`}></span>
          <span className={`absolute top-1/2 left-0 w-full h-[3px] bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`absolute top-1/2 left-0 w-full h-[3px] bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'}`}></span>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/40 backdrop-blur-2xl text-white px-5 py-4 space-y-5 border-t border-white/10">

          <Link href="/" className="block hover:text-gray-300">Accueil</Link>
          <Link href="/portfolio" className="block hover:text-gray-300">Projets</Link>
          <Link href="/about" className="block hover:text-gray-300">À propos</Link>
          <Link href="/contact" className="block hover:text-gray-300">Contact</Link>

          <hr className="border-white/20" />

          <div className="flex justify-center gap-5">
            <Link href="https://www.instagram.com/noahdkr_">
              <Image src="/img/instagram.png" alt="insta" width={26} height={26} />
            </Link>
            <Link href="https://www.tiktok.com/@noahdkr_">
              <Image src="/img/tiktok.png" alt="tiktok" width={26} height={26} />
            </Link>
            <Link href="https://www.linkedin.com/in/noah-dkr/">
              <Image src="/img/linkedin.png" alt="linkedin" width={26} height={26} />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
