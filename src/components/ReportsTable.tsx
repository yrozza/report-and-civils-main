import { useState } from 'react';
import { Eye, AlertTriangle, Calendar, User, Trash2 } from 'lucide-react';
import semi from '../assets/semicolon.jpg';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { useToast } from '@/hooks/use-toast';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import Post from './Post'; // Import the Post component

interface Report {
  id: number;
  postId: number;
  postContent: string;
  civilOwner: string;
  civilImage: string;
  reporterName: string;
  description: string;
  reportDate: string;
  category: 'post' | 'event';
  action?: {
    type: 'dismissed' | 'removed';
    reason?: string;
    date: string;
  };
}

const ReportsTable = () => {
  const [reports, setReports] = useState<Report[]>([
    {
      id: 1,
      postId: 101,
      postContent: 'This is an inappropriate post that violates community guidelines...',
      civilOwner: 'semicolon',
      civilImage: semi,
      reporterName: 'youssef rozza',
      description: 'This post contains inappropriate content and should be reviewed immediately.',
      reportDate: '2025-06-22',
      category: 'post',
    },
    {
      id: 2,
      postId: 102,
      postContent: 'Spam content being posted repeatedly in the community feed...',
      civilOwner: 'Tech Education Hub',
      civilImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=100&h=100&fit=crop',
      reporterName: 'Jane Smith',
      description: 'User is posting spam content multiple times per day.',
      reportDate: '2024-01-14',
      category: 'event',
    },
    {
      id: 3,
      postId: 103,
      postContent: 'Misleading information about local events and services...',
      civilOwner: 'Local Food Bank',
      civilImage: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=100&h=100&fit=crop',
      reporterName: 'Mike Johnson',
      description: 'Post contains false information about service availability.',
      reportDate: '2024-01-13',
      category: 'post',
    },
  ]);

  const [selectedCategory, setSelectedCategory] = useState<'all' | 'post' | 'event'>('all');
  const [removalReason, setRemovalReason] = useState('');
  const [selectedReport, setSelectedReport] = useState<Report | null>(null);
  const { toast } = useToast();
  const [popupVisible, setPopupVisible] = useState(false);

  const filteredReports = reports.filter(report =>
    selectedCategory === 'all' || report.category === selectedCategory
  );

  const handleRemoveContent = () => {
    if (selectedReport && removalReason.trim()) {
      const updatedReports = reports.map(report =>
        report.id === selectedReport.id
          ? {
              ...report,
              action: {
                type: 'removed' as const,
                reason: removalReason,
                date: new Date().toLocaleDateString(),
              },
            }
          : report
      );

      setReports(updatedReports);

      toast({
        title: 'Content Removed',
        description: `The ${selectedReport.category} has been removed successfully.`,
      });

      setRemovalReason('');
      setSelectedReport(null);
    }
  };

  const handleDismissReport = (reportId: number) => {
    const updatedReports = reports.map(report =>
      report.id === reportId
        ? {
            ...report,
            action: {
              type: 'dismissed' as const,
              date: new Date().toLocaleDateString(),
            },
          }
        : report
    );

    setReports(updatedReports);

    toast({
      title: 'Report Dismissed',
      description: 'The report has been dismissed successfully.',
    });
  };

  const handlePopupToggle = (report: Report | null) => {
    setSelectedReport(report);
    setPopupVisible(!popupVisible);
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Reports Management</h1>
        <p className="text-gray-600">Review and manage user reports in chronological order</p>
      </div>

      {/* Category Filter */}
      <div className="mb-6">
        <div className="flex space-x-4">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedCategory === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            All Reports
          </button>
          <button
            onClick={() => setSelectedCategory('post')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedCategory === 'post'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Posts
          </button>
          <button
            onClick={() => setSelectedCategory('event')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedCategory === 'event'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Events
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {filteredReports.map((report) => (
          <div key={report.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <img
                    src={report.civilImage}
                    alt={report.civilOwner}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">{report.civilOwner}</h3>
                    <div className="flex items-center space-x-2">
                      <p className="text-sm text-gray-500">
                        {report.category === 'post' ? 'Post' : 'Event'} ID: {report.postId}
                      </p>
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded-full ${
                          report.category === 'post'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-green-100 text-green-800'
                        }`}
                      >
                        {report.category === 'post' ? 'Post' : 'Event'}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="w-4 h-4 mr-1" />
                  {report.reportDate}
                  <button
                    className="ml-4 text-gray-500 hover:text-blue-500"
                    onClick={() => handlePopupToggle(report)} // Show post in popup
                  >
                    <FaRegEye className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Description Section */}
              <div className="mb-6">
                <div className="flex items-center space-x-2 mb-3">
                  <User className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">Reported by:</span>
                  <span className="text-sm font-medium text-gray-900">{report.reporterName}</span>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-700 leading-relaxed">{report.description}</p>
                </div>
              </div>

              {/* Action Status */}
              {report.action && (
                <div className="mb-4 p-4 rounded-lg bg-blue-50 border border-blue-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded-full ${
                          report.action.type === 'removed'
                            ? 'bg-red-100 text-red-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {report.action.type === 'removed' ? 'Removed' : 'Dismissed'}
                      </span>
                      <span className="ml-2 text-sm text-gray-600">on {report.action.date}</span>
                    </div>
                  </div>
                  {report.action.reason && (
                    <p className="mt-2 text-sm text-gray-700">
                      <strong>Reason:</strong> {report.action.reason}
                    </p>
                  )}
                </div>
              )}

              {/* Actions */}
              {!report.action && (
                <div className="flex items-center justify-end space-x-3 pt-4 border-t border-gray-200">
                  <button
                    onClick={() => handleDismissReport(report.id)}
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Dismiss Report
                  </button>

                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <button
                        onClick={() => setSelectedReport(report)}
                        className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors flex items-center space-x-2"
                      >
                        <Trash2 className="w-4 h-4" />
                        <span>Remove {report.category === 'post' ? 'Post' : 'Event'}</span>
                      </button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Remove {report.category === 'post' ? 'Post' : 'Event'}</AlertDialogTitle>
                        <AlertDialogDescription>
                          Please provide a reason for removing this {report.category}. This action cannot be undone.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <div className="my-4">
                        <textarea
                          value={removalReason}
                          onChange={(e) => setRemovalReason(e.target.value)}
                          placeholder={`Why are you removing this ${report.category}?`}
                          className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                          rows={4}
                        />
                      </div>
                      <AlertDialogFooter>
                        <AlertDialogCancel
                          onClick={() => {
                            setRemovalReason('');
                            setSelectedReport(null);
                          }}
                        >
                          Cancel
                        </AlertDialogCancel>
                        <AlertDialogAction
                          onClick={handleRemoveContent}
                          disabled={!removalReason.trim()}
                          className="bg-red-600 hover:bg-red-700"
                        >
                          Remove {report.category === 'post' ? 'Post' : 'Event'}
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Popup Display */}
        {popupVisible && selectedReport && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg max-w-md w-full">
              <h2 className="text-xl font-semibold mb-4">Post Content</h2>

              {/* Render the Post Component with all details */}
              <Post
                userName={selectedReport.civilOwner}
                userImage={selectedReport.civilImage}
                timestamp={selectedReport.reportDate}
                text={selectedReport.postContent}
                images={[selectedReport.civilImage]} // Add images as needed
                videos={[]} // Add videos as needed
              />

              <button
                onClick={() => setPopupVisible(false)} // Close the popup
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReportsTable;
