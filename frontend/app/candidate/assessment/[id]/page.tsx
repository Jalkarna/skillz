'use client'

import React from "react"

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Textarea } from '@/components/ui/textarea'
import CandidateNav from '@/components/candidate-nav'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AssessmentAttemptPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [timeLeft, setTimeLeft] = useState(3600) // 60 minutes in seconds
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [activeSection, setActiveSection] = useState('objective')

  const sections = {
    objective: [
      {
        id: 1,
        type: 'mcq',
        question: 'What is the difference between REST and GraphQL?',
        options: [
          'REST is for web, GraphQL for APIs',
          'GraphQL is a query language for APIs, REST is an architectural style',
          'They are the same thing',
          'GraphQL is outdated',
        ],
      },
      {
        id: 2,
        type: 'mcq',
        question: 'Which of these is a principle of SOLID design?',
        options: [
          'Single Responsibility Principle',
          'Open-Closed Principle',
          'Liskov Substitution Principle',
          'All of the above',
        ],
      },
    ],
    coding: [
      {
        id: 3,
        type: 'code',
        question: 'Reverse a linked list',
        description: 'Given a singly linked list, reverse it.',
        testCases: [
          { input: '1 -> 2 -> 3', expected: '3 -> 2 -> 1' },
        ],
      },
      {
        id: 4,
        type: 'code',
        question: 'Two Sum Problem',
        description: 'Given an array of integers, find two numbers that add up to a target.',
        testCases: [
          { input: '[2, 7, 11, 15], target=9', expected: '[0, 1]' },
        ],
      },
    ],
    subjective: [
      {
        id: 5,
        type: 'essay',
        question: 'Design a microservices architecture',
        description: 'Describe how you would design a microservices architecture for an e-commerce platform.',
      },
    ],
  }

  const allQuestions = [...sections.objective, ...sections.coding, ...sections.subjective]

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 0) {
          clearInterval(timer)
          handleSubmitAssessment()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const handleAnswerChange = (answer: string) => {
    setAnswers(prev => ({ ...prev, [allQuestions[currentQuestion].id]: answer }))
  }

  const handleNext = () => {
    if (currentQuestion < allQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleSubmitAssessment = () => {
    localStorage.setItem('assessment_' + params.id, JSON.stringify(answers))
    router.push(`/candidate/result/${params.id}`)
  }

  const currentQ = allQuestions[currentQuestion]
  const progressPercentage = ((currentQuestion + 1) / allQuestions.length) * 100

  return (
    <div className="min-h-screen bg-background">
      <CandidateNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header with Timer */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-primary">Assessment</h1>
          <div className={`text-2xl font-bold ${timeLeft < 300 ? 'text-red-600' : 'text-primary'}`}>
            {formatTime(timeLeft)}
          </div>
        </div>

        {/* Progress */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium">
              Question {currentQuestion + 1} of {allQuestions.length}
            </span>
            <span className="text-sm text-muted-foreground">{Math.round(progressPercentage)}%</span>
          </div>
          <Progress value={progressPercentage} className="h-2" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <Card className="p-8">
              {/* Question */}
              <h2 className="text-xl font-bold text-primary mb-6">{currentQ.question}</h2>

              {currentQ.type === 'mcq' && (
                <div className="space-y-3 mb-8">
                  {currentQ.options?.map((option, idx) => (
                    <label key={idx} className="flex items-center p-3 border border-border rounded hover:bg-muted cursor-pointer">
                      <input
                        type="radio"
                        name={`question-${currentQ.id}`}
                        value={option}
                        checked={answers[currentQ.id] === option}
                        onChange={e => handleAnswerChange(e.target.value)}
                        className="mr-3"
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              )}

              {currentQ.type === 'code' && (
                <div className="space-y-4 mb-8">
                  <div>
                    <p className="text-sm font-medium mb-2">Description</p>
                    <p className="text-muted-foreground">{currentQ.description}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">Test Cases</p>
                    <div className="bg-muted p-3 rounded text-sm font-mono">
                      {currentQ.testCases?.[0]?.input}
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="code">Code</Label>
                    <Textarea
                      id="code"
                      placeholder="Write your code here..."
                      value={answers[currentQ.id] || ''}
                      onChange={e => handleAnswerChange(e.target.value)}
                      rows={8}
                      className="font-mono"
                    />
                  </div>
                  <Button variant="outline">Run Tests</Button>
                </div>
              )}

              {currentQ.type === 'essay' && (
                <div className="space-y-4 mb-8">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">{currentQ.description}</p>
                  </div>
                  <Textarea
                    placeholder="Type your answer here..."
                    value={answers[currentQ.id] || ''}
                    onChange={e => handleAnswerChange(e.target.value)}
                    rows={8}
                  />
                </div>
              )}

              {/* Navigation */}
              <div className="flex gap-3 justify-between">
                <Button variant="outline" onClick={handlePrevious} disabled={currentQuestion === 0}>
                  Previous
                </Button>
                {currentQuestion === allQuestions.length - 1 ? (
                  <Button onClick={handleSubmitAssessment}>Submit Assessment</Button>
                ) : (
                  <Button onClick={handleNext}>Next</Button>
                )}
              </div>
            </Card>
          </div>

          {/* Sidebar - Question Navigator */}
          <div>
            <Card className="p-4">
              <h3 className="font-bold text-primary mb-4">Questions</h3>
              <Tabs value={activeSection} onValueChange={setActiveSection} className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-4">
                  <TabsTrigger value="objective" className="text-xs">Obj</TabsTrigger>
                  <TabsTrigger value="coding" className="text-xs">Code</TabsTrigger>
                  <TabsTrigger value="subjective" className="text-xs">Subj</TabsTrigger>
                </TabsList>

                {Object.entries(sections).map(([key, questions]) => (
                  <TabsContent key={key} value={key} className="mt-0">
                    <div className="space-y-2">
                      {questions.map((q, idx) => {
                        const globalIdx = allQuestions.indexOf(q)
                        const isAnswered = answers[q.id]
                        return (
                          <button
                            key={q.id}
                            onClick={() => setCurrentQuestion(globalIdx)}
                            className={`w-full text-left p-2 rounded text-sm ${
                              currentQuestion === globalIdx
                                ? 'bg-primary text-primary-foreground'
                                : isAnswered
                                  ? 'bg-green-100 text-green-700'
                                  : 'bg-muted'
                            }`}
                          >
                            Q{globalIdx + 1}
                          </button>
                        )
                      })}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

function Label({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="text-sm font-medium">
      {children}
    </label>
  )
}
