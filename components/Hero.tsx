'use client'

import { ArrowRight, Github, Linkedin, Mail, Twitter } from 'lucide-react'
import { portfolioData } from '@/lib/data'
import { AnimatedSection } from './AnimatedSection'

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.toLowerCase())
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-4 border-b-4 border-foreground">
      <div className="max-w-7xl mx-auto w-full">
        <AnimatedSection className="space-y-12">
          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left side */}
            <div className="space-y-8">
              <div>
                <h1 className="text-7xl md:text-8xl font-black text-foreground mb-6 leading-tight text-balance tracking-tight">
                  {portfolioData.name}
                </h1>
                <p className="text-xl md:text-2xl font-bold text-foreground mb-6 uppercase tracking-wider">
                  {portfolioData.title}
                </p>
                <p className="text-lg text-foreground leading-relaxed max-w-lg text-pretty font-medium">
                  {portfolioData.bio}
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="inline-flex items-center justify-center px-8 py-4 bg-foreground text-background font-bold uppercase tracking-widest hover:bg-secondary transition-colors duration-200 group text-sm border-2 border-foreground"
                >
                  View Work
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="inline-flex items-center justify-center px-8 py-4 border-3 border-foreground text-foreground font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors duration-200 text-sm"
                >
                  Contact
                </button>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-6 pt-8 border-t-2 border-foreground">
                <span className="text-sm font-bold uppercase tracking-widest">Follow:</span>
                <div className="flex gap-4">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 border-2 border-foreground flex items-center justify-center text-foreground hover:bg-foreground hover:text-background transition-colors duration-200"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 border-2 border-foreground flex items-center justify-center text-foreground hover:bg-foreground hover:text-background transition-colors duration-200"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href={`mailto:${portfolioData.email}`}
                    className="w-10 h-10 border-2 border-foreground flex items-center justify-center text-foreground hover:bg-foreground hover:text-background transition-colors duration-200"
                    aria-label="Email"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="hidden md:block">
              <div className="w-full bg-foreground border-4 border-foreground overflow-hidden">
                <img
                  src="/Avatar.png"
                  alt="Hendrik Baskoro"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="flex justify-center pt-12">
            <div className="animate-bounce">
              <div className="w-6 h-12 border-2 border-foreground flex justify-center">
                <div className="w-0.5 h-3 bg-foreground mt-2" />
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
