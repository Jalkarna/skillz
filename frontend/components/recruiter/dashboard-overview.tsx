'use client'

import { Card } from '@/components/ui/card'

export default function DashboardOverview() {
  const stats = [
    { label: 'Total Applications', value: '342', change: '+12% this week' },
    { label: 'Active Assessments', value: '8', change: 'All running smoothly' },
    { label: 'Avg Completion Rate', value: '87%', change: '+5% from last week' },
    { label: 'Qualified Candidates', value: '156', change: 'Ready for interviews' },
  ]

  const recentActivity = [
    { event: 'John submitted assessment', time: '2 hours ago', status: 'Qualified' },
    { event: 'Assessment "Backend Dev" created', time: '5 hours ago', status: 'Active' },
    { event: '5 new candidates invited', time: '1 day ago', status: 'Pending' },
    { event: 'Assessment "Frontend Dev" completed', time: '2 days ago', status: 'Closed' },
  ]

  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index} className="p-6">
            <div className="text-sm font-medium text-muted-foreground mb-2">{stat.label}</div>
            <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
            <div className="text-xs text-muted-foreground">{stat.change}</div>
          </Card>
        ))}
      </div>

      {/* Recent Activity */}
      <Card className="p-6">
        <h2 className="text-xl font-bold text-primary mb-4">Recent Activity</h2>
        <div className="space-y-3">
          {recentActivity.map((item, index) => (
            <div key={index} className="flex items-center justify-between border-b border-border pb-3 last:border-0">
              <div>
                <p className="font-medium text-foreground">{item.event}</p>
                <p className="text-sm text-muted-foreground">{item.time}</p>
              </div>
              <div className={`text-xs font-semibold px-2 py-1 rounded ${
                item.status === 'Qualified' ? 'bg-green-100 text-green-700' :
                item.status === 'Active' ? 'bg-blue-100 text-blue-700' :
                item.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                'bg-gray-100 text-gray-700'
              }`}>
                {item.status}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
