// components/ChaletCard.jsx
import React from 'react';
import { Home, Users, Bed, Bath, ArrowRight } from 'lucide-react'; // Using Lucide icons for details

const ChaletCard = ({ title, size, guests, beds, bathrooms, description, price, imageUrl, isSale }) => {
  // Array of detail objects for easy mapping in the icons bar
  const details = [
    { icon: Home, value: size, label: 'm²' },
    { icon: Users, value: guests, label: 'Guests' },
    { icon: Bed, value: beds, label: 'Beds' },
    { icon: Bath, value: bathrooms, label: 'Bathrooms' },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Image & Price Section */}
      <div className="relative mb-6">
        {/* Image Placeholder (Best practice is to use Next.js <Image>) */}
        <div 
          className="h-64 sm:h-80 w-full bg-gray-200 bg-cover bg-center rounded-sm"
          style={{ backgroundImage: `url(${imageUrl})` }} // Responsive height/width
        >
            {/* Carousel indicators/dots would typically be placed here */}
        </div>
        
        {/* Price Tag (Top Left) */}
        <span className="absolute top-4 left-4 bg-black text-white px-3 py-1 text-xs font-medium tracking-wider">
          {price} / Night
        </span>
        
        {/* Sale Tag (Top Right) */}
        {isSale && (
            <span className="absolute top-4 right-4 bg-[#A3432B] text-white px-3 py-1 text-xs font-medium tracking-wider">
              FROM ${isSale}
            </span>
        )}
      </div>

      {/* Content Area */}
      <div className="px-1">
        
        {/* Title & Secondary Details */}
        <h3 className="text-2xl font-serif text-gray-800 mb-1">{title}</h3>
        {/* The 'size' and 'guests' values are included in the secondary line for detail */}
        <p className="text-sm text-gray-600 mb-4">{size} m² / Great Mountain View / {guests} Guests</p>

        {/* Icon Details Bar */}
        <div className="flex flex-wrap gap-4 border-y border-gray-100 py-3 mb-4">
          {details.map((item, index) => (
            <div key={index} className="flex items-center space-x-1 text-sm text-gray-700">
              <item.icon className="w-4 h-4 text-[#536E5F]" /> {/* Icons with brand color */}
              <span className="font-semibold">{item.value}</span>
              <span className="text-gray-500">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Description */}
        <p className="text-base text-gray-700 leading-relaxed mb-4">
          {description}
        </p>

        {/* Discover More Link */}
        <a href="#" className="flex items-center text-sm uppercase text-[#536E5F] font-medium tracking-wider hover:text-[#3D554E] transition-colors duration-200">
          Discover More <ArrowRight className="w-4 h-4 ml-2" />
        </a>
      </div>
    </div>
  );
};

export default ChaletCard;