'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">Skillz</div>
          <div className="flex gap-4">
            <Link href="/login">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link href="/signup">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-primary mb-6 text-balance">
            Skill-Based Hiring That's Fair and Transparent
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
            Move beyond resumes. Use AI-generated assessments to evaluate real skills. Reduce bias. Hire better.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/signup?role=recruiter">
              <Button size="lg" className="px-8">
                Create Assessment
              </Button>
            </Link>
            <Link href="/signup?role=candidate">
              <Button size="lg" variant="outline" className="px-8 bg-transparent">
                Take Assessment
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-muted py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <p className="text-muted-foreground">Fair Evaluation</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">AI-Powered</div>
              <p className="text-muted-foreground">Assessments Generated from Job Descriptions</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">Anti-Cheat</div>
              <p className="text-muted-foreground">Real Skills, Real Results</p>
            </div>
          </div>
        </div>
      </section>

      {/* For Recruiters Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-primary mb-12 text-center">For Recruiters</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-6">
            <h3 className="text-xl font-semibold text-primary mb-3">AI Assessment Builder</h3>
            <p className="text-muted-foreground">Paste your job description. Our AI generates fair, skill-focused questions in seconds.</p>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-semibold text-primary mb-3">Fair Evaluation</h3>
            <p className="text-muted-foreground">Every candidate gets the same assessment. Skills matter. Background doesn't.</p>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-semibold text-primary mb-3">Transparency</h3>
            <p className="text-muted-foreground">See exactly why candidates qualify or don't. Full score breakdowns and skill analysis.</p>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-semibold text-primary mb-3">Anti-Cheat Detection</h3>
            <p className="text-muted-foreground">Tab switching, time anomalies, and plagiarism detection ensure assessment integrity.</p>
          </Card>
        </div>
      </section>

      {/* For Candidates Section */}
      <section className="bg-muted py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">For Candidates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 bg-background">
              <h3 className="text-xl font-semibold text-primary mb-3">Show Your Skills</h3>
              <p className="text-muted-foreground">No resume gatekeeping. Prove what you can do with real technical assessments.</p>
            </Card>
            <Card className="p-6 bg-background">
              <h3 className="text-xl font-semibold text-primary mb-3">Fair Evaluation</h3>
              <p className="text-muted-foreground">Everyone solves the same problems. Your background doesn't matter. Your skills do.</p>
            </Card>
            <Card className="p-6 bg-background">
              <h3 className="text-xl font-semibold text-primary mb-3">Detailed Feedback</h3>
              <p className="text-muted-foreground">Get comprehensive reports showing your strengths, weaknesses, and skill levels.</p>
            </Card>
            <Card className="p-6 bg-background">
              <h3 className="text-xl font-semibold text-primary mb-3">Multiple Question Types</h3>
              <p className="text-muted-foreground">Coding challenges, objective questions, and essay-based assessments in one place.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-primary mb-12 text-center">Use Cases</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-primary mb-2">Tech Hiring</h3>
            <p className="text-sm text-muted-foreground">Screen developers, engineers, and data scientists with coding challenges and technical questions.</p>
          </Card>
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-primary mb-2">Campus Recruitment</h3>
            <p className="text-sm text-muted-foreground">Fair, unbiased evaluation of fresh graduates at scale.</p>
          </Card>
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-primary mb-2">Internal Promotions</h3>
            <p className="text-sm text-muted-foreground">Assess skills objectively for advancement opportunities within your organization.</p>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Hiring?</h2>
          <p className="text-lg mb-8 text-balance">Join hundreds of companies using skill-based hiring to find better talent, faster.</p>
          <Link href="/signup?role=recruiter">
            <Button size="lg" variant="secondary" className="px-8">
              Start Your First Assessment Today
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="text-lg font-bold text-primary">Skillz</div>
            <div className="text-sm text-muted-foreground">© 2026 Skillz. Fair hiring starts here.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
