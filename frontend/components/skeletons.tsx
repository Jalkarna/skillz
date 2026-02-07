'use client'

export function CardSkeleton() {
  return (
    <div className="p-6 bg-muted rounded-lg animate-pulse">
      <div className="h-6 bg-muted-foreground/20 rounded w-1/3 mb-4" />
      <div className="space-y-3">
        <div className="h-4 bg-muted-foreground/20 rounded w-full" />
        <div className="h-4 bg-muted-foreground/20 rounded w-5/6" />
      </div>
    </div>
  )
}

export function StatsSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="p-6 bg-muted rounded-lg animate-pulse">
          <div className="h-4 bg-muted-foreground/20 rounded w-1/2 mb-2" />
          <div className="h-8 bg-muted-foreground/20 rounded w-3/4 mb-3" />
          <div className="h-3 bg-muted-foreground/20 rounded w-1/3" />
        </div>
      ))}
    </div>
  )
}

export function TableSkeleton() {
  return (
    <div className="space-y-3">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="p-4 bg-muted rounded-lg animate-pulse">
          <div className="flex justify-between items-center">
            <div className="flex-1 space-y-2">
              <div className="h-4 bg-muted-foreground/20 rounded w-1/4" />
              <div className="h-3 bg-muted-foreground/20 rounded w-1/3" />
            </div>
            <div className="h-4 bg-muted-foreground/20 rounded w-1/5" />
          </div>
        </div>
      ))}
    </div>
  )
}

export function DashboardSkeleton() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <div className="h-10 bg-muted rounded w-1/4 mb-2 animate-pulse" />
          <div className="h-4 bg-muted rounded w-1/3 animate-pulse" />
        </div>
        <div className="h-10 bg-muted rounded w-32 animate-pulse" />
      </div>

      {/* Stats */}
      <StatsSkeleton />

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <TableSkeleton />
        </div>
        <div>
          <TableSkeleton />
        </div>
      </div>
    </div>
  )
}
