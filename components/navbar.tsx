'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
<<<<<<< HEAD
import { ThemeSwitcher } from './theme-switcher'
=======
>>>>>>> 13150cae133cc83080d4045ca42dfb2aa03f16bb

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/programmes', label: 'Programmes' },
    { href: '/career', label: 'Career' },
    { href: '/leadership', label: 'Leadership' },
    { href: '/entrepreneurship', label: 'Entrepreneurship' },
    { href: '/mentorship', label: 'Mentorship' },
    { href: '/partners', label: 'Partners' },
  ]

  const ctaLinks = [
    { href: '/get-involved', label: 'Get Involved', variant: 'secondary' },
    { href: '/donate', label: 'Donate', variant: 'primary' },
  ]

  return (
<<<<<<< HEAD
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-b border-border dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 gap-6">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-3 group hover:opacity-80 transition-all duration-300">
            <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-primary/20 dark:ring-accent/20 group-hover:ring-primary/40 dark:group-hover:ring-accent/40 transition-all duration-300 shadow-md">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo.jpg-jfNx7MmRWvfEaLCtCLlEgp9A222wys.jpeg"
                alt="LeadPath Logo"
                width={48}
                height={48}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <span className="hidden sm:inline font-serif font-bold text-lg text-primary dark:text-white group-hover:text-primary/80 dark:group-hover:text-white/80 transition-colors duration-300">
=======
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo.jpg-jfNx7MmRWvfEaLCtCLlEgp9A222wys.jpeg"
              alt="LeadPath Logo"
              width={48}
              height={48}
              className="h-12 w-auto"
              priority
            />
            <span className="hidden sm:inline font-serif font-bold text-xl text-primary">
>>>>>>> 13150cae133cc83080d4045ca42dfb2aa03f16bb
              LeadPath
            </span>
          </Link>

          {/* Desktop Navigation */}
<<<<<<< HEAD
          <div className="hidden lg:flex items-center gap-1">
=======
          <div className="hidden lg:flex items-center gap-8">
>>>>>>> 13150cae133cc83080d4045ca42dfb2aa03f16bb
            {links.map((link) => (
              <Link
                key={`desktop-${link.href}`}
                href={link.href}
<<<<<<< HEAD
                className="px-3 py-2 text-sm font-semibold text-primary dark:text-accent hover:text-primary dark:hover:text-accent rounded-md hover:bg-primary/5 dark:hover:bg-accent/10 transition-all duration-300"
=======
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
>>>>>>> 13150cae133cc83080d4045ca42dfb2aa03f16bb
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons - Desktop */}
<<<<<<< HEAD
          <div className="hidden lg:flex items-center gap-3 ml-auto">
            <Link
              href="/get-involved"
              className="px-4 py-2 text-sm font-semibold text-primary dark:text-accent hover:text-primary/80 dark:hover:text-accent/80 hover:bg-primary/5 dark:hover:bg-accent/10 rounded-md transition-all duration-300"
=======
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/get-involved"
              className="px-4 py-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
>>>>>>> 13150cae133cc83080d4045ca42dfb2aa03f16bb
            >
              Get Involved
            </Link>
            <Link
              href="/donate"
<<<<<<< HEAD
              className="px-6 py-2 text-sm font-semibold text-white bg-accent hover:bg-accent/90 dark:hover:bg-amber-500 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              Donate
            </Link>
            <div className="pl-3 border-l border-border dark:border-slate-700">
              <ThemeSwitcher />
            </div>
          </div>

          {/* Mobile Theme & Menu Buttons */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-primary dark:text-accent hover:bg-primary/10 dark:hover:bg-accent/10 rounded-lg transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
=======
              className="px-6 py-2 text-sm font-medium text-white bg-accent hover:bg-accent/90 rounded-lg transition-colors"
            >
              Donate
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground hover:bg-muted rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
>>>>>>> 13150cae133cc83080d4045ca42dfb2aa03f16bb
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
<<<<<<< HEAD
        <div className="lg:hidden border-t border-border dark:border-slate-700 bg-white dark:bg-slate-900 transition-all duration-300 animate-in fade-in slide-in-from-top-2">
          <div className="px-4 py-6 space-y-1">
=======
        <div className="lg:hidden border-t border-border bg-white">
          <div className="px-4 py-4 space-y-2">
>>>>>>> 13150cae133cc83080d4045ca42dfb2aa03f16bb
            {links.map((link) => (
              <Link
                key={`mobile-${link.href}`}
                href={link.href}
<<<<<<< HEAD
                className="block px-4 py-2 text-sm font-semibold text-primary dark:text-accent hover:bg-primary/5 dark:hover:bg-accent/10 hover:text-primary dark:hover:text-accent rounded-lg transition-all duration-300"
=======
                className="block px-3 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
>>>>>>> 13150cae133cc83080d4045ca42dfb2aa03f16bb
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
<<<<<<< HEAD
            <div className="pt-4 mt-2 border-t border-border dark:border-slate-700 space-y-2">
              <Link
                href="/get-involved"
                className="block px-4 py-2 text-sm font-semibold text-primary dark:text-accent hover:bg-primary/5 dark:hover:bg-accent/10 rounded-lg transition-all duration-300"
=======
            <div className="pt-4 border-t border-border space-y-2">
              <Link
                href="/get-involved"
                className="block px-3 py-2 text-sm font-medium text-primary hover:bg-muted rounded-lg transition-colors"
>>>>>>> 13150cae133cc83080d4045ca42dfb2aa03f16bb
                onClick={() => setIsOpen(false)}
              >
                Get Involved
              </Link>
              <Link
                href="/donate"
<<<<<<< HEAD
                className="block px-4 py-2 text-sm font-semibold text-white bg-accent hover:bg-accent/90 dark:hover:bg-amber-500 rounded-lg shadow-md transition-all duration-300"
=======
                className="block px-3 py-2 text-sm font-medium text-white bg-accent hover:bg-accent/90 rounded-lg transition-colors"
>>>>>>> 13150cae133cc83080d4045ca42dfb2aa03f16bb
                onClick={() => setIsOpen(false)}
              >
                Donate
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
