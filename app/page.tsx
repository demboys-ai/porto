import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Experience } from '@/components/Experience'
import { Projects } from '@/components/Projects'
import { Contact } from '@/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-card border-t border-border py-8 px-4">
        <div className="max-w-5xl mx-auto text-center text-muted-foreground">
          <p>© 2026 Hendrik Baskoro. All rights reserved.</p>
          <p className="mt-2 text-sm">Human Resources & IT Professional</p>
        </div>
      </footer>
    </main>
  )
}
