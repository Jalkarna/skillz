'use client'

import { AdminSidebar } from '@/components/admin-sidebar'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Settings, AlertCircle, CheckCircle } from 'lucide-react'
import { useState } from 'react'

export default function AdminSettingsPage() {
  const [activeTab, setActiveTab] = useState('general')
  const [saved, setSaved] = useState(false)

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  return (
    <div className="flex min-h-screen bg-background">
      <AdminSidebar />

      <main className="flex-1 p-8">
        <div className="max-w-4xl">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-primary mb-2 flex items-center gap-3">
              <Settings className="w-8 h-8" />
              Platform Settings
            </h1>
            <p className="text-muted-foreground">Configure global platform settings and policies</p>
          </div>

          {/* Tabs */}
          <div className="flex gap-4 mb-6 border-b border-border">
            {['general', 'assessment', 'security', 'notifications'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-3 font-medium border-b-2 transition ${
                  activeTab === tab
                    ? 'border-primary text-primary'
                    : 'border-transparent text-muted-foreground hover:text-primary'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* General Settings */}
          {activeTab === 'general' && (
            <div className="space-y-6">
              <Card className="p-6">
                <h2 className="text-lg font-semibold text-primary mb-6">General Settings</h2>
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="platformName">Platform Name</Label>
                    <Input id="platformName" defaultValue="Skillz" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="supportEmail">Support Email</Label>
                    <Input id="supportEmail" type="email" defaultValue="support@skillz.com" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="maxOrgSize">Maximum Organization Size</Label>
                    <Input id="maxOrgSize" type="number" defaultValue="1000" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="currency">Default Currency</Label>
                    <Input id="currency" defaultValue="USD" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="timezone">Timezone</Label>
                    <Input id="timezone" defaultValue="UTC" className="mt-2" />
                  </div>
                </div>
              </Card>
            </div>
          )}

          {/* Assessment Settings */}
          {activeTab === 'assessment' && (
            <div className="space-y-6">
              <Card className="p-6">
                <h2 className="text-lg font-semibold text-primary mb-6">Assessment Configuration</h2>
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="maxDuration">Maximum Assessment Duration (minutes)</Label>
                    <Input id="maxDuration" type="number" defaultValue="180" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="minDuration">Minimum Assessment Duration (minutes)</Label>
                    <Input id="minDuration" type="number" defaultValue="15" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="passingScore">Default Passing Score (%)</Label>
                    <Input id="passingScore" type="number" defaultValue="70" className="mt-2" />
                  </div>
                  <div className="flex items-center gap-4">
                    <input type="checkbox" id="enableImageProctoring" defaultChecked className="w-4 h-4" />
                    <Label htmlFor="enableImageProctoring" className="cursor-pointer">Enable Image-Based Proctoring</Label>
                  </div>
                  <div className="flex items-center gap-4">
                    <input type="checkbox" id="enableVideo" defaultChecked className="w-4 h-4" />
                    <Label htmlFor="enableVideo" className="cursor-pointer">Enable Video Proctoring (Optional)</Label>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="text-lg font-semibold text-primary mb-4">Anti-Cheat Settings</h2>
                <div className="space-y-4">
                  {[
                    { label: 'Detect Tab Switching', enabled: true },
                    { label: 'Detect Copy-Paste', enabled: true },
                    { label: 'Monitor Mouse Movement', enabled: true },
                    { label: 'Detect External Browsers', enabled: false },
                  ].map((setting, idx) => (
                    <div key={idx} className="flex items-center gap-4 p-3 bg-muted rounded-lg">
                      <input type="checkbox" defaultChecked={setting.enabled} className="w-4 h-4" />
                      <Label className="cursor-pointer flex-1">{setting.label}</Label>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          )}

          {/* Security Settings */}
          {activeTab === 'security' && (
            <div className="space-y-6">
              <Card className="p-6 border-orange-200 bg-orange-50">
                <div className="flex gap-4">
                  <AlertCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-orange-700 mb-2">Critical Settings</h3>
                    <p className="text-sm text-orange-600">These settings affect platform security and stability. Proceed with caution.</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="text-lg font-semibold text-primary mb-6">Security Policy</h2>
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="sessionTimeout">Session Timeout (minutes)</Label>
                    <Input id="sessionTimeout" type="number" defaultValue="30" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="passwordPolicy">Password Policy</Label>
                    <Input id="passwordPolicy" defaultValue="Minimum 8 characters, 1 uppercase, 1 number" className="mt-2" />
                  </div>
                  <div className="flex items-center gap-4">
                    <input type="checkbox" id="mfaRequired" defaultChecked className="w-4 h-4" />
                    <Label htmlFor="mfaRequired" className="cursor-pointer">Require Multi-Factor Authentication for Admins</Label>
                  </div>
                  <div className="flex items-center gap-4">
                    <input type="checkbox" id="ipWhitelist" className="w-4 h-4" />
                    <Label htmlFor="ipWhitelist" className="cursor-pointer">Enable IP Whitelist for Admin Access</Label>
                  </div>
                  <div>
                    <Label htmlFor="dataRetention">Data Retention Period (days)</Label>
                    <Input id="dataRetention" type="number" defaultValue="365" className="mt-2" />
                  </div>
                </div>
              </Card>
            </div>
          )}

          {/* Notification Settings */}
          {activeTab === 'notifications' && (
            <div className="space-y-6">
              <Card className="p-6">
                <h2 className="text-lg font-semibold text-primary mb-6">Notification Preferences</h2>
                <div className="space-y-4">
                  {[
                    { label: 'Alert on High Severity Anomalies', enabled: true },
                    { label: 'Daily Usage Report', enabled: true },
                    { label: 'Weekly Compliance Report', enabled: true },
                    { label: 'Notify on System Errors', enabled: true },
                    { label: 'Notify on Suspicious Activities', enabled: true },
                    { label: 'Low Storage Alerts', enabled: false },
                  ].map((notif, idx) => (
                    <div key={idx} className="flex items-center gap-4 p-3 bg-muted rounded-lg">
                      <input type="checkbox" defaultChecked={notif.enabled} className="w-4 h-4" />
                      <Label className="cursor-pointer flex-1">{notif.label}</Label>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="text-lg font-semibold text-primary mb-6">Email Notifications</h2>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="adminEmail">Admin Email Address</Label>
                    <Input id="adminEmail" type="email" defaultValue="admin@skillz.com" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="alertEmail">Alert Email Address</Label>
                    <Input id="alertEmail" type="email" defaultValue="alerts@skillz.com" className="mt-2" />
                  </div>
                </div>
              </Card>
            </div>
          )}

          {/* Save Button */}
          <div className="mt-8 flex gap-3">
            {saved ? (
              <div className="flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-lg">
                <CheckCircle className="w-4 h-4" />
                <span className="text-sm font-medium">Settings saved successfully!</span>
              </div>
            ) : (
              <>
                <Button onClick={handleSave} size="lg">Save Changes</Button>
                <Button variant="outline" size="lg">Reset to Defaults</Button>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
