"use client";

import CardNav from "./CardNav";

const navItems = [
    {
        label: "About",
        bgColor: "#0D0716",
        textColor: "#fff",
        links: [
            { label: "Mission", ariaLabel: "Our Mission", href: "/mission" },
            { label: "Team", ariaLabel: "Our Team", href: "/team" }
        ]
    },
    {
        label: "Services",
        bgColor: "#170D27",
        textColor: "#fff",
        links: [
            { label: "Branding & Design", ariaLabel: "Branding & Design", href: "/branding" },
            { label: "Web & Creative Dev", ariaLabel: "Web & Creative Dev", href: "/web-design" },
            { label: "SaaS & Automation", ariaLabel: "SaaS & Automation", href: "/saas-automation" },
            { label: "SEO & Growth", ariaLabel: "SEO & Growth", href: "/seo" }
        ]
    },
    {
        label: "Projects",
        bgColor: "#201335",
        textColor: "#fff",
        links: [
            { label: "Featured", ariaLabel: "Featured Projects", href: "/featured" },
            { label: "Case Studies", ariaLabel: "Project Case Studies", href: "/case-studies" }
        ]
    },
    {
        label: "Contact",
        bgColor: "#271E37",
        textColor: "#fff",
        links: [
            { label: "Uplink", ariaLabel: "Link in Bio", href: "/uplink" },
            { label: "Email", ariaLabel: "Email us", href: "mailto:polestudios@mail.ru" },
            { label: "Twitter", ariaLabel: "Twitter", href: "#" },
            { label: "LinkedIn", ariaLabel: "LinkedIn", href: "https://linkedin.com/company/thepolestudios" }
        ]
    }
];

export default function GlobalNav() {
    return (
        <CardNav
            items={navItems}
            baseColor="rgba(255, 255, 255, 0.9)"
            menuColor="#000"
            buttonBgColor="#111"
            buttonTextColor="#fff"
        />
    );
}
