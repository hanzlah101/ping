/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@ping/ui"],
  experimental: {
    devtoolSegmentExplorer: true
  }
}

export default nextConfig
