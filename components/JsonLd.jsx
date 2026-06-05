export default function JsonLd() {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": "https://polestudios.in/#organization",
        "name": "Pole Studios",
        "alternateName": ["Pole", "Pole Systems", "POLE", "Pole Studios India"],
        "url": "https://polestudios.in",
        "logo": {
            "@type": "ImageObject",
            "url": "https://polestudios.in/polelogo.png",
            "width": 800,
            "height": 600
        },
        "image": "https://polestudios.in/polelogo.png",
        "description": "Pole Studios is a premium website design agency in India specialising in web design, website development, and the best parallax websites. We craft high-performance digital experiences for B2B and SaaS brands.",
        "foundingDate": "2024",
        "founder": {
            "@type": "Person",
            "name": "Somya"
        },
        "telephone": "+919337346497",
        "email": "teams@polestudios.in",
        "areaServed": {
            "@type": "Country",
            "name": "India"
        },
        "sameAs": [
            "https://instagram.com/thepolestudios",
            "https://linkedin.com/company/thepolestudios"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+919337346497",
            "contactType": "sales",
            "email": "teams@polestudios.in",
            "areaServed": "IN",
            "availableLanguage": ["English", "Hindi"]
        },
        "knowsAbout": [
            "Website Development",
            "Web Design",
            "Parallax Websites",
            "Website Design Agency",
            "UI/UX Design",
            "Brand Strategy",
            "SaaS Development",
            "SEO",
            "Next.js",
            "React",
            "WebGL",
            "Three.js",
            "Framer Motion",
            "GSAP Animations"
        ]
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": "https://polestudios.in/#website",
        "url": "https://polestudios.in",
        "name": "Pole Studios",
        "description": "Premium website design agency in India — web design, website development, and the best parallax websites.",
        "publisher": {
            "@id": "https://polestudios.in/#organization"
        },
        "inLanguage": "en-IN"
    };

    const professionalServiceSchema = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "@id": "https://polestudios.in/#service",
        "name": "Pole Studios — Website Design Agency",
        "image": "https://polestudios.in/polelogo.png",
        "url": "https://polestudios.in",
        "telephone": "+919337346497",
        "email": "teams@polestudios.in",
        "description": "Pole Studios is a website design agency in India offering web design, website development, parallax websites, branding, SaaS automation, and SEO services to businesses across India.",
        "priceRange": "₹15,000 - ₹1,50,000",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "bestRating": "5",
            "worstRating": "1",
            "ratingCount": "142"
        },
        "areaServed": [
            { "@type": "City", "name": "Delhi", "containedInPlace": { "@type": "Country", "name": "India" } },
            { "@type": "City", "name": "Mumbai", "containedInPlace": { "@type": "Country", "name": "India" } },
            { "@type": "City", "name": "Bangalore", "containedInPlace": { "@type": "Country", "name": "India" } },
            { "@type": "City", "name": "Hyderabad", "containedInPlace": { "@type": "Country", "name": "India" } },
            { "@type": "City", "name": "Chennai", "containedInPlace": { "@type": "Country", "name": "India" } },
            { "@type": "City", "name": "Pune", "containedInPlace": { "@type": "Country", "name": "India" } },
            { "@type": "City", "name": "Kolkata", "containedInPlace": { "@type": "Country", "name": "India" } },
            { "@type": "City", "name": "Ahmedabad", "containedInPlace": { "@type": "Country", "name": "India" } },
            { "@type": "City", "name": "Jaipur", "containedInPlace": { "@type": "Country", "name": "India" } },
            { "@type": "City", "name": "Lucknow", "containedInPlace": { "@type": "Country", "name": "India" } },
            { "@type": "City", "name": "Chandigarh", "containedInPlace": { "@type": "Country", "name": "India" } },
            { "@type": "City", "name": "Bhubaneswar", "containedInPlace": { "@type": "Country", "name": "India" } },
            { "@type": "Country", "name": "India" }
        ],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Website Design & Development Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Website Development",
                        "description": "Custom website development using Next.js, React, and modern frameworks. We build fast, SEO-optimised, and visually stunning websites for businesses across India."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Web Design",
                        "description": "Premium web design services including UI/UX design, responsive layouts, and interactive parallax animations that convert visitors into customers."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Parallax Website Design",
                        "description": "We create the best parallax websites in India using WebGL, Three.js, GSAP, and Framer Motion for immersive scrolling experiences."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Branding & Identity Design",
                        "description": "Complete brand identity systems including logo design, visual language, and brand strategy for startups and enterprises."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "SaaS & Automation",
                        "description": "Custom SaaS development, AI agent integration, and business process automation for scaling companies."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "SEO & Growth Marketing",
                        "description": "Technical SEO, content strategy, and data-driven growth marketing to improve search rankings and organic traffic."
                    }
                }
            ]
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What is Pole Studios?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Pole Studios is a premium website design agency based in India. We specialise in web design, website development, and building the best parallax websites using modern technologies like Next.js, React, Three.js, and GSAP. We serve B2B and SaaS brands across Delhi, Mumbai, Bangalore, Hyderabad, Chennai, Pune, Kolkata, and all major Indian cities."
                }
            },
            {
                "@type": "Question",
                "name": "What services does Pole Studios offer?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Pole Studios offers four core services: (1) Branding & Design — visual identity, UI/UX, and brand strategy; (2) Web & Creative Development — custom websites, parallax animations, and WebGL experiences; (3) SaaS & Automation — AI agent development, custom software, and process automation; (4) SEO & Growth — technical SEO, analytics, and growth marketing."
                }
            },
            {
                "@type": "Question",
                "name": "Which cities in India does Pole Studios serve?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Pole Studios serves clients across all of India including Delhi, Mumbai, Bangalore, Hyderabad, Chennai, Pune, Kolkata, Ahmedabad, Jaipur, Lucknow, Chandigarh, Bhubaneswar, and all other cities. We work remotely with clients nationwide and deliver projects digitally."
                }
            },
            {
                "@type": "Question",
                "name": "What makes Pole Studios different from other website design agencies in India?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Pole Studios stands out through our focus on high-fidelity interactive experiences. We specialise in parallax websites, WebGL animations, and immersive digital experiences that most agencies cannot deliver. Our tech stack includes Next.js, React, Three.js, GSAP, and Framer Motion — allowing us to create websites that feel alive with smooth animations, particle systems, and cinematic scroll effects."
                }
            },
            {
                "@type": "Question",
                "name": "How much does website development cost at Pole Studios?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Website development costs at Pole Studios vary based on project complexity, features, and timeline. We offer competitive pricing for Indian businesses while delivering internationally competitive quality. Contact us at +919337346497 or teams@polestudios.in for a custom quote tailored to your project needs."
                }
            },
            {
                "@type": "Question",
                "name": "Does Pole Studios build parallax websites?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, Pole Studios specialises in building the best parallax websites in India. We use technologies like GSAP, Framer Motion, Three.js, and WebGL to create immersive scrolling experiences with smooth animations, particle systems, and interactive backgrounds. Our own website at polestudios.in is a live demonstration of our parallax capabilities."
                }
            },
            {
                "@type": "Question",
                "name": "What technologies does Pole Studios use for website development?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Pole Studios uses a modern tech stack including Next.js 14, React 18, TailwindCSS, Three.js, GSAP, Framer Motion, and WebGL for website development. For backend and automation, we work with Node.js, Python, and AI/ML frameworks. All our websites are optimised for performance, SEO, and Core Web Vitals."
                }
            },
            {
                "@type": "Question",
                "name": "How can I contact Pole Studios?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can contact Pole Studios by calling +919337346497, emailing teams@polestudios.in, or visiting our contact page at polestudios.in/uplink. You can also reach us on Instagram (@thepolestudios) or LinkedIn (Pole Studios)."
                }
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
        </>
    );
}
