export const portfolioData = {
  // Informations personnelles
  name: "Tommas Curci",
  title: "Développeur Web Full-Stack",
  location: "Nancy, France",
  email: "tommas.curci@epitech.eu",
  phone: "+33 6 42 12 66 64",
  linkedin: "https://www.linkedin.com/in/tommas-curci-6080a3305",
  github: "https://github.com/Tommas-0",
  
  // Section À propos
  about: "Étudiant développeur passionné de 20 ans en formation Pré-MSC à Epitech Nancy. Spécialisé dans le développement web full-stack, je combine créativité et expertise technique pour créer des solutions modernes et impactantes. Expérience en PHP/Symfony, JavaScript/React, et bases de données. Mon approche est centrée sur l'expérience utilisateur, les bonnes pratiques de développement et l'innovation continue.",

  // Projets
  projects: [
    {
      id: 1,
      name: "JobBoard",
      description: "Plateforme de recrutement (Job Board) développée en PHP avec le framework Symfony. Inclut l'authentification des utilisateurs (candidats/recruteurs), la publication d'annonces.",
      tech: ["Node.js", "NexJs"],
      imageUrl: "/dashboard.svg",
      githubLink: "https://github.com/Tommas-0/Dashboard",
      liveLink: "#",
      colors: { from: '#F97316', to: '#FB923C' }
    },
    {
      id: 2,
      name: "E-commerce",
      description: "Plateforme e-commerce développée en PHP, incluant panier, authentification et gestion des commandes.",
      tech: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
      imageUrl: "/ecommerce.svg",
      githubLink: "https://github.com/Tommas-0/E-commerce",
      colors: { from: '#FBBF24', to: '#FCD34D' }
    },
    {
      id: 3,
      name: "Mini-Jeux",
      description: "Collection de mini-jeux interactifs en JavaScript pur, avec animations et suivi des scores.",
      tech: ["JavaScript", "HTML5", "CSS3"],
      imageUrl: "/mini-jeux.svg",
      githubLink: "https://github.com/Tommas-0/Site-de-mini-jeux-",
      liveLink: "/mini-jeux/index.html",
      colors: { from: '#3B82F6', to: '#60A5FA' }
    }
  ],

  // Compétences techniques
  skills: {
    frontend: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "HTML5 & CSS3"
    ],
    backend: [
      "PHP",
      "Symfony",
      "Node.js",
      "Java",
      "Python",
      "C#",
      "MySQL",
    ],
    tools: [
      "Git",
      "GitHub",
      "Visual Studio",
      "VS Code",
      "Docker",
      "Figma",
      "Suite Office",
      "Méthodes Agiles"
    ]
  },

  // Certifications
  certifications: [
    {
      id: 1,
      name: "Web Development MSc Pro",
      authority: "Epitech",
      imageUrl: "/epitech.svg",
      link: "/epitech.svg"
    },
    {
      id: 2,
      name: "Certification Web",
      authority: "Epitech",
      imageUrl: "/cert.svg",
      link: "/cert.svg"
    },
    {
      id: 3,
      name: "Certification Cisco",
      authority: "Cisco",
      imageUrl: "/certifCisco.png",
      link: "/certifCisco.png"
    },
    {
      id: 4,
      name: "Certification CNIL",
      authority: "CNIL",
      imageUrl: "/certifCnil.png",
      link: "/certifCnil.png"
    },
    {
      id: 5,
      name: "Certification SecNumAcadémie",
      authority: "ANSSI",
      imageUrl: "/certifSecNum.png",
      link: "/certifSecNum.png"
    },
    {
      id: 6,
      name: "Certification PIX (2023)",
      authority: "PIX",
      imageUrl: "/pix2023.png",
      link: "/pix2023.png"
    },
    {
      id: 7,
      name: "Certification PIX (2025)",
      authority: "PIX",
      imageUrl: "/pix2025.png",
      link: "/pix2025.png"
    }
  ]

};

