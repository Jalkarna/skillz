'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function CandidatesTab() {
  const candidates = [
    {
      id: 1,
      name: 'Alice Johnson',
      email: 'alice@example.com',
      assessment: 'Senior Backend Engineer',
      score: 92,
      status: 'Qualified',
      flags: [],
    },
    {
      id: 2,
      name: 'Bob Smith',
      email: 'bob@example.com',
      assessment: 'Senior Backend Engineer',
      score: 78,
      status: 'Qualified',
      flags: ['Low confidence in databases'],
    },
    {
      id: 3,
      name: 'Carol Davis',
      email: 'carol@example.com',
      assessment: 'Frontend Developer',
      score: 45,
      status: 'Not Qualified',
      flags: ['Resume–skill mismatch', 'Low attempt score'],
    },
    {
      id: 4,
      name: 'David Wilson',
      email: 'david@example.com',
      assessment: 'Senior Backend Engineer',
      score: 88,
      status: 'Qualified',
      flags: [],
    },
  ]

  const getStatusColor = (status: string) => {
    return status === 'Qualified' ? 'text-green-700' : 'text-red-700'
  }

  return (
    <div className="space-y-4">
      {candidates.map(candidate => (
        <Card key={candidate.id} className="p-6">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-primary">{candidate.name}</h3>
              <p className="text-sm text-muted-foreground">{candidate.email}</p>
              <p className="text-sm text-muted-foreground mt-1">{candidate.assessment}</p>
              {candidate.flags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {candidate.flags.map((flag, idx) => (
                    <span key={idx} className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded">
                      ⚠ {flag}
                    </span>
                  ))}
                </div>
              )}
            </div>
            <div className="text-right ml-4">
              <div className="text-3xl font-bold text-primary mb-1">{candidate.score}</div>
              <div className={`font-semibold mb-3 ${getStatusColor(candidate.status)}`}>{candidate.status}</div>
              <Button variant="outline" size="sm">View Details</Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}
