"use client";

import StaggeredMenu from "./StaggeredMenu";

const menuItems = [
    { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
    { label: 'Featured', ariaLabel: 'Featured Projects', link: '/featured' },
    { label: 'Case Studies', ariaLabel: 'Project Case Studies', link: '/case-studies' },
    { label: 'Blogs', ariaLabel: 'Read Blogs', link: '/blogs' },
    { label: 'Uplink', ariaLabel: 'Link in Bio', link: '/uplink' }
];

const socialItems = [
    { label: 'Email', link: 'mailto:teams@polestudios.in' },
    { label: 'Phone', link: 'tel:+919337346497' },
    { label: 'LinkedIn', link: 'https://linkedin.com/company/thepolestudios' }
];

export default function GlobalNav() {
    return (
        <StaggeredMenu
            isFixed={true}
            position="right"
            items={menuItems}
            socialItems={socialItems}
            displaySocials={true}
            displayItemNumbering={true}
            menuButtonColor="#fff"
            openMenuButtonColor="#000"
            changeMenuColorOnOpen={true}
            colors={['#1a1a1a', '#2a2a2a']}
            logoUrl="/polelogo.png"
            accentColor="#3b82f6" // tech-blue
            onMenuOpen={() => console.log('Menu opened')}
            onMenuClose={() => console.log('Menu closed')}
        />
    );
}
