'use client'
import Image from 'next/image'
import { motion } from 'framer-motion' // Importamos a biblioteca

// 1. Definimos as variantes de animação fora do componente (para performance)
const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 0.8
    }
  }
};

export default function ProjectCard({ project, onClick }) {
  return (
    // 2. Trocamos a div padrão por <motion.div>
    <motion.div 
      variants={cardVariants}
      className="group bg-white dark:bg-[#0B1120] p-6 rounded-2xl border border-gray-100 dark:border-gray-800 transition-all duration-500 shadow-sm hover:shadow-primary-light/20 hover:shadow-2xl hover:border-primary-light hover:scale-[1.02]" // 3. Adicionamos hover:scale sutil e durações mais longas
    >
      {/* 4. Animação de zoom suave na imagem no hover */}
      <div className="relative w-full h-40 mb-6 overflow-hidden rounded-xl">
        <Image 
          src={project.thumb} 
          alt={`Projeto ${project.title} - Desenvolvido com ${project.stack.join(', ')}`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105" // Zoom lento
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      
      <h3 className="font-bold text-xl dark:text-white mb-2">{project.title}</h3>
      <span className="text-accent text-xs font-mono tracking-wider uppercase">{project.type}</span>
      
      <div className="flex gap-4 mt-6">
        <button onClick={() => onClick(project)} className="text-primary-light font-medium text-sm hover:underline">
          Ver Detalhes
        </button>
      </div>
    </motion.div>
  )
}