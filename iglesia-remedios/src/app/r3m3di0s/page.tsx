"use client";

import Navbar from "@/components/Navbar";
import { useState } from "react";

interface NewsItem {
  id: number;
  title: string;
  text: string;
}

interface Employee {
  id: number;
  name: string;
  role: string;
}

export default function AdminPage() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [employees, setEmployees] = useState<Employee[]>([]);

  const [newsTitle, setNewsTitle] = useState("");
  const [newsText, setNewsText] = useState("");

  const [empName, setEmpName] = useState("");
  const [empRole, setEmpRole] = useState("");

  // editing state
  const [editNews, setEditNews] = useState<NewsItem | null>(null);
  const [editEmployee, setEditEmployee] = useState<Employee | null>(null);

  const addNews = () => {
    if (!newsTitle || !newsText) return;
    const item = { id: Date.now(), title: newsTitle, text: newsText };
    setNews((n) => [...n, item]);
    setNewsTitle("");
    setNewsText("");
  };

  const addEmployee = () => {
    if (!empName || !empRole) return;
    const item = { id: Date.now(), name: empName, role: empRole };
    setEmployees((e) => [...e, item]);
    setEmpName("");
    setEmpRole("");
  };

  const saveNews = () => {
    if (!editNews) return;
    setNews((n) => n.map((i) => (i.id === editNews.id ? editNews : i)));
    setEditNews(null);
  };

  const saveEmployee = () => {
    if (!editEmployee) return;
    setEmployees((e) => e.map((i) => (i.id === editEmployee.id ? editEmployee : i)));
    setEditEmployee(null);
  };

  return (
    <div className="min-h-screen pb-8">
      <Navbar />
      <div className="p-8 pt-24 space-y-12">
        <section>
          <h2 className="text-2xl font-bold font-cinzel mb-4">Noticias</h2>
          <div className="space-y-4 mb-8">
            <input
              type="text"
              placeholder="Título"
              value={newsTitle}
              onChange={(e) => setNewsTitle(e.target.value)}
              className="border p-2 mr-2"
            />
            <input
              type="text"
              placeholder="Texto"
              value={newsText}
              onChange={(e) => setNewsText(e.target.value)}
              className="border p-2 mr-2"
            />
            <button onClick={addNews} className="bg-yellow-700 text-white px-4 py-2 rounded">
              Agregar
            </button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((n) => (
              <div key={n.id} className="bg-white dark:bg-gray-800 p-4 rounded shadow">
                {editNews?.id === n.id ? (
                  <>
                    <input
                      type="text"
                      value={editNews.title}
                      onChange={(e) =>
                        setEditNews({ ...editNews, title: e.target.value })
                      }
                      className="border p-2 mb-2 w-full"
                    />
                    <input
                      type="text"
                      value={editNews.text}
                      onChange={(e) =>
                        setEditNews({ ...editNews, text: e.target.value })
                      }
                      className="border p-2 mb-2 w-full"
                    />
                    <button
                      onClick={saveNews}
                      className="bg-green-700 text-white px-2 py-1 mr-2 rounded"
                    >
                      Guardar
                    </button>
                    <button
                      onClick={() => setEditNews(null)}
                      className="bg-gray-400 text-white px-2 py-1 rounded"
                    >
                      Cancelar
                    </button>
                  </>
                ) : (
                  <>
                    <h3 className="font-semibold text-lg mb-1">{n.title}</h3>
                    <p className="text-sm mb-2">{n.text}</p>
                    <button
                      onClick={() =>
                        setNews((news) => news.filter((item) => item.id !== n.id))
                      }
                      className="bg-red-700 text-white px-2 py-1 mr-2 rounded"
                    >
                      Eliminar
                    </button>
                    <button
                      onClick={() => setEditNews(n)}
                      className="bg-blue-700 text-white px-2 py-1 rounded"
                    >
                      Editar
                    </button>
                  </>
                )}
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold font-cinzel mb-4">Empleados</h2>
          <div className="space-y-4 mb-8">
            <input
              type="text"
              placeholder="Nombre"
              value={empName}
              onChange={(e) => setEmpName(e.target.value)}
              className="border p-2 mr-2"
            />
            <input
              type="text"
              placeholder="Rol"
              value={empRole}
              onChange={(e) => setEmpRole(e.target.value)}
              className="border p-2 mr-2"
            />
            <button onClick={addEmployee} className="bg-yellow-700 text-white px-4 py-2 rounded">
              Agregar
            </button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {employees.map((m) => (
              <div key={m.id} className="bg-white dark:bg-gray-800 p-4 rounded shadow">
                {editEmployee?.id === m.id ? (
                  <>
                    <input
                      type="text"
                      value={editEmployee.name}
                      onChange={(e) =>
                        setEditEmployee({ ...editEmployee, name: e.target.value })
                      }
                      className="border p-2 mb-2 w-full"
                    />
                    <input
                      type="text"
                      value={editEmployee.role}
                      onChange={(e) =>
                        setEditEmployee({ ...editEmployee, role: e.target.value })
                      }
                      className="border p-2 mb-2 w-full"
                    />
                    <button
                      onClick={saveEmployee}
                      className="bg-green-700 text-white px-2 py-1 mr-2 rounded"
                    >
                      Guardar
                    </button>
                    <button
                      onClick={() => setEditEmployee(null)}
                      className="bg-gray-400 text-white px-2 py-1 rounded"
                    >
                      Cancelar
                    </button>
                  </>
                ) : (
                  <>
                    <h3 className="font-semibold text-lg mb-1">{m.name}</h3>
                    <p className="text-sm mb-2">{m.role}</p>
                    <button
                      onClick={() =>
                        setEmployees((emp) => emp.filter((item) => item.id !== m.id))
                      }
                      className="bg-red-700 text-white px-2 py-1 mr-2 rounded"
                    >
                      Eliminar
                    </button>
                    <button
                      onClick={() => setEditEmployee(m)}
                      className="bg-blue-700 text-white px-2 py-1 rounded"
                    >
                      Editar
                    </button>
                  </>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
