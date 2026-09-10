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
    slug: "business-websites",
    name: "Business Websites",
    short: "Modern websites designed around business goals.",
    heroTitle: "A website should do more than exist.",
    heroText:
      "We build fast, responsive websites designed to help businesses communicate, capture leads, accept enquiries, and grow.",
    items: [
      "Marketing websites",
      "Service websites",
      "Lead-generation websites",
      "Booking websites",
      "Business portals",
      "CMS integration",
      "Forms",
      "SEO-ready architecture",
    ],
    next: "We build websites as part of a larger digital system — website → lead → database → automation → AI → business.",
    cta: "Start a Website Project",
  },
  {
    slug: "custom-software",
    name: "Custom Software",
    short: "Software built specifically around how a business operates.",
    heroTitle: "Software built around your business.",
    heroText:
      "Stop forcing your workflow into generic software. We build systems around the way you actually work.",
    items: [
      "Dashboards",
      "Admin systems",
      "CRM",
      "Customer portals",
      "Inventory",
      "Booking systems",
      "Internal tools",
      "APIs",
      "Databases",
    ],
    next: "Authentication, permissions, analytics, notifications, file management, and third-party integrations — designed around your operations.",
    cta: "Tell Us What You Want to Build",
  },
  {
    slug: "ai-solutions",
    name: "AI Solutions",
    short: "Integrate useful AI directly into products and workflows.",
    heroTitle: "Don't just add AI. Make your product intelligent.",
    heroText:
      "We integrate AI into software where it can eliminate repetitive work, improve decisions, assist users, and unlock new capabilities.",
    items: [
      "AI assistants",
      "AI agents",
      "AI search",
      "Document intelligence",
      "Image analysis",
      "Recommendations",
      "AI support",
      "Existing-product AI integration",
    ],
    next: "We identify where AI actually creates value and integrate it into the product accordingly — not just where it sounds better.",
    cta: "Build With AI",
  },
  {
    slug: "mvp-development",
    name: "MVP Development",
    short: "Turn an idea into something real enough to test.",
    heroTitle: "Have an idea? Build the first real version.",
    heroText:
      "Turn an early-stage idea into a functional product that can be tested, improved, and launched.",
    items: [
      "Product planning",
      "UX",
      "Architecture",
      "Development",
      "AI integration",
      "Testing",
      "Deployment",
      "Iteration",
    ],
    next: "Idea → Problem → Product Definition → UX → MVP → Testing → Launch → Improve.",
    cta: "Turn My Idea Into an MVP",
  },
  {
    slug: "business-automation",
    name: "Business Automation",
    short: "Make repetitive work happen automatically.",
    heroTitle: "Let software handle the repetitive work.",
    heroText:
      "We connect software, workflows, integrations, and AI to reduce manual operations.",
    items: [
      "Lead automation",
      "Notifications",
      "Follow-ups",
      "Workflow automation",
      "AI workflows",
      "Data processing",
      "Integrations",
      "Internal automation",
    ],
    next: "New Lead → Capture → Database → Notification → AI Processing → Follow-up — handled automatically.",
    cta: "Automate My Business",
  },
];

export type Solution = {
  slug: string;
  name: string;
  short: string;
  heroTitle: string;
  heroText: string;
  problems: string[];
  solutions: string[];
  cta: string;
};

export const solutions: Solution[] = [
  {
    slug: "businesses",
    name: "For Businesses",
    short: "Turn your business processes into software.",
    heroTitle: "Turn your business processes into software.",
    heroText:
      "We help established businesses remove manual work, stop losing leads, and operate more efficiently.",
    problems: [
      "Too much manual work",
      "Leads getting lost",
      "Multiple disconnected tools",
      "Manual customer follow-ups",
      "Poor online presence",
      "Repetitive administration",
    ],
    solutions: [
      "Business websites",
      "Custom software",
      "CRM",
      "Dashboards",
      "Automation",
      "AI assistants",
      "Booking systems",
    ],
    cta: "Improve My Business",
  },
  {
    slug: "startups",
    name: "For Startups",
    short: "From startup idea to working product.",
    heroTitle: "From startup idea to working product.",
    heroText:
      "We help early-stage founders move from concept to a functional product they can test and iterate on.",
    problems: [
      "An idea with no product",
      "Unclear technical path",
      "Need a fast first version",
      "Limited resources",
      "AI opportunities left unexplored",
    ],
    solutions: [
      "MVP development",
      "Product architecture",
      "UX",
      "Rapid prototyping",
      "AI integration",
      "Backend systems",
      "Deployment",
      "Iteration",
    ],
    cta: "Build My Startup Product",
  },
  {
    slug: "hvac",
    name: "HVAC Solutions",
    short: "Modern software for modern HVAC businesses.",
    heroTitle: "Modern software for modern HVAC businesses.",
    heroText:
      "A complete digital system for HVAC businesses — from a booking website to a business dashboard.",
    problems: [
      "Enquiries lost to phone tag",
      "No central customer records",
      "Manual scheduling and follow-ups",
      "No online booking",
      "No visibility into leads",
    ],
    solutions: [
      "HVAC business website",
      "Service pages",
      "Service areas",
      "Quote requests",
      "Booking",
      "Emergency contact",
      "Lead management",
      "Customer records",
      "Admin dashboard",
      "AI assistance",
      "Follow-ups",
    ],
    cta: "Build an HVAC Solution",
  },
  {
    slug: "ai-automation",
    name: "AI + Automation",
    short: "Combine AI with automation.",
    heroTitle: "Combine AI with automation.",
    heroText:
      "Automation handles the routine. AI decides what should happen. Together, they run entire workflows.",
    problems: [
      "Workflows still need human decisions",
      "Automation that can't adapt",
      "Data that needs understanding, not just processing",
      "Notifications without intelligence",
    ],
    solutions: [
      "Automation: if X happens → do Y",
      "AI: understand X → decide what should happen → assist with Y",
      "AI + Automation: understand → decide → execute → notify",
      "Intelligent workflows across your business",
    ],
    cta: "Build AI + Automation",
  },
];

