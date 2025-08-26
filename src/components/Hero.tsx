import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, Check, Calendar, Clock, Bot, Users, Zap } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth mouse tracking with spring physics
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);
  
  // Transform values for 3D effects
  const rotateX = useTransform(mouseYSpring, [-100, 100], [5, -5]);
  const rotateY = useTransform(mouseXSpring, [-100, 100], [-5, 5]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
        const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
        
        setMousePosition({ x, y });
        mouseX.set(x * 100);
        mouseY.set(y * 100);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section id="hero" ref={containerRef} className="relative min-h-screen overflow-hidden" style={{ perspective: '1000px' }}>
      {/* Clean 3D Background - Only Color Changes */}
      <div className="absolute inset-0">
        {/* Base 3D animated gradient layer */}
        <motion.div 
          className="absolute inset-0"
          style={{
            rotateX: rotateX.get() * 0.3,
            rotateY: rotateY.get() * 0.3,
            transformStyle: 'preserve-3d',
            willChange: 'transform'
          }}
          animate={{
            background: [
              "linear-gradient(135deg, #60a5fa 0%, #3b82f6 25%, #1e40af 50%, #1e3a8a 75%, #0c1e3e 100%)",
              "linear-gradient(225deg, #1e40af 0%, #3b82f6 25%, #60a5fa 50%, #1e3a8a 75%, #0c1e3e 100%)",
              "linear-gradient(315deg, #0c1e3e 0%, #1e3a8a 25%, #1e40af 50%, #3b82f6 75%, #60a5fa 100%)",
              "linear-gradient(45deg, #3b82f6 0%, #60a5fa 25%, #1e40af 50%, #0c1e3e 75%, #1e3a8a 100%)",
              "linear-gradient(135deg, #60a5fa 0%, #3b82f6 25%, #1e40af 50%, #1e3a8a 75%, #0c1e3e 100%)"
            ]
          }}
          transition={{
            duration: 15,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
        
        {/* Second 3D layer with mouse interaction */}
        <motion.div 
          className="absolute inset-0"
          style={{
            rotateX: rotateX.get() * -0.2,
            rotateY: rotateY.get() * -0.2,
            transformStyle: 'preserve-3d',
            transform: 'translateZ(50px)',
            willChange: 'transform'
          }}
          animate={{
            background: [
              "radial-gradient(ellipse at 30% 30%, rgba(96,165,250,0.4) 0%, transparent 60%)",
              "radial-gradient(ellipse at 70% 30%, rgba(59,130,246,0.3) 0%, transparent 60%)",
              "radial-gradient(ellipse at 70% 70%, rgba(30,64,175,0.4) 0%, transparent 60%)",
              "radial-gradient(ellipse at 30% 70%, rgba(30,58,138,0.3) 0%, transparent 60%)",
              "radial-gradient(ellipse at 30% 30%, rgba(96,165,250,0.4) 0%, transparent 60%)"
            ]
          }}
          transition={{
            duration: 20,
            ease: "easeInOut",
            repeat: Infinity,
            delay: 2
          }}
        />

        {/* Third 3D depth layer */}
        <motion.div 
          className="absolute inset-0"
          style={{
            rotateX: rotateX.get() * 0.5,
            rotateY: rotateY.get() * 0.4,
            transformStyle: 'preserve-3d',
            transform: 'translateZ(25px)',
            willChange: 'transform'
          }}
          animate={{
            background: [
              "radial-gradient(circle at 50% 50%, rgba(59,130,246,0.2) 0%, transparent 50%)",
              "radial-gradient(circle at 60% 40%, rgba(96,165,250,0.25) 0%, transparent 50%)",
              "radial-gradient(circle at 40% 60%, rgba(30,58,138,0.2) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 30%, rgba(30,64,175,0.25) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 50%, rgba(59,130,246,0.2) 0%, transparent 50%)"
            ]
          }}
          transition={{
            duration: 12,
            ease: "easeInOut",
            repeat: Infinity,
            delay: 5
          }}
        />

        {/* Dynamic mouse-following 3D effect */}
        <motion.div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(600px circle at ${50 + mousePosition.x * 20}% ${50 + mousePosition.y * 20}%, 
              rgba(96,165,250,0.15) 0%, 
              rgba(59,130,246,0.08) 40%, 
              transparent 70%)
            `,
            transform: `translateZ(${40 + Math.abs(mousePosition.x) * 15}px) rotateX(${mousePosition.y * 2}deg) rotateY(${mousePosition.x * 2}deg)`,
            transformStyle: 'preserve-3d',
            willChange: 'transform, background'
          }}
          transition={{
            type: "spring",
            damping: 30,
            stiffness: 300
          }}
        />

        {/* Subtle depth enhancement overlay */}
        <motion.div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `
              linear-gradient(${135 + mousePosition.x * 30}deg, 
              rgba(255,255,255,0.05) 0%, 
              transparent 30%, 
              rgba(96,165,250,0.1) 60%, 
              transparent 100%)
            `,
            transform: 'translateZ(10px)',
            transformStyle: 'preserve-3d'
          }}
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
          }}
          transition={{
            duration: 18,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />

        {/* Depth layers for enhanced 3D effect */}
        <motion.div 
          className="absolute inset-0 opacity-15"
          style={{
            background: "radial-gradient(ellipse at center, rgba(255,255,255,0.1) 0%, transparent 70%)",
            transform: 'translateZ(80px) scale(0.95)',
            transformStyle: 'preserve-3d'
          }}
          animate={{
            scale: [0.95, 1.05, 0.95],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div 
          className="absolute inset-0 opacity-10"
          style={{
            background: "radial-gradient(ellipse at center, rgba(59,130,246,0.2) 20%, transparent 80%)",
            transform: 'translateZ(120px) scale(0.9)',
            transformStyle: 'preserve-3d'
          }}
          animate={{
            scale: [0.9, 1.1, 0.9],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
      </div>
      
      {/* Content with 3D effects */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 lg:pt-32 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-12rem)]">
          
          {/* Left Column - Content with 3D transform */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left flex flex-col justify-center"
            style={{
              rotateY: rotateY.get() * 0.2,
              transformStyle: 'preserve-3d',
              transform: `translateZ(${30 + Math.abs(mousePosition.x) * 10}px)`,
              willChange: 'transform'
            }}
          >
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6"
              animate={{
                textShadow: [
                  "0 0 40px rgba(96,165,250,0.6), 0 15px 25px rgba(59,130,246,0.4)",
                  "0 0 50px rgba(59,130,246,0.7), 0 20px 35px rgba(96,165,250,0.5)",
                  "0 0 40px rgba(96,165,250,0.6), 0 15px 25px rgba(59,130,246,0.4)"
                ]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              Nudoo transform your business with{' '}
              <span className="bg-gradient-to-r from-white via-[#60a5fa] to-[#3b82f6] bg-clip-text text-transparent">
                AI Agents
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{
                transform: 'translateZ(20px)',
                textShadow: '0 4px 15px rgba(0,0,0,0.4)'
              }}
            >
              Deploy intelligent AI agents that work 24/7 for your business. Automate customer support, sales, and administrative processes. Increase conversions by 350% and reduce operational costs by 80%.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.a 
                href="https://wa.me/34655217549"
                className="bg-white text-[#3b82f6] px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-lg"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 25px 50px -12px rgba(255, 255, 255, 0.4)",
                  rotateY: 3,
                  z: 60
                }}
                whileTap={{ scale: 0.98 }}
                style={{
                  transformStyle: 'preserve-3d',
                  transform: 'translateZ(25px)'
                }}
              >
                Get Free AI Consultation
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column - Enhanced 3D AI Chat Demo */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
            style={{
              rotateX: rotateX.get() * 0.3,
              rotateY: rotateY.get() * -0.2,
              transformStyle: 'preserve-3d',
              transform: `translateZ(${40 + Math.abs(mousePosition.y) * 15}px)`,
              willChange: 'transform'
            }}
          >
            {/* AI Chat Interface with enhanced 3D */}
            <div className="relative w-full max-w-sm">
              <motion.div 
                className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/20"
                whileHover={{ 
                  scale: 1.02,
                  rotateY: 4,
                  z: 50
                }}
                transition={{ duration: 0.3 }}
                style={{
                  transformStyle: 'preserve-3d',
                  boxShadow: '0 30px 60px -15px rgba(59, 130, 246, 0.3), 0 0 50px rgba(96, 165, 250, 0.2)'
                }}
              >
                {/* Chat Header */}
                <div className="bg-gradient-to-r from-[#60a5fa] to-[#3b82f6] px-4 py-3 flex items-center">
                  <div className="w-10 h-10 bg-white/20 rounded-full mr-3 flex items-center justify-center">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">AI Agent - Sarah</div>
                    <div className="text-white/80 text-xs flex items-center">
                      <motion.div 
                        className="w-2 h-2 bg-green-400 rounded-full mr-1"
                        animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      Available 24/7
                    </div>
                  </div>
                  <div className="ml-auto text-white/60">
                    <Clock className="w-4 h-4" />
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="p-4 space-y-4 bg-gray-50/50 backdrop-blur-sm min-h-[350px] max-h-[350px] overflow-y-auto">
                  <motion.div 
                    className="flex justify-start"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 }}
                  >
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl rounded-bl-md px-4 py-3 max-w-[85%] shadow-sm border border-white/20">
                      <p className="text-gray-800 text-sm">Hi! I'm Sarah, your AI business agent. Interested in automating your customer support?</p>
                      <div className="text-xs text-gray-500 mt-1 flex items-center">
                        <Bot className="w-3 h-3 mr-1" />
                        AI Agent • 3min ago
                      </div>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex justify-end"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.5 }}
                  >
                    <div className="bg-gradient-to-r from-[#60a5fa] to-[#3b82f6] text-white rounded-2xl rounded-br-md px-4 py-3 max-w-[85%]">
                      <p className="text-sm">Yes, I'd like to learn more about AI agents for my company</p>
                      <div className="text-xs text-white/80 mt-1 flex items-center justify-end">
                        <Check className="w-3 h-3 mr-1" />
                        Delivered
                      </div>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex justify-start"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 2 }}
                  >
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl rounded-bl-md px-4 py-3 max-w-[85%] shadow-sm border border-white/20">
                      <p className="text-gray-800 text-sm">Perfect! Let me schedule a personalized demo to show how our AI agents can:</p>
                      <ul className="text-xs text-gray-700 mt-2 space-y-1">
                        <li>• Handle customer inquiries 24/7</li>
                        <li>• Qualify leads automatically</li>
                        <li>• Schedule appointments</li>
                      </ul>
                      <div className="text-xs text-gray-500 mt-2">AI Agent • 1min ago</div>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex justify-end"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 2.5 }}
                  >
                    <div className="bg-gradient-to-r from-[#60a5fa] to-[#3b82f6] text-white rounded-2xl rounded-br-md px-4 py-3 max-w-[85%]">
                      <p className="text-sm">Sounds great! When can we schedule the demo?</p>
                      <div className="text-xs text-white/80 mt-1 flex items-center justify-end">
                        <Check className="w-3 h-3 mr-1" />
                        Delivered
                      </div>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex justify-start"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 3 }}
                  >
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl rounded-bl-md px-4 py-3 max-w-[85%] shadow-sm border border-white/20">
                      <div className="flex items-center space-x-2 mb-2">
                        <Calendar className="w-4 h-4 text-[#60a5fa]" />
                        <span className="text-sm font-medium text-gray-800">Meeting Scheduled</span>
                      </div>
                      <div className="bg-gradient-to-r from-[#60a5fa]/10 to-[#3b82f6]/10 rounded-lg p-3">
                        <p className="text-xs text-gray-700 font-medium">AI Demo Session</p>
                        <p className="text-xs text-gray-600">Tomorrow, 3:30 PM</p>
                        <p className="text-xs text-gray-600">Duration: 30 minutes</p>
                        <div className="flex items-center mt-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                          <span className="text-xs text-green-600">Confirmed</span>
                        </div>
                      </div>
                      <div className="text-xs text-gray-500 mt-2">AI Agent • Now</div>
                    </div>
                  </motion.div>
                </div>

                {/* Chat Input */}
                <div className="p-3 bg-white/80 backdrop-blur-sm border-t border-white/20">
                  <div className="flex items-center space-x-2">
                    <div className="flex-1 bg-gray-100/80 backdrop-blur-sm rounded-full px-4 py-2">
                      <span className="text-gray-500 text-sm">Type a message...</span>
                    </div>
                    <motion.button 
                      className="bg-gradient-to-r from-[#60a5fa] to-[#3b82f6] text-white p-2 rounded-full hover:shadow-lg transition-all"
                      whileHover={{ scale: 1.1, rotateZ: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <MessageCircle className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>

              {/* Enhanced 3D Floating Stats Cards */}
              <motion.div 
                className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-white/20"
                animate={{ 
                  y: [0, -15, 0],
                  rotateY: [0, 5, -5, 0],
                  rotateX: [0, 2, -2, 0]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  transformStyle: 'preserve-3d',
                  transform: 'translateZ(30px)',
                  boxShadow: '0 15px 40px rgba(59, 130, 246, 0.3)'
                }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#3b82f6] flex items-center justify-center">
                    <Zap className="w-6 h-6 mr-1" />
                    +350%
                  </div>
                  <div className="text-sm text-gray-600">Conversions</div>
                </div>
              </motion.div>

              <motion.div 
                className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-white/20"
                animate={{ 
                  x: [0, 8, 0],
                  scale: [1, 1.08, 1],
                  rotateZ: [0, 3, -3, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                style={{
                  transformStyle: 'preserve-3d',
                  transform: 'translateZ(20px)',
                  boxShadow: '0 12px 35px rgba(147, 51, 234, 0.3)'
                }}
              >
                <div className="flex items-center space-x-2">
                  <motion.div 
                    className="w-3 h-3 bg-purple-500 rounded-full"
                    animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <span className="text-sm text-gray-600">AI Processing</span>
                </div>
              </motion.div>

              <motion.div 
                className="absolute top-1/2 -left-6 bg-white/90 backdrop-blur-lg rounded-xl p-3 shadow-lg border border-white/20 transform -translate-y-1/2"
                animate={{ 
                  y: [-8, 8, -8],
                  rotateY: [-2, 2, -2],
                  rotateX: [1, -1, 1]
                }}
                transition={{ 
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
                style={{
                  transformStyle: 'preserve-3d',
                  transform: 'translateZ(35px)',
                  boxShadow: '0 15px 45px rgba(96, 165, 250, 0.3)'
                }}
              >
                <div className="text-center">
                  <div className="text-lg font-bold text-[#60a5fa]">24/7</div>
                  <div className="text-xs text-gray-600">Available</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;