import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, User, Eye, EyeOff, Building, MapPin, Instagram, Youtube } from 'lucide-react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { RegisterData } from '../../types/auth';

interface RegisterFormProps {
  onSuccess: () => void;
  onSwitchToLogin: () => void;
  defaultUserType?: 'creator' | 'organizer';
}

export const RegisterForm: React.FC<RegisterFormProps> = ({
  onSuccess,
  onSwitchToLogin,
  defaultUserType
}) => {
  const [formData, setFormData] = useState<RegisterData>({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    userType: defaultUserType || 'creator',
    bio: '',
    instagram: '',
    youtube: '',
    niche: [],
    location: '',
    businessName: '',
    businessType: 'hotel',
    businessDescription: '',
    website: '',
    phone: ''
  });
  
  const [errors, setErrors] = useState<Partial<RegisterData>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [step, setStep] = useState(1);

  const niches = [
    'Travel', 'Food', 'Fashion', 'Lifestyle', 'Adventure', 'Photography',
    'Wellness', 'Technology', 'Art', 'Music', 'Fitness', 'Beauty'
  ];

  const businessTypes = [
    { value: 'hotel', label: 'Hotel/Accommodation' },
    { value: 'restaurant', label: 'Restaurant/Cafe' },
    { value: 'shop', label: 'Shop/Retail' },
    { value: 'tour_operator', label: 'Tour Operator' },
    { value: 'other', label: 'Other' }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name as keyof RegisterData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleNicheToggle = (niche: string) => {
    setFormData(prev => ({
      ...prev,
      niche: prev.niche?.includes(niche)
        ? prev.niche.filter(n => n !== niche)
        : [...(prev.niche || []), niche]
    }));
  };

  const validateStep1 = (): boolean => {
    const newErrors: Partial<RegisterData> = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!formData.name) {
      newErrors.name = 'Name is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = (): boolean => {
    const newErrors: Partial<RegisterData> = {};

    if (formData.userType === 'creator') {
      if (!formData.location) {
        newErrors.location = 'Location is required';
      }
      if (!formData.niche || formData.niche.length === 0) {
        newErrors.niche = 'Please select at least one niche';
      }
    } else {
      if (!formData.businessName) {
        newErrors.businessName = 'Business name is required';
      }
      if (!formData.location) {
        newErrors.location = 'Business location is required';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep1()) {
      setStep(2);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateStep2()) return;

    setIsLoading(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Registration data:', formData);
      onSuccess();
    } catch (error) {
      console.error('Registration error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Create Account</h2>
        <p className="text-gray-600">
          Join CreatorConnect as a {formData.userType === 'creator' ? 'Content Creator' : 'Business Organizer'}
        </p>
      </div>

      {/* Progress indicator */}
      <div className="flex items-center justify-center space-x-4 mb-6">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
          step >= 1 ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-600'
        }`}>
          1
        </div>
        <div className={`w-16 h-1 ${step >= 2 ? 'bg-primary-600' : 'bg-gray-200'}`} />
        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
          step >= 2 ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-600'
        }`}>
          2
        </div>
      </div>

      {step === 1 ? (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-4"
        >
          {/* User Type Selection */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">I am a</label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, userType: 'creator' }))}
                className={`p-4 border-2 rounded-lg text-left transition-all ${
                  formData.userType === 'creator'
                    ? 'border-primary-600 bg-primary-50 text-primary-700'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                <div className="font-medium">Content Creator</div>
                <div className="text-sm text-gray-600">Share your travels</div>
              </button>
              <button
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, userType: 'organizer' }))}
                className={`p-4 border-2 rounded-lg text-left transition-all ${
                  formData.userType === 'organizer'
                    ? 'border-primary-600 bg-primary-50 text-primary-700'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                <div className="font-medium">Business</div>
                <div className="text-sm text-gray-600">Connect with creators</div>
              </button>
            </div>
          </div>

          <Input
            label="Full Name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
            icon={<User className="w-5 h-5" />}
            placeholder="Enter your full name"
            required
          />

          <Input
            label="Email Address"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            icon={<Mail className="w-5 h-5" />}
            placeholder="Enter your email"
            required
          />

          <div className="relative">
            <Input
              label="Password"
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
              icon={<Lock className="w-5 h-5" />}
              placeholder="Create a password"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-8 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>

          <div className="relative">
            <Input
              label="Confirm Password"
              type={showConfirmPassword ? 'text' : 'password'}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              error={errors.confirmPassword}
              icon={<Lock className="w-5 h-5" />}
              placeholder="Confirm your password"
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-8 text-gray-400 hover:text-gray-600"
            >
              {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>

          <Button
            type="button"
            onClick={handleNext}
            variant="primary"
            size="lg"
            className="w-full"
          >
            Continue
          </Button>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-4"
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            {formData.userType === 'creator' ? (
              <>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Bio</label>
                  <textarea
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                    rows={3}
                    className="form-input resize-none"
                    placeholder="Tell us about yourself and your content..."
                  />
                </div>

                <Input
                  label="Location"
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  error={errors.location}
                  icon={<MapPin className="w-5 h-5" />}
                  placeholder="Your city, country"
                  required
                />

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Content Niches <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {niches.map(niche => (
                      <button
                        key={niche}
                        type="button"
                        onClick={() => handleNicheToggle(niche)}
                        className={`p-2 text-sm rounded-lg border transition-all ${
                          formData.niche?.includes(niche)
                            ? 'border-primary-600 bg-primary-50 text-primary-700'
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                      >
                        {niche}
                      </button>
                    ))}
                  </div>
                  {errors.niche && (
                    <p className="text-sm text-red-600">{errors.niche}</p>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Input
                    label="Instagram Handle"
                    type="text"
                    name="instagram"
                    value={formData.instagram}
                    onChange={handleChange}
                    icon={<Instagram className="w-5 h-5" />}
                    placeholder="@username"
                  />
                  <Input
                    label="YouTube Channel"
                    type="text"
                    name="youtube"
                    value={formData.youtube}
                    onChange={handleChange}
                    icon={<Youtube className="w-5 h-5" />}
                    placeholder="Channel name"
                  />
                </div>
              </>
            ) : (
              <>
                <Input
                  label="Business Name"
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  error={errors.businessName}
                  icon={<Building className="w-5 h-5" />}
                  placeholder="Your business name"
                  required
                />

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Business Type</label>
                  <select
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    className="form-input"
                  >
                    {businessTypes.map(type => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                <Input
                  label="Business Location"
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  error={errors.location}
                  icon={<MapPin className="w-5 h-5" />}
                  placeholder="Business address or city"
                  required
                />

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Business Description</label>
                  <textarea
                    name="businessDescription"
                    value={formData.businessDescription}
                    onChange={handleChange}
                    rows={3}
                    className="form-input resize-none"
                    placeholder="Describe your business and what you offer..."
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Input
                    label="Website"
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    placeholder="https://yourwebsite.com"
                  />
                  <Input
                    label="Phone Number"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </>
            )}

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="terms"
                required
                className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
              />
              <label htmlFor="terms" className="text-sm text-gray-600">
                I agree to the{' '}
                <a href="#" className="text-primary-600 hover:text-primary-700">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" className="text-primary-600 hover:text-primary-700">
                  Privacy Policy
                </a>
              </label>
            </div>

            <div className="flex space-x-3">
              <Button
                type="button"
                onClick={() => setStep(1)}
                variant="outline"
                size="lg"
                className="flex-1"
              >
                Back
              </Button>
              <Button
                type="submit"
                variant="primary"
                size="lg"
                isLoading={isLoading}
                className="flex-1"
              >
                Create Account
              </Button>
            </div>
          </form>
        </motion.div>
      )}

      <div className="text-center">
        <p className="text-gray-600">
          Already have an account?{' '}
          <button
            onClick={onSwitchToLogin}
            className="text-primary-600 hover:text-primary-700 font-medium"
          >
            Sign in
          </button>
        </p>
      </div>
    </motion.div>
  );
};