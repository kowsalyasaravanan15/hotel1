// components/MountainChaletsSection.jsx
import React from 'react';

const MountainChaletsSection = () => {
  return (
    <div className="font-sans">
      {/* Section 1: Enjoy Mountain Views */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white text-center">
        <p className="text-sm uppercase tracking-widest text-gray-600 mb-3">
          WELCOME TO COZYSTAY MOUNTAIN CHALET
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-800 leading-tight mb-8 max-w-3xl mx-auto">
          Enjoy Mountain Views from Our Lovely Private Chalets
        </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-10 max-w-3xl mx-auto">
          CozyStay Mountain Chalet Hotel offers a variety of lodging options for groups of all sizes. Whether
          you're interested in accommodation in a corporate or family resort, a romantic room for two or a self
          contained cabin gateway, we've got the perfect accommodation for you. Our team is dedicated to
          providing service and accommodations that are as spectacular as the views.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="px-6 py-3 border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors duration-200 text-sm tracking-wide">
            Chalets & Lodges
          </button>
          <button className="px-6 py-3 border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors duration-200 text-sm tracking-wide">
            Rooms & Suites
          </button>
        </div>
      </section>

      {/* Section 2: Explore Chalets & Lodges (Wooden Background) */}
      <section
        className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 text-white text-center bg-cover bg-center"
        // In a real Next.js app, use the `next/image` component for optimized images
        style={{ backgroundImage: "url('wood.jpg')" }} // Placeholder for the wooden background
      >
        {/* Optional: Overlay for better text readability */}
        <div className="absolute inset-0 bg-black opacity-30"></div> 

        <div className="relative z-10 flex flex-col items-center">
          <p className="text-sm uppercase tracking-widest text-gray-200 mb-3">
            WELCOME TO COZYSTAY MOUNTAIN CHALET
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif leading-tight mb-6 max-w-xl mx-auto">
            Explore Chalets & Lodges
          </h2>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto">
            Offering our guests a historic atmosphere with modern conveniences.
          </p>
          {/* Down arrow icon */}
          <div className="mt-8">
            {/* Using an SVG directly or an icon library like Lucide React */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 md:w-10 md:h-10 text-white animate-bounce"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MountainChaletsSection;