'use client';

import React from 'react';

export function Section(props: { 
  title: string; 
  buttonText: string; 
  image: string; 
  link: string; 
  reverse?: boolean; 
  backgroundColor?: string; 
}) {
  const { title, buttonText, image, link, reverse, backgroundColor } = props;

  // Determine button styles based on the background color
  const isLightBackground = backgroundColor?.includes('white');
  const buttonStyles = isLightBackground
    ? 'bg-white text-black border-black hover:bg-black hover:text-white hover:border-white'
    : 'bg-black text-white border-black hover:bg-white hover:text-black hover:border-white';

  return (
    <div className={`flex ${reverse ? 'flex-row-reverse' : 'flex-row'} items-center min-h-screen ${backgroundColor || 'bg-black'}`}>
      {/* Content Section */}
      <div className={`flex-1 px-8 ${reverse ? 'text-right' : 'text-left'}`}>
        <h1 className="text-4xl font-bold text-white mb-4">{title}</h1>
        <button
          className={`py-2 px-4 border-2 rounded-lg transition-transform transform hover:scale-105 ${buttonStyles}`}
          onClick={() => window.location.href = link}
        >
          {buttonText}
        </button>
      </div>

      {/* Image Section */}
      <div className="flex-1">
        <img src={image} alt={title} className="w-full h-full object-cover rounded-lg" />
      </div>
    </div>
  );
}
