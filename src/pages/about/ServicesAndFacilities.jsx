// components/ServicesAndFacilitiesSection.jsx

import React from 'react';
// Import icons from lucide-react (or similar library) to match the outline style
import { Car, Home, Wifi, Shirt, Coffee, ParkingSquare, Dumbbell, Droplet, HeartHandshake } from 'lucide-react';

const facilitiesData = [
  { icon: Car, title: "Airport Pick-up Service", description: "Lorem ipsum proin gravida velit auctor side ne sit amet space." },
  { icon: Home, title: "Housekeeper Services", description: "Lorem ipsum proin gravida velit auctor side ne sit amet space." },
  { icon: Wifi, title: "Wifi & Internet", description: "Lorem ipsum proin gravida velit auctor side ne sit amet space." },
  { icon: Shirt, title: "Laundry Services", description: "Lorem ipsum proin gravida velit auctor side ne sit amet space." },
  { icon: Coffee, title: "Breakfast in Bed", description: "Lorem ipsum proin gravida velit auctor side ne sit amet space." },
  { icon: ParkingSquare, title: "Private Parking Space", description: "Lorem ipsum proin gravida velit auctor side ne sit amet space." },
  { icon: Dumbbell, title: "Fitness Center", description: "Lorem ipsum proin gravida velit auctor side ne sit amet space." },
  { icon: Droplet, title: "Infinity Pool", description: "Lorem ipsum proin gravida velit auctor side ne sit amet space." },
  { icon: HeartHandshake, title: "Wellness Center", description: "Lorem ipsum proin gravida velit auctor side ne sit amet space." },
];

const ServicesAndFacilitiesSection = () => {
  // Define the background image path here
  const backgroundImageStyle = {
    backgroundImage: "url('/white.jpg')", // !!! REPLACE THIS PATH !!!
  };

  return (
    // 1. Main Section with Background Image
    <section 
      className="relative bg-gray-900 bg-cover bg-center py-16 md:py-24 px-4 sm:px-6 lg:px-8" 
      style={backgroundImageStyle}
    >
      {/* 2. Dark Overlay for Contrast */}
      <div className="absolute inset-0 bg-black opacity-70"></div>
      
      {/* 3. Content Container (z-10 to stay above the overlay) */}
      <div className="max-w-7xl mx-auto text-center relative z-10">
        
        {/* Header Text (Adjusted for white text) */}
        <p className="text-xs uppercase tracking-[0.3em] text-gray-300 mb-2">
          DISCOVER OUR SERVICES & FACILITIES
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white leading-snug mb-6 max-w-2xl mx-auto">
          All the Essentials for a Cozy and Comfortable Stay
        </h2>
        <p className="text-base text-gray-400 leading-relaxed mb-16 max-w-3xl mx-auto">
          State-of-the-art amenities include a dramatic double-story loft lounge, spectacular rooftop lounge, 
          Technogym fitness center, media center, and a gracious 24/7 resident services team.
        </p>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilitiesData.map((facility, index) => (
            // Card background and text adjusted for dark background
            <div 
              key={index} 
              className="p-6 md:p-8 bg-white/10 backdrop-blur-sm text-left border border-gray-600 transition-shadow duration-300 hover:shadow-2xl hover:shadow-gray-700"
            >
              {/* Icon - Changed color to white for contrast */}
              <facility.icon className="w-8 h-8 text-white mb-4 stroke-1" />
              
              {/* Title - Changed color to white */}
              <h3 className="text-lg font-medium text-white mb-2">
                {facility.title}
              </h3>
              
              {/* Description - Changed color to light gray */}
              <p className="text-sm text-gray-300 leading-relaxed">
                {facility.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesAndFacilitiesSection;