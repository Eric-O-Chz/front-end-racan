import Image from "next/image";

export default function PurseSection() {
  return (
    <section className="relative w-full h-[90vh] flex items-center justify-start font-heading">
      {/* Optimized Background Image */}
      <Image
        src="/images/Purse.png"
        alt="Responsive background"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Optional Overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div> */}

    </section>
  );
}
