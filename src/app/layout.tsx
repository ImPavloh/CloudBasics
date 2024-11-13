import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/page/Navbar'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cloud Basics',
  description:
    'Aprende los conceptos esenciales de la computación en la nube y su aplicación en el mundo moderno.',
  keywords:
    'computación en la nube, fundamentos de la nube, cloud computing, tecnología, pavloh, cloud basics',
  openGraph: {
    title: 'Cloud Basics',
    description:
      'Aprende los conceptos esenciales de la computación en la nube',
    url: 'https://cloudbasics.vercel.app',
    siteName: 'Cloud Basics',
    locale: 'es_ES',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" sizes="any" type="image/svg+xml" />
        <meta name="theme-color" content="#2b184a" />
        <link rel="canonical" href="https://cloudbasics.vercel.app" />
      </head>
      <body
        className={`${inter.className} min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
