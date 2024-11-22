'use client';

import React from 'react';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-black text-white text-center p-4">
      {/* Logo Section */}
      <div className="mb-1">
        <Image
          src="/img/Nb.png"
          alt="Logo"
          width={100} 
          height={100}
          className="mx-auto"
        />
      </div>

      {/* Social Media Links */}
      <div className="flex justify-center space-x-6 mb-4">
        <a href="https://tiktok.com/@noahdkr_" target="_blank" rel="noopener noreferrer" title="Tiktok">
          <Image
            src="/img/tiktok.png"
            alt="Tiktok"
            width={20}
            height={20}
          />
        </a>
        <a href="https://twitter.com/noahdkr_" target="_blank" rel="noopener noreferrer" title="X">
          <Image
            src="/img/twitter.png"
            alt="X"
            width={20}
            height={20}
          />
        </a>
        <a href="https://www.instagram.com/noahdkr_" target="_blank" rel="noopener noreferrer" title="Instagram">
          <Image
            src="/img/instagram.png"
            alt="Instagram"
            width={20}
            height={20}
          />
        </a>
        <a href="https://linkedin.com/noah-dekeyzer" target="_blank" rel="noopener noreferrer" title="LinkedIn">
          <Image
            src="/img/linkedin.png"
            alt="LinkedIn"
            width={20}
            height={20}
          />
        </a>
      </div>

      {/* Copyright Section */}
      <div className="text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} Dekeyzer Noah. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
