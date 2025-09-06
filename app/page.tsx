
import Navbar01 from "@/components/NavBar/navBar01";
import HeroSection from "@/components/Home1/BgImage";
import NewArrivals from "@/components/Section/newArrival";
import WatchSection from "@/components/Home1/watchMarketing";
import ProductSection from "@/components/Home1/productSection";
import TrandingSection from "@/components/Section/TrandingSection";
import WomenSection from "@/components/Section/WomenSection";
import PurseSection from "@/components/Section/purseSection";
import BlogSection from "@/components/Section/BlogSection";
import Footer from "@/components/footer";
import BrandStoreSection from "@/components/Section/BrandStoreSection";

export default function Home() {
  return (
    <>
    <Navbar01 />
    {/* I changed the font of poppins in here */}
    <div className="font-heading">
    <HeroSection imageUrl="/images/herosection.png" alt='backgroundimage'><span></span></HeroSection>
    <BrandStoreSection />
    <NewArrivals />
    </div>
    <WatchSection />
    <ProductSection />
    <TrandingSection />
    <WomenSection />
    <PurseSection />
    <BlogSection />
    <Footer />
    </>
  );
}
