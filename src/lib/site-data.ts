export type Service = {
  slug: string;
  name: string;
  short: string;
  heroTitle: string;
  heroText: string;
  items: string[];
  next: string;
  cta: string;
};

export const services: Service[] = [
  {
    slug: "meta-ads",
    name: "Meta Ads",
    short: "High-performance advertising across Facebook and Instagram.",
    heroTitle: "Ads that don't just reach people — they make them act.",
    heroText:
      "We create and manage high-performance advertising campaigns across Facebook and Instagram, focused on reaching the right audience, generating demand, and driving measurable results.",
    items: [
      "Campaign strategy",
      "Audience targeting",
      "Ad creative",
      "Campaign management",
      "A/B testing",
      "Retargeting",
      "Performance tracking",
      "Reporting",
    ],
    next: "Right audience → compelling creative → measurable results. Built to generate demand and drive growth.",
    cta: "Launch My Campaign",
  },
  {
    slug: "content-creation",
    name: "Content Creation",
    short: "Scroll-stopping content built around your brand.",
    heroTitle: "Content that makes people stop.",
    heroText:
      "We develop scroll-stopping content designed around each brand's identity, audience, and goals — from social posts and creatives to campaigns and promotional content.",
    items: [
      "Social posts",
      "Ad creatives",
      "Campaign content",
      "Promotional content",
      "Brand storytelling",
      "Platform-native formats",
    ],
    next: "Content isn't just posted — it's planned around attention, relevance, and the platform it lives on.",
    cta: "Create My Content",
  },
  {
    slug: "video-editing",
    name: "Video Editing",
    short: "Raw footage and ideas into videos that perform.",
    heroTitle: "Video built for today's platforms.",
    heroText:
      "We transform raw footage and ideas into engaging short-form and long-form videos optimized for Reels, TikTok, YouTube Shorts, and paid advertisements.",
    items: [
      "Short-form edits",
      "Long-form edits",
      "Reels & TikTok",
      "YouTube Shorts",
      "Ad videos",
      "Motion graphics",
      "Sound & color",
      "Captions",
    ],
    next: "Raw footage → engaging edit → platform-ready video. Built to stop the scroll and hold attention.",
    cta: "Edit My Videos",
  },
  {
    slug: "creative-strategy",
    name: "Creative Strategy",
    short: "What to say, how to say it, and how to present it.",
    heroTitle: "Strategy before anything goes live.",
    heroText:
      "We help brands determine what to say, how to say it, and how to present it so their marketing is consistent, relevant, and attention-grabbing.",
    items: [
      "Messaging",
      "Brand voice",
      "Content pillars",
      "Creative direction",
      "Campaign planning",
      "Positioning",
    ],
    next: "Strategy keeps every piece of marketing connected — consistent, relevant, and built to be noticed.",
    cta: "Define My Strategy",
  },
  {
    slug: "social-media",
    name: "Social Media",
    short: "A stronger presence across every platform.",
    heroTitle: "A social presence people actually follow.",
    heroText:
      "We help brands build a stronger presence across social platforms through content planning, creative direction, publishing strategies, and audience-focused communication.",
    items: [
      "Content planning",
      "Creative direction",
      "Publishing strategy",
      "Community engagement",
      "Platform growth",
      "Analytics",
    ],
    next: "Plan → create → publish → engage. A consistent system across every platform your audience lives on.",
    cta: "Grow My Socials",
  },
  {
    slug: "brand-creative",
    name: "Brand Creative",
    short: "Visual systems that make a brand recognizable.",
    heroTitle: "Recognition starts with consistent visuals.",
    heroText:
      "We create visual assets and creative systems that help brands develop a recognizable identity and maintain consistency across their marketing.",
    items: [
      "Visual identity",
      "Brand assets",
      "Creative systems",
      "Design guidelines",
      "Templates",
      "Consistent visuals",
    ],
    next: "A brand with pull has a consistent, recognizable visual identity across everything it puts out.",
    cta: "Build My Brand",
  },
  {
    slug: "performance-creative",
    name: "Performance Creative",
    short: "Creative and advertising data working together.",
    heroTitle: "Ads designed from data to drive action.",
    heroText:
      "We combine creativity with advertising data to develop ads that are not only visually compelling but designed to capture attention and drive action.",
    items: [
      "Data-driven design",
      "Ad creative testing",
      "Hook development",
      "Conversion-focused ads",
      "Iterative optimization",
      "Readouts",
    ],
    next: "Every ad is designed from performance data — built to be watched, remembered, and acted on.",
    cta: "Scale My Ads",
  },
];

