import FadeSection from "./FadeSection";

const members = [
  { name: "Padre Juan", role: "Párroco" },
  { name: "María López", role: "Coordinadora" },
  { name: "Carlos Pérez", role: "Catequista" },
];

export default function MembersSection() {
  return (
    <section className="py-16 px-4 bg-gray-100 dark:bg-gray-900" id="miembros">
      <h2 className="text-3xl font-bold mb-6 text-center font-cinzel">Miembros</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {members.map((m) => (
          <FadeSection key={m.name}>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow text-center">
              <h3 className="font-semibold text-lg mb-1">{m.name}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{m.role}</p>
            </div>
          </FadeSection>
        ))}
      </div>
    </section>
  );
}
