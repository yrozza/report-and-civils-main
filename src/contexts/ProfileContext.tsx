
import { createContext, useContext, useState, ReactNode } from 'react';

interface ProfileData {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
}

interface ProfileContextType {
  profileData: ProfileData;
  updateProfile: (data: ProfileData) => void;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  return context;
};

export const ProfileProvider = ({ children }: { children: ReactNode }) => {
  const [profileData, setProfileData] = useState<ProfileData>({
    firstName: 'Omar',
    lastName: 'Ahmed',
    email: 'admin@example.com',
    role: 'Super Admin'
  });

  const updateProfile = (data: ProfileData) => {
    setProfileData(data);
  };

  return (
    <ProfileContext.Provider value={{ profileData, updateProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};
