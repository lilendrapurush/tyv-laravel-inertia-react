import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/css/custom.css',
                'resources/js/app.tsx',
            ],
            ssr: 'resources/js/ssr.tsx',
            refresh: true,
        }),
        react(),
        tailwindcss(),
    ],
    esbuild: {
        jsx: 'automatic',
    },
    resolve: {
        alias: {
            'ziggy-js': path.resolve(__dirname, 'vendor/tightenco/ziggy'),
            '@': path.resolve(__dirname, 'resources'),
            '@components': path.resolve(__dirname, 'resources/js/components'),
            '@parts': path.resolve(__dirname, 'resources/js/components/parts'),
            '@pages': path.resolve(__dirname, 'resources/js/pages'),
        },
    },
    optimizeDeps: {
        include: ['ziggy-js', '@components', '@parts', '@pages'],
    },
});