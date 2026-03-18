import React from 'react';
import { motion } from 'framer-motion';
import { Target, Award, ShieldCheck } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden glass p-2 relative z-10 max-w-md mx-auto">
              <div className="w-full h-full glass rounded-2xl flex items-center justify-center relative overflow-hidden border border-white/10 group-hover:border-accent/40 transition-colors duration-500">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>

                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4 }}
                  className="absolute top-10 right-4 md:right-10 glass-dark p-4 rounded-xl flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                    <ShieldCheck className="text-green-400" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">100%</h4>
                    <p className="text-xs text-gray-300">Verified Universities</p>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/30 rounded-full blur-[50px] -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <div className="text-accent font-semibold tracking-wider uppercase text-sm">Our Story</div>
            <h2 className="text-4xl md:text-5xl font-poppins font-bold">
              Building <span className="premium-gradient-text">Global Leaders</span> of Tomorrow
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              We started with a simple belief: education knows no borders. Our mission is to bridge the gap between ambitious students and world-class universities, ensuring a seamless journey from application to arrival.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
              <div className="glass p-6 rounded-2xl">
                <Target className="w-8 h-8 text-accent mb-4" />
                <h4 className="text-xl font-bold mb-2">Expert Guidance</h4>
                <p className="text-sm text-gray-400">Personalized counseling tailored to your career goals.</p>
              </div>
              <div className="glass p-6 rounded-2xl">
                <Award className="w-8 h-8 text-secondary mb-4" />
                <h4 className="text-xl font-bold mb-2">Proven Track Record</h4>
                <p className="text-sm text-gray-400">Years of excellence in securing top admissions.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
