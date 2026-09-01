import { StatMetric, ServiceDetail, CaseStudy, FaqItem, Testimonial, LaunchReadinessQuestion } from '../types';

export const STAT_METRICS: StatMetric[] = [
  {
    id: 'ph-launches',
    value: '185+',
    label: '#1 & Top 3 Product Hunt Launches',
    subtext: '96.2% success rate achieving front-page leaderboard',
    iconName: 'Trophy',
    growth: '+42 this year'
  },
  {
    id: 'impressions',
    value: '68M+',
    label: 'Total Organic Impressions Generated',
    subtext: 'Across high-converting X (Twitter) & LinkedIn campaigns',
    iconName: 'TrendingUp',
    growth: '100% Organic'
  },
  {
    id: 'influencer-reach',
    value: '220+',
    label: 'Vetted Tech Influencers & Creators',
    subtext: 'Direct private network with zero intermediary markups',
    iconName: 'Users',
    growth: 'Global Network'
  },
  {
    id: 'pipeline-value',
    value: '$5.4M+',
    label: 'Tracked Pipeline & GMV for Founders',
    subtext: 'Immediate MRR spike and seed investor inbound generated',
    iconName: 'Zap',
    growth: 'Verified ROI'
  }
];

export const SERVICES_DATA: ServiceDetail[] = [
  {
    id: 'product-hunt-hunting',
    title: 'Product Hunt Launch Architecture & Hunting',
    tagline: 'Get hunted by an Elite Top 1% Hunter and dominate the #1 spot on launch day.',
    icon: 'Trophy',
    badge: 'Flagship Service',
    description: 'Launching on Product Hunt is no longer about just hitting "submit". It requires a surgical 4-week warm-up, bespoke asset crafting, first-comment masterclasses, and an international timezone upvote momentum strategy.',
    deliverables: [
      'Personal Hunter Endorsement & Official Hunt Submission',
      'High-converting GIF gallery, thumbnail, & maker comment copy',
      'Teaser page optimization to collect 500+ pre-launch subscribers',
      '24-hour Launch Day War Room monitoring & leaderboard strategy',
      'Algorithm safe-guarding (avoiding shadowbans and suspicious spikes)'
    ],
    resultsMetric: 'Average 850+ upvotes & Top 3 Badge',
    idealFor: 'AI tools, SaaS products, Dev tools & Mobile apps aiming for immediate viral influx.',
    featured: true
  },
  {
    id: 'x-linkedin-smm',
    title: 'X & LinkedIn Growth & Ghostwriting',
    tagline: 'Transform founder personal accounts into unstoppable organic distribution engines.',
    icon: 'Sparkles',
    badge: 'High Inbound',
    description: 'People buy from founders, not faceless corporate logos. I build your founder voice on X and LinkedIn through viral storytelling, high-retention carousels, build-in-public breakdowns, and calculated engagement loops.',
    deliverables: [
      '12-16 high-converting monthly posts / threads / LinkedIn carousels',
      'Visual asset & screenshot mockup design optimized for feeds',
      'Daily 45-minute strategic founder engagement in relevant niche circles',
      'Narrative positioning that converts followers into paying customers & beta users',
      'Monthly analytics review & viral format iterations'
    ],
    resultsMetric: '500k-2.5M impressions / month average',
    idealFor: 'Tech founders, venture-backed CEOs, and solo creators building in public.'
  },
  {
    id: 'influencer-marketing',
    title: 'Tech Influencer & Creator Amplification',
    tagline: 'Orchestrate high-ROI creator sponsorships without burning budget on fake engagement.',
    icon: 'Megaphone',
    badge: 'Viral Boost',
    description: 'Stop cold DMing influencers who ignore you or deliver zero clicks. I leverage my personal roster of 220+ verified tech YouTubers, X creators, newsletter authors, and TikTok tech reviewers for authentic product walkthroughs.',
    deliverables: [
      'Curated shortlist of creators matched to your exact buyer persona',
      'Briefing doc creation, script frameworks & USP angle formulation',
      'End-to-end contract negotiation & guaranteed delivery milestones',
      'Custom UTM tracking, affiliate codes & conversion dashboard setup',
      'Syndication into leading tech and AI newsletters (50k-250k subscribers)'
    ],
    resultsMetric: '3.8x Average Return on Creator Ad Spend',
    idealFor: 'Funded startups with a marketing budget ready to scale user acquisition fast.'
  },
  {
    id: 'full-throttle-sprint',
    title: 'The 360° Viral Launch Sprint (All-in-One)',
    tagline: 'The complete launch juggernaut combining Hunting + Social Blitz + Creator syndication.',
    icon: 'Rocket',
    badge: 'Most Popular for Series A/Seed',
    description: 'When launch failure is not an option. A complete 30-day intensive program where we orchestrate the Product Hunt hunt, coordinate 30+ simultaneous social posts, and activate 10+ creators on launch day for an inescapable omnipresence.',
    deliverables: [
      'Complete Product Hunt Hunt & 24h War Room support',
      '2-Week Pre-Launch X & LinkedIn momentum campaign',
      '5-10 Creator video/thread activations on launch morning',
      'Press release pitching to TechCrunch, Ben\'s Bites, & The Rundown AI',
      'Post-launch retention strategy & investor update deck highlight package'
    ],
    resultsMetric: 'Top #1 Product of the Day + 15k+ visits in 48h',
    idealFor: 'Founders who want a done-for-you explosive public launch with zero guesswork.'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'omni-ai',
    productName: 'OmniFlow AI',
    tagline: 'Autonomous AI workflow builder for product designers',
    category: 'AI Tool',
    badgeRank: '#1 Product of the Day',
    totalUpvotes: 1420,
    featuredHunter: 'Hunted by Shivam',
    impressions: '3.4M Impressions',
    newSignups: '12,800+ Signups',
    xEngagement: '18.4k reposts & likes',
    linkedinReach: '420k reach',
    founderName: 'Alex Thorne',
    founderTitle: 'Co-Founder & CEO, OmniFlow',
    founderAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    testimonial: 'Shivam is a launch wizard. He crafted our positioning, coached us on first-day maker replies, and activated his creator network on X. We held #1 all 24 hours and closed a $2.5M Seed round two weeks later.',
    summary: 'OmniFlow needed an explosive debut to compete with established AI design suites. Shivam orchestrated a 2-week build-in-public ramp on X followed by a midnight launch attack.',
    keyStrategy: 'Synchronized X demo video dropping at 12:05 AM PST with 8 creator retweets driving instant front-page velocity.'
  },
  {
    id: 'devpulse',
    productName: 'DevPulse Studio',
    tagline: 'Next-generation API observability & telemetry engine',
    category: 'Dev Tool',
    badgeRank: '#1 Product of the Week',
    totalUpvotes: 1190,
    featuredHunter: 'Hunted by Shivam',
    impressions: '2.1M Impressions',
    newSignups: '8,400+ Developer Accounts',
    xEngagement: '12.2k engagements',
    linkedinReach: '310k reach',
    founderName: 'Devon Patel',
    founderTitle: 'CTO, DevPulse Technologies',
    founderAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    testimonial: 'Before Shivam stepped in, our previous launch ended at #14. With Shivam as our hunter and strategist, we dominated the tech category, stayed #1 for 3 days straight, and gained massive developer trust.',
    summary: 'Dev tools are notoriously hard to market. Shivam translated dense telemetry specs into crystal-clear micro-demos for LinkedIn carousels and developer X influencers.',
    keyStrategy: 'High-contrast interactive animated GIF previews and targeted endorsements from well-known open-source maintainers.'
  },
  {
    id: 'synthetix',
    productName: 'KipNotes SaaS',
    tagline: 'AI meeting summaries that automatically create Jira tickets',
    category: 'SaaS',
    badgeRank: '#2 Product of the Day',
    totalUpvotes: 980,
    featuredHunter: 'Hunted by Shivam',
    impressions: '1.8M Impressions',
    newSignups: '6,200+ Active Workspaces',
    xEngagement: '9.6k engagements',
    linkedinReach: '280k reach',
    founderName: 'Sarah Lin',
    founderTitle: 'Founder, KipNotes',
    founderAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    testimonial: 'Shivam’s LinkedIn playbook generated 40+ enterprise inbound leads in the first week alone. He doesn’t just hunt; he creates actual business pipeline.',
    summary: 'Targeted B2B decision-makers on LinkedIn alongside the Product Hunt push, resulting in 40+ sales calls booked in 7 days.',
    keyStrategy: 'Founder ghostwritten breakdown of "How we built an AI tool to save 12 engineering hours a week" which reached 180k impressions.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Marcus Vance',
    role: 'Founder & CEO',
    company: 'HyperType.ai',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    quote: 'Shivam is hands down the best launch partner in the ecosystem. His attention to detail from the first teaser post to hour 23 of the Product Hunt race is unmatched.',
    platform: 'producthunt',
    highlight: '#1 Product of the Day (1,340 upvotes)',
    verifiedLaunch: 'Verified Launch 2024'
  },
  {
    id: 't2',
    name: 'Elena Rostova',
    role: 'Head of Growth',
    company: 'Loomin Video AI',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    quote: 'Our X account went from 800 followers to 24,000 in under 90 days with Shivam running our social strategy. Inbound investor interest jumped 5x.',
    platform: 'x',
    highlight: '24k followers & 8.4M Impressions',
    verifiedLaunch: 'SMM Campaign'
  },
  {
    id: 't3',
    name: 'Karthik Raja',
    role: 'Co-Founder',
    company: 'PromptDeck',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80',
    quote: 'The influencer campaign Shivam managed delivered $18k in MRR from day one. He knows every key tech creator personally and gets them to genuinely care about your product.',
    platform: 'linkedin',
    highlight: '$18k MRR Added in Month 1',
    verifiedLaunch: 'Creator Campaign'
  },
  {
    id: 't4',
    name: 'Jessica Miller',
    role: 'Product Lead',
    company: 'SyncPulse',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
    quote: 'If you want to win on Product Hunt, having Shivam in your corner is unfair advantage. He treats your launch as if it was his own company.',
    platform: 'producthunt',
    highlight: 'Golden Kitty Award Nominee',
    verifiedLaunch: 'Top 3 Finisher'
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'Product Hunt',
    question: 'Why should I launch with a Hunter like Shivam instead of hunting myself?',
    answer: 'When an Elite Top 1% Hunter posts your product, thousands of active Product Hunt followers receive an instant notification email and app alert. More importantly, I bring battle-tested launch mechanics: pinpoint timing, high-converting thumbnail psychology, maker comment copywriting, anti-spam algorithm protection, and active war room guidance throughout the entire 24-hour cycle.'
  },
  {
    id: 'faq-2',
    category: 'Product Hunt',
    question: 'How far in advance should we start preparing for our Product Hunt launch?',
    answer: 'The ideal window is 3 to 4 weeks before your target launch date. This allows us to set up your Product Hunt "Coming Soon" teaser page (to gather 300-800 pre-launch subscribers), warm up your social channels with build-in-public content, and coordinate launch day support with early beta users and tech communities.'
  },
  {
    id: 'faq-3',
    category: 'X & LinkedIn',
    question: 'How do you create authentic social content without sounding like generic corporate marketing?',
    answer: 'I conduct an in-depth founder discovery session to extract your authentic voice, unique technical opinions, and battle stories. We avoid corporate buzzwords entirely, focusing on raw insights, transparent metrics, visually compelling breakdown carousels, and relatable memes that resonate with builders and decision-makers.'
  },
  {
    id: 'faq-4',
    category: 'Influencer Marketing',
    question: 'How do you prevent wasting budget on influencers with bot or low-converting followers?',
    answer: 'I run every creator through rigorous multi-point vetting: historical engagement rates, comment quality audits (detecting automated comment pods), authentic audience demographics, and past sponsorship CTRs. We only work with creators who produce genuine video walkthroughs and authentic demonstrations.'
  },
  {
    id: 'faq-5',
    category: 'Pricing & Process',
    question: 'Do you work with bootstrapped indie hackers as well as funded startups?',
    answer: 'Yes! I offer flexible tiers ranging from dedicated Product Hunt Hunting packages tailored for bootstrapped indie makers to comprehensive 360° viral launch sprints designed for seed and Series A startups. Every package is transparent with clear deliverable milestones.'
  },
  {
    id: 'faq-6',
    category: 'Product Hunt',
    question: 'What happens during the 24-hour Launch Day War Room?',
    answer: 'At 12:01 AM PST when Product Hunt resets, I submit your product with optimized assets. Throughout the day, I monitor leaderboard velocity, guide you through responding to community questions, execute timed cross-promotional drops on X and LinkedIn, and advise on timezone-specific momentum boosts.'
  }
];

