
import { Users, FileText, AlertTriangle, TrendingUp, Calendar } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    {
      title: 'Total Users',
      value: '2,543',
      icon: Users,
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Total Civils',
      value: '1,247',
      icon: FileText,
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Total Events',
      value: '456',
      icon: Calendar,
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'Total Posts',
      value: '8,921',
      icon: TrendingUp,
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Pending Reports',
      value: '3',
      icon: AlertTriangle,
      color: 'from-red-500 to-red-600'
    }
  ];

  const topCivils = [
    { id: 1, name: 'Green Parks Community', followers: 2340, image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=100&h=100&fit=crop' },
    { id: 2, name: 'Tech Education Hub', followers: 1890, image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=100&h=100&fit=crop' },
    { id: 3, name: 'Local Food Bank', followers: 1567, image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=100&h=100&fit=crop' }
  ];

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard Overview</h1>
        <p className="text-gray-600">Welcome back! Here's what's happening with your platform.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Recent User Registrations</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-medium">U{item}</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">User {item}</p>
                    <p className="text-xs text-gray-500">Joined 2 hours ago</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Pending Civil Requests</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-medium">C{item}</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Civil Request {item}</p>
                      <p className="text-xs text-gray-500">Submitted today</p>
                    </div>
                  </div>
                  <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">
                    Pending
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Most Followed Civils</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {topCivils.map((civil, index) => (
                <div key={civil.id} className="flex items-center space-x-4">
                  <div className="relative">
                    <img
                      src={civil.image}
                      alt={civil.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="absolute -top-1 -left-1 w-5 h-5 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">{index + 1}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{civil.name}</p>
                    <p className="text-xs text-gray-500">{civil.followers.toLocaleString()} followers</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
