'use client';

import '../globals.css';
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
      <div className="flex justify-center items-center flex-col bg-black h-screen">
        <h1 className="mb-4 text-4xl font-bold text-white">CONTACT</h1>
      </div>

      {/* Contact Section */}
      <section className="container py-10 mx-auto flex-grow">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-white">Let&apos;s Talk!</h2>
          <p className="text-lg text-white">
            Remplissez dès maintenant le formulaire ci-dessous pour me contacter.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-lg mx-auto">
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
          >
            <input
              type="hidden"
              name="access_key"
              value="10947d5b-61a6-487a-bd31-3f27a9480579"
            />
            <input
              type="hidden"
              name="subject"
              value="Demande de contact"
            />
            <input
              type="hidden"
              name="from_name"
              value="Portfolio Photo"
            />

            <div className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-gray-800 font-medium">Nom*</label>
                <input
                  id="name"
                  name="name"
                  className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                  placeholder="Votre nom"
                  type="text"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-gray-800 font-medium">Email*</label>
                <input
                  id="email"
                  name="email"
                  className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                  placeholder="Votre email"
                  type="email"
                  required
                />
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-gray-800 font-medium">Numéro de téléphone</label>
                <input
                  id="phone"
                  name="phone"
                  className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                  placeholder="(+33)0678910123"
                  type="text"
                />
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-gray-800 font-medium">Nature de la demande*</label>
                <input
                  id="subject"
                  name="subject"
                  className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                  placeholder="Nature de votre demande"
                  type="text"
                  required
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-gray-800 font-medium">Message*</label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                  placeholder="Votre message"
                  required
                ></textarea>
              </div>
            </div>

            {/* Notice for required fields */}
            <p className="mt-4 text-gray-600 text-sm">* Champs obligatoires</p>

            {/* Submit Button */}
            <button className="w-full py-3 mt-6 bg-black text-white rounded-md" type="submit">
              Envoyer le message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