export const LAUNCH_READINESS_QUESTIONS: LaunchReadinessQuestion[] = [
  {
    id: 1,
    question: 'What is your current pre-launch subscriber or waitlist size?',
    options: [
      { text: 'Less than 100 people / Just getting started', points: 10, tip: 'We should create a PH Teaser page immediately to capture early interest.' },
      { text: '100 - 500 active waitlist subscribers', points: 20, tip: 'Good baseline! We can warm them up with sneak-peek emails.' },
      { text: '500 - 2,000+ enthusiastic beta users', points: 30, tip: 'Strong pipeline! Ready for a top 3 contender launch.' }
    ]
  },
  {
    id: 2,
    question: 'How polished are your product media assets (GIFs, short video, screenshots)?',
    options: [
      { text: 'Basic static screenshots only', points: 10, tip: 'We will design custom high-framerate animated GIFs & gallery cards.' },
      { text: 'Standard demo video and clean screenshots', points: 20, tip: 'Decent base, let’s optimize the first 5 seconds for viral appeal.' },
      { text: 'Stunning 60fps interactive walkthroughs & micro-demos', points: 30, tip: 'World-class visual assets ready to dominate the feed!' }
    ]
  },
  {
    id: 3,
    question: 'What is your founder social presence on X (Twitter) or LinkedIn?',
    options: [
      { text: 'Under 1,000 followers / rarely post', points: 10, tip: 'We will kickstart a 14-day build-in-public sprint to build warm audience.' },
      { text: '1k - 10k engaged followers and active network', points: 20, tip: 'Great community foundation for launch day momentum.' },
      { text: '10k+ followers with consistent high engagement', points: 30, tip: 'Massive organic distribution power ready to unlock!' }
    ]
  },
  {
    id: 4,
    question: 'What is your primary goal for this launch cycle?',
    options: [
      { text: 'Initial beta users & product feedback validation', points: 15, tip: 'Focus on maker community feedback & fast feedback loops.' },
      { text: 'Massive brand awareness, #1 badge & investor inbound', points: 25, tip: 'Full viral hunting sprint + creator syndication.' },
      { text: 'Immediate paying customer acquisition & MRR explosion', points: 25, tip: 'Strategic LinkedIn B2B distribution + high-intent creator deals.' }
    ]
  }
];
