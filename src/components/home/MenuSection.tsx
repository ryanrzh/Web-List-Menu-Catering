"use client";

import { useState } from "react";

const data = [
  {
    name: "Sandwich Mamamia",
    description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    background_image: "https://media.architecturaldigest.com/photos/61b0ce58df5163297d83ae6a/16:9/w_1920,c_limit/PurpleCherry_Williams18R.jpg",
    price: 1000,
    href: "#",
    igredients: [
      { name: "cherry", quantity: "1/2 cup" },
      { name: "Kecap manis", quantity: "1/2 cup" },
      { name: "Saos tiramisu", quantity: "1/2 cup" },
    ],
  },
  {
    name: "Nasi Goreng Spesial",
    description: "Nasi goreng dengan bumbu spesial dan topping melimpah.",
    background_image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    price: 10000,
    href: "#",
    igredients: [
      { name: "Nasi", quantity: "1 porsi" },
      { name: "Telur", quantity: "1 butir" },
      { name: "Ayam", quantity: "50g" },
    ],
  },
  {
    name: "Ayam Bakar Madu",
    description: "Ayam bakar dengan baluran madu dan rempah pilihan.",
    background_image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 10000,
    href: "#",
    igredients: [
      { name: "Ayam", quantity: "1 potong" },
      { name: "Madu", quantity: "2 sdm" },
      { name: "Bumbu rempah", quantity: "secukupnya" },
    ],
  },
  {
    name: "Sandwich Mamamia",
    description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    background_image: "https://media.architecturaldigest.com/photos/61b0ce58df5163297d83ae6a/16:9/w_1920,c_limit/PurpleCherry_Williams18R.jpg",
    price: 10000,
    href: "#",
    igredients: [
      { name: "cherry", quantity: "1/2 cup" },
      { name: "Kecap manis", quantity: "1/2 cup" },
      { name: "Saos tiramisu", quantity: "1/2 cup" },
    ],
  },
  {
    name: "Nasi Goreng Spesial",
    description: "Nasi goreng dengan bumbu spesial dan topping melimpah.",
    background_image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    price: 25000,
    href: "#",
    igredients: [
      { name: "Nasi", quantity: "1 porsi" },
      { name: "Telur", quantity: "1 butir" },
      { name: "Ayam", quantity: "50g" },
    ],
  },
  {
    name: "Ayam Bakar Madu",
    description: "Ayam bakar dengan baluran madu dan rempah pilihan.",
    background_image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 5000,
    href: "#",
    igredients: [
      { name: "Ayam", quantity: "1 potong" },
      { name: "Madu", quantity: "2 sdm" },
      { name: "Bumbu rempah", quantity: "secukupnya" },
    ],
  },
  {
    name: "Sandwich Mamamia",
    description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    background_image: "https://media.architecturaldigest.com/photos/61b0ce58df5163297d83ae6a/16:9/w_1920,c_limit/PurpleCherry_Williams18R.jpg",
    price: 1000,
    href: "#",
    igredients: [
      { name: "cherry", quantity: "1/2 cup" },
      { name: "Kecap manis", quantity: "1/2 cup" },
      { name: "Saos tiramisu", quantity: "1/2 cup" },
    ],
  },
  {
    name: "Nasi Goreng Spesial",
    description: "Nasi goreng dengan bumbu spesial dan topping melimpah.",
    background_image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    price: 10000,
    href: "#",
    igredients: [
      { name: "Nasi", quantity: "1 porsi" },
      { name: "Telur", quantity: "1 butir" },
      { name: "Ayam", quantity: "50g" },
    ],
  },
  {
    name: "Ayam Bakar Madu",
    description: "Ayam bakar dengan baluran madu dan rempah pilihan.",
    background_image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 10000,
    href: "#",
    igredients: [
      { name: "Ayam", quantity: "1 potong" },
      { name: "Madu", quantity: "2 sdm" },
      { name: "Bumbu rempah", quantity: "secukupnya" },
    ],
  },
  {
    name: "Sandwich Mamamia",
    description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    background_image: "https://media.architecturaldigest.com/photos/61b0ce58df5163297d83ae6a/16:9/w_1920,c_limit/PurpleCherry_Williams18R.jpg",
    price: 10000,
    href: "#",
    igredients: [
      { name: "cherry", quantity: "1/2 cup" },
      { name: "Kecap manis", quantity: "1/2 cup" },
      { name: "Saos tiramisu", quantity: "1/2 cup" },
    ],
  },
  {
    name: "Nasi Goreng Spesial",
    description: "Nasi goreng dengan bumbu spesial dan topping melimpah.",
    background_image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    price: 6000,
    href: "#",
    igredients: [
      { name: "Nasi", quantity: "1 porsi" },
      { name: "Telur", quantity: "1 butir" },
      { name: "Ayam", quantity: "50g" },
    ],
  },
  {
    name: "Ayam Bakar Madu",
    description: "Ayam bakar dengan baluran madu dan rempah pilihan.",
    background_image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 9000,
    href: "#",
    igredients: [
      { name: "Ayam", quantity: "1 potong" },
      { name: "Madu", quantity: "2 sdm" },
      { name: "Bumbu rempah", quantity: "secukupnya" },
    ],
  },
];

