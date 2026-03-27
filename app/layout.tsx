import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Aion Research - We Build Autonomous Intelligence That Builds Your Business',
  description: 'Renaissance Workshop model — where AI agents, strategy, and craft converge. Enterprise-grade AI platforms, strategic intelligence, and autonomous business operations.',
  keywords: ['AI platform', 'Agent OS', 'enterprise AI', 'autonomous intelligence', 'AI strategy', 'business automation'],
  authors: [{ name: 'Aion Research' }],
  creator: 'Aion Research',
  publisher: 'Aion Research',
  metadataBase: new URL('https://aion.agency'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aion.agency',
    title: 'Aion Research - Autonomous Intelligence Platform',
    description: 'Enterprise-grade AI platforms that transform business operations. Agent OS, strategic intelligence, and autonomous execution.',
    siteName: 'Aion Research',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Aion Research',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aion Research - Autonomous Intelligence Platform',
    description: 'Enterprise-grade AI platforms that transform business operations.',
    images: ['/og-image.png'],
    creator: '@aionresearch',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans bg-void-black text-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
