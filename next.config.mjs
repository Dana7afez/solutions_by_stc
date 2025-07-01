/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/solutions_by_stc',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig
