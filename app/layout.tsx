import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Next.js Maintenance Demo | React, Figma, GitHub, AWS',
  description:
    'A focused Next.js demo showing how I approach Figma implementation, reusable templates, responsive QA, and existing-codebase maintenance.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
