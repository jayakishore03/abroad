import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { term: "What are the average tuition fees?", desc: "Tuition varies by country and program. On average, expect $15,000 to $40,000+ per year. We help identify programs that fit your budget." },
  { term: "How can I secure a scholarship?", desc: "Scholarships are based on academic merit, extracurriculars, and early applications. We assist in building a strong profile to maximize funding." },
  { term: "What are the living expenses?", desc: "Living costs range from $10,000 to $20,000 annually depending on the city. We guide you on part-time work options to offset expenses." },
];

export const CostScholarships = () => {
  const [open, setOpen] = useState(0);

  return (
    <section id="scholarships" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4">Cost & <span className="premium-gradient-text">Scholarships</span></h2>
          <p className="text-gray-400">Transparent guidance on financial planning for your studies.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass rounded-xl overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
                onClick={() => setOpen(open === index ? null : index)}
              >
                <span className="font-poppins font-semibold text-lg">{faq.term}</span>
                <ChevronDown className={`transform transition-transform ${open === index ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {open === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-4 text-gray-400"
                  >
                    {faq.desc}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
