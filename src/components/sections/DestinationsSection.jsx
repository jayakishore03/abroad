import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';

const destinations = [
  {
    country: "United States",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=800&auto=format&fit=crop",
    universities: "450+",
    students: "15k+",
  },
  {
    country: "United Kingdom",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=800&auto=format&fit=crop",
    universities: "130+",
    students: "10k+",
  },
  {
    country: "Canada",
    image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=800&auto=format&fit=crop",
    universities: "90+",
    students: "8k+",
  },
  {
    country: "Australia",
    image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=800&auto=format&fit=crop",
    universities: "40+",
    students: "5k+",
  }
];

export const DestinationsSection = () => {
  return (
    <section id="destinations" className="py-24 bg-primary/50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-poppins font-bold mb-4"
          >
            Top Study <span className="premium-gradient-text">Destinations</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400"
          >
            Explore the world's most prestigious education hubs. We partner with top-tier universities across the globe.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((dest, index) => (
            <motion.div
              key={dest.country}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer premium-hover"
            >
              <div className="h-80 w-full relative">
                <img
                  src={dest.image}
                  alt={dest.country}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-80" />

                <div className="absolute bottom-0 left-0 w-full p-6">
                  <h3 className="text-2xl font-bold font-poppins text-white mb-2">{dest.country}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-300 mb-4">
                    <span className="flex items-center gap-1"><Star size={14} className="text-accent" /> {dest.universities} Univs</span>
                    <span>• {dest.students} Students</span>
                  </div>
                  <div className="flex items-center gap-2 text-accent font-semibold opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    Explore Programs <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
