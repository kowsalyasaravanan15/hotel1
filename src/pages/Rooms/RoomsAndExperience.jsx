// components/RoomExploreBanner.jsx

import React from 'react';

/**
 * A banner component for exploring rooms and suites.
 * Features a dark wood background and a scenic window view.
 * The component is responsive for all device sizes.
 */
const RoomExploreBanner = () => {
  return (
    // The main container. We'll simulate the background wood texture and dark overlay
    // using classes, and set a minimum height for visibility.
    // The image itself isn't applied via Tailwind, so we'll use a placeholder structure
    // that assumes the image (or a suitable background) is applied to the section
    // where this component is used, or simulate the dark wood / window effect.
    // For this example, we'll focus on the *text overlay and layout*.
    <div className="relative h-[50vh] md:h-[50vh] flex items-center justify-center text-white bg-cover bg-center"
         style={{ backgroundImage: "url('/wood.jpg')" }}>
      
      {/* Optional: Add a subtle overlay for better text readability, simulating the image's dark tone */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Content Container */}
      <div className="relative z-10 text-center px-4">
        
        {/* Welcome Text/Small Heading */}
        <p className="text-sm tracking-widest uppercase font-light mb-2 text-gray-200">
          WELCOME TO KINGSUKH GUEST HOUSE
        </p>
        
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-4 tracking-tight">
          Explore Rooms & Suites
        </h1>
        
        {/* Subheading */}
        <p className="text-base sm:text-lg font-light text-gray-300">
          Every Room is Unique at Kingsukh Guest House
        </p>
        
        {/* Optional: Placeholder for the down-arrow element shown in the design */}
        {/* In a real scenario, this would be an SVG or an icon component */}
        <div className="mt-10">
          <svg 
            className="w-8 h-8 mx-auto text-white" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
            style={{ transform: 'rotate(180deg)' }} // Rotated for a down-arrow look similar to the image
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 15l7-7 7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default RoomExploreBanner;