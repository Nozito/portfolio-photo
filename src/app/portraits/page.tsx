import React from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import Head from "next/head";

const PortraitCards: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
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
        <h1 className="mb-4 text-4xl font-bold text-white">PORTRAITS</h1>
      </div>

      {/* Main Content */}
      <main className="flex-grow">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-6">
          {/* Card: Portraits Extérieurs */}
          <div className="relative group w-full max-w-2xl h-[30rem] overflow-hidden rounded-lg shadow-lg">
            <img
              src="/img/Eliott2.jpg"
              alt="Portraits Extérieurs"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center">
              <h2 className="text-2xl font-bold text-white mb-4">Portraits Extérieurs</h2>
              <a href="portraits-ext" className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-900">
                Voir plus
              </a>
            </div>
          </div>

          {/* Card: Portraits Studio */}
          <div className="relative group w-full max-w-2xl h-[30rem] overflow-hidden rounded-lg shadow-lg">
            <img
              src="/img/DSC05277.jpg"
              alt="Portraits Studio"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center">
              <h2 className="text-2xl font-bold text-white mb-4">Portraits Studio</h2>
              <a href="portraits-int" className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-900">
                Voir plus
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PortraitCards;
