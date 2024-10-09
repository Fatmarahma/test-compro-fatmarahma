import PositionCard from "@/components/molecules/PositionCard";
import Footer from "@/components/organisms/Footer";
import Navbar from "@/components/organisms/Navbar";

export default function career() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      {/* Banner Section */}
      <section className="bg-[#ffffff] py-16 text-center">
        <h1 className="text-4xl font-extrabold text-black">Karir</h1>
        <hr className="mx-12 my-8 border-green" />
      </section>

      <PositionCard />

      {/* Footer */}
      <Footer />
    </div>
  );
}
