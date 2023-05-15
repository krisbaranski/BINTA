/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "standalone",
  basePath: "/gh-pages-test",
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
