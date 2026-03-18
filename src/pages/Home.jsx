import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { HeroSection } from '../components/sections/HeroSection';
import { AboutSection } from '../components/sections/AboutSection';
import { DestinationsSection } from '../components/sections/DestinationsSection';
import { ServicesSection } from '../components/sections/ServicesSection';
import { ProcessTimeline } from '../components/sections/ProcessTimeline';
import { SuccessStories } from '../components/sections/SuccessStories';
import { CostScholarships } from '../components/sections/CostScholarships';
import { ContactSection } from '../components/sections/ContactSection';
import { ChatFeature } from '../components/sections/ChatFeature';

export const Home = () => {
  return (
    <div className="min-h-screen bg-primary text-white font-sans selection:bg-accent selection:text-primary">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <DestinationsSection />
        <ServicesSection />
        <ProcessTimeline />
        <SuccessStories />
        <CostScholarships />
        <ContactSection />
      </main>
      <Footer />
      <ChatFeature />
    </div>
  );
};
