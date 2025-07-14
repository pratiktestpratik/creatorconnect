import React from 'react';
import { motion } from 'framer-motion';
import { Users, MapPin, Handshake, DollarSign, Star, TrendingUp } from 'lucide-react';

export const Stats: React.FC = () => {
  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: '10,000+',
      label: 'Active Creators',
      description: 'Content creators from around the world',
      color: 'from-primary-500 to-primary-600'
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      number: '2,500+',
      label: 'Partner Businesses',
      description: 'Hotels, restaurants, and travel services',
      color: 'from-secondary-500 to-secondary-600'
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      number: '15,000+',
      label: 'Collaborations',
      description: 'Successful partnerships completed',
      color: 'from-accent-500 to-accent-600'
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      number: '$5M+',
      label: 'Creator Earnings',
      description: 'Total paid to creators through our platform',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <Star className="w-8 h-8" />,
      number: '4.9/5',
      label: 'Average Rating',
      description: 'User satisfaction across all collaborations',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      number: '150%',
      label: 'Growth Rate',
      description: 'Year-over-year platform growth',
      color: 'from-purple-500 to-purple-600'
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
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Thousands{' '}
            <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              Worldwide
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join a thriving community of creators and businesses building authentic partnerships
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group"
            >
              <div className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg rounded-xl p-6 border border-white border-opacity-10 hover:bg-opacity-10 transition-all duration-300 h-full">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                  {stat.icon}
                </div>

                {/* Number */}
                <div className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {stat.number}
                </div>

                {/* Label */}
                <div className="text-lg font-semibold text-white mb-2">
                  {stat.label}
                </div>

                {/* Description */}
                <div className="text-gray-400 text-sm leading-relaxed">
                  {stat.description}
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Join the Community?
            </h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Start building meaningful partnerships today. Whether you're a creator or a business, 
              CreatorConnect has everything you need to succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Started Free
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap justify-center items-center gap-8 text-gray-400"
        >
          <div className="flex items-center space-x-2">
            <Shield className="w-5 h-5" />
            <span className="text-sm">SSL Secured</span>
          </div>
          <div className="flex items-center space-x-2">
            <Star className="w-5 h-5" />
            <span className="text-sm">Verified Partners</span>
          </div>
          <div className="flex items-center space-x-2">
            <DollarSign className="w-5 h-5" />
            <span className="text-sm">Secure Payments</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="w-5 h-5" />
            <span className="text-sm">24/7 Support</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};