import BlogScroller from "../blogCard/BlogScroller";

const products = [
  {
    id: 1,
    imageUrl: "/images/Logo.png",
    altText: "Racan New Features has Launched",
    name: "Racan New Features has Launched",
    blog: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    isNew: true,
  },
  {
    id: 2,
    imageUrl: "/images/fashion/fashion-1.jpeg",
    altText: "Back of a man wearing a brown jacket",
    name: "New Leather Jacket has been arrived",
    blog: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    imageUrl: "/images/fashion/fashion-2.jpeg",
    altText: "Man wearing a white oversized t-shirt with blue stripes",
    name: "Max's Over sized shirt",
    blog: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 4,
    imageUrl: "/images/fashion/fashion-3.jpeg",
    altText: "Man wearing a navy blue oversized t-shirt with white stripes",
    name: "Max's Over sized shirt",
    blog: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    isNew: true,
  },
  {
    id: 5,
    imageUrl: "/images/fashion/fashion-5.jpeg",
    altText: "Another fashion item",
    name: "Urban Explorer",
    blog: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 6,
    imageUrl: "/images/fashion/fashion-1.jpeg",
    altText: "Another fashion item",
    name: "Urban Explorer",
    blog: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export default function BlogSection() {
  return (
    <section className="py-16 bg-white overflow-hidden lg:px-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            News & Blogs
          </h2>
          
        </div>
        <p className="text-2xl">Redefining fashion discovery. AI-powered<br/>
         recommendations, social interaction,<br /> and 
         trendsetting in one place </p>

        {/* Pass products to client component */}
        <BlogScroller products={products} />
      </div>
    </section>
  );
}
