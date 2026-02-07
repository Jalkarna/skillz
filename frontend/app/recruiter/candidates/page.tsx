'use client'

import { RecruiterSidebar } from '@/components/recruiter-sidebar'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search, AlertTriangle, CheckCircle, Download, Filter } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function CandidatesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterQualification, setFilterQualification] = useState('all')

  const candidates = [
    { id: 1, name: 'John Smith', email: 'john@example.com', position: 'Senior React Developer', score: 94, status: 'Qualified', flags: [], assessment: 'Senior React Developer' },
    { id: 2, name: 'Sarah Lee', email: 'sarah@example.com', position: 'Full Stack Engineer', score: 88, status: 'Qualified', flags: [], assessment: 'Full Stack Engineer' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', position: 'Data Scientist', score: 85, status: 'Qualified', flags: ['Low confidence on 2 questions'], assessment: 'Data Scientist' },
    { id: 4, name: 'Emma Wilson', email: 'emma@example.com', position: 'Senior React Developer', score: 78, status: 'Qualified', flags: [], assessment: 'Senior React Developer' },
    { id: 5, name: 'Alex Chen', email: 'alex@example.com', position: 'UI/UX Designer', score: 82, status: 'Qualified', flags: [], assessment: 'UI/UX Designer' },
    { id: 6, name: 'David Brown', email: 'david@example.com', position: 'Full Stack Engineer', score: 62, status: 'Disqualified', flags: ['Resume-skill mismatch', 'Low overall score'], assessment: 'Full Stack Engineer' },
    { id: 7, name: 'Lisa Park', email: 'lisa@example.com', position: 'Frontend Developer', score: 71, status: 'Pending', flags: [], assessment: 'Frontend Developer' },
    { id: 8, name: 'Tom Harris', email: 'tom@example.com', position: 'DevOps Engineer', score: 45, status: 'Disqualified', flags: ['Possible plagiarism', 'Tab-switching detected'], assessment: 'DevOps Engineer' },
  ]

  const filteredCandidates = candidates.filter(c => {
    const matchesSearch = c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         c.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterQualification === 'all' || c.status === filterQualification
    return matchesSearch && matchesFilter
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Qualified': return 'bg-green-100 text-green-700'
      case 'Disqualified': return 'bg-red-100 text-red-700'
      case 'Pending': return 'bg-yellow-100 text-yellow-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600'
    if (score >= 60) return 'text-orange-600'
    return 'text-red-600'
  }

  const stats = [
    { label: 'Total Candidates', value: candidates.length.toString(), color: 'bg-blue-100' },
    { label: 'Qualified', value: candidates.filter(c => c.status === 'Qualified').length.toString(), color: 'bg-green-100' },
    { label: 'Disqualified', value: candidates.filter(c => c.status === 'Disqualified').length.toString(), color: 'bg-red-100' },
    { label: 'Pending Review', value: candidates.filter(c => c.status === 'Pending').length.toString(), color: 'bg-yellow-100' },
  ]

  return (
    <div className="flex min-h-screen bg-background">
      <RecruiterSidebar />
      
      <main className="flex-1 p-8">
        <div className="max-w-7xl">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-primary mb-2">Candidates</h1>
            <p className="text-muted-foreground">Review and manage all candidates</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, idx) => (
              <Card key={idx} className="p-4">
                <div className={`inline-block p-3 rounded-lg ${stat.color} mb-2`} />
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <p className="text-2xl font-bold text-primary">{stat.value}</p>
              </Card>
            ))}
          </div>

          {/* Filters */}
          <Card className="p-6 mb-6">
            <div className="flex gap-4 flex-wrap items-center">
              <div className="flex-1 min-w-64">
                <div className="relative">
                  <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Search candidates by name or email..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                {['all', 'Qualified', 'Pending', 'Disqualified'].map((status) => (
                  <Button
                    key={status}
                    variant={filterQualification === status ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setFilterQualification(status)}
                  >
                    {status === 'all' ? 'All Candidates' : status}
                  </Button>
                ))}
              </div>
              <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                <Filter className="w-4 h-4" />
                More Filters
              </Button>
            </div>
          </Card>

          {/* Candidates Table */}
          <Card className="p-6">
            {filteredCandidates.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-4 px-4 font-semibold text-primary">Candidate</th>
                      <th className="text-left py-4 px-4 font-semibold text-primary">Position</th>
                      <th className="text-left py-4 px-4 font-semibold text-primary">Score</th>
                      <th className="text-left py-4 px-4 font-semibold text-primary">Status</th>
                      <th className="text-left py-4 px-4 font-semibold text-primary">Flags</th>
                      <th className="text-left py-4 px-4 font-semibold text-primary">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredCandidates.map((candidate) => (
                      <tr key={candidate.id} className="border-b border-border hover:bg-muted/50 transition">
                        <td className="py-4 px-4">
                          <div>
                            <p className="font-medium text-primary">{candidate.name}</p>
                            <p className="text-xs text-muted-foreground">{candidate.email}</p>
                          </div>
                        </td>
                        <td className="py-4 px-4 text-muted-foreground">{candidate.position}</td>
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-2">
                            <div className="w-16 bg-gray-200 rounded-full h-2">
                              <div
                                className={`h-2 rounded-full ${
                                  candidate.score >= 80 ? 'bg-green-600' :
                                  candidate.score >= 60 ? 'bg-orange-600' : 'bg-red-600'
                                }`}
                                style={{ width: `${candidate.score}%` }}
                              />
                            </div>
                            <span className={`font-semibold min-w-fit ${getScoreColor(candidate.score)}`}>
                              {candidate.score}%
                            </span>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <span className={`text-xs px-3 py-1 rounded-full font-medium ${getStatusColor(candidate.status)}`}>
                            {candidate.status}
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          {candidate.flags.length > 0 ? (
                            <div className="flex items-start gap-2">
                              <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                              <div className="text-xs space-y-1">
                                {candidate.flags.map((flag, idx) => (
                                  <div key={idx} className="text-red-600">{flag}</div>
                                ))}
                              </div>
                            </div>
                          ) : (
                            <div className="flex items-center gap-1 text-green-600">
                              <CheckCircle className="w-4 h-4" />
                              <span className="text-xs">No flags</span>
                            </div>
                          )}
                        </td>
                        <td className="py-4 px-4">
                          <Link href={`/recruiter/candidate/${candidate.id}`}>
                            <Button variant="ghost" size="sm">View</Button>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="p-12 text-center">
                <p className="text-muted-foreground mb-4">No candidates found</p>
              </div>
            )}
          </Card>
        </div>
      </main>
    </div>
  )
}
