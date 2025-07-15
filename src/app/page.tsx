import React from 'react';
import { Navbar } from './components/Navbar';
import { Section } from './components/Section';
import { Footer } from './components/Footer';
import './globals.css';
import BlurText from './components/BlurText';
import Link from 'next/link';

export default function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <title>Noah&apos;s Portfolio</title>
      <div className="flex justify-center items-center flex-col bg-black h-screen text-center text-white px-4 sm:px-8 lg:px-16">
        <h1 className="mb-4 text-4xl sm:text-5xl lg:text-6xl font-bold uppercase">
          <BlurText
            text="Portfolio de Noah"
            delay={150}
            animateBy="words"
            direction="top"
          />
        </h1>
        <br />
        <Link href="/contact" className="px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition duration-300 ease-in-out">
          Me contacter
        </Link>
      </div>

      {/* Sections */}
      <div>
        {/* Section 1 */}
        <Section
          title="VOITURES"
          buttonText="Voir les voitures"
          image="/img/voitures.png"
          link="voitures"
          reverse={false}
          backgroundColor="bg-gray-400"
        />

        {/* Section 2 */}
        <Section
          title="CONCERTS"
          buttonText="Voir les concerts"
          image="/img/jos1.JPG"
          link="concerts"
          reverse={true}
          backgroundColor="bg-white"
        />

        {/* Section 3 */}
        <Section
          title="PORTRAITS"
          buttonText="Voir les portraits"
          image="/img/DSC052772.JPG"
          link="portraits"
          reverse={false}
          backgroundColor="bg-gray-400"
        />

        {/* Section 4 */}
        <Section
          title="Voyages"
          buttonText="Voir les voyages"
          image="/img/Malmo-1.jpg"
          link="voyages"
          reverse={true}
          backgroundColor="bg-white"
        />
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}