import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "../components/SmoothScroll";
import CustomCursor from "../components/CustomCursor";
import GlobalNav from "../components/GlobalNav";
import GrainOverlay from "../components/GrainOverlay";
import Decoration from "../components/Decoration";
import JsonLd from "../components/JsonLd";

const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800"] });

export const metadata = {
    metadataBase: new URL('https://polestudios.in'),
    title: {
        default: "Pole Studios — Website Design Agency in India | Web Development & Best Parallax Websites",
        template: "%s | Pole Studios India",
    },
    description: "Pole Studios is a premium website design agency in India specialising in web design, website development, and the best parallax websites. We craft high-performance digital experiences for B2B and SaaS brands across Delhi, Mumbai, Bangalore, Hyderabad, and all of India.",
    keywords: ["website development", "web design", "website design agency", "Pole", "best parallax websites", "Pole Studios", "web design agency India", "website development India", "parallax website design", "creative web agency", "B2B web design", "SaaS website development", "Next.js agency", "React development India", "WebGL websites", "interactive website design", "premium web design India"],
    authors: [{ name: "Pole Studios" }],
    creator: "Pole Studios",
    publisher: "Pole Studios",
    alternates: {
        canonical: 'https://polestudios.in',
    },
    openGraph: {
        title: "Pole Studios — Website Design Agency in India | Web Development & Best Parallax Websites",
        description: "Premium website design agency in India. We build the best parallax websites, high-performance web design, and custom website development for brands across India.",
        url: 'https://polestudios.in',
        siteName: 'Pole Studios',
        locale: 'en_IN',
        images: [
            {
                url: '/polelogo.png',
                width: 800,
                height: 600,
                alt: 'Pole Studios — Website Design Agency India',
            },
        ],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: "Pole Studios — Website Design Agency India",
        description: "Premium web design & website development agency in India. Creators of the best parallax websites.",
        images: ['/polelogo.png'],
        creator: '@thepolestudios',
    },
    icons: {
        icon: '/polelogo.png',
        shortcut: '/polelogo.png',
        apple: '/polelogo.png',
    },
    other: {
        'geo.region': 'IN',
        'geo.country': 'IN',
        'og:locale': 'en_IN',
        'og:phone_number': '+919337346497',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en-IN">
            <body className={`${inter.className} bg-black text-white antialiased selection:bg-tech-blue selection:text-black`}>
                <JsonLd />
                <CustomCursor />
                <GlobalNav />
                <GrainOverlay />
                <Decoration />
                <SmoothScroll>
                    {children}
                </SmoothScroll>
            </body>
        </html>
    );
}
