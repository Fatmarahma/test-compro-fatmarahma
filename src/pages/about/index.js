import Footer from "@/components/organisms/Footer";
import Navbar from "@/components/organisms/Navbar";
import Image from "next/image";

export default function About() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="py-6 flex flex-col items-center justify-center bg-[#0158be]">
        {/* Teks Utama */}
        <div className="text-center mb-8 mt-12">
          <h1 className="text-2xl md:text-4xl font-bold text-white">Tentang Kami</h1>
        </div>

        {/* Konten dengan Gambar dan Deskripsi */}
        <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-4 max-w-4xl">
          {/* Deskripsi */}
          <div className="p-6 rounded-lg text-justify text-white md:w-1/2">
            <p className="text-sm md:text-base">
              Perusahaan kami memiliki visi untuk menyediakan layanan kesehatan terbaik bagi masyarakat. Sejak
              didirikan, kami terus berkembang dan meningkatkan kualitas layanan yang kami berikan. Kami juga terus
              mencari solusi inovatif untuk menyediakan produk kesehatan yang dapat membantu masyarakat dalam menjaga
              kesehatan mereka. Kami bersyukur telah dipercaya sebagai salah satu perusahaan kesehatan terkemuka di
              Indonesia, dan kami terus berupaya untuk memberikan yang terbaik bagi masyarakat.
            </p>
          </div>
          {/* Gambar */}
          <div className="relative w-full md:w-1/2">
            <Image
              src="/images/rumahsakit.jpg"
              alt="Tumbuh Kembang"
              layout="responsive"
              width={500}
              height={500}
              className="object-contain rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* About Description */}
      <div className="py-12 bg-[#F0F4F8]">
        <div className="container mx-auto px-4 md:px-0">
          <div className="text-justify text-lg">
            <p>
              Kami adalah perusahaan yang bergerak di bidang jasa kesehatan dan produk kesehatan. Kami menyediakan
              layanan kesehatan terbaik bagi masyarakat dengan menggunakan teknologi terkini dan tim medis yang handal.
              Selain itu, kami juga menyediakan berbagai produk kesehatan berkualitas untuk membantu masyarakat dalam
              menjaga kesehatan mereka. Kami percaya bahwa kesehatan adalah hal yang sangat penting, dan kami
              berkomitmen untuk terus memberikan yang terbaik bagi masyarakat.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
