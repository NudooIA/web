import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, Activity, CreditCard, Store, Cog, Headphones, TrendingUp, Server, DollarSign } from 'lucide-react';

const CompleteSections = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimatingStats, setIsAnimatingStats] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const statsRef = useRef<HTMLElement>(null);
  
  const [stats, setStats] = useState({
    clients: 0,
    projects: 0,
    integrations: 0,
    uptime: 0
  });

  // Memoized industries data with enhanced properties
  const industries = useMemo(() => [
    {
      id: 'healthcare',
      icon: Activity,
      title: "Healthcare",
      frontDescription: "AI solutions for medical facilities",
      backText: "We help healthcare providers automate patient scheduling, medical record management, and provide 24/7 virtual health assistance to improve patient care and operational efficiency.",
      gradient: "from-rose-400 via-pink-500 to-red-600",
      hoverGradient: "from-red-500 via-rose-600 to-pink-700",
      delay: 0
    },
    {
      id: 'banking',
      icon: CreditCard,
      title: "Banking",
      frontDescription: "Financial AI automation",
      backText: "Transform banking operations with AI-powered customer service, fraud detection, loan processing automation, and personalized financial advisory services.",
      gradient: "from-emerald-400 via-teal-500 to-cyan-600",
      hoverGradient: "from-cyan-500 via-teal-600 to-emerald-700",
      delay: 0.1
    },
    {
      id: 'retail',
      icon: Store,
      title: "Retail",
      frontDescription: "Smart commerce solutions",
      backText: "Boost retail sales with AI product recommendations, inventory management, customer behavior analysis, and automated customer support systems.",
      gradient: "from-amber-400 via-orange-500 to-red-600",
      hoverGradient: "from-red-500 via-orange-600 to-amber-700",
      delay: 0.2
    },
    {
      id: 'operations',
      icon: Cog,
      title: "Operations",
      frontDescription: "Process optimization AI",
      backText: "Streamline operations with intelligent workflow automation, predictive maintenance, quality control, and real-time operational analytics.",
      gradient: "from-violet-400 via-purple-500 to-indigo-600",
      hoverGradient: "from-indigo-500 via-purple-600 to-violet-700",
      delay: 0.3
    },
    {
      id: 'cx',
      icon: Headphones,
      title: "CX",
      frontDescription: "Customer experience AI",
      backText: "Enhance customer experience with AI chatbots, sentiment analysis, personalized interactions, and omnichannel support automation.",
      gradient: "from-blue-400 via-indigo-500 to-purple-600",
      hoverGradient: "from-purple-500 via-indigo-600 to-blue-700",
      delay: 0.4
    },
    {
      id: 'analytics',
      icon: TrendingUp,
      title: "Analytics",
      frontDescription: "Data-driven insights",
      backText: "Transform data into actionable insights with AI-powered analytics, predictive modeling, business intelligence, and automated reporting systems.",
      gradient: "from-green-400 via-emerald-500 to-teal-600",
      hoverGradient: "from-teal-500 via-emerald-600 to-green-700",
      delay: 0.5
    },
    {
      id: 'it',
      icon: Server,
      title: "IT",
      frontDescription: "Technology automation",
      backText: "Optimize IT operations with AI-driven system monitoring, automated troubleshooting, cybersecurity enhancement, and infrastructure management.",
      gradient: "from-cyan-400 via-blue-500 to-indigo-600",
      hoverGradient: "from-indigo-500 via-blue-600 to-cyan-700",
      delay: 0.6
    },
    {
      id: 'finance',
      icon: DollarSign,
      title: "Finance",
      frontDescription: "Financial intelligence AI",
      backText: "Revolutionize finance with AI for risk assessment, automated accounting, financial planning, compliance monitoring, and investment analysis.",
      gradient: "from-yellow-400 via-amber-500 to-orange-600",
      hoverGradient: "from-orange-500 via-amber-600 to-yellow-700",
      delay: 0.7
    }
  ], []);

  // Enhanced company info with local images
  const companyInfo = useMemo(() => [
    {
      id: 'mission',
      title: "Our Mission",
      description: "Democratizing AI technology to empower businesses of all sizes with intelligent automation solutions.",
      image: "/imagenes web/enseñando.jpg",
    },
    {
      id: 'team',
      title: "Expert Team",
      description: "World-class AI engineers and business strategists with years of experience in enterprise solutions.",
      image: "/imagenes web/feria.jpg",
    },
    {
      id: 'innovation',
      title: "Innovation Focus",
      description: "Cutting-edge research and development in artificial intelligence, machine learning, and automation technologies.",
      image: "/imagenes web/conferencia.jpg",
    },
    {
      id: 'deployment',
      title: "Rapid Deployment",
      description: "Fast implementation with minimal disruption to your existing workflows and business operations.",
      image: "/imagenes web/oficina.jpg",
    },
    {
      id: 'custom',
      title: "Custom Solutions",
      description: "Tailored AI solutions designed specifically for your industry requirements and business objectives.",
      image: "/imagenes web/tedx.jpg",
    },
    {
      id: 'support',
      title: "24/7 Support",
      description: "Round-the-clock technical support and maintenance to ensure optimal performance of your AI systems.",
      image: "/imagenes web/video llamada.jpg",
    }
  ], []);

  // Enhanced integrations with local images and fallbacks
  const integrations = useMemo(() => [
    { 
      url: "/imagenes web/chatgpt.png",
      fallback: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
      name: "ChatGPT",
      category: "AI"
    },
    { 
      url: "/imagenes web/microsoft.png",
      fallback: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      name: "Microsoft",
      category: "Productivity"
    },
    { 
      url: "/imagenes web/teams.webp",
      fallback: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg",
      name: "Teams",
      category: "Communication"
    },
    { 
      url: "/imagenes web/facebook.png",
      fallback: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
      name: "Facebook",
      category: "Social"
    },
    { 
      url: "/imagenes web/facebook-2.png",
      fallback: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
      name: "Facebook Ads",
      category: "Marketing"
    },
    { 
      url: "/imagenes web/instagram.png",
      fallback: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png",
      name: "Instagram",
      category: "Social"
    },
    { 
      url: "/imagenes web/gmail.png",
      fallback: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg",
      name: "Gmail",
      category: "Email"
    },
    { 
      url: "/imagenes web/google.jpg",
      fallback: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      name: "Google",
      category: "Cloud"
    },
    { 
      url: "/imagenes web/hubspot.png",
      fallback: "https://www.hubspot.com/hubfs/HubSpot_Logos/HubSpot-Inversed-Favicon.png",
      name: "HubSpot",
      category: "CRM"
    },
    { 
      url: "/imagenes web/sprite.png",
      fallback: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
      name: "Sprite",
      category: "Design"
    }
  ], []);

  // Enhanced stats animation with easing
  const animateStats = useCallback(() => {
    if (isAnimatingStats) return;
    
    setIsAnimatingStats(true);
    const duration = 2500;
    const steps = 60;
    const stepDuration = duration / steps;

    const targets = { clients: 210, projects: 250, integrations: 50, uptime: 99.9 };
    
    let step = 0;
    const interval = setInterval(() => {
      step++;
      // Eased progress for smoother animation
      const rawProgress = step / steps;
      const easedProgress = 1 - Math.pow(1 - rawProgress, 3); // Ease out cubic
      
      setStats({
        clients: Math.floor(targets.clients * easedProgress),
        projects: Math.floor(targets.projects * easedProgress),
        integrations: Math.floor(targets.integrations * easedProgress),
        uptime: parseFloat((targets.uptime * easedProgress).toFixed(1))
      });

      if (step >= steps) {
        clearInterval(interval);
        setIsAnimatingStats(false);
      }
    }, stepDuration);
  }, [isAnimatingStats]);

  // Intersection Observer para stats
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isAnimatingStats) {
          const timer = setTimeout(animateStats, 500);
          return () => clearTimeout(timer);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [animateStats, isAnimatingStats]);

  // Enhanced navigation handlers
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(companyInfo.length / 3));
  }, [companyInfo.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(companyInfo.length / 3)) % Math.ceil(companyInfo.length / 3));
  }, [companyInfo.length]);

  return (
    <div className="bg-white overflow-hidden">
      {/* Custom Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .perspective-1000 { 
          perspective: 1000px; 
        }
        .transform-style-preserve-3d { 
          transform-style: preserve-3d; 
        }
        .backface-hidden { 
          backface-visibility: hidden; 
        }
        .rotate-y-180 { 
          transform: rotateY(180deg); 
        }

        /* Advanced glassmorphism effect */
        .glass-effect {
          background: rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.18);
        }

        /* Smooth scrolling behavior */
        html {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(45deg, #60a5fa, #3b82f6);
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(45deg, #3b82f6, #1e3a8a);
        }

        /* Enhanced hover effects */
        .hover-glow:hover {
          filter: drop-shadow(0 0 20px rgba(59, 130, 246, 0.5));
        }

        /* Performance optimizations */
        .gpu-accelerated {
          transform: translateZ(0);
          will-change: transform;
        }

        /* Advanced animations */
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes pulse-glow {
          0%, 100% { 
            box-shadow: 0 0 5px rgba(59, 130, 246, 0.3);
          }
          50% { 
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.6);
          }
        }

        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* FIXED: Animación mejorada para el scroll de integraciones */
        @keyframes scroll-left-smooth {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% - 2rem)); }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
        }

        /* FIXED: Clase mejorada para el scroll suave */
        .animate-scroll-smooth {
          animation: scroll-left-smooth 40s linear infinite;
        }

        /* Fade effects for carousel edges */
        .fade-left {
          background: linear-gradient(to right, white 0%, transparent 100%);
        }

        .fade-right {
          background: linear-gradient(to left, white 0%, transparent 100%);
        }

        .fade-left-gray {
          background: linear-gradient(to right, #f9fafb 0%, transparent 100%);
        }

        .fade-right-gray {
          background: linear-gradient(to left, #f9fafb 0%, transparent 100%);
        }

        /* Mobile optimizations */
        @media (max-width: 768px) {
          .perspective-1000 {
            perspective: 800px;
          }
        }

        /* Reduce motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }

        /* Focus states for accessibility */
        button:focus-visible,
        [tabindex]:focus-visible {
          outline: 2px solid #3b82f6;
          outline-offset: 2px;
          border-radius: 0.5rem;
        }

        /* Gradient text utility */
        .gradient-icon {
          background: linear-gradient(135deg, var(--gradient-from), var(--gradient-to));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        `
      }} />
      
      {/* Industries Section with Enhanced Animations */}
      <section id="industries" className="py-20 bg-gradient-to-br from-blue-400/5 to-blue-900/10 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-300 via-blue-500 to-blue-800 bg-clip-text text-transparent mb-6 animate-gradient">
              AI Solutions for Every Industry
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Transform your industry with cutting-edge AI technology. Our specialized solutions are designed to meet the unique challenges and requirements of your sector, delivering measurable results and competitive advantages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              const isHovered = hoveredCard === industry.id;
              
              return (
                <div 
                  key={industry.id}
                  className="group relative h-64 perspective-1000 cursor-pointer"
                  onMouseEnter={() => setHoveredCard(industry.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div 
                    className={`relative h-full w-full transition-transform duration-700 transform-style-preserve-3d ${
                      isHovered ? 'rotate-y-180' : ''
                    }`}
                    style={{
                      transform: isHovered ? 'rotateY(180deg)' : 'rotateY(0deg)'
                    }}
                  >
                    {/* Front Side */}
                    <div className="absolute inset-0 h-full w-full bg-white backface-hidden flex flex-col items-center justify-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-3xl">
                      <div className="mb-6 relative group-hover:scale-110 transition-transform duration-300">
                        {/* Fondo blanco sin bordes visibles */}
                        <div className="relative w-20 h-20 bg-white flex items-center justify-center">
                          {/* Ícono con colores del gradiente usando CSS custom properties */}
                          <div 
                            className="w-12 h-12 flex items-center justify-center"
                            style={{
                              '--gradient-from': industry.gradient.includes('rose') ? '#f43f5e' :
                                industry.gradient.includes('emerald') ? '#10b981' :
                                industry.gradient.includes('amber') ? '#f59e0b' :
                                industry.gradient.includes('violet') ? '#8b5cf6' :
                                industry.gradient.includes('blue') ? '#3b82f6' :
                                industry.gradient.includes('green') ? '#22c55e' :
                                industry.gradient.includes('cyan') ? '#06b6d4' :
                                '#eab308',
                              '--gradient-to': industry.gradient.includes('rose') ? '#dc2626' :
                                industry.gradient.includes('emerald') ? '#06b6d4' :
                                industry.gradient.includes('amber') ? '#dc2626' :
                                industry.gradient.includes('violet') ? '#6366f1' :
                                industry.gradient.includes('blue') ? '#8b5cf6' :
                                industry.gradient.includes('green') ? '#14b8a6' :
                                industry.gradient.includes('cyan') ? '#6366f1' :
                                '#f97316'
                            } as React.CSSProperties}
                          >
                            <IconComponent 
                              className="w-12 h-12"
                              style={{
                                color: industry.gradient.includes('rose') ? '#f43f5e' :
                                  industry.gradient.includes('emerald') ? '#10b981' :
                                  industry.gradient.includes('amber') ? '#f59e0b' :
                                  industry.gradient.includes('violet') ? '#8b5cf6' :
                                  industry.gradient.includes('blue') ? '#3b82f6' :
                                  industry.gradient.includes('green') ? '#22c55e' :
                                  industry.gradient.includes('cyan') ? '#06b6d4' :
                                  '#eab308'
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:-translate-y-1 transition-transform">
                        {industry.title}
                      </h3>
                      <p className="text-gray-600 text-center text-sm">{industry.frontDescription}</p>
                      
                      {/* Floating particles */}
                      <div
                        className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"
                        style={{
                          animationDelay: `${index * 0.2}s`
                        }}
                      />
                    </div>
                    
                    {/* Back Side */}
                    <div className={`absolute inset-0 h-full w-full rounded-3xl bg-gradient-to-br ${industry.hoverGradient} text-white backface-hidden rotate-y-180 flex flex-col items-center justify-center p-6 shadow-2xl`}>
                      <h3 className="text-xl font-bold mb-4">
                        {industry.title} Solutions
                      </h3>
                      <p className="text-sm text-center leading-relaxed">
                        {industry.backText}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Info Carousel with Advanced Controls - Using Placeholder Images */}
      <section id="about-us" className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-300 via-blue-500 to-blue-800 bg-clip-text text-transparent mb-6">
              Why Choose Nudoo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leading AI innovation with proven expertise and commitment to your success
            </p>
          </div>

          <div className="relative">
            <div className="flex items-center justify-between mb-8">
              <button 
                onClick={prevSlide}
                className="p-3 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 text-white hover:shadow-lg hover:scale-110 hover:-translate-x-1 transition-all duration-300 z-10 group"
              >
                <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
              </button>
              
              <div className="flex space-x-2">
                {Array.from({ length: Math.ceil(companyInfo.length / 3) }).map((_, index) => (
                  <div 
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer hover:scale-125 ${
                      currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>

              <button 
                onClick={nextSlide}
                className="p-3 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 text-white hover:shadow-lg hover:scale-110 hover:translate-x-1 transition-all duration-300 z-10 group"
              >
                <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="relative overflow-hidden rounded-2xl">
              {/* Fade gradients for left and right edges */}
              <div className="absolute left-0 top-0 bottom-0 w-20 fade-left z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-20 fade-right z-10 pointer-events-none" />
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 transition-all duration-500">
                {companyInfo.slice(currentSlide * 3, currentSlide * 3 + 3).map((info, index) => (
                  <div 
                    key={info.id}
                    className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-2 hover:scale-105 transition-all duration-300 group"
                    style={{
                      animationDelay: `${index * 0.1}s`
                    }}
                  >
                    <div className="relative overflow-hidden">
                      <img 
                        src={info.image} 
                        alt={info.title}
                        className="w-full h-48 object-contain bg-gray-50 group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          // Fallback to a placeholder if image fails to load
                          e.currentTarget.src = `https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80`;
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 group-hover:translate-x-1 transition-all">
                        {info.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {info.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Minimal Premium Design */}
      <section ref={statsRef} className="py-16 bg-white text-gray-800 relative">        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Header with improved typography */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-300 via-blue-500 to-blue-800 bg-clip-text text-transparent">
              Our Impact
            </h2>
          </div>

          {/* Minimal stats grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: stats.clients, suffix: '+', label: 'Clients' },
              { value: stats.projects, suffix: '+', label: 'Projects' },
              { value: stats.integrations, suffix: '+', label: 'Integrations' },
              { value: stats.uptime, suffix: '%', label: 'Uptime' }
            ].map((stat, index) => (
              <div key={index} className="group">
                {/* Number */}
                <div className="mb-2">
                  <span className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-300 via-blue-500 to-blue-800 bg-clip-text text-transparent">
                    {stat.value}
                  </span>
                  <span className="text-3xl lg:text-4xl font-bold text-blue-500">
                    {stat.suffix}
                  </span>
                </div>
                
                {/* Label */}
                <p className="text-gray-600 font-medium text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FIXED: Integrations Section - Continuous Scroll without Overlapping */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-300 via-blue-500 to-blue-800 bg-clip-text text-transparent mb-6">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with your favorite tools and platforms effortlessly
            </p>
          </div>

          <div className="relative">
            {/* Fade gradients for smooth edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 fade-left-gray z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 fade-right-gray z-10 pointer-events-none" />
            
            <div className="overflow-hidden">
              <div className="flex space-x-8 animate-scroll-smooth">
                {/* Primera fila de integraciones */}
                {integrations.map((integration, index) => (
                  <div
                    key={`integration-${index}`}
                    className="flex-shrink-0 flex flex-col items-center"
                  >
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 w-24 h-24 flex items-center justify-center group hover:scale-110">
                      <img 
                        src={integration.url} 
                        alt={integration.name}
                        className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300"
                        onError={(e) => {
                          const target = e.currentTarget as HTMLImageElement;
                          if (target.src !== integration.fallback) {
                            target.src = integration.fallback;
                          } else {
                            target.style.display = 'none';
                          }
                        }}
                      />
                    </div>
                    <div className="text-center mt-3">
                      <p className="text-sm font-medium text-gray-700">{integration.name}</p>
                      <p className="text-xs text-gray-500">{integration.category}</p>
                    </div>
                  </div>
                ))}
                
                {/* Segunda fila para continuidad perfecta */}
                {integrations.map((integration, index) => (
                  <div
                    key={`integration-duplicate-${index}`}
                    className="flex-shrink-0 flex flex-col items-center"
                  >
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 w-24 h-24 flex items-center justify-center group hover:scale-110">
                      <img 
                        src={integration.url} 
                        alt={integration.name}
                        className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300"
                        onError={(e) => {
                          const target = e.currentTarget as HTMLImageElement;
                          if (target.src !== integration.fallback) {
                            target.src = integration.fallback;
                          } else {
                            target.style.display = 'none';
                          }
                        }}
                      />
                    </div>
                    <div className="text-center mt-3">
                      <p className="text-sm font-medium text-gray-700">{integration.name}</p>
                      <p className="text-xs text-gray-500">{integration.category}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompleteSections;