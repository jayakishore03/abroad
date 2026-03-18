import React from 'react';
import { Globe, MapPin, Phone, Mail, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="glass-dark text-gray-300 pt-20 pb-10 border-t border-white/10 relative z-10 mt-20">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        {/* Brand */}
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <Globe className="w-8 h-8 text-accent" />
            <span className="text-2xl font-poppins font-bold text-white tracking-wide">
              MERIDIAN <span className="text-accent">GLOBAL</span>
            </span>
          </div>
          <p className="text-gray-400 mb-6">
            Empowering students to achieve their global education dreams. From application to visa, we're with you every step of the way.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-accent hover:text-primary transition-colors"><Instagram size={20} /></a>
            <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-accent hover:text-primary transition-colors"><Facebook size={20} /></a>
            <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-accent hover:text-primary transition-colors"><Twitter size={20} /></a>
            <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-accent hover:text-primary transition-colors"><Linkedin size={20} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-poppins font-semibold text-lg mb-6">Quick Links</h4>
          <ul className="space-y-4">
            <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
            <li><a href="#destinations" className="hover:text-accent transition-colors">Study Destinations</a></li>
            <li><a href="#services" className="hover:text-accent transition-colors">Our Services</a></li>
            <li><a href="#scholarships" className="hover:text-accent transition-colors">Scholarships</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-white font-poppins font-semibold text-lg mb-6">Support</h4>
          <ul className="space-y-4">
            <li><a href="#" className="hover:text-accent transition-colors">FAQ</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Visa Policy</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-poppins font-semibold text-lg mb-6">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
              <span>123 Startup Avenue, Tech Park, City, Country</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-accent flex-shrink-0" />
              <span>+1 (555) 123-4567</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-accent flex-shrink-0" />
              <span>hello@MERIDIAN GLOBAL.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-6 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} MERIDIAN GLOBAL Consultancy. All rights reserved.</p>
        <p className="mt-4 md:mt-0 text-sm">Designed with <span className="text-red-500">❤️</span> for Global Students</p>
      </div>
    </footer>
  );
};
