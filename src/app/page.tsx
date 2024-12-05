import React from 'react';
import { Navbar } from './components/Navbar';
import { Section } from './components/Section';
import { Footer } from './components/Footer';
import './globals.css';

export default function App() {
  return (
  <>
    {/* Navbar */}
    <Navbar />

    {/* Hero Section */}
    <title>Noah's Portfolio</title>
    <div className="flex justify-center items-center flex-col bg-black h-screen text-center text-white">
      <h1 className="mb-4 text-4xl font-bold uppercase">let's work together</h1>
      <p className="text-lg mb-4">Explorons des idées créatives et audacieuses.</p>
      <a href="/contact" className="px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200">En savoir plus</a>
    </div>

    {/* Sections */}
    <div>
      {/* Section 1 */}
      <Section 
        title="VOITURES" 
        buttonText="Voir les voitures" 
        image="img/voitures.png" 
        link="voitures" 
        reverse={false} 
        backgroundColor="bg-gray-400"
      />

      {/* Section 2 */}
      <Section 
        title="CONCERTS" 
        buttonText="Voir les concerts" 
        image="img/jos1.JPG" 
        link="concerts" 
        reverse={true} 
        backgroundColor="bg-white" 
      />

      {/* Section 3 */}
      <Section 
        title="PORTRAITS" 
        buttonText="Voir les portraits" 
        image="img/DSC052772.JPG" 
        link="portraits" 
        reverse={false} 
        backgroundColor="bg-gray-400"
      />

      {/* Section 4 
      <Section 
        title="ANOTHER ONE" 
        buttonText="Voir les another one" 
        image="img/jos1.JPG" 
        link="another-one.html" 
        reverse={true} 
        backgroundColor="bg-white" 
      />*/}
    </div>

    {/* Footer */}
    <Footer />
  </>
);
}

