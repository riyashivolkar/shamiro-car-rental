"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
  MessageCircle,
  ShieldCheck,
  Car,
  Plane,
  Briefcase,
  Heart,
} from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="bg-[#f5f5f5] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
          {/* Brand */}
          <div>
            <Image
              src="/logo.png"
              alt="Shamiro Rent A Car"
              width={170}
              height={50}
              className="object-contain w-[180px] sm:w-[220px] md:w-[170px] h-auto"
            />

            <p className="text-gray-600 leading-7 mb-7">
              Premium self-drive car rentals in Goa. Experience comfort, luxury,
              and freedom with Shamiro Rent A Car.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white shadow-sm border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-all"
              >
                <Facebook size={18} />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white shadow-sm border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-all"
              >
                <Instagram size={18} />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white shadow-sm border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-all"
              >
                <Twitter size={18} />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white shadow-sm border border-gray-200 flex items-center justify-center hover:bg-green-500 hover:text-white transition-all"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-black mb-6">Quick Links</h4>

            <ul className="space-y-4">
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/bookings"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  Our Fleet
                </Link>
              </li>

              <li>
                <Link
                  href="/#about"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  Why Us
                </Link>
              </li>

              <li>
                <Link
                  href="#reviews"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  Reviews
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold text-black mb-6">Services</h4>

            <ul className="space-y-5">
              <li className="flex items-center gap-3 text-gray-600">
                <Car size={18} className="text-yellow-500" />
                Self Drive Cars
              </li>

              <li className="flex items-center gap-3 text-gray-600">
                <Briefcase size={18} className="text-yellow-500" />
                Corporate Rentals
              </li>

              <li className="flex items-center gap-3 text-gray-600">
                <Heart size={18} className="text-yellow-500" />
                Wedding Rentals
              </li>

              <li className="flex items-center gap-3 text-gray-600">
                <Plane size={18} className="text-yellow-500" />
                Airport Transfers
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold text-black mb-6">Contact Us</h4>

            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-11 h-11 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center">
                  <Phone size={18} className="text-yellow-500" />
                </div>

                <div>
                  <p className="text-sm text-gray-500 mb-1">Call Us</p>

                  <p className="font-semibold text-black">+91 7972660029</p>
                </div>
              </li>

              {/* <li className="flex gap-4">
                <div className="w-11 h-11 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center">
                  <Mail size={18} className="text-yellow-500" />
                </div>

                <div>
                  <p className="text-sm text-gray-500 mb-1">Email</p>

                  <p className="font-semibold text-black">
                    shamirorentacar@gmail.com
                  </p>
                </div>
              </li> */}

              <li className="flex gap-4">
                <div className="w-11 h-11 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center">
                  <MapPin size={18} className="text-yellow-500" />
                </div>

                <div>
                  <p className="text-sm text-gray-500 mb-1">Location</p>

                  <p className="font-semibold text-black">
                    Opposite to W-hotel, Vagator, Goa
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-200 mt-16 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © 2026 Shamiro Rent A Car. All rights reserved.
            </p>

            <div className="flex items-center gap-6 text-sm">
              <Link
                href="#"
                className="text-gray-500 hover:text-black transition-colors"
              >
                Privacy Policy
              </Link>

              <Link
                href="#"
                className="text-gray-500 hover:text-black transition-colors"
              >
                Terms & Conditions
              </Link>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-500">
              <ShieldCheck size={16} className="text-green-500" />
              Trusted Car Rental Service in Goa
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
