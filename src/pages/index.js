import Banner from "@/components/organisms/Banner";
import CareerSection from "@/components/organisms/CareerSection";
import Footer from "@/components/organisms/Footer";
import HeroSection from "@/components/organisms/HeroSection";
import Navbar from "@/components/organisms/Navbar";
import ProductSection from "@/components/organisms/ProductSection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto">
        <Banner />
      </main>
      <ProductSection />
      <HeroSection />
      <CareerSection />
      <Footer />
    </div>
  );
}
