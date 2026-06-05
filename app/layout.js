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
        default: "Website Development Company in Bhubaneswar | Web Design Agency — Pole Studios",
        template: "%s | Pole Studios Bhubaneswar",
    },
    description: "Pole Studios is the top website development company in Bhubaneswar, specialising in premium web design, custom website development, and the best parallax websites for brands in Odisha and India.",
    keywords: ["website development company in bhubaneswar", "web design agency bhubaneswar", "website design bhubaneswar", "best website developers in bhubaneswar", "website development", "web design", "website design agency", "Pole", "best parallax websites", "Pole Studios", "web design agency India", "parallax website design", "creative web agency", "B2B web design", "SaaS website development", "Next.js agency", "React development India", "WebGL websites"],
    authors: [{ name: "Pole Studios" }],
    creator: "Pole Studios",
    publisher: "Pole Studios",
    alternates: {
        canonical: 'https://polestudios.in',
    },
    openGraph: {
        title: "Website Development Company in Bhubaneswar | Web Design Agency — Pole Studios",
        description: "Premium website development company in Bhubaneswar. We build the best parallax websites, high-performance web design, and custom websites for brands.",
        url: 'https://polestudios.in',
        siteName: 'Pole Studios',
        locale: 'en_IN',
        images: [
            {
                url: '/polelogo.png',
                width: 800,
                height: 600,
                alt: 'Pole Studios — Website Design Agency Bhubaneswar',
            },
        ],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: "Website Development Company in Bhubaneswar | Pole Studios",
        description: "Premium web design & website development company in Bhubaneswar. Creators of the best parallax websites.",
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
