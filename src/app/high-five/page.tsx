'use client'

import '../globals.css';
import React from 'react';

export default function HighFive() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <div className="flex justify-center items-center flex-col bg-black h-screen">
        <h1 className="mb-4 text-4xl font-bold">HIGH FIVE</h1>
      </div>

      {/* Gallery Section 1: Josman */}
      <div className="gallery-container mb-8">
        <h2 className="text-center text-2xl mb-4">JOSMAN</h2>
        <img src="img/jos1.JPG" alt="Josman 1" className="w-full mb-4" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <img src="img/jos4.JPG" alt="Josman 4" className="w-full" />
          <img src="img/jos3.JPG" alt="Josman 3" className="w-full" />
        </div>
        <img src="img/jos2.JPG" alt="Josman 2" className="w-full mb-4" />
        <img src="img/jos5.JPG" alt="Josman 5" className="w-full" />
      </div>

      {/* Gallery Section 2: 99 Rocky */}
      <div className="gallery-container mb-8">
        <h2 className="text-center text-2xl mb-4">99 ROCKY</h2>
        <img src="img/994.JPG" alt="99Rocky-4" className="w-full mb-4" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <img src="img/991.JPG" alt="99Rocky-1" className="w-full" />
          <img src="img/993.JPG" alt="99Rocky-3" className="w-full" />
        </div>
        <img src="img/992.JPG" alt="99Rocky-2" className="w-full" />
      </div>

      {/* Gallery Section 3: Karmen */}
      <div className="gallery-container mb-8">
        <h2 className="text-center text-2xl mb-4">KARMEN</h2>
        <img src="img/Karmen3.JPG" alt="Karmen3" className="w-full mb-4" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <img src="img/Karmen2.JPG" alt="Karmen2" className="w-full" />
          <img src="img/Karmen1.JPG" alt="Karmen1" className="w-full" />
        </div>
      </div>

      {/* Gallery Section 4: Le Juiice */}
      <div className="gallery-container mb-8">
        <h2 className="text-center text-2xl mb-4">LE JUIICE</h2>
        <img src="img/Juiice2.JPG" alt="Juiice_2" className="w-full mb-4" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <img src="img/Juiice1.JPG" alt="Juiice_1" className="w-full" />
          <img src="img/Juiice3.JPG" alt="Juiice_3" className="w-full" />
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-600 transition"
        title="Retour en haut"
      >
        ↑
      </button>
    </div>
  );
};
