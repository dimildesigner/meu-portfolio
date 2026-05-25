'use client'
import { motion, AnimatePresence } from 'framer-motion'

export default function Modal({ project, onClose }) {
  if (!project) return null;
  return (
    <AnimatePresence>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={onClose}>
        <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="bg-white dark:bg-gray-900 p-8 rounded-2xl max-w-lg w-full shadow-2xl" onClick={(e) => e.stopPropagation()}>
          <div className="flex justify-between items-center mb-6 dark:text-white">
            <h2 className="text-2xl font-bold">{project.title}</h2>
            <button onClick={onClose} className="font-bold">X</button>
          </div>
          <div className="space-y-4 dark:text-gray-300">
            <p className="text-blue-500">✓ {project.type}</p>
            <p><strong>Problema:</strong> {project.problema}</p>
            <p><strong>Solução:</strong> {project.solucao}</p>
            <div><strong>Destaques:</strong> <ul className="list-disc pl-5">{project.destaques.map((d, i) => <li key={i}>{d}</li>)}</ul></div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}