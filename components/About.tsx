'use client'

import { portfolioData } from '@/lib/data'
import { AnimatedSection } from './AnimatedSection'

export function About() {
  return (
    <section id="about" className="py-24 px-4 bg-background border-b-4 border-foreground">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="space-y-12">
            {/* Section Title */}
            <div className="border-l-8 border-foreground pl-8">
              <h2 className="text-5xl md:text-6xl font-black text-foreground uppercase tracking-tight">About</h2>
            </div>

            {/* Content Grid */}
            <div className="grid md:grid-cols-2 gap-16">
              {/* Left Column */}
              <div className="space-y-8 border-l-4 border-foreground pl-8">
                <p className="text-lg text-foreground leading-relaxed font-medium">
                  {portfolioData.about.description}
                </p>
                <p className="text-lg text-foreground leading-relaxed font-medium">
                  {portfolioData.about.longDescription}
                </p>

                {/* Key Points */}
                <div className="space-y-6 pt-8 border-t-2 border-foreground">
                  <div className="flex gap-6 items-start">
                    <div className="w-4 h-4 bg-foreground flex-shrink-0 mt-2" />
                    <div>
                      <h3 className="font-bold text-foreground mb-2 uppercase tracking-wide">Problem Solving</h3>
                      <p className="text-foreground font-medium">I love finding elegant solutions to complex technical challenges.</p>
                    </div>
                  </div>

                  <div className="flex gap-6 items-start">
                    <div className="w-4 h-4 bg-foreground flex-shrink-0 mt-2" />
                    <div>
                      <h3 className="font-bold text-foreground mb-2 uppercase tracking-wide">Continuous Learning</h3>
                      <p className="text-foreground font-medium">Always exploring new technologies and best practices.</p>
                    </div>
                  </div>

                  <div className="flex gap-6 items-start">
                    <div className="w-4 h-4 bg-foreground flex-shrink-0 mt-2" />
                    <div>
                      <h3 className="font-bold text-foreground mb-2 uppercase tracking-wide">Team Collaboration</h3>
                      <p className="text-foreground font-medium">I work well with cross-functional teams and stakeholders.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Stats */}
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-8 bg-background border-4 border-foreground">
                    <div className="text-4xl font-black text-foreground mb-2">10+</div>
                    <p className="text-foreground font-bold uppercase tracking-wide text-sm">Projects</p>
                  </div>

                  <div className="p-8 bg-background border-4 border-foreground">
                    <div className="text-4xl font-black text-foreground mb-2">5+</div>
                    <p className="text-foreground font-bold uppercase tracking-wide text-sm">Years Experince</p>
                  </div>

                  <div className="p-8 bg-background border-4 border-foreground">
                    <div className="text-4xl font-black text-foreground mb-2">3.02</div>
                    <p className="text-foreground font-bold uppercase tracking-wide text-sm">GPA</p>
                  </div>

                  <div className="p-8 bg-background border-4 border-foreground">
                    <div className="text-4xl font-black text-foreground mb-2">100%</div>
                    <p className="text-foreground font-bold uppercase tracking-wide text-sm">Dedicated</p>
                  </div>
                </div>

                {/* Decorative element */}
                <div className="p-8 bg-foreground border-4 border-foreground">
                  <p className="text-background font-bold text-lg leading-relaxed">
                    Technical specialist with proven expertise in facility management, Engineering, and operational optimization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
