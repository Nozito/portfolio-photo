import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import Head from "next/head";

const StudioShootPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Head Section */}
      <Head>
        <title>Shooting Studio</title>
        <meta name="description" content="Découvrez nos shootings studio" />
        <link rel="icon" href="/img/favicon.ico" />
      </Head>

      {/* Header Section */}
      <header className="flex items-center justify-center h-[50vh] bg-black">
        <h1 className="text-5xl font-bold text-white">Shooting Studio</h1>
      </header>

      {/* Main Content */}
      <main className="flex-grow px-6 py-12 bg-gray-100">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Explorez nos photos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Photo Cards */}
          {Array.from({ length: 9 }).map((_, index) => (
            <div
              key={index}
              className="relative group w-full h-64 overflow-hidden rounded-lg shadow-lg bg-gray-200"
            >
              <img
                src={`/img/studio${index + 1}.jpg`} // Remplacez par vos chemins d'images
                alt={`Studio photo ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <h3 className="text-lg font-bold text-white">Studio Photo {index + 1}</h3>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default StudioShootPage;