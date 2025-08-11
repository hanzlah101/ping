/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@ping/ui"],
  experimental: {
    devtoolNewPanelUI: true,
    devtoolSegmentExplorer: true
  }
}

export default nextConfig
