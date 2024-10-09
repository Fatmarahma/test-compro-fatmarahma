import Footer from "@/components/organisms/Footer";
import Navbar from "@/components/organisms/Navbar";
import { useState } from "react";

export default function DetailPerawat() {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Banner Section */}
      <section className="bg-[#ffffff] py-16 text-center">
        <h1 className="text-4xl font-extrabold text-black">Detail Perawat</h1>
        <hr className="mx-12 my-8 border-green" />
      </section>

      {/* Detail Section */}
      <div className="container mx-auto py-8 px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">Perawat</h2>
        <p className="text-justify">
          Rumah Sakit Khusus Jantung dan Pembuluh Darah yang sedang dibangun di Karawang Barat, mengundang anda untuk
          bergabung pada posisi Perawat.
        </p>

        <div className="my-4">
          <p className="font-bold">
            <strong>Lokasi:</strong> Karawang Barat
          </p>
          <p className="font-bold">
            <strong>Posisi:</strong> Full time
          </p>
          <p className="font-bold">
            <strong>Posted on:</strong> 17 Jul 2024
          </p>
          <p className="font-bold">
            <strong>Rumpun SDMK:</strong> Keperawatan
          </p>
          <p className="font-bold">
            <strong>Sub-Rumpun SDMK:</strong> Perawat Kesehatan Masyarakat
          </p>
          <p className="font-bold">
            <strong>Jenis SDMK:</strong> Ners
          </p>
        </div>

        <h3 className="font-bold mt-4">Kualifikasi:</h3>
        <ul className="list-disc pl-5">
          <li>Sehat jasmani dan Rohani.</li>
          <li>Pendidikan minimal D3/S1 Ners.</li>
          <li>Memiliki sertifikat BCLS/ACLS lebih disukai.</li>
          <li>Mampu berbahasa Inggris pasif/aktif.</li>
          <li>Mampu mengoperasikan Microsoft Office.</li>
          <li>Bekerja penuh waktu dan tidak terikat komitmen ikatan dinas/kontrak kerja dengan pihak lain.</li>
          <li>Menyukai tantangan dan bekerja dalam tim.</li>
          <li>Fresh Graduate dipersilakan melamar.</li>
        </ul>

        <h3 className="font-bold mt-4">Benefit:</h3>
        <ul className="list-disc pl-5">
          <li>Peluang karir terbuka luas.</li>
          <li>Memperoleh kesempatan pelatihan dan sertifikasi.</li>
          <li>Mendapatkan asuransi BPJS Ketenagakerjaan dan BPJS Kesehatan.</li>
        </ul>

        <h3 className="font-bold mt-4">Penempatan:</h3>
        <ul className="list-disc pl-5">
          <li>Target operasional Januari 2025.</li>
          <li>Kandidat siap bergabung 2 September 2024.</li>
          <li>Unit Penempatan: Ruang Rawat, IGD, Kamar Operasi, Cathlab, dan CICU.</li>
        </ul>

        <div className="mt-6 flex justify-center">
          <button onClick={handleOpenModal} className="bg-red-600 text-white py-2 px-6 rounded-md">
            Daftar Sekarang
          </button>
        </div>
      </div>

      {/* Modal for Registration Form */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 w-11/12 md:w-1/3 relative max-h-[90%] overflow-auto">
            <button onClick={handleCloseModal} className="absolute top-2 right-2 text-gray-500 hover:text-gray-800">
              &times; {/* Icon close */}
            </button>
            <h2 className="text-2xl font-bold mb-4">Formulir Pendaftaran</h2>
            <form>
              <div className="mb-4">
                <label className="block mb-2">Nama Lengkap</label>
                <input type="text" className="w-full border rounded p-2" />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Email</label>
                <input type="email" className="w-full border rounded p-2" />
              </div>
              <div className="mb-4">
                <label className="block mb-2">No. Handphone</label>
                <input type="text" className="w-full border rounded p-2" />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Pendidikan Terakhir</label>
                <input type="text" className="w-full border rounded p-2" />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Perguruan Tinggi</label>
                <input type="text" className="w-full border rounded p-2" />
              </div>
              <div className="mb-4">
                <label className="block mb-2">IPK</label>
                <input type="text" className="w-full border rounded p-2" />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Program Studi</label>
                <input type="text" className="w-full border rounded p-2" />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Akreditasi</label>
                <input type="text" className="w-full border rounded p-2" />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Siap Bergabung</label>
                <input type="date" className="w-full border rounded p-2" />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Informasi Lowongan</label>
                <textarea className="w-full border rounded p-2"></textarea>
              </div>
              <div className="mb-4">
                <label className="block mb-2">Berkas Lamaran (PDF)</label>
                <input type="file" className="w-full border rounded p-2" />
              </div>
              <div className="flex justify-end">
                <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded">
                  Kirim
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}
