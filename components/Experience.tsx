'use client'

import { portfolioData } from '@/lib/data'
import { AnimatedSection } from './AnimatedSection'
import { CheckCircle2 } from 'lucide-react'

export function Experience() {
  return (
    <section id="experience" className="py-24 px-4 bg-background border-b-4 border-foreground">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="space-y-12">
            {/* Section Title */}
            <div className="border-l-8 border-foreground pl-8">
              <h2 className="text-5xl md:text-6xl font-black text-foreground uppercase tracking-tight">Experience</h2>
            </div>

            {/* Timeline */}
            <div className="space-y-8 border-l-4 border-foreground pl-8">
              {portfolioData.experience.map((exp, index) => (
                <div key={exp.id} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute -left-11 top-0 w-8 h-8 bg-foreground border-4 border-background" />

                  {/* Content */}
                  <div className="p-8 bg-background border-4 border-foreground space-y-4">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                      <div>
                        <h3 className="text-2xl font-black text-foreground uppercase tracking-tight">{exp.position}</h3>
                        <p className="text-foreground font-bold uppercase tracking-widest text-sm mt-2">{exp.company}</p>
                      </div>
                      <span className="text-sm text-foreground font-bold uppercase tracking-widest bg-foreground text-background px-4 py-2 w-fit">
                        {exp.duration}
                      </span>
                    </div>

                    <p className="text-foreground font-medium leading-relaxed">{exp.description}</p>

                    {/* Achievements */}
                    <div className="space-y-2 pt-4 border-t-2 border-foreground">
                      {exp.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex gap-3 items-start">
                          <div className="w-3 h-3 bg-foreground flex-shrink-0 mt-2" />
                          <span className="text-sm text-foreground font-medium">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
