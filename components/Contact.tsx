'use client'

import React from "react"

import { portfolioData } from '@/lib/data'
import { AnimatedSection } from './AnimatedSection'
import { Github, Linkedin, Twitter, Mail, MapPin, Phone, ArrowRight } from 'lucide-react'
import { useState } from 'react'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-24 px-4 bg-background border-t-4 border-foreground">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="space-y-12">
            {/* Section Title */}
            <div className="border-l-8 border-foreground pl-8">
              <h2 className="text-5xl md:text-6xl font-black text-foreground uppercase tracking-tight">Contact</h2>
            </div>

            {/* Contact Grid */}
            <div className="grid md:grid-cols-2 gap-12">
              {/* Left - Contact Info */}
              <div className="space-y-8 border-l-4 border-foreground pl-8">
                <div>
                  <p className="text-lg text-foreground leading-relaxed font-medium">
                    Always open for discussions about new projects, technical challenges, and collaboration opportunities.
                  </p>
                </div>

                {/* Contact Details */}
                <div className="space-y-6 pt-8 border-t-2 border-foreground">
                  <div className="space-y-2">
                    <p className="text-foreground font-bold uppercase tracking-widest text-sm">Email</p>
                    <a href={`mailto:${portfolioData.email}`} className="text-foreground font-medium hover:bg-foreground hover:text-background px-2 py-1 transition-colors">
                      {portfolioData.email}
                    </a>
                  </div>

                  <div className="space-y-2">
                    <p className="text-foreground font-bold uppercase tracking-widest text-sm">Phone</p>
                    <a href={`tel:${portfolioData.phone}`} className="text-foreground font-medium hover:bg-foreground hover:text-background px-2 py-1 transition-colors">
                      {portfolioData.phone}
                    </a>
                  </div>

                  <div className="space-y-2">
                    <p className="text-foreground font-bold uppercase tracking-widest text-sm">Location</p>
                    <p className="text-foreground font-medium">{portfolioData.location}</p>
                  </div>
                </div>

                {/* Social Links */}
                <div className="space-y-4 pt-8 border-t-2 border-foreground">
                  <p className="font-bold text-foreground uppercase tracking-widest text-sm">Follow</p>
                  <div className="flex gap-4">
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 border-2 border-foreground flex items-center justify-center text-foreground hover:bg-foreground hover:text-background transition-colors duration-200"
                      aria-label="GitHub"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 border-2 border-foreground flex items-center justify-center text-foreground hover:bg-foreground hover:text-background transition-colors duration-200"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      href={`mailto:${portfolioData.email}`}
                      className="w-12 h-12 border-2 border-foreground flex items-center justify-center text-foreground hover:bg-foreground hover:text-background transition-colors duration-200"
                      aria-label="Email"
                    >
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right - Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="p-8 border-4 border-foreground space-y-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-foreground mb-3 uppercase tracking-widest">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border-2 border-foreground focus:outline-none focus:bg-foreground focus:text-background transition-colors duration-200 text-foreground placeholder-muted-foreground font-medium"
                      placeholder="Your name"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-foreground mb-3 uppercase tracking-widest">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border-2 border-foreground focus:outline-none focus:bg-foreground focus:text-background transition-colors duration-200 text-foreground placeholder-muted-foreground font-medium"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-foreground mb-3 uppercase tracking-widest">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-background border-2 border-foreground focus:outline-none focus:bg-foreground focus:text-background transition-colors duration-200 text-foreground placeholder-muted-foreground resize-none font-medium"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full px-6 py-4 bg-foreground text-background font-black uppercase tracking-widest hover:bg-secondary transition-colors duration-200 flex items-center justify-center gap-2 group text-sm border-2 border-foreground"
                  >
                    Send
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
