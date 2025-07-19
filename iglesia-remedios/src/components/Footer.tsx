import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-200 dark:bg-gray-900 text-center py-4 mt-8 text-sm text-gray-600 dark:text-gray-300">
      &copy; {new Date().getFullYear()} Iglesia de los Remedios. Todos los derechos reservados.
    </footer>
  );
}
