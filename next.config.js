/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    domains: ["127.0.0.1"],
    //   domains: ["api.gsbiomedical.com"],
  },
};

module.exports = nextConfig;
