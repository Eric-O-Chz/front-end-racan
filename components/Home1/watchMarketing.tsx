// "use client";

// import React from "react";

// export default function WatchSection() {
//   return (
//     <section
//       className="relative w-full h-[90vh] bg-cover bg-center flex items-center justify-start"
//       style={{
//         backgroundImage: "url('/images/blueback.png')", // replace with your image
//       }}
//     >
//       {/* Overlay (optional for readability) */}
//       <div className="absolute inset-0 bg-black/30"></div>

//       {/* Content */}
//       <div className="relative z-10 max-w-xl px-6 md:px-12 text-white">
//         <h2 className="text-3xl md:text-5xl font-bold mb-4">
//           Drift+ Watch
//         </h2>
//         <p className="text-base md:text-lg mb-6 leading-relaxed">
//           Bluetooth Smartwatch with Stunning 1.85&quot; (4.69 cm) HD 500 Nits
//           Screen, BT Calling, Health Monitoring, Mini-Games, and AI Assistant
//           support.
//         </p>
//         <button className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow-md hover:bg-yellow-500 transition">
//           Visit Now
//         </button>
//       </div>
//     </section>
//   );
// }
"use client";

import React from "react";

export default function WatchSection() {
  return (
    <section className="relative w-full h-[90vh] flex items-center justify-start font-heading">
      {/* Desktop Background */}
      <div
        className="hidden md:block absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/blueback.png')", // desktop image
        }}
      />

      {/* Mobile Background */}
      <div
        className="block md:hidden absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/blueback-mobile.png')", // mobile image
        }}
      />

      {/* Overlay (optional) */}
       <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6 md:px-12 text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Drift+ Watch</h2>
        <p className="text-base md:text-2xl mb-6 leading-relaxed">
          Bluetooth Smartwatch with Stunning 1.85&quot; (4.69 cm) HD 500 Nits
          Screen, BT Calling, Health Monitoring, Mini-Games, and AI Assistant
          support.
        </p>
        <button className="px-6 py-3 w-70 h-15 bg-[#EDFF66] text-black font-semibold shadow-md hover:bg-yellow-500 transition">
          Visit Now
        </button>
      </div>
    </section>
  );
}
