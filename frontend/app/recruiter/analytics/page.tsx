'use client'

import { RecruiterSidebar } from '@/components/recruiter-sidebar'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { BarChart3, TrendingUp, Download } from 'lucide-react'

export default function AnalyticsPage() {
  const skillGapData = [
    { skill: 'React', avgScore: 78, benchmark: 85, gap: -7 },
    { skill: 'TypeScript', avgScore: 72, benchmark: 80, gap: -8 },
    { skill: 'Node.js', avgScore: 68, benchmark: 75, gap: -7 },
    { skill: 'SQL', avgScore: 82, benchmark: 78, gap: 4 },
    { skill: 'Problem Solving', avgScore: 75, benchmark: 80, gap: -5 },
    { skill: 'Communication', avgScore: 81, benchmark: 78, gap: 3 },
  ]

  const assessmentPerformance = [
    { assessment: 'Senior React Developer', candidates: 34, passed: 28, avgScore: 81, passRate: 82 },
    { assessment: 'Full Stack Engineer', candidates: 28, passed: 22, avgScore: 76, passRate: 79 },
    { assessment: 'Frontend Developer', candidates: 45, passed: 38, avgScore: 74, passRate: 84 },
    { assessment: 'Data Scientist', candidates: 45, passed: 35, avgScore: 78, passRate: 78 },
  ]

  const timeMetrics = [
    { metric: 'Avg Time to Complete', value: '28 min', change: '-3 min', positive: true },
    { metric: 'Avg Time per Question', value: '2.4 min', change: '+0.2 min', positive: false },
    { metric: 'Completion Rate', value: '89%', change: '+4%', positive: true },
    { metric: 'Total Assessments Taken', value: '2,384', change: '+156', positive: true },
  ]

  return (
    <div className="flex min-h-screen bg-background">
      <RecruiterSidebar />
      
      <main className="flex-1 p-8">
        <div className="max-w-7xl">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold text-primary mb-2">Analytics & Reports</h1>
              <p className="text-muted-foreground">Gain insights into hiring and assessment performance</p>
            </div>
            <Button size="lg" className="gap-2">
              <Download className="w-4 h-4" />
              Export Report
            </Button>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {timeMetrics.map((metric, idx) => (
              <Card key={idx} className="p-6">
                <p className="text-sm text-muted-foreground mb-2">{metric.metric}</p>
                <h3 className="text-2xl font-bold text-primary mb-2">{metric.value}</h3>
                <p className={`text-xs font-medium ${metric.positive ? 'text-green-600' : 'text-red-600'}`}>
                  {metric.positive ? '↑' : '↓'} {metric.change}
                </p>
              </Card>
            ))}
          </div>

          {/* Performance Analytics */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Assessment Performance */}
            <Card className="p-6">
              <h2 className="text-lg font-semibold text-primary mb-6 flex items-center gap-2">
                <BarChart3 className="w-5 h-5" />
                Assessment Performance
              </h2>
              <div className="space-y-4">
                {assessmentPerformance.map((perf, idx) => (
                  <div key={idx} className="pb-4 border-b border-border last:border-0">
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-medium text-sm">{perf.assessment}</p>
                      <p className="text-sm font-bold text-green-600">{perf.passRate}%</p>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">
                      {perf.passed} of {perf.candidates} candidates passed • Avg score: {perf.avgScore}%
                    </p>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-600 h-2 rounded-full transition-all"
                        style={{ width: `${perf.passRate}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Skill Benchmark */}
            <Card className="p-6">
              <h2 className="text-lg font-semibold text-primary mb-6 flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Skill Gap Analysis
              </h2>
              <div className="space-y-3">
                {skillGapData.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-sm font-medium">{skill.skill}</p>
                      <span className={`text-xs font-bold ${skill.gap >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {skill.gap > 0 ? '+' : ''}{skill.gap}%
                      </span>
                    </div>
                    <div className="flex gap-2 text-xs text-muted-foreground mb-1">
                      <span>Your avg: {skill.avgScore}%</span>
                      <span className="text-gray-400">•</span>
                      <span>Benchmark: {skill.benchmark}%</span>
                    </div>
                    <div className="flex gap-1 h-2">
                      <div className="flex-1 bg-blue-300 rounded-full" style={{ width: `${skill.avgScore}%` }} title="Your average" />
                      <div className="flex-1 bg-blue-700 rounded-full opacity-30" style={{ width: `${skill.benchmark}%` }} title="Benchmark" />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Pass/Fail Distribution */}
          <Card className="p-6">
            <h2 className="text-lg font-semibold text-primary mb-6">Pass/Fail Distribution by Score Range</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { range: '90-100', count: 45, percentage: 12 },
                { range: '80-89', count: 89, percentage: 23 },
                { range: '70-79', count: 124, percentage: 32 },
                { range: '60-69', count: 85, percentage: 22 },
                { range: '<60', count: 41, percentage: 11 },
              ].map((dist, idx) => (
                <div key={idx} className="text-center p-4 bg-muted rounded-lg">
                  <p className="text-sm font-medium text-primary mb-2">{dist.range}</p>
                  <p className="text-2xl font-bold text-primary mb-1">{dist.count}</p>
                  <div className="w-full bg-gray-300 rounded-full h-2 mb-2">
                    <div
                      className="bg-primary h-2 rounded-full"
                      style={{ width: `${dist.percentage}%` }}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">{dist.percentage}%</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Top Performing Assessments */}
          <Card className="p-6 mt-6">
            <h2 className="text-lg font-semibold text-primary mb-6">Top Performing Assessments</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {assessmentPerformance.slice(0, 3).map((perf, idx) => (
                <Card key={idx} className="p-4 bg-muted">
                  <h3 className="font-semibold text-sm text-primary mb-3">{perf.assessment}</h3>
                  <div className="space-y-2">
                    <div>
                      <p className="text-xs text-muted-foreground">Total Candidates</p>
                      <p className="text-2xl font-bold text-primary">{perf.candidates}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Pass Rate</p>
                      <p className="text-2xl font-bold text-green-600">{perf.passRate}%</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Avg Score</p>
                      <p className="text-2xl font-bold text-primary">{perf.avgScore}%</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </Card>
        </div>
      </main>
    </div>
  )
}
