'use client'
import { X } from 'lucide-react'

export default function Modal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white dark:bg-[#0B1120] w-full max-w-2xl rounded-2xl p-8 border border-gray-200 dark:border-gray-800 shadow-2xl relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-primary-light">
          <X size={24} />
        </button>

        <h2 className="text-3xl font-bold dark:text-white mb-2">{project.title}</h2>
        <span className="text-accent font-mono uppercase text-sm">{project.type}</span>

        <div className="mt-8 grid gap-6">
          <div>
            <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Desafio</h4>
            <p className="text-gray-700 dark:text-gray-300">{project.problema}</p>
          </div>

          <div>
            <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Solução Técnica</h4>
            <p className="text-gray-700 dark:text-gray-300">{project.solucao}</p>
          </div>

          <div>
            <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Stack Utilizada</h4>
            <div className="flex flex-wrap gap-2">
              {project.stack.map(tech => (
                <span key={tech} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded text-sm text-primary-light dark:text-accent font-mono">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}