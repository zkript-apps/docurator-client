/** @type {import('next').NextConfig} */
const webpack = require("webpack");
const { parsed: envVars } = require("dotenv").config({
  path: process.env.NODE_ENV === "production" ? `./.env` : `../.env`,
});
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(envVars));
    return config;
  },
};

module.exports = nextConfig;
