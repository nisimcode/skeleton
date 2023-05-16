import Image from "next/image";

export default function Logo() {
  return (
    <div>
      <Image
        src="/logo.png"
        alt="logo here"
        width={70}
        height={70}
        loading="lazy"
        placeholder="empty"
      />
    </div>
  )
}