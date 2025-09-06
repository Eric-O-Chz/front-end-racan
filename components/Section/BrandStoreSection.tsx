import BrandCardScroller from "../brandStore/brandScroller";
import { ArrowRight } from 'lucide-react';

const products = [
  {
    id: 1,
    imageUrl: "/images/Logo.png",
    altText: "Man wearing a brown jacket",
    name: "U.S. POLO ASSN.",
    logoUrl: "/images/nike.png",
    
  },
  {
    id: 2,
    imageUrl: "/images/fashion/fashion-1.jpeg",
    altText: "Back of a man wearing a brown jacket",
    logoUrl: "/images/nike.png",
  },
  {
    id: 3,
    imageUrl: "/images/fashion/fashion-2.jpeg",
    altText: "Man wearing a white oversized t-shirt with blue stripes",
    logoUrl: "/images/nike.png",
  },
  {
    id: 4,
    imageUrl: "/images/fashion/fashion-3.jpeg",
    altText: "Man wearing a navy blue oversized t-shirt with white stripes",
    logoUrl: "/images/nike.png",
  },
  {
    id: 5,
    imageUrl: "/images/fashion/fashion-5.jpeg",
    altText: "Another fashion item",
    logoUrl: "/images/nike.png",
  },
  {
    id: 6,
    imageUrl: "/images/fashion/fashion-1.jpeg",
    altText: "Another fashion item",
    logoUrl: "/images/nike.png",
  },
];

export default function BrandStoreSection() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Brand Stores
          </h2>
          <h2 className="flex justify-between items-center mx-2 text-2xl underline">
            Explore all Stores<ArrowRight/>
          </h2>
        </div>

        {/* Pass products to client component */}
        <BrandCardScroller products={products} />
      </div>
    </section>
  );
}
