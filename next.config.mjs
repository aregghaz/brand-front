/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'build',
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },

};


export default nextConfig;
