'use client';

import '../globals.css';
import Head from 'next/head';
import React from 'react';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';

export default function Voitures() {
  return (
    <>
    {/* Head Section */}
    <Head>
        <title>Les Voitures</title>
        <meta name="description" content="Collection de voitures" />
        <link rel="icon" href="/img/favicon.ico" />
      </Head>
      
      {/* Navbar */}
      <Navbar />


      {/* Hero Section */}
      <div className="flex justify-center items-center flex-col bg-black min-h-screen text-center text-white">
        <h1 className="mb-4 text-4xl font-bold uppercase">VOITURES</h1>
      </div>

      {/* Porsche Section */}
      <div
        className="relative bg-cover bg-center h-screen"
        style={{ backgroundImage: "url('/img/bannerp.JPG')" }}
        role="img"
        aria-label="Image de Porsche"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center items-center text-center text-white h-full">
          <h1 className="text-4xl font-bold mb-6">PORSCHE</h1>
          <button
            className="px-6 py-3 bg-white text-black border-2 border-black rounded-lg hover:bg-black hover:text-white transition duration-300"
            onClick={() => {
              window.location.href = '/porsche';
            }}
          >
            Voir les PORSCHE
          </button>
        </div>
      </div>

      {/* Peugeot Section */}
      <div
        className="relative bg-cover bg-center h-screen"
        style={{ backgroundImage: "url('/img/308JL-48.jpg')" }}
        role="img"
        aria-label="Image de Peugeot"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center items-center text-center text-white h-full">
          <h1 className="text-4xl font-bold mb-6">PEUGEOT</h1>
          <button
            className="px-6 py-3 bg-white text-black border-2 border-black rounded-lg hover:bg-black hover:text-white transition duration-300"
            onClick={() => {
              window.location.href = '/peugeot';
            }}
          >
            Voir les Peugeot
          </button>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};
