import React, { useState, useEffect } from 'react';
import { Cookie, Settings, Sparkles, Shield, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
  personalization: boolean;
}

const CookieBanner: React.FC = () => {
  const navigate = useNavigate();
  const [showBanner, setShowBanner] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  useEffect(() => {
    // Only show banner if NO previous consent
    const cookieConsent = localStorage.getItem('nudoo-cookie-consent');
    if (!cookieConsent) {
      // Delay for more elegant entrance
      setTimeout(() => setShowBanner(true), 1000);
    }
  }, []);

  const saveCookiePreferences = (prefs: CookiePreferences): void => {
    localStorage.setItem('nudoo-cookie-consent', 'true');
    localStorage.setItem('nudoo-cookie-preferences', JSON.stringify(prefs));
    localStorage.setItem('nudoo-cookie-timestamp', new Date().toISOString());
    
    // Individual flags for easy access
    localStorage.setItem('nudoo-analytics-enabled', prefs.analytics.toString());
    localStorage.setItem('nudoo-marketing-enabled', prefs.marketing.toString());
    localStorage.setItem('nudoo-functional-enabled', prefs.functional.toString());
    localStorage.setItem('nudoo-personalization-enabled', prefs.personalization.toString());
    
    console.log('🍪 Cookie Preferences Saved:', prefs);
    setShowBanner(false);
  };

  const acceptAllCookies = (): void => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
      personalization: true
    };
    saveCookiePreferences(allAccepted);
  };

  const acceptNecessaryOnly = (): void => {
    const necessaryOnly: CookiePreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
      personalization: false
    };
    saveCookiePreferences(necessaryOnly);
  };

  const goToCustomizePreferences = (): void => {
    navigate('/cookie-settings');
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 100, opacity: 0, scale: 0.95 }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 30,
            duration: 0.6 
          }}
          className="fixed bottom-0 left-0 right-0 z-50"
        >
          {/* Backdrop blur */}
          <div className="absolute inset-0 bg-black/5 backdrop-blur-sm" />
          
          {/* Main banner */}
          <div className="relative bg-white/95 backdrop-blur-xl border-t border-gray-200/50 shadow-2xl">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#2AB5F6]/5 via-transparent to-[#1976D2]/5" />
            
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                animate={{ 
                  x: [-20, 20, -20],
                  y: [-10, 10, -10],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 8,
                  ease: "easeInOut"
                }}
                className="absolute top-4 right-20 w-32 h-32 bg-gradient-to-br from-[#2AB5F6]/10 to-[#1976D2]/10 rounded-full blur-xl"
              />
              <motion.div
                animate={{ 
                  x: [20, -20, 20],
                  y: [10, -10, 10],
                  opacity: [0.2, 0.5, 0.2]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 6,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute bottom-4 left-40 w-24 h-24 bg-gradient-to-bl from-[#1976D2]/10 to-[#2AB5F6]/10 rounded-full blur-xl"
              />
            </div>

            <div className="relative p-6 lg:p-8">
              <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                  
                  {/* Content section */}
                  <div className="flex items-start gap-4 flex-1">
                    <motion.div
                      animate={{ 
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        repeat: Infinity, 
                        duration: 4,
                        ease: "easeInOut"
                      }}
                      className="relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-[#2AB5F6] to-[#1976D2] rounded-2xl blur-lg opacity-30" />
                      <Cookie className="relative w-10 h-10 text-[#2AB5F6] flex-shrink-0 mt-1 drop-shadow-lg" />
                    </motion.div>
                    
                    <div className="flex-1">
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text">
                          🍪 We value your privacy
                          <motion.span
                            animate={{ opacity: [1, 0.5, 1] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            className="ml-2"
                          >
                            <Sparkles className="inline w-5 h-5 text-[#2AB5F6]" />
                          </motion.span>
                        </h3>
                      </motion.div>
                      
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-gray-600 text-sm lg:text-base leading-relaxed max-w-2xl mb-4"
                      >
                        We use cookies and similar technologies to provide the best experience on our website. 
                        Some are necessary for functionality, while others help us improve our services and show you relevant content.
                      </motion.p>
                      
                      {/* Trust indicators */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="flex items-center gap-4 mb-4"
                      >
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <Shield className="w-4 h-4 text-green-500" />
                          <span>Secure data</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <Eye className="w-4 h-4 text-blue-500" />
                          <span>Full control</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <Cookie className="w-4 h-4 text-[#2AB5F6]" />
                          <span>Complete transparency</span>
                        </div>
                      </motion.div>
                      
                      <motion.button
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.9 }}
                        onClick={goToCustomizePreferences}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        className="group text-[#2AB5F6] hover:text-[#1976D2] text-sm lg:text-base font-semibold inline-flex items-center gap-2 transition-all duration-300 hover:gap-3"
                      >
                        <motion.div
                          animate={isHovered ? { rotate: 180 } : { rotate: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Settings className="w-4 h-4" />
                        </motion.div>
                        Customize preferences
                        <motion.div
                          animate={isHovered ? { x: 3 } : { x: 0 }}
                          className="text-[#2AB5F6]"
                        >
                          →
                        </motion.div>
                      </motion.button>
                    </div>
                  </div>
                  
                  {/* Actions section */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-stretch gap-3 min-w-fit"
                  >
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={acceptNecessaryOnly}
                      className="text-gray-600 hover:text-gray-800 px-6 py-3 text-sm lg:text-base font-medium transition-all duration-300 border border-gray-300 rounded-full hover:border-gray-400 hover:shadow-md backdrop-blur-sm bg-white/50"
                    >
                      Necessary only
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 20px 40px rgba(42, 181, 246, 0.3)"
                      }}
                      whileTap={{ scale: 0.95 }}
                      onClick={acceptAllCookies}
                      className="relative overflow-hidden bg-gradient-to-r from-[#2AB5F6] to-[#1976D2] text-white px-8 py-3 rounded-full text-sm lg:text-base font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl"
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                        animate={{ x: [-100, 100] }}
                        transition={{ 
                          repeat: Infinity, 
                          duration: 3,
                          ease: "linear"
                        }}
                      />
                      <span className="relative z-10 flex items-center gap-2">
                        ✨ Accept all
                      </span>
                    </motion.button>
                  </motion.div>
                </div>
              </div>
            </div>
            
            {/* Bottom decorative line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="h-1 bg-gradient-to-r from-[#2AB5F6] via-[#1976D2] to-[#2AB5F6] origin-left"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;