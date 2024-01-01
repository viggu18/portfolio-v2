/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "viggu18.vercel.app",
      },
      {
        hostname: "media.licdn.com",
      },
    ],
  },
};

module.exports = nextConfig;
