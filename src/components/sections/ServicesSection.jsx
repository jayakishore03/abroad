import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Map, FileSearch, GraduationCap, DollarSign, Briefcase } from 'lucide-react';

const services = [
  { icon: <Map className="w-8 h-8 text-secondary" />, title: "Career Counseling", desc: "Expert guidance to choose the right course and career path." },
  { icon: <BookOpen className="w-8 h-8 text-accent" />, title: "University Selection", desc: "Shortlisting universities based on your profile and goals." },
  { icon: <FileSearch className="w-8 h-8 text-blue-400" />, title: "SOP/LOR Guidance", desc: "Crafting compelling statements of purpose and resumes." },
  { icon: <Briefcase className="w-8 h-8 text-green-400" />, title: "Visa Assistance", desc: "End-to-end support for visa applications and interviews." },
  { icon: <DollarSign className="w-8 h-8 text-yellow-400" />, title: "Scholarships", desc: "Helping you secure financial aid and scholarships." },
  { icon: <GraduationCap className="w-8 h-8 text-lightGold" />, title: "Pre-departure", desc: "Briefings and support for your transition abroad." }
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-poppins font-bold mb-4"
          >
            Our <span className="premium-gradient-text">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400"
          >
            A comprehensive suite of services designed to make your international education journey smooth and successful.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 rounded-2xl border border-white/5 premium-hover group"
            >
              <div className="w-16 h-16 rounded-xl bg-white/5 flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold font-poppins text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
