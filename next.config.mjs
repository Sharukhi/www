/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: "/links",
            destination: "https://links-sharukhi.vercel.app",
          }
        ];
      }
};

export default nextConfig;
