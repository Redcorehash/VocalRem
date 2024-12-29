/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React Strict Mode for better development practices
  reactStrictMode: true,

  // Environment variables
  env: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    APP_ENV: process.env.APP_ENV || 'development',
    APP_PORT: process.env.APP_PORT || 3000,
  },

  // Image optimization configuration
  images: {
    domains: ['your-cdn-domain.com'], // Add domains for external images
    formats: ['image/avif', 'image/webp'], // Enable modern image formats
  },

  // API route configuration
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:3000/api/:path*', // Proxy API requests
      },
    ];
  },

  // Webpack configuration
  webpack: (config, { isServer }) => {
    // Add custom Webpack rules
    config.module.rules.push({
      test: /\.(wav|mp3)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/sounds/',
          outputPath: 'static/sounds/',
          name: '[name].[ext]',
        },
      },
    });

    // Return the modified config
    return config;
  },

  // Enable source maps in production
  productionBrowserSourceMaps: true,

  // Internationalization (i18n) configuration
  i18n: {
    locales: ['en', 'es', 'fr'], // Supported locales
    defaultLocale: 'en', // Default locale
  },

  // Custom headers for security and performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },

  // Enable experimental features (optional)
  experimental: {
    appDir: true, // Enable the new App Router (experimental)
    serverActions: true, // Enable server actions (experimental)
  },
};

module.exports = nextConfig;
