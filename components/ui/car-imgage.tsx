"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";

interface CarImageProps {
  src: string;
  alt: string;
  badge?: string;
}

const CarImage = ({ src, alt, badge }: CarImageProps) => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative h-64 overflow-hidden bg-[#f5f3f3]">
      {/* Loader */}
      {loading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#f5f3f3] z-20">
          <Loader2 size={38} className="animate-spin text-yellow-500 mb-3" />

          <p className="text-sm text-gray-500 font-medium">Loading Car...</p>
        </div>
      )}

      {/* Image */}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoading(false)}
        className={`w-full h-full object-cover group-hover:scale-105 transition duration-700 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Badge */}
      {badge && (
        <div className="absolute top-4 right-4 bg-yellow-400 px-3 py-1 text-xs font-bold uppercase z-30">
          {badge}
        </div>
      )}
    </div>
  );
};

export default CarImage;
