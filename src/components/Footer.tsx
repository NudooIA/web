import React, { useState, useEffect } from 'react';
import { Instagram, Linkedin, Twitter, Mail, Phone, ArrowUp, ExternalLink, ChevronRight } from 'lucide-react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSocial, setHoveredSocial] = useState<number | null>(null);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const TikTokIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
    </svg>
  );

  const socialLinks = [
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/nudoo_ia/',
      icon: Instagram,
      color: 'from-purple-500 via-pink-500 to-orange-400',
      hoverColor: 'hover:shadow-purple-500/25',
      followers: '2.5K',
      handle: '@nudoo_ia'
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/nudoo-ai-66646a36b/',
      icon: Linkedin,
      color: 'from-blue-600 to-blue-700',
      hoverColor: 'hover:shadow-blue-500/25',
      followers: '850',
      handle: '/in/nudoo-ai'
    },
    {
      name: 'Twitter',
      href: 'https://x.com/nudoo_IA',
      icon: Twitter,
      color: 'from-blue-400 to-blue-500',
      hoverColor: 'hover:shadow-blue-400/25',
      followers: '1.2K',
      handle: '@nudoo_IA'
    },
    {
      name: 'TikTok',
      href: 'https://www.tiktok.com/@nudooia',
      icon: TikTokIcon,
      color: 'from-black via-gray-800 to-gray-700',
      hoverColor: 'hover:shadow-gray-500/25',
      followers: '4.8K',
      handle: '@nudooia'
    }
  ];

  return (
    <>
      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 bg-gradient-to-r from-[#2AB5F6] to-[#1976D2] text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-110 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>

      <footer className="bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Main Footer Content */}
          <div className="py-16">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Company Info */}
              <div className="lg:col-span-2 space-y-6">
                <div className="flex items-center mb-6">
                  <div className="relative group">
                    <img 
                      src="/Gemini_Generated_Image_sewpz2sewpz2sewp-removebg-preview__1_-removebg-preview.png" 
                      alt="Nudoo Logo" 
                      className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-110"
                      onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                        // Fallback to gradient logo if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const nextSibling = target.nextElementSibling as HTMLElement;
                        if (nextSibling) {
                          nextSibling.style.display = 'flex';
                        }
                      }}
                    />
                    <div className="w-12 h-12 bg-gradient-to-r from-[#2AB5F6] to-[#1976D2] rounded-xl flex items-center justify-center shadow-lg hidden">
                      <span className="text-white font-bold text-xl">N</span>
                    </div>
                  </div>
                  <span 
                  translate="no"
                  className="ml-3 text-2xl font-bold bg-gradient-to-r from-[#2AB5F6] to-[#1976D2] bg-clip-text text-transparent">
                    NUDOO
                  </span>
                </div>
                
                <p className="text-gray-300 text-lg leading-relaxed">
                 Transforming businesses with cutting-edge AI solutions.
                 Intelligent automation, predictive analytics, and virtual agents
                 that revolutionize your business.
                </p>

                {/* Social Links */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-white">follow us</h4>
                  <div className="flex flex-wrap gap-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group relative bg-gray-800/50 backdrop-blur-sm p-3 rounded-xl hover:bg-gradient-to-r ${social.color} transition-all duration-300 hover:shadow-xl ${social.hoverColor} hover:scale-105`}
                        onMouseEnter={() => setHoveredSocial(index)}
                        onMouseLeave={() => setHoveredSocial(null)}
                        aria-label={`Follow us on ${social.name}`}
                      >
                        <social.icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                        
                        {/* Tooltip */}
                        <div className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-black rounded-lg text-xs whitespace-nowrap transition-all duration-300 ${
                          hoveredSocial === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
                        }`}>
                          <div className="text-white font-medium">{social.name}</div>
                          <div className="text-gray-300">{social.followers} seguidores</div>
                          <div className="text-gray-400">{social.handle}</div>
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black"></div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Services */}
              <div className="space-y-6">
                <h3 className="font-bold text-xl text-white mb-6 relative">
                  Services
                  <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-[#2AB5F6] to-[#1976D2]"></div>
                </h3>
                <div className="space-y-3">
                  <a
                    href="#solutions"
                    className="group flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <span>AI Agents</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href="#solutions"
                    className="group flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <span>Automation</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href="#integrations"
                    className="group flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <span>Integrations</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Company */}
              <div className="space-y-6">
                <h3 className="font-bold text-xl text-white mb-6 relative">
                  business
                  <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-[#2AB5F6] to-[#1976D2]"></div>
                </h3>
                <div className="space-y-3">
                  <a
                    href="about-us"
                    className="group flex items-center justify-between text-gray-400 hover:text-white transition-colors"
                  >
                    <span>About</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href="#testimonials"
                    className="group flex items-center justify-between text-gray-400 hover:text-white transition-colors"
                  >
                    <span>Testimonials</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href="/privacy-policy"
                    className="group flex items-center justify-between text-gray-400 hover:text-white transition-colors"
                  >
                    <span>Privacy</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Contact */}
              <div className="space-y-6">
                <h3 className="font-bold text-xl text-white mb-6 relative">
                  Contact
                  <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-[#2AB5F6] to-[#1976D2]"></div>
                </h3>
                <div className="space-y-4">
                  <div className="group">
                    <div className="flex items-center space-x-3 mb-2">
                      <Phone className="w-4 h-4 text-[#2AB5F6]" />
                      <span className="text-sm text-gray-400">WhatsApp 24/7</span>
                    </div>
                    <a 
                      href="https://wa.me/34655217549"
                      className="text-white hover:text-[#2AB5F6] transition-colors font-medium"
                    >
                      +34 655 217 549
                    </a>
                  </div>

                  <div className="group">
                    <div className="flex items-center space-x-3 mb-2">
                      <Mail className="w-4 h-4 text-[#2AB5F6]" />
                      <span className="text-sm text-gray-400">Email</span>
                    </div>
                    <a 
                      href="mailto:nudoo@nu-doo.com"
                      className="text-white hover:text-[#2AB5F6] transition-colors font-medium"
                    >
                      nudoo@nu-doo.com
                    </a>
                  </div>

                  <div className="pt-4">
                    <a 
                      href="https://wa.me/34655217549"
                      className="group relative bg-gradient-to-r from-[#2AB5F6] to-[#1976D2] text-white px-6 py-3 rounded-xl font-medium hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 inline-flex items-center space-x-2 hover:scale-105"
                    >
                      <span>Contact now</span>
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800/50 pt-8 pb-6">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
              <div className="text-gray-400 text-sm">
                <p>&copy; 2025 Nudoo. all rights reserved.</p>
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <a href="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy
                </a>
                <a href="/terms" className="hover:text-white transition-colors">
                  our
                </a>
                <a href="/cookie-settings" className="hover:text-white transition-colors">
                  Cookies
                </a>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>operative system</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;