import Image from "next/image";
import Link from "next/link";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md"; // Import icons
import { FaLinkedin, FaTwitter, FaFacebook, FaYoutube } from "react-icons/fa"; // Social media icons

export default function Footer() {
  return (
    <footer className="bg-[#0158be] text-white py-8">
      <div className="container mx-auto px-4">
        {/* Logo di atas kiri */}
        <div className="flex justify-start mb-8">
          <Image src="/images/logo.png" alt="Logo Giyu" width={300} height={300} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Office Section */}
          <div>
            <h3 className="text-lg font-bold">Office</h3>
            <p className="mt-4 flex items-start">
              <MdLocationOn className="mr-2" size={20} />
              Jl. Podomoro Boulevard Kav. 1, Podomoro Park Land Arteri Tol, Karawang Barat, Desa Wadas, Kecamatan
              Telukjambe Timur, Kabupaten Karawang 41361
            </p>
            <p className="mt-4 flex items-center">
              <MdEmail className="mr-2" size={20} />
              <a href="mailto:sekretariat@sejahterasehatkaryautama.co.id" className="underline">
                sekretariat@sejahterasehatkaryautama.co.id
              </a>
            </p>
            <p className="mt-4 flex items-center">
              <MdPhone className="mr-2" size={20} />
              +62-21-8276-5092, +62-811-1031-322 (mobile)
            </p>
          </div>

          {/* Produk dan Karir Section */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-bold">Produk</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="/product" className="hover:underline">
                    Rumah Sakit
                  </Link>
                </li>
                <li>
                  <Link href="/product" className="hover:underline">
                    Klinik
                  </Link>
                </li>
                <li>
                  <Link href="/product" className="hover:underline">
                    Apotek
                  </Link>
                </li>
                <li>
                  <Link href="/product" className="hover:underline">
                    Laboratorium Klinik
                  </Link>
                </li>
                <li>
                  <Link href="/product" className="hover:underline">
                    Healthcare Application
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold">Karir</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="/career" className="hover:underline">
                    Daftar Lowongan
                  </Link>
                </li>
                <li>
                  <Link href="/career" className="hover:underline">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/career" className="hover:underline">
                    Syarat & Ketentuan
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="mt-8 flex justify-center space-x-6">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={24} />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={24} />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube size={24} />
          </a>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 flex justify-between items-center">
          <p>© 2024 PT Sejahtera Sehat Karyautama</p>
        </div>
      </div>
    </footer>
  );
}
