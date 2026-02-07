'use client'

import { AdminSidebar } from '@/components/admin-sidebar'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { AlertTriangle, Users, BarChart3, Server } from 'lucide-react'
import { useState, Suspense } from 'react'
import { PageLoadingSkeleton } from '@/components/page-content'

function DashboardContent() {
  const [activeTab, setActiveTab] = useState('overview')

  const systemStats = [
    { label: 'Total Users', value: '2,845', change: '+128 this week', icon: Users },
    { label: 'Active Assessments', value: '342', change: '+45 this month', icon: BarChart3 },
    { label: 'Total Candidates', value: '18,920', change: '+2,340 this month', icon: Users },
    { label: 'Platform Health', value: '99.9%', change: 'Uptime', icon: Server },
  ]

  const suspiciousActivities = [
    { id: 1, user: 'candidate_123', activity: 'Rapid answer submissions', severity: 'High', date: '2 hours ago', action: 'Block' },
    { id: 2, user: 'recruiter_045', activity: 'Unusual data export pattern', severity: 'Medium', date: '5 hours ago', action: 'Review' },
    { id: 3, user: 'candidate_567', activity: 'Tab switch detected during assessment', severity: 'High', date: '1 day ago', action: 'Flag' },
    { id: 4, user: 'candidate_890', activity: 'Possible plagiarism detected', severity: 'High', date: '2 days ago', action: 'Investigate' },
  ]

  const topAssessments = [
    { title: 'Senior Backend Engineer', created: '2026-01-15', attempts: 342, avgScore: 82, passRate: 78 },
    { title: 'Frontend Developer', created: '2026-01-20', attempts: 267, avgScore: 78, passRate: 72 },
    { title: 'Data Scientist', created: '2026-02-01', attempts: 145, avgScore: 85, passRate: 81 },
    { title: 'DevOps Engineer', created: '2026-01-28', attempts: 98, avgScore: 79, passRate: 75 },
  ]

  const userStats = [
    { label: 'Total Recruiters', value: '342', subtext: 'Organizations using Skillz' },
    { label: 'Active Candidates', value: '5,234', subtext: 'Currently taking assessments' },
    { label: 'Inactive Users', value: '1,245', subtext: 'No activity in 30+ days' },
  ]

  const healthMetrics = [
    { label: 'API Response Time', value: '120ms', percentage: 95, color: 'bg-green-600' },
    { label: 'Database Load', value: '65%', percentage: 65, color: 'bg-yellow-600' },
    { label: 'Memory Usage', value: '42%', percentage: 42, color: 'bg-green-600' },
    { label: 'Disk Usage', value: '58%', percentage: 58, color: 'bg-green-600' },
  ]

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'High': return 'bg-red-100 text-red-700'
      case 'Medium': return 'bg-yellow-100 text-yellow-700'
      case 'Low': return 'bg-green-100 text-green-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  return (
    <div className="flex min-h-screen bg-background">
      <AdminSidebar />

      <main className="flex-1 p-8">
        <div className="max-w-7xl">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-primary mb-2">Admin Dashboard</h1>
            <p className="text-muted-foreground">Platform management and system monitoring</p>
          </div>

          {/* Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-4 max-w-2xl mb-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="monitoring">Monitoring</TabsTrigger>
              <TabsTrigger value="assessments">Assessments</TabsTrigger>
              <TabsTrigger value="users">Users</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              {/* System Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {systemStats.map((stat, idx) => {
                  const Icon = stat.icon
                  return (
                    <Card key={idx} className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                          <h3 className="text-3xl font-bold text-primary">{stat.value}</h3>
                          <p className="text-xs text-green-600 mt-2">{stat.change}</p>
                        </div>
                        <Icon className="w-8 h-8 text-muted-foreground opacity-50" />
                      </div>
                    </Card>
                  )
                })}
              </div>

              {/* System Health */}
              <Card className="p-6">
                <h2 className="text-lg font-semibold text-primary mb-6">System Health</h2>
                <div className="space-y-4">
                  {healthMetrics.map((metric, idx) => (
                    <div key={idx}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-sm">{metric.label}</span>
                        <span className="text-sm font-bold text-primary">{metric.value}</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2.5">
                        <div
                          className={`h-2.5 rounded-full ${metric.color}`}
                          style={{ width: `${metric.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {userStats.map((stat, idx) => (
                  <Card key={idx} className="p-6 bg-gradient-to-br from-primary/5 to-transparent border-primary/10">
                    <p className="text-sm text-muted-foreground mb-2">{stat.label}</p>
                    <p className="text-3xl font-bold text-primary mb-1">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.subtext}</p>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Monitoring Tab */}
            <TabsContent value="monitoring">
              <Card className="p-6">
                <div className="flex items-center gap-2 mb-6">
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                  <h2 className="text-lg font-semibold text-primary">Suspicious Activities ({suspiciousActivities.length})</h2>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-4 font-semibold">User ID</th>
                        <th className="text-left py-3 px-4 font-semibold">Activity</th>
                        <th className="text-left py-3 px-4 font-semibold">Severity</th>
                        <th className="text-left py-3 px-4 font-semibold">Time</th>
                        <th className="text-left py-3 px-4 font-semibold">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {suspiciousActivities.map(activity => (
                        <tr key={activity.id} className="border-b border-border hover:bg-muted/50 transition">
                          <td className="py-3 px-4 font-medium text-primary">{activity.user}</td>
                          <td className="py-3 px-4">{activity.activity}</td>
                          <td className="py-3 px-4">
                            <span className={`text-xs px-3 py-1 rounded-full font-medium ${getSeverityColor(activity.severity)}`}>
                              {activity.severity}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-muted-foreground">{activity.date}</td>
                          <td className="py-3 px-4">
                            <Button variant="outline" size="sm">{activity.action}</Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </TabsContent>

            {/* Assessments Tab */}
            <TabsContent value="assessments">
              <Card className="p-6">
                <h2 className="text-lg font-semibold text-primary mb-6">Top Assessments</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-4 font-semibold">Assessment</th>
                        <th className="text-left py-3 px-4 font-semibold">Created</th>
                        <th className="text-left py-3 px-4 font-semibold">Attempts</th>
                        <th className="text-left py-3 px-4 font-semibold">Avg Score</th>
                        <th className="text-left py-3 px-4 font-semibold">Pass Rate</th>
                      </tr>
                    </thead>
                    <tbody>
                      {topAssessments.map((assessment, idx) => (
                        <tr key={idx} className="border-b border-border hover:bg-muted/50 transition">
                          <td className="py-3 px-4 font-medium text-primary">{assessment.title}</td>
                          <td className="py-3 px-4 text-muted-foreground">{assessment.created}</td>
                          <td className="py-3 px-4">{assessment.attempts}</td>
                          <td className="py-3 px-4">
                            <span className="font-semibold">{assessment.avgScore}%</span>
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-2">
                              <div className="w-16 bg-gray-200 rounded-full h-2">
                                <div
                                  className="bg-green-600 h-2 rounded-full"
                                  style={{ width: `${assessment.passRate}%` }}
                                />
                              </div>
                              <span className="text-sm font-semibold">{assessment.passRate}%</span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </TabsContent>

            {/* Users Tab */}
            <TabsContent value="users">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {userStats.map((stat, idx) => (
                  <Card key={idx} className="p-6">
                    <h3 className="font-semibold text-primary mb-4">{stat.label}</h3>
                    <p className="text-4xl font-bold text-primary mb-2">{stat.value}</p>
                    <p className="text-sm text-muted-foreground mb-6">{stat.subtext}</p>
                    <Button variant="outline" size="sm" className="w-full bg-transparent">Manage</Button>
                  </Card>
                ))}
              </div>

              {/* Recruiter Organizations */}
              <Card className="p-6 mt-6">
                <h2 className="text-lg font-semibold text-primary mb-6">Organization Management</h2>
                <div className="space-y-3">
                  {['TechCorp Inc', 'StartupXYZ', 'DataDriven Co', 'CloudTech Solutions'].map((org, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                      <div>
                        <p className="font-medium">{org}</p>
                        <p className="text-xs text-muted-foreground">{Math.floor(Math.random() * 50) + 10} recruiters</p>
                      </div>
                      <Button variant="outline" size="sm">Manage</Button>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

export default function AdminDashboard() {
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
