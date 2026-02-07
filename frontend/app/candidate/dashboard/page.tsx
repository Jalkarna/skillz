'use client'

import { CandidateSidebar } from '@/components/candidate-sidebar'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Link from 'next/link'
import { useState, Suspense } from 'react'
import { Clock, CheckCircle, AlertCircle } from 'lucide-react'
import { PageLoadingSkeleton } from '@/components/page-content'

function DashboardContent() {
  const [activeTab, setActiveTab] = useState('active')

  const activeAssessments = [
    {
      id: 1,
      title: 'Senior React Developer',
      difficulty: 'Hard',
      deadline: '5 days left',
      status: 'pending',
      duration: 60,
      daysRemaining: 5,
    },
    {
      id: 2,
      title: 'Full Stack Engineer',
      difficulty: 'Hard',
      deadline: '2 days left',
      status: 'pending',
      duration: 90,
      daysRemaining: 2,
    },
  ]

  const completedAssessments = [
    {
      id: 3,
      title: 'Data Scientist',
      company: 'DataDriven Co.',
      completedOn: '2026-02-01',
      score: 88,
      status: 'qualified',
      skills: ['Python', 'SQL', 'Statistics'],
    },
    {
      id: 4,
      title: 'DevOps Engineer',
      company: 'CloudTech Solutions',
      completedOn: '2026-01-25',
      score: 92,
      status: 'qualified',
      skills: ['Docker', 'Kubernetes', 'AWS'],
    },
    {
      id: 5,
      title: 'Frontend Developer',
      company: 'TestFirst Labs',
      completedOn: '2026-01-20',
      score: 85,
      status: 'qualified',
      skills: ['React', 'TypeScript', 'CSS'],
    },
  ]

  const stats = [
    { label: 'Assessments Completed', value: completedAssessments.length.toString(), icon: CheckCircle },
    { label: 'Avg Score', value: '88%', icon: AlertCircle },
    { label: 'Assessments Pending', value: activeAssessments.length.toString(), icon: Clock },
  ]

  return (
    <div className="flex min-h-screen bg-background">
      <CandidateSidebar />

      <main className="flex-1 p-8">
        <div className="max-w-5xl">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-primary mb-2">My Assessments</h1>
            <p className="text-muted-foreground">Track your assessment progress and view results</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {stats.map((stat, idx) => {
              const Icon = stat.icon
              return (
                <Card key={idx} className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                      <p className="text-2xl font-bold text-primary">{stat.value}</p>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>

          {/* Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mb-6">
              <TabsTrigger value="active">Active ({activeAssessments.length})</TabsTrigger>
              <TabsTrigger value="completed">Completed ({completedAssessments.length})</TabsTrigger>
            </TabsList>

            {/* Active Assessments */}
            <TabsContent value="active" className="space-y-4">
              {activeAssessments.length > 0 ? (
                activeAssessments.map(assessment => (
                  <Card key={assessment.id} className="p-6 hover:border-primary/50 transition">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-primary mb-2">{assessment.title}</h3>
                        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {assessment.duration} minutes
                          </span>
                          <span className={`font-semibold ${
                            assessment.difficulty === 'Hard' ? 'text-red-600' :
                            assessment.difficulty === 'Medium' ? 'text-orange-600' : 'text-green-600'
                          }`}>
                            {assessment.difficulty}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-orange-600 mb-2">{assessment.deadline}</p>
                        <Link href={`/candidate/assessment/${assessment.id}`}>
                          <Button size="sm">Start Now</Button>
                        </Link>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-border">
                      <p className="text-xs text-muted-foreground">
                        Days remaining: {assessment.daysRemaining}
                      </p>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                        <div
                          className="bg-orange-600 h-2 rounded-full"
                          style={{ width: `${(assessment.daysRemaining / 7) * 100}%` }}
                        />
                      </div>
                    </div>
                  </Card>
                ))
              ) : (
                <Card className="p-12 text-center">
                  <AlertCircle className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
                  <p className="text-muted-foreground text-lg">No active assessments at the moment.</p>
                </Card>
              )}
            </TabsContent>

            {/* Completed Assessments */}
            <TabsContent value="completed" className="space-y-4">
              {completedAssessments.map(assessment => (
                <Card key={assessment.id} className="p-6 hover:border-primary/50 transition">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-2">{assessment.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">Completed on {assessment.completedOn}</p>
                      <div className="flex flex-wrap gap-2">
                        {assessment.skills.map((skill, idx) => (
                          <span key={idx} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-4xl font-bold text-primary mb-2">{assessment.score}%</p>
                      <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium mb-4">
                        Qualified
                      </span>
                      <div>
                        <Link href={`/candidate/result/${assessment.id}`}>
                          <Button variant="outline" size="sm">View Report</Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

export default function CandidateDashboard() {
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
