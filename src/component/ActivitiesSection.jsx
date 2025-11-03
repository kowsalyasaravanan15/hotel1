'use client';

import Image from 'next/image';

const activities = [
  {
    title: 'Mountain Hiking',
    category: 'Outdoors',
    description:
      'With over 1,600 kilometres (994 miles) of trails, Banff National Park offers adventurers some of the best hiking on the planet.',
    price: '₹1000 / person',
    image: '/mountain.jpg',
  },
  {
    title: 'Paddling Tour',
    category: 'Nature',
    description:
      'Banff National Park’s biggest lake allows you to paddle for miles and enjoy breathtaking views.',
    price: '₹1000 / person',
    image: '/padding.jpg',
  },
  {
    title: 'Camping Tour',
    category: 'Outdoors',
    description:
      'Banff offers a range of camping spots allowing you to experience all of this most gorgeous park’s outdoor splendour.',
    price: '₹1000 / person',
    image: '/campign.jpg',
  },
];

export default function ActivitiesSection() {
  return (
    <section data-aos="fade-up"
      data-aos-duration="3000" className="bg-white -100 py-16 px-4 md:px-8 lg:px-16 text-center">
      <p className="text-sm uppercase tracking-wide text-gray-600 mb-2">
        More than just mountain view
      </p>
      <h2 className="text-4xl font-semibold text-gray-900 mb-12">
        Unforgettable Experience
      </h2>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="bg-white rounded shadow-sm overflow-hidden flex flex-col"
          >
            <div className="relative h-64 w-full">
              <Image
                src={activity.image}
                alt={activity.title}
                fill
                className="object-cover"
              />
              <span className="absolute top-2 left-2 bg-black text-xs px-2 py-1 font-medium">
                {activity.price}
              </span>
            </div>
            <div className="p-6 text-left flex-1 flex flex-col justify-between">
              <div>
                <p className="text-xs uppercase text-gray-500 font-medium mb-1">
                  {activity.category}
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {activity.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{activity.description}</p>
              </div>
              <a
                href="#"
                className="text-sm font-medium text-gray-900 hover:underline mt-auto"
              >
                Discover Trip &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-6">
          Within the Chalet itself, every detail is pre-planned and orchestrated to
          ensure guests have the best possible experience of mountain life.
        </p>
        <button className="bg-green-800 text-white px-6 py-3 rounded hover:bg-green-700 transition">
          Discover All Activities
        </button>
      </div>
    </section>
  );
}