function FormatPrice(price: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(price);
}

export default function MenuSection() {
  const slice = 4;
  const [visibleCount, setVisibleCount] = useState(slice);
  const displayedData = data.slice(0, visibleCount);

  const handleLoad = () => {
    setVisibleCount((prevCount) => prevCount + slice);
  };

  return (
    <section className="py-8 dark:bg-gray-900">
      <h2 className="text-center mb-8 text-2xl font-bold dark:text-white">
        <span className="flex gap-x-2 items-center justify-center">
          Our Menu{" "}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-white">
            <path d="M21 10H3a1 1 0 0 0-1 1 10 10 0 0 0 5 8.66V21a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1.34A10 10 0 0 0 22 11a1 1 0 0 0-1-1zM9 9V7.93a4.51 4.51 0 0 0-1.28-3.15A2.49 2.49 0 0 1 7 3V2H5v1a4.51 4.51 0 0 0 1.28 3.17A2.49 2.49 0 0 1 7 7.93V9zm4 0V7.93a4.51 4.51 0 0 0-1.28-3.15A2.49 2.49 0 0 1 11 3V2H9v1a4.51 4.51 0 0 0 1.28 3.15A2.49 2.49 0 0 1 11 7.93V9zm4 0V7.93a4.51 4.51 0 0 0-1.28-3.15A2.49 2.49 0 0 1 15 3V2h-2v1a4.51 4.51 0 0 0 1.28 3.15A2.49 2.49 0 0 1 15 7.93V9z" />
          </svg>
        </span>
      </h2>
      <div className="container flex flex-col items-center md:flex-row justify-between">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
          {displayedData.map((item, idx) => (
            <div key={idx} className="border border-gray-200 rounded-xl w-full shadow-lg bg-white flex flex-col">
              <img src={item.background_image} alt={item.name} className="w-full h-44 object-cover rounded-t-xl" />
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-500 mb-2">{item.description}</p>
                <p className="font-bold mb-2">{FormatPrice((item.price as number) || 0)}</p>
                <div className="mb-2">
                  <button
                    type="button"
                    className="py-3 px-4 inline-flex items-center gap-x-2 text-sm hover:outline-2 hover:outline-amber-800 font-medium rounded-lg border border-transparent bg-amber-700 text-white hover:bg-amber-600 focus:outline-hidden focus:bg-amber-600 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    View
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-white">
                      <path d="M21 10H3a1 1 0 0 0-1 1 10 10 0 0 0 5 8.66V21a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1.34A10 10 0 0 0 22 11a1 1 0 0 0-1-1zM9 9V7.93a4.51 4.51 0 0 0-1.28-3.15A2.49 2.49 0 0 1 7 3V2H5v1a4.51 4.51 0 0 0 1.28 3.17A2.49 2.49 0 0 1 7 7.93V9zm4 0V7.93a4.51 4.51 0 0 0-1.28-3.15A2.49 2.49 0 0 1 11 3V2H9v1a4.51 4.51 0 0 0 1.28 3.15A2.49 2.49 0 0 1 11 7.93V9zm4 0V7.93a4.51 4.51 0 0 0-1.28-3.15A2.49 2.49 0 0 1 15 3V2h-2v1a4.51 4.51 0 0 0 1.28 3.15A2.49 2.49 0 0 1 15 7.93V9z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {data.length > visibleCount && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => handleLoad()}
            type="button"
            className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 text-gray-500 hover:border-blue-600 hover:text-blue-600 focus:outline-hidden focus:border-blue-600 focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-blue-500 dark:hover:border-blue-600 dark:focus:text-blue-500 dark:focus:border-blue-600"
          >
            Load More
          </button>
        </div>
      )}
    </section>
  );
}
