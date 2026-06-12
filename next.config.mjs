import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "ai-learning-tau-steel.vercel.app",
          },
        ],
        destination: "https://www.ailearning-engineering.com/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "ailearning-engineering.com",
          },
        ],
        destination: "https://www.ailearning-engineering.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default withMDX(nextConfig);
