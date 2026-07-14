import Link from 'next/link'
<<<<<<< HEAD
import Image from 'next/image'
=======
>>>>>>> 13150cae133cc83080d4045ca42dfb2aa03f16bb
import { Mail, MessageCircle, MapPin } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    About: [
      { label: 'Our Mission', href: '/about' },
      { label: 'Our Team', href: '/about' },
      { label: 'Programmes', href: '/programmes' },
    ],
    Programmes: [
      { label: 'Career Development', href: '/career' },
      { label: 'Leadership', href: '/leadership' },
      { label: 'Entrepreneurship', href: '/entrepreneurship' },
      { label: 'Mentorship', href: '/mentorship' },
    ],
    Community: [
      { label: 'Get Involved', href: '/get-involved' },
      { label: 'Partners', href: '/partners' },
      { label: 'Contact Us', href: '/contact' },
      { label: 'Donate', href: '/donate' },
    ],
  }

  return (
<<<<<<< HEAD
    <footer className="bg-primary dark:bg-slate-950 text-white transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 py-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-4 group hover:opacity-80 transition-all duration-300">
              <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-white/20 group-hover:ring-white/40 transition-all duration-300 shadow-lg flex-shrink-0">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo.jpg-jfNx7MmRWvfEaLCtCLlEgp9A222wys.jpeg"
                  alt="LeadPath Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif font-bold text-xl group-hover:text-white/90 transition-colors duration-300">LeadPath</h3>
            </Link>
            <p className="text-white/90 dark:text-slate-300 text-sm mb-6 max-w-sm leading-relaxed">
=======
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 py-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-primary text-lg font-bold">L</span>
              </div>
              <h3 className="font-serif font-bold text-xl">LeadPath</h3>
            </div>
            <p className="text-white/80 text-sm mb-6 max-w-sm">
>>>>>>> 13150cae133cc83080d4045ca42dfb2aa03f16bb
              Empowering careers. Inspiring leaders. Building the future through career development, leadership training, and entrepreneurship support.
            </p>
            {/* Contact Info */}
            <div className="space-y-3 text-sm">
<<<<<<< HEAD
              <div className="flex items-center gap-2 text-white/90 dark:text-slate-300 hover:text-white dark:hover:text-white transition-colors">
                <Mail size={16} />
                <a href="mailto:info@leadpath.org">info@leadpath.org</a>
              </div>
              <div className="flex items-center gap-2 text-white/90 dark:text-slate-300 hover:text-white dark:hover:text-white transition-colors">
                <MessageCircle size={16} />
                <a href="https://wa.me/256700000000">+256 700 000 000</a>
              </div>
              <div className="flex items-center gap-2 text-white/90 dark:text-slate-300">
=======
              <div className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
                <Mail size={16} />
                <a href="mailto:info@leadpath.org">info@leadpath.org</a>
              </div>
              <div className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
                <MessageCircle size={16} />
                <a href="https://wa.me/256700000000">+256 700 000 000</a>
              </div>
              <div className="flex items-center gap-2 text-white/80">
>>>>>>> 13150cae133cc83080d4045ca42dfb2aa03f16bb
                <MapPin size={16} />
                <span>Kampala, Uganda</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
<<<<<<< HEAD
              <h4 className="font-semibold text-white dark:text-slate-100 mb-6 text-sm uppercase tracking-wide">{category}</h4>
              <ul className="space-y-3 text-sm">
=======
              <h4 className="font-semibold text-white mb-4 text-sm">{category}</h4>
              <ul className="space-y-2 text-sm">
>>>>>>> 13150cae133cc83080d4045ca42dfb2aa03f16bb
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
<<<<<<< HEAD
                      className="text-white/90 dark:text-slate-400 hover:text-white dark:hover:text-white hover:translate-x-0.5 transition-all duration-300 inline-block"
=======
                      className="text-white/80 hover:text-white transition-colors"
>>>>>>> 13150cae133cc83080d4045ca42dfb2aa03f16bb
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
<<<<<<< HEAD
        <div className="border-t border-white/10 dark:border-slate-700 my-4"></div>

        {/* Bottom Footer */}
        <div className="py-8 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-sm text-white/70 dark:text-slate-400">
            © {currentYear} LeadPath. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/70 dark:text-slate-400">
            <Link href="#" className="hover:text-white dark:hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white dark:hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-white dark:hover:text-white transition-colors">
=======
        <div className="border-t border-white/10"></div>

        {/* Bottom Footer */}
        <div className="py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/60">
            © {currentYear} LeadPath. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/60">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
>>>>>>> 13150cae133cc83080d4045ca42dfb2aa03f16bb
              Code of Conduct
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
