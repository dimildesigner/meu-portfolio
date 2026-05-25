export default function Footer() {
  return (
    <footer className="py-10 text-center border-t border-gray-200 dark:border-gray-800">
      <p className="text-gray-500 dark:text-gray-400">© 2026 dimil designer.dev. Todos os direitos reservados.</p>
      <div className="mt-4 space-x-6">
        <a href="mailto:seu-email@exemplo.com" className="hover:text-primary-light">E-mail</a>
        <a href="https://github.com/seu-usuario" className="hover:text-primary-light">GitHub</a>
        <a href="https://linkedin.com/in/seu-usuario" className="hover:text-primary-light">LinkedIn</a>
      </div>
    </footer>
  )
}