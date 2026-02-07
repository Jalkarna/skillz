'use client'

import React from "react"

import { CandidateSidebar } from '@/components/candidate-sidebar'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Upload } from 'lucide-react'
import { useState } from 'react'

export default function CandidateProfile() {
  const [formData, setFormData] = useState({
    fullName: 'Alex Johnson',
    email: 'candidate@skillz.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    bio: 'Passionate full-stack developer with 5+ years of experience',
    skills: ['React', 'Node.js', 'TypeScript', 'Python', 'Docker'],
  })

  const [isEditing, setIsEditing] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div className="flex min-h-screen bg-background">
      <CandidateSidebar />

      <main className="flex-1 p-8">
        <div className="max-w-3xl">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold text-primary mb-2">My Profile</h1>
              <p className="text-muted-foreground">Manage your account and resume</p>
            </div>
            {!isEditing && (
              <Button onClick={() => setIsEditing(true)}>Edit Profile</Button>
            )}
          </div>

          {/* Profile Cards */}
          <div className="space-y-6">
            {/* Personal Information */}
            <Card className="p-6">
              <h2 className="text-lg font-semibold text-primary mb-6">Personal Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="mt-2"
                  />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="bio">Professional Bio</Label>
                  <textarea
                    id="bio"
                    name="bio"
                    value={formData.bio}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="mt-2 w-full p-2 border border-border rounded-md text-sm disabled:bg-gray-50"
                    rows={3}
                  />
                </div>
              </div>
              {isEditing && (
                <div className="flex gap-3 mt-6 pt-6 border-t border-border">
                  <Button onClick={() => setIsEditing(false)}>Save Changes</Button>
                  <Button variant="outline" onClick={() => setIsEditing(false)}>Cancel</Button>
                </div>
              )}
            </Card>

            {/* Skills */}
            <Card className="p-6">
              <h2 className="text-lg font-semibold text-primary mb-6">Skills</h2>
              <div className="flex flex-wrap gap-2 mb-4">
                {formData.skills.map((skill, idx) => (
                  <div key={idx} className="px-3 py-2 bg-primary/10 text-primary text-sm rounded-full flex items-center gap-2">
                    {skill}
                    {isEditing && (
                      <button
                        onClick={() => {
                          setFormData(prev => ({
                            ...prev,
                            skills: prev.skills.filter((_, i) => i !== idx)
                          }))
                        }}
                        className="text-primary/60 hover:text-primary ml-1"
                      >
                        ✕
                      </button>
                    )}
                  </div>
                ))}
              </div>
              {isEditing && (
                <div>
                  <Input
                    placeholder="Add a skill and press Enter"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        const value = (e.target as HTMLInputElement).value.trim()
                        if (value) {
                          setFormData(prev => ({
                            ...prev,
                            skills: [...prev.skills, value]
                          }))
                          ;(e.target as HTMLInputElement).value = ''
                        }
                      }
                    }}
                  />
                </div>
              )}
            </Card>

            {/* Resume Upload */}
            <Card className="p-6">
              <h2 className="text-lg font-semibold text-primary mb-6">Resume</h2>
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                <Upload className="w-10 h-10 text-muted-foreground mx-auto mb-4" />
                <p className="text-sm font-medium text-primary mb-2">Upload your resume</p>
                <p className="text-xs text-muted-foreground mb-4">Drag and drop or click to browse (PDF, DOC, DOCX)</p>
                <Button variant="outline">Choose File</Button>
                <p className="text-xs text-muted-foreground mt-4">Current: resume.pdf (updated 2 days ago)</p>
              </div>
            </Card>

            {/* Account Settings */}
            <Card className="p-6">
              <h2 className="text-lg font-semibold text-primary mb-6">Account Settings</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div>
                    <p className="font-medium">Email Notifications</p>
                    <p className="text-xs text-muted-foreground">Get updates about new assessments</p>
                  </div>
                  <input type="checkbox" defaultChecked className="w-5 h-5" />
                </div>
                <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div>
                    <p className="font-medium">Privacy Settings</p>
                    <p className="text-xs text-muted-foreground">Control who can see your profile</p>
                  </div>
                  <input type="checkbox" defaultChecked className="w-5 h-5" />
                </div>
              </div>
            </Card>

            {/* Danger Zone */}
            <Card className="p-6 border-red-200 bg-red-50">
              <h2 className="text-lg font-semibold text-red-700 mb-4">Danger Zone</h2>
              <p className="text-sm text-muted-foreground mb-4">Permanently delete your account and all associated data</p>
              <Button variant="destructive">Delete Account</Button>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
