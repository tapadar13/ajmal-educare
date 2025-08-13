// import { ComplianceOSCard } from "@/app/_components/businessos-stack/complianceos-card";
// import { MarketingOSCard } from "@/app/_components/businessos-stack/marketingos-card";
// import { ResearchOSCard } from "@/app/_components/businessos-stack/researchos-card";
// import { SalesOSCard } from "@/app/_components/businessos-stack/salesos-card";
// import { Mail } from "lucide-react";
// import { FaGithub, FaLinkedinIn } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";

// export const NAV_BAR_ITEMS = [
//   {
//     id: "mission-statement",
//     label: "Mission",
//     href: "#mission-statement",
//   },
//   {
//     id: "what-we-do",
//     label: "What We Do",
//     href: "#what-we-do",
//   },
//   {
//     id: "business-os-stack",
//     label: "Our Stack",
//     href: "#business-os-stack",
//   },
//   {
//     id: "latest-thinking",
//     label: "Latest Thinking",
//     href: "#latest-thinking",
//   },
//   {
//     id: "team",
//     label: "Team",
//     href: "#team",
//   },
//   {
//     id: "contact",
//     label: "Contact",
//     href: "#contact",
//   },
// ];

// export const MISSION_STATEMENT =
//   "Our mission is to accelerate business growth through custom AI agents tailored for specific use cases. We transform abstract business problems into end-to-end solutions, with enterprise-grade security and privacy at their core.";

// export const WHAT_WE_DO_SECTIONS = [
//   {
//     number: "1",
//     title: "AI Strategy",
//     tagLine: "Strategic guidance for your AI transformation journey",
//     description:
//       "Generative AI can feel overwhelming without the right guidance. We analyze your operations, identify high-impact opportunities, and create a clear roadmap that aligns AI capabilities with your business goals - all while considering your budget and existing processes.",
//     icon: "/images/what-we-do/ai-consultation.svg",
//     endAngle: 90,
//   },
//   {
//     number: "2",
//     title: "Model Finetuning",
//     tagLine: "Custom-tuned AI models that align with your goals",
//     description:
//       "Off-the-shelf models rarely meet all your needs. Our experts handle everything from data curation to finetuning with specialized techniques like synthetic data generation and hyperparameter tuning. The result is custom AI solutions optimized for your unique challenges.",
//     icon: "/images/what-we-do/model-selection-and-finetuning.svg",
//     endAngle: 180,
//   },
//   {
//     number: "3",
//     title: "AI Integration",
//     tagLine: "Seamless AI implementation into your existing stack",
//     description:
//       "Organizations often lack the bandwidth and expertise to integrate AI solutions with their existing systems. We bridge this gap by handling the end-to-end integration process, from building proof-of-concepts to production deployment, while ensuring compliance with your security and regulatory requirements.",
//     icon: "/images/what-we-do/product-integration.svg",
//     endAngle: 270,
//   },
//   {
//     number: "4",
//     title: "Generative AI Ops",
//     tagLine: "End-to-end deployment and maintenance at scale",
//     description:
//       "Maintaining AI systems requires continuous monitoring and updates to keep up with rapid technological changes. We provide ongoing operational support, performance optimization, and system updates - effectively future-proofing your AI investments while you focus on growing your business.",
//     icon: "/images/what-we-do/generative-ai-ops.svg",
//     endAngle: 360,
//   },
// ];

