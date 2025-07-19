import React, { useEffect, useState } from "react";

const NavLinks = [
  { name: "Inicio", href: "/" },
  { name: "Sobre Nosotros", href: "/about" },
  { name: "Historia", href: "#historia" },
  { name: "Miembros", href: "#miembros" },
  { name: "Noticias", href: "#noticias" },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        scrolled
          ? "bg-white/80 shadow-lg py-6"
          : "bg-transparent py-3"
      } fixed top-0 left-0 w-full flex items-center justify-between px-8 text-yellow-600 transition-all duration-300 backdrop-blur`}
    >
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
