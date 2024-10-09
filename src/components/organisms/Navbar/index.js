import Logo from "@/components/atoms/Logo";
import NavLink from "@/components/atoms/NavLink";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [bgColor, setBgColor] = useState("transparent");
  const [fontColor, setFontColor] = useState("white");
  const [menuOpen, setMenuOpen] = useState(false); // State untuk toggle menu mobile

  const handleScroll = () => {
    if (window.scrollY > 80) {
      setBgColor("white");
      setFontColor("#0158be"); // Ubah warna font saat di-scroll
    } else {
      setBgColor("transparent");
      setFontColor("white"); // Warna font default saat di atas
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle menu state
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 px-6 md:px-16 z-50 transition-colors duration-300`}
      style={{ backgroundColor: bgColor, height: "80px" }}
    >
      <div className="flex items-center justify-between h-full">
        <Logo />

        {/* Hamburger Icon - tampil di mobile (md:hidden) */}
        <div className="md:hidden relative">
          <button onClick={toggleMenu} className="text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>

          {/* Mobile Menu - tampil saat menuOpen true */}
          {menuOpen && (
            <nav className=" absolute right-0 top-4 w-30 mt-2 bg-white shadow-lg rounded-md p-4">
              <ul className="flex flex-col space-y-2">
                <li>
                  <NavLink href="/" label="Beranda" style={{ color: "#0158be" }} />
                </li>
                <li>
                  <NavLink href="/product" label="Produk" style={{ color: "#0158be" }} />
                </li>
                <li>
                  <NavLink href="/about" label="Tentang" style={{ color: "#0158be" }} />
                </li>
                <li>
                  <NavLink href="/gallery" label="Gallery" style={{ color: "#0158be" }} />
                </li>
                <li>
                  <NavLink href="/career" label="Karir" style={{ color: "#0158be" }} />
                </li>
              </ul>
            </nav>
          )}
        </div>

        {/* Desktop Menu - tampil di layar besar (md:flex) */}
        <nav className="hidden md:flex space-x-6">
          <NavLink href="/" label="Beranda" style={{ color: fontColor }} />
          <NavLink href="/product" label="Produk" style={{ color: fontColor }} />
          <NavLink href="/about" label="Tentang" style={{ color: fontColor }} />
          <NavLink href="/gallery" label="Gallery" style={{ color: fontColor }} />
          <NavLink href="/career" label="Karir" style={{ color: fontColor }} />
        </nav>
      </div>
    </header>
  );
}