// export const OUR_BUSINESS_OS_ACCORDION_DATA = [
//   {
//     title: "SalesOS",
//     description:
//       "Unlock the hidden value in your unstructured sales data. We analyze communications across all channels - calls, meetings, emails, and chats - to surface meaningful patterns and opportunities. Our solutions seamlessly integrate with your existing tools, including CRM systems, email services, and internal platforms.",
//     capabilities: [
//       "AI-powered conversation analysis",
//       "Revenue Intelligence",
//       "Personalized training recommendations",
//       "Intelligent CRM enrichment",
//     ],
//     card: SalesOSCard,
//   },
//   {
//     title: "ResearchOS",
//     description:
//       "Transform your research workflow with AI-powered automation. Our solutions intelligently process and analyze content across internet-wide data sources, your private databases, unstructured documents and external APIs. We synthesize this vast information into clear, actionable insights tailored to your needs.",
//     capabilities: [
//       "Automated document understanding and synthesis",
//       "Contextual information extraction",
//       "Custom knowledge base development",
//       "Answer engine on the knowledge base",
//     ],
//     card: ResearchOSCard,
//   },
//   {
//     title: "ComplianceOS",
//     description:
//       "Ensure consistency and compliance across all content with AI-driven oversight. Our solution understands your unique brand guidelines, quality standards, style requirements, and compliance frameworks. We build specialized AI agents that automatically verify and validate content against these parameters, streamlining your quality control process.",
//     capabilities: [
//       "AI-powered compliance verification",
//       "Intelligent style guide enforcement",
//       "Automated quality assessment",
//       "Context-aware content validation",
//       "Brand consistency monitoring",
//     ],
//     card: ComplianceOSCard,
//   },
//   {
//     title: "MarketingOS",
//     description:
//       "Optimize your content for the new generation of AI-powered search engines. We help you understand and adapt to how platforms like SearchGPT, Copilot, and Perplexity process and rank content.",
//     capabilities: [
//       "AI search engine optimization",
//       "Large Language Model (LLM) content alignment",
//       "AI-driven content structure analysis",
//     ],
//     card: MarketingOSCard,
//   },
// ];

// export const AI_AGENT_LOGOS = [
//   {
//     logo: "meta",
//     animationSequence: 6,
//   },
//   {
//     logo: "mistral",
//     animationSequence: 5,
//   },
//   {
//     logo: "chatgpt",
//     animationSequence: 2,
//   },
//   {
//     logo: "grok",
//     animationSequence: 4,
//   },
//   {
//     logo: "claude",
//     animationSequence: 1,
//   },
//   {
//     logo: "gemini",
//     animationSequence: 3,
//   },
// ];

// export const LATEST_THINKING_DESCRIPTION =
//   "Stay ahead of the AI curve with our insights on industry trends, technical breakthroughs, and real-world implementation stories.";

// export const LATEST_THINKING_CARDS = [
//   {
//     title: "Heading",
//     slug: "heading",
//     description:
//       "Lorem ipsum dolor sit amet consectetur. Ac etiam. Lorem ipsum dolor sit amet consectetur. Ac etiam. Lorem ipsum dolor sit amet consectetur. Ac etiam.",
//     image: "/images/latest-thinking/latest-thinking.svg",
//     categories: ["AI", "Research", "Generative AI"],
//     readTime: 5,
//   },
//   {
//     title: "Heading",
//     slug: "heading",
//     description:
//       "Lorem ipsum dolor sit amet consectetur. Ac etiam. Lorem ipsum dolor sit amet consectetur. Ac etiam. Lorem ipsum dolor sit amet consectetur. Ac etiam.",
//     image: "/images/latest-thinking/latest-thinking.svg",
//     categories: ["AI", "Research", "Generative AI"],
//     readTime: 10,
//   },
//   {
//     title: "Heading",
//     slug: "heading",
//     description:
//       "Lorem ipsum dolor sit amet consectetur. Ac etiam. Lorem ipsum dolor sit amet consectetur. Ac etiam. Lorem ipsum dolor sit amet consectetur. Ac etiam.",
//     image: "/images/latest-thinking/latest-thinking.svg",
//     categories: ["AI", "Research", "Generative AI"],
//     readTime: 15,
//   },
// ];

// export const TEAM_MEMBERS = [
//   {
//     name: "Reddy",
//     role: "The Bank",
//     image: "reddy.jpeg",
//     links: [
//       {
//         label: "LinkedIn",
//         href: "reddyob",
//       },
//     ],
//   },
//   {
//     name: "Sai",
//     role: "Chief",
//     image: "sai.jpeg",
//     links: [
//       {
//         label: "LinkedIn",
//         href: "sai-teja-kancherla-73050176",
//       },
//     ],
//   },
//   {
//     name: "Shib",
//     role: "SWE",
//     image: "shibam.png",
//     links: [
//       {
//         label: "LinkedIn",
//         href: "s4shibam",
//       },
//     ],
//   },
//   {
//     name: "Jyothi",
//     role: "SWE",
//     image: "jk.png",
//     links: [
//       {
//         label: "LinkedIn",
//         href: "jyothikumard",
//       },
//     ],
//   },

