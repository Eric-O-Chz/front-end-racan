import React from 'react';
import Image from 'next/image'; // Using Next.js Image for optimization

interface BlogCardProps {
  imageUrl: string;
  altText: string;
  logoUrl: string;

}

const BrandCard: React.FC<BlogCardProps> = ({ imageUrl, altText, logoUrl }) => {
  return (
    <div className=" group relative flex-shrink-0 w-64 sm:w-72 cursor-pointer">
      {/* MODIFICATION: Added 'aspect-[3/4]' here.
        This forces the container to maintain a 3:4 aspect ratio (width:height),
        ensuring all cards have the same dimensions.
      */}
      <div className="relative overflow-hidden aspect-[3/4] rounded-sm">
          <div className="absolute bottom-3 left-3  z-10  font-bold px-3 py-1">  
            
                <Image
                src={logoUrl}
                alt="Logo"
                width={120}       // long width
                height={80}      // fixed small height for a thin capsule
                style={{ objectFit: "contain" }}  // prevent stretching weirdly
                className="rounded-full"
                />

            
          </div>
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
        </div>
      </div>
    </div>
  );
};

export default BrandCard;

