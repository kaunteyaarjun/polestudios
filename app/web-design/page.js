import ServicePageTemplate from "../../components/ServicePageTemplate";

export const metadata = {
    title: "Web Design & Website Development Services",
    description: "Pole Studios offers premium web design and website development services across India. We build the best parallax websites, interactive web experiences, and high-performance sites using Next.js, React, and WebGL. Serving Delhi, Mumbai, Bangalore, and all of India.",
    alternates: { canonical: 'https://polestudios.in/web-design' },
    openGraph: {
        title: "Web Design & Website Development | Pole Studios India",
        description: "Premium website development and web design agency in India. Creators of the best parallax websites using Next.js, React, Three.js, and GSAP.",
    },
};

const features = [
    {
        icon: "🌐",
        title: "Custom Website Development",
        description: "We build bespoke websites from scratch using Next.js, React, and modern frameworks. Every website is hand-coded for maximum performance, SEO, and conversion — no WordPress templates, no shortcuts."
    },
    {
        icon: "✨",
        title: "Parallax & Interactive Design",
        description: "We create the best parallax websites in India using GSAP, Framer Motion, and WebGL. Immersive scrolling experiences, particle systems, and cinematic animations that make your brand unforgettable."
    },
    {
        icon: "📱",
        title: "Responsive & Mobile-First",
        description: "Every website we design works flawlessly across all devices — desktop, tablet, and mobile. We follow mobile-first principles to ensure fast load times and intuitive navigation on every screen size."
    },
    {
        icon: "⚡",
        title: "Performance Optimisation",
        description: "Our websites score 90+ on Google Lighthouse. We optimise Core Web Vitals, implement lazy loading, code splitting, and CDN delivery to ensure your site loads in under 2 seconds."
    },
    {
        icon: "🔍",
        title: "SEO-First Architecture",
        description: "Every website is built with SEO embedded in its DNA — semantic HTML, structured data, optimised meta tags, fast load times, and crawlable architecture to help you rank higher on Google."
    },
    {
        icon: "🎨",
        title: "WebGL & 3D Experiences",
        description: "We push the boundaries of web design with Three.js and WebGL-powered 3D experiences. From animated backgrounds to full interactive 3D product showcases — we make the web feel alive."
    }
];

const process = [
    {
        title: "Discovery & Strategy",
        description: "We begin every web design project with deep research into your brand, target audience, competitors, and business objectives. This phase shapes the entire website architecture and design direction."
    },
    {
        title: "Wireframing & UI/UX Design",
        description: "We create detailed wireframes and high-fidelity mockups before writing a single line of code. Every interaction, every scroll, every hover state is meticulously planned for maximum engagement."
    },
    {
        title: "Development & Animation",
        description: "Our developers bring the designs to life using Next.js, React, GSAP, and Framer Motion. We build custom parallax effects, smooth transitions, and interactive elements that set your website apart."
    },
    {
        title: "Testing & Optimisation",
        description: "We test across all browsers, devices, and screen sizes. Performance audits, SEO checks, accessibility compliance, and Core Web Vitals optimisation ensure your website launches perfectly."
    },
    {
        title: "Launch & Growth",
        description: "We deploy your website on high-performance infrastructure, set up analytics tracking, submit sitemaps to search engines, and provide ongoing support to ensure continued growth."
    }
];

const faqs = [
    {
        question: "How much does web design cost in India?",
        answer: "Website design costs at Pole Studios vary based on project scope, complexity, and features required. A standard business website starts at competitive rates, while complex parallax websites and WebGL experiences are priced based on the custom work involved. Contact us at +91 93373 46497 for a tailored quote."
    },
    {
        question: "What is a parallax website and why should I get one?",
        answer: "A parallax website uses multi-layered scrolling effects where background and foreground elements move at different speeds, creating an immersive 3D-like experience. Parallax websites have significantly higher engagement rates, longer time-on-site, and better conversion rates compared to static websites. Pole Studios specialises in building the best parallax websites in India."
    },
    {
        question: "How long does website development take?",
        answer: "A typical website development project at Pole Studios takes 3–6 weeks from discovery to launch, depending on complexity. Simple business websites can be delivered in 2–3 weeks, while complex parallax websites with custom animations may take 6–8 weeks. We provide clear timelines during our initial consultation."
    },
    {
        question: "Do you build websites using WordPress?",
        answer: "No. Pole Studios exclusively uses modern frameworks like Next.js and React for website development. This gives us full control over performance, SEO, animations, and user experience — something WordPress templates simply cannot achieve. Our websites are faster, more secure, and significantly more customisable."
    },
    {
        question: "Can you redesign my existing website?",
        answer: "Absolutely. We frequently redesign existing websites for businesses across India. We audit your current site's performance, SEO, and user experience, then rebuild it from the ground up using modern technologies to dramatically improve speed, design quality, and search engine rankings."
    },
    {
        question: "Do you provide SEO with website development?",
        answer: "Yes. Every website we build includes foundational SEO — semantic HTML structure, meta tags, structured data (JSON-LD), sitemap generation, robots.txt configuration, image optimisation, and Core Web Vitals optimisation. For ongoing SEO campaigns, we offer dedicated SEO & Growth services."
    }
];

export default function WebDesignPage() {
    return (
        <ServicePageTemplate
            title="Web Design"
            subtitle="// WEBSITE DEVELOPMENT & CREATIVE DESIGN"
            description="We are a premium web design and website development agency in India. From stunning parallax websites to high-performance business sites — we craft digital experiences that convert visitors into customers. Every website is custom-built using Next.js, React, and cutting-edge animation technologies."
            features={features}
            process={process}
            faqs={faqs}
            ctaText="Start Your Website"
        />
    );
}
