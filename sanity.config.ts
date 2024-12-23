import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schema } from './studio/schemaTypes';

export default defineConfig({
    name: 'default',
    title: 'Astro Blog',

    projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
    dataset: import.meta.env.PUBLIC_SANITY_DATASET,

    plugins: [structureTool(), visionTool()],

    schema: {
        types: schema.types
    }
});
