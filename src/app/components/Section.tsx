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

  // Determine if the background is light
  const isLightBackground = backgroundColor?.includes('white');

  // Button styles based on the background color
  const buttonStyles = isLightBackground
    ? 'bg-white text-black border-black hover:bg-black hover:text-white hover:border-white'
    : 'bg-black text-white border-black hover:bg-white hover:text-black hover:border-white';

  // Title color based on the background
  const titleStyles = isLightBackground ? 'text-black' : 'text-white';

  return (
    <div 
      className={`flex ${reverse ? 'flex-row-reverse' : 'flex-row'} items-center justify-center min-h-screen ${backgroundColor || 'bg-black'}`}
    >
      {/* Content Section */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
        {/* Title */}
        <h1 className={`text-4xl font-bold mb-4 ${titleStyles}`}>{title}</h1>
        
        {/* Button */}
        <button
          className={`py-2 px-4 border-2 rounded-lg transition-transform transform hover:scale-105 mb-6 ${buttonStyles}`} /* Standard button size with `px-4` */
          onClick={() => window.location.href = link}
        >
          {buttonText}
        </button>
      </div>

      {/* Image Section */}
      <div className="flex-1 flex justify-center">
        <img 
          src={image} 
          alt={title} 
          className="w-[85%] h-auto object-cover rounded-lg mt-4" /* Adjusted width for better scaling */
        />
      </div>
    </div>
  );
}
