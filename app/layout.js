import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "../components/SmoothScroll";
import CustomCursor from "../components/CustomCursor";
import GlobalNav from "../components/GlobalNav";
import GrainOverlay from "../components/GrainOverlay";
import Decoration from "../components/Decoration";

const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800"] });

export const metadata = {
    title: "Pole Studios | Digital Marketing & Web Design Agency",
    description: "We are a creative digital agency in India helping B2B and SaaS brands with web design, SEO, and marketing. Not a fitness studio.",
    keywords: ["Web Development", "Brand Strategy", "Motion Graphics", "Video Editing", "Pole Systems", "Digital Agency", "Creative Studio", "Next.js", "React", "WebGL", "B2B", "SaaS", "Marketing", "Marketing Agency"],
    authors: [{ name: "Pole Systems" }],
    creator: "Pole Systems",
    publisher: "Pole Systems",
    openGraph: {
        title: "Pole Studios | Digital Marketing & Web Design Agency",
        description: "We are a creative digital agency in India helping B2B and SaaS brands with web design, SEO, and marketing.",
        url: 'https://pole.system',
        siteName: 'Pole Systems',
        images: [
            {
                url: '/polelogo.png',
                width: 800,
                height: 600,
                alt: 'Pole Systems Logo',
            },
        ],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: "Pole Studios | Digital Marketing & Web Design Agency",
        description: "We are a creative digital agency in India helping B2B and SaaS brands with web design, SEO, and marketing.",
        images: ['/polelogo.png'],
        creator: '@thepolestudios',
    },
    icons: {
        icon: '/polelogo.png',
        shortcut: '/polelogo.png',
        apple: '/polelogo.png',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${inter.className} bg-black text-white antialiased selection:bg-tech-blue selection:text-black`}>
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
