/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "https://digitalhippo-7lpc.onrender.com"],
    // remotePatterns: [
    //   {
    //     hostname: "localhost",
    //     pathname: "**",
    //     port: "3000",
    //     protocol: "http",
    //   },
    //   {
    //     pathname: "**",
    //     protocol: "https",
    //     hostname: "digitalhippo-production.up.railway.app",
    //   },
    // ],
  },
};

export default nextConfig;
