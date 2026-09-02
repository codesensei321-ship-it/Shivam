import React, { useState, useEffect } from 'react';
import { 
  Trophy, 
  Sparkles, 
  ArrowUp, 
  Heart, 
  Globe, 
  ShieldCheck, 
  Calendar,
  Send,
  ExternalLink
} from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenAudit: () => void;
  onOpenLegal?: (tab: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, onOpenAudit, onOpenLegal }) => {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1A1A1A] text-white/70 pt-16 pb-12 border-t border-[#2E2E2E] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand & Persona Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white text-[#1A1A1A] flex items-center justify-center font-serif-artistic italic font-bold text-lg">
                S
              </div>
              <div>
                <span className="font-serif-artistic italic font-medium text-2xl text-white tracking-tight">
                  Shivam<span className="text-[#DA552F]">.</span>
                </span>
                <span className="block text-[10px] uppercase font-bold tracking-widest text-white/50">
                  Launch Strategist & SMM
                </span>
              </div>
            </div>

            <p className="text-xs text-white/60 leading-relaxed max-w-sm font-sans">
              Elite Product Hunt Hunter, X & LinkedIn Social Media Marketing Specialist, and Tech Influencer Strategist. Helping founders achieve front-page dominance and organic distribution.
            </p>

            {/* Live Availability Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white/80">
              <span className="w-2 h-2 rounded-full bg-[#DA552F]"></span>
              <span className="text-[11px]">Next Month Openings Available</span>
              <span className="text-white/30">•</span>
              <span className="font-mono-code text-[11px] text-white/60">{time || '00:00:00'}</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Shivam</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#case-studies" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Core Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-white">
              Core Offerings
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center gap-2 text-white/80">
                <Trophy className="w-3.5 h-3.5 text-[#DA552F]" />
                Product Hunt Hunting
              </li>
              <li className="flex items-center gap-2 text-white/80">
                <Sparkles className="w-3.5 h-3.5 text-[#DA552F]" />
                𝕏 & LinkedIn Organic SMM
              </li>
              <li className="flex items-center gap-2 text-white/80">
                <Send className="w-3.5 h-3.5 text-[#DA552F]" />
                Tech Influencer Sponsorships
              </li>
              <li className="flex items-center gap-2 text-white/80">
                <Globe className="w-3.5 h-3.5 text-[#DA552F]" />
                360° All-in-One Launch Sprints
              </li>
            </ul>
          </div>

          {/* Social Channels & CTA */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-white">
              Connect Directly
            </h4>
            <div className="flex flex-col gap-2 text-xs font-semibold">
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-colors px-3.5"
              >
                <span>𝕏 Twitter</span>
                <ExternalLink className="w-3 h-3 text-white/40" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-colors px-3.5"
              >
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 text-white/40" />
              </a>
              <a
                href="https://producthunt.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-colors px-3.5"
              >
                <span>Product Hunt</span>
                <ExternalLink className="w-3 h-3 text-white/40" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <div>
            © {new Date().getFullYear()} Shivam. All rights reserved. AxentAI Labs.
          </div>

          <div className="flex items-center gap-4 flex-wrap justify-center">
            {onOpenLegal && (
              <>
                <button
                  onClick={() => onOpenLegal('privacy')}
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </button>
                <span>•</span>
                <button
                  onClick={() => onOpenLegal('terms')}
                  className="hover:text-white transition-colors"
                >
                  Terms of Service
                </button>
                <span>•</span>
              </>
            )}
            <button
              onClick={onOpenAudit}
              className="hover:text-white transition-colors"
            >
              Launch Readiness
            </button>
            <span>•</span>
            <button
              onClick={onOpenBooking}
              className="text-[#FF5A1E] hover:underline font-semibold transition-colors"
            >
              Book Call
            </button>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white/10 hover:bg-white text-white hover:text-[#1A1A1A] transition-all ml-2"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
