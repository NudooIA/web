import React, { useState, useEffect } from 'react';
import { Cookie, Shield, BarChart3, Users, Settings, Eye, ArrowLeft, Info, CheckCircle, Save } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
  personalization: boolean;
}

interface CookieCategory {
  key: keyof CookiePreferences;
  icon: React.ElementType;
  title: string;
  description: string;
  examples: string;
  details: string;
  required: boolean;
}

const CookieManagement: React.FC = () => {
  const navigate = useNavigate();
  
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
    functional: false,
    personalization: false
  });
  
  const [showSavedMessage, setShowSavedMessage] = useState<boolean>(false);
  const [hasChanges, setHasChanges] = useState<boolean>(false);
  const [initialPreferences, setInitialPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
    functional: false,
    personalization: false
  });

  useEffect(() => {
    // Load existing preferences
    const savedPreferences = localStorage.getItem('nudoo-cookie-preferences');
    if (savedPreferences) {
      try {
        const prefs: CookiePreferences = JSON.parse(savedPreferences);
        setPreferences(prefs);
        setInitialPreferences(prefs);
      } catch (error) {
        console.error('Error parsing saved preferences:', error);
      }
    }
  }, []);

  useEffect(() => {
    // Check if there are changes
    const hasChanged = JSON.stringify(preferences) !== JSON.stringify(initialPreferences);
    setHasChanges(hasChanged);
  }, [preferences, initialPreferences]);

  const saveCookiePreferences = (prefs: CookiePreferences): void => {
    localStorage.setItem('nudoo-cookie-consent', 'true');
    localStorage.setItem('nudoo-cookie-preferences', JSON.stringify(prefs));
    localStorage.setItem('nudoo-cookie-timestamp', new Date().toISOString());
    
    // Individual flags for easy access
    localStorage.setItem('nudoo-analytics-enabled', prefs.analytics.toString());
    localStorage.setItem('nudoo-marketing-enabled', prefs.marketing.toString());
    localStorage.setItem('nudoo-functional-enabled', prefs.functional.toString());
    localStorage.setItem('nudoo-personalization-enabled', prefs.personalization.toString());
    
    setInitialPreferences(prefs);
    setHasChanges(false);
    setShowSavedMessage(true);
    setTimeout(() => setShowSavedMessage(false), 3000);
    
    console.log('🍪 Cookie Preferences Saved:', prefs);
  };

  const acceptAllCookies = (): void => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
      personalization: true
    };
    setPreferences(allAccepted);
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
    setPreferences(necessaryOnly);
    saveCookiePreferences(necessaryOnly);
  };

  const saveCurrentPreferences = (): void => {
    saveCookiePreferences(preferences);
  };

  const togglePreference = (key: keyof CookiePreferences): void => {
    if (key === 'necessary') return;
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const resetToDefaults = (): void => {
    setPreferences({
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
      personalization: false
    });
  };

  const goBack = (): void => {
    navigate(-1);
  };

  const cookieCategories: CookieCategory[] = [
    {
      key: 'necessary',
      icon: Shield,
      title: 'Necessary Cookies',
      description: 'Required for basic website functionality, security, and user authentication.',
      examples: 'Session management, CSRF protection, load balancing, authentication',
      details: 'These cookies are essential for the website to function properly. They cannot be disabled in our systems.',
      required: true
    },
    {
      key: 'analytics',
      icon: BarChart3,
      title: 'Analytics Cookies',
      description: 'Help us understand how visitors interact with our website.',
      examples: 'Google Analytics, heat maps, performance monitoring, usage metrics',
      details: 'Collect anonymous information about site usage to help us improve it.',
      required: false
    },
    {
      key: 'marketing',
      icon: Users,
      title: 'Marketing Cookies',
      description: 'Used to track visitors across websites for advertising purposes.',
      examples: 'Facebook Pixel, Google Ads, remarketing pixels, advertising campaigns',
      details: 'Allow us to show more relevant ads and measure campaign effectiveness.',
      required: false
    },
    {
      key: 'functional',
      icon: Settings,
      title: 'Functional Cookies',
      description: 'Enable enhanced functionality and personalization.',
      examples: 'Language preferences, theme settings, form data',
      details: 'Improve user experience by remembering settings and preferences.',
      required: false
    },
    {
      key: 'personalization',
      icon: Eye,
      title: 'Personalization Cookies',
      description: 'Remember your preferences and provide customized content.',
      examples: 'Content recommendations, user preferences, A/B testing',
      details: 'Enable a more personalized experience based on your behavior and preferences.',
      required: false
    }
  ];

  const enabledCount = Object.values(preferences).filter(Boolean).length;
  const totalCount = cookieCategories.length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button 
                onClick={goBack}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-gray-600" />
              </button>
              <div className="flex items-center gap-3">
                <Cookie className="w-8 h-8 text-[#2AB5F6]" />
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Cookie Settings</h1>
                  <p className="text-sm text-gray-600">Manage your privacy preferences</p>
                </div>
              </div>
            </div>
            
            {showSavedMessage && (
              <div className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full">
                <CheckCircle className="w-4 h-4" />
                <span className="text-sm font-medium">Preferences saved</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Overview Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex items-start gap-4">
            <Info className="w-6 h-6 text-[#2AB5F6] mt-1" />
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">About Cookies</h2>
              <p className="text-gray-600 mb-4">
                Cookies are small text files that are stored on your device when you visit our website. 
                They help us provide you with a better experience and understand how you use our services.
              </p>
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#2AB5F6] rounded-full"></div>
                  <span className="text-gray-700">
                    <strong>{enabledCount}</strong> of {totalCount} categories enabled
                  </span>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                  <span>Last updated: {new Date().toLocaleDateString('en-US')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <button
            onClick={acceptAllCookies}
            className="bg-gradient-to-r from-[#2AB5F6] to-[#1976D2] text-white p-4 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            <div className="text-center">
              <div className="text-lg font-semibold">Accept All</div>
              <div className="text-sm opacity-90">Enable all cookies</div>
            </div>
          </button>
          
          <button
            onClick={acceptNecessaryOnly}
            className="border border-gray-300 text-gray-700 p-4 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors"
          >
            <div className="text-center">
              <div className="text-lg font-semibold">Necessary Only</div>
              <div className="text-sm text-gray-600">Essential cookies only</div>
            </div>
          </button>
          
          <button
            onClick={resetToDefaults}
            className="border border-gray-300 text-gray-700 p-4 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors"
          >
            <div className="text-center">
              <div className="text-lg font-semibold">Reset</div>
              <div className="text-sm text-gray-600">Back to default settings</div>
            </div>
          </button>
        </div>

        {/* Cookie Categories */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-gray-900">Cookie Categories</h2>
          
          {cookieCategories.map((category) => {
            const IconComponent = category.icon;
            const isEnabled = preferences[category.key];
            
            return (
              <div
                key={category.key}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:border-gray-300 transition-all duration-300"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4 flex-1">
                    <div className={`p-3 rounded-lg ${isEnabled ? 'bg-[#2AB5F6]/10' : 'bg-gray-100'}`}>
                      <IconComponent className={`w-6 h-6 ${isEnabled ? 'text-[#2AB5F6]' : 'text-gray-400'}`} />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {category.title}
                        </h3>
                        {category.required && (
                          <span className="bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded-full font-medium">
                            Required
                          </span>
                        )}
                        <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                          isEnabled ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'
                        }`}>
                          {isEnabled ? 'Enabled' : 'Disabled'}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 mb-4">
                        {category.description}
                      </p>
                      
                      <p className="text-gray-800 text-sm mb-4">
                        {category.details}
                      </p>
                      
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-medium text-gray-900 text-sm mb-2">Usage examples:</h4>
                        <p className="text-gray-600 text-sm">
                          {category.examples}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-shrink-0 ml-6">
                    <button
                      onClick={() => togglePreference(category.key)}
                      disabled={category.required}
                      className={`relative w-14 h-8 rounded-full transition-all duration-300 ${
                        isEnabled 
                          ? 'bg-gradient-to-r from-[#2AB5F6] to-[#1976D2]' 
                          : 'bg-gray-300'
                      } ${category.required ? 'cursor-not-allowed opacity-50' : 'cursor-pointer hover:scale-105'}`}
                    >
                      <span
                        className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 shadow-sm ${
                          isEnabled ? 'translate-x-6' : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Actions */}
        <div className="mt-12 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="text-sm text-gray-600">
              <p className="mb-1"> Your preferences are saved locally in your browser</p>
              <p className="mb-1"> Changes will be applied immediately</p>
              <p> Developers: check localStorage for cookie flags</p>
            </div>
            
            <div className="flex items-center gap-3">
              {hasChanges && (
                <span className="text-orange-600 text-sm font-medium">Unsaved changes</span>
              )}
              <button
                onClick={saveCurrentPreferences}
                disabled={!hasChanges}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  hasChanges 
                    ? 'bg-gradient-to-r from-[#2AB5F6] to-[#1976D2] text-white hover:shadow-lg hover:scale-105'
                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                }`}
              >
                <Save className="w-4 h-4" />
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieManagement;