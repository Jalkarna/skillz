'use client'

import { Suspense, ReactNode } from 'react'
import { Card } from '@/components/ui/card'

function SkeletonCard() {
  return (
    <Card className="p-6 animate-pulse">
      <div className="space-y-4">
        <div className="h-4 bg-muted rounded w-1/3" />
        <div className="h-8 bg-muted rounded w-1/2" />
        <div className="space-y-2">
          <div className="h-3 bg-muted rounded" />
          <div className="h-3 bg-muted rounded w-5/6" />
        </div>
      </div>
    </Card>
  )
}

export function PageLoadingSkeleton() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[...Array(4)].map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
      <SkeletonCard />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <SkeletonCard />
        </div>
        <SkeletonCard />
      </div>
    </div>
  )
}

interface PageContentProps {
  children: ReactNode
  fallback?: ReactNode
}

export function PageContent({ children, fallback }: PageContentProps) {
  return (
    <Suspense fallback={fallback || <PageLoadingSkeleton />}>
      {children}
    </Suspense>
  )
}
