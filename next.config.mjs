/** @type {import('next').NextConfig} */
const nextConfig = {
  // For Vercel: Remove basePath and assetPrefix (deploy to root domain)
  // For GitHub Pages: Uncomment basePath and assetPrefix, and set output: "export"
  // output: "export", // Only for static export (GitHub Pages)
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
    ],
  },
}

export default nextConfig


