/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.vitsell.ir",
        port: "",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
