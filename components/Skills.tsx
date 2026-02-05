'use client'

import { portfolioData } from '@/lib/data'
import { AnimatedSection } from './AnimatedSection'

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="space-y-12">
            {/* Section Title */}
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Skills</h2>
            </div>

            {/* Skills Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {portfolioData.skills.map((skillGroup) => (
                <div key={skillGroup.category} className="space-y-4">
                  <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                    <div className="w-8 h-1 bg-primary rounded-full" />
                    {skillGroup.category}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm border border-primary/30 hover:bg-primary/20 transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="mt-12 p-8 rounded-lg bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20">
              <h3 className="text-lg font-bold text-foreground mb-4">Expertise Highlights</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <p className="font-semibold text-foreground mb-2">Frontend Development</p>
                  <p className="text-muted-foreground text-sm">Building responsive, interactive user interfaces with modern frameworks.</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-2">Backend Development</p>
                  <p className="text-muted-foreground text-sm">Creating robust APIs and scalable server-side applications.</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-2">DevOps & Deployment</p>
                  <p className="text-muted-foreground text-sm">Managing cloud infrastructure and continuous deployment pipelines.</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
