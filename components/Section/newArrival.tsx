// import React from 'react';
// // CORRECTED: The import path now correctly points to the ProductCard component file.
// // Assuming your folder structure is components/productCard/ProductCard.tsx
// import ProductCard from '../productCard/card';

// const products = [
//   {
//     id: 1,
//     imageUrl: '/images/Logo.png',
//     altText: 'Man wearing a brown jacket',
//     name: 'U.S. POLO ASSN.',
//     price: 2999,
//     isNew: true,
//   },
//   {
//     id: 2,
//     imageUrl: '/images/fashion/fashion-1.jpeg',
//     altText: 'Back of a man wearing a brown jacket',
//     name: "Binnote Men's",
//     price: 3999,
//   },
//   {
//     id: 3,
//     imageUrl: '/images/fashion/fashion-2.jpeg',
//     altText: 'Man wearing a white oversized t-shirt with blue stripes',
//     name: "Max's Over sized shirt",
//     price: 5999,
//   },
//   {
//     id: 4,
//     imageUrl: '/images/fashion/fashion-3.jpeg',
//     altText: 'Man wearing a navy blue oversized t-shirt with white stripes',
//     name: "Max's Over sized shirt",
//     price: 999,
//     isNew: true,
//   },
//   {
//     id: 5,
//     imageUrl: '/images/fashion/fashion-5.jpeg',
//     altText: 'Another fashion item',
//     name: 'Urban Explorer',
//     price: 1999,
//   },
//    {
//     id: 6,
//     imageUrl: '/images/fashion/fashion-1.jpeg',
//     altText: 'Another fashion item',
//     name: 'Urban Explorer',
//     price: 1999,
//   }
// ];

// const NewArrivals = () => {
//   return (
//     <section className="py-16 bg-white overflow-hidden">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center mb-8">
//           <h2 className="text-3xl font-bold tracking-tight text-gray-900">New arrival</h2>
//           <div className="flex items-center gap-3">
//             <button
//               aria-label="Previous"
//               className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-lime-200 transition-colors"
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
//               </svg>
//             </button>
//             <button
//               aria-label="Next"
//               className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-lime-200 transition-colors"
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
//               </svg>
//             </button>
//           </div>
//         </div>
//         {/* I use scrollbar-hide plugin */}
//         <div className="flex gap-6 pb-4 -mx-4 px-4 overflow-x-auto scrollbar-hide "> 
//           {products.map((product) => (
//             <ProductCard
//               key={product.id}
//               imageUrl={product.imageUrl}
//               altText={product.altText}
//               name={product.name}
//               price={product.price}
//               isNew={product.isNew}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default NewArrivals;
// app/components/NewArrivals.tsx
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

export default function NewArrivals() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            New arrival
          </h2>
        </div>

        {/* Pass products to client component */}
        <ProductScroller products={products} />
      </div>
    </section>
  );
}


