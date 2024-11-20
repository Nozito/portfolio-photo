'use client'

import React from 'react';
import '../globals.css';

export default function Portraits() {
  return (
    <div>
    <title>MES PORTRAITS</title>
      {/* Hero Section */}
      <div className="flex justify-center items-center flex-col bg-black h-screen">
        <h1 className="mb-4 text-4xl font-bold text-white">PORTRAITS EXT.</h1>
      </div>

      {/* Gallery Section */}
      <section className="container mx-auto py-10">
        <h2 className="text-3xl font-semibold text-center text-white mb-8">JOSMAN</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <img
            src="path_to_your_image1.jpg"
            alt="Concert Image 1"
            className="w-full h-auto object-cover rounded-lg"
          />
          <img
            src="path_to_your_image2.jpg"
            alt="Concert Image 2"
            className="w-full h-auto object-cover rounded-lg"
          />
          <img
            src="path_to_your_image3.jpg"
            alt="Concert Image 3"
            className="w-full h-auto object-cover rounded-lg"
          />
          <img
            src="path_to_your_image4.jpg"
            alt="Concert Image 4"
            className="w-full h-auto object-cover rounded-lg"
          />
          <img
            src="path_to_your_image5.jpg"
            alt="Concert Image 5"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </section>
    </div>
  );
};

