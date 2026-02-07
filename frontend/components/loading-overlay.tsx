'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export function LoadingOverlay() {
  const [isVisible, setIsVisible] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleStart = () => setIsVisible(true)
    const handleEnd = () => setIsVisible(false)

    // Listen for route changes
    window.addEventListener('beforeunload', handleStart)
    
    return () => {
      window.removeEventListener('beforeunload', handleStart)
    }
  }, [router])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-background p-8 rounded-lg shadow-lg">
        <div className="flex items-center gap-3">
          <div className="relative w-8 h-8">
            <div className="absolute inset-0 rounded-full border-4 border-primary/20" />
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary animate-spin" />
          </div>
          <p className="text-foreground font-medium">Loading...</p>
        </div>
      </div>
    </div>
  )
}
