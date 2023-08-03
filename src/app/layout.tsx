import './globals.css'
import { ReactNode } from 'react'
import type { Metadata } from 'next'

import { Inter } from 'next/font/google'
import { Sidebar } from '@/components/Sidebar'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Reason UI',
  description: 'Tailwind Course by Rocketseat',
}

export interface LayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" className="antialiased">
      <body className={inter.className}>
        <div className="grid min-h-screen grid-cols-app">
          <Sidebar />
          <main className="px-4 pb-12 pt-8">{children}</main>
        </div>
      </body>
    </html>
  )
}
