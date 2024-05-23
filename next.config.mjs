/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'app-info.healthypublicspaces.com',
        port: '',
        pathname: '/images/**'
      },
    ],
  },
};


