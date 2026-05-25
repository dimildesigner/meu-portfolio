// src/data/projects.js
export const projects = [
  {
    id: 1,
    title: "A Escola de Atenas 1",
    type: "Front-end",
    thumb: "/escola_de_atenas_thumb.jpg",
    demo: "#",
    repo: "#",
    problema: "A landing page tem objetivo de explorar o tema da arte e cultura em uma apresentação digital interativa e envolvente.",
    solucao: "Garantir uma experiência de usuário fluida e imersiva, com uma narrativa visual que guia o visitante através da história e dos detalhes da pintura, utilizando técnicas modernas de web design para criar uma apresentação impactante e acessível.",
    destaques: [
      "Navegação e Interface atraente", 
      "Cursor personalizado com trail fluido", 
      "Barra de progresso global (scroll 0→100%)",
      "Navegação por âncoras com scroll suave entre seções", 
      "Animações de entrada via Intersection Observer (fade + translateY)"
    ],
    stack: ["HTML5", "CSS3", "JavaScript ES6 (vanilla)"]
  },
  // Adicione seus próximos projetos aqui seguindo esta estrutura
  {
    id: 2,
    title: "Petstok - Sistema de Gestão ERP para Petshops",
    type: "Back-end",
    thumb: "/petstock_backend_thumb.jpg",
    demo: "#",
    repo: "#",
    problema: "Servir como ferramenta auxiliar para negócios de Petshop, oferecendo controle de estoque, catálogo segmentado por espécie e alertas automáticos de reposição e validade, tudo isso com uma interface intuitiva e responsiva.",
    solucao: "Criação de um sistema ERP Lite para Petshops, com funcionalidades que suprem as necessidades específicas do mercado pet. O sistema inclui controle de estoque inteligente, catálogo segmentado por espécie e alertas automáticos de reposição e validade, tudo isso com uma interface intuitiva e responsiva.",
    destaques: [
      "Autenticação", 
      "Dashboard", 
      "Catálogo de Produtos",
      "Controle de Estoque", 
      "Cantinho da Oportunidade (Promoções)", 
      "Administração de Usuários",
    ],
    stack: ["React.js", "Tailwind CSS", "Vite"]
  },

  {
    id: 3,
    title: "Jukebox Experience - iTunes Search API",
    type: "Full-stack",
    thumb: "/jukebox_experience_thumb.jpg",
    demo: "#",
    repo: "#",
    problema: "Explorar de forma criativa o consumo de uma API e gerar valor, no caso, entretenimento e buscador de músicas de todos os gêneros e estilos.",
    solucao: "Uma aplicação web imersiva que combina uma cena 3D interativa com busca e reprodução de músicas em tempo real. O usuário pode girar o jukebox, explorar o cenário psicodélico e descobrir músicas pelo painel lateral — tudo em uma única experiência fluida.",
    destaques: [
      "Cena 3D interativa - mouse e touch controls", 
      "Busca de músicaspor artista, álbum ou título via iTunes Search API", 
      "Preview de 30 segundos de reprodução",
      "Disco de vinil animado e notas musicais flutuando", 
      "Reatividade ao áudio com luzes coloridas, estelas e cenário psicodélico", 
      "Responsivo em desktop e mobile (touch e resize dinâmico)",
      "Mini player no rodapé com capa do álbum e artista", 
      "Efeito sonoto de scratch, quando o Jukebox é rotacionado"
    ],
    stack: ["React.js", "Tailwind CSS", "Vite"]
  },

];