/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "drive.google.com",
      },
      {
        protocol: "https",
        hostname: "humancloud.ltd",
      },
      {
        protocol: "https",
        hostname: "**.csulb.edu",
      },
      {
        protocol: "https",
        hostname: "cloud.google.com",
      },
    ],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
