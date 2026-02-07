'use client'

import { CandidateSidebar } from '@/components/candidate-sidebar'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Download, FileText, TrendingUp } from 'lucide-react'
import Link from 'next/link'

export default function ResultsPage() {
  const results = [
    {
      id: 1,
      title: 'Data Scientist',
      date: '2026-02-01',
      score: 88,
      status: 'Qualified',
      skills: ['Python', 'SQL', 'Statistics', 'ML Algorithms'],
      sections: [
        { name: 'Objective Questions', score: 85, weight: 30 },
        { name: 'Coding Challenge', score: 90, weight: 40 },
        { name: 'Essay/Problem Solving', score: 88, weight: 30 },
      ],
    },
    {
      id: 2,
      title: 'DevOps Engineer',
      date: '2026-01-25',
      score: 92,
      status: 'Qualified',
      skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD'],
      sections: [
        { name: 'Objective Questions', score: 88, weight: 30 },
        { name: 'Practical Tasks', score: 95, weight: 40 },
        { name: 'Architecture Design', score: 92, weight: 30 },
      ],
    },
    {
      id: 3,
      title: 'Frontend Developer',
      date: '2026-01-20',
      score: 85,
      status: 'Qualified',
      skills: ['React', 'TypeScript', 'CSS', 'Testing'],
      sections: [
        { name: 'Objective Questions', score: 82, weight: 30 },
        { name: 'Coding Challenge', score: 88, weight: 40 },
        { name: 'UI Implementation', score: 85, weight: 30 },
      ],
    },
  ]

  return (
    <div className="flex min-h-screen bg-background">
      <CandidateSidebar />

      <main className="flex-1 p-8">
        <div className="max-w-5xl">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-primary mb-2">My Results</h1>
            <p className="text-muted-foreground">View and download your assessment reports</p>
          </div>

          {/* Results Cards */}
          <div className="space-y-6">
            {results.map((result) => (
              <Card key={result.id} className="p-6 hover:border-primary/50 transition">
                {/* Header */}
                <div className="flex items-start justify-between mb-6 pb-6 border-b border-border">
                  <div>
                    <h2 className="text-2xl font-bold text-primary mb-2">{result.title}</h2>
                    <p className="text-sm text-muted-foreground">Completed on {result.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-5xl font-bold text-primary mb-2">{result.score}%</p>
                    <span className="inline-block px-4 py-1 bg-green-100 text-green-700 text-sm rounded-full font-medium">
                      {result.status}
                    </span>
                  </div>
                </div>

                {/* Skills */}
                <div className="mb-6">
                  <p className="text-sm font-semibold text-primary mb-3">Skills Assessed:</p>
                  <div className="flex flex-wrap gap-2">
                    {result.skills.map((skill, idx) => (
                      <span key={idx} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Section Breakdown */}
                <div className="mb-6">
                  <p className="text-sm font-semibold text-primary mb-4">Section-wise Performance:</p>
                  <div className="space-y-3">
                    {result.sections.map((section, idx) => (
                      <div key={idx}>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex-1">
                            <p className="text-sm font-medium">{section.name}</p>
                            <p className="text-xs text-muted-foreground">Weight: {section.weight}%</p>
                          </div>
                          <span className="font-bold text-primary">{section.score}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-primary h-2 rounded-full"
                            style={{ width: `${section.score}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-6 border-t border-border">
                  <Link href={`/candidate/result/${result.id}`}>
                    <Button className="gap-2">
                      <FileText className="w-4 h-4" />
                      View Detailed Report
                    </Button>
                  </Link>
                  <Button variant="outline" className="gap-2 bg-transparent">
                    <Download className="w-4 h-4" />
                    Download PDF
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Summary Card */}
          <Card className="p-6 mt-8 bg-primary/5 border-primary/20">
            <h2 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Your Assessment Summary
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Total Assessments</p>
                <p className="text-3xl font-bold text-primary">{results.length}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Average Score</p>
                <p className="text-3xl font-bold text-primary">
                  {Math.round(results.reduce((sum, r) => sum + r.score, 0) / results.length)}%
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Qualified Assessments</p>
                <p className="text-3xl font-bold text-green-600">
                  {results.filter(r => r.status === 'Qualified').length}
                </p>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  )
}
