"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Rahul Mehta",
    location: "Mumbai",
    rating: 5,
    review:
      "Booked a Thar for 4 days and honestly the experience was smoother than expected. Car was super clean, pickup was on time, and the owner was very helpful throughout the trip.",
    image: "/review/1.jpg",
  },

  {
    id: 2,
    name: "Sneha Kapoor",
    location: "Delhi",
    rating: 5,
    review:
      "One of the few rental services in Goa that actually delivers what they promise. No hidden charges, quick booking process, and the car condition was excellent.",
    image: "/review/2.jpg",
  },

  {
    id: 3,
    name: "Aman Verma",
    location: "Bangalore",
    rating: 5,
    review:
      "The best part was the support. We had a small issue late at night and their team responded immediately. Definitely recommending Shamiro to friends visiting Goa.",
    image: "/review/3.jpg",
  },
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Infinite Next
  const nextReview = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  // Infinite Prev
  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  return (
    <section id="reviews" className="py-20 bg-[#f5f3f3] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="block text-sm font-bold uppercase tracking-[0.25em] text-yellow-600 mb-3">
            Testimonials
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-black mb-5">
            What Our Customers Say
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted by travelers across India for smooth and memorable Goa road
            trips.
          </p>
        </div>

        {/* MOBILE SLIDER */}
        <div className="md:hidden relative">
          {/* Cards */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {reviews.map((review) => (
                <div key={review.id} className="w-full shrink-0">
                  <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-200">
                    {/* Stars */}
                    <div className="flex gap-1 mb-5">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          size={20}
                          className="fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>

                    {/* Review */}
                    <p className="text-gray-600 mb-7 leading-relaxed italic">
                      "{review.review}"
                    </p>

                    {/* User */}
                    <div className="flex items-center gap-4 pt-5 border-t border-gray-200">
                      <img
                        src={review.image}
                        alt={review.name}
                        className="w-14 h-14 rounded-full object-cover"
                      />

                      <div>
                        <p className="font-bold text-black">{review.name}</p>

                        <p className="text-sm text-gray-500">
                          {review.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Left Arrow */}
          <button
            onClick={prevReview}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white shadow-lg w-11 h-11 rounded-full flex items-center justify-center"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextReview}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white shadow-lg w-11 h-11 rounded-full flex items-center justify-center"
          >
            <ChevronRight size={22} />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {reviews.map((_, index) => (
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
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all border border-gray-200"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="text-gray-600 mb-7 leading-relaxed italic">
                "{review.review}"
              </p>

              {/* User */}
              <div className="flex items-center gap-4 pt-5 border-t border-gray-200">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-14 h-14 rounded-full object-cover"
                />

                <div>
                  <p className="font-bold text-black">{review.name}</p>

                  <p className="text-sm text-gray-500">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Rating */}
        <div className="mt-16 bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-gray-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left */}
            <div className="flex items-center gap-5">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                alt="Google"
                className="h-10 w-auto"
              />

              <div>
                <h3 className="text-3xl font-bold text-black">4.9/5</h3>

                <p className="text-gray-500">Rated Excellent on Google</p>
              </div>
            </div>

            {/* Right */}
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={28}
                  className="fill-yellow-400 text-yellow-400"
                />
              ))}

              <span className="ml-2 text-lg font-semibold text-black">
                250+ Reviews
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
