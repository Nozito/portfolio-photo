'use client';

import '../globals.css';
import React from 'react';
import Head from 'next/head';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';

export default function Concerts() {
  return (
    <div>
      {/* Head Section */}
      <Head>
        <title>Mes Concerts</title>
        <meta name="description" content="Concerts" />
        <link rel="icon" href="/img/favicon.ico" />
      </Head>

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="flex justify-center items-center flex-col bg-black h-screen">
        <h1 className="mb-4 text-4xl font-bold text-white">CONCERTS</h1>
      </div>

      {/* Concerts Section */}
      <section className="relative">
        <div
          className="absolute inset-0 bg-cover bg-center h-screen"
          style={{
            backgroundImage: 'url(/img/hgfv23.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="overlay flex justify-center items-center min-h-screen bg-black bg-opacity-50">
            <div className="text-center text-white">
              <h1 className="text-4xl font-semibold mb-4">HIGH FIVE 2023</h1>
              <button
                className="btn bg-white text-black py-2 px-4 rounded-md hover:bg-gray-300"
                onClick={() => {
                  window.location.href = '/high-five';
                }}
              >
                Voir le High Five
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