export type Project = {
  slug: string;
  name: string;
  type: string;
  blurb: string;
  problem: string;
  idea: string;
  product: string;
  features: string[];
  ai?: string;
  tech: string[];
  status: "Internal Product" | "Client";
};

export const projects: Project[] = [
  {
    slug: "magnet-media-launch",
    name: "Magnet Media Launch",
    type: "Brand & Website",
    blurb: "The brand site for Magnet Media itself — designed, built, and shipped by the team.",
    problem: "A new agency needed an identity and a home that reflected a creative and performance marketing company — not another templated agency site.",
    idea: "A dark, cinematic site with bold typography, motion, and a hero that lives up to the name — made to make people stop.",
    product: "A full multi-page site covering services, approach, and contact — built to grow as the agency does.",
    features: ["Cinematic hero", "Bold typography", "Motion design", "Service architecture", "Fast frontend"],
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    status: "Internal Product",
  },
  {
    slug: "attract-engage-grow",
    name: "Attract · Engage · Grow",
    type: "Creative System",
    blurb: "The internal system that connects creative and performance across every Magnet Media engagement.",
    problem: "Ads, content, video, social, and strategy are easy to run separately but hard to keep connected by one thread.",
    idea: "One operating model — Attract attention, Engage the audience, Grow the business — applied to every brand.",
    product: "A repeatable framework that ties strategy, creative, media, and measurement together under one roof.",
    features: ["Attention-first creative", "Platform-native content", "Performance measurement", "Iterative testing"],
    tech: ["Creative strategy", "Paid media", "Content", "Analytics"],
    status: "Internal Product",
  },
];

export const faqs = [
  {
    q: "What is Magnet Media?",
    a: "Magnet Media is a creative and performance marketing agency that helps brands get noticed, build attention, and turn that attention into growth.",
  },
  {
    q: "What services does Magnet Media offer?",
    a: "Meta ads, content creation, video editing, creative strategy, social media, brand creative, and performance creative.",
  },
  {
    q: "Who do you work with?",
    a: "Ambitious businesses, startups, creators, e-commerce brands, personal brands, and established companies that want to grow in a crowded digital world.",
  },
  {
    q: "Do you manage ad campaigns?",
    a: "Yes. We plan, create, and manage high-performance campaigns across Facebook and Instagram — built around reaching the right audience and driving measurable results.",
  },
  {
    q: "Do you create content or just strategy?",
    a: "Both. We plan, create, edit, and publish — and we connect creative to performance so nothing exists in a silo.",
  },
  {
    q: "Can you work with my existing brand?",
    a: "Yes. We build around your brand's identity, audience, and objectives. No one-size-fits-all approach.",
  },
  {
    q: "How much does a project cost?",
    a: "Pricing depends on scope, platforms, content volume, and campaign size. Tell us what you need and we'll give you an honest answer.",
  },
  {
    q: "How do we get started?",
    a: "Start a project or contact us. We'll ask the right questions and figure out the best approach to make your brand magnetic.",
  },
];

export const processSteps = [
  { n: "01", step: "Attract", text: "Create something people notice. Attention is the first win." },
  { n: "02", step: "Engage", text: "Give them a reason to watch, connect, and remember." },
  { n: "03", step: "Grow", text: "Turn attention into customers, conversions, and long-term brand growth." },
];

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image?: string;
  url?: string;
};

export const team: TeamMember[] = [
  {
    name: "Chirag Shetty",
    role: "Founder",
    bio: "Founded Magnet Media to help brands get noticed and turn attention into growth.",
    image: "/founder.jpg",
    url: "https://chiragbp-doc.lovable.app",
  },
  {
    name: "Co-Founder",
    role: "Co-Founder",
    bio: "Leads strategy, builds campaigns, and keeps creative and performance connected.",
  },
  {
    name: "Creative Lead",
    role: "Creative Director",
    bio: "Shapes the visual and creative direction behind everything Magnet Media puts out.",
  },
];

export const footerServices = services.map((s) => ({ label: s.name, to: `/services/${s.slug}` }));

export const footerCompany = [
  { label: "About", to: "/about" },
  { label: "Our Story", to: "/about/story" },
  { label: "Mission", to: "/about/mission" },
  { label: "Team", to: "/about/team" },
  { label: "Approach", to: "/process" },
  { label: "Work", to: "/work" },
];

export const footerResources = [
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
  { label: "Sitemap", to: "/sitemap" },
];

export const footerLegal = [
  { label: "Privacy", to: "/privacy" },
  { label: "Terms", to: "/terms" },
  { label: "Cookies", to: "/cookies" },
  { label: "Accessibility", to: "/accessibility" },
];