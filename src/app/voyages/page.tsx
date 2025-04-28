"use client";

import "../globals.css";
import React from "react";
import Image from "next/image";
import Head from "next/head";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Carousel } from "../components/Carousel"; // Import Carousel here

export default function Voyages() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Example slide data to pass to the Carousel component
  const slides = [
    {
      title: "Paris, France",
      button: "Discover",
      src: "/img/paris-1.jpg",
    },
    {
      title: "Stockholm, Suède",
      button: "Explore",
      src: "/img/Stockholm-84.jpg",
    },
  ];

  return (
    <div className="bg-black text-white">
      <Navbar />

      {/* Head */}
      <Head>
        <title>Voyages</title>
        <meta name="description" content="Voyage" />
        <link rel="icon" href="/img/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <div className="flex justify-center items-center flex-col bg-black h-screen">
        <h1 className="mb-4 text-4xl font-bold">AROUND THE WORLD</h1>
      </div>

      {/* Carousel Section */}
      <div className="flex justify-center items-center py-10">
        <Carousel slides={slides} />
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-600 transition"
        title="Retour en haut"
      >
        ↑
      </button>

      {/* Footer */}
      <Footer />
    </div>
  );
}
