import FadeSection from "./FadeSection";

const news = [
  {
    title: "Nuevo Horario de Misas",
    text: "A partir de julio las misas se celebrarán a las 18:00 hrs.",
  },
  {
    title: "Campaña de Recolección",
    text: "Estamos recolectando alimentos para las familias necesitadas.",
  },
  {
    title: "Retiro Espiritual",
    text: "Únete a nuestro retiro anual el próximo mes.",
  },
];

export default function NewsSection() {
  return (
    <section className="py-16 px-4" id="noticias">
      <h2 className="text-3xl font-bold mb-6 text-center font-cinzel">Noticias</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {news.map((n) => (
          <FadeSection key={n.title}>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <h3 className="font-semibold text-lg mb-2">{n.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{n.text}</p>
            </div>
          </FadeSection>
        ))}
      </div>
    </section>
  );
}
