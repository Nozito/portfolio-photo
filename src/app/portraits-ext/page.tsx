'use client'

import '../globals.css';
import Head from 'next/head';
import React from 'react';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';

export default function Portraits() {
  return (
    <div>
{/* Navbar */}
<Navbar />
      {/* Head Section */}
      <Head>
        <title>Mes portraits</title>
        <meta name="description" content="Portraits" />
        <link rel="icon" href="/img/favicon.ico" />
      </Head>      
      
      {/* Hero Section */}
      <div className="flex justify-center items-center flex-col bg-black h-screen">
        <h1 className="mb-4 text-4xl font-bold text-white">PORTRAITS EXT.</h1>
      </div>

      {/* Gallery Section */}
       <section className="container mx-auto py-10">
        <h2 className="text-3xl font-semibold text-center text-white mb-8">Eliott</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <img
            src="/img/Eliott1.jpg"
            alt="Eliott 1"
            className="w-full h-auto object-cover rounded-lg"
          />
          <img
            src="/img/Eliott2.jpg"
            alt="Eliott 2"
            className="w-full h-auto object-cover rounded-lg"
          />
          <img
            src="/img/Eliott4.jpg"
            alt="Eliott 3"
            className="w-full h-auto object-cover rounded-lg"
          />
          <img
            src="/img/Eliott5.jpg"
            alt="Eliott 4"
            className="w-full h-auto object-cover rounded-lg"
          />
          <img
            src="/img/Eliott3.jpg"
            alt="Eliott 5"
            className="w-full h-auto object-cover rounded-lg"
          />
          <img
            src="/img/Eliott6.jpg"
            alt="Eliott 6"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </section>
        
        {/* Footer */}
        <Footer />
    </div>
  );
};

