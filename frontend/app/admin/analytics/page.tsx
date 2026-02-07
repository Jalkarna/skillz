'use client'

import { AdminSidebar } from '@/components/admin-sidebar'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Download, TrendingUp } from 'lucide-react'

export default function AdminAnalyticsPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <AdminSidebar />

      <main className="flex-1 p-8">
        <div className="max-w-7xl">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold text-primary mb-2">Platform Analytics</h1>
              <p className="text-muted-foreground">Comprehensive insights into platform usage and performance</p>
            </div>
            <Button size="lg" className="gap-2">
              <Download className="w-4 h-4" />
              Export Report
            </Button>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { label: 'Total Assessments', value: '1,234', change: '+156 this month' },
              { label: 'Avg Completion Rate', value: '87%', change: '+3% vs last month' },
              { label: 'Avg Assessment Time', value: '42 min', change: '-2 min trending' },
              { label: 'Overall Pass Rate', value: '72%', change: '+4% vs last month' },
            ].map((metric, idx) => (
              <Card key={idx} className="p-6">
                <p className="text-sm text-muted-foreground mb-2">{metric.label}</p>
                <h3 className="text-3xl font-bold text-primary mb-2">{metric.value}</h3>
                <p className="text-xs text-green-600 font-medium">{metric.change}</p>
              </Card>
            ))}
          </div>

          {/* Usage Trends */}
          <Card className="p-6 mb-6">
            <h2 className="text-lg font-semibold text-primary mb-6 flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Usage Trends (Last 30 Days)
            </h2>
            <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center">
                <p className="text-muted-foreground mb-2">Chart visualization would display here</p>
                <p className="text-xs text-muted-foreground">Daily assessment submissions trending upward</p>
              </div>
            </div>
          </Card>

          {/* Demographics and Distribution */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Top Assessments */}
            <Card className="p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Top Assessments by Volume</h2>
              <div className="space-y-3">
                {[
                  { name: 'Senior React Developer', submissions: 342, avgScore: 78 },
                  { name: 'Full Stack Engineer', submissions: 289, avgScore: 75 },
                  { name: 'Data Scientist', submissions: 156, avgScore: 82 },
                  { name: 'DevOps Engineer', submissions: 98, avgScore: 79 },
                ].map((assessment, idx) => (
                  <div key={idx} className="p-3 bg-muted rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-medium text-sm">{assessment.name}</p>
                      <p className="text-sm font-bold text-primary">{assessment.submissions}</p>
                    </div>
                    <p className="text-xs text-muted-foreground">Avg Score: {assessment.avgScore}%</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Candidate Distribution */}
            <Card className="p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Candidate Status Distribution</h2>
              <div className="space-y-4">
                {[
                  { status: 'Qualified', count: 8234, percentage: 62, color: 'bg-green-500' },
                  { status: 'Pending Review', count: 3456, percentage: 26, color: 'bg-yellow-500' },
                  { status: 'Disqualified', count: 1680, percentage: 12, color: 'bg-red-500' },
                ].map((status, idx) => (
                  <div key={idx}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-sm">{status.status}</span>
                      <span className="text-sm font-bold">{status.count.toLocaleString()}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className={`h-3 rounded-full ${status.color}`}
                        style={{ width: `${status.percentage}%` }}
                      />
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{status.percentage}% of total</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Organization Performance */}
          <Card className="p-6 mb-6">
            <h2 className="text-lg font-semibold text-primary mb-6">Organization Performance</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold">Organization</th>
                    <th className="text-left py-3 px-4 font-semibold">Assessments Created</th>
                    <th className="text-left py-3 px-4 font-semibold">Total Submissions</th>
                    <th className="text-left py-3 px-4 font-semibold">Avg Completion %</th>
                    <th className="text-left py-3 px-4 font-semibold">Pass Rate</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { org: 'TechCorp Inc', created: 34, submissions: 892, completion: 91, passRate: 74 },
                    { org: 'StartupXYZ', created: 12, submissions: 234, completion: 85, passRate: 68 },
                    { org: 'CloudTech Solutions', created: 28, submissions: 645, completion: 88, passRate: 76 },
                    { org: 'DataDriven Co', created: 19, submissions: 456, completion: 89, passRate: 79 },
                  ].map((org, idx) => (
                    <tr key={idx} className="border-b border-border hover:bg-muted/50 transition">
                      <td className="py-3 px-4 font-medium text-primary">{org.org}</td>
                      <td className="py-3 px-4">{org.created}</td>
                      <td className="py-3 px-4">{org.submissions}</td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <div className="w-12 bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-green-600 h-2 rounded-full"
                              style={{ width: `${org.completion}%` }}
                            />
                          </div>
                          <span className="text-xs font-bold">{org.completion}%</span>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <span className="font-bold text-green-600">{org.passRate}%</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          {/* Skills Demand */}
          <Card className="p-6">
            <h2 className="text-lg font-semibold text-primary mb-6">Most In-Demand Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { skill: 'React', assessments: 156, demand: 92 },
                { skill: 'Python', assessments: 134, demand: 85 },
                { skill: 'TypeScript', assessments: 128, demand: 88 },
                { skill: 'AWS', assessments: 98, demand: 75 },
                { skill: 'Docker', assessments: 87, demand: 72 },
                { skill: 'Node.js', assessments: 112, demand: 80 },
              ].map((skill, idx) => (
                <div key={idx} className="p-4 bg-muted rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-medium">{skill.skill}</p>
                    <p className="text-sm font-bold text-primary">{skill.assessments}</p>
                  </div>
                  <div className="w-full bg-gray-300 rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full"
                      style={{ width: `${skill.demand}%` }}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">Demand: {skill.demand}%</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </main>
    </div>
  )
}
