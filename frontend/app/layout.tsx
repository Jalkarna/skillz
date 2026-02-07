'use client'

import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { LoadingOverlay } from '@/components/loading-overlay'
import { PageProgress } from '@/components/page-progress'
import { LoadingProvider } from '@/lib/loading-context'

import './globals.css'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <LoadingProvider>
          <PageProgress />
          {children}
          <LoadingOverlay />
        </LoadingProvider>
      </body>
    </html>
  )
}
