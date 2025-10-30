// components/RoomShowcase.jsx

import React from 'react';

/**
 * Renders a section showcasing different rooms and a banner
 * describing the overall guest experience.
 * The component is responsive for all device sizes using Tailwind CSS.
 */
const RoomShowcase = () => {
  return (
    <section className="font-sans"> {/* Apply a default font-sans for consistency */}
      {/* 1. Room Cards Section */}
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 
           */}

          {/* Card 2: Deluxe Room */}
          <RoomCard
            tag="DRY / ABST"
            title="Deluxe Room"
            description="20 m² / Partial Lake View / 2 Guests"
            amenities={[
              { icon: 'bed', text: '1 Bed' },
              { icon: 'bath', text: '1 Bath' },
              { icon: 'room', text: '1 Room' }
            ]}
            imageUrl="/deluxe.jpg"
          />


          {/* Card 2: Deluxe Room */}
          <RoomCard
            tag="DRY / ABST"
            title="Family Room"
            description="20 m² / Partial Lake View / 2 Guests"
            amenities={[
              { icon: 'bed', text: '1 Bed' },
              { icon: 'bath', text: '1 Bath' },
              { icon: 'room', text: '1 Room' }
            ]}
            imageUrl="/family.webp"
          />

          

          {/* Card 3: Double Suite */}
          <RoomCard
            tag="DRY / ABST"
            title="Double Suite"
            description="30 m² / Mountain View / 4 Guests"
            amenities={[
              { icon: 'bed', text: '2 Beds' },
              { icon: 'bath', text: '1 Bath' },
              { icon: 'room', text: '2 Rooms' }
            ]}
            imageUrl="/double.jpg"
          />
        </div>
      </div>

      {/* 2. Quaint Experience Banner */}
      <div
        className="relative bg-cover bg-center h-[50vh] md:h-[60vh] flex items-center justify-center text-white px-4 py-16"
        style={{ backgroundImage: "url('/baranti.webp')" }}
      >
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <p className="text-sm tracking-widest uppercase font-light mb-2 text-gray-200">
            WELCOME TO COZYSTAY MOUNTAIN CHALET
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4">
            Quaint and Comfortable Stay Experience
          </h2>
          <p className="text-base sm:text-lg font-light mb-8 text-gray-300">
            For the comfort of all our guests, all our facilities and
            accommodations are 100% smoke-free — regardless of substance or
            equipment. All rooms include cable TV, a mini fridge, a coffee
            maker, a microwave, and complimentary linens and towels.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-6">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span className="text-sm font-medium">Check-in Time: 3:00 PM.</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span className="text-sm font-medium">Check-out Time: 11:00 AM.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper component for individual room cards
const RoomCard = ({ tag, title, description, amenities, imageUrl }) => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'bed':
        return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 3a1 1 0 00-1 1v1H4a1 1 0 000 2h1v4H4a1 1 0 000 2h1v1a1 1 0 002 0v-1h3v1a1 1 0 002 0v-1h1a1 1 0 100-2h-1V7h1a1 1 0 100-2h-1V4a1 1 0 00-1-1H7zm1 6a1 1 0 100-2 1 1 0 000 2z" /></svg>;
      case 'bath':
        return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 2a1 1 0 00-1 1v1h2V3a1 1 0 00-1-1zM4 6h12a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2zm2.5 4a.5.5 0 00-1 0v4a.5.5 0 001 0v-4zm5-1a.5.5 0 00-1 0v5a.5.5 0 001 0V9z" clipRule="evenodd" /></svg>;
      case 'room':
        return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 012.293 13.707l1.414 1.414a1 1 0 01-.707 1.707H3a1 1 0 000 2h14a1 1 0 000-2h-.001a1 1 0 01-.707-1.707l1.414-1.414a1 1 0 01-.707-1.707L16 11.586V8a6 6 0 00-6-6zm-4 7a1 1 0 112 0 1 1 0 01-2 0zm10 0a1 1 0 11-2 0 1 1 0 012 0z" /></svg>;
      default:
        return null;
    }
  };

  return (
    <div className="relative bg-cover bg-center h-96 rounded-lg shadow-lg overflow-hidden flex items-end p-6"
         style={{ backgroundImage: `url(${imageUrl})` }}>
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-black opacity-40"></div>
      
      <div className="relative z-10 text-white w-full">
        <span className="inline-block bg-white text-gray-800 text-xs font-semibold px-2 py-1 rounded-full mb-2">
          {tag}
        </span>
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        <p className="text-sm mb-4">{description}</p>
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
          {amenities.map((amenity, index) => (
            <div key={index} className="flex items-center">
              {getIcon(amenity.icon)}
              <span className="ml-1">{amenity.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoomShowcase;