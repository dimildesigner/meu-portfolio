// src/components/Navbar.js
"use client";
import Link from "next/link"; // Adicione este import
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  // Garante que o tema só seja renderizado após o componente montar (evita erro de hidratação)
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <nav className="fixed w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Usando Link para navegação interna suave */}
        <Link
          href="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-bold text-xl dark:text-white hover:text-primary-light transition"
        >
          dimildesigner.dev
        </Link>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center gap-6 dark:text-white">
          {["Sobre", "Stack", "Projetos"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-primary-light transition"
            >
              {item}
            </a>
          ))}
          <a
            href="/curriculo.pdf"
            className="px-6 py-2.5 bg-primary-light text-white font-bold rounded-full hover:scale-105 transition-all shadow-[0_0_20px_rgba(168,85,247,0.4)]"
          >
            Currículo
          </a>
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 transition"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Botão Hambúrguer Mobile */}
        <button
          className="md:hidden dark:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden p-4 bg-white dark:bg-gray-900 border-b dark:border-gray-800 dark:text-white shadow-lg">
          {["Sobre", "Stack", "Projetos"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block py-3 border-b border-gray-100 dark:border-gray-800"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
