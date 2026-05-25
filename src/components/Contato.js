'use client'
export default function Contato() {
  const copyEmail = () => {
    navigator.clipboard.writeText("dimildesigner@gmail.com")
    alert("E-mail copiado!")
  }

  return (
    <section id="contato" className="py-20 px-4 max-w-4xl mx-auto">
      <h3 className="text-primary-light font-bold uppercase tracking-widest text-sm mb-4">Contato</h3>
      <h2 className="text-4xl font-bold dark:text-white mb-6">Vamos construir algo juntos?</h2>
      <p className="text-gray-400 mb-10 max-w-lg">
        Estou em busca de novos desafios como desenvolvedor Front-end, onde minha experiência técnica e visão de design possam agregar valor ao seu time.
      </p>

      <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <span className="text-white font-mono">dimildesigner@gmail.com</span>
          <button onClick={copyEmail} className="bg-primary-light text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition">
            Copiar e-mail
          </button>
        </div>

        <div className="flex gap-4">
          <a href="https://www.linkedin.com/in/dimildesigner" className="bg-gray-800 p-3 rounded-lg text-white hover:bg-gray-700">LinkedIn</a>
          <a href="https://github.com/dimildesigner" className="bg-gray-800 p-3 rounded-lg text-white hover:bg-gray-700">GitHub</a>
          <a href="#" className="bg-gray-800 p-3 rounded-lg text-white hover:bg-gray-700">Baixar CV</a>
        </div>
      </div>
      
      <p className="mt-8 text-gray-500 border-l-2 border-primary-light pl-4">
        Disponível para novos projetos e parcerias. Resposta em até 24h.
      </p>
    </section>
  )
}