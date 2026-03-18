import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Globe as GlobeIcon, ArrowRight, Users, GraduationCap } from 'lucide-react';
import { Globe } from '../ui/Globe';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-secondary/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/20 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass w-max text-accent text-sm font-semibold">
            <GlobeIcon size={16} /> Globally Recognized Consultancy
          </div>

          <h1 className="text-5xl md:text-7xl font-poppins font-bold leading-tight">
            Your Dream <span className="premium-gradient-text">University</span><br />
            is Just One Step Away
          </h1>

          <p className="text-lg text-gray-300 max-w-xl leading-relaxed">
            From Application to Visa — We Handle Everything. Join thousands of successful students who have achieved their global education dreams with our premium guidance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button variant="primary">Get Free Consultation <ArrowRight size={18} /></Button>
            <Button variant="glass">Explore Destinations</Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12 border-t border-white/10 pt-8">
            <div>
              <h3 className="text-3xl font-bold font-poppins text-white">10k+</h3>
              <p className="text-gray-400 text-sm mt-1 flex items-center gap-2"><Users size={14} className="text-accent" /> Students Placed</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold font-poppins text-white">99%</h3>
              <p className="text-gray-400 text-sm mt-1 flex items-center gap-2"><GlobeIcon size={14} className="text-accent" /> Visa Success</p>
            </div>
            <div className="hidden md:block">
              <h3 className="text-3xl font-bold font-poppins text-white">500+</h3>
              <p className="text-gray-400 text-sm mt-1 flex items-center gap-2"><GraduationCap size={14} className="text-accent" /> Top Universities</p>
            </div>
          </div>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[400px] lg:h-[600px] w-full flex items-center justify-center"
        >
            <div className="absolute inset-0 bg-[#D4AF37]/10 rounded-full blur-[100px] mix-blend-screen scale-75 pointer-events-none" />
            <Globe />
        </motion.div>
      </div>
    </section>
  );
};
