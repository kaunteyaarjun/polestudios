import ServicePageTemplate from "../../components/ServicePageTemplate";

export const metadata = {
    title: "SEO Services & Growth Marketing",
    description: "Pole Studios provides technical SEO, growth marketing, and search engine optimisation services for businesses across India. We help websites rank higher on Google with data-driven strategies, content optimisation, and performance tuning.",
    alternates: { canonical: 'https://polestudios.in/seo' },
    openGraph: {
        title: "SEO Services & Growth Marketing | Pole Studios India",
        description: "Technical SEO and growth marketing agency in India. Data-driven search engine optimisation for higher Google rankings.",
    },
};

const features = [
    {
        icon: "🔍",
        title: "Technical SEO Audit",
        description: "Comprehensive crawlability analysis, Core Web Vitals optimisation, structured data implementation, sitemap configuration, and server-side rendering checks. We fix the technical foundation that determines your ranking ceiling."
    },
    {
        icon: "📝",
        title: "Content Strategy & Optimisation",
        description: "Keyword research, content gap analysis, and on-page optimisation. We create SEO content strategies that align with search intent and drive qualified organic traffic to your website."
    },
    {
        icon: "📈",
        title: "Analytics & Reporting",
        description: "Custom dashboards tracking keyword rankings, organic traffic, conversion rates, and competitor movements. We provide actionable monthly reports that show clear ROI from SEO investment."
    },
    {
        icon: "🏗️",
        title: "Schema & Structured Data",
        description: "Implementation of JSON-LD structured data — Organization, FAQ, HowTo, Product, Article, and Local Business schemas — to earn rich snippets and featured positions in Google search results."
    },
    {
        icon: "🤖",
        title: "AEO & GEO Optimisation",
        description: "Answer Engine Optimisation for AI search tools (ChatGPT, Perplexity, Google AI Overviews) and Generative Engine Optimisation to ensure your brand appears in AI-generated answers and summaries."
    },
    {
        icon: "🌍",
        title: "Local SEO for India",
        description: "Google Business Profile optimisation, local citation building, geo-targeted content, and India-specific search strategies to help you dominate local search results in your target cities."
    }
];

const process = [
    {
        title: "SEO Audit & Benchmarking",
        description: "We crawl your entire website, analyse your current rankings, study competitor strategies, and identify every technical and content opportunity. This audit becomes your SEO roadmap."
    },
    {
        title: "Technical Fix Implementation",
        description: "We fix crawlability issues, optimise page speed, implement structured data, configure sitemaps, and resolve all technical SEO blockers that prevent Google from properly indexing your site."
    },
    {
        title: "Content Optimisation",
        description: "We optimise existing pages for target keywords, create new content to fill gaps, and implement internal linking strategies that distribute authority across your most important pages."
    },
    {
        title: "Monitoring & Iteration",
        description: "SEO is ongoing. We monitor rankings weekly, track algorithm updates, adjust strategies based on performance data, and continuously optimise to maintain and improve your positions."
    }
];

const faqs = [
    {
        question: "How long does SEO take to show results?",
        answer: "SEO typically takes 3–6 months to show significant results, depending on your industry's competitiveness, your website's current authority, and the keywords you're targeting. Technical SEO fixes often show improvements within weeks, while content-driven ranking improvements build over months. Pole Studios provides transparent monthly reporting so you can track progress."
    },
    {
        question: "What is the difference between SEO and SEM?",
        answer: "SEO (Search Engine Optimisation) focuses on earning organic (unpaid) search rankings through technical optimisation, content, and authority building. SEM (Search Engine Marketing) includes paid advertising like Google Ads. At Pole Studios, we focus on SEO — building sustainable organic traffic that doesn't stop when you stop paying."
    },
    {
        question: "What is AEO (Answer Engine Optimisation)?",
        answer: "AEO is the practice of optimising your content to appear in AI-powered answer engines like ChatGPT, Google AI Overviews, and Perplexity. This involves creating clear, factual, well-structured content with FAQ schemas, direct answer formats, and authoritative citations that AI systems prefer to reference."
    },
    {
        question: "Do you offer SEO services for all of India?",
        answer: "Yes. Pole Studios provides SEO services to businesses across India — Delhi, Mumbai, Bangalore, Hyderabad, Chennai, Pune, Kolkata, Ahmedabad, Jaipur, and all other cities. We work remotely and deliver results regardless of your physical location."
    },
    {
        question: "How much do SEO services cost in India?",
        answer: "SEO service costs at Pole Studios depend on the scope — number of pages, target keywords, competition level, and whether you need content creation. We offer competitive monthly retainers tailored for Indian businesses. Contact us at +91 93373 46497 for a custom SEO proposal."
    }
];

export default function SEOPage() {
    return (
        <ServicePageTemplate
            title="SEO & Growth"
            subtitle="// SEARCH ENGINE OPTIMISATION & AI ANSWER ENGINES"
            description="Data-driven SEO and growth marketing strategies that help your website rank higher on Google and appear in AI-powered search results. We combine technical SEO, content optimisation, and Answer Engine Optimisation (AEO) to drive sustainable organic growth for businesses across India."
            features={features}
            process={process}
            faqs={faqs}
            ctaText="Grow Your Traffic"
        />
    );
}
