import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from 'next';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
    images: {
        domains: ['directacademy.az'],
        formats: ['image/avif', 'image/webp'],
    },
    poweredByHeader: false,
    compress: true,
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
        optimizeCss: true,
        turbo: {
            rules: {
                // Prevent Turbopack from bundling certain packages
                '*.wasm': ['arraybuffer'],
                '*.{jpg,png,gif,ico,svg,webp,avif}': ['url'],
            },
        },
    },
};

export default withNextIntl(nextConfig);