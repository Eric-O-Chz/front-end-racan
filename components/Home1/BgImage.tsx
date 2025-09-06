import React from 'react';

// Define the component's props for type safety
interface HeroSectionProps {
  /**
   * The URL or path to the background image.
   * For Next.js, place images in the `public` folder. Example: '/hero-background.jpg'
   */
  imageUrl: string;
  /**
   * Alt text for the background image for accessibility.
   */
  alt: string;
  /**
   * Any elements you want to display on top of the hero image (e.g., titles, buttons).
   */
  children: React.ReactNode;
}

/**
 * A full-screen, responsive hero section with a background image.
 */
const HeroSection: React.FC<HeroSectionProps> = ({ imageUrl, alt, children }) => {
  return (
    // The <section> tag is semantically appropriate for a hero section.
    // 'relative' is crucial as it acts as the positioning anchor for the overlay and content.
    <section
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat"
      // The background image URL is passed dynamically via an inline style.
      style={{ backgroundImage: `url(${imageUrl})` }}
      // Accessibility attributes to describe the visual element to screen readers.
      role="img"
      aria-label={alt}
    >
      {/* This is an optional overlay. It darkens the background image slightly,
        which dramatically improves the readability of any text placed on top.
        You can adjust the opacity (e.g., bg-black/50 for 50%, bg-black/70 for 70%).
        Or remove this div entirely if you don't want an overlay.
      */}
      <div className="absolute inset-0 " />

      {/* This is the content container. 
        'relative' and 'z-10' ensure it sits on top of the overlay.
        Flexbox is used to perfectly center the content both vertically and horizontally.
      */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full text-center text-white p-4 sm:p-6 lg:p-8">
        {/* The children passed to the component will be rendered here */}
        {children}
      </div>
    </section>
  );
};

export default HeroSection;
