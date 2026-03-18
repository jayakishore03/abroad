import React from 'react';
import { motion } from 'framer-motion';

export const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = "px-6 py-3 rounded-full font-poppins font-semibold transition-all duration-300 flex items-center justify-center gap-2";
  const variants = {
    primary: "bg-gradient-to-r from-darkGold via-accent to-lightGold text-black shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:scale-105 hover:shadow-[0_0_50px_rgba(255,230,150,0.6)] border border-lightGold/50",
    outline: "glass border-2 border-accent text-accent shadow-[0_0_15px_rgba(212,175,55,0.2)] hover:shadow-[0_0_40px_rgba(212,175,55,0.5)] hover:bg-accent/20 hover:text-lightGold",
    glass: "glass border border-accent/30 text-white hover:bg-accent/20 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:scale-105 hover:text-lightGold hover:border-accent"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};
