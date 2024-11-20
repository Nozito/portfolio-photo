import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import '../globals.css';

export default function Voitures() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="flex justify-center items-center flex-col bg-black min-h-screen text-center text-white">
        <h1 className="mb-4 text-4xl font-bold uppercase">VOITURES</h1>
      </div>

      {/* Porsche Section */}
      <div
        className="relative bg-cover bg-center h-screen"
        style={{ backgroundImage: "url('img/background-image.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center items-center text-center text-white h-full">
          <h1 className="text-4xl font-bold mb-6">PORSCHE</h1>
          <button
            className="px-6 py-3 bg-white text-black border-2 border-black rounded-lg hover:bg-black hover:text-white transition duration-300"
          >
            Voir les PORSCHE
          </button>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};
