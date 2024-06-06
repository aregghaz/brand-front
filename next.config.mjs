/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build',

  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },

};


export default nextConfig;
