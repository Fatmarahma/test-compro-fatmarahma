import Button from "@/components/atoms/Button";

import Link from "next/link";

export default function Banner() {
  return (
    <section className="bg-[#0158be]">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-2xl font-extrabold sm:text-4xl text-white">Tumbuh Kembang Bersama</h1>

          <p className="mt-4 text-white sm:text-lg">
            Bersama kita tumbuh sehat, bersama kita kembang sejahtera, bersama kita menuju kesehatan yang optimal!
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <button className="w-auto px-4 py-2 bg-[#FEBD57] text-sm font-medium text-black rounded shadow hover:bg-[#fcb44e] focus:outline-none focus:ring">
              Hubungi Kami
            </button>

            <Link href="/product" passHref>
              <button className="w-auto px-4 py-2 bg-[#020367] text-sm font-medium text-white rounded shadow hover:bg-[#01044e] focus:outline-none focus:ring">
                Lihat Produk
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
