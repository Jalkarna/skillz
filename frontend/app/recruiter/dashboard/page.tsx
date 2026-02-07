'use client'

import { RecruiterSidebar } from '@/components/recruiter-sidebar'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { BarChart3, Users, FileText, TrendingUp, ArrowUp } from 'lucide-react'
import Link from 'next/link'
import { Suspense } from 'react'
import { PageLoadingSkeleton } from '@/components/page-content'

function DashboardContent() {
  // Mock data
  const stats = [
    { label: 'Total Applications', value: '842', icon: Users, change: '+12%', positive: true },
    { label: 'Active Assessments', value: '24', icon: FileText, change: '+3', positive: true },
    { label: 'Completion Rate', value: '78%', icon: TrendingUp, change: '+5%', positive: true },
    { label: 'Avg Score', value: '72', icon: BarChart3, change: '+2 pts', positive: true },
  ]

  const recentAssessments = [
    { id: 1, name: 'Senior React Developer', candidates: 34, status: 'Active', created: '2 days ago', attempts: 28 },
    { id: 2, name: 'Full Stack Engineer', candidates: 28, status: 'Active', created: '5 days ago', attempts: 24 },
    { id: 3, name: 'UI/UX Designer', candidates: 12, status: 'Closed', created: '2 weeks ago', attempts: 12 },
    { id: 4, name: 'Data Scientist', candidates: 45, status: 'Active', created: '1 week ago', attempts: 38 },
  ]

  const topCandidates = [
    { id: 1, name: 'John Smith', position: 'Senior React Developer', score: 94, status: 'Qualified', email: 'john@example.com' },
    { id: 2, name: 'Sarah Lee', position: 'Full Stack Engineer', score: 88, status: 'Qualified', email: 'sarah@example.com' },
    { id: 3, name: 'Mike Johnson', position: 'Data Scientist', score: 85, status: 'Qualified', email: 'mike@example.com' },
    { id: 4, name: 'Emma Wilson', position: 'Senior React Developer', score: 78, status: 'Qualified', email: 'emma@example.com' },
    { id: 5, name: 'Alex Chen', position: 'UI/UX Designer', score: 82, status: 'Qualified', email: 'alex@example.com' },
  ]

  const qualityMetrics = [
    { label: 'Qualified Candidates', value: '156', change: '+22%' },
    { label: 'Avg Time to Complete', value: '28min', change: '-3min' },
    { label: 'Skill Match Rate', value: '85%', change: '+4%' },
  ]

  return (
    <div className="flex min-h-screen bg-background">
      <RecruiterSidebar />
      
      <main className="flex-1">
        <div className="p-8 space-y-8">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-primary mb-2">Dashboard</h1>
              <p className="text-muted-foreground">Welcome back! Here's your hiring overview</p>
            </div>
            <Link href="/recruiter/create-assessment">
              <Button size="lg">Create Assessment</Button>
            </Link>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, idx) => {
              const Icon = stat.icon
              return (
                <Card key={idx} className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-muted-foreground mb-1">{stat.label}</p>
                      <h3 className="text-3xl font-bold text-primary">{stat.value}</h3>
                      <p className={`text-xs mt-3 flex items-center gap-1 ${stat.positive ? 'text-green-600' : 'text-red-600'}`}>
                        <ArrowUp className="w-3 h-3" />
                        {stat.change} from last month
                      </p>
                    </div>
                    <Icon className="w-10 h-10 text-muted-foreground opacity-40" />
                  </div>
                </Card>
              )
            })}
          </div>

          {/* Quality Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {qualityMetrics.map((metric, idx) => (
              <Card key={idx} className="p-6 bg-gradient-to-br from-primary/5 to-transparent border-primary/10">
                <p className="text-sm text-muted-foreground mb-2">{metric.label}</p>
                <p className="text-2xl font-bold text-primary mb-2">{metric.value}</p>
                <p className="text-xs text-green-600 font-medium">{metric.change}</p>
              </Card>
            ))}
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Recent Assessments - Takes 2 columns */}
            <div className="lg:col-span-2">
              <Card className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold text-primary">Recent Assessments</h2>
                  <Link href="/recruiter/assessments">
                    <Button variant="ghost" size="sm">View All</Button>
                  </Link>
                </div>
                <div className="space-y-3">
                  {recentAssessments.map((assessment) => (
                    <Link key={assessment.id} href={`/recruiter/assessment/${assessment.id}`}>
                      <div className="p-4 bg-muted hover:bg-muted/80 rounded-lg transition cursor-pointer border border-transparent hover:border-primary/20">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <p className="font-semibold text-sm text-primary">{assessment.name}</p>
                            <p className="text-xs text-muted-foreground mt-1">
                              {assessment.candidates} candidates invited • {assessment.attempts} attempts
                            </p>
                          </div>
                          <div className="text-right">
                            <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                              assessment.status === 'Active' 
                                ? 'bg-green-100 text-green-700' 
                                : 'bg-gray-100 text-gray-700'
                            }`}>
                              {assessment.status}
                            </span>
                            <p className="text-xs text-muted-foreground mt-2">{assessment.created}</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </Card>
            </div>

            {/* Top Performers */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-primary">Top Performers</h2>
                <Link href="/recruiter/candidates">
                  <Button variant="ghost" size="sm">See All</Button>
                </Link>
              </div>
              <div className="space-y-4">
                {topCandidates.slice(0, 5).map((candidate) => (
                  <Link key={candidate.id} href={`/recruiter/candidate/${candidate.id}`}>
                    <div className="pb-4 border-b border-border last:border-0 hover:bg-muted/50 p-2 rounded transition cursor-pointer">
                      <div className="flex items-start justify-between mb-2">
                        <p className="font-semibold text-sm text-primary">{candidate.name}</p>
                        <p className="text-sm font-bold text-green-600">{candidate.score}%</p>
                      </div>
                      <p className="text-xs text-muted-foreground mb-2">{candidate.position}</p>
                      <p className="text-xs text-muted-foreground">{candidate.email}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

export default function RecruiterDashboard() {
  return (
    <Suspense fallback={
      <div className="flex min-h-screen bg-background">
        <div className="w-64 bg-sidebar border-r border-sidebar-border" />
        <main className="flex-1 p-8">
          <div className="space-y-8">
            <div className="h-10 bg-muted rounded w-1/3 animate-pulse" />
            <PageLoadingSkeleton />
          </div>
        </main>
      </div>
    }>
      <DashboardContent />
    </Suspense>
  )
}
