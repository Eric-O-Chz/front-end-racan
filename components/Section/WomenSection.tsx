import ProductScroller from "@/components/productCard/ProductScroller";

const products = [
  {
    id: 1,
    imageUrl: "/images/Logo.png",
    altText: "Man wearing a brown jacket",
    name: "U.S. POLO ASSN.",
    price: 2999,
    isNew: true,
  },
  {
    id: 2,
    imageUrl: "/images/fashion/fashion-1.jpeg",
    altText: "Back of a man wearing a brown jacket",
    name: "Binnote Men's",
    price: 3999,
  },
  {
    id: 3,
    imageUrl: "/images/fashion/fashion-2.jpeg",
    altText: "Man wearing a white oversized t-shirt with blue stripes",
    name: "Max's Over sized shirt",
    price: 5999,
  },
  {
    id: 4,
    imageUrl: "/images/fashion/fashion-3.jpeg",
    altText: "Man wearing a navy blue oversized t-shirt with white stripes",
    name: "Max's Over sized shirt",
    price: 999,
    isNew: true,
  },
  {
    id: 5,
    imageUrl: "/images/fashion/fashion-5.jpeg",
    altText: "Another fashion item",
    name: "Urban Explorer",
    price: 1999,
  },
  {
    id: 6,
    imageUrl: "/images/fashion/fashion-1.jpeg",
    altText: "Another fashion item",
    name: "Urban Explorer",
    price: 1999,
  },
];

export default function WomenSection() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Women
          </h2>
        </div>

        {/* Pass products to client component */}
        <ProductScroller products={products} />
      </div>
    </section>
  );
}
