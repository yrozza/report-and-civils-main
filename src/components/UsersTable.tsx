import { useState } from 'react';
import { Search, MoreVertical, Mail, Phone, Calendar } from 'lucide-react';

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  profilePic: string;
  birthDate: string;
  phoneNumber: string;
}

const UsersTable = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const mockUsers: User[] = [
    {
      id: 10,
      firstName: 'Youssef',
      lastName: 'Rozza',
      email: 'youssefroza3090@gmail.com',
      profilePic:
        'https://th.bing.com/th/id/OIP.hGSCbXlcOjL_9mmzerqAbQHaHa?rs=1&pid=ImgDetMain',
      birthDate: '2002-12-08',
      phoneNumber: '+01001496987',
    },
    {
      id: 8,
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@example.com',
      profilePic:
        'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=100&h=100&fit=crop&crop=face',
      birthDate: '1988-12-22',
      phoneNumber: '+1987654321',
    },
    {
      id: 9,
      firstName: 'Mike',
      lastName: 'Johnson',
      email: 'mike.johnson@example.com',
      profilePic:
        'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=100&h=100&fit=crop&crop=face',
      birthDate: '1992-08-10',
      phoneNumber: '+1122334455',
    },
    {
      id: 1,
      firstName: 'Emma',
      lastName: 'Davis',
      email: 'emma.davis@example.com',
      profilePic:
        'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100&h=100&fit=crop&crop=face',
      birthDate: '1995-03-15',
      phoneNumber: '+1444555666',
    },
    {
      id: 2,
      firstName: 'Liam',
      lastName: 'Brown',
      email: 'liam.brown@example.com',
      profilePic:
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face',
      birthDate: '1990-11-01',
      phoneNumber: '+1333222111',
    },
    {
      id: 3,
      firstName: 'Sophia',
      lastName: 'Wilson',
      email: 'sophia.wilson@example.com',
      profilePic:
        'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=100&h=100&fit=crop&crop=face',
      birthDate: '1998-06-25',
      phoneNumber: '+1222888999',
    },
    {
      id: 4,
      firstName: 'Noah',
      lastName: 'Martinez',
      email: 'noah.martinez@example.com',
      profilePic:
        'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop&crop=face',
      birthDate: '1993-07-30',
      phoneNumber: '+1555777888',
    },
    {
      id: 5,
      firstName: 'Olivia',
      lastName: 'Garcia',
      email: 'olivia.garcia@example.com',
      profilePic:
        'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?fit=crop&w=100&h=100&crop=faces',
      birthDate: '1991-09-14',
      phoneNumber: '+1444333222',
    },
    {
      id: 6,
      firstName: 'William',
      lastName: 'Lee',
      email: 'william.lee@example.com',
      profilePic:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face',
      birthDate: '1987-04-09',
      phoneNumber: '+1999444555',
    },
    {
      id: 7,
      firstName: 'Isabella',
      lastName: 'Clark',
      email: 'isabella.clark@example.com',
      profilePic:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      birthDate: '1994-01-19',
      phoneNumber: '+1888666777',
    },
  ];

  // Filter and sort users by id descending
  const filteredUsers = mockUsers
    .filter((user) =>
      `${user.firstName} ${user.lastName}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => b.id - a.id);

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Users Management</h1>
        <p className="text-gray-600">Manage and view all registered users</p>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">User</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">Contact</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">Birth Date</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-4">
                      <img
                        src={user.profilePic}
                        alt={`${user.firstName} ${user.lastName}`}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-semibold text-gray-900">
                          {user.firstName} {user.lastName}
                        </p>
                        <p className="text-sm text-gray-500">ID: {user.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-900">{user.email}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-900">{user.phoneNumber}</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-900">{user.birthDate}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <MoreVertical className="w-5 h-5 text-gray-400" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {filteredUsers.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500">No users found matching your search.</p>
        </div>
      )}
    </div>
  );
};

export default UsersTable;
