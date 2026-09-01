import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { 
  Rocket, 
  Send, 
  Calendar, 
  CheckCircle2, 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  Mail, 
  MessageSquare,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { InquiryFormData } from '../types';

interface CtaSectionProps {
  onSuccessSubmit?: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onSuccessSubmit }) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    name: '',
    email: '',
    projectName: '',
    productUrl: '',
    servicesNeeded: ['Product Hunt Hunting'],
    targetLaunchDate: 'Next 3-4 Weeks',
    budgetRange: '$1,500 - $3,500',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const toggleService = (service: string) => {
    if (formData.servicesNeeded.includes(service)) {
      if (formData.servicesNeeded.length > 1) {
        setFormData(prev => ({
          ...prev,
          servicesNeeded: prev.servicesNeeded.filter(s => s !== service)
        }));
      }
    } else {
      setFormData(prev => ({
        ...prev,
        servicesNeeded: [...prev.servicesNeeded, service]
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Trigger celebratory launch confetti
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#ea580c', '#f59e0b', '#10b981', '#6366f1']
      });

      if (onSuccessSubmit) {
        onSuccessSubmit();
      }
    }, 900);
  };

  return (
    <section id="contact" className="py-24 bg-[#FAF9F6] border-t border-[#E5E5E1] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Call-to-Action Hero Box in Ink Black */}
        <div className="rounded-3xl bg-[#1A1A1A] text-white p-8 sm:p-14 relative overflow-hidden mb-14 border border-[#1A1A1A]">
          <div className="relative z-10 max-w-3xl">
            <span className="text-[#DA552F] font-bold tracking-[0.25em] text-xs uppercase mb-3 inline-block">
              Now Booking Launches
            </span>
            
            <h2 className="text-4xl sm:text-5xl font-serif-artistic font-medium tracking-tight leading-tight">
              Ready to Claim Your <span className="italic text-[#DA552F]">#1 Product of the Day</span> Badge?
            </h2>
            
            <p className="mt-4 text-xs sm:text-sm text-white/70 leading-relaxed font-sans">
              Whether you need an elite hunter endorsement, a viral social ghostwriting sprint, or creator syndication, Shivam is ready to engineer your launch velocity.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 text-xs text-white/80 font-medium">
                <ShieldCheck className="w-4 h-4 text-[#DA552F]" />
                Max 4 Launches Managed / Month
              </div>
              <div className="flex items-center gap-2 text-xs text-white/80 font-medium">
                <Clock className="w-4 h-4 text-white/60" />
                Guaranteed Response within 12 Hours
              </div>
            </div>
          </div>
        </div>

        {/* Two-Column Grid: Left Direct Booking / Right Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Direct Channels & Guarantee */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 rounded-3xl border border-[#E5E5E1] bg-white">
              <h3 className="text-2xl font-serif-artistic italic font-medium text-[#1A1A1A] mb-2">
                Fast-Track Strategy Call
              </h3>
              <p className="text-xs text-[#1A1A1A]/70 leading-relaxed mb-6 font-sans">
                Prefer a quick live conversation? Book a 20-minute launch roadmap session with Shivam to discuss your target date and distribution strategy.
              </p>

              <div className="space-y-3 mb-6">
                <a
                  href="https://cal.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-[#FAF9F6] border border-[#E5E5E1] hover:border-[#1A1A1A] transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#DA552F] text-white flex items-center justify-center font-bold">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#1A1A1A]">
                        Book Strategy Calendar
                      </div>
                      <div className="text-[10px] text-[#1A1A1A]/50 font-mono-code">20-Min Video Call</div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#1A1A1A]/40 group-hover:text-[#1A1A1A] group-hover:translate-x-1 transition-all" />
                </a>

                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-[#FAF9F6] border border-[#E5E5E1] hover:border-[#1A1A1A] transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center font-bold text-xs">
                      𝕏
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#1A1A1A]">
                        Direct Message on X
                      </div>
                      <div className="text-[10px] text-[#1A1A1A]/50 font-mono-code">@shivam_launches</div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#1A1A1A]/40 group-hover:text-[#1A1A1A] group-hover:translate-x-1 transition-all" />
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-[#FAF9F6] border border-[#E5E5E1] hover:border-[#1A1A1A] transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center font-bold text-xs">
                      in
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#1A1A1A]">
                        Connect on LinkedIn
                      </div>
                      <div className="text-[10px] text-[#1A1A1A]/50">Shivam • Growth Strategist</div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#1A1A1A]/40 group-hover:text-[#1A1A1A] group-hover:translate-x-1 transition-all" />
                </a>
              </div>

              {/* Verified Hunter guarantee seal */}
              <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-[#E5E5E1] flex items-center gap-3 text-xs text-[#1A1A1A]/80 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#DA552F] shrink-0" />
                <span>Every campaign is personally directed by Shivam. Zero junior outsource handoffs.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Launch Request Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-3xl border border-[#E5E5E1] bg-white">
              
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-14 h-14 rounded-full bg-[#DA552F]/10 text-[#DA552F] flex items-center justify-center mx-auto border border-[#DA552F]/30">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-serif-artistic italic font-medium text-[#1A1A1A]">
                    Launch Brief Received
                  </h3>
                  <p className="text-xs text-[#1A1A1A]/70 max-w-md mx-auto leading-relaxed font-sans">
                    Thank you, <strong className="text-[#1A1A1A]">{formData.name || 'Founder'}</strong>. Shivam has received your inquiry for <strong className="text-[#1A1A1A]">{formData.projectName || 'your product'}</strong> and will review your assets and reply within 12 hours with a bespoke roadmap.
                  </p>
                  
                  <div className="pt-4">
                    <Button
                      variant="outline"
                      onClick={() => setSubmitted(false)}
                      size="sm"
                    >
                      Submit Another Launch Brief
                    </Button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex items-center justify-between pb-4 border-b border-[#E5E5E1]">
                    <div>
                      <h3 className="text-2xl font-serif-artistic italic font-medium text-[#1A1A1A]">
                        Send Your Launch Brief
                      </h3>
                      <p className="text-xs text-[#1A1A1A]/50 mt-0.5">
                        Tell Shivam about your product and target goals
                      </p>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#DA552F] bg-[#DA552F]/10 px-2.5 py-0.5 rounded-full border border-[#DA552F]/20">
                      Quick Form
                    </span>
                  </div>

                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-[#1A1A1A]/70 uppercase tracking-widest mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={e => setFormData({...formData, name: e.target.value})}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-4 py-2.5 rounded-2xl border border-[#E5E5E1] bg-[#FAF9F6] text-xs text-[#1A1A1A] focus:bg-white focus:outline-none focus:border-[#1A1A1A] transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-[#1A1A1A]/70 uppercase tracking-widest mb-1">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                        placeholder="sarah@company.com"
                        className="w-full px-4 py-2.5 rounded-2xl border border-[#E5E5E1] bg-[#FAF9F6] text-xs text-[#1A1A1A] focus:bg-white focus:outline-none focus:border-[#1A1A1A] transition-all"
                      />
                    </div>
                  </div>

                  {/* Project Name & Link */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-[#1A1A1A]/70 uppercase tracking-widest mb-1">
                        Product Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.projectName}
                        onChange={e => setFormData({...formData, projectName: e.target.value})}
                        placeholder="e.g. FlowGen AI"
                        className="w-full px-4 py-2.5 rounded-2xl border border-[#E5E5E1] bg-[#FAF9F6] text-xs text-[#1A1A1A] focus:bg-white focus:outline-none focus:border-[#1A1A1A] transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-[#1A1A1A]/70 uppercase tracking-widest mb-1">
                        Product Link
                      </label>
                      <input
                        type="url"
                        value={formData.productUrl}
                        onChange={e => setFormData({...formData, productUrl: e.target.value})}
                        placeholder="https://flowgen.ai"
                        className="w-full px-4 py-2.5 rounded-2xl border border-[#E5E5E1] bg-[#FAF9F6] text-xs text-[#1A1A1A] focus:bg-white focus:outline-none focus:border-[#1A1A1A] transition-all"
                      />
                    </div>
                  </div>

                  {/* Services Needed Selection */}
                  <div>
                    <label className="block text-[10px] font-bold text-[#1A1A1A]/70 uppercase tracking-widest mb-1.5">
                      Services of Interest
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        'Product Hunt Hunting & War Room',
                        '𝕏 (Twitter) Ghostwriting & SMM',
                        'LinkedIn Founder Brand Building',
                        'Tech Influencer Sponsorships',
                        '360° All-in-One Launch Sprint'
                      ].map(srv => {
                        const isSelected = formData.servicesNeeded.includes(srv);
                        return (
                          <button
                            type="button"
                            key={srv}
                            onClick={() => toggleService(srv)}
                            className={`p-2.5 rounded-2xl border text-xs font-semibold text-left transition-all ${
                              isSelected
                                ? 'border-[#DA552F] bg-[#DA552F]/10 text-[#DA552F]'
                                : 'border-[#E5E5E1] bg-[#FAF9F6] text-[#1A1A1A]/70 hover:border-[#1A1A1A]'
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              <span className={`w-3.5 h-3.5 rounded-full flex items-center justify-center text-[9px] ${
                                isSelected ? 'bg-[#DA552F] text-white font-bold' : 'border border-[#E5E5E1]'
                              }`}>
                                {isSelected && '✓'}
                              </span>
                              <span className="truncate text-xs">{srv}</span>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Target Launch Date & Budget Range */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-[#1A1A1A]/70 uppercase tracking-widest mb-1">
                        Target Launch Window
                      </label>
                      <select
                        value={formData.targetLaunchDate}
                        onChange={e => setFormData({...formData, targetLaunchDate: e.target.value})}
                        className="w-full px-4 py-2.5 rounded-2xl border border-[#E5E5E1] bg-[#FAF9F6] text-xs text-[#1A1A1A] focus:bg-white focus:outline-none focus:border-[#1A1A1A] transition-all cursor-pointer"
                      >
                        <option value="ASAP (Next 7-10 Days)">⚡ ASAP (Next 7-10 Days)</option>
                        <option value="Next 3-4 Weeks">🎯 Next 3-4 Weeks (Recommended)</option>
                        <option value="1-2 Months Out">🚀 1-2 Months Out</option>
                        <option value="Just planning & exploring">🔍 Just Planning & Exploring</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-[#1A1A1A]/70 uppercase tracking-widest mb-1">
                        Budget Range
                      </label>
                      <select
                        value={formData.budgetRange}
                        onChange={e => setFormData({...formData, budgetRange: e.target.value})}
                        className="w-full px-4 py-2.5 rounded-2xl border border-[#E5E5E1] bg-[#FAF9F6] text-xs text-[#1A1A1A] focus:bg-white focus:outline-none focus:border-[#1A1A1A] transition-all cursor-pointer"
                      >
                        <option value="$800 - $1,500">$800 - $1,500 (Basic Hunting)</option>
                        <option value="$1,500 - $3,500">$1,500 - $3,500 (Hunt + Social SMM)</option>
                        <option value="$3,500 - $8,000">$3,500 - $8,000 (Complete 360° Sprint)</option>
                        <option value="$8,000+">$8,000+ (Full Creator Syndication)</option>
                      </select>
                    </div>
                  </div>

                  {/* Notes / Message */}
                  <div>
                    <label className="block text-[10px] font-bold text-[#1A1A1A]/70 uppercase tracking-widest mb-1">
                      Project Summary & Goal
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={e => setFormData({...formData, message: e.target.value})}
                      placeholder="What is your product's core value prop? Have you launched on Product Hunt before?"
                      className="w-full px-4 py-2.5 rounded-2xl border border-[#E5E5E1] bg-[#FAF9F6] text-xs text-[#1A1A1A] focus:bg-white focus:outline-none focus:border-[#1A1A1A] transition-all"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 text-xs font-bold uppercase tracking-widest"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Transmitting Brief to Shivam...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Rocket className="w-4 h-4" />
                        Send Launch Brief & Check Availability
                      </span>
                    )}
                  </Button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
