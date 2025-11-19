

'use client';

import React from 'react';
import Head from 'next/head';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Portfolio() {
  const categories = [
    {
      title: "Concerts",
      description: "Découvrez mes clichés vibrants capturés lors de concerts.",
      image: "/img/hgfv23.png",
      link: "/concerts",
    },
    {
      title: "Portraits",
      description: "Un regard, une émotion, un instant figé.",
      image: "/img/DSC052772.JPG",
      link: "/portraits",
    },
    {
      title: "Voitures",
      description: "L’univers automobile à travers mon objectif.",
      image: "/img/bannerp.JPG",
      link: "/voitures",
    },
    {
        title: "Voyages",
        description: "Explorez le monde à travers mes photographies de voyage.",
        image: "/img/Malmo-1.jpg",
        link: "/voyages",
    }
  ];

  return (
    <div className="bg-black text-white">
      <Head>
        <title>Mes Projets</title>
        <meta name="description" content="Toutes mes catégories photo" />
        <link rel="icon" href="/img/favicon.ico" />
      </Head>

      <Navbar />

      {/* Hero Section */}
      <section className="relative flex flex-col justify-center items-center h-screen overflow-hidden bg-gradient-to-tr from-gray-900 via-gray-700 to-gray-900">
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

        <div className="relative z-10 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 drop-shadow-lg">MES PROJETS</h1>
          <p className="text-lg sm:text-xl text-gray-200 mb-6 max-w-xl">
            Explorez toutes mes catégories et plongez dans mon univers photographique.
          </p>
          {/* Scroll down indicator */}
          <div className="animate-bounce mt-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </section>

      {/* Decorative underline */}
      <div className="max-w-6xl mx-auto px-6 mt-6">
        <div className="h-1 w-24 bg-white rounded-full mx-auto opacity-80 animate-pulse"></div>
      </div>

      {/* Categories Grid */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative group rounded-2xl overflow-hidden shadow-lg cursor-pointer hover:scale-105 hover:shadow-2xl transition-transform duration-300"
            >
              <div className="relative h-64 w-full rounded-2xl overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="h-full w-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-90 group-hover:opacity-100 transition-opacity rounded-2xl flex flex-col justify-end p-6">
                  <h3 className="text-white text-2xl font-bold drop-shadow-lg">{cat.title}</h3>
                  <p className="text-gray-300 mb-3 drop-shadow-md">{cat.description}</p>
                  <Link
                    href={cat.link}
                    className="inline-block text-sm font-semibold text-white border border-white px-4 py-2 rounded-md hover:bg-white hover:text-black transition"
                  >
                    Voir plus
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}