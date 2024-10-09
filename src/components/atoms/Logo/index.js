import Image from "next/image";

export default function Logo() {
  return (
    <div className="max-h-30 max-w-52 ml-4">
      <Image
        src="/images/logo.png"
        alt="Logo Sejahtera Sehat Karya Utama"
        width={200}
        height={80}
        className="object-contain"
      />
    </div>
  );
}
