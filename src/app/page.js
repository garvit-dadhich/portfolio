"use client";
import React, { useState } from "react";

export default function Portfolio() {
    // State to toggle the mobile hamburger menu open/closed
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            company: "Adglobal360 India Pvt. Ltd.",
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
            company: "Codifly IT Solutions",
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
        <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 scroll-smooth">
            {/* Sticky Header */}
            <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-900">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
                    <a href="#home" className="text-xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                        Portfolio
                    </a>

                    {/* Desktop Navigation (Hidden on mobile screens) */}
                    <nav className="hidden md:flex gap-6">
                        {links.map((link) => (
                            <a key={link.name} href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    {/* Mobile Hamburger Button (Visible only on small screens) */}
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 text-slate-400 hover:text-white focus:outline-none"
                        aria-label="Toggle Menu"
                    >
                        {isMenuOpen ? (
                            // 'X' Close Icon when menu is open
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            // 'Three Lines' Hamburger Icon when menu is closed
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Mobile Dropdown Menu Drawer */}
                {isMenuOpen && (
                    <nav className="md:hidden bg-slate-950/95 border-b border-slate-900 px-4 pt-2 pb-4 space-y-3 absolute top-16 left-0 w-full backdrop-blur-lg flex flex-col shadow-xl">
                        {links.map((link) => (
                            <a 
                                key={link.name} 
                                href={link.href} 
                                onClick={() => setIsMenuOpen(false)} // Closes menu drawer upon item click
                                className="text-sm font-medium text-slate-400 hover:text-white py-2 transition-colors border-b border-slate-900/50 last:border-0"
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>
                )}
            </header>

            {/* Main Content */}
            <main className="flex-grow max-w-5xl mx-auto px-4 sm:px-6 w-full">

                {/* Hero Section */}
                <section id="home" className="py-16 md:py-32 flex flex-col justify-center min-h-[calc(100vh-4rem)]">
                    <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4 leading-tight">
                        Hi, I am <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">Garvit Dadhich</span>
                    </h1>
                    <p className="text-base sm:text-xl md:text-2xl text-slate-400 max-w-2xl mb-8 leading-relaxed">
                        A Full-Stack Developer building scalable web experiences with Next.js on the frontend and NestJS-powered APIs on the backend.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <a href="#experience" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors text-center shadow-lg shadow-blue-600/10">
                            View Experience
                        </a>
                        <a href="#contact" className="border border-slate-800 hover:bg-slate-900 text-slate-300 px-6 py-3 rounded-lg font-medium transition-colors text-center">
                            Get In Touch
                        </a>
                    </div>
                </section>

                {/* Professional Experience Section */}
                <section id="experience" className="py-16 border-t border-slate-900">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-12 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                        Professional Experience
                    </h2>
                    <div className="relative border-l border-slate-800 ml-2 sm:ml-4 space-y-12">
                        {experiences.map((exp, idx) => (
                            <div key={idx} className="relative pl-6 sm:pl-8 group">
                                <div className="absolute -left-[6px] top-1.5 w-3 h-3 rounded-full bg-slate-800 border border-slate-700 group-hover:bg-blue-500 group-hover:border-blue-400 transition-colors" />
                                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2 gap-1">
                                    <div>
                                        <h3 className="text-lg sm:text-xl font-bold text-white">{exp.role}</h3>
                                        <p className="text-blue-400 font-medium text-sm">{exp.company}</p>
                                    </div>
                                    <span className="text-xs font-mono text-slate-500 md:mt-0 mt-1">{exp.period}</span>
                                </div>
                                <p className="text-slate-400 text-sm max-w-3xl mb-4 leading-relaxed">{exp.description}</p>
                                <ul className="list-disc list-inside space-y-1.5 text-slate-400 text-sm pl-1">
                                    {exp.highlights.map((highlight, hIdx) => (
                                        <li key={hIdx} className="hover:text-slate-200 transition-colors">
                                            <span>{highlight}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Projects Section */}
                <section id="projects" className="py-16 border-t border-slate-900">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-12 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                        Projects
                    </h2>
                    <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
                        {projects.map((project, idx) => (
                            <div key={idx} className="p-6 bg-slate-900/30 border border-slate-900 rounded-3xl hover:border-blue-500/50 transition-colors flex flex-col justify-between">
                                <div>
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                                        <h3 className="text-lg sm:text-xl font-semibold text-white">{project.title}</h3>
                                        <span className="text-[10px] uppercase tracking-[0.15em] text-slate-500 bg-slate-900 border border-slate-800 px-2 py-0.5 rounded self-start sm:self-auto">
                                            {project.tech.split(' / ')[0]}
                                        </span>
                                    </div>
                                    <p className="text-slate-400 text-sm mb-6 leading-relaxed">{project.description}</p>
                                </div>
                                <div>
                                    <p className="text-slate-500 text-[10px] uppercase tracking-[0.16em] font-semibold mb-1">Stack</p>
                                    <p className="text-blue-400/90 font-mono text-xs">{project.tech}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Technical Skills Section */}
                <section id="skills" className="py-16 border-t border-slate-900">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-12 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                        Skills & Expertise
                    </h2>
                    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                        {skillCategories.map((category, idx) => (
                            <div key={idx} className="p-6 bg-slate-900/30 border border-slate-900 rounded-2xl hover:border-slate-800 transition-colors">
                                <h3 className="text-base sm:text-lg font-semibold text-white mb-4 tracking-wide border-b border-slate-800 pb-2">
                                    {category.title}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill, sIdx) => (
                                        <span key={sIdx} className="px-2.5 py-1 bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono rounded-md hover:border-blue-500/40 transition-colors">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="py-16 border-t border-slate-900 mb-12">
                    <div className="max-w-xl">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                            Get In Touch
                        </h2>
                        <p className="text-slate-400 mb-8 text-sm leading-relaxed">
                            Have an exciting project, full-time role, or contract opportunity? Reach out using the details below.
                        </p>
                        <div className="space-y-4 text-sm bg-slate-900/20 border border-slate-900 p-6 rounded-2xl">
                            <p className="text-slate-200 flex flex-col sm:flex-row sm:items-center gap-1">
                                <span className="font-semibold text-slate-400 w-20 shrink-0">Email:</span>
                                <a href="mailto:garvitdadhich2@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors break-all">
                                    garvitdadhich2@gmail.com
                                </a>
                            </p>
                            <p className="text-slate-200 flex flex-col sm:flex-row sm:items-center gap-1">
                                <span className="font-semibold text-slate-400 w-20 shrink-0">LinkedIn:</span>
                                <a href="https://linkedin.com/in/garvit-dadhich-384a02262" target="_blank" rel="noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors break-all">
                                    linkedin.com/in/garvit-dadhich-384a02262
                                </a>
                            </p>
                            <p className="text-slate-200 flex flex-col sm:flex-row sm:items-center gap-1">
                                <span className="font-semibold text-slate-400 w-20 shrink-0">GitHub:</span>
                                <a href="https://github.com/garvit-dadhich" target="_blank" rel="noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors break-all">
                                    github.com/garvit-dadhich
                                </a>
                            </p>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="border-t border-slate-900 bg-slate-950 py-6 text-center text-xs text-slate-600 mt-auto">
                <p>&copy; {new Date().getFullYear()} Garvit Dadhich. All rights reserved.</p>
            </footer>
        </div>
    );
}