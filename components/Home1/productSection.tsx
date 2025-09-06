'use client';

import React, { useState } from 'react';
import { Handbag } from 'lucide-react';
import Image from 'next/image';

// Define a type for the component props for better type safety.
// This component doesn't receive any props, but it's good practice.
type ProductSectionProps = Record<string, never>;

const ProductSection: React.FC<ProductSectionProps> = () => {
  // State to manage the currently selected size and color
  const [selectedSize, setSelectedSize] = useState<string>('M');
  const [selectedColor, setSelectedColor] = useState<string>('Black');

  const sizes = ['S', 'M', 'L', 'XXL'];
  const colors = ['Black', 'White'];

  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-12 font-heading ">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:gap-12">
          {/* Product Image Section */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="bg-white  border border-gray-900 dark:border-gray-700 shadow-md">
              <Image
                src="/images/anime.jpg"
                alt="Tory Detachable Down Fleece T-shirt"
                width={500}
                height={500}
                className="w-full max-w-md h-auto object-cover"
              />
            </div>
          </div>

          {/* Product Details Section */}
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Tory Detachable Down Fleece
            </h1>
            <p className="mt-2 text-2xl font-semibold text-gray-900 dark:text-gray-300">
              Rs. 1799.14
            </p>

            {/* Size Selector */}
            <div className="mt-6">
              <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                Select Size
              </h2>
              <div className="mt-2 flex items-center gap-3">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`flex h-10 w-10 items-center justify-center text-2xl font-semibold transition-all
                      ${
                        selectedSize === size
                          ? 'bg-[#EDFF66] text-black  dark:bg-gray-200 dark:text-black dark:ring-gray-200'
                          : 'border-gray-300 text-gray-800 hover:bg-gray-200 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700'
                      }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selector */}
            <div className="mt-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-200">
                Select Color
              </h2>
              <div className="mt-2 flex items-center gap-3">
                {colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-all
                      ${
                        selectedColor === color
                          ? 'ring-2 ring-offset-2 ring-gray-900 dark:ring-gray-200 dark:ring-offset-gray-800'
                          : 'border-gray-300 dark:border-gray-600'
                      }`}
                  >
                    <span
                      className={`h-5 w-5 rounded-full border border-gray-400 ${
                        color === 'Black' ? 'bg-black' : 'bg-white'
                      }`}
                    ></span>
                    <span className="text-gray-800 dark:text-gray-300">{color}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex items-center gap-4">
              <button className="flex flex-1 items-center justify-center gap-2  border border-gray-800 px-6 py-3 text-base md:text-base font-medium text-gray-800 transition-colors hover:bg-[#EDFF66] dark:border-gray-300 dark:text-gray-300 dark:hover:bg-gray-700 active:bg-[#EDFF66] focus:bg-[#EDFF66]">
               <Handbag />
               <div className="hidden md:block"> Add to </div>
                 Cart
              </button>
              <button className="flex-1  bg-gray-900 px-6 py-3 text-base font-medium text-white transition-opacity hover:opacity-90 dark:bg-gray-200 dark:text-black">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
