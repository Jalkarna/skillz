'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { useLoading } from '@/lib/loading-context'

export function PageProgress() {
  const [progress, setProgress] = useState(0)
  const { isLoading } = useLoading()
  const pathname = usePathname()

  useEffect(() => {
    if (isLoading) {
      setProgress(10)
      
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev < 90) return prev + Math.random() * 30
          return prev
        })
      }, 200)

      return () => clearInterval(interval)
    }
  }, [isLoading])

  useEffect(() => {
    setProgress(100)
    const timer = setTimeout(() => setProgress(0), 500)
    return () => clearTimeout(timer)
  }, [pathname])

  if (!isLoading && progress === 0) return null

  return (
    <div className="fixed top-0 left-0 h-1 bg-primary/20 z-[100] w-full">
      <div
        className="h-full bg-gradient-to-r from-primary to-primary/80 transition-all duration-300"
        style={{ width: `${Math.min(progress, 100)}%` }}
      />
    </div>
  )
}
