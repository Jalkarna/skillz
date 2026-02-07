'use client'

import { AdminSidebar } from '@/components/admin-sidebar'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search, Shield, Users, Trash2, Edit2 } from 'lucide-react'
import { useState } from 'react'

export default function AdminUsersPage() {
  const [searchTerm, setSearchTerm] = useState('')

  const organizations = [
    { id: 1, name: 'TechCorp Inc', recruiters: 12, candidates: 345, status: 'Active', created: '2023-06-15' },
    { id: 2, name: 'StartupXYZ', recruiters: 3, candidates: 89, status: 'Active', created: '2026-01-20' },
    { id: 3, name: 'DataDriven Co', recruiters: 8, candidates: 234, status: 'Active', created: '2023-09-10' },
    { id: 4, name: 'CloudTech Solutions', recruiters: 15, candidates: 567, status: 'Active', created: '2023-04-05' },
    { id: 5, name: 'InnovateLabs', recruiters: 5, candidates: 123, status: 'Suspended', created: '2023-11-22' },
  ]

  const filteredOrgs = organizations.filter(org =>
    org.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="flex min-h-screen bg-background">
      <AdminSidebar />

      <main className="flex-1 p-8">
        <div className="max-w-7xl">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold text-primary mb-2">Users & Organizations</h1>
              <p className="text-muted-foreground">Manage all users and organizations on the platform</p>
            </div>
            <Button size="lg">Add Organization</Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card className="p-6">
              <Users className="w-8 h-8 text-primary mb-3" />
              <p className="text-sm text-muted-foreground mb-1">Total Recruiters</p>
              <p className="text-3xl font-bold text-primary">43</p>
            </Card>
            <Card className="p-6">
              <Users className="w-8 h-8 text-primary mb-3" />
              <p className="text-sm text-muted-foreground mb-1">Total Candidates</p>
              <p className="text-3xl font-bold text-primary">1,358</p>
            </Card>
            <Card className="p-6">
              <Shield className="w-8 h-8 text-primary mb-3" />
              <p className="text-sm text-muted-foreground mb-1">Active Organizations</p>
              <p className="text-3xl font-bold text-primary">4</p>
            </Card>
          </div>

          {/* Search */}
          <Card className="p-6 mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search organizations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </Card>

          {/* Organizations Table */}
          <Card className="p-6">
            <h2 className="text-lg font-semibold text-primary mb-6">Organizations</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold">Organization</th>
                    <th className="text-left py-3 px-4 font-semibold">Recruiters</th>
                    <th className="text-left py-3 px-4 font-semibold">Candidates</th>
                    <th className="text-left py-3 px-4 font-semibold">Status</th>
                    <th className="text-left py-3 px-4 font-semibold">Created</th>
                    <th className="text-left py-3 px-4 font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredOrgs.map((org) => (
                    <tr key={org.id} className="border-b border-border hover:bg-muted/50 transition">
                      <td className="py-3 px-4 font-medium text-primary">{org.name}</td>
                      <td className="py-3 px-4">{org.recruiters}</td>
                      <td className="py-3 px-4">{org.candidates}</td>
                      <td className="py-3 px-4">
                        <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                          org.status === 'Active'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-red-100 text-red-700'
                        }`}>
                          {org.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-muted-foreground">{org.created}</td>
                      <td className="py-3 px-4">
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm" className="gap-1">
                            <Edit2 className="w-4 h-4" />
                            Edit
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-red-600 hover:text-red-700 gap-1"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          {/* Recruiter Accounts */}
          <Card className="p-6 mt-6">
            <h2 className="text-lg font-semibold text-primary mb-6">Recent Recruiter Accounts</h2>
            <div className="space-y-3">
              {[
                { id: 1, name: 'Sarah Chen', org: 'TechCorp Inc', email: 'sarah@techcorp.com', joined: '2026-02-01' },
                { id: 2, name: 'John Doe', org: 'StartupXYZ', email: 'john@startupxyz.com', joined: '2026-02-03' },
                { id: 3, name: 'Emily Rodriguez', org: 'CloudTech', email: 'emily@cloudtech.com', joined: '2026-02-05' },
              ].map((recruiter) => (
                <div
                  key={recruiter.id}
                  className="flex items-center justify-between p-4 bg-muted rounded-lg hover:bg-muted/80 transition"
                >
                  <div>
                    <p className="font-medium text-primary">{recruiter.name}</p>
                    <p className="text-sm text-muted-foreground">{recruiter.org} • {recruiter.email}</p>
                    <p className="text-xs text-muted-foreground">Joined {recruiter.joined}</p>
                  </div>
                  <Button variant="outline" size="sm">Manage</Button>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </main>
    </div>
  )
}
