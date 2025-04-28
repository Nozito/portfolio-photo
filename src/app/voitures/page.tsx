'use client';

import '../globals.css';
import Head from 'next/head';
import React from 'react';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import Image from 'next/image';

const Voitures: React.FC = () => {
  return (
    <>
      {/* Head Section */}
      <Head>
        <title>Gallerie Voitures</title>
        <meta name="description" content="Collection de voitures" />
        <link rel="icon" href="/img/favicon.ico" />
      </Head>

      {/* Navbar */}
      <Navbar />

      {/* Header Section */}
      <header className="flex items-center justify-center h-[35vh] bg-black">
        <h1 className="text-5xl font-bold text-white">Voitures</h1>
      </header>

      {/* Main Content */}
      <main className="flex-grow px-6 py-12 bg-gray-100">
        {/* Container for cars section */}
        <div className="flex justify-center gap-8">
          {/* Porsche Section */}
          <div className="relative group w-full sm:max-w-md lg:max-w-2xl h-[30rem] overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/img/bannerp.JPG"
              alt="Porsche"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center">
              <h2 className="text-2xl font-bold text-white mb-4">PORSCHE</h2>
              <a
                href="/porsche"
                className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-900"
              >
                Voir les PORSCHE
              </a>
            </div>
          </div>

          {/* Peugeot Section */}
          <div className="relative group w-full sm:max-w-md lg:max-w-2xl h-[30rem] overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/img/308JL-48.jpg"
              alt="Peugeot"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center">
              <h2 className="text-2xl font-bold text-white mb-4">PEUGEOT</h2>
              <a
                href="/peugeot"
                className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-900"
              >
                Voir les PEUGEOT
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Voitures;