'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function DemoPage() {
  const router = useRouter()

  const handleQuickLogin = (role: 'recruiter' | 'candidate' | 'admin') => {
    localStorage.setItem('user', JSON.stringify({ name: 'Demo User', email: 'demo@example.com', role }))
    localStorage.setItem('isLoggedIn', 'true')
    
    switch (role) {
      case 'recruiter':
        router.push('/recruiter/dashboard')
        break
      case 'candidate':
        router.push('/candidate/dashboard')
        break
      case 'admin':
        router.push('/admin/dashboard')
        break
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/">
            <div className="text-2xl font-bold text-primary">Skillz Demo</div>
          </Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-primary mb-8 text-center">Platform Demo</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Recruiter Demo */}
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-bold text-primary mb-3">Recruiter Demo</h2>
            <p className="text-muted-foreground mb-6">
              Create assessments, manage candidates, and view detailed analytics.
            </p>
            <Button onClick={() => handleQuickLogin('recruiter')} className="w-full mb-2">
              Login as Recruiter
            </Button>
            <Link href="/recruiter/create-assessment">
              <Button variant="outline" className="w-full bg-transparent">
                Assessment Builder
              </Button>
            </Link>
          </Card>

          {/* Candidate Demo */}
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-bold text-primary mb-3">Candidate Demo</h2>
            <p className="text-muted-foreground mb-6">
              View assessments, complete tests, and see detailed performance reports.
            </p>
            <Button onClick={() => handleQuickLogin('candidate')} className="w-full mb-2">
              Login as Candidate
            </Button>
            <Link href="/candidate/assessment/1">
              <Button variant="outline" className="w-full bg-transparent">
                Take Assessment
              </Button>
            </Link>
          </Card>

          {/* Admin Demo */}
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-bold text-primary mb-3">Admin Demo</h2>
            <p className="text-muted-foreground mb-6">
              Monitor platform health, manage users, and view system analytics.
            </p>
            <Button onClick={() => handleQuickLogin('admin')} className="w-full mb-2">
              Login as Admin
            </Button>
            <Link href="/admin/dashboard">
              <Button variant="outline" className="w-full bg-transparent">
                Admin Panel
              </Button>
            </Link>
          </Card>
        </div>

        <Card className="p-8 bg-muted">
          <h2 className="text-xl font-bold text-primary mb-4">Quick Navigation</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            <Link href="/">
              <Button variant="outline" className="w-full bg-transparent">Home</Button>
            </Link>
            <Link href="/login">
              <Button variant="outline" className="w-full bg-transparent">Login</Button>
            </Link>
            <Link href="/signup">
              <Button variant="outline" className="w-full bg-transparent">Signup</Button>
            </Link>
            <Link href="/recruiter/dashboard">
              <Button variant="outline" className="w-full bg-transparent">Recruiter Dashboard</Button>
            </Link>
            <Link href="/candidate/dashboard">
              <Button variant="outline" className="w-full bg-transparent">Candidate Dashboard</Button>
            </Link>
            <Link href="/candidate/result/1">
              <Button variant="outline" className="w-full bg-transparent">Result Sample</Button>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  )
}
