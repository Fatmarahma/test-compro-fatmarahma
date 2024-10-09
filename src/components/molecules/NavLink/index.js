import NavLink from "@/components/atoms/NavLink";

export default function NavLinks() {
  return (
    <nav className="flex space-x-6 mr-6">
      <NavLink href="/" label="Beranda" />
      <NavLink href="/product" label="Produk" />
      <NavLink href="/about" label="Tentang" />
      <NavLink href="/gallery" label="Gallery" />
      <NavLink href="/career" label="Karir" />
    </nav>
  );
}
