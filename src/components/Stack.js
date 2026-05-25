export default function Stack() {
  const stack = {
    "Desenvolvimento": ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS"],
    "Design & UX": ["UI Design", "UX Research", "Figma", "Prototipagem de Alta Fidelidade"],
    "Ecossistema Dev": ["Git / GitHub", "Vite", "Cloudinary (CDN)", "Responsive Web Design"]
  };

  return (
    <section id="stack" className="py-24 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 dark:text-white border-l-4 border-accent pl-4">
        Stack Técnica
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {Object.entries(stack).map(([categoria, itens]) => (
          <div key={categoria} className="bg-white dark:bg-[#0B1120] p-6 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm">
            <h3 className="font-bold mb-4 text-primary-light">{categoria}</h3>
            <ul className="space-y-3">
              {itens.map((item) => (
                <li key={item} className="flex items-center text-gray-600 dark:text-gray-400 font-mono text-sm">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}