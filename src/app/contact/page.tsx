'use client';

import Head from 'next/head';
import React from 'react';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';

export default function Contact() {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Head Section */}
      <Head>
        <title>Contact</title>
        <meta name="description" content="Contact" />
        <link rel="icon" href="/img/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section className="relative flex flex-col justify-center items-center h-80 md:h-[38vh] lg:h-[45vh] text-center px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
          Discutons ensemble
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-xl mx-auto">
          Vous avez un projet ou une question ? Je suis à votre écoute.
        </p>
      </section>

      {/* Form Section */}
      <section className="flex-grow flex justify-center items-start py-16 px-4">
        <div className="bg-white p-8 shadow-xl rounded-2xl w-full max-w-xl">
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="space-y-6"
          >
            <input type="hidden" name="access_key" value="10947d5b-61a6-487a-bd31-3f27a9480579" />
            <input type="hidden" name="subject" value="Demande de contact" />
            <input type="hidden" name="from_name" value="Portfolio Photo" />

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Nom <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Jean Dupont"
                className="mt-2 block w-full p-3 border border-gray-300 rounded-xl focus:border-purple-500 focus:ring-purple-500 focus:ring-1 transition"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="jean.dupont@email.com"
                className="mt-2 block w-full p-3 border border-gray-300 rounded-xl focus:border-purple-500 focus:ring-purple-500 focus:ring-1 transition"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Téléphone
              </label>
              <input
                id="phone"
                name="phone"
                type="text"
                placeholder="(+33) 6 78 91 01 23"
                className="mt-2 block w-full p-3 border border-gray-300 rounded-xl focus:border-purple-500 focus:ring-purple-500 focus:ring-1 transition"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                Objet <span className="text-red-500">*</span>
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                placeholder="Votre demande"
                className="mt-2 block w-full p-3 border border-gray-300 rounded-xl focus:border-purple-500 focus:ring-purple-500 focus:ring-1 transition"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Décrivez votre projet ou votre besoin ici..."
                className="mt-2 block w-full p-3 border border-gray-300 rounded-xl focus:border-purple-500 focus:ring-purple-500 focus:ring-1 transition"
              ></textarea>
            </div>

            <p className="text-sm text-gray-500 italic">* Champs obligatoires</p>

            <button
              type="submit"
              className="w-full py-3 mt-6 bg-black text-white font-semibold rounded-xl hover:bg-gray-600 transition"
            >
              Envoyer le message
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
