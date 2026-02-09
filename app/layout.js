import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "../components/SmoothScroll";
import CustomCursor from "../components/CustomCursor";
import GrainOverlay from "../components/GrainOverlay";
import Decoration from "../components/Decoration";

const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800"] });

export const metadata = {
    title: "POLE | Advanced Digital Architectures",
    description: "Future-ready digital design and development studio. Specializing in high-performance web development, brand strategy, and motion graphics.",
    keywords: ["Web Development", "Brand Strategy", "Motion Graphics", "Video Editing", "Pole Systems", "Digital Agency", "Creative Studio", "Next.js", "React", "WebGL"],
    authors: [{ name: "Pole Systems" }],
    creator: "Pole Systems",
    publisher: "Pole Systems",
    openGraph: {
        title: "POLE | Advanced Digital Architectures",
        description: "Future-ready digital design and development studio.",
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
        title: "POLE | Advanced Digital Architectures",
        description: "Future-ready digital design and development studio.",
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
                <SmoothScroll>
                    <CustomCursor />
                    <GrainOverlay />
                    <Decoration />
                    {children}
                </SmoothScroll>
            </body>
        </html>
    );
}
