import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { step: "01", title: "Profile Evaluation", desc: "Detailed analysis of your academic background and career aspirations." },
  { step: "02", title: "University Shortlisting", desc: "Selecting the best-fit universities suited to your profile." },
  { step: "03", title: "Application & SOP", desc: "Drafting strong applications and compelling essays." },
  { step: "04", title: "Offers & Acceptance", desc: "Receiving offer letters and finalizing your choice." },
  { step: "05", title: "Visa Processing", desc: "Mock interviews and comprehensive visa file preparation." }
];

export const ProcessTimeline = () => {
  return (
    <section id="process" className="py-24 bg-primary/50 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-poppins font-bold mb-4 text-white"
          >
            Your Journey to <span className="premium-gradient-text">Success</span>
          </motion.h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-0 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent/50 via-secondary/50 to-transparent" />

          <div className="space-y-12">
            {steps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col md:flex-row items-center justify-between w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="hidden md:block w-5/12" />
                <div className="z-10 flex items-center justify-center w-14 h-14 rounded-full glass border-2 border-accent text-accent font-bold text-xl mb-4 md:mb-0 shadow-[0_0_20px_rgba(124,58,237,0.5)]">
                  {item.step}
                </div>
                <div className="w-full md:w-5/12 glass p-6 rounded-2xl text-center md:text-left premium-hover">
                  <h3 className="text-2xl font-bold font-poppins text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
