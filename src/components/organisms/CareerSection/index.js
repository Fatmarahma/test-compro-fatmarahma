import Link from "next/link";

export default function CareerSection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        {/* Judul */}
        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-gray-900">Mulai Karir Anda Bersama Kami</h2>

        {/* Tombol Lihat Semua Lowongan */}
        <div className="mt-4">
          <Link href="/career">
            <button className="bg-[#1B3C74] text-white px-6 py-3 rounded-full inline-flex items-center text-sm md:text-base font-medium hover:bg-[#16347a] transition duration-300">
              Lihat Semua Lowongan
              <i className="mdi mdi-chevron-right ml-2" aria-hidden="true"></i>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
