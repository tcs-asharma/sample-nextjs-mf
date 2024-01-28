const { NextFederationPlugin } = require('@module-federation/nextjs-mf');
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    const { isServer } = options;
    // config.experiments = { topLevelAwait: true };
    config.plugins.push(
      new NextFederationPlugin({
        name: 'main',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './footer': './components/Footer.js',
          './nav': './components/Header.js',
          './header': './components/Header.js',
        }
      })
    );
    return config;
  }
}

module.exports = nextConfig
