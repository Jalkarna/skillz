'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { BarChart3, Users, AlertTriangle, LogOut, Home, Settings } from 'lucide-react'
import { NavLink } from '@/components/nav-link'
import { useState } from 'react'

export function AdminSidebar() {
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
        <p className="text-xs text-muted-foreground mt-2">Admin Dashboard</p>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        <NavLink href="/admin/dashboard" icon={<Home className="w-5 h-5" />} variant={isActive('/admin/dashboard') ? 'default' : 'ghost'}>
          Overview
        </NavLink>

        <NavLink href="/admin/users" icon={<Users className="w-5 h-5" />} variant={isActive('/admin/users') ? 'default' : 'ghost'}>
          Users & Orgs
        </NavLink>

        <NavLink href="/admin/monitoring" icon={<AlertTriangle className="w-5 h-5" />} variant={isActive('/admin/monitoring') ? 'default' : 'ghost'}>
          Monitoring
        </NavLink>

        <NavLink href="/admin/analytics" icon={<BarChart3 className="w-5 h-5" />} variant={isActive('/admin/analytics') ? 'default' : 'ghost'}>
          Analytics
        </NavLink>

        <NavLink href="/admin/settings" icon={<Settings className="w-5 h-5" />} variant={isActive('/admin/settings') ? 'default' : 'ghost'}>
          Settings
        </NavLink>
      </nav>

      <div className="p-4 border-t border-sidebar-border space-y-2">
        <div className="text-xs text-muted-foreground px-2">Logged in as Admin</div>
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
