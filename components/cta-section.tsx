"use client";

import {
  MessageCircle,
  Phone,
  ShieldCheck,
  BadgePercent,
  Zap,
  Headphones,
  BadgeCheck,
} from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 md:py-20 bg-[#f5f3f3] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* LEFT */}
            <div className="p-6 sm:p-8 md:p-12 lg:p-14">
              <span className="text-yellow-600 uppercase tracking-[0.25em] text-xs sm:text-sm font-bold mb-4 block">
                Book Your Ride
              </span>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black leading-tight mb-5">
                Ready to Book Your Ride?
              </h2>

              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-7 md:leading-8 mb-8">
                Contact us via WhatsApp for instant bookings, special offers,
                and personalized recommendations. Our team is available 24/7 to
                assist you.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/917972660029?text=Hi%20Shamiro,%20I%20want%20to%20book%20a%20car%20in%20Goa."
                  target="_blank"
                  className="w-full sm:w-auto"
                >
                  <button className="w-full sm:w-auto flex items-center justify-center gap-3 bg-yellow-400 text-black px-6 sm:px-8 py-4 rounded-2xl font-semibold text-sm sm:text-base md:text-lg hover:bg-yellow-300 transition-all">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                      alt="WhatsApp"
                      className="w-6 h-6"
                    />
                    WhatsApp Chat
                  </button>
                </a>

                {/* Call */}
                <a href="tel:+917972660029" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto flex items-center justify-center gap-3 border border-gray-300 text-black px-6 sm:px-8 py-4 rounded-2xl font-semibold text-sm sm:text-base md:text-lg hover:bg-gray-100 transition-all">
                    <Phone size={22} />
                    Call Now
                  </button>
                </a>
              </div>
            </div>

            {/* RIGHT */}
            <div className="bg-black text-white p-6 sm:p-8 md:p-12 lg:p-14">
              <div className="grid grid-cols-2 gap-3 sm:gap-5">
                {" "}
                {/* Card */}
                <div className="bg-white/5 rounded-2xl p-4 sm:p-5 border border-white/10">
                  <Zap size={28} className="text-yellow-400 mb-4" />

                  <h3 className="text-lg font-bold mb-2">
                    Instant Confirmation
                  </h3>

                  <p className="text-sm text-gray-300 leading-6">
                    Get your booking confirmed within minutes.
                  </p>
                </div>
                {/* Card */}
                <div className="bg-white/5 rounded-2xl p-4 sm:p-5 border border-white/10">
                  <BadgePercent size={28} className="text-yellow-400 mb-4" />

                  <h3 className="text-lg font-bold mb-2">Special Discounts</h3>

                  <p className="text-sm text-gray-300 leading-6">
                    Exclusive offers for direct bookings.
                  </p>
                </div>
                {/* Card */}
                <div className="bg-white/5 rounded-2xl p-4 sm:p-5 border border-white/10">
                  <ShieldCheck size={28} className="text-yellow-400 mb-4" />

                  <h3 className="text-lg font-bold mb-2">
                    Flexible Cancellation
                  </h3>

                  <p className="text-sm text-gray-300 leading-6">
                    Easy cancellation before pickup.
                  </p>
                </div>
                {/* Card */}
                <div className="bg-white/5 rounded-2xl p-4 sm:p-5 border border-white/10">
                  <Headphones size={28} className="text-yellow-400 mb-4" />

                  <h3 className="text-lg font-bold mb-2">
                    Personalized Service
                  </h3>

                  <p className="text-sm text-gray-300 leading-6">
                    Local experts helping you explore Goa better.
                  </p>
                </div>
              </div>

              {/* Bottom */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="flex items-start sm:items-center gap-3">
                  <BadgeCheck
                    size={22}
                    className="text-yellow-400 shrink-0 mt-1 sm:mt-0"
                  />

                  <p className="text-sm sm:text-base text-gray-300 leading-7">
                    Trusted by hundreds of travelers across India for smooth and
                    memorable Goa road trips.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
