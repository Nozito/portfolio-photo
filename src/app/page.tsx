"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import "./globals.css";


const NavbarAny = Navbar as React.ComponentType<{ dark: boolean; setDark: React.Dispatch<React.SetStateAction<boolean>> }>;

export default function HomePage() {
  const [dark, setDark] = useState(false);

  return (
    <div className={`${dark ? "dark" : ""} overflow-hidden`}>
      {/* Navbar */}
      <NavbarAny dark={dark} setDark={setDark} />

      {/* HERO */}
      <section className="relative flex flex-col justify-center items-center h-[100vh] overflow-hidden bg-black/70 backdrop-blur-lg">
          <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-black/30 to-black/50 z-0"></div>

          <div className="relative z-10 text-center flex flex-col justify-center items-center h-full">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="mt-4 text-6xl sm:text-7xl lg:text-8xl font-extrabold text-white drop-shadow-lg"
            >
              Portfolio de Noah
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="mt-8 flex justify-center gap-4"
            >
              <Link href="#portfolio" className="px-6 py-3 bg-white/90 text-black font-semibold rounded-lg shadow-lg hover:shadow-2xl backdrop-blur-sm transition">
                Voir mes projets
              </Link>
              <Link href="/contact" className="px-6 py-3 border border-white/80 text-white font-semibold rounded-lg hover:bg-white/10 backdrop-blur-sm transition">
                Me contacter
              </Link>
            </motion.div>
          </div>
        </section>

        {/* PORTFOLIO SECTIONS */}
        <section id="portfolio" className="relative z-10 max-w-6xl mx-auto px-6 py-20 space-y-20">
          {[
            { title: "VOITURES", link: "voitures", image: "/img/voitures.png", reverse: false, className:"w-full h-[350px] object-cover rounded-2xl"},
            { title: "CONCERTS", link: "concerts", image: "/img/jos1.JPG", reverse: true, className:"w-full h-[350px] object-cover rounded-2xl" },
            { title: "PORTRAITS", link: "portraits", image: "/img/DSC052772.JPG", reverse: false , className:"w-full h-[350px] object-cover rounded-2xl"},
            { title: "VOYAGES", link: "voyages", image: "/img/Malmo-1.jpg", reverse: true , className:"w-full h-[350px] object-cover rounded-2xl"},
          ].map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <HomeSection
                title={section.title}
                text={`Voir ${section.title.toLowerCase()}`}
                image={section.image}
                link={section.link}
                reverse={section.reverse}
              />
            </motion.div>
          ))}
        </section>

        {/* Footer */}
        <Footer />
      </div>
  );
}

interface HomeSectionProps {
  title: string;
  text: string;
  image: string;
  link: string;
  reverse?: boolean;
}

function HomeSection({ title, text, image, link, reverse }: HomeSectionProps) {
  return (
    <div
      className={`flex flex-col md:flex-row items-center gap-10 relative ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="flex-1 relative group">
        <div className="image-container relative w-full h-[350px] min-h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-lg flex-shrink-0 transition-transform duration-500 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: 'cover' }}
            className="rounded-2xl"
            priority
          />
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="text-white font-semibold text-xl md:text-2xl">{title}</span>
          </div>
        </div>
      </div>

      <div className="flex-1 text-center md:text-left mt-4 md:mt-0">
        <h2 className="text-4xl font-bold mb-4">{title}</h2>
        <Link
          href={`/${link}`}
          className="inline-block mt-4 px-6 py-3 bg-white text-black dark:bg-white dark:text-black font-semibold rounded-lg shadow hover:scale-105 transition"
        >
          {text}
        </Link>
      </div>
    </div>
  );
}