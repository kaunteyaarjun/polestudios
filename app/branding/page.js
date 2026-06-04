import ServicePageTemplate from "../../components/ServicePageTemplate";

export const metadata = {
    title: "Branding & UI/UX Design Agency",
    description: "Pole Studios is a branding and UI/UX design agency in India. We create visual identities, brand strategies, and user experience designs that make your brand stand out. Serving businesses across Delhi, Mumbai, Bangalore, and all of India.",
    alternates: { canonical: 'https://polestudios.in/branding' },
    openGraph: {
        title: "Branding & UI/UX Design Agency | Pole Studios India",
        description: "Premium branding, visual identity, and UI/UX design agency in India. We build brands that command attention.",
    },
};

const features = [
    {
        icon: "🎯",
        title: "Brand Strategy",
        description: "We define your brand's positioning, voice, and personality through deep market research and competitive analysis. Every strategic decision is backed by data and aligned with your business goals."
    },
    {
        icon: "✏️",
        title: "Visual Identity Design",
        description: "Logo design, colour systems, typography selection, and complete brand guidelines. We create cohesive visual languages that work across digital and print — making your brand instantly recognisable."
    },
    {
        icon: "🖥️",
        title: "UI/UX Design",
        description: "User interface and user experience design that converts. We design intuitive interfaces using research-driven methodologies — wireframes, prototypes, user flows, and high-fidelity mockups."
    },
    {
        icon: "📐",
        title: "Design Systems",
        description: "Scalable design systems with reusable components, tokens, and documentation. Built for teams that need consistency across products while maintaining speed of development."
    },
    {
        icon: "🎬",
        title: "Motion & Animation Design",
        description: "We bring brands to life through micro-animations, loading sequences, scroll-triggered effects, and interactive motion graphics that enhance the user experience and reinforce brand personality."
    },
    {
        icon: "📊",
        title: "Brand Audit & Refresh",
        description: "Already have a brand but it feels dated? We conduct comprehensive brand audits and deliver modern refreshes that maintain your equity while updating your visual presence for today's market."
    }
];

const process = [
    {
        title: "Brand Discovery Workshop",
        description: "We immerse ourselves in your business — understanding your mission, values, audience, competitors, and aspirations. This 360° view forms the foundation of every design decision."
    },
    {
        title: "Research & Competitive Analysis",
        description: "We map the competitive landscape, identify visual trends in your industry, and find the white space where your brand can own a unique position."
    },
    {
        title: "Concept Development",
        description: "We explore multiple creative directions, presenting mood boards, colour palettes, and initial concepts that capture different facets of your brand personality."
    },
    {
        title: "Design Refinement",
        description: "Based on your feedback, we refine the chosen direction into pixel-perfect final designs — logos, typography systems, UI components, and comprehensive brand guidelines."
    },
    {
        title: "Handoff & Implementation",
        description: "We deliver production-ready assets, brand guidelines documentation, and design system files. We can also implement the designs directly into your website through our web development services."
    }
];

const faqs = [
    {
        question: "What does a branding agency do?",
        answer: "A branding agency like Pole Studios helps businesses create and refine their brand identity. This includes logo design, colour palette selection, typography systems, brand voice definition, UI/UX design, and comprehensive brand guidelines. We help businesses in India build memorable brands that stand out in competitive markets."
    },
    {
        question: "How much does branding cost in India?",
        answer: "Branding costs at Pole Studios depend on the scope — a basic visual identity package is priced competitively for Indian startups, while comprehensive brand strategy with UI/UX design is tailored to larger budgets. Contact us at +91 93373 46497 for a custom quote."
    },
    {
        question: "Do you design logos?",
        answer: "Yes, logo design is a core part of our branding service. But we go beyond just a logo — we create complete visual identity systems including logo variations, colour systems, typography, iconography, and usage guidelines that ensure brand consistency across all touchpoints."
    },
    {
        question: "What is the difference between UI and UX design?",
        answer: "UI (User Interface) design focuses on the visual elements — layouts, colours, typography, buttons, and visual hierarchy. UX (User Experience) design focuses on the overall feel — user flows, information architecture, usability, and ensuring the product is intuitive to use. At Pole Studios, we deliver both as an integrated service."
    },
    {
        question: "Can you rebrand an existing company?",
        answer: "Absolutely. We frequently handle rebranding projects for businesses across India. We conduct a thorough brand audit, identify what's working and what needs to change, and deliver a refreshed brand identity that feels modern while preserving your existing brand equity and customer recognition."
    }
];

export default function BrandingPage() {
    return (
        <ServicePageTemplate
            title="Branding"
            subtitle="// IDENTITY, UI/UX & BRAND STRATEGY"
            description="We build brands that command attention. From visual identity systems to immersive UI/UX design, we craft the visual language of your business. Every brand we create is strategically designed to resonate with your audience and differentiate you in the Indian market."
            features={features}
            process={process}
            faqs={faqs}
            ctaText="Build Your Brand"
        />
    );
}
