import React from "react";

const NavLinks = [
  { name: "Inicio", href: "/" },
  { name: "Sobre Nosotros", href: "/about" },
  { name: "Miembros", href: "#miembros" },
  { name: "Noticias", href: "#noticias" },
];

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-transparent text-yellow-600">
      <div className="font-cinzel font-bold text-2xl">Iglesia Remedios</div>

      <ul className="flex space-x-6 font-cinzel">
        {NavLinks.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className="hover:text-yellow-900 transition-colors"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
