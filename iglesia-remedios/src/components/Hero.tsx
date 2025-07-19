import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative w-full h-[60vh] md:h-[80vh] mt-[-50px] z-10">
      <Image
        src="/hero.webp"
        alt="hero"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-cinzel mb-4">
          Iglesia de los Remedios
        </h1>
        <p className="text-lg md:text-2xl">Bienvenidos a nuestra comunidad</p>
      </div>
    </div>
  );
}
