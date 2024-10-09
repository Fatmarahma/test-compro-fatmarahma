import Button from "@/components/atoms/Button";
import Image from "next/image";

export default function ProductSection() {
  return (
    <section className="py-12">
      <div className="container mx-auto text-start">
        {/* Header Section */}
        <span className="main-title text-4xl font-bold text-center block">Produk Kami</span> {/* Mengurangi ukuran */}
        {/* Row untuk produk */}
        <div className="flex flex-wrap pt-12">
          {/* Gambar Produk */}
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <div className="relative bg-[#868484] border border-[#F4F2F2] rounded-lg overflow-hidden shadow-lg transition duration-300 hover:shadow-xl">
              <Image
                src="/images/rumahsakit.jpg"
                width={500}
                height={500}
                alt="Rumah Sakit"
                className="object-cover h-48 w-full"
              />
            </div>
          </div>

          {/* Deskripsi Produk */}
          <div className="w-full md:w-1/2 flex flex-col justify-center pl-6">
            <div className="product-title text-xl font-semibold mt-6">Rumah Sakit</div>
            <div className="product-desc text-gray-700 mt-2">
              {" "}
              {/* Tambahkan margin bawah */}
              Meningkatkan keamanan, kenyamanan, dan kepuasan pasien.
            </div>
            <div className="mt-2">
              {" "}
              {/* Kurangi jarak dari deskripsi */}
              <Button bgColor="#1B3C74" padding="24px" margin="32px 0 0 0" height="36px" role="button">
                Selengkapnya
              </Button>
            </div>
          </div>
        </div>
        {/* Row untuk Klinik */}
        <div className="flex flex-wrap pt-12 justify-center">
          {/* Gambar Klinik */}
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <div className="relative bg-[#F4F2F2] border border-[#F4F2F2] rounded-lg overflow-hidden shadow-lg transition duration-300 hover:shadow-xl">
              <Image
                src="/images/klinik.jpg"
                width={500}
                height={500}
                alt="klinik"
                className="object-cover h-48 w-full"
              />
            </div>
          </div>

          {/* Deskripsi Klinik */}
          <div className="w-full md:w-1/2 flex flex-col justify-center pl-6">
            <div className="product-title text-xl font-semibold mt-6">Klinik</div>
            <div className="product-desc text-gray-700 mt-2 "> Memberikan pelayanan terbaik, 24/7</div>
            <div className="mt-2">
              {" "}
              <Button bgColor="#1B3C74" padding="24px" margin="32px 0 0 0" height="36px" role="button">
                Selengkapnya
              </Button>
            </div>
          </div>
        </div>
        {/* Row untuk Apotek */}
        <div className="flex flex-wrap pt-12 justify-center">
          {/* Gambar Apotek */}
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <div className="relative bg-[#F4F2F2] border border-[#F4F2F2] rounded-lg overflow-hidden shadow-lg transition duration-300 hover:shadow-xl">
              <Image
                src="/images/apotek.jpg"
                width={500}
                height={500}
                alt="Apotek"
                className="object-cover h-48 w-full"
              />
            </div>
          </div>

          {/* Deskripsi Apotek */}
          <div className="w-full md:w-1/2 flex flex-col justify-center pl-6">
            <div className="product-title text-xl font-semibold mt-6">Apotek</div>
            <div className="product-desc text-gray-700 mt-2 ">
              {" "}
              {/* Tambahkan margin bawah */}
              Memberikan pelayanan terbaik, 24/7
            </div>
            <div className="mt-2">
              {" "}
              {/* Kurangi jarak dari deskripsi */}
              <Button bgColor="#1B3C74" padding="24px" margin="32px 0 0 0" height="36px" role="button">
                Selengkapnya
              </Button>
            </div>
          </div>
        </div>
        {/* Row untuk Lab */}
        <div className="flex flex-wrap pt-12 justify-center">
          {/* Gambar Lab */}
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <div className="relative bg-[#F4F2F2] border border-[#F4F2F2] rounded-lg overflow-hidden shadow-lg transition duration-300 hover:shadow-xl">
              <Image
                src="/images/lab.jpg"
                width={500}
                height={500}
                alt="Laboratorium"
                className="object-cover h-48 w-full"
              />
            </div>
          </div>

          {/* Deskripsi Lab */}
          <div className="w-full md:w-1/2 flex flex-col justify-center pl-6">
            <div className="product-title text-xl font-semibold mt-6">Laboratorium Klinik</div>
            <div className="product-desc text-gray-700 mt-2 ">
              {" "}
              {/* Tambahkan margin bawah */}
              Permudah pengisian data, dengan hasil yang optimal
            </div>
            <div className="mt-2">
              {" "}
              {/* Kurangi jarak dari deskripsi */}
              <Button bgColor="#1B3C74" padding="24px" margin="32px 0 0 0" height="36px" role="button">
                Selengkapnya
              </Button>
            </div>
          </div>
        </div>
        {/* Row untuk Apk */}
        <div className="flex flex-wrap pt-12 justify-center">
          {/* Gambar Apk */}
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <div className="relative bg-[#F4F2F2] border border-[#F4F2F2] rounded-lg overflow-hidden shadow-lg transition duration-300 hover:shadow-xl">
              <Image
                src="/images/apk.jpg"
                width={500}
                height={500}
                alt="Healthcare Application"
                className="object-cover h-48 w-full"
              />
            </div>
          </div>

          {/* Deskripsi apk */}
          <div className="w-full md:w-1/2 flex flex-col justify-center pl-6">
            <div className="product-title text-xl font-semibold mt-6">Healthcare Application</div>
            <div className="product-desc text-gray-700 mt-2 ">
              {" "}
              {/* Tambahkan margin bawah */}
              Manajemen informasi pasien lebih baik, mengurangi beban administratif
            </div>
            <div className="mt-2">
              {" "}
              {/* Kurangi jarak dari deskripsi */}
              <Button bgColor="#1B3C74" padding="24px" margin="32px 0 0 0" height="36px" role="button">
                Selengkapnya
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
