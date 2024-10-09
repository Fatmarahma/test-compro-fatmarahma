import Link from "next/link";

const NavLink = ({ href, label, style }) => {
  return (
    <Link href={href} style={style} className="font-bold">
      {label}
    </Link>
  );
};

export default NavLink;
