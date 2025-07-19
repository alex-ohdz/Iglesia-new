import FadeSection from "./FadeSection";

export default function HistorySection() {
  return (
    <section className="py-16 px-4" id="historia">
      <h2 className="text-3xl font-bold mb-6 text-center font-cinzel">Nuestra Historia</h2>
      <FadeSection>
        <div className="max-w-3xl mx-auto bg-white/80 dark:bg-gray-800/50 p-6 rounded-lg shadow">
          <p className="text-lg leading-relaxed">
            Fundada en el siglo XVII, la Iglesia de los Remedios ha sido testigo de incontables generaciones de fieles. Este lugar sagrado guarda entre sus muros historias de fe, esperanza y comunidad que perduran hasta nuestros días.
          </p>
        </div>
      </FadeSection>
    </section>
  );
}
