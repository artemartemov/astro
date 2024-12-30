import { defineConfig } from 'eslint-define-config';

export default defineConfig({
    env: {
        node: true,
        es2022: true,
        browser: true
    },
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:astro/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    rules: {},
    ignores: ['site-config.ts'],
    overrides: [
        {
            files: ['*.js'],
            rules: {
                'no-mixed-spaces-and-tabs': ['error', 'smart-tabs']
            }
        },
        {
            files: ['*.astro'],
            parser: 'astro-eslint-parser',
            parserOptions: {
                parser: '@typescript-eslint/parser'
            }
        },
        {
            files: ['*.ts', '*.tsx'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                project: './tsconfig.json'
            },
            extends: ['plugin:@typescript-eslint/recommended'],
            rules: {
                // Add any TypeScript-specific rules here
            }
        }
    ]
});
