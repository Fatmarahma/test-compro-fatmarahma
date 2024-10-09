import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="mt-12 py-6 flex flex-col items-center justify-center bg-[#1B3C74]">
      {/* Teks Utama */}
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold mt-6 text-white">Tumbuh Kembang Bersama Kami</h1>{" "}
      </div>

      {/* Konten dengan Gambar dan Deskripsi */}
      <div className="flex flex-col md:flex-row items-center justify-center space-x-4 max-w-4xl">
        {/* Gambar */}
        <div className="relative w-full md:w-1/2 mt-4 md:mt-0">
          <Image
            src="/images/rumahsakit.jpg"
            alt="Tumbuh Kembang"
            layout="responsive"
            width={500}
            height={500}
            className="object-contain rounded-lg"
          />
        </div>
        {/* Deskripsi */}
        <div className="p-6 rounded-lg text-justify text-white md:w-1/2">
          <p className="text-xs md:text-sm">
            {" "}
            Di Sejahtera Sehat Karyautama, kami percaya bahwa tumbuh dan kembang merupakan proses yang tidak terpisahkan
            dari kehidupan. Kami juga percaya bahwa untuk tumbuh dan kembang dengan sehat, dibutuhkan dukungan dan
            perawatan yang tepat. Itulah mengapa kami ada, untuk membantu Anda tumbuh dan kembang sehat. Dengan tim
            medis yang terlatih dan berpengalaman serta fasilitas yang lengkap, kami siap menjadi partner Anda dalam
            perjalanan menuju kesehatan yang optimal. Tumbuh dan kembang bersama kami di Sejahtera Sehat Karyautama.
          </p>
        </div>
      </div>

      {/* Tombol Selengkapnya */}
      <div className="mt-8">
        <Link href="/about">
          <button className="bg-[#FEBD57] text-white px-6 py-2 rounded-full inline-flex items-center text-sm md:text-base font-medium hover:bg-[#e5a84f] transition duration-300">
            Selengkapnya
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </Link>
      </div>
    </section>
  );
}
