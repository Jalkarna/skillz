'use client'

import { AdminSidebar } from '@/components/admin-sidebar'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { AlertTriangle, CheckCircle, Activity, TrendingDown } from 'lucide-react'

export default function AdminMonitoringPage() {
  const suspiciousActivities = [
    {
      id: 1,
      userId: 'candidate_123',
      userName: 'Priya Singh',
      activity: 'Rapid answer submissions (8 questions in 2 minutes)',
      type: 'Speed Anomaly',
      severity: 'High',
      timestamp: '2 hours ago',
      status: 'Flagged',
    },
    {
      id: 2,
      userId: 'candidate_567',
      userName: 'Mike Johnson',
      activity: 'Tab switch detected 15 times during 60-min assessment',
      type: 'Tab Switching',
      severity: 'High',
      timestamp: '5 hours ago',
      status: 'Blocked',
    },
    {
      id: 3,
      userId: 'candidate_890',
      userName: 'Lisa Wong',
      activity: 'Possible plagiarism - 85% match with student 234',
      type: 'Plagiarism',
      severity: 'High',
      timestamp: '1 day ago',
      status: 'Under Investigation',
    },
    {
      id: 4,
      userId: 'candidate_234',
      userName: 'Alex Turner',
      activity: 'Score discrepancy - sudden jump from 12% to 98%',
      type: 'Score Anomaly',
      severity: 'Medium',
      timestamp: '2 days ago',
      status: 'Pending Review',
    },
    {
      id: 5,
      userId: 'recruiter_045',
      userName: 'Jennifer Lee',
      activity: 'Unusual data export (1000+ candidate records)',
      type: 'Data Export',
      severity: 'Medium',
      timestamp: '3 days ago',
      status: 'Approved',
    },
  ]

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'High': return 'bg-red-100 text-red-700'
      case 'Medium': return 'bg-yellow-100 text-yellow-700'
      case 'Low': return 'bg-green-100 text-green-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Flagged': return 'text-orange-600'
      case 'Blocked': return 'text-red-600'
      case 'Under Investigation': return 'text-yellow-600'
      case 'Pending Review': return 'text-blue-600'
      case 'Approved': return 'text-green-600'
      default: return 'text-gray-600'
    }
  }

  const stats = [
    { label: 'Total Alerts (7 days)', value: '156', icon: AlertTriangle, color: 'text-red-600' },
    { label: 'Active Investigations', value: '8', icon: Activity, color: 'text-orange-600' },
    { label: 'Resolved Issues', value: '142', icon: CheckCircle, color: 'text-green-600' },
    { label: 'False Positives', value: '12', icon: TrendingDown, color: 'text-blue-600' },
  ]

  return (
    <div className="flex min-h-screen bg-background">
      <AdminSidebar />

      <main className="flex-1 p-8">
        <div className="max-w-7xl">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-primary mb-2">Monitoring</h1>
            <p className="text-muted-foreground">Track and manage suspicious activities and platform alerts</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, idx) => {
              const Icon = stat.icon
              return (
                <Card key={idx} className="p-6">
                  <Icon className={`w-8 h-8 mb-3 ${stat.color}`} />
                  <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold text-primary">{stat.value}</p>
                </Card>
              )
            })}
          </div>

          {/* Suspicious Activities */}
          <Card className="p-6">
            <h2 className="text-lg font-semibold text-primary mb-6">Suspicious Activities</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold">User</th>
                    <th className="text-left py-3 px-4 font-semibold">Activity</th>
                    <th className="text-left py-3 px-4 font-semibold">Type</th>
                    <th className="text-left py-3 px-4 font-semibold">Severity</th>
                    <th className="text-left py-3 px-4 font-semibold">Time</th>
                    <th className="text-left py-3 px-4 font-semibold">Status</th>
                    <th className="text-left py-3 px-4 font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {suspiciousActivities.map((activity) => (
                    <tr key={activity.id} className="border-b border-border hover:bg-muted/50 transition">
                      <td className="py-3 px-4">
                        <div>
                          <p className="font-medium text-primary">{activity.userName}</p>
                          <p className="text-xs text-muted-foreground">{activity.userId}</p>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <p className="text-sm">{activity.activity}</p>
                      </td>
                      <td className="py-3 px-4">
                        <span className="text-xs font-medium px-2 py-1 bg-primary/10 text-primary rounded">
                          {activity.type}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <span className={`text-xs px-3 py-1 rounded-full font-medium ${getSeverityColor(activity.severity)}`}>
                          {activity.severity}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-muted-foreground">{activity.timestamp}</td>
                      <td className="py-3 px-4">
                        <span className={`font-medium ${getStatusColor(activity.status)}`}>
                          {activity.status}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">Review</Button>
                          {activity.status === 'Pending Review' && (
                            <Button size="sm" className="text-xs">Approve</Button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          {/* Detection Statistics */}
          <Card className="p-6 mt-6">
            <h2 className="text-lg font-semibold text-primary mb-6">Detection Statistics (Last 30 Days)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { name: 'Speed Anomalies', count: 34, percentage: 22 },
                { name: 'Tab Switching', count: 28, percentage: 18 },
                { name: 'Plagiarism Detected', count: 15, percentage: 10 },
                { name: 'Score Anomalies', count: 22, percentage: 14 },
                { name: 'Unusual Exports', count: 12, percentage: 8 },
                { name: 'Copy-Paste Activity', count: 19, percentage: 12 },
                { name: 'IP Changes', count: 16, percentage: 10 },
                { name: 'Device Changes', count: 10, percentage: 6 },
              ].map((detection, idx) => (
                <div key={idx} className="p-4 bg-muted rounded-lg">
                  <p className="text-sm font-medium text-primary mb-2">{detection.name}</p>
                  <p className="text-2xl font-bold text-primary mb-2">{detection.count}</p>
                  <div className="w-full bg-gray-300 rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full"
                      style={{ width: `${detection.percentage}%` }}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">{detection.percentage}% of alerts</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </main>
    </div>
  )
}
