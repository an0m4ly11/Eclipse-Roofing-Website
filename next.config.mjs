/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      { source: '/locations/york', destination: '/service-areas/york', permanent: true },
    ]
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'eclipseroofing.ca',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
}

export default nextConfig
