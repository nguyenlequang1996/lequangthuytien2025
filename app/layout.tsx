import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { Noto_Serif } from 'next/font/google'
import './globals.css'

const notoSerif = Noto_Serif({
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '600', '700'],
  variable: '--font-noto-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Quang & Tiên Wedding',
  description: 'Created with v0',
  generator: 'v0.app',
  icons: {
    icon: '/iconpage.png',
    apple: '/iconpage.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${notoSerif.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
