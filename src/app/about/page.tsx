'use client';

import React from 'react';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import '../globals.css';
import Image from 'next/image';

export default function About() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <head>
        <title>À PROPOS</title>
      </head>
      <div className="flex justify-center items-center flex-col h-[50vh] bg-black">
        <h1 className="text-5xl font-bold mb-4">À PROPOS</h1>
      </div>

      {/* Profile Section */}
      <section className="container mx-auto py-12 px-6">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          {/* Profile Photo */}
          <Image
            src="/img/Noah.jpeg"
            alt="Photo de profil"
            width={288}
            height={448} 
            className="rounded-lg shadow-lg w-72 h-[28rem] object-cover"
          />
        </div>

        {/* Profile Text */}
        <div className="flex-1 text-lg leading-relaxed">
          <h2 className="text-4xl font-semibold mb-4">Bonjour,</h2>
          <p className="mb-4">
            Je suis <strong>Noah</strong>, photographe et vidéaste amateur, j'étudie en parallèle en BTS Informatique...
          </p>
          <p className="mb-4">
            Avant de prendre mon indépendance en photos et en vidéos, j’ai suivi pendant 3 ans, en parallèle de mes
            cours, une option cinéma-audiovisuel. J’ai pu réaliser, avec des collègues, 3 courts métrages, ainsi que
            d’autres projets que vous retrouverez dans mon portfolio.
          </p>
          <p className="mb-4">
            À travers ce portfolio, vous pourrez suivre mon évolution depuis mes débuts, que ce soit en photo ou en
            cinématographie.
          </p>
          <p className="mb-4">
            Je n'ai pas de spécialisation particulière en matière de photographie. Je préfère explorer divers sujets
            pour rester polyvalent. Ainsi, vous découvrirez une variété de photos, toutes animées par ma passion. Ces
            images reflètent mon intérêt pour la photographie, et vous invitent à plonger dans leur univers comme si
            vous en faisiez partie !
          </p>
          <p className="mb-4">
            Merci de prendre le temps de découvrir mon travail. J'espère que ces images vous transporteront et vous
            inspireront autant qu'elles m'inspirent.
          </p>
          <p className="mb-4">
            Voici aussi mon{' '}
            <a
              href="dekeyzer.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline hover:text-blue-400"
            >
              Portfolio de Développeur
            </a>
            .
          </p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}