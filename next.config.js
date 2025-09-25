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
    unoptimized: true,
  },
  experimental: {
    serverActions: {
      allowedOrigins: ["localhost:3000", "localhost:3001", "siprofile.me"],
    },
  },
};

module.exports = nextConfig;
