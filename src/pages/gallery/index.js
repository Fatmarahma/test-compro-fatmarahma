import ChevronRightIcon from "@/components/atoms/Icons/ChevronRightIcon";
import Home from "@/components/atoms/Icons/Home";
import Footer from "@/components/organisms/Footer";
import Navbar from "@/components/organisms/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function gallery() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Banner Section */}
      <section className="bg-[#0158be] py-10 md:py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* SVG Kanan*/}
          <Image
            src="/images/bannerVectorRight.svg"
            width={150}
            height={150}
            alt="Right Decoration"
            className="rotate-180 hidden md:block"
          />

          {/* Teks Produk Kami */}
          <h1 className="text-3xl md:text-4xl font-extrabold text-white text-center flex-grow mt-10">Gallery Kami</h1>

          {/* SVG Kiri */}
          <Image
            src="/images/bannerVectorLeft.svg"
            width={150}
            height={150}
            alt="Left Decoration"
            className="hidden md:block"
          />
        </div>

        <div className="mt-4 text-white text-center block md:hidden">
          {/* Ikon Home */}
          <Link href="/" className="inline-flex items-center text-white">
            <Home />
            <ChevronRightIcon />
          </Link>
        </div>
      </section>

      {/* Video Section */}
      <div className="container mx-auto my-12 flex justify-center">
        <div className="gallery-card v-card v-card--flat v-sheet theme--light max-w-md w-full">
          <video controls src="/vidio/vidio.mp4" className="product-media w-full rounded-lg" />
          <div className="v-card__text text-center py-4">
            <h3 className="product-title text-lg md:text-xl font-bold">Pelatihan KKND</h3>
            <p className="product-desc text-gray-700 text-sm md:text-base">
              Pelatihan intensif KKVID di RS Cipto Mangunkusumo
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
