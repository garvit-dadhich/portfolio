"use client";
import React from "react";

export default function Portfolio() {
    const links = [
        { name: "Home", href: "#home" },
        { name: "Experience", href: "#experience" },
        { name: "Projects", href: "#projects" },
        { name: "Skills", href: "#skills" },
        { name: "Contact", href: "#contact" }
    ];

    // Professional Experience Timeline Data
    const experiences = [
        {
            role: "Software Engineer",
            company: "Adglobal360 india pvt. ltd.",
            period: "Jun 2024 - Present",
            description: "Driving full-stack software delivery at Adglobal360 with scalable Next.js applications and role-based authenticated APIs built on NestJS.",
            highlights: [
                "Implemented NestJS role-based authentication and authorization for secure API access",
                "Architected micro-frontends using Next.js App Router",
                "Reduced cloud infrastructure costs by 25% via serverless integration"
            ]
        },
        {
            role: "PHP Laravel Developer",
            company: "Codifly It solutions",
            period: "Feb 2023 - Apr 2024",
            description: "Built and maintained Laravel-based e-commerce applications with a focus on scalable PHP backends, payment integrations, and responsive user experiences.",
            highlights: [
                "Integrated Stripe API for complex subscription-based business workflows",
                "Achieved 98% unit-testing coverage using Jest and React Testing Library"
            ]
        }
    ];

    const projects = [
        {
            title: "Suzuki Product Portal",
            tech: "Next.js / NestJS",
            description: "Building product features and API services with a modern full-stack architecture."
        },
        {
            title: "Automotive Product Platform",
            tech: "Next.js / NestJS",
            description: "Delivering a responsive product platform and backend services for fleet and vehicle management."
        },
        {
            title: "Corporate Website",
            tech: "Laravel",
            description: "Maintaining and enhancing a Laravel-based website with CMS and UI improvements."
        },
        {
            title: "Public-Facing Website",
            tech: "Laravel",
            description: "Building website features and content workflows for a large enterprise web presence."
        }
    ];

    // Categorized Technical Skills Data
    const skillCategories = [
        {
            title: "Frontend Architecture",
            skills: ["JavaScript (ES6+)", "TypeScript", "React.js", "Next.js", "Tailwind CSS", "Redux Toolkit"]
        },
        {
            title: "Backend & Database",
            skills: ["Node.js", "NestJS", "Express.js", "PHP Laravel", "REST APIs", "PostgreSQL", "MongoDB", "Prisma ORM"]
        },
        {
            title: "DevOps & Tooling",
            skills: ["Git & GitHub", "Docker", "AWS (S3/EC2)", "Vercel", "CI/CD Pipelines"]
        }
    ];

  return (
      <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
          {/* Sticky Header */}
          <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-900">
              <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
                  <a href="#home" className="text-xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                      Protfolio
                  </a>
                  <nav className="flex gap-6">
                      {links.map((link) => (
                          <a key={link.name} href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                              {link.name}
                          </a>
                      ))}
                  </nav>
              </div>
          </header>

          {/* Main Content */}
          <main className="flex-grow max-w-5xl mx-auto px-6 w-full">

              {/* Hero Section */}
              <section id="home" className="py-24 md:py-32 flex flex-col justify-center min-h-[70vh]">
                  <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
                      Hi, I am <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">Garvit Dadhich</span>
          </h1>
                  <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mb-8">
                      A Full-Stack Developer building scalable web experiences with Next.js on the frontend and NestJS-powered APIs on the backend.
          </p>
                  <div className="flex gap-4">
                      <a href="#experience" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                          View Experience
                      </a>
                      <a href="#contact" className="border border-slate-800 hover:bg-slate-900 text-slate-300 px-6 py-3 rounded-lg font-medium transition-colors">
                          Get In Touch
                      </a>
                  </div>
              </section>

              {/* Professional Experience Section */}
              <section id="experience" className="py-20 border-t border-slate-900">
                  <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                      Professional Experience
                  </h2>
                  <div className="relative border-l border-slate-800 ml-4 space-y-12">
                      {experiences.map((exp, idx) => (
                          <div key={idx} className="relative pl-8 group">
                              {/* Timeline Marker Dot */}
                              <div className="absolute -left-[6px] top-1.5 w-3 h-3 rounded-full bg-slate-800 border border-slate-700 group-hover:bg-blue-500 group-hover:border-blue-400 transition-colors" />

                              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                                  <div>
                                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                                      <p className="text-blue-400 font-medium text-sm">{exp.company}</p>
                                  </div>
                                  <span className="text-xs font-mono text-slate-500 mt-1 md:mt-0">{exp.period}</span>
                              </div>
                              <p className="text-slate-400 text-sm max-w-3xl mb-4 leading-relaxed">{exp.description}</p>
                              <ul className="list-disc list-inside space-y-1.5 text-slate-400 text-sm">
                                  {exp.highlights.map((highlight, hIdx) => (
                                      <li key={hIdx} className="hover:text-slate-200 transition-colors">{highlight}</li>
                                  ))}
                              </ul>
                          </div>
                      ))}
                  </div>
              </section>

              {/* Projects Section */}
              <section id="projects" className="py-20 border-t border-slate-900">
                  <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                      Projects
                  </h2>
                  <div className="grid gap-8 md:grid-cols-2">
                      {projects.map((project, idx) => (
                          <div key={idx} className="p-6 bg-slate-900/30 border border-slate-900 rounded-3xl hover:border-blue-500 transition-colors">
                              <div className="flex items-center justify-between mb-4">
                                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                                  <span className="text-xs uppercase tracking-[0.2em] text-slate-500">{project.tech}</span>
                              </div>
                              <p className="text-slate-400 text-sm mb-3">{project.description}</p>
                              <p className="text-slate-300 text-xs uppercase tracking-[0.16em] font-semibold">Tech</p>
                              <p className="text-slate-100 text-sm">{project.tech}</p>
                          </div>
                      ))}
                  </div>
              </section>

              {/* Technical Skills Section */}
              <section id="skills" className="py-20 border-t border-slate-900">
                  <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                      Skills & Expertise
                  </h2>
                  <div className="grid gap-8 md:grid-cols-3">
                      {skillCategories.map((category, idx) => (
                          <div key={idx} className="p-6 bg-slate-900/30 border border-slate-900 rounded-xl hover:border-slate-800 transition-colors">
                              <h3 className="text-lg font-semibold text-white mb-4 tracking-wide border-b border-slate-800 pb-2">
                                  {category.title}
                              </h3>
                              <div className="flex flex-wrap gap-2">
                                  {category.skills.map((skill, sIdx) => (
                                      <span key={sIdx} className="px-3 py-1.5 bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono rounded-md hover:border-blue-500/50 transition-colors">
                                          {skill}
                                      </span>
                                  ))}
                              </div>
                          </div>
                      ))}
                  </div>
              </section>

              {/* Contact Section */}
              <section id="contact" className="py-20 border-t border-slate-900 mb-12">
                  <div className="max-w-xl">
                      <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                          Get In Touch
                      </h2>
                      <p className="text-slate-400 mb-8 text-sm">
                          Have an exciting project, full-time role, or contract opportunity? Reach out using the details below.
                      </p>
                      <div className="space-y-3 text-sm">
                          <p className="text-slate-200 font-medium">
                              <span className="font-semibold text-slate-300">Email:</span>{" "}
                              <a href="mailto:garvitdadhich2@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">garvitdadhich2@gmail.com</a>
                          </p>
                          <p className="text-slate-200 font-medium">
                              <span className="font-semibold text-slate-300">LinkedIn:</span>{" "}
                              <a href="https://linkedin.com/in/garvit-dadhich-384a02262" target="_blank" rel="noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">linkedin.com/in/garvit-dadhich-384a02262</a>
                          </p>
                          <p className="text-slate-200 font-medium">
                              <span className="font-semibold text-slate-300">GitHub:</span>{" "}
                              <a href="https://github.com/garvit-dadhich" target="_blank" rel="noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">github.com/garvit-dadhich</a>
                          </p>
                      </div>
                  </div>
              </section>
      </main>

          {/* Footer */}
          <footer className="border-t border-slate-900 bg-slate-950 py-6 text-center text-xs text-slate-600">
              <p>&copy; {new Date().getFullYear()} Alex Rivera. All rights reserved.</p>
          </footer>
    </div>
  );
}
