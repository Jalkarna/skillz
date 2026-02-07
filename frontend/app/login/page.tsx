'use client'

import React from "react"

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function LoginPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.email || !formData.password) {
      alert('Please fill in all fields')
      return
    }
    setIsLoading(true)
    // Simulate login with mock credentials
    setTimeout(() => {
      // Mock users database
      const mockUsers: Record<string, { password: string; role: string; name: string }> = {
        'recruiter@skillz.com': { password: 'recruiter123', role: 'recruiter', name: 'Sarah Chen' },
        'candidate@skillz.com': { password: 'candidate123', role: 'candidate', name: 'Alex Johnson' },
        'admin@skillz.com': { password: 'admin123', role: 'admin', name: 'Admin User' },
      }

      const mockUser = mockUsers[formData.email]
      if (mockUser && mockUser.password === formData.password) {
        const userData = { name: mockUser.name, email: formData.email, role: mockUser.role }
        localStorage.setItem('user', JSON.stringify(userData))
        localStorage.setItem('isLoggedIn', 'true')
        
        // Use window.location for a full page reload to ensure role-based UI loads correctly
        if (mockUser.role === 'recruiter') {
          window.location.href = '/recruiter/dashboard'
        } else if (mockUser.role === 'admin') {
          window.location.href = '/admin/dashboard'
        } else {
          window.location.href = '/candidate/dashboard'
        }
      } else {
        alert('Invalid email or password')
        setIsLoading(false)
      }
    }, 500)
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <Link href="/">
            <h1 className="text-3xl font-bold text-primary mb-2">Skillz</h1>
          </Link>
          <h2 className="text-2xl font-bold text-primary">Sign In</h2>
          <p className="text-muted-foreground mt-2">Welcome back</p>
        </div>

        <Card className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? 'Signing in...' : 'Sign In'}
            </Button>
          </form>

          <div className="mt-6 text-center text-sm">
            <span className="text-muted-foreground">Don't have an account? </span>
            <Link href="/signup" className="text-primary font-semibold hover:underline">
              Sign up
            </Link>
          </div>
        </Card>

        <div className="mt-6 p-4 bg-muted rounded-lg">
          <p className="font-semibold text-primary mb-3 text-sm">Demo Credentials:</p>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">Recruiter</p>
                <p className="text-xs text-muted-foreground">recruiter@skillz.com</p>
                <p className="text-xs text-muted-foreground">recruiter123</p>
              </div>
            </div>
            <hr className="border-border" />
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">Candidate</p>
                <p className="text-xs text-muted-foreground">candidate@skillz.com</p>
                <p className="text-xs text-muted-foreground">candidate123</p>
              </div>
            </div>
            <hr className="border-border" />
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">Admin</p>
                <p className="text-xs text-muted-foreground">admin@skillz.com</p>
                <p className="text-xs text-muted-foreground">admin123</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
