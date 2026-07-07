'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { ThemeSwitcher } from './theme-switcher'

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-slate-900 border-b border-border dark:border-slate-700 shadow-sm transition-colors">
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
            <span className="hidden sm:inline font-serif font-bold text-xl text-primary dark:text-white">
              LeadPath
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={`desktop-${link.href}`}
                href={link.href}
                className="text-sm font-semibold text-foreground dark:text-slate-100 hover:text-primary dark:hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons - Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/get-involved"
              className="px-4 py-2 text-sm font-semibold text-primary dark:text-accent hover:text-primary/80 dark:hover:text-accent/80 transition-colors"
            >
              Get Involved
            </Link>
            <Link
              href="/donate"
              className="px-6 py-2 text-sm font-semibold text-white bg-accent hover:bg-accent/90 rounded-lg transition-colors"
            >
              Donate
            </Link>
            <div className="pl-2 border-l border-border dark:border-slate-700">
              <ThemeSwitcher />
            </div>
          </div>

          {/* Mobile Theme & Menu Buttons */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-foreground dark:text-slate-100 hover:bg-muted dark:hover:bg-slate-700 rounded-lg transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden border-t border-border dark:border-slate-700 bg-white dark:bg-slate-900 transition-colors">
          <div className="px-4 py-4 space-y-2">
            {links.map((link) => (
              <Link
                key={`mobile-${link.href}`}
                href={link.href}
                className="block px-3 py-2 text-sm font-semibold text-foreground dark:text-slate-100 hover:bg-muted dark:hover:bg-slate-700 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-border dark:border-slate-700 space-y-2">
              <Link
                href="/get-involved"
                className="block px-3 py-2 text-sm font-semibold text-primary dark:text-accent hover:bg-muted dark:hover:bg-slate-700 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Get Involved
              </Link>
              <Link
                href="/donate"
                className="block px-3 py-2 text-sm font-semibold text-white bg-accent hover:bg-accent/90 rounded-lg transition-colors"
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
