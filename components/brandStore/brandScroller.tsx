"use client";

import React, { useRef } from "react";
import BrandCard from "./brandcard";
import { ArrowRight, ArrowLeft } from 'lucide-react';

interface Product {
  id: number;
  imageUrl: string;
  altText: string;
  logoUrl: string;
}

export default function BrandCardScroller({ products }: { products: Product[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

//   const scroll = (direction: "left" | "right") => {
//     if (scrollRef.current) {
//       const { clientWidth } = scrollRef.current;
//       const scrollAmount = direction === "left" ? -clientWidth : clientWidth;

//       scrollRef.current.scrollBy({
//         left: scrollAmount,
//         behavior: "smooth",
//       });
//     }
//   };

  return (
    <>
      {/* Buttons */}
      {/* <div className="flex items-center justify-end gap-3 mb-6">
        <button
          onClick={() => scroll("left")}
          aria-label="Previous"
          className="w-10 h-10 rounded-full border-2 border-gray-900 flex items-center  justify-center text-gray-900 hover:bg-[#EDFF66] transition-colors"
        >
          <ArrowLeft />
        </button>
        <button
          onClick={() => scroll("right")}
          aria-label="Next"
          className="w-10 h-10 rounded-full border-2 border-gray-900 flex items-center justify-center text-gray-900 hover:bg-[#EDFF66] transition-colors"
        >
        <ArrowRight />
        </button>
      </div> */}

      {/* Scrollable product cards */}
      <div
        ref={scrollRef}
        className="flex gap-6 pb-4 -mx-4 px-4 overflow-x-auto scrollbar-hide scroll-smooth"
      >
        {products.map((product) => (
          <BrandCard
            key={product.id}
            imageUrl={product.imageUrl}
            altText={product.altText}
            logoUrl={product.logoUrl} // Assuming logoUrl is same as imageUrl for now"
          />
        ))}
      </div>
    </>
  );
}
