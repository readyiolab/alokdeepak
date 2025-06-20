import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    quote: "Sownmark's digital marketing course transformed my career. The instructors were knowledgeable and the content was relevant and up-to-date. Highly recommend!",
    name: "Sarah Johnson",
    designation: "Digital Marketing Manager",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    quote: "We found our ideal digital marketing specialist through Sownmark's hiring services. Their team understood exactly what we needed and delivered exceptional candidates. Efficient and professional.",
    name: "David Chen",
    designation: "CEO, TechGrowth Inc.",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    quote: "Our website built by Sownmark not only looks great but also performs exceptionally well. The team was responsive, creative, and technically skilled. Fantastic job!",
    name: "Michael Rodriguez",
    designation: "Founder, Bright Solutions",
    image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    quote: "The social media strategy Sownmark developed for our brand led to a 200% increase in engagement and a significant boost in conversions. Their expertise is unmatched.",
    name: "Emma Thompson",
    designation: "Marketing Director, StyleHub",
    image: "https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
];

const TestimonialsSection: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 sm:py-20 bg-[#1a2957]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What Our Clients Say
          </motion.h2>
          <motion.div
            className="w-16 h-1 bg-[#90abff] mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          ></motion.div>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div 
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-[#223466] rounded-xl border border-[#2f437a] shadow-lg p-6 sm:p-8"
            >
              <Quote className="text-[#90abff] w-12 h-12 mb-6" />
              <p className="text-base sm:text-lg italic mb-8 text-white/80">
                "{testimonials[current].quote}"
              </p>
              <div className="flex items-center">
                <img 
                  src={testimonials[current].image} 
                  alt={testimonials[current].name} 
                  className="w-14 h-14 rounded-full object-cover mr-4 border border-[#90abff]/20"
                />
                <div>
                  <h4 className="font-bold text-base sm:text-lg text-white">{testimonials[current].name}</h4>
                  <p className="text-sm text-white/70">{testimonials[current].designation}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button 
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-8 bg-[#223466] rounded-full p-2 shadow-md hover:bg-[#263a6d] transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} className="text-[#90abff]" />
          </button>
          <button 
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-8 bg-[#223466] rounded-full p-2 shadow-md hover:bg-[#263a6d] transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} className="text-[#90abff]" />
          </button>
        </div>

        {/* Indicator dots */}
        <div className="flex justify-center mt-6 space-x-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === current ? 'bg-[#90abff]' : 'bg-[#90abff]/30'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;