//   {
//     name: "Tapadar",
//     role: "SWE",
//     image: "tapadar.jpg",
//     links: [
//       {
//         label: "LinkedIn",
//         href: "tapadar-monsur",
//       },
//     ],
//   },
//   {
//     name: "Aritra",
//     role: "SWE",
//     image: "aritra.jpg",
//     links: [
//       {
//         label: "LinkedIn",
//         href: "aritra69",
//       },
//     ],
//   },
//   {
//     name: "Deepthi",
//     role: "Jr. SWE",
//     image: "deepthi.jpeg",
//     links: [
//       {
//         label: "LinkedIn",
//         href: "r-deepthi-5a63bb337",
//       },
//     ],
//   },
//   {
//     name: "Harshal",
//     role: "Jr. SWE",
//     image: "harshal.jpeg",
//     links: [
//       {
//         label: "LinkedIn",
//         href: "harshal-ram-r-v-05a1a81b5",
//       },
//     ],
//   },
//   {
//     name: "Abhishek",
//     role: ":any",
//     image: "abhishek.jpg",
//     links: [
//       {
//         label: "LinkedIn",
//         href: "abhishek-naula-9829371b3",
//       },
//     ],
//   },
// ];

// export const SOCIAL_MEDIA_LINKS = [
//   {
//     icon: FaGithub,
//     href: "https://github.com/ProdGainAI",
//   },
//   {
//     icon: FaXTwitter,
//     href: "https://x.com/prodgainAI",
//   },
//   {
//     icon: FaLinkedinIn,
//     href: "https://www.linkedin.com/company/prodgain",
//   },
// ];

// export const RESOURCES_LINKS = [
//   {
//     label: "Articles",
//     href: "/latest-thinking",
//   },
//   {
//     label: "Privacy",
//     href: "/privacy-policy",
//   },
// ];

// export const MARKETING_OS_CARDS = [
//   {
//     title: "LLM",
//     image: "llm",
//     finalPosition: {
//       mobile: { x: -150, y: -150 },
//       desktop: { x: -180, y: -150 },
//     },
//   },
//   {
//     title: "AI SEO",
//     image: "gear",
//     finalPosition: {
//       mobile: { x: 0, y: 0 },
//       desktop: { x: 0, y: 0 },
//     },
//   },
//   {
//     title: "Content",
//     image: "lines",
//     finalPosition: {
//       mobile: { x: 150, y: 150 },
//       desktop: { x: 180, y: 150 },
//     },
//   },
// ];

// export const COMPLIANCE_OS_CARDS = [
//   {
//     title: "AI check",
//     image: "ai-check",
//     finalPosition: { x: -180, y: -150 },
//   },
//   {
//     title: "Style rules",
//     image: "style-rules",
//     finalPosition: { x: 180, y: 150 },
//   },
//   {
//     title: "Quality check",
//     image: "quality-check",
//     finalPosition: { x: 0, y: 0 },
//   },
//   {
//     title: "Smart validation",
//     image: "smart-validation",
//     finalPosition: { x: 180, y: -150 },
//   },
//   {
//     title: "Brand check",
//     image: "brand-check",
//     finalPosition: { x: -180, y: 150 },
//   },
// ];

// export const SHARE_LINKS = [
//   {
//     name: "Email",
//     icon: Mail,
//     href: `mailto:?body=`,
//   },
//   {
//     name: "Twitter",
//     icon: FaXTwitter,
//     href: `https://twitter.com/intent/tweet?url=`,
//   },
//   {
//     name: "LinkedIn",
//     icon: FaLinkedinIn,
//     href: `https://www.linkedin.com/sharing/share-offsite/?url=`,
//   },
// ];
