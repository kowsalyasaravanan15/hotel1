// components/TestimonialSection.jsx
"use client";
import Image from "next/image";
import backgroundImage from "../public/testimonial-bg.jpg"; // Replace with your image path

const TestimonialSection = () => {
  return (
    <section className="relative w-full h-[90vh] md:h-screen flex items-center justify-center bg-black text-white">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Mountain background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="z-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 px-4 text-center max-w-3xl mx-auto">
        {/* Star Rating */}
        <div className="text-yellow-400 text-xl mb-4">★★★★★</div>

        {/* Testimonial Text */}
        <p className="text-lg md:text-xl leading-relaxed">
          “The rooms are all renovated and modern. Maintenance was exceptional.
          We loved the scenery from our room. We liked the fact that we had our
          own kitchen so we could cook. Thanks for all the staff and this
          pleased trip!”
        </p>

        {/* Author */}
        <div className="mt-6">
          <p className="font-semibold">Luna Wayne</p>
          <p className="text-sm text-gray-300">Tripadvisor</p>
        </div>

        {/* Pagination Dots */}
        <div className="mt-6 flex justify-center space-x-2">
          <span className="h-2 w-2 bg-white rounded-full" />
          <span className="h-2 w-2 bg-gray-400 rounded-full" />
          <span className="h-2 w-2 bg-gray-400 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
