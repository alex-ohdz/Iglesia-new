import Image from "next/image";

export default function Hero() {
  return (
    <div>
      <div className="relative w-full h-[800px]">
        <Image
          src="/hero.webp"
          alt="hero"
          fill
          priority
          className="object-cover"
        />
      </div>
    </div>
  );
}
