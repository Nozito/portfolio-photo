"use client";

import "../globals.css";
import React from "react";
import Image from "next/image";
import Head from "next/head";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { BlurFade } from "../components/BlurFade";
import "./style.css";

export default function Porsche() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-black text-white">
      <Navbar />

      {/* Head */}
      <Head>
        <title>Porsche</title>
        <meta name="description" content="Porsche Collection" />
        <link rel="icon" href="/img/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <div className="flex justify-center items-center flex-col bg-black h-screen">
        <h1 className="mb-4 text-4xl font-bold">PORSCHE</h1>
      </div>

      {/* BlurFade Images Section */}
      <BlurFade>
        <div className="flex relative justify-center items-center mb-20">
          <div id="cssportal-grid">
            <div id="div1">
              <Image
                src="/img/GT3r.JPG"
                alt="GT3 Red"
                width={1000}
                height={1000}
              />
            </div>
            <div id="div2">
              <Image
                src="/img/GT3RSint.JPG"
                alt="GT3RS Interior"
                width={1000}
                height={1000}
              />
            </div>
            <div id="div3">
              <Image
                src="/img/Watchs.JPG"
                alt="Watch Collection"
                width={1000}
                height={1000}
              />
            </div>
            <div id="div4">
              <Image
                src="/img/911n.JPG"
                alt="Black 911"
                width={1000}
                height={1000}
              />
            </div>
            <div id="div5">
              <Image
                src="/img/953t.JPG"
                alt="953 T"
                width={1000}
                height={1000}
              />
            </div>
            <div id="div6">
              <Image
                src="/img/GT3RSpl.JPG"
                alt="GT3RS Plant"
                width={1000}
                height={1000}
              />
            </div>
            <div id="div7">
              <Image
                src="/img/bannerp.JPG"
                alt="Logo Porsche Collection"
                width={1000}
                height={1000}
              />
            </div>
          </div>
        </div>
      </BlurFade>

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