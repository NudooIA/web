import React from 'react';
import { Home, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2AB5F6]/10 to-[#1976D2]/10 flex items-center justify-center px-4">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-md"
      >
        <div className="mb-8">
          <div className="w-24 h-24 bg-gradient-to-r from-[#2AB5F6] to-[#1976D2] rounded-full mx-auto mb-6 flex items-center justify-center">
            <span className="text-white font-bold text-3xl">404</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Page not found
          </h1>
          <p className="text-gray-600 mb-8">
            Sorry, the page you're looking for doesn't exist or has been moved. 
            Our AI agents are working to resolve any issues.
          </p>
        </div>

        <div className="space-y-4">
          <a 
            href="/"
            className="inline-flex items-center bg-gradient-to-r from-[#2AB5F6] to-[#1976D2] text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            <Home className="w-5 h-5 mr-2" />
            Back to home
          </a>
          
          <div className="text-center">
            <p className="text-gray-500 text-sm mb-2">Need help?</p>
            <a 
              href="https://wa.me/34655217549"
              className="inline-flex items-center text-[#2AB5F6] hover:text-[#1976D2] transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              Contact us on WhatsApp
            </a>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/20"
        >
          <h3 className="font-semibold text-gray-900 mb-2">Did you know...?</h3>
          <p className="text-gray-600 text-sm">
            Our AI systems can automate up to 80% of repetitive business tasks, 
            freeing up time for you to focus on what really matters.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound;