'use client'

import '../globals.css';
import React from 'react';

export default function PorschePage() {
  // Fonction pour faire défiler la page vers le haut lorsqu'on clique sur le bouton
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <div className="flex justify-center items-center flex-col bg-black h-screen">
        <h1 className="mb-4 text-4xl font-bold">PORSCHE</h1>
      </div>

      {/* Gallery Section */}
      <div className="gallery-container">
        <h2 className="text-center text-2xl mb-4">Centre Mont Blanc - 2023</h2>
        <img src="img/GT3r.JPG" alt="Modèle GT3 Rouge" className="w-full mb-4" />

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <img src="img/911n.JPG" alt="Black 911 Carrera 4s" className="w-full" />
          <img src="img/GT3RSpl.JPG" alt="GT3RS Tire behind a plant" className="w-full" />
        </div>

        {/* Additional Images */}
        <img src="img/GT3RSint.JPG" alt="GT3RS Interior" className="w-full mb-4" />

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <img src="img/953t.JPG" alt="Tonneau 953 Dakar" className="w-full" />
          <img src="img/Watchs.JPG" alt="Montre" className="w-full" />
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
