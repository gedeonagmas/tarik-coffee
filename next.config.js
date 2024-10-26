/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    // domains: ["127.0.0.1"],
    domains: ["api.gsbiomedical.com"],
  },
  eslint: {
    ignoreDuringBuilds: true, // Ignores all ESLint warnings/errors during builds
  },
};

module.exports = nextConfig;
