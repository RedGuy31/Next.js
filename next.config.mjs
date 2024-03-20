/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "localhost",
        pathname: "**",
        port: "3000" || "https://digitalhippo-cyxy.onrender.com",
        protocol: "http",
      },
    ],
  },
};

export default nextConfig;
