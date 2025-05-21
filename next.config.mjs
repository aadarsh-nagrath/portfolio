/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'media.licdn.com',
      'images.unsplash.com',
      'res.cloudinary.com',
      'dev-to-uploads.s3.amazonaws.com',
      'dev-to-uploads.s3.us-east-1.amazonaws.com',
      'dev-to-uploads.s3.us-west-2.amazonaws.com',
      'dev-to-uploads.s3.eu-west-1.amazonaws.com',
      'dev.to',
      'practicaldev-herokuapp-com.freetls.fastly.net',
      'cdn.dev.to',
      'raw.githubusercontent.com',
      'github.com',
      'avatars.githubusercontent.com',
      'user-images.githubusercontent.com',
      'opengraph.githubassets.com'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.dev.to',
      },
      {
        protocol: 'https',
        hostname: '**.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: '**.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: '**.github.com',
      },
      {
        protocol: 'https',
        hostname: '**.githubassets.com',
      }
    ],
  },
};

export default nextConfig;
