'use client'

import { portfolioData } from '@/lib/data'
import { AnimatedSection } from './AnimatedSection'
import { ExternalLink, Github } from 'lucide-react'

export function Projects() {
  return (
    <section id="projects" className="py-24 px-4 bg-background border-b-4 border-foreground">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="space-y-12">
            {/* Section Title */}
            <div className="border-l-8 border-foreground pl-8">
              <h2 className="text-5xl md:text-6xl font-black text-foreground uppercase tracking-tight">Projects</h2>
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {portfolioData.projects.map((project) => (
                <div
                  key={project.id}
                  className="group overflow-hidden bg-background border-4 border-foreground hover:bg-foreground transition-all duration-200"
                >
                  {/* Project Image */}
                  <div className="relative h-56 bg-muted overflow-hidden flex items-center justify-center text-6xl border-b-4 border-foreground group-hover:bg-foreground">
                    <div className="text-foreground group-hover:text-background transition-colors">
                      {project.id === 1 && '📡'}
                      {project.id === 2 && '🚚'}
                      {project.id === 3 && '📦'}
                      {project.id === 4 && '📋'}
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-8 space-y-4">
                    <div>
                      <h3 className="text-2xl font-black text-foreground mb-3 uppercase tracking-tight group-hover:text-background">{project.title}</h3>
                      <p className="text-foreground text-sm leading-relaxed font-medium group-hover:text-background">{project.description}</p>
                    </div>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2 pt-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1 bg-foreground text-background font-bold uppercase tracking-wider"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3 pt-4 border-t-2 border-foreground">
                      <a
                        href={project.link}
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-foreground text-background hover:bg-secondary transition-colors font-bold text-sm uppercase tracking-widest group-hover:bg-background group-hover:text-foreground group-hover:border-2 group-hover:border-background"
                      >
                        <span>View</span>
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="border-4 border-foreground p-12 text-center bg-foreground">
              <p className="text-background font-bold uppercase tracking-widest text-sm mb-6">
                Ready to collaborate on a project?
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-background text-foreground font-black uppercase tracking-widest hover:opacity-80 transition-opacity text-sm border-2 border-foreground"
              >
                Let's Talk
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
