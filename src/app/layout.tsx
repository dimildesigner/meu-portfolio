import "./globals.css";
import { Providers } from "@/components/Providers";

export const metadata = {
  title: "Eddie | Front-end Developer & UI Designer",
  description:
    "Portfólio profissional de Edimilson (Eddie), desenvolvedor Front-end especializado em React, Next.js e UX/UI Design. Especialista em criar interfaces performáticas e estéticas.",
  keywords: [
    "Front-end Developer",
    "React",
    "Next.js",
    "UI Designer",
    "UX Design",
    "UI/UX Design",
    "Design de Interface",
    "Designer Grafico",
    "Motion Design",
    "Transição de Carreira TI",
    "Web Development",
    "JavaScript",
    "Motion Design",
    "Portfolio de Desenvolvimento Web",
    "Desenvolvedor Front-end",
    "Front-end Developer",
    "Edimilson Teixeira Portfolio",
  ],
  authors: [{ name: "Edimilson Teixeira (Eddie)" }],
  openGraph: {
    title: "dimildesigner | Front-end Developer & UX/UI Designer",
    description:
      "Interfaces focadas em UX e performance. Conheça meus projetos e trajetória profissional.",
    url: "https://dimildesigner-meu-portfolio.vercel.app/", // Após o deploy
    siteName: "dimildesigner | Portfolio",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Edimilson Teixeira (Eddie)",
    jobTitle: "Front-end Developer & UX/UI Designer",
    url: "https://dimildesigner-meu-portfolio.vercel.app/",
    address: {
      "@type": "PostalAddress",
      addressLocality: "São Paulo",
      addressRegion: "SP",
      addressCountry: "BR",
    },
    knowsAbout: [
      "React.js",
      "Next.js",
      "UI/UX Design",
      "Front-end Development",
      "React",
      "Next.js",
      "UI Designer",
      "UX Design",
      "Design de Interface",
      "Designer Grafico",
      "Motion Design",
      "Transição de Carreira TI",
      "Web Development",
      "JavaScript",
      "Motion Design",
      "Portfolio de Desenvolvimento Web",
      "Desenvolvedor Front-end",
      "Edimilson Teixeira Portfolio",
    ],
  };

  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        {/* Insira o script aqui dentro da tag <head> */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className="min-h-screen">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
