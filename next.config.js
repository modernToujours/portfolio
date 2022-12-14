/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: false,
  compiler: {
    emotion: true,
  },
  crossOrigin: "anonymous",
  images: {},
  rewrites: async () => {
    return [
      {
        source: process.env.S3_SOURCE_PATH,
        destination: process.env.S3_DESTINATION_URL,
      },
    ];
  },
};

module.exports = nextConfig;
