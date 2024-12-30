export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'artemov.io',
    subtitle: 'Some work and words',
    description: 'Portfolio and writing of Artem Artemov',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Dante - Astro.js and Tailwind CSS theme'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Case Studies',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'About',
            href: '/about'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        }
    ],
    socialLinks: [
        {
            text: 'Bluesky',
            href: 'https://twitter.com/'
        }
    ],
    hero: {
        title: "Hey, I'm Artem! Currently designing systems at Strava",
        text: 'I’m not here to bombard you with bells and whistles—just the good stuff: design ideas, personal reflections, and a fresh perspective on what it means to build something that lasts. My portfolio is a work in progress, much like the best of us, but that’s half the fun. If you share my fascination with simplicity and a dash of irreverent wit, then you’re in the right place.',
        image: {
            src: '/hero.jpeg',
            alt: 'A person sitting at a desk in front of a computer'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        title: 'Subscribe to my writing',
        text: 'I promise not to spam, or write too much.',
        formUrl: '#'
    },
    postsPerPage: 4,
    projectsPerPage: 2
};

export default siteConfig;
