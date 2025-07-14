import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, MapPin, Users, Star } from 'lucide-react';
import { Button } from '../ui/Button';
import { AuthModal } from '../auth/AuthModal';

export const Hero: React.FC = () => {
  const [authModal, setAuthModal] = useState<{
    isOpen: boolean;
    mode: 'login' | 'register';
    userType?: 'creator' | 'organizer';
  }>({
    isOpen: false,
    mode: 'login'
  });

  const openAuthModal = (mode: 'login' | 'register', userType?: 'creator' | 'organizer') => {
    setAuthModal({ isOpen: true, mode, userType });
  };

  const closeAuthModal = () => {
    setAuthModal({ isOpen: false, mode: 'login' });
  };

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-accent-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow animation-delay-4000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6"
              >
                <Star className="w-4 h-4 mr-2" />
                Trusted by 10,000+ creators worldwide
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              >
                Connect{' '}
                <span className="gradient-text">Creators</span>
                <br />
                with Travel{' '}
                <span className="gradient-text">Businesses</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-600 mb-8 max-w-2xl"
              >
                The ultimate platform where content creators and travel businesses collaborate. 
                Plan trips, discover opportunities, and create amazing partnerships along your journey.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
              >
                <Button
                  onClick={() => openAuthModal('register', 'creator')}
                  variant="primary"
                  size="lg"
                  className="group"
                >
                  Join as Creator
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  onClick={() => openAuthModal('register', 'organizer')}
                  variant="outline"
                  size="lg"
                  className="group"
                >
                  Join as Business
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex items-center justify-center lg:justify-start space-x-6 text-sm text-gray-600"
              >
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2 text-primary-600" />
                  10K+ Active Users
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-primary-600" />
                  50+ Countries
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 mr-2 text-primary-600" />
                  4.9/5 Rating
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content - Hero Image/Animation */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                {/* Main Hero Card */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="bg-white rounded-2xl shadow-2xl p-8 relative z-10"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-900">Delhi → Manali</h3>
                      <p className="text-gray-600 text-sm">5-day adventure trip</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="w-4 h-4 mr-2" />
                      50K followers • Travel & Adventure
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Star className="w-4 h-4 mr-2" />
                      Looking for: Hotels, Restaurants, Activities
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button size="sm" variant="primary" className="flex-1">
                      Send Offer
                    </Button>
                    <Button size="sm" variant="outline">
                      View Profile
                    </Button>
                  </div>
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 bg-secondary-500 text-white p-3 rounded-xl shadow-lg z-20"
                >
                  <div className="text-xs font-medium">New Match!</div>
                  <div className="text-xs opacity-90">Hotel in Manali</div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0], rotate: [0, -3, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 -left-4 bg-accent-500 text-white p-3 rounded-xl shadow-lg z-20"
                >
                  <div className="text-xs font-medium">5 Offers</div>
                  <div className="text-xs opacity-90">Received today</div>
                </motion.div>

                {/* Background Decorative Elements */}
                <div className="absolute -top-8 -left-8 w-24 h-24 bg-primary-200 rounded-full opacity-50 animate-pulse"></div>
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-secondary-200 rounded-full opacity-50 animate-pulse animation-delay-1000"></div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
          >
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
          </motion.div>
        </motion.div>
      </section>

      <AuthModal
        isOpen={authModal.isOpen}
        onClose={closeAuthModal}
        initialMode={authModal.mode}
        userType={authModal.userType}
      />
    </>
  );
};