"use client";
import { useState } from "react";
import { projects } from "@/data/projects";
import Navbar from "@/components/Navbar";
import Sobre from "@/components/Sobre";
import Stack from "@/components/Stack";
import ProjectCard from "@/components/ProjectCard";
import Modal from "@/components/Modal";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Definição das tags para filtro
  const tags = [
    "Todos",
    "Front-end",
    "Back-end",
    "Full-stack",
    "Motion",
    "Design Gráfico",
  ];
  const [tagAtiva, setTagAtiva] = useState("Todos");

  // Lógica de filtragem: verifica se a tag selecionada é 'Todos' ou se a propriedade 'type' do projeto coincide
  const projetosExibidos =
    tagAtiva === "Todos"
      ? projects
      : projects.filter((p) => p.type === tagAtiva);

  return (
    <main className="min-h-screen bg-white dark:bg-[#030711] text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Navbar />

      <section className="relative pt-40 pb-20 px-4 text-center overflow-hidden flex flex-col items-center justify-center min-h-[70vh]">
        {/* Gradiente Mesh - Garantindo o Z-index e visibilidade */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-600 rounded-full blur-[120px] opacity-40 animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-cyan-500 rounded-full blur-[120px] opacity-40 animate-pulse delay-1000" />
        </div>

        {/* Container de texto - Com Z-10 para ficar acima do gradiente */}
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-6">
          <div className="overflow-hidden h-[110px] flex items-center justify-center text-center">
            <motion.h1
              initial={{ y: "100%", rotate: 3 }}
              animate={{ y: 0, rotate: 0 }}
              transition={{
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1], // Curva Custom Célebre (Ultra suave para interfaces premium)
              }}
              className="text-6xl font-extrabold leading-normal"
            >
              <span className="inline-block py-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-cyan-400 to-purple-500 bg-[length:200%_auto] animate-gradient">
                dimil designer.dev
              </span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl"
          >
            Unindo o rigor técnico do desenvolvimento ao olhar clínico do
            design.
          </motion.p>
        </div>
      </section>

      <Sobre />
      <Stack />

      <section id="projetos" className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-8 dark:text-white text-center">
          Projetos
        </h2>

        {/* Filtros de Tags */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setTagAtiva(tag)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 active:scale-95 ${
                // Adicionamos active:scale-95 (efeito de clique)
                tagAtiva === tag
                  ? "bg-primary-light text-white shadow-lg shadow-primary-light/20"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 hover:-y-1" // Levanta levemente o botão no hover
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Grid de Projetos */}
        <motion.div
          initial="offscreen" // Começa invisível
          whileInView="onscreen" // Anima quando entra na tela
          viewport={{ once: true, amount: 0.2 }} // Anima apenas uma vez, quando 20% do grid estiver visível
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {projetosExibidos.length > 0 ? (
            projetosExibidos.map((p) => (
              <ProjectCard
                key={p.id}
                project={p}
                onClick={setSelectedProject}
              />
            ))
          ) : (
            <p className="text-center col-span-3 text-gray-500">
              Nenhum projeto encontrado nesta categoria.
            </p>
          )}
        </motion.div>
      </section>

      <Contato />
      <Footer />

      <Modal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </main>
  );
}
