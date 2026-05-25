"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const cardVariants = {
  offscreen: { y: 50, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.3, duration: 0.8 },
  },
};

export default function ProjectCard({ project, onClick }) {
  return (
    <motion.div
      variants={cardVariants}
      className="group bg-white dark:bg-[#0B1120] p-6 rounded-2xl border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:border-primary-light/50 hover:shadow-2xl hover:shadow-primary-light/10 hover:scale-[1.02]"
    >
      <div className="relative w-full h-48 mb-6 overflow-hidden rounded-xl">
        <Image
          src={project.thumb}
          alt={`Projeto ${project.title}`}
          fill
          priority
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      <h3 className="font-bold text-xl dark:text-white mb-2">
        {project.title}
      </h3>
      <span className="inline-block text-accent text-xs font-mono tracking-wider uppercase mb-4">
        {project.type}
      </span>

      <div className="flex gap-3 pt-6 border-t border-gray-100 dark:border-gray-800">
        {project.demoLink && (
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center py-2 px-3 rounded-lg bg-primary-light text-white text-sm font-semibold hover:opacity-90 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            Demo
          </a>
        )}

        {project.repoLink && (
          <a
            href={project.repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center py-2 px-3 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
          >
            Repositório
          </a>
        )}
      </div>

      <div className="mt-4 text-center">
        <button
          onClick={() => onClick(project)}
          className="text-gray-400 hover:text-primary-light font-medium text-xs uppercase tracking-widest transition-colors"
        >
          Ver Detalhes
        </button>
      </div>
    </motion.div>
  );
}
