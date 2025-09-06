import React from 'react';
import Image from 'next/image'; // Using Next.js Image for optimization

interface ProductCardProps {
  imageUrl: string;
  altText: string;
  name: string;
  price: number;
  isNew?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ imageUrl, altText, name, price, isNew }) => {
  return (
    <div className=" group relative flex-shrink-0 w-64 sm:w-72 cursor-pointer">
      {/* MODIFICATION: Added 'aspect-[3/4]' here.
        This forces the container to maintain a 3:4 aspect ratio (width:height),
        ensuring all cards have the same dimensions.
      */}
      <div className="relative overflow-hidden border border-gray-800  aspect-[3/4]">
        {isNew && (
          <div className="absolute  z-10 bg-red-500 text-white text-xs rounded-rb-sm font-bold px-3 py-1">  
            New
          </div>
        )}
        {/* top-3 left-3 */}
        
        {/*
          MODIFICATION: Using the 'fill' prop on Next.js Image.
          This makes the image expand to fill its parent container ('aspect-[3/4]' div).
          'object-cover' ensures the image covers the area without distortion.
          Removed width/height props as they aren't used with 'fill'.
        */}
        <Image
          src={imageUrl}
          alt={altText}
          fill
          sizes="(max-width: 640px) 16rem, 18rem" // Helps Next.js optimize for different screen sizes
          className="object-cover transition-transform duration-300 group-hover:scale-105 "
        />

        <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-end pb-10 justify-center">
          <button className="bg-[#EDFF66] text-black font-bold py-2 px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 transform group-hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            Cart
          </button>
        </div>
      </div>
      <div className="mt-3 text-center">
        <h3 className="text-sm font-semibold text-gray-800">{name}</h3>
        <p className="mt-1 text-md text-gray-600">Rs. {price.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default ProductCard;

