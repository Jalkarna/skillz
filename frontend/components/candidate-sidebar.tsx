'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { BarChart3, FileText, LogOut, Home } from 'lucide-react'
import { NavLink } from '@/components/nav-link'
import { useState } from 'react'

export function CandidateSidebar() {
  const pathname = usePathname()
  const [isLoggingOut, setIsLoggingOut] = useState(false)

  const handleLogout = () => {
    setIsLoggingOut(true)
    setTimeout(() => {
      localStorage.removeItem('user')
      localStorage.removeItem('isLoggedIn')
      window.location.href = '/'
    }, 100)
  }

  const isActive = (path: string) => pathname.startsWith(path)

  return (
    <aside className="w-64 bg-sidebar border-r border-sidebar-border min-h-screen flex flex-col">
      <div className="p-6 border-b border-sidebar-border">
        <Link href="/" className="hover:opacity-80 transition">
          <h1 className="text-2xl font-bold text-primary">Skillz</h1>
        </Link>
        <p className="text-xs text-muted-foreground mt-2">Candidate Dashboard</p>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        <NavLink href="/candidate/dashboard" icon={<Home className="w-5 h-5" />} variant={isActive('/candidate/dashboard') ? 'default' : 'ghost'}>
          My Assessments
        </NavLink>

        <NavLink href="/candidate/results" icon={<BarChart3 className="w-5 h-5" />} variant={isActive('/candidate/results') ? 'default' : 'ghost'}>
          My Results
        </NavLink>

        <NavLink href="/candidate/profile" icon={<FileText className="w-5 h-5" />} variant={isActive('/candidate/profile') ? 'default' : 'ghost'}>
          Profile
        </NavLink>
      </nav>

      <div className="p-4 border-t border-sidebar-border space-y-2">
        <div className="text-xs text-muted-foreground px-2">Logged in as Candidate</div>
        <Button
          variant="outline"
          className="w-full justify-start gap-3 bg-transparent"
          onClick={handleLogout}
          disabled={isLoggingOut}
        >
          <LogOut className="w-5 h-5" />
          {isLoggingOut ? 'Logging out...' : 'Logout'}
        </Button>
      </div>
    </aside>
  )
}
