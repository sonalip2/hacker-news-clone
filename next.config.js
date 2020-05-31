/* eslint-disable no-param-reassign */
const withPlugins = require('next-compose-plugins');
const sass = require('@zeit/next-sass');
const css = require('@zeit/next-css');

const nextConfig = {
  pageExtensions: ['jsx'],
  webpack: (config) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty',
    };
    return config;
  },
};

module.exports = withPlugins(
  [
    css,
    [
      sass,
      {
        cssModules: true,
      },
    ],
  ],
  nextConfig,
);
