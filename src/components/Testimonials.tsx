import React, { useState, useEffect } from 'react';
import { Calendar, MessageCircle, ArrowRight, Sparkles } from 'lucide-react';

const TestimonialsWithCTA = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      text: "After implementing Nudoo's AI automation, our customer response time dropped from hours to seconds. The ROI was visible within the first month - we're now handling 300% more inquiries with the same team size.",
      author: "David Martinez",
      position: "Chief Technology Officer",
      company: "FinanceFlow Solutions",
      industry: "Financial Services",
      companySize: "500-1000 employees",
      results: [
        { metric: "Response Time", improvement: "98% faster" },
        { metric: "Customer Satisfaction", improvement: "+45%" },
        { metric: "Team Efficiency", improvement: "+300%" }
      ],
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      verified: true,
      testimonialDate: "March 2025",
      ctaMessage: "Ready to revolutionize your customer service like we did?",
      ctaButtonText: "Get Your AI Customer Service Solution"
    },
    {
      text: "The predictive analytics transformed our inventory management completely. We reduced waste by 60% and increased profit margins by 35%. The system pays for itself every month.",
      author: "Jennifer Walsh",
      position: "Operations Director", 
      company: "RetailMax Group",
      industry: "Retail & E-commerce",
      companySize: "1000+ employees",
      results: [
        { metric: "Waste Reduction", improvement: "60% less" },
        { metric: "Profit Margins", improvement: "+35%" },
        { metric: "Inventory Accuracy", improvement: "+85%" }
      ],
      rating: 5,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80",
      verified: true,
      testimonialDate: "January 2024",
      ctaMessage: "Want to optimize your inventory and boost profits too?",
      ctaButtonText: "Discover AI Inventory Solutions"
    },
    {
      text: "Nudoo's healthcare AI solution revolutionized our patient care workflow. We now process 40% more appointments daily while reducing administrative overhead by half. Patient satisfaction scores reached an all-time high.",
      author: "Dr. Robert Chen",
      position: "Chief Medical Officer",
      company: "MedCare Partners",
      industry: "Healthcare",
      companySize: "200-500 employees",
      results: [
        { metric: "Patient Throughput", improvement: "+40%" },
        { metric: "Admin Costs", improvement: "50% reduction" },
        { metric: "Patient Satisfaction", improvement: "+52%" }
      ],
      rating: 5,
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=150&q=80",
      verified: true,
      testimonialDate: "February 2024",
      ctaMessage: "Ready to enhance your patient care with AI automation?",
      ctaButtonText: "Explore Healthcare AI Solutions"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setIsAutoPlaying(false);
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIsAutoPlaying(false);
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentTestimonial(index);
  };

  const currentData = testimonials[currentTestimonial];

  return (
    <div>
      {/* CTA Section with Modern Dual-Tone Background */}
      <section className="relative py-24 overflow-hidden">
        {/* Modern dual-tone background with circular transition */}
        <div className="absolute inset-0">
          {/* Top section - Blue gradient (smaller area) */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800"></div>
          
          {/* Bottom section - Light with circular cutout transition positioned higher */}
          <div 
            className="absolute inset-0 bg-gradient-to-br from-slate-50 to-gray-100"
            style={{
              clipPath: 'ellipse(85% 60% at 50% 25%)'
            }}
          ></div>
          
          {/* Subtle overlay patterns for depth */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 right-0 h-1/4 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)] opacity-40"></div>
            <div className="absolute bottom-0 left-0 right-0 bg-[radial-gradient(ellipse_80%_40%_at_50%_100%,rgba(59,130,246,0.06),transparent)]"></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Clean icon - now on light background */}
          <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-600 rounded-full mb-8 shadow-lg">
            <Sparkles className="w-7 h-7 text-white" />
          </div>

          {/* Clean typography - now on light background */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
            Ready to Scale Your Business?
          </h2>

          {/* Clean description - now on light background */}
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
            Join thousands of companies using AI automation to increase revenue, reduce costs, and dominate their markets. Schedule your personalized AI strategy consultation today.
          </p>

          {/* Clean CTA Button - blue on light background */}
          <a 
            href="https://wa.me/34655217549"
            className="group inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Calendar className="w-5 h-5" />
            <span>Schedule Free Consultation</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>

          {/* Clean trust indicators - dark text on light background */}
          <div className="mt-8 flex items-center justify-center gap-8 text-black text-sm">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
              <span>Strategy Call</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
              <span>Custom AI Roadmap</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" fill="currentColor"/>
              </svg>
              Trusted by Industry Leaders
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Real Results,{' '}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Real Impact
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              See how leading companies across industries have transformed their operations with our AI solutions
            </p>
          </div>

          {/* Main Testimonial */}
          <div className="relative max-w-6xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Content Side */}
                <div className="p-8 lg:p-12">
                  {/* Quote Icon */}
                  <div className="w-14 h-14 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" fill="currentColor"/>
                    </svg>
                  </div>

                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(currentData.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                    <span className="ml-3 text-sm font-medium text-slate-600 bg-green-50 px-2 py-1 rounded-full border border-green-100">
                      ✓ Verified Client
                    </span>
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-8 font-medium">
                    "{currentData.text}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex items-start gap-4 mb-8">
                    <img 
                      src={currentData.image}
                      alt={currentData.author}
                      className="w-14 h-14 rounded-xl object-cover ring-2 ring-white shadow-lg"
                    />
                    <div>
                      <div className="font-semibold text-gray-900 text-lg mb-1">
                        {currentData.author}
                      </div>
                      <div className="text-gray-600 text-sm mb-1">
                        {currentData.position}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <svg className="w-3 h-3 text-slate-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3 21h18a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1zM5 10h14v10H5V10zM12 2a1 1 0 0 1 1 1v5a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1zm8 6V4a1 1 0 0 0-2 0v4h2zM6 8V4a1 1 0 0 0-2 0v4h2z" fill="currentColor"/>
                        </svg>
                        {currentData.company} • {currentData.companySize}
                      </div>
                    </div>
                  </div>

                  {/* Company Badge */}
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-slate-50 to-gray-50 px-4 py-2 rounded-full text-sm text-slate-700 border border-slate-200">
                    <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full shadow-sm"></div>
                    {currentData.industry}
                  </div>
                </div>

                {/* Results Side */}
                <div className="bg-gradient-to-br from-blue-50 to-slate-50 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Measurable Results</h3>
                    <p className="text-gray-600">Key improvements after implementation</p>
                  </div>

                  <div className="space-y-6">
                    {currentData.results.map((result, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-xl flex items-center justify-center border border-emerald-200">
                            <svg className="w-4 h-4 text-emerald-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7 14l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                            </svg>
                          </div>
                          <span className="font-medium text-gray-700">{result.metric}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-emerald-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 17l6-6 6 6M7 11l6-6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <span className="font-bold text-emerald-600">{result.improvement}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <div className="text-xs text-gray-500 mb-1">Testimonial Date</div>
                    <div className="text-sm font-medium text-gray-700">{currentData.testimonialDate}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-12 h-12 bg-white rounded-full shadow-xl border border-gray-100 flex items-center justify-center hover:shadow-2xl transition-all duration-300 hover:scale-110 group"
            >
              <svg className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 w-12 h-12 bg-white rounded-full shadow-xl border border-gray-100 flex items-center justify-center hover:shadow-2xl transition-all duration-300 hover:scale-110 group"
            >
              <svg className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center items-center mt-12 gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'w-8 h-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full'
                    : 'w-3 h-3 bg-gray-300 rounded-full hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* CTA personalizado */}
          <div className="text-center mt-16">
            <div className="mb-6">
              <p className="text-gray-600 mb-2">{currentData.ctaMessage}</p>
            </div>
            <a 
              href="https://wa.me/34655217549"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 hover:from-blue-700 hover:to-blue-800"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {currentData.ctaButtonText}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsWithCTA;