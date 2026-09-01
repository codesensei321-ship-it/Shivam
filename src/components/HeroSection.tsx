import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Trophy, 
  TrendingUp, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Share2, 
  Flame, 
  MessageSquare, 
  ThumbsUp, 
  ExternalLink,
  ShieldCheck,
  Zap,
  Award
} from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { STAT_METRICS } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenAudit: () => void;
  onOpenBooking: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenAudit, onOpenBooking }) => {
  const [upvotes, setUpvotes] = useState(1482);
  const [hasUpvoted, setHasUpvoted] = useState(false);
  const [activePreviewTab, setActivePreviewTab] = useState<'ph' | 'x' | 'linkedin'>('ph');

  const handleUpvote = () => {
    if (!hasUpvoted) {
      setUpvotes(prev => prev + 1);
      setHasUpvoted(true);
    } else {
      setUpvotes(prev => prev - 1);
      setHasUpvoted(false);
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Decorative Light Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] ambient-glow pointer-events-none -z-10" />
      <div className="absolute top-40 right-10 w-96 h-96 ambient-glow-purple pointer-events-none -z-10 opacity-70" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Hero Pill Badge */}
        <div className="flex justify-center mb-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-amber-200/90 shadow-sm shadow-orange-500/10 backdrop-blur-md"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            <span className="text-xs font-bold text-slate-800 tracking-wide">
              Product Hunt Hunter <span className="text-slate-300">•</span> X & LinkedIn SMM <span className="text-slate-300">•</span> Influencer Growth
            </span>
            <span className="bg-orange-100 text-orange-800 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
              Elite Hunter
            </span>
          </motion.div>
        </div>

        {/* Main Headline & Subtitle */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-slate-900 tracking-tight leading-[1.12]"
          >
            Hi, I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500">Shivam</span>. <br className="hidden sm:inline" />
            I Turn Tech Products into <span className="underline decoration-orange-400 decoration-wavy decoration-2">#1 Product of the Day</span> & Viral Sensations.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-3xl mx-auto"
          >
            I engineer high-velocity distribution for ambitious founders. Through top-tier 
            <strong className="text-slate-900 font-semibold"> Product Hunt hunting</strong>, viral 
            <strong className="text-slate-900 font-semibold"> X & LinkedIn organic SMM</strong>, and targeted 
            <strong className="text-slate-900 font-semibold"> tech creator influencer campaigns</strong>, I guarantee unmatched launch day momentum.
          </motion.p>

          {/* Action CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              id="hero-primary-cta"
              size="lg"
              onClick={onOpenBooking}
              className="w-full sm:w-auto text-base px-8 py-3.5 shadow-xl shadow-orange-500/25 group"
            >
              <span>Plan Your Next Launch</span>
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>

            <Button
              id="hero-secondary-audit"
              variant="outline"
              size="lg"
              onClick={onOpenAudit}
              className="w-full sm:w-auto text-base px-6 py-3.5 bg-white/95 border-slate-300 hover:border-orange-300 hover:bg-orange-50/40 text-slate-800 font-semibold"
            >
              <Sparkles className="w-4 h-4 mr-2 text-amber-500" />
              Check Launch Readiness (Score 0-100%)
            </Button>
          </motion.div>

          {/* Trust Guarantees */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-slate-500 font-medium"
          >
            <span className="flex items-center gap-1.5 text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              185+ Verified Front-page Launches
            </span>
            <span className="flex items-center gap-1.5 text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              Zero Bot Policy • 100% Organic Velocity
            </span>
            <span className="flex items-center gap-1.5 text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              24-Hour Active Launch War Room
            </span>
          </motion.div>
        </div>

        {/* Interactive Live Launch Showcase Stage */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="relative max-w-4xl mx-auto mt-6"
        >
          {/* Card Container with subtle shadow & border decorum */}
          <div className="relative rounded-3xl border border-slate-200/90 bg-white/95 p-4 sm:p-7 shadow-2xl shadow-slate-900/10 backdrop-blur-xl">
            
            {/* Header / Tabs in Launch Terminal */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-400/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-400/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-400/80" />
                </div>
                <div className="flex items-center gap-2 pl-2">
                  <Badge variant="orange" className="text-[11px] font-bold">
                    <Trophy className="w-3 h-3 mr-1 text-orange-600" />
                    LIVE LAUNCH SIMULATOR
                  </Badge>
                  <span className="text-xs text-slate-500 font-mono-code">producthunt.com/posts/shivam-hunt</span>
                </div>
              </div>

              {/* View switcher */}
              <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl text-xs font-semibold text-slate-600">
                <button
                  id="tab-view-ph"
                  onClick={() => setActivePreviewTab('ph')}
                  className={`px-3 py-1 rounded-lg transition-all ${
                    activePreviewTab === 'ph'
                      ? 'bg-white text-orange-700 shadow-sm font-bold'
                      : 'hover:text-slate-900'
                  }`}
                >
                  Product Hunt View
                </button>
                <button
                  id="tab-view-x"
                  onClick={() => setActivePreviewTab('x')}
                  className={`px-3 py-1 rounded-lg transition-all ${
                    activePreviewTab === 'x'
                      ? 'bg-white text-slate-900 shadow-sm font-bold'
                      : 'hover:text-slate-900'
                  }`}
                >
                  𝕏 Viral Thread
                </button>
                <button
                  id="tab-view-linkedin"
                  onClick={() => setActivePreviewTab('linkedin')}
                  className={`px-3 py-1 rounded-lg transition-all ${
                    activePreviewTab === 'linkedin'
                      ? 'bg-white text-blue-700 shadow-sm font-bold'
                      : 'hover:text-slate-900'
                  }`}
                >
                  LinkedIn Growth
                </button>
              </div>
            </div>

            {/* Simulated Live View Tab: Product Hunt */}
            {activePreviewTab === 'ph' && (
              <div className="mt-5 space-y-6">
                {/* Product Hunt Card */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-2xl bg-gradient-to-r from-orange-50/50 via-amber-50/30 to-white border border-orange-100">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white text-2xl font-bold shadow-md shadow-orange-500/20 shrink-0">
                      ⚡
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h4 className="text-lg font-bold text-slate-900 font-display">SuperLaunch AI</h4>
                        <span className="inline-flex items-center text-[11px] font-bold text-orange-800 bg-orange-100 px-2 py-0.5 rounded-md border border-orange-200">
                          🏆 #1 Product of the Day
                        </span>
                      </div>
                      <p className="text-sm text-slate-600 mt-0.5">
                        Autonomous AI growth engine that turns organic mentions into customers.
                      </p>
                      <div className="flex items-center gap-3 mt-2 text-xs text-slate-500 font-medium">
                        <span className="flex items-center gap-1 text-orange-700 font-semibold bg-orange-100/70 px-2 py-0.5 rounded">
                          <Flame className="w-3.5 h-3.5" /> Hunted by Shivam
                        </span>
                        <span>•</span>
                        <span>SaaS / AI / Marketing</span>
                      </div>
                    </div>
                  </div>

                  {/* Interactive Upvote Button */}
                  <button
                    id="simulated-upvote-btn"
                    onClick={handleUpvote}
                    className={`flex sm:flex-col items-center justify-center gap-1.5 px-5 py-3 rounded-2xl border-2 transition-all cursor-pointer shadow-sm ${
                      hasUpvoted
                        ? 'border-orange-500 bg-orange-500 text-white shadow-md shadow-orange-500/30 scale-105'
                        : 'border-slate-200 bg-white hover:border-orange-400 hover:bg-orange-50 text-slate-800'
                    }`}
                  >
                    <ThumbsUp className={`w-5 h-5 ${hasUpvoted ? 'text-white' : 'text-orange-600'}`} />
                    <span className="font-mono-code font-bold text-sm">{upvotes}</span>
                  </button>
                </div>

                {/* Hunter's First Comment Blueprint */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-sm">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-orange-600 to-amber-500 text-white font-bold text-xs flex items-center justify-center">
                        S
                      </div>
                      <span className="font-bold text-slate-900">Shivam</span>
                      <span className="text-[11px] font-bold text-orange-700 bg-orange-100 px-1.5 py-0.5 rounded">
                        HUNTER
                      </span>
                    </div>
                    <span className="text-xs text-slate-400 font-mono-code">12:01 AM PST Launch Submission</span>
                  </div>
                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                    “Thrilled to hunt SuperLaunch today! I've been testing this with the founding team for 3 weeks. 
                    Their conversion workflow is unmatched. Drop your thoughts below — the makers are here all day to answer your questions!”
                  </p>
                </div>
              </div>
            )}

            {/* Simulated Live View Tab: X Viral Thread */}
            {activePreviewTab === 'x' && (
              <div className="mt-5 space-y-4">
                <div className="p-5 rounded-2xl bg-slate-950 text-white border border-slate-800">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-orange-500 font-bold flex items-center justify-center text-white">
                        S
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="font-bold text-sm">Shivam 🚀</span>
                          <span className="text-blue-400 text-xs">✓</span>
                          <span className="text-xs text-slate-400">@shivam_launches</span>
                        </div>
                        <span className="text-[11px] text-slate-400">Product Hunt Hunter & Growth Architect</span>
                      </div>
                    </div>
                    <Badge variant="orange" className="text-xs">
                      1.2M Views Thread
                    </Badge>
                  </div>
                  <p className="mt-3 text-sm text-slate-200 leading-relaxed font-sans">
                    We just took a bootstrap AI startup from 0 to <span className="text-amber-400 font-semibold">#1 Product of the Day</span> on Product Hunt + $14,000 MRR in 48 hours. <br /><br />
                    Here is the exact 7-step viral launch blueprint we used (steal this for your next launch): 🧵👇
                  </p>
                  <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono-code">
                    <span>❤️ 14,280 Likes</span>
                    <span>🔁 3,840 Reposts</span>
                    <span>💬 412 Replies</span>
                    <span>🔖 6,890 Bookmarks</span>
                  </div>
                </div>
              </div>
            )}

            {/* Simulated Live View Tab: LinkedIn */}
            {activePreviewTab === 'linkedin' && (
              <div className="mt-5 space-y-4">
                <div className="p-5 rounded-2xl bg-white border border-slate-200 text-slate-900 shadow-sm">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-600 font-bold flex items-center justify-center text-white">
                        in
                      </div>
                      <div>
                        <span className="font-bold text-sm text-slate-900">Shivam • Founder SMM & Inbound</span>
                        <p className="text-xs text-slate-500">Helping B2B Founders generate 50+ enterprise demo calls monthly</p>
                      </div>
                    </div>
                    <span className="text-xs text-blue-700 bg-blue-50 font-bold px-2.5 py-1 rounded-full">
                      High Inbound Playbook
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-slate-700 leading-relaxed">
                    Most SaaS founders spend $20,000 on cold ads that generate zero qualified calls. <br />
                    Instead, we built a 14-day carousel breakdown series directly addressing VP of Engineering pain points. <br />
                    <strong>Result:</strong> 42 Enterprise inquiries booked without spending a single dollar on paid ads.
                  </p>
                  <div className="mt-3 p-3 bg-blue-50/60 rounded-xl border border-blue-100 text-xs text-blue-900 flex items-center justify-between">
                    <span className="font-semibold">📊 480k Organic Impressions • 840+ Comments</span>
                    <span className="font-bold text-blue-600">Download Blueprint</span>
                  </div>
                </div>
              </div>
            )}

            {/* Bottom Quick Metric Bar */}
            <div className="mt-5 pt-4 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                <div className="text-xs text-slate-500 font-medium">Average PH Finish</div>
                <div className="text-base sm:text-lg font-bold text-slate-900 font-display">Top 3 Guarantee</div>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                <div className="text-xs text-slate-500 font-medium">Avg Upvotes</div>
                <div className="text-base sm:text-lg font-bold text-orange-600 font-display">850 - 1,500+</div>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                <div className="text-xs text-slate-500 font-medium">Organic Creator Network</div>
                <div className="text-base sm:text-lg font-bold text-slate-900 font-display">220+ Tech Creators</div>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                <div className="text-xs text-slate-500 font-medium">Founder Inbound Spike</div>
                <div className="text-base sm:text-lg font-bold text-emerald-600 font-display">5x - 12x Inflow</div>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Core Stats Grid Bar */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {STAT_METRICS.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-white/90 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-orange-200 transition-all group"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 text-orange-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {stat.id === 'ph-launches' && <Trophy className="w-5 h-5" />}
                  {stat.id === 'impressions' && <TrendingUp className="w-5 h-5" />}
                  {stat.id === 'influencer-reach' && <Sparkles className="w-5 h-5" />}
                  {stat.id === 'pipeline-value' && <Zap className="w-5 h-5" />}
                </div>
                <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  {stat.growth}
                </span>
              </div>
              <div className="text-3xl sm:text-4xl font-black text-slate-900 font-display tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-slate-800 mt-1">
                {stat.label}
              </div>
              <div className="text-xs text-slate-500 mt-1 leading-relaxed">
                {stat.subtext}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
