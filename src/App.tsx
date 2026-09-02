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
import { PrivacyTermsModal } from './components/PrivacyTermsModal';

export default function App() {
  const [auditOpen, setAuditOpen] = useState(false);
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [legalTab, setLegalTab] = useState<'privacy' | 'terms'>('privacy');

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenLegal = (tab: 'privacy' | 'terms') => {
    setLegalTab(tab);
    setLegalModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1A1A1A] flex flex-col selection:bg-[#FF5A1E]/20 selection:text-[#FF5A1E] font-sans">
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

        {/* 3. About Section (Bio, Portrait, Founder of AxentAI Labs, Core Highlights) */}
        <AboutSection onOpenBooking={scrollToContact} />

        {/* 4. Services Section (PH Hunting, X & LinkedIn SMM, Reddit, Influencer Campaigns) */}
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
        onOpenLegal={handleOpenLegal}
      />

      {/* Interactive Launch Readiness Audit Modal */}
      <InteractiveAuditModal
        open={auditOpen}
        onOpenChange={setAuditOpen}
        onBookCall={scrollToContact}
      />

      {/* Legal Privacy & Terms Modal */}
      <PrivacyTermsModal
        open={legalModalOpen}
        onOpenChange={setLegalModalOpen}
        defaultTab={legalTab}
      />
    </div>
  );
}
