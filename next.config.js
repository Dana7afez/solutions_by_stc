/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === "production" ? "/solutions_by_stc" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/solutions_by_stc/" : "",
}

module.exports = nextConfig
