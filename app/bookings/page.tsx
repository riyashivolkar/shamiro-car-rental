"use client";

import Image from "next/image";
import { memo, useEffect, useState } from "react";

import { Users, Settings, Fuel, Loader2 } from "lucide-react";

import { cars } from "@/lib/cars";

const filters = ["All", "SUVs", "Hatchbacks", "Family", "Luxury"];

type Car = {
  name: string;
  image: string;
  price: string;
  seats: string;
  transmission: string;
  fuel: string;
  badge?: string;
  categories: string[];
};

const CarCard = memo(({ car }: { car: Car }) => {
  const [imageLoading, setImageLoading] = useState(true);

  useEffect(() => {
    setImageLoading(true);
  }, [car.image]);

  return (
    <div className="group bg-white shadow-xl overflow-hidden hover:-translate-y-2 transition-all duration-300">
      {/* IMAGE */}
      <div className="relative h-64 overflow-hidden bg-gray-100">
        {/* Loader */}
        {imageLoading && (
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-[#f5f3f3]">
            <Loader2 size={34} className="animate-spin text-yellow-500" />
          </div>
        )}

        {/* Image */}
        <Image
          src={car.image}
          alt={car.name}
          fill
          loading="lazy"
          sizes="(max-width: 768px) 100vw, 33vw"
          onLoadingComplete={() => {
            setTimeout(() => {
              setImageLoading(false);
            }, 100);
          }}
          className={`object-cover transition-all duration-700 ${
            imageLoading
              ? "opacity-0 scale-105"
              : "opacity-100 scale-100 group-hover:scale-105"
          }`}
        />

        {/* Badge */}
        {car.badge && (
          <div className="absolute top-4 right-4 bg-yellow-400 px-3 py-1 text-xs font-bold uppercase z-30">
            {car.badge}
          </div>
        )}
      </div>

      {/* CONTENT */}
      <div className="p-6">
        <div className="flex justify-between items-start gap-4 mb-4">
          <h3 className="text-2xl font-bold text-black leading-snug">
            {car.name}
          </h3>

          <div className="text-right shrink-0">
            <span className="text-2xl font-bold text-yellow-600">
              {car.price}
            </span>

            <p className="text-xs uppercase text-gray-500">/ Day</p>
          </div>
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-x-4 gap-y-3 border-b border-gray-200 pb-5 mb-6 text-sm text-gray-600">
          <span className="flex items-center gap-2 whitespace-nowrap">
            <Users size={18} />
            {car.seats}
          </span>

          <span className="flex items-center gap-2 whitespace-nowrap">
            <Settings size={18} />
            {car.transmission}
          </span>

          <span className="flex items-center gap-2 whitespace-nowrap">
            <Fuel size={18} />
            {car.fuel}
          </span>
        </div>

        {/* CTA */}
        <a
          href={`https://wa.me/917972660029?text=${encodeURIComponent(
            `Hi Shamiro, I want to book the ${car.name} in Goa.`,
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-yellow-400 py-4 uppercase tracking-widest font-semibold flex items-center justify-center gap-3 hover:opacity-90 transition-all"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            className="w-6 h-6"
          />
          Book Now
        </a>
      </div>
    </div>
  );
});

CarCard.displayName = "CarCard";

const BookingsPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredCars =
    activeFilter === "All"
      ? cars
      : cars.filter((car) => car.categories.includes(activeFilter));

  return (
    <main className="min-h-screen bg-[#f5f3f3]">
      {/* HERO */}
      <section className="pt-24 pb-14">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="border-l-4 border-yellow-400 pl-6">
            <span className="block text-sm font-bold uppercase tracking-[0.25em] text-yellow-600 mb-4">
              Full Collection
            </span>

            <h1 className="text-5xl md:text-6xl font-bold text-black mb-5">
              Explore Our Fleet
            </h1>

            <p className="text-lg text-gray-600 max-w-3xl leading-8">
              Choose the perfect self-drive car for your Goa adventure.
            </p>
          </div>
        </div>
      </section>

      {/* FILTERS */}
      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex flex-wrap gap-4">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 uppercase tracking-wider font-semibold transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-yellow-400 text-black"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CARS */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCars.map((car, index) => (
              <CarCard key={index} car={car} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default BookingsPage;
