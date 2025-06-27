import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    quote: "Sownmark turned our vision into a sleek, responsive website that truly reflects our brand. Their team was fast, professional, and always ready to listen. We've seen a 40% increase in online inquiries since launch!",
    name: "Sarah Mitchell",
    designation: " Founder – GreenGlow Skincare, California",
    image: "./pro.webp"
  },
  {
    quote: "I’ve worked with several agencies before, but Sownmark’s web development team stands out. They delivered a flawless site ahead of schedule and ensured every detail was pixel-perfect. Highly recommended for U.S. businesses!",
    name: "Emily Rogers",
    designation: "CEO – TechNurture LLC, New York",
    image: "./pro2.webp"
  },
  {
    quote: "From layout to speed optimization, every element of our site was executed with precision. Sownmark's communication was outstanding and the results exceeded our expectations. Our new site brought in more leads within the first week!",
    name: "Jessica Cole",
    designation: "Owner – Cole Interiors, Texas",
    image: "./pro3.webp"
  },
  {
    quote: "I was impressed with Sownmark’s expertise and dedication. They built us a fast, mobile-friendly site that looks great and performs even better. Their support team is also incredibly responsive and helpful.",
    name: "Mark Dawson",
    designation: "Director – Dawson Freight Co., Florida",
    image: "./pro4.webp"
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