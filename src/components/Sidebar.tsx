import { useState } from 'react';
import { Users, FileText, AlertTriangle, LogOut, Menu, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useProfile } from '@/contexts/ProfileContext';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  onLogout: () => void;
  /** Optional callback to notify parent when hovered state changes */
  onHoverChange?: (hovered: boolean) => void;
}

const Sidebar = ({ activeSection, onSectionChange, onLogout, onHoverChange }: SidebarProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { profileData } = useProfile();

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Menu },
    { id: 'users', label: 'Users', icon: Users },
    { id: 'civils', label: 'Civils', icon: FileText },
    { id: 'report', label: 'Reports', icon: AlertTriangle },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  const isExpanded = isHovered;

  const handleMouseEnter = () => {
    setIsHovered(true);
    onHoverChange?.(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    onHoverChange?.(false);
  };

  return (
    <div
      className={cn(
        'bg-slate-900 text-white min-h-screen transition-all duration-300 flex flex-col fixed left-0 top-0 bottom-0 z-10',
        isExpanded ? 'w-64' : 'w-16'
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Header / Logo */}
      {isExpanded && (
        <div className="p-4 border-b border-slate-700 flex items-center justify-center">
          <img
            src="/lovable-uploads/34b7fbe1-d23c-4268-bdee-3ee23a9a0cca.png"
            alt="CIVILCO Logo"
            className="h-16 w-auto"
          />
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-1 p-2">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => onSectionChange(item.id)}
                className={cn(
                  'w-full flex items-center p-3 rounded-lg transition-colors',
                  isExpanded ? 'justify-start' : 'justify-center',
                  activeSection === item.id
                    ? 'bg-blue-600 text-white'
                    : 'hover:bg-slate-800 text-slate-300'
                )}
              >
                <span
                  className={cn(
                    'transition-all duration-300 flex items-center justify-center',
                    isExpanded ? 'w-6 h-6' : 'w-10 h-10'
                  )}
                >
                  <item.icon size={isExpanded ? 24 : 32} />
                </span>
                {isExpanded && <span className="ml-3 text-base">{item.label}</span>}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* User Info & Logout */}
      <div className="p-4 border-t border-slate-700">
        {isExpanded && (
          <div className="flex items-center mb-4">
            <img
              src="https://res.cloudinary.com/dvapijor2/image/upload/v1750501040/photo_5958308117588593150_y_f0cyin.jpg"
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="ml-3">
              <p className="text-sm font-medium">
                {profileData.firstName} {profileData.lastName}
              </p>
              <p className="text-xs text-slate-400">{profileData.role}</p>
            </div>
          </div>
        )}
        <button
          onClick={onLogout}
          className={cn(
            'w-full flex items-center p-3 rounded-lg transition-colors hover:bg-red-600 text-slate-300',
            isExpanded ? 'justify-start' : 'justify-center'
          )}
        >
          <span
            className={cn(
              'transition-all duration-300 flex items-center justify-center',
              isExpanded ? 'w-6 h-6' : 'w-10 h-10'
            )}
          >
            <LogOut size={isExpanded ? 24 : 32} />
          </span>
          {isExpanded && <span className="ml-3 text-base">Logout</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
