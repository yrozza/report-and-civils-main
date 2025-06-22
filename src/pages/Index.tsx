import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Dashboard from '@/components/Dashboard';
import UsersTable from '@/components/UsersTable';
import CivilsTable from '@/components/CivilsTable';
import ReportsTable from '@/components/ReportsTable';
import Profile from '@/components/Profile';
import LoginForm from '@/components/LoginForm';
import { ProfileProvider } from '@/contexts/ProfileContext';
import { cn } from '@/lib/utils'; // Ensure this exists

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeSection, setActiveSection] = useState('dashboard');
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);
  const [isSidebarHovered, setIsSidebarHovered] = useState(false); // Track sidebar hover state

  const handleLogin = (email: string, password: string) => {
    if (email === 'spectreomar242003@gmail.com' && password === 'admin123') {
      setIsAuthenticated(true);
    } else {
      alert('Invalid credentials. Please use the demo credentials provided.');
    }
  };

  const handleLogout = () => {
    setShowLogoutDialog(true);
  };

  const confirmLogout = () => {
    setIsAuthenticated(false);
    setActiveSection('dashboard');
    setShowLogoutDialog(false);
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'users':
        return <UsersTable />;
      case 'civils':
        return <CivilsTable />;
      case 'report':
        return <ReportsTable />;
      case 'profile':
        return <Profile />;
      default:
        return <Dashboard />;
    }
  };

  if (!isAuthenticated) {
    return <LoginForm onLogin={handleLogin} />;
  }

  return (
    <ProfileProvider>
      <div className="min-h-screen bg-gray-50 flex w-full">
        {/* Sidebar */}
        <Sidebar
          activeSection={activeSection}
          onSectionChange={setActiveSection}
          onLogout={handleLogout}
          onHoverChange={setIsSidebarHovered} // Sidebar hover handler
        />

        {/* Main Content */}
        <div
          className={cn(
            'flex-1 transition-all duration-300 overflow-hidden',
            isSidebarHovered ? 'ml-64' : 'ml-16' // Shift content based on sidebar width
          )}
        >
          <div className="h-full overflow-y-auto">{renderContent()}</div>
        </div>

        {/* Logout Dialog */}
        <AlertDialog open={showLogoutDialog} onOpenChange={setShowLogoutDialog}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Confirm Logout</AlertDialogTitle>
              <AlertDialogDescription>
                Are you sure you want to log out?
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={confirmLogout}>Yes, Logout</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </ProfileProvider>
  );
};

export default Index;
