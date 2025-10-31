"use client";
import { Bed, Users, Ruler } from "lucide-react";

const chalets = [
  {
    title: "Meadow Chalet",
    price: "2500 / NIGHT",
    area: "90 m²",
    guests: "5 Guests",
    beds: "3 Beds",
    description:
      "The dark wood panelling and furnishings, red-draped fourposter bed, and black stone bathroom evoke the charm of a secluded Sierra Nevada.",
    image: "/family.webp", // Replace with actual image paths
    link: "#",
  },
  {
    title: "Family Suite",
    price: "3000 / NIGHT",
    area: "55 m²",
    guests: "2 Guests",
    beds: "2 Beds",
    description:
      "The dark wood panelling and furnishings, red-draped fourposter bed, and black stone bathroom evoke the charm of a secluded Sierra Nevada.",
    image: "/deluxe.jpg",
    link: "#",
  },
  {
    title: "Deluxe Room",
    price: "1500 / NIGHT",
    area: "28 m²",
    guests: "2 Guests",
    beds: "2 Beds",
    description:
      "The dark wood panelling and furnishings, red-draped fourposter bed, and black stone bathroom evoke the charm of a secluded Sierra Nevada.",
    image: "/double.jpg",
    link: "#",
  },
  {
    title: "Luxury Chalet",
    price: "2500 / NIGHT",
    area: "28 m²",
    guests: "2 Guests",
    beds: "2 Beds",
    description:
      "The dark wood panelling and furnishings, red-draped fourposter bed, and black stone bathroom evoke the charm of a secluded Sierra Nevada.",
    image: "/luxury.jpg",
    link: "#",
  },
  {
    title: "Deluxe Suite",
    price: "1500 / NIGHT",
    area: "28 m²",
    guests: "2 Guests",
    beds: "2 Beds",
    description:
      "The dark wood panelling and furnishings, red-draped fourposter bed, and black stone bathroom evoke the charm of a secluded Sierra Nevada.",
    image: "/meadow.jpg",
    link: "#",
  },
];

const SelectChalet = () => {
  return (
    <section className="bg-[#e5e6e4] py-20 px-6 md:px-12 text-gray-800">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header */}
        <p className="text-xs uppercase tracking-[0.2em] text-gray-600 mb-2">
          Enjoy world-class stay experience
        </p>
        <h2 className="text-4xl sm:text-5xl font-serif font-light mb-6">
          Select Your Chalet
        </h2>
        <p className="max-w-3xl mx-auto text-gray-600 mb-16 leading-relaxed">
          Escape to the beautiful mountains and valleys where dreams come true.
          Culture, nature, streams and gastronomy. Immerse yourself in the
          restorative qualities of nature, far from the disturbances of everyday life.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {chalets.map((chalet, index) => (
            <div
              key={index}
              className="bg-white shadow-md hover:shadow-lg transition-shadow flex flex-col overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-64 w-full overflow-hidden group">
                <img
                  src={chalet.image}
                  alt={chalet.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-white text-xs font-semibold px-3 py-1 shadow-sm tracking-wide">
                  {chalet.price}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 text-left flex flex-col flex-grow">
                <h3 className="text-xl font-serif font-light mb-4">
                  {chalet.title}
                </h3>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                  <span className="flex items-center gap-2">
                    <Ruler className="w-4 h-4" /> {chalet.area}
                  </span>
                  <span className="flex items-center gap-2">
                    <Users className="w-4 h-4" /> {chalet.guests}
                  </span>
                  <span className="flex items-center gap-2">
                    <Bed className="w-4 h-4" /> {chalet.beds}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-6 flex-grow leading-relaxed">
                  {chalet.description}
                </p>
                <a
                  href={chalet.link}
                  className="text-sm font-medium text-gray-800 border-b border-gray-800 hover:text-gray-600 hover:border-gray-600 transition-colors w-fit"
                >
                  Discover More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectChalet;
