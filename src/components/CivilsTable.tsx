import { useState } from 'react';
import { Check, X, Clock } from 'lucide-react';

interface CivilRequest {
  id: number;
  civilName: string;
  category: string;
  civilImage: string;
  description: string;
  status: 'pending' | 'approved' | 'blocked';
  submittedDate: string;
}

const CivilsTable = () => {
  const [civils, setCivils] = useState<CivilRequest[]>([
    {
      id: 1,
      civilName: 'Green Parks Community',
      category: 'Environment',
      civilImage: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=100&h=100&fit=crop',
      description: 'A community focused on maintaining and improving local parks and green spaces.',
      status: 'pending',
      submittedDate: '2025-06-22'
    },
    {
      id: 2,
      civilName: 'Tech Education Hub',
      category: 'Education',
      civilImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=100&h=100&fit=crop',
      description: 'Providing free coding and technology education to underserved communities.',
      status: 'pending',
      submittedDate: '2025-06-22'
    },
    {
      id: 3,
      civilName: 'semicolon',
      category: 'Programming',
      civilImage: 'http://localhost:8080/src/assets/semicolon.jpg',
      description: 'Technical civil family that aims to improve the skills of students in the field of programming and technology.',
      status: 'approved',
      submittedDate: '2025-06-22'
    },
    {
      id: 4,
      civilName: 'Safwa Science',
      category: 'Programming',
      civilImage: 'https://th.bing.com/th/id/OIP.4Vqkpj1Wk9xDydHmkPY6MwHaHa?rs=1&pid=ImgDetMain',
      description: 'Community for emerging programmers passionate about science-driven tech.',
      status: 'approved',
      submittedDate: '2025-06-21'
    },
    {
      id: 5,
      civilName: 'Hacker Rank',
      category: 'Programming',
      civilImage: 'https://res.cloudinary.com/dvapijor2/image/upload/v1750629431/hackerrank_xecw5h.jpg',
      description: 'Competitive programming group to boost skills through challenge-based learning.',
      status: 'approved',
      submittedDate: '2025-06-20'
    },
    {
      id: 6,
      civilName: 'Broca Project',
      category: 'Programming',
      civilImage: 'https://th.bing.com/th/id/OIP.kWy3z0ifw1fcMQplJsJqcAHaEj?o=7rm=3&rs=1&pid=ImgDetMain',
      description: 'Innovative coding and AI research civil named after the brain’s speech center.',
      status: 'approved',
      submittedDate: '2025-06-19'
    },
    {
      id: 7,
      civilName: 'Western Organization',
      category: 'Medical',
      civilImage: 'https://res.cloudinary.com/dvapijor2/image/upload/v1750629431/western_kempyd.jpg',
      description: 'Providing medical outreach and training in underserved western regions.',
      status: 'approved',
      submittedDate: '2025-06-18'
    },
    {
      id: 8,
      civilName: 'Dark Lord Society',
      category: 'Unknown',
      civilImage: 'https://images.unsplash.com/photo-1558981009-94e6610f1c6e?w=100&h=100&fit=crop',
      description: 'Suspicious group with unclear motives and concerning activities.',
      status: 'blocked',
      submittedDate: '2025-06-17'
    },
    {
      id: 9,
      civilName: 'Chaos Hackers Crew',
      category: 'Cyber Crime',
      civilImage: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=100&h=100&fit=crop',
      description: 'Group attempting to bypass platform security under the guise of innovation.',
      status: 'blocked',
      submittedDate: '2025-06-16'
    },
    {
      id: 10,
      civilName: 'Resala',
      category: 'Volunteering',
      civilImage: 'https://res.cloudinary.com/dvapijor2/image/upload/v1750629430/resala_dvpch8.jpg',
      description: 'A volunteering civil dedicated to social development and humanitarian aid.',
      status: 'approved',
      submittedDate: '2025-06-23'
    },
    // Added new civils with approved status
    {
      id: 11,
      civilName: 'Upgrade',
      category: 'Soft Skills',
      civilImage: 'https://res.cloudinary.com/dvapijor2/image/upload/v1750632775/upgrade_groe15.png',
      description: 'A project focused on enhancing personal and professional growth through technology.',
      status: 'approved',
      submittedDate: '2025-06-25'
    },
    {
      id: 12,
      civilName: 'IEEE',
      category: 'Programming',
      civilImage: 'https://res.cloudinary.com/dvapijor2/image/upload/v1750632784/ieee_ham6af.jpg',
      description: 'A civil for engineers and innovators committed to advancing technology and society.',
      status: 'approved',
      submittedDate: '2025-06-24'
    },
    {
      id: 13,
      civilName: 'Techne Summit',
      category: 'Technical',
      civilImage: 'https://res.cloudinary.com/dvapijor2/image/upload/v1750632938/techne_syygaf.png',
      description: 'An annual summit bringing together top minds in technology and innovation.',
      status: 'approved',
      submittedDate: '2025-06-23'
    }
  ]);

  const handleApprove = (id: number) => {
    setCivils(civils.map(civil =>
      civil.id === id ? { ...civil, status: 'approved' as const } : civil
    ));
  };

  const handleBlock = (id: number) => {
    setCivils(civils.map(civil =>
      civil.id === id ? { ...civil, status: 'blocked' as const } : civil
    ));
  };

  const getStatusBadge = (status: string) => {
    const badges = {
      pending: 'bg-yellow-100 text-yellow-800',
      approved: 'bg-green-100 text-green-800',
      blocked: 'bg-red-100 text-red-800'
    };
    return badges[status as keyof typeof badges] || badges.pending;
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved':
        return <Check className="w-4 h-4" />;
      case 'blocked':
        return <X className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Civil Requests</h1>
        <p className="text-gray-600">Review and manage civil registration requests</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">Civil</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">Category</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">Description</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">Status</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {civils.map((civil) => (
                <tr key={civil.id} className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-4">
                      <img
                        src={civil.civilImage}
                        alt={civil.civilName}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div>
                        <p className="font-semibold text-gray-900">{civil.civilName}</p>
                        <p className="text-sm text-gray-500">Submitted: {civil.submittedDate}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                      {civil.category}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <p className="text-sm text-gray-900 max-w-xs truncate">
                      {civil.description}
                    </p>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-sm font-medium ${getStatusBadge(civil.status)}`}>
                      {getStatusIcon(civil.status)}
                      <span className="capitalize">{civil.status}</span>
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    {civil.status === 'pending' ? (
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleApprove(civil.id)}
                          className="flex items-center space-x-1 px-3 py-1 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 transition-colors"
                        >
                          <Check className="w-4 h-4" />
                          <span>Approve</span>
                        </button>
                        <button
                          onClick={() => handleBlock(civil.id)}
                          className="flex items-center space-x-1 px-3 py-1 bg-red-600 text-white text-sm rounded-lg hover:bg-red-700 transition-colors"
                        >
                          <X className="w-4 h-4" />
                          <span>Block</span>
                        </button>
                      </div>
                    ) : (
                      <span className="text-sm text-gray-500">No actions available</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CivilsTable;
