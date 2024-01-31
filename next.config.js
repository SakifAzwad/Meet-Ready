/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['i.ibb.co']
    },
    pageExtensions: ['tsx', 'ts', 'jsx', 'js']
}

// module.exports = nextConfig
// // next.config.js
const path = require('path');

module.exports = {
  webpack: (config, { isServer }) => {
    // Add aliases from tsconfig.json
    config.resolve.alias = {
      ...config.resolve.alias,
      '@/*': path.resolve(__dirname, 'src/*'),
    };

    // For using Preact in production
    if (!isServer) {
      config.resolve.alias['react'] = 'preact/compat';
      config.resolve.alias['react-dom/test-utils'] = 'preact/test-utils';
      config.resolve.alias['react-dom'] = 'preact/compat';
    }

    return config;
  },
};
