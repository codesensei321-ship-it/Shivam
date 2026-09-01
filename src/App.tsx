import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SocialProofMarquee } from './components/SocialProofMarquee';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { FaqSection } from './components/FaqSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { InteractiveAuditModal } from './components/InteractiveAuditModal';

export default function App() {
  const [auditOpen, setAuditOpen] = useState(false);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1A1A1A] flex flex-col selection:bg-[#DA552F]/20 selection:text-[#DA552F] font-sans">
      {/* Top Navbar */}
      <Navbar
        onOpenAudit={() => setAuditOpen(true)}
        onOpenBooking={scrollToContact}
      />

      {/* Main Portfolio Sections */}
      <main className="flex-1">
        {/* 1. Hero Section with Live Launch Simulator */}
        <HeroSection
          onOpenAudit={() => setAuditOpen(true)}
          onOpenBooking={scrollToContact}
        />

        {/* 2. Social Proof Marquee & Verified Badges */}
        <SocialProofMarquee />

        {/* 3. About Section (Bio, 3 Pillars, Self-Hunt vs Shivam Hunt Comparison) */}
        <AboutSection onOpenBooking={scrollToContact} />

        {/* 4. Services Section (PH Hunting, X & LinkedIn SMM, Influencer Campaigns, Sprint + Interactive Blueprint Calculator) */}
        <ServicesSection
          onOpenBooking={scrollToContact}
          onOpenAudit={() => setAuditOpen(true)}
        />

        {/* 5. Case Studies & Verified Metrics Wall */}
        <CaseStudiesSection onOpenBooking={scrollToContact} />

        {/* 6. FAQ Section with Radix/Shadcn Accordions */}
        <FaqSection onOpenBooking={scrollToContact} />

        {/* 7. Call To Action & Interactive Launch Brief Submission */}
        <CtaSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenBooking={scrollToContact}
        onOpenAudit={() => setAuditOpen(true)}
      />

      {/* Interactive Launch Readiness Audit Modal */}
      <InteractiveAuditModal
        open={auditOpen}
        onOpenChange={setAuditOpen}
        onBookCall={scrollToContact}
      />
    </div>
  );
}
