export interface User {
  id: string;
  email: string;
  name: string;
  userType: 'creator' | 'organizer';
  avatar?: string;
  isVerified: boolean;
  createdAt: string;
}

export interface Creator extends User {
  userType: 'creator';
  bio?: string;
  socialMedia: {
    instagram?: string;
    youtube?: string;
    tiktok?: string;
    twitter?: string;
  };
  followers: number;
  niche: string[];
  location: string;
  averageEngagement?: number;
}

export interface Organizer extends User {
  userType: 'organizer';
  businessName: string;
  businessType: 'hotel' | 'restaurant' | 'shop' | 'tour_operator' | 'other';
  businessDescription?: string;
  location: string;
  website?: string;
  phone?: string;
  businessLicense?: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  userType: 'creator' | 'organizer';
  // Creator specific
  bio?: string;
  instagram?: string;
  youtube?: string;
  niche?: string[];
  location?: string;
  // Organizer specific
  businessName?: string;
  businessType?: string;
  businessDescription?: string;
  website?: string;
  phone?: string;
}