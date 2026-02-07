'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function ResultsTab() {
  const assessments = [
    {
      id: 1,
      title: 'Senior Backend Engineer',
      topScorer: 'Alice Johnson',
      topScore: 92,
      avgScore: 82,
      completionRate: 71,
      passRate: 60,
    },
    {
      id: 2,
      title: 'Frontend Developer',
      topScorer: 'Emma Chen',
      topScore: 95,
      avgScore: 76,
      completionRate: 79,
      passRate: 54,
    },
  ]

  return (
    <div className="space-y-6">
      {assessments.map(assessment => (
        <Card key={assessment.id} className="p-6">
          <h3 className="text-lg font-semibold text-primary mb-4">{assessment.title}</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
            <div>
              <div className="text-sm text-muted-foreground">Top Scorer</div>
              <div className="font-semibold text-foreground">{assessment.topScorer}</div>
              <div className="text-sm text-primary font-bold">{assessment.topScore}/100</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Avg Score</div>
              <div className="text-2xl font-bold text-primary">{assessment.avgScore}</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Completion Rate</div>
              <div className="text-2xl font-bold text-primary">{assessment.completionRate}%</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Pass Rate</div>
              <div className="text-2xl font-bold text-primary">{assessment.passRate}%</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Qualified</div>
              <div className="text-2xl font-bold text-green-700">18/30</div>
            </div>
          </div>

          <div className="flex gap-2">
            <Button variant="outline" size="sm">View Leaderboard</Button>
            <Button variant="outline" size="sm">Export Report</Button>
          </div>
        </Card>
      ))}
    </div>
  )
}
