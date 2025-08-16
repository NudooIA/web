import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppBubble = () => {
  const [showBubble, setShowBubble] = useState(true);
  const [showTooltip, setShowTooltip] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(0);

  const messages = [
    "Hello! Need help with our solutions?",
    "Discover how Nudoo can transform your business",
    "Got questions? We're here to help!",
    "Contact us for a free consultation",
    "Let's discuss your project together"
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showTooltip) {
      const interval = setInterval(() => {
        setCurrentMessage((prev) => (prev + 1) % messages.length);
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [showTooltip, messages.length]);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/34655217549?text=Hello! I\'m interested in learning more about Nudoo\'s solutions.', '_blank');
  };

  if (!showBubble) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip Message */}
      {showTooltip && (
        <div className="absolute bottom-20 right-0 mb-2 mr-2 animate-bounce">
          <div className="relative">
            <div className="bg-white rounded-2xl px-4 py-3 shadow-2xl border border-gray-100 max-w-64 transform transition-all duration-300 hover:scale-105">
              <button
                onClick={() => setShowTooltip(false)}
                className="absolute -top-2 -right-2 w-6 h-6 bg-gray-500 text-white rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors duration-200"
              >
                <X size={12} />
              </button>
              <p className="text-sm text-gray-700 font-medium leading-relaxed">
                {messages[currentMessage]}
              </p>
              <div className="flex space-x-1 mt-2">
                {messages.map((_, index) => (
                  <div
                    key={index}
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                      index === currentMessage ? 'bg-[#25D366]' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
            {/* Arrow pointing to WhatsApp button */}
            <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white border-r border-b border-gray-100 transform rotate-45"></div>
          </div>
        </div>
      )}

      {/* WhatsApp Button */}
      <div className="relative">
        <button
          onClick={handleWhatsAppClick}
          className="group relative w-16 h-16 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 flex items-center justify-center overflow-hidden"
        >
          {/* Animated background pulse */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-full animate-pulse opacity-75"></div>
          
          {/* Ripple effect */}
          <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-150 group-hover:opacity-0 transition-all duration-500"></div>
          
          {/* WhatsApp Icon */}
          <div className="relative z-10">
            <MessageCircle 
              size={28} 
              className="text-white drop-shadow-lg transition-transform duration-300 group-hover:scale-110" 
              fill="currentColor"
            />
          </div>
          
          {/* Notification dot */}
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full border-2 border-white flex items-center justify-center animate-bounce">
            <span className="text-white text-xs font-bold">1</span>
          </div>

          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] opacity-0 group-hover:opacity-20 blur-xl scale-150 transition-all duration-300"></div>
        </button>

        {/* Floating particles effect */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-[#25D366] rounded-full opacity-40 animate-ping"
              style={{
                top: `${20 + i * 15}%`,
                left: `${20 + i * 20}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: '2s'
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Close bubble button */}
      <button
        onClick={() => setShowBubble(false)}
        className="absolute -top-2 -left-2 w-6 h-6 bg-gray-500 text-white rounded-full flex items-center justify-center hover:bg-gray-600 transition-all duration-200 opacity-0 hover:opacity-100 group-hover:opacity-100"
      >
        <X size={12} />
      </button>
    </div>
  );
};

export default WhatsAppBubble;