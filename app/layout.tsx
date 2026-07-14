import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Poppins, Playfair_Display } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-serif',
})

export const metadata: Metadata = {
  title: 'LeadPath - Career and Leadership Network',
  description: 'Empowering careers, inspiring leaders. Discover, develop, and lead with LeadPath&apos;s career and leadership network.',
  generator: 'v0.app',
  keywords: ['career development', 'leadership', 'mentorship', 'entrepreneurship', 'professional growth'],
  openGraph: {
    title: 'LeadPath - Career and Leadership Network',
    description: 'Empowering careers, inspiring leaders. Discover, develop, and lead.',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo.jpg-jfNx7MmRWvfEaLCtCLlEgp9A222wys.jpeg',
        width: 1200,
        height: 630,
        alt: 'LeadPath Logo',
      },
    ],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
<<<<<<< HEAD
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#001f5c' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
=======
  colorScheme: 'light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#001f5c' },
>>>>>>> 13150cae133cc83080d4045ca42dfb2aa03f16bb
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
<<<<<<< HEAD
    <html lang="en" className={`${poppins.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body className="antialiased bg-background dark:bg-slate-900 text-foreground dark:text-slate-100 font-sans transition-colors">
=======
    <html lang="en" className={`${poppins.variable} ${playfair.variable}`}>
      <body className="antialiased bg-background text-foreground font-sans">
>>>>>>> 13150cae133cc83080d4045ca42dfb2aa03f16bb
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
