import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Aion AI Agency - The AI Agency of the Future',
  description: 'Autonomous AI executing complex business operations. Strategy, implementation, and automation that transforms how businesses operate.',
  keywords: ['AI agency', 'AI automation', 'business intelligence', 'enterprise AI', 'autonomous AI', 'AI strategy'],
  authors: [{ name: 'Aion Research' }],
  creator: 'Aion Research',
  publisher: 'Aion Research',
  metadataBase: new URL('https://aion.agency'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aion.agency',
    title: 'Aion AI Agency - The AI Agency of the Future',
    description: 'Autonomous AI executing complex business operations. Transform your business with intelligent automation.',
    siteName: 'Aion AI Agency',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Aion AI Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aion AI Agency - The AI Agency of the Future',
    description: 'Autonomous AI executing complex business operations.',
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
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans">
        {children}
      </body>
    </html>
  )
}