export type AiTopic = {
  slug: string;
  name: string;
  short: string;
  heroTitle: string;
  heroText: string;
  steps: string[];
  cta: string;
};

export const aiTopics: AiTopic[] = [
  {
    slug: "agents",
    name: "AI Agents",
    short: "Software that can do more than respond.",
    heroTitle: "Software that can do more than respond.",
    heroText:
      "AI agents reason, use tools, call APIs, and carry out multi-step tasks — not just answer questions.",
    steps: [
      "Research agents",
      "Customer-support agents",
      "Data-processing agents",
      "Business-operation agents",
      "Internal assistants",
      "Task execution agents",
    ],
    cta: "Build an AI Agent",
  },
  {
    slug: "workflows",
    name: "AI Workflows",
    short: "Connect intelligence to your workflow.",
    heroTitle: "Connect intelligence to your workflow.",
    heroText:
      "AI and automation working together — understanding, deciding, executing, and notifying across your business processes.",
    steps: [
      "Lead arrives → AI understands lead",
      "Categorizes lead → stores information",
      "Notifies team → creates follow-up",
    ],
    cta: "Build an AI Workflow",
  },
  {
    slug: "integrations",
    name: "AI Integrations",
    short: "Make your existing software smarter.",
    heroTitle: "You don't always need to rebuild your software.",
    heroText:
      "Sometimes the right move is to make what you already have smarter — add intelligence to products that already work.",
    steps: [
      "Add AI search",
      "Add AI assistant",
      "Analyze documents",
      "Automate repetitive tasks",
      "Connect APIs",
      "Add intelligent recommendations",
    ],
    cta: "Add AI to My Product",
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
  status: "Internal Product" | "Experiment" | "Concept" | "Client";
};

export const projects: Project[] = [
  {
    slug: "outmaded-site",
    name: "OutMaded Website",
    type: "Website",
    blurb: "The brand site for OutMaded itself — designed, built, and shipped by the team.",
    problem: "A young startup needed an identity and a home that reflected a product company, not an agency.",
    idea: "A dark, cinematic site with a sticky hero that reveals the story as you scroll.",
    product: "A full multi-page site covering services, work, products, process, and AI capabilities.",
    features: ["Cinematic hero with scroll reveal", "Full page architecture", "Responsive design", "Fast frontend"],
    ai: "Planned: AI assistant on the site to guide visitors to the right services.",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    status: "Internal Product",
  },
  {
    slug: "hvac-automation",
    name: "HVAC Automation System",
    type: "Automation",
    blurb: "A lead-to-dashboard flow for an HVAC business: booking, quotes, follow-ups, and admin.",
    problem: "Enquiries got lost, scheduling was manual, and there was no single view of customers.",
    idea: "Route every customer touchpoint through one digital system.",
    product: "Website, online booking, quote requests, lead pipeline, and an admin dashboard.",
    features: ["Booking system", "Quote requests", "Lead management", "Customer records", "Admin dashboard"],
    ai: "AI-assisted follow-ups and lead qualification.",
    tech: ["TypeScript", "React", "Node", "PostgreSQL"],
    status: "Client",
  },
  {
    slug: "automated-agent",
    name: "Automated Agent Prototype",
    type: "AI",
    blurb: "An experiment into agents that can reason, use tools, and execute multi-step tasks.",
    problem: "We wanted to learn whether AI agents could move beyond chat into real execution.",
    idea: "Build a small agent with tool access that completes a real workflow end-to-end.",
    product: "A research and execution agent prototype with API tooling.",
    features: ["Tool-calling", "Multi-step reasoning", "API integrations", "Result logging"],
    ai: "Core of the prototype — reasoning and tool use.",
    tech: ["TypeScript", "AI APIs", "Node"],
    status: "Experiment",
  },
];

export type Product = {
  slug: string;
  name: string;
  short: string;
  description: string;
  problem: string;
  solution: string;
  features: string[];
  status: "Concept" | "Building" | "Beta" | "Live" | "Experimental" | "Archived";
  cta: string;
};

export const products: Product[] = [
  {
    slug: "outmaded-lab",
    name: "OutMaded Lab",
    short: "Internal suite for building, testing, and shipping everything OutMaded makes.",
    description: "A growing internal workspace where we plan, prototype, and test the products we build.",
    problem: "A fast-moving team needed a shared place to work on ideas.",
    solution: "A lightweight internal lab that keeps experiments, prototypes, and products organized.",
    features: ["Experiments log", "Prototypes", "Research notes", "Product status tracking"],
    status: "Building",
    cta: "Coming Soon",
  },
];

export const faqs = [
  {
    q: "What is OutMaded?",
    a: "OutMaded is a student-led software and innovation startup that turns ideas into real digital products using software and AI.",
  },
  {
    q: "What does OutMaded build?",
    a: "Websites, custom software, AI-powered products, MVPs, and business automation systems.",
  },
  {
    q: "Can you build an idea from scratch?",
    a: "Yes. The process can begin with an idea and progress toward a working MVP or complete product.",
  },
  {
    q: "Can you improve existing software?",
    a: "Yes, depending on the product and technical requirements.",
  },
  {
    q: "Can you add AI to existing software?",
    a: "Yes. We can add AI search, assistants, document intelligence, automation, and more to software you already have.",
  },
  {
    q: "Do you build AI agents?",
    a: "Yes, where agents are appropriate for the problem.",
  },
  {
    q: "Do you work with small businesses?",
    a: "Yes, when the project is a good fit.",
  },
  {
    q: "How much does a project cost?",
    a: "Pricing depends on scope, complexity, technology, and requirements.",
  },
];

export const processSteps = [
  { n: "01", step: "Understand", text: "Understand the idea and the actual problem." },
  { n: "02", step: "Define", text: "Determine what needs to be built." },
  { n: "03", step: "Plan", text: "Define features, architecture, UX, and technology." },
  { n: "04", step: "Build", text: "Develop the product." },
  { n: "05", step: "Integrate", text: "Add APIs, AI, automation, and third-party services where useful." },
  { n: "06", step: "Test", text: "Test functionality, usability, responsiveness, and reliability." },
  { n: "07", step: "Launch", text: "Deploy the product." },
  { n: "08", step: "Improve", text: "Use feedback to continue improving." },
];

export const techAreas = [
  {
    name: "Frontend",
    text: "Modern web and mobile interfaces — fast, responsive, and designed around the user.",
    examples: ["React", "TypeScript", "Vite", "Tailwind CSS"],
  },
  {
    name: "Backend",
    text: "APIs, databases, authentication, and business logic that keep products reliable.",
    examples: ["Node", "APIs", "Databases", "Auth"],
  },
  {
    name: "AI",
    text: "Models, AI APIs, agents, intelligent workflows, and AI interfaces.",
    examples: ["AI models", "AI APIs", "AI agents", "AI workflows"],
  },
  {
    name: "Automation",
    text: "Workflow systems, triggers, integrations, and background processes.",
    examples: ["Workflows", "Triggers", "Integrations", "Background jobs"],
  },
  {
    name: "Infrastructure",
    text: "Deployment, storage, monitoring, and scalability.",
    examples: ["Deployment", "Storage", "Monitoring", "Scaling"],
  },
];

export const team = [
  {
    name: "Founder",
    role: "Founder",
    bio: "Started OutMaded to turn ideas into real software while still studying.",
  },
  {
    name: "Co-Founder",
    role: "Co-Founder",
    bio: "Builds systems, ships features, and keeps the product moving.",
  },
  {
    name: "Engineer",
    role: "Software Engineer",
    bio: "Designs and builds the software behind OutMaded products.",
  },
];

export const footerServices = services.map((s) => ({ label: s.name, to: `/services/${s.slug}` }));
export const footerSolutions = solutions.map((s) => ({ label: s.name, to: `/solutions/${s.slug}` }));
export const footerAi = aiTopics.map((a) => ({ label: a.name, to: `/ai/${a.slug}` }));

export const footerCompany = [
  { label: "About", to: "/about" },
  { label: "Our Story", to: "/about/story" },
  { label: "Mission", to: "/about/mission" },
  { label: "Team", to: "/about/team" },
  { label: "Process", to: "/process" },
  { label: "Technology", to: "/technology" },
];

export const footerResources = [
  { label: "Work", to: "/work" },
  { label: "Products", to: "/products" },
  { label: "AI", to: "/ai" },
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