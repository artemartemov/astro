import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import sanity from '@sanity/astro';
import react from '@astrojs/react';
import vercelServerless from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
    site: 'https://example.com',
    output: 'static',
    adapter: vercelServerless(),
    integrations: [
        mdx(),
        sitemap(),
        tailwind({
            applyBaseStyles: false
        }),
        sanity({
            projectId: '5ckpeqv9',
            dataset: 'production',
            useCdn: false, // See note on using the CDN
            apiVersion: '2024-07-24',
            studioBasePath: '/studio'
        }),
        react()
    ]
});
