// components/MoreChaletListingsSection.jsx
import React from 'react';
import ChaletCard from './ChaletCard'; // Assuming ChaletCard.jsx is in the same 'components' directory

// Sample data for the new listings
const moreChaletData = [
  {
    title: "Luxury Chalet",
    size: 120,
    guests: 6,
    beds: 3,
    bathrooms: 2,
    description: "The dark wood panelling and furnishings, red-draped four-poster bed, and black stone bathroom evoke the charm of a secluded Sierra Nevada.",
    price: '5000',
    imageUrl: '/luxury.jpg', // Placeholder for the top-left image
    isSale: null, 
  },
  {
    title: "Meadow Chalet",
    size: 90,
    guests: 5,
    beds: 2,
    bathrooms: 2,
    description: "The dark wood panelling and furnishings, red-draped four-poster bed, and black stone bathroom evoke the charm of a secluded Sierra Nevada.",
    price: '5000',
    imageUrl: '/meadow.jpg', // Placeholder for the top-right image
    isSale: null, // Example sale price
  },
  {
    title: "Overlook Lodge",
    size: 150, // Example
    guests: 8, // Example
    beds: 4, // Example
    bathrooms: 3, // Example
    description: "Experience breathtaking views from this spacious lodge, featuring modern amenities and rustic charm for an unforgettable getaway.",
    price: '7000',
    imageUrl: '/overlook.jpg', // Placeholder for bottom-left image
    isSale: null, 
  },
  {
    title: "Lakeside Inn",
    size: 100, // Example
    guests: 4, // Example
    beds: 2, // Example
    bathrooms: 1, // Example
    description: "A lakeside retreat offering serene views and comfortable living, perfect for a peaceful escape with loved ones.",
    price: '4000',
    imageUrl: '/small.jpg', // Placeholder for bottom-right image
    isSale: null, // Example sale price
  },
];

const MoreChaletListingsSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Grid for chalet cards: 1 column on mobile, 2 columns on medium/large screens */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-16">
          
          {moreChaletData.map((chalet, index) => (
            <ChaletCard
              key={index} // Use a more robust key in real apps if possible (e.g., chalet.id)
              title={chalet.title}
              size={chalet.size}
              guests={chalet.guests}
              beds={chalet.beds}
              bathrooms={chalet.bathrooms}
              description={chalet.description}
              price={chalet.price}
              imageUrl={chalet.imageUrl}
              isSale={chalet.isSale}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoreChaletListingsSection;