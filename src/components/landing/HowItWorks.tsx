import React from 'react';
import { motion } from 'framer-motion';
import { 
  UserPlus, 
  MapPin, 
  Search, 
  MessageCircle, 
  Handshake, 
  Camera,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const creatorSteps = [
    {
      icon: <UserPlus className="w-8 h-8" />,
      title: 'Create Your Profile',
      description: 'Sign up and build your creator profile with audience insights, content samples, and social media stats.',
      details: ['Upload portfolio', 'Connect social accounts', 'Add audience demographics']
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: 'Plan Your Trip',
      description: 'Create detailed trip listings with your route, dates, and the type of collaborations you\'re seeking.',
      details: ['Set travel dates', 'Define your route', 'Specify collaboration needs']
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: 'Receive Offers',
      description: 'Get collaboration offers from businesses along your route and negotiate terms directly.',
      details: ['Review business offers', 'Chat with partners', 'Negotiate terms']
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: 'Create & Deliver',
      description: 'Travel, create amazing content, and deliver on your collaboration agreements.',
      details: ['Create quality content', 'Meet deliverables', 'Get paid securely']
    }
  ];

  const businessSteps = [
    {
      icon: <UserPlus className="w-8 h-8" />,
      title: 'Setup Business Profile',
      description: 'Create your business profile with location, services, and collaboration preferences.',
      details: ['Add business details', 'Upload photos', 'Set collaboration budget']
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: 'Discover Creators',
      description: 'Browse creators traveling to your area and filter by audience, niche, and travel dates.',
      details: ['Search by location', 'Filter by audience size', 'Check travel dates']
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: 'Send Proposals',
      description: 'Send collaboration offers with your terms, deliverables, and compensation details.',
      details: ['Create custom offers', 'Set clear deliverables', 'Propose compensation']
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Track Results',
      description: 'Monitor collaboration progress and measure the impact of your creator partnerships.',
      details: ['Track deliverables', 'Measure engagement', 'Analyze ROI']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple steps to start collaborating and building meaningful partnerships
          </p>
        </motion.div>

        {/* Creator Journey */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">For Content Creators</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From profile creation to successful collaborations in 4 simple steps
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-200 via-primary-400 to-primary-200 transform -translate-y-1/2"></div>
            
            <div className="grid lg:grid-cols-4 gap-8">
              {creatorSteps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={stepVariants}
                  className="relative"
                >
                  {/* Step Number */}
                  <div className="flex items-center justify-center mb-6 lg:mb-8">
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white shadow-lg">
                        {step.icon}
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-white border-2 border-primary-500 rounded-full flex items-center justify-center text-primary-600 font-bold text-sm">
                        {index + 1}
                      </div>
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="text-center lg:text-left">
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">
                      {step.title}
                    </h4>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {step.description}
                    </p>
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center text-sm text-gray-500">
                          <CheckCircle className="w-4 h-4 text-primary-500 mr-2 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Arrow for mobile */}
                  {index < creatorSteps.length - 1 && (
                    <div className="lg:hidden flex justify-center mt-8">
                      <ArrowRight className="w-6 h-6 text-primary-400" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Business Journey */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">For Travel Businesses</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Connect with creators and grow your business through authentic partnerships
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-secondary-200 via-secondary-400 to-secondary-200 transform -translate-y-1/2"></div>
            
            <div className="grid lg:grid-cols-4 gap-8">
              {businessSteps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={stepVariants}
                  className="relative"
                >
                  {/* Step Number */}
                  <div className="flex items-center justify-center mb-6 lg:mb-8">
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-full flex items-center justify-center text-white shadow-lg">
                        {step.icon}
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-white border-2 border-secondary-500 rounded-full flex items-center justify-center text-secondary-600 font-bold text-sm">
                        {index + 1}
                      </div>
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="text-center lg:text-left">
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">
                      {step.title}
                    </h4>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {step.description}
                    </p>
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center text-sm text-gray-500">
                          <CheckCircle className="w-4 h-4 text-secondary-500 mr-2 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Arrow for mobile */}
                  {index < businessSteps.length - 1 && (
                    <div className="lg:hidden flex justify-center mt-8">
                      <ArrowRight className="w-6 h-6 text-secondary-400" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Success Stories Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Join Successful Collaborations
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Over 5,000 successful collaborations completed with an average satisfaction rate of 4.8/5
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">5,000+</div>
              <div className="text-gray-600">Collaborations</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary-600 mb-2">4.8/5</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent-600 mb-2">$2M+</div>
              <div className="text-gray-600">Creator Earnings</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};