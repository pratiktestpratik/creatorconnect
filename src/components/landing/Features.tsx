import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Users, 
  MessageCircle, 
  CreditCard, 
  Shield, 
  Zap,
  Camera,
  Building,
  Globe,
  TrendingUp,
  Heart,
  Award
} from 'lucide-react';

export const Features: React.FC = () => {
  const creatorFeatures = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Plan Your Journey',
      description: 'Create detailed trip itineraries with dates, routes, and destinations to attract relevant businesses.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Showcase Your Audience',
      description: 'Display your follower count, engagement rates, and audience demographics to potential partners.'
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: 'Direct Communication',
      description: 'Chat directly with businesses, negotiate deals, and build lasting partnerships.'
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: 'Secure Payments',
      description: 'Receive payments safely through our integrated payment system with full transaction protection.'
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: 'Content Portfolio',
      description: 'Showcase your best work and content style to help businesses understand your brand.'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Verification Badge',
      description: 'Get verified to build trust and increase your chances of landing premium collaborations.'
    }
  ];

  const businessFeatures = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Discover Creators',
      description: 'Find content creators traveling to your location with advanced filtering by route, dates, and audience.'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Analytics Dashboard',
      description: 'Track your outreach performance, collaboration success rates, and ROI from creator partnerships.'
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: 'Business Profile',
      description: 'Create a compelling business profile showcasing your offerings, location, and collaboration history.'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Verified Partners',
      description: 'Connect only with verified creators to ensure authentic collaborations and quality content.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Quick Proposals',
      description: 'Send collaboration offers instantly with pre-built templates and automated follow-ups.'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Relationship Management',
      description: 'Build and maintain long-term relationships with creators through our CRM-style interface.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to{' '}
            <span className="gradient-text">Succeed</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful features designed specifically for creators and businesses to collaborate effectively
          </p>
        </motion.div>

        {/* Creator Features */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">For Content Creators</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tools to help you monetize your travels and build meaningful partnerships
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {creatorFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 card-hover group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Business Features */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">For Travel Businesses</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Connect with the right creators and maximize your marketing ROI
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {businessFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 card-hover group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Join thousands of creators and businesses already collaborating on CreatorConnect
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">
                Watch Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};