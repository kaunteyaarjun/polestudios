import ServicePageTemplate from "../../components/ServicePageTemplate";

export const metadata = {
    title: "SaaS Development & AI Automation",
    description: "Pole Studios builds custom SaaS platforms, AI agents, and business automation systems for companies across India. From AI-powered workflows to full-stack software development — we engineer the tools that scale your business.",
    alternates: { canonical: 'https://polestudios.in/saas-automation' },
    openGraph: {
        title: "SaaS Development & AI Automation | Pole Studios India",
        description: "Custom SaaS development, AI agent integration, and business process automation. Pole Studios India.",
    },
};

const features = [
    {
        icon: "🤖",
        title: "AI Agent Development",
        description: "We build intelligent AI agents that automate complex workflows — from customer support bots to data processing pipelines. Using LLMs, RAG systems, and custom fine-tuned models tailored to your business needs."
    },
    {
        icon: "☁️",
        title: "Custom SaaS Platforms",
        description: "End-to-end SaaS product development — from MVP to scale. We architect multi-tenant platforms with robust authentication, billing integration, API design, and scalable cloud infrastructure."
    },
    {
        icon: "⚙️",
        title: "Process Automation",
        description: "We identify repetitive tasks in your business and automate them. Email workflows, data entry, report generation, CRM integrations — we build custom automation that saves hours every week."
    },
    {
        icon: "🔗",
        title: "API Development & Integration",
        description: "RESTful and GraphQL API design, third-party integrations, webhook systems, and microservices architecture. We connect your tools into a unified, automated ecosystem."
    },
    {
        icon: "📊",
        title: "Data Dashboards & Analytics",
        description: "Real-time analytics dashboards that turn raw data into actionable insights. Custom-built with modern visualisation libraries for clean, interactive data exploration."
    },
    {
        icon: "🔒",
        title: "Security & Compliance",
        description: "Enterprise-grade security practices — encryption at rest and in transit, role-based access control, audit logging, and compliance with Indian data protection standards."
    }
];

const process = [
    {
        title: "Requirements & Architecture",
        description: "We map your business processes, identify automation opportunities, and design the technical architecture. Every project starts with a clear specification document and system design."
    },
    {
        title: "MVP Development",
        description: "We build a functional minimum viable product rapidly — focusing on core features that deliver immediate value. This allows you to validate the product with real users before scaling."
    },
    {
        title: "Iteration & AI Training",
        description: "Based on user feedback and data, we iterate on features, fine-tune AI models, and optimise automation workflows for accuracy and efficiency."
    },
    {
        title: "Scale & Deploy",
        description: "We deploy on production infrastructure with monitoring, auto-scaling, CI/CD pipelines, and comprehensive documentation for your team."
    }
];

const faqs = [
    {
        question: "What is SaaS development?",
        answer: "SaaS (Software as a Service) development involves building cloud-based software applications that users access through the internet. Unlike traditional software, SaaS products are hosted centrally, updated automatically, and typically sold on a subscription basis. Pole Studios builds custom SaaS platforms from scratch for businesses across India."
    },
    {
        question: "Can Pole Studios build AI-powered tools for my business?",
        answer: "Yes. We specialise in building AI agents and intelligent automation tools. Whether you need a customer support chatbot, an AI-powered data analysis pipeline, or a custom LLM-based tool — we design, develop, and deploy AI solutions tailored to your specific business workflows."
    },
    {
        question: "How much does custom software development cost in India?",
        answer: "Custom software development costs depend on complexity, features, integrations, and timeline. At Pole Studios, we provide transparent pricing after a thorough requirements gathering phase. Contact us at +91 93373 46497 for a detailed project estimate."
    },
    {
        question: "Do you provide ongoing maintenance and support?",
        answer: "Yes. All our SaaS and automation projects include post-launch support. We offer maintenance packages that cover bug fixes, security updates, performance monitoring, feature additions, and scaling as your user base grows."
    },
    {
        question: "What technologies do you use for SaaS development?",
        answer: "We use a modern tech stack including Node.js, Python, Next.js, React, PostgreSQL, MongoDB, Redis, Docker, and cloud platforms like AWS and Vercel. For AI features, we work with OpenAI APIs, LangChain, custom fine-tuned models, and vector databases for RAG systems."
    }
];

export default function SaaSPage() {
    return (
        <ServicePageTemplate
            title="SaaS & Automation"
            subtitle="// AI AGENTS, CUSTOM SOFTWARE & PROCESS AUTOMATION"
            description="We engineer intelligent software that powers business growth. From custom SaaS platforms to AI-driven automation — Pole Studios builds the tools that give Indian businesses a competitive edge in the digital economy."
            features={features}
            process={process}
            faqs={faqs}
            ctaText="Build Your Product"
        />
    );
}
