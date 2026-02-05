'use client'

import { portfolioData } from '@/lib/data'
import { AnimatedSection } from './AnimatedSection'

export function TechStack() {
  return (
    <section id="techstack" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="space-y-12">
            {/* Section Title */}
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Tech Stack</h2>
            </div>

            {/* Tech Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {portfolioData.techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-200 flex flex-col items-center gap-3 group cursor-pointer"
                >
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-200">
                    {tech.icon}
                  </div>
                  <p className="font-semibold text-foreground text-center text-sm">{tech.name}</p>
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="p-8 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
              <h3 className="text-lg font-bold text-foreground mb-3">Always Learning</h3>
              <p className="text-muted-foreground">
                I'm constantly updating my skills with the latest technologies and best practices in web development. This tech stack represents my core competencies, but I'm always ready to learn and adapt to new tools and frameworks as projects demand.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
