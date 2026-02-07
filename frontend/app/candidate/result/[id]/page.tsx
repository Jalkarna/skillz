'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import CandidateNav from '@/components/candidate-nav'

export default function ResultPage({ params }: { params: { id: string } }) {
  const result = {
    assessmentTitle: 'Senior Backend Engineer',
    company: 'TechCorp Inc.',
    overallScore: 87,
    status: 'Qualified',
    statusColor: 'bg-green-100 text-green-700',
    completedOn: '2026-02-05',
    timeSpent: '58 minutes',
  }

  const sectionScores = [
    {
      name: 'Objective Questions',
      score: 85,
      maxScore: 100,
      questions: 5,
      weight: '40%',
    },
    {
      name: 'Coding Challenges',
      score: 90,
      maxScore: 100,
      questions: 2,
      weight: '40%',
    },
    {
      name: 'Subjective Questions',
      score: 80,
      maxScore: 100,
      questions: 1,
      weight: '20%',
    },
  ]

  const skillBreakdown = [
    { skill: 'System Design', score: 88, level: 'Advanced' },
    { skill: 'API Design', score: 92, level: 'Advanced' },
    { skill: 'Database Optimization', score: 85, level: 'Advanced' },
    { skill: 'Microservices', score: 79, level: 'Intermediate' },
    { skill: 'Code Quality', score: 83, level: 'Advanced' },
  ]

  return (
    <div className="min-h-screen bg-background">
      <CandidateNav />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-primary mb-2">{result.assessmentTitle}</h1>
          <p className="text-muted-foreground">{result.company}</p>
        </div>

        {/* Overall Score */}
        <Card className="p-12 mb-8 text-center bg-gradient-to-br from-primary/5 to-primary/10">
          <div className="mb-4">
            <div className="text-6xl font-bold text-primary mb-2">{result.overallScore}</div>
            <div className={`inline-block px-4 py-2 rounded-full font-semibold ${result.statusColor}`}>
              {result.status}
            </div>
          </div>
          <p className="text-muted-foreground">
            Completed on {result.completedOn} • Time spent: {result.timeSpent}
          </p>
        </Card>

        {/* Section Scores */}
        <Card className="p-6 mb-8">
          <h2 className="text-xl font-bold text-primary mb-6">Section-wise Performance</h2>
          <div className="space-y-6">
            {sectionScores.map((section, idx) => (
              <div key={idx} className="border-b border-border pb-6 last:border-0">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-foreground">{section.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {section.questions} questions • {section.weight} weightage
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">
                      {section.score}/{section.maxScore}
                    </div>
                  </div>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full"
                    style={{ width: `${(section.score / section.maxScore) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Skill Breakdown */}
        <Card className="p-6 mb-8">
          <h2 className="text-xl font-bold text-primary mb-6">Skill Breakdown</h2>
          <div className="space-y-4">
            {skillBreakdown.map((skill, idx) => (
              <div key={idx} className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-medium text-foreground">{skill.skill}</h3>
                    <span className="text-sm text-muted-foreground">{skill.level}</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        skill.score >= 85 ? 'bg-green-600' : skill.score >= 70 ? 'bg-yellow-600' : 'bg-red-600'
                      }`}
                      style={{ width: `${skill.score}%` }}
                    ></div>
                  </div>
                </div>
                <div className="ml-4 text-right">
                  <span className="font-bold text-primary">{skill.score}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Strengths & Weaknesses */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="p-6">
            <h2 className="text-lg font-bold text-green-700 mb-4">Strengths</h2>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span className="text-foreground">Excellent system design and architecture skills</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span className="text-foreground">Strong API design practices and REST principles</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span className="text-foreground">Good database optimization knowledge</span>
              </li>
            </ul>
          </Card>

          <Card className="p-6">
            <h2 className="text-lg font-bold text-yellow-700 mb-4">Areas to Improve</h2>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">→</span>
                <span className="text-foreground">Deepen knowledge in microservices patterns</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">→</span>
                <span className="text-foreground">Practice more complex coding scenarios</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">→</span>
                <span className="text-foreground">Study distributed systems concepts</span>
              </li>
            </ul>
          </Card>
        </div>

        {/* Actions */}
        <div className="flex gap-4 justify-center">
          <Link href="/candidate/dashboard">
            <Button variant="outline">Back to Dashboard</Button>
          </Link>
          <Button>Download Report (PDF)</Button>
        </div>
      </div>
    </div>
  )
}
