import './globals.css'
import type { ReactNode } from 'react'

export const metadata = {
  title: 'scriptsc',
  description: 'Hazır Scriptlerle Projelerine Güç Kat',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="tr" className="dark">
      <body className="min-h-screen bg-gray-900 text-white">
        {children}
      </body>
    </html>
  )
}
