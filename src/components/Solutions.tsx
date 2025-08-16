import React, { useMemo, useCallback } from 'react';
import { Bot, Headphones, Dumbbell, Globe, ShoppingCart, BarChart3, GraduationCap, MessageCircle } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';

const Solutions = () => {
  // Memoized solutions data con imágenes ordenadas correctamente
  const solutions = useMemo(() => [
    {
      id: 'ai-virtual-assistant',
      icon: Bot,
      title: "AI Virtual Assistant",
      description: "Intelligent virtual assistant that handles customer inquiries, schedules appointments, and manages daily tasks with human-like conversation capabilities.",
      benefit: "24/7 availability, instant responses, cost reduction up to 70%",
      image: "/imagenes web/1.jpg", // Primera solución - Primera imagen
      iconColor: "text-blue-500",
      delay: 0
    },
    {
      id: 'voice-customer-support',
      icon: Headphones,
      title: "Voice Customer Support",
      description: "Advanced voice AI system that provides real-time customer support through natural voice interactions, handling complex queries and escalations.",
      benefit: "Reduced wait times, multilingual support, higher customer satisfaction",
      image: "/imagenes web/2.jpg", // Segunda solución - Segunda imagen
      iconColor: "text-emerald-500",
      delay: 0.1
    },
    {
      id: 'ai-fitness-coach',
      icon: Dumbbell,
      title: "AI Fitness Coach",
      description: "Personalized fitness coaching system that creates custom workout plans, tracks progress, and provides real-time form corrections and motivation.",
      benefit: "Personalized training, progress tracking, injury prevention",
      image: "/imagenes web/3.jpg", // Tercera solución - Tercera imagen
      iconColor: "text-orange-500",
      delay: 0.2
    },
    {
      id: 'website-sales-agent',
      icon: Globe,
      title: "Website Sales Agent",
      description: "Intelligent web agent that engages visitors, qualifies leads, handles objections, and guides prospects through the sales funnel automatically.",
      benefit: "Higher conversion rates, lead qualification, 24/7 sales presence",
      image: "/imagenes web/4.jpg", // Cuarta solución - Quinta imagen (no existe 4.jpg)
      iconColor: "text-violet-500",
      delay: 0.3
    },
    {
      id: 'ecommerce-recommendation',
      icon: ShoppingCart,
      title: "E-commerce Recommendation Engine",
      description: "Smart product recommendation system that analyzes customer behavior, preferences, and purchase history to suggest personalized products.",
      benefit: "Increased sales, better customer experience, higher AOV",
      image: "/imagenes web/5.jpg", // Quinta solución - Sexta imagen
      iconColor: "text-green-500",
      delay: 0.4
    },
    {
      id: 'analytics-reporting',
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Comprehensive AI-powered analytics platform that generates insights, predicts trends, and creates automated reports for data-driven decisions.",
      benefit: "Data-driven insights, predictive analytics, automated reporting",
      image: "/imagenes web/6.jpg", // Sexta solución - Séptima imagen
      iconColor: "text-amber-500",
      delay: 0.5
    },
    {
      id: 'personal-video-tutor',
      icon: GraduationCap,
      title: "Personal Video Tutor",
      description: "Interactive AI tutor that provides personalized video lessons, adapts to learning styles, and offers real-time feedback and assessments.",
      benefit: "Personalized learning, adaptive content, progress tracking",
      image: "/imagenes web/7 (1).jpg", // Séptima solución - Octava imagen
      iconColor: "text-cyan-500",
      delay: 0.6
    },
    {
      id: 'conversational-ai-platform',
      icon: MessageCircle,
      title: "Conversational AI Platform",
      description: "Advanced conversational AI that integrates across multiple channels, providing consistent and intelligent interactions across all touchpoints.",
      benefit: "Omnichannel presence, consistent experience, scalable support",
      image: "/imagenes web/8.jpg", // Octava solución - Primera imagen como fallback
      iconColor: "text-pink-500",
      delay: 0.7
    }
  ], []);

  // Fixed animation variants with proper typing
  const containerVariants = useMemo<Variants>(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
        type: "spring" as const,
        stiffness: 100
      }
    }
  }), []);

  const itemVariants = useMemo<Variants>(() => ({
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12,
        mass: 0.8
      }
    }
  }), []);

  const headerVariants = useMemo<Variants>(() => ({
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 120,
        damping: 15
      }
    }
  }), []);

  // Fixed WhatsApp handler with proper typing
  const handleWhatsAppRedirect = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const whatsappUrl = "https://wa.me/34655217549";
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('Failed to open WhatsApp:', error);
      // Fallback to direct navigation
      window.location.href = "https://wa.me/34655217549";
    }
  }, []);

  // Fixed image loading handlers with proper typing
  const handleImageLoad = useCallback((e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.style.opacity = '1';
  }, []);

  const handleImageError = useCallback((e: React.SyntheticEvent<HTMLImageElement>) => {
    console.warn('Failed to load image:', e.currentTarget.src);
    // Fallback to a placeholder
    e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDUwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI1MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxyZWN0IHg9IjIwMCIgeT0iMTIwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjYwIiByeD0iNCIgZmlsbD0iIzlDQTNBRiIvPgo8L3N2Zz4K';
  }, []);

  return (
    <section 
      id="solutions" 
      className="py-20 bg-white relative overflow-hidden"
      role="region"
      aria-labelledby="solutions-heading"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-indigo-50/30 pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section with Smooth Animation */}
        <motion.header 
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2 
            id="solutions-heading"
            className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#60a5fa] via-[#3b82f6] to-[#1e3a8a] bg-clip-text text-transparent mb-6 leading-tight"
          >
            Revolutionary AI Solutions for Your Business
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Transform your business operations with our cutting-edge AI technology. From customer service to personal coaching, 
            our intelligent solutions deliver exceptional results and measurable ROI.
          </motion.p>
        </motion.header>

        {/* Solutions Grid with Smooth Animations */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {solutions.map((solution) => {
            const IconComponent = solution.icon;
            return (
              <motion.article 
                key={solution.id}
                variants={itemVariants}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  boxShadow: "0 25px 60px -12px rgba(0, 0, 0, 0.25)"
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }}
                whileTap={{ 
                  scale: 0.98
                }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:border-[#60a5fa]/30 transition-all duration-300 group cursor-pointer"
                role="article"
                aria-labelledby={`${solution.id}-title`}
                tabIndex={0}
                onKeyDown={(e: React.KeyboardEvent<HTMLElement>) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    (e.currentTarget as HTMLElement).click();
                  }
                }}
              >
                {/* Image Section with Better Aspect Ratio and Full Display */}
                <div className="relative overflow-hidden h-56">
                  <motion.img 
                    src={solution.image} 
                    alt={`${solution.title} - AI Solution`}
                    className="w-full h-full object-cover object-center transition-all duration-500 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                    style={{ opacity: 0 }}
                    onLoad={handleImageLoad}
                    onError={handleImageError}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/5 to-transparent opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    className="absolute top-4 right-4 w-2 h-2 bg-green-400 rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    aria-label="Active status indicator"
                  />
                </div>

                {/* Content Section */}
                <div className="p-6 relative">
                  {/* Animated Icon - Solo el dibujo con color, sin fondo */}
                  <motion.div 
                    className="mb-4"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <IconComponent className={`w-8 h-8 ${solution.iconColor}`} aria-hidden="true" />
                  </motion.div>

                  {/* Title */}
                  <motion.h3 
                    id={`${solution.id}-title`}
                    className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#3b82f6] transition-colors duration-300"
                  >
                    {solution.title}
                  </motion.h3>

                  {/* Description */}
                  <motion.p 
                    className="text-gray-600 text-sm leading-relaxed mb-4"
                  >
                    {solution.description}
                  </motion.p>

                  {/* Benefits Section */}
                  <motion.div 
                    className="pt-4 border-t border-gray-100"
                    whileHover={{ borderColor: "#60a5fa" }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.p 
                      className="text-xs font-semibold text-[#3b82f6] uppercase tracking-wider mb-1"
                    >
                      Key Benefits
                    </motion.p>
                    <motion.p 
                      className="text-sm text-gray-700 font-medium"
                    >
                      {solution.benefit}
                    </motion.p>
                  </motion.div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6, 
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.div 
            className="bg-gradient-to-r from-[#60a5fa]/10 via-[#3b82f6]/10 to-[#1e3a8a]/10 rounded-3xl p-8 mb-8 relative overflow-hidden"
            whileHover={{ 
              scale: 1.02
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.h3 
              className="text-2xl font-bold text-gray-900 mb-4"
            >
              Ready to Transform Your Business with AI?
            </motion.h3>
            <motion.p 
              className="text-gray-600 mb-6 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Join hundreds of businesses that have already revolutionized their operations with our AI solutions. 
              Get started today and see immediate results.
            </motion.p>
          </motion.div>
          
          <motion.button
            onClick={handleWhatsAppRedirect}
            className="bg-gradient-to-r from-[#60a5fa] to-[#3b82f6] text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 inline-block transform hover:scale-105 hover:from-[#3b82f6] hover:to-[#1e3a8a] relative overflow-hidden group focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50"
            whileHover={{ 
              scale: 1.05,
              y: -2,
              boxShadow: "0 20px 40px -12px rgba(59, 130, 246, 0.4)"
            }}
            whileTap={{ 
              scale: 0.98
            }}
            transition={{ duration: 0.2 }}
            aria-label="Contact us via WhatsApp to get started"
          >
            <span className="relative z-10">Get Started Now</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Solutions;