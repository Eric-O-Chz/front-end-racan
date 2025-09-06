"use client";

import React, { useRef } from "react";
import BlogCard from "./blogCard";
import { ArrowRight, ArrowLeft } from 'lucide-react';

interface Product {
  id: number;
  imageUrl: string;
  altText: string;
  name: string;
  blog: string;
  isNew?: boolean;
}

export default function BlogScroller({ products }: { products: Product[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = direction === "left" ? -clientWidth : clientWidth;

      scrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Buttons */}
      <div className="flex items-center justify-end gap-3 mb-6">
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
      </div>

      {/* Scrollable product cards */}
      <div
        ref={scrollRef}
        className="flex gap-10 lg:gap-40 pb-4 -mx-4 px-4 overflow-x-auto scrollbar-hide scroll-smooth"
      >
        {products.map((product) => (
          <BlogCard
            key={product.id}
            imageUrl={product.imageUrl}
            altText={product.altText}
            name={product.name}
            blog={product.blog}
            isNew={product.isNew}
          />
        ))}
      </div>
    </>
  );
}
