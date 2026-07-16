import {
  Building2,
  Briefcase,
  Factory,
  HeartPulse,
  Leaf,
  ShoppingCart,
  TrendingUp,
  UtensilsCrossed,
  Wallet,
} from "lucide-react";
import { CodeXml, NotebookPen, Rocket } from "lucide-react";
import logo from "../assets/logo/monkAi-logo.jpeg";

export { logo };

// company
export const companyDetails = {
  name: "Monk11 AI Solutions",
  shortName: "Monk11 AI",
  website: "https://monk11.ai",
  domain: "monk11.ai",
  address: "India",
  phone: "919004537313",
  email: "support@monk11.ai",
  whatsappMessage:
    "Hi Monk11 AI, I'd like to discuss AI automation for my business.",
};

export const getWhatsAppLink = () =>
  `https://wa.me/${companyDetails.phone}?text=${encodeURIComponent(
    companyDetails.whatsappMessage
  )}`;

// working process
export const workingProcess = [
  {
    step: 1,
    title: "Discovery & Strategy",
    description:
      "We map your workflows, pain points, and growth goals. Together we define a clear automation and product roadmap aligned to measurable business outcomes.",
    icon: NotebookPen,
  },
  {
    step: 2,
    title: "Design & Build",
    description:
      "Our team designs intuitive experiences and engineers reliable web, mobile, and AI automation systems using modern, scalable technologies.",
    icon: CodeXml,
  },
  {
    step: 3,
    title: "Launch & Optimize",
    description:
      "We rigorously test, deploy, and monitor every solution—then continuously refine performance so your operations stay efficient as you scale.",
    icon: Rocket,
  },
];

// target industries for AI automation
export const industries = [
  {
    icon: Building2,
    title: "Real Estate",
    desc: "Lead qualification, listing ops, and client follow-ups—automated.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    desc: "Appointment workflows, patient outreach, and admin automation.",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    desc: "Supply-chain alerts, reporting, and production process automation.",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurant Management",
    desc: "Orders, inventory sync, and customer engagement on autopilot.",
  },
  {
    icon: Leaf,
    title: "Renewable Energy",
    desc: "Asset monitoring, compliance reporting, and ops intelligence.",
  },
  {
    icon: Wallet,
    title: "FinTech",
    desc: "KYC flows, risk alerts, and customer support automation.",
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce",
    desc: "Order flows, inventory sync, cart recovery, and customer follow-ups.",
  },
  {
    icon: TrendingUp,
    title: "CRM & Sales",
    desc: "Lead scoring, pipeline updates, outreach sequences, and deal automation.",
  },
  {
    icon: Briefcase,
    title: "Enterprise & Other Sectors",
    desc: "Custom automation for operations, sales, and support at scale.",
  },
];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "E-commerce Websites",
    image: require("../assets/images/landingpage/ecommerce.webp"),
    description:
      "Conversion-focused storefronts with secure payments, inventory sync, and analytics built for growth.",
  },
  {
    id: 2,
    title: "Business Portals",
    image: require("../assets/images/landingpage/socialmedia.webp"),
    description:
      "Secure client and partner portals that streamline collaboration, data access, and workflows.",
  },
  {
    id: 3,
    title: "Landing Pages",
    image: require("../assets/images/landingpage/landing.webp"),
    description:
      "High-converting campaign pages designed to capture attention and turn visitors into qualified leads.",
  },
  {
    id: 4,
    title: "Custom Web Applications",
    image: require("../assets/images/landingpage/customweb.webp"),
    description:
      "Tailored web platforms engineered around your unique processes, integrations, and scale requirements.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    image: require("../assets/images/landingpage/ios.webp"),
    description:
      "Native iOS apps built with Swift for performance, polish, and App Store excellence.",
  },
  {
    id: 2,
    title: "Android App Development",
    image: require("../assets/images/landingpage/android.webp"),
    description:
      "Robust Android applications engineered in Kotlin/Java for reliability across devices.",
  },
  {
    id: 3,
    title: "Flutter App Development",
    image: require("../assets/images/landingpage/flutter.webp"),
    description:
      "Cross-platform Flutter apps that deliver a native feel from a single, maintainable codebase.",
  },
  {
    id: 4,
    title: "Hybrid App Development",
    image: require("../assets/images/landingpage/hybrid.webp"),
    description:
      "Feature-rich hybrid apps that work seamlessly across iOS and Android with shared logic.",
  },
];

// blog articles
export const blogs = [
  {
    id: 1,
    image: require("../assets/images/blogs/1.png"),
    title: "How AI Automation Cuts Operating Costs Without Cutting Quality",
    excerpt:
      "Discover practical automation plays that free your team from repetitive work while improving accuracy and customer response times.",
    category: "AI Automation",
  },
  {
    id: 2,
    image: require("../assets/images/blogs/2.png"),
    title: "Building Industry-Ready AI Workflows for Real Estate & Healthcare",
    excerpt:
      "From lead nurturing to appointment scheduling—see how sector-specific AI agents create measurable ROI in weeks, not months.",
    category: "Industries",
  },
  {
    id: 3,
    image: require("../assets/images/blogs/3.png"),
    title: "Web & Mobile Products That Scale with Your Automation Stack",
    excerpt:
      "Why modern SaaS and mobile platforms should be designed as part of an intelligent operations ecosystem—not as isolated tools.",
    category: "Product Engineering",
  },
];

// portfolio images (web development)
export const webPortfolio = [
  {
    id: 1,
    img: require("../assets/images/web_projects/1.webp"),
    title: "FE-Finance",
  },
  {
    id: 2,
    img: require("../assets/images/web_projects/2.webp"),
    title: "Ocxee",
  },
  {
    id: 3,
    img: require("../assets/images/web_projects/3.webp"),
    title: "Leaderbridge",
  },
  {
    id: 4,
    img: require("../assets/images/web_projects/4.webp"),
    title: "Gigzio",
  },
  {
    id: 5,
    img: require("../assets/images/web_projects/5.webp"),
    title: "FE Group",
  },
  {
    id: 6,
    img: require("../assets/images/web_projects/6.webp"),
    title: "V Talkz",
  },
];

// portfolio images (app development)
export const appPortfolio = [
  {
    id: 1,
    img: require("../assets/images/app_projects/1.webp"),
    title: "PartEx",
  },
  {
    id: 2,
    img: require("../assets/images/app_projects/2.webp"),
    title: "Find A Driver",
  },
  {
    id: 3,
    img: require("../assets/images/app_projects/3.webp"),
    title: "Artisan Express",
  },
  {
    id: 4,
    img: require("../assets/images/app_projects/4.webp"),
    title: "House of Deliverance",
  },
];
