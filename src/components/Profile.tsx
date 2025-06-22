
import { useState } from 'react';
import { User, Mail, Shield, Edit2, Save, X, Lock, Eye, EyeOff } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useProfile } from '@/contexts/ProfileContext';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [showPasswordSection, setShowPasswordSection] = useState(false);
  const [showPasswords, setShowPasswords] = useState({
    old: false,
    new: false,
    confirm: false
  });
  const { profileData, updateProfile } = useProfile();
  const [editData, setEditData] = useState(profileData);
  const [passwordData, setPasswordData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const { toast } = useToast();

  const handleSave = () => {
    updateProfile(editData);
    setIsEditing(false);
    toast({
      title: "Profile Updated",
      description: "Your profile has been updated successfully.",
    });
  };

  const handleCancel = () => {
    setEditData(profileData);
    setIsEditing(false);
  };

  const handlePasswordChange = () => {
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      toast({
        title: "Error",
        description: "New passwords do not match.",
        variant: "destructive"
      });
      return;
    }

    if (passwordData.newPassword.length < 6) {
      toast({
        title: "Error",
        description: "New password must be at least 6 characters long.",
        variant: "destructive"
      });
      return;
    }

    // Simulate password change
    setPasswordData({
      oldPassword: '',
      newPassword: '',
      confirmPassword: ''
    });
    setShowPasswordSection(false);
    toast({
      title: "Password Changed Successfully",
      description: "Your password has been updated.",
    });
  };

  const togglePasswordVisibility = (field: 'old' | 'new' | 'confirm') => {
    setShowPasswords(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Profile Settings</h1>
          <p className="text-lg text-gray-600">Manage your account information and security settings</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Information Card */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="p-8">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-6">
                  <img
                    src="https://res.cloudinary.com/dvapijor2/image/upload/v1750501040/photo_5958308117588593150_y_f0cyin.jpg"
                    alt="Profile"
                    className="w-24 h-24 rounded-full object-cover border-4 border-gray-200 shadow-md"
                  />
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">
                      {profileData.firstName} {profileData.lastName}
                    </h2>
                    <p className="text-lg text-gray-600 mt-1">{profileData.role}</p>
                    <p className="text-sm text-gray-500 mt-1">{profileData.email}</p>
                  </div>
                </div>
                {!isEditing && (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="px-6 py-3 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors flex items-center space-x-2"
                  >
                    <Edit2 className="w-4 h-4" />
                    <span>Edit Profile</span>
                  </button>
                )}
              </div>

              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      <User className="w-4 h-4 inline mr-2" />
                      First Name
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={editData.firstName}
                        onChange={(e) => setEditData({ ...editData, firstName: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                      />
                    ) : (
                      <p className="text-gray-900 py-3 text-lg bg-gray-50 px-4 rounded-lg">{profileData.firstName}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      <User className="w-4 h-4 inline mr-2" />
                      Last Name
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={editData.lastName}
                        onChange={(e) => setEditData({ ...editData, lastName: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                      />
                    ) : (
                      <p className="text-gray-900 py-3 text-lg bg-gray-50 px-4 rounded-lg">{profileData.lastName}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Email Address
                  </label>
                  {isEditing ? (
                    <input
                      type="email"
                      value={editData.email}
                      onChange={(e) => setEditData({ ...editData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                    />
                  ) : (
                    <p className="text-gray-900 py-3 text-lg bg-gray-50 px-4 rounded-lg">{profileData.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    <Shield className="w-4 h-4 inline mr-2" />
                    Role
                  </label>
                  <div className="flex items-center">
                    <span className="px-4 py-2 text-sm font-medium bg-blue-100 text-blue-800 rounded-full">
                      {profileData.role}
                    </span>
                  </div>
                </div>

                {isEditing && (
                  <div className="flex items-center space-x-4 pt-8 border-t border-gray-200">
                    <button
                      onClick={handleSave}
                      className="px-8 py-3 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
                    >
                      <Save className="w-4 h-4" />
                      <span>Save Changes</span>
                    </button>
                    <button
                      onClick={handleCancel}
                      className="px-8 py-3 text-sm font-medium text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors flex items-center space-x-2"
                    >
                      <X className="w-4 h-4" />
                      <span>Cancel</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Security Settings Card */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Security Settings</h3>
              
              <button
                onClick={() => setShowPasswordSection(!showPasswordSection)}
                className="w-full px-4 py-3 text-sm font-medium text-gray-700 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2 mb-4"
              >
                <Lock className="w-4 h-4" />
                <span>Change Password</span>
              </button>

              {showPasswordSection && (
                <div className="space-y-4 mt-6 p-4 bg-gray-50 rounded-lg">
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Current Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPasswords.old ? "text" : "password"}
                        value={passwordData.oldPassword}
                        onChange={(e) => setPasswordData({ ...passwordData, oldPassword: e.target.value })}
                        className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <button
                        type="button"
                        onClick={() => togglePasswordVisibility('old')}
                        className="absolute right-3 top-2 text-gray-400 hover:text-gray-600"
                      >
                        {showPasswords.old ? <EyeOff size={16} /> : <Eye size={16} />}
                      </button>
                    </div>
                  </div>

                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      New Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPasswords.new ? "text" : "password"}
                        value={passwordData.newPassword}
                        onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                        className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <button
                        type="button"
                        onClick={() => togglePasswordVisibility('new')}
                        className="absolute right-3 top-2 text-gray-400 hover:text-gray-600"
                      >
                        {showPasswords.new ? <EyeOff size={16} /> : <Eye size={16} />}
                      </button>
                    </div>
                  </div>

                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Confirm New Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPasswords.confirm ? "text" : "password"}
                        value={passwordData.confirmPassword}
                        onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
                        className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <button
                        type="button"
                        onClick={() => togglePasswordVisibility('confirm')}
                        className="absolute right-3 top-2 text-gray-400 hover:text-gray-600"
                      >
                        {showPasswords.confirm ? <EyeOff size={16} /> : <Eye size={16} />}
                      </button>
                    </div>
                  </div>

                  <div className="flex space-x-3 pt-4">
                    <button
                      onClick={handlePasswordChange}
                      className="flex-1 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Save Password
                    </button>
                    <button
                      onClick={() => {
                        setShowPasswordSection(false);
                        setPasswordData({ oldPassword: '', newPassword: '', confirmPassword: '' });
                      }}
                      className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
