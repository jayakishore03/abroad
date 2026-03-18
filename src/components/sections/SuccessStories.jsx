import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Jenkins",
    university: "Harvard University, USA",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    text: "MERIDIAN GLOBAL made my Ivy League dream a reality. Their SOP guidance was exceptional and they handled my visa process seamlessly."
  },
  {
    name: "Rahul Sharma",
    university: "University of Toronto, Canada",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    text: "From university selection to landing in Canada, the team was always there. I got a 50% scholarship thanks to their aid!"
  },
  {
    name: "Emily Chen",
    university: "Oxford University, UK",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
    text: "The mock visa interviews gave me so much confidence. I couldn't have asked for a better consultancy to guide my master's journey."
  }
];

export const SuccessStories = () => {
  return (
    <section id="stories" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-poppins font-bold mb-4"
          >
            Student <span className="premium-gradient-text">Success Stories</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, index) => (
            <motion.div
              key={test.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 rounded-2xl relative mt-8 premium-hover group"
            >
              <div className="absolute -top-8 left-8">
                <img src={test.image} alt={test.name} className="w-16 h-16 rounded-full border-4 border-transparent p-[2px] bg-gradient-to-r from-darkGold via-accent to-lightGold object-cover" />
              </div>
              <Quote className="absolute top-6 right-6 text-white/10 w-12 h-12" />

              <div className="mt-6">
                <div className="flex text-accent mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-gray-300 italic mb-6">"{test.text}"</p>
                <div>
                  <h4 className="text-white font-bold font-poppins">{test.name}</h4>
                  <p className="text-sm text-accent">{test.university}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
