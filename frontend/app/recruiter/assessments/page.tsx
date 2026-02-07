'use client'

import { RecruiterSidebar } from '@/components/recruiter-sidebar'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { FileText, Users, Clock, Eye, Copy, Trash2, Search } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function AssessmentsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')

  const assessments = [
    { id: 1, name: 'Senior React Developer', difficulty: 'Hard', duration: 60, candidates: 34, attempts: 28, status: 'Active', created: '2 days ago', link: 'skillz.io/assess/sr-react-dev' },
    { id: 2, name: 'Full Stack Engineer', difficulty: 'Hard', duration: 90, candidates: 28, attempts: 24, status: 'Active', created: '5 days ago', link: 'skillz.io/assess/fullstack-eng' },
    { id: 3, name: 'Frontend Developer', difficulty: 'Medium', duration: 45, candidates: 45, attempts: 42, status: 'Active', created: '1 week ago', link: 'skillz.io/assess/frontend-dev' },
    { id: 4, name: 'UI/UX Designer', difficulty: 'Medium', duration: 75, candidates: 12, attempts: 12, status: 'Closed', created: '2 weeks ago', link: 'skillz.io/assess/ui-ux-design' },
    { id: 5, name: 'Data Scientist', difficulty: 'Hard', duration: 120, candidates: 45, attempts: 38, status: 'Active', created: '1 week ago', link: 'skillz.io/assess/data-scientist' },
    { id: 6, name: 'DevOps Engineer', difficulty: 'Hard', duration: 90, candidates: 18, attempts: 15, status: 'Draft', created: '3 days ago', link: 'skillz.io/assess/devops-eng' },
  ]

  const filteredAssessments = assessments.filter(a => {
    const matchesSearch = a.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterStatus === 'all' || a.status === filterStatus
    return matchesSearch && matchesFilter
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-700'
      case 'Draft': return 'bg-blue-100 text-blue-700'
      case 'Closed': return 'bg-gray-100 text-gray-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-600'
      case 'Medium': return 'text-orange-600'
      case 'Hard': return 'text-red-600'
      default: return 'text-gray-600'
    }
  }

  return (
    <div className="flex min-h-screen bg-background">
      <RecruiterSidebar />
      
      <main className="flex-1 p-8">
        <div className="max-w-7xl">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold text-primary mb-2">Assessments</h1>
              <p className="text-muted-foreground">Create and manage skill assessments</p>
            </div>
            <Link href="/recruiter/create-assessment">
              <Button size="lg">Create Assessment</Button>
            </Link>
          </div>

          {/* Filters */}
          <Card className="p-6 mb-6">
            <div className="flex gap-4 flex-wrap items-center">
              <div className="flex-1 min-w-64">
                <div className="relative">
                  <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Search assessments..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                {['all', 'Active', 'Draft', 'Closed'].map((status) => (
                  <Button
                    key={status}
                    variant={filterStatus === status ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setFilterStatus(status)}
                  >
                    {status === 'all' ? 'All' : status}
                  </Button>
                ))}
              </div>
            </div>
          </Card>

          {/* Assessments Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAssessments.length > 0 ? (
              filteredAssessments.map((assessment) => (
                <Card key={assessment.id} className="p-6 flex flex-col hover:border-primary/50 transition">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <FileText className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary text-sm">{assessment.name}</h3>
                        <p className="text-xs text-muted-foreground">{assessment.created}</p>
                      </div>
                    </div>
                    <span className={`text-xs px-3 py-1 rounded-full font-medium ${getStatusColor(assessment.status)}`}>
                      {assessment.status}
                    </span>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{assessment.duration} minutes</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className={`font-semibold ${getDifficultyColor(assessment.difficulty)}`}>
                        {assessment.difficulty}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mb-4 p-3 bg-muted rounded-lg">
                    <div>
                      <p className="text-xs text-muted-foreground">Candidates</p>
                      <p className="text-lg font-bold text-primary">{assessment.candidates}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Attempts</p>
                      <p className="text-lg font-bold text-primary">{assessment.attempts}</p>
                    </div>
                  </div>

                  <div className="space-y-2 pt-4 border-t border-border mt-auto">
                    <Link href={`/recruiter/assessment/${assessment.id}`}>
                      <Button variant="outline" className="w-full justify-center gap-2 bg-transparent" size="sm">
                        <Eye className="w-4 h-4" />
                        View Details
                      </Button>
                    </Link>
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="flex-1 gap-2"
                        onClick={() => {
                          navigator.clipboard.writeText(assessment.link)
                          alert('Link copied!')
                        }}
                      >
                        <Copy className="w-4 h-4" />
                        Copy Link
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))
            ) : (
              <div className="col-span-full p-12 text-center">
                <FileText className="w-16 h-16 mx-auto text-muted-foreground/30 mb-4" />
                <p className="text-muted-foreground mb-4">No assessments found</p>
                <Link href="/recruiter/create-assessment">
                  <Button>Create Your First Assessment</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
