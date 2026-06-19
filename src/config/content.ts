// Force Vercel redeploy
export const siteConfig = {
  name: "Clarift",
  title: "Clarift | High-Performance Software Development Studio",
  description: "Professional portfolio of Clarift development studio, specializing in clean code, database design, PHP, Astro, Node.js, and Stripe integrations.",
  social: {
    github: "https://github.com/Clarift",
    linkedin: "https://www.linkedin.com/in/adriankabat/",
    email: "mailto:clarift@proton.me",
  },
};

export const homeContent = {
  title: "Hi, I'm Adrian Kabat",
  description:
    "Full-Stack Developer, founder of Clarift, and creator of DateMix. I specialize in clean code, database architecture, PHP, Node.js, Astro, and Stripe integrations.",
  buttons: {
    about: {
      text: "About Me",
      href: "/about/",
    },
    posts: {
      text: "Read Blog",
      href: "/posts/",
    },
  },
  images: {
    light: "https://multiplepage-portfolio.edgeone.app/assets/images/tech-background-light.svg",
    dark: "/assets/images/tech-background-dark.svg",
  },
};

export const aboutContent = {
  meta: {
    title: "About - Adrian Kabat",
    description: "Learn more about Adrian Kabat's background, skills, and full-stack development experience.",
  },
  title: "About Me",
  description:
    "I am a passionate Full-Stack Developer and the founder of Clarift, a modern software development studio. I focus on writing clean, maintainable code, designing scalable database architectures, and engineering high-performance web experiences. My work spans backend ecosystems in Node.js and PHP to responsive frontends with Astro, React, and Tailwind CSS. I'm also specialized in building secure payment integrations (Stripe) and integrating AI solutions.",
  skills: [
    "Clean Code",
    "Database Architecture",
    "PHP",
    "Node.js",
    "JavaScript",
    "TypeScript",
    "Astro",
    "Stripe Integrations",
    "HTML & CSS",
    "Gemini AI",
  ],
  image: {
    src: "/assets/images/about/coder.jpg",
    alt: "Adrian Kabat",
  },
  experience: {
    title: "Experience",
    items: [
      {
        period: "2023 - Present",
        position: "Founder & Lead Developer",
        company: "Clarift (clarift.com)",
        description:
          "Established and grew a software studio focused on clean-code web applications, API development, and production-ready Stripe payment integrations.",
      },
      {
        period: "2024 - Present",
        position: "Creator & Lead Architect",
        company: "DateMix (datemix.pl)",
        description:
          "Designed and built a modern, ultra-fast dating portal featuring live simulation bots and an intelligent dating assistant powered by Gemini AI.",
      },
      {
        period: "2021 - 2023",
        position: "Full-Stack Developer",
        company: "Independent Contractor",
        description:
          "Built custom databases, API endpoints, and client web applications using PHP, Node.js, and modern front-end technologies.",
      },
    ],
  },
  connect: {
    title: "Let's Connect",
    description:
      "Feel free to reach out if you want to collaborate or discuss a project. You can find me on social media or send an email directly to",
    email: {
      text: "clarift@proton.me",
      href: "mailto:clarift@proton.me",
    },
  },
};

export const projectsContent = {
  meta: {
    title: "Projects - Adrian Kabat",
    description: "Showcase of Adrian Kabat's software projects and applications",
  },
  title: "Projects",
  description:
    "Here is a selection of my key projects and platforms, illustrating my approach to performance, design, and architecture.",
  projects: [
    {
      title: "DateMix",
      description:
        "Modern, ultra-fast dating portal featuring built-in demo bots and a custom Gemini AI dating assistant.",
      image: "/assets/images/projects/datemix.png",
      href: "https://datemix.pl",
    },
    {
      title: "Clarift",
      description:
        "My development studio, focusing on premium web development, bespoke software architectures, and API design.",
      image: "/assets/images/projects/clarift.png",
      href: "https://clarift.com",
    },
    {
      title: "Stripe Payment Workflows",
      description:
        "A collection of robust, clean-architecture payment integration systems and subscription modules.",
      image: "/assets/images/projects/project3.png",
      href: "https://github.com/Clarift",
    },
  ],
};
