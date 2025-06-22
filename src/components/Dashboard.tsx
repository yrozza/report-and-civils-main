import { Users, FileText, AlertTriangle, TrendingUp, Calendar } from 'lucide-react';

const mockUsers = [
  {
    id: 1,
    firstName: 'youssef',
    lastName: 'rozza',
    email: 'youssefroza3090@gmail.com',
    profilePic: 'https://th.bing.com/th/id/OIP.hGSCbXlcOjL_9mmzerqAbQHaHa?rs=1&pid=ImgDetMain',
    birthDate: '2002-12-08',
    phoneNumber: '+1225092787',
    joinedAgo: '5 hours ago',
  },
  {
    id: 2,
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane.smith@example.com',
    profilePic: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=100&h=100&fit=crop&crop=face',
    birthDate: '1988-12-22',
    phoneNumber: '+1987654321',
    joinedAgo: '10 hours ago',
  },
  {
    id: 3,
    firstName: 'Mike',
    lastName: 'Johnson',
    email: 'mike.johnson@example.com',
    profilePic: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=100&h=100&fit=crop&crop=face',
    birthDate: '1992-08-10',
    phoneNumber: '+1122334455',
    joinedAgo: '15 hours ago',
  },
];

const Dashboard = () => {
  const stats = [
    {
      title: 'Total Users',
      value: '121',
      icon: Users,
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Total Civils',
      value: '8',
      icon: FileText,
      color: 'from-green-500 to-green-600',
    },
    {
      title: 'Total Events',
      value: '6',
      icon: Calendar,
      color: 'from-orange-500 to-orange-600',
    },
    {
      title: 'Total Posts',
      value: '17',
      icon: TrendingUp,
      color: 'from-purple-500 to-purple-600',
    },
    {
      title: 'Pending Reports',
      value: '3',
      icon: AlertTriangle,
      color: 'from-red-500 to-red-600',
    },
  ];

  const pendingCivils = [
    {
      id: 1,
      civilName: 'Green Parks Community',
      submittedDate: '2025-06-22',
      civilImage: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=100&h=100&fit=crop',
    },
    {
      id: 2,
      civilName: 'Tech Education Hub',
      submittedDate: '2025-06-22',
      civilImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=100&h=100&fit=crop',
    },
  ];

  // Random followers between 10-20 helper
  const randomFollowers = () => Math.floor(Math.random() * 11) + 10;

  const topCivils = [
    {
      id: 3,
      name: 'semicolon',
      followers: 100,
      image: 'http://localhost:8080/src/assets/semicolon.jpg',
      category: 'Programming',
      description:
        'Technical civil family that aims to improve the skills of students in the field of programming and technology.',
      status: 'approved',
      submittedDate: '2025-06-22',
    },
    {
      id: 6,
      name: 'Broca Project',
      followers: "23",
      image:
        'https://th.bing.com/th/id/OIP.kWy3z0ifw1fcMQplJsJqcAHaEj?o=7rm=3&rs=1&pid=ImgDetMain',
      category: 'Programming',
      description: 'Innovative coding and AI research civil named after the brain’s speech center.',
      status: 'approved',
      submittedDate: '2025-06-19',
    },
    {
      id: 7,
      name: 'Western Organization',
      followers: "15",
      image:
        'https://res.cloudinary.com/dvapijor2/image/upload/v1750629431/western_kempyd.jpg',
      category: 'Medical',
      description: 'Providing medical outreach and training in underserved western regions.',
      status: 'approved',
      submittedDate: '2025-06-18',
    },
  ];

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard Overview</h1>
        <p className="text-gray-600">Welcome back! Here's what's happening with your platform.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center`}
                >
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent User Registrations */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Recent User Registrations</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {mockUsers.map((user) => (
                <div key={user.id} className="flex items-center space-x-4">
                  <img
                    src={user.profilePic}
                    alt={`${user.firstName} ${user.lastName}`}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">
                      {user.firstName} {user.lastName}
                    </p>
                    <p className="text-xs text-gray-500">
                      Joined {user.joinedAgo} • {user.email}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pending Civil Requests */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Pending Civil Requests</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {pendingCivils.map((civil) => (
                <div key={civil.id} className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <img
                      src={civil.civilImage}
                      alt={civil.civilName}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-900">{civil.civilName}</p>
                      <p className="text-xs text-gray-500">Submitted: {civil.submittedDate}</p>
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

        {/* Most Followed Civils */}
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
