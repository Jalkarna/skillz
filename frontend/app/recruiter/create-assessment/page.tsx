'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import RecruiterNav from '@/components/recruiter-nav'
import { useState } from 'react'

export default function CreateAssessmentPage() {
  const [jobDescription, setJobDescription] = useState('')
  const [assessmentName, setAssessmentName] = useState('')
  const [duration, setDuration] = useState('60')
  const [difficulty, setDifficulty] = useState('intermediate')
  const [activeTab, setActiveTab] = useState('job-description')
  const [generatedQuestions, setGeneratedQuestions] = useState(false)

  const handleGenerateAssessment = () => {
    if (jobDescription && assessmentName) {
      setGeneratedQuestions(true)
      setActiveTab('preview')
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <RecruiterNav />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-primary mb-8">Create Assessment</h1>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="job-description">Job Description</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
            <TabsTrigger value="preview" disabled={!generatedQuestions}>Preview</TabsTrigger>
          </TabsList>

          {/* Job Description Tab */}
          <TabsContent value="job-description" className="mt-6">
            <Card className="p-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Assessment Name</Label>
                  <Input
                    id="name"
                    placeholder="e.g., Senior Backend Engineer"
                    value={assessmentName}
                    onChange={e => setAssessmentName(e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="jd">Job Description</Label>
                  <Textarea
                    id="jd"
                    placeholder="Paste the full job description here. Our AI will extract skills and generate questions..."
                    rows={10}
                    value={jobDescription}
                    onChange={e => setJobDescription(e.target.value)}
                  />
                  <p className="text-xs text-muted-foreground mt-2">
                    The more detailed your job description, the better our AI-generated questions.
                  </p>
                </div>

                <Button onClick={handleGenerateAssessment} disabled={!jobDescription || !assessmentName}>
                  Generate Assessment
                </Button>
              </div>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="mt-6">
            <Card className="p-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="duration">Duration (minutes)</Label>
                  <Input
                    id="duration"
                    type="number"
                    value={duration}
                    onChange={e => setDuration(e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="difficulty">Difficulty Level</Label>
                  <select
                    id="difficulty"
                    className="w-full px-3 py-2 border border-input rounded-md"
                    value={difficulty}
                    onChange={e => setDifficulty(e.target.value)}
                  >
                    <option value="easy">Easy</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="hard">Hard</option>
                  </select>
                </div>

                <div>
                  <Label>Section Weightage</Label>
                  <div className="space-y-2 mt-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Objective Questions</span>
                      <input type="number" className="w-16 px-2 py-1 border border-input rounded" defaultValue={40} /> %
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Coding Challenges</span>
                      <input type="number" className="w-16 px-2 py-1 border border-input rounded" defaultValue={40} /> %
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Subjective Questions</span>
                      <input type="number" className="w-16 px-2 py-1 border border-input rounded" defaultValue={20} /> %
                    </div>
                  </div>
                </div>

                <div>
                  <Label htmlFor="cutoff">Cut-off Score (%)</Label>
                  <Input
                    id="cutoff"
                    type="number"
                    defaultValue={60}
                  />
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Preview Tab */}
          <TabsContent value="preview" className="mt-6">
            {generatedQuestions && (
              <div className="space-y-4">
                <Card className="p-6">
                  <h2 className="text-xl font-bold text-primary mb-4">Generated Questions Preview</h2>
                  
                  {/* Objective Questions */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-foreground mb-3">Objective Questions</h3>
                    <div className="space-y-3">
                      <div className="border border-border p-4 rounded">
                        <p className="font-medium text-foreground">Q1: What is the difference between REST and GraphQL?</p>
                        <p className="text-sm text-muted-foreground mt-1">MCQ • 1 min</p>
                      </div>
                      <div className="border border-border p-4 rounded">
                        <p className="font-medium text-foreground">Q2: Explain database indexing and its benefits</p>
                        <p className="text-sm text-muted-foreground mt-1">MCQ • 2 min</p>
                      </div>
                    </div>
                  </div>

                  {/* Coding Questions */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-foreground mb-3">Coding Challenges</h3>
                    <div className="space-y-3">
                      <div className="border border-border p-4 rounded">
                        <p className="font-medium text-foreground">Q3: Reverse a linked list</p>
                        <p className="text-sm text-muted-foreground mt-1">Coding • 15 min</p>
                      </div>
                      <div className="border border-border p-4 rounded">
                        <p className="font-medium text-foreground">Q4: Implement a cache with LRU eviction</p>
                        <p className="text-sm text-muted-foreground mt-1">Coding • 20 min</p>
                      </div>
                    </div>
                  </div>

                  {/* Subjective Questions */}
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Subjective Questions</h3>
                    <div className="space-y-3">
                      <div className="border border-border p-4 rounded">
                        <p className="font-medium text-foreground">Q5: Describe your approach to designing a microservices architecture</p>
                        <p className="text-sm text-muted-foreground mt-1">Essay • 10 min</p>
                      </div>
                    </div>
                  </div>
                </Card>

                <div className="flex gap-2">
                  <Button variant="outline">Regenerate Questions</Button>
                  <Button>Publish Assessment</Button>
                </div>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
