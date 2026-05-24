"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, CalendarDays, MessageCircle, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.png"
          alt="Goa Car Rental"
          fill
          priority
          className="object-cover object-left"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/75 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 w-full">
        <div className="max-w-2xl">
          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-bold text-black leading-tight mb-5">
            Your Goan Adventure, Simplified.
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-gray-700 leading-8 mb-10 max-w-xl">
            Affordable luxury for every traveler. Explore Goa’s beaches,
            villages, and hidden gems at your own pace.
          </p>

          {/* Booking Box */}
          <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              {/* Location */}
              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase block mb-2">
                  Pick-up Location
                </label>

                <div className="flex items-center bg-gray-100 px-4 py-4 rounded-xl">
                  <MapPin className="text-gray-500 mr-3" size={18} />

                  <input
                    type="text"
                    placeholder="Goa Airport, Madgaon..."
                    className="bg-transparent outline-none w-full text-sm"
                  />
                </div>
              </div>

              {/* Duration */}
              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase block mb-2">
                  Duration
                </label>

                <div className="flex items-center bg-gray-100 px-4 py-4 rounded-xl">
                  <CalendarDays className="text-gray-500 mr-3" size={18} />

                  <input
                    type="text"
                    placeholder="3 Days"
                    className="bg-transparent outline-none w-full text-sm"
                  />
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* WhatsApp */}
              <Link
                href="https://wa.me/917972660029?text=Hi%20Shamiro,%20I%20want%20to%20book%20a%20car%20in%20Goa."
                target="_blank"
                className="flex-1"
              >
                <button className="w-full bg-yellow-400 hover:bg-yellow-300 transition-all rounded-xl px-6 py-4 font-semibold text-black flex items-center justify-center gap-3 shadow-lg hover:scale-[1.02]">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                    alt="WhatsApp"
                    className="w-6 h-6"
                  />{" "}
                  Book via WhatsApp
                </button>
              </Link>

              {/* Call */}
              <Link href="tel:+917972660029" className="flex-1">
                <button className="w-full border border-gray-300 hover:bg-gray-100 transition-all rounded-xl px-6 py-4 font-semibold text-black flex items-center justify-center gap-3">
                  <Phone size={20} />
                  Call Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
