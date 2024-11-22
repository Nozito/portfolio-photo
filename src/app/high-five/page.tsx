'use client';

import '../globals.css';
import './style.css';
import Head from 'next/head';
import React from 'react';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import Image from 'next/image';

export default function HighFive() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-black text-white">
      {/* Navbar */}
      <Navbar />
      {/* Head Section */}
      <Head>
        <title>High Five</title>
        <meta name="description" content="High Five" />
        <link rel="icon" href="/img/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <div className="flex justify-center items-center flex-col bg-black h-screen">
        <h1 className="mb-4 text-4xl font-bold">HIGH FIVE</h1>
      </div>


      {/* Gallery Section 1: Josman */}
      <div className="relative mx-auto">
        <h2 className="text-6xl font-bold mb-2 justify-start ml-24">Josman</h2>
        <div id="cssportal-grid">
          <div id="div1">
            <Image
              src="/img/jos2.JPG"
              alt="Le noir là"
              width={1000}
              height={1000}
            />
          </div>
          <div id="div2">
            <Image
              src="/img/jos1.JPG"
              alt="Le noir là"
              width={1000}
              height={1000}
            />
          </div>
          <div id="div3">
            <Image
              src="/img/jos5.JPG"
              alt="Toujours lui"
              width={1000}
              height={1000}
            />
          </div>
          <div id="div4">
            <Image
              src="/img/jos4.JPG"
              alt="Le noir là"
              width={1000}
              height={1000}
            />
          </div>
          <div id="div5">
            <Image
              src="/img/jos3.JPG"
              alt="Le noir là"
              width={1000}
              height={1000}
            />
          </div>
        </div>
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
      {/* Footer */}
      <Footer />
    </div>
  );
};