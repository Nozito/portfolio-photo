'use client'

import '../globals.css';
import React from 'react';


export default function Concerts() {
  return (
    <div>
          <title>MES CONCERTS</title>
      {/* Hero Section */}
      <div className="flex justify-center items-center flex-col bg-black h-screen">
        <h1 className="mb-4 text-4xl font-bold text-white">CONCERTS</h1>
      </div>

      {/* Concerts Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/path_to_your_background_image.jpg)' }}>
          <div className="overlay container-fluid flex justify-center items-center min-h-screen bg-black bg-opacity-50">
            <div className="text-center text-white">
              <h1 className="text-4xl font-semibold mb-4">HIGH FIVE 2023</h1>
              <button
                className="btn bg-white text-black py-2 px-4 rounded-md hover:bg-gray-300"
                onClick={() => window.location.href = 'hgfive.html'}
              >
                Voir le High Five
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
