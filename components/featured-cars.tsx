"use client";

import { useEffect, useState } from "react";
import { cars } from "@/lib/cars";
import {
  Users,
  Settings,
  Fuel,
  ChevronRight,
  ChevronLeft,
  Loader2,
} from "lucide-react";

const ExploreFleet = () => {
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Desktop → only 3 cars
  const desktopCars = cars.slice(0, 3);

  // Fake loader
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  // Next Car
  const nextCar = () => {
    if (currentIndex < cars.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Prev Car
  const prevCar = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  if (loading) {
    return (
      <section className="w-full bg-[#f5f3f3] py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col items-center justify-center">
          <Loader2 size={52} className="animate-spin text-yellow-500 mb-5" />

          <p className="text-gray-600 text-lg">Loading premium rides...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="fleet" className="w-full bg-[#f5f3f3] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <span className="block text-sm font-bold uppercase tracking-[0.25em] text-yellow-600 mb-3">
              Our Collection
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-black">
              Explore Our Fleet
            </h2>
          </div>

          <a
            href="/bookings"
            className="inline-flex items-center justify-center gap-2 border border-black px-8 py-4 uppercase tracking-widest font-semibold hover:bg-black hover:text-white transition-all"
          >
            View More Cars
          </a>
        </div>

        {/* MOBILE CAROUSEL */}
        <div className="md:hidden">
          {/* Slider */}
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                }}
              >
                {cars.map((car, index) => (
                  <div key={index} className="w-full shrink-0">
                    <div className="group bg-white shadow-xl overflow-hidden">
                      {/* Image */}
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={car.image}
                          alt={car.name}
                          className="w-full h-full object-cover"
                        />

                        {car.badge && (
                          <div className="absolute top-4 right-4 bg-yellow-400 px-3 py-1 text-xs font-bold uppercase">
                            {car.badge}
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <div className="flex justify-between items-start gap-4 mb-4">
                          <h3 className="text-2xl font-bold text-black leading-snug">
                            {car.name}
                          </h3>

                          <div className="text-right shrink-0">
                            <span className="text-2xl font-bold text-yellow-600">
                              {car.price}
                            </span>

                            <p className="text-xs uppercase text-gray-500">
                              / Day
                            </p>
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
                          className="w-full bg-yellow-400 py-4 uppercase tracking-widest font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition"
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
                  </div>
                ))}
              </div>
            </div>

            {/* Prev Button */}
            <button
              onClick={prevCar}
              disabled={currentIndex === 0}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-white shadow-lg w-11 h-11 rounded-full flex items-center justify-center disabled:opacity-40"
            >
              <ChevronLeft size={22} />
            </button>

            {/* Next Button */}
            <button
              onClick={nextCar}
              disabled={currentIndex === cars.length - 1}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-white shadow-lg w-11 h-11 rounded-full flex items-center justify-center disabled:opacity-40"
            >
              <ChevronRight size={22} />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {cars.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all ${
                  currentIndex === index
                    ? "w-8 bg-yellow-500"
                    : "w-2 bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* DESKTOP GRID */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8">
          {desktopCars.map((car, index) => (
            <div
              key={index}
              className="group bg-white shadow-xl overflow-hidden hover:-translate-y-2 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />

                {car.badge && (
                  <div className="absolute top-4 right-4 bg-yellow-400 px-3 py-1 text-xs font-bold uppercase">
                    {car.badge}
                  </div>
                )}
              </div>

              {/* Content */}
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
                  className="w-full bg-yellow-400 py-4 uppercase tracking-widest font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition"
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreFleet;
