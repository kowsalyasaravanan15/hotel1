"use client";
import { Car, BedDouble, Wifi, Sparkles, WashingMachine, ParkingSquare } from "lucide-react";

const services = [
  {
    icon: <Car className="w-10 h-10 text-yellow-400" />,
    title: "Airport Pick-up Service",
    description:
      "Lorem ipsum proin gravida velit auctor aliquet aenean sollicitudin, lorem quis bibendum auctor nisi elit consequat ipsum.",
  },
  {
    icon: <Sparkles className="w-10 h-10 text-yellow-400" />,
    title: "Housekeeper Services",
    description:
      "Lorem ipsum proin gravida velit auctor aliquet aenean sollicitudin, lorem quis bibendum auctor nisi elit consequat ipsum.",
  },
  {
    icon: <Wifi className="w-10 h-10 text-yellow-400" />,
    title: "Wifi & Internet",
    description:
      "Lorem ipsum proin gravida velit auctor aliquet aenean sollicitudin, lorem quis bibendum auctor nisi elit consequat ipsum.",
  },
  {
    icon: <WashingMachine className="w-10 h-10 text-yellow-400" />,
    title: "Laundry Services",
    description:
      "Lorem ipsum proin gravida velit auctor aliquet aenean sollicitudin, lorem quis bibendum auctor nisi elit consequat ipsum.",
  },
  {
    icon: <BedDouble className="w-10 h-10 text-yellow-400" />,
    title: "Breakfast in Bed",
    description:
      "Lorem ipsum proin gravida velit auctor aliquet aenean sollicitudin, lorem quis bibendum auctor nisi elit consequat ipsum.",
  },
  {
    icon: <ParkingSquare className="w-10 h-10 text-yellow-400" />,
    title: "Private Parking Space",
    description:
      "Lorem ipsum proin gravida velit auctor aliquet aenean sollicitudin, lorem quis bibendum auctor nisi elit consequat ipsum.",
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-[#5a765a] py-20 px-6 md:px-12 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row sm:items-start items-center text-center sm:text-left space-y-4 sm:space-y-0 sm:space-x-6"
          >
            {/* Icon */}
            <div className="flex-shrink-0">{service.icon}</div>

            {/* Content */}
            <div>
              <h3 className="text-lg font-semibold mb-2 text-yellow-100">{service.title}</h3>
              <p className="text-sm text-gray-200 leading-relaxed">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
