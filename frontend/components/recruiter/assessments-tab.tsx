'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'

export default function AssessmentsTab() {
  const assessments = [
    {
      id: 1,
      title: 'Senior Backend Engineer',
      status: 'Active',
      created: '2026-02-01',
      candidates: 45,
      attempted: 32,
      qualified: 18,
    },
    {
      id: 2,
      title: 'Frontend Developer',
      status: 'Active',
      created: '2026-01-28',
      candidates: 28,
      attempted: 22,
      qualified: 12,
    },
    {
      id: 3,
      title: 'Data Scientist',
      status: 'Draft',
      created: '2026-02-03',
      candidates: 0,
      attempted: 0,
      qualified: 0,
    },
    {
      id: 4,
      title: 'DevOps Engineer',
      status: 'Closed',
      created: '2026-01-15',
      candidates: 52,
      attempted: 50,
      qualified: 28,
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-700'
      case 'Draft':
        return 'bg-yellow-100 text-yellow-700'
      case 'Closed':
        return 'bg-gray-100 text-gray-700'
      default:
        return 'bg-gray-100 text-gray-700'
    }
  }

  return (
    <div className="space-y-4">
      {assessments.map(assessment => (
        <Card key={assessment.id} className="p-6">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-lg font-semibold text-primary">{assessment.title}</h3>
                <span className={`text-xs font-semibold px-2 py-1 rounded ${getStatusColor(assessment.status)}`}>
                  {assessment.status}
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-3">Created {assessment.created}</p>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <div className="font-semibold text-foreground">{assessment.candidates}</div>
                  <div className="text-muted-foreground">Candidates Invited</div>
                </div>
                <div>
                  <div className="font-semibold text-foreground">{assessment.attempted}</div>
                  <div className="text-muted-foreground">Attempts</div>
                </div>
                <div>
                  <div className="font-semibold text-foreground">{assessment.qualified}</div>
                  <div className="text-muted-foreground">Qualified</div>
                </div>
              </div>
            </div>
            <div className="flex gap-2 ml-4">
              <Link href={`/recruiter/assessment/${assessment.id}`}>
                <Button variant="outline" size="sm">View</Button>
              </Link>
              <Button variant="outline" size="sm">Share</Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}
