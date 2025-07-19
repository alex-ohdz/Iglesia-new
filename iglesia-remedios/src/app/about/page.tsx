import Navbar from "@/components/Navbar";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="p-8">
        <h1 className="text-2xl font-bold font-cinzel mb-4">Sobre Nosotros</h1>
        <p>
          Bienvenido a la sección de información general de la iglesia. Aquí pronto encontrarás más detalles sobre nuestras actividades.
        </p>
      </div>
    </div>
  );
}
