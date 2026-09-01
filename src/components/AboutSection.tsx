import React from 'react';
import { motion } from 'motion/react';
import { 
  Trophy, 
  Target, 
  Sparkles, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  Clock, 
  Flame, 
  Zap, 
  Users, 
  ShieldCheck,
  Compass,
  Award
} from 'lucide-react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  const pillars = [
    {
      number: '01',
      title: 'Top 1% Hunter Endorsement & Algorithmic Timing',
      description: 'When I hunt your product, thousands of active followers receive immediate alerts. More critically, I structure your launch to respect Product Hunt’s anti-spam algorithms, ensuring every genuine supporter counts.',
      badge: 'Product Hunt Mastery',
      icon: Trophy,
      accent: 'border-orange-200 bg-orange-50 text-orange-600'
    },
    {
      number: '02',
      title: 'X & LinkedIn Organic Narrative Engineering',
      description: 'I turn your technical specs and feature list into compelling founder storytelling. High-retention carousels, viral demo hooks, and build-in-public narratives that bring enterprise leads straight into your DMs.',
      badge: 'Social Distribution',
      icon: Sparkles,
      accent: 'border-amber-200 bg-amber-50 text-amber-600'
    },
    {
      number: '03',
      title: 'High-ROI Creator & Influencer Syndication',
      description: 'Zero automated spam or ghost agencies. I maintain direct relationships with 220+ verified tech YouTubers, X influencers, and AI newsletter authors who give your product authentic, high-converting video reviews.',
      badge: 'Influencer Amplification',
      icon: Users,
      accent: 'border-emerald-200 bg-emerald-50 text-emerald-600'
    }
  ];

  const comparisonRows = [
    {
      feature: 'Hunter Reach & Alerts',
      selfHunt: 'Zero hunter followers; standard self-post with limited discovery',
      shivamHunt: 'Instant email & push alerts sent to thousands of active Product Hunt power users',
    },
    {
      feature: 'Pre-Launch Warm-up',
      selfHunt: 'Posting last-minute on Twitter asking friends to upvote',
      shivamHunt: '4-week teaser sprint, 500+ waitlist capture, and targeted build-in-public ramp',
    },
    {
      feature: 'Asset & Copy Optimization',
      selfHunt: 'Standard static screenshots and dense technical copy',
      shivamHunt: '60fps animated GIFs, high-converting gallery cards, and persuasive maker comments',
    },
    {
      feature: 'Launch Day War Room',
      selfHunt: 'Anxious refreshing with no plan for sudden algorithm shifts',
      shivamHunt: '24-hour active war room, hourly velocity tracking, and global timezone mobilization',
    },
    {
      feature: 'Multi-Channel Omnipresence',
      selfHunt: 'Isolated Product Hunt link with no social amplification',
      shivamHunt: 'Synchronized viral X threads, LinkedIn carousels, and tech creator activations',
    },
    {
      feature: 'Typical Outcome',
      selfHunt: 'Rank #12 - #20 (Forgotten in 48 hours)',
      shivamHunt: '🏆 #1 - #3 Product of the Day + Tens of thousands in MRR pipeline',
    }
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative ambient dots */}
      <div className="absolute inset-0 bg-dot-mesh opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="orange" className="mb-3">
            ABOUT SHIVAM
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
            The Distribution Secret Behind Today’s Fastest Growing Startups.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Building great software is only half the battle. If nobody hears about it, even the most innovative products disappear into silence. 
            I bridge the gap between brilliant code and unstoppable viral momentum.
          </p>
        </div>

        {/* Story & Philosophy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-20">
          
          {/* Left: Bio & Persona Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="rounded-3xl border border-slate-200/90 bg-gradient-to-b from-slate-50/80 to-white p-7 shadow-xl shadow-slate-900/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100/50 rounded-full blur-2xl pointer-events-none" />

              {/* Profile Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-orange-600 via-amber-500 to-orange-400 p-1 flex items-center justify-center text-white text-2xl font-bold font-display shadow-lg shadow-orange-500/20">
                  <span className="w-full h-full rounded-xl bg-slate-900 flex items-center justify-center">
                    S
                  </span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold text-slate-900 font-display">Shivam</h3>
                    <Badge variant="emerald" className="text-[10px] py-0.5 px-2">
                      Available for Hire
                    </Badge>
                  </div>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">
                    Growth Architect • Top 1% Hunter • SMM Strategist
                  </p>
                  <p className="text-xs text-orange-600 font-semibold mt-0.5">
                    185+ Front-page Product Launches
                  </p>
                </div>
              </div>

              {/* Bio Narrative */}
              <div className="space-y-3.5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-5">
                <p>
                  I’m Shivam, a dedicated growth partner for developers, indie hackers, and VC-backed tech founders. Over the last 4 years, I have engineered distribution strategies that generated over <strong>68 million organic impressions</strong> and propelled dozens of products to the #1 spot on Product Hunt.
                </p>
                <p>
                  My philosophy is simple: <em>distribution is not an afterthought, it is built into the launch DNA</em>. Whether it is securing the hunter badge, ghostwriting founder stories on X and LinkedIn, or negotiating creator sponsorships, I work as an embedded co-pilot for your launch.
                </p>
              </div>

              {/* Verified Credentials Pills */}
              <div className="mt-6 pt-5 border-t border-slate-100 grid grid-cols-2 gap-3 text-xs font-semibold text-slate-700">
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200/80">
                  <Award className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>Top 1% Hunter Status</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200/80">
                  <Zap className="w-4 h-4 text-orange-500 shrink-0" />
                  <span>24h War Room Leader</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200/80">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>100% Organic Delivery</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200/80">
                  <Users className="w-4 h-4 text-blue-500 shrink-0" />
                  <span>220+ Creator Network</span>
                </div>
              </div>

              <div className="mt-6">
                <Button 
                  onClick={onOpenBooking}
                  className="w-full justify-center group"
                >
                  <span>Work Directly with Shivam</span>
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Right: 3 Core Pillars of Shivam's Playbook */}
          <div className="lg:col-span-7 space-y-5">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-orange-200 transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border ${pillar.accent} group-hover:scale-105 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2 mb-1 flex-wrap">
                        <span className="text-xs font-bold text-orange-600 font-mono-code">
                          PILLAR {pillar.number}
                        </span>
                        <Badge variant="secondary" className="text-[11px]">
                          {pillar.badge}
                        </Badge>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 font-display">
                        {pillar.title}
                      </h3>
                      <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* Side-by-Side Comparison: Self Launching vs Shivam Playbook */}
        <div className="mt-12 rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-10 shadow-lg shadow-slate-900/5">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
              Why Founders Choose Shivam Over Self-Hunting
            </h3>
            <p className="text-sm text-slate-500 mt-2">
              A transparent comparison between standard DIY launches and Shivam’s engineered velocity system.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-500">
                  <th className="py-4 px-4 w-1/4">Launch Aspect</th>
                  <th className="py-4 px-4 w-3/8 text-slate-400">Typical Self-Launch (DIY)</th>
                  <th className="py-4 px-4 w-3/8 text-orange-600 bg-orange-50/50 rounded-t-xl">
                    🚀 Launching with Shivam
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-4 font-bold text-slate-900">
                      {row.feature}
                    </td>
                    <td className="py-4 px-4 text-slate-500">
                      <div className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                        <span>{row.selfHunt}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-semibold text-slate-900 bg-orange-50/30">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{row.shivamHunt}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
