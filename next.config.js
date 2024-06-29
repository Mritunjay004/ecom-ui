const { withStoreConfig } = require("./store-config")
const store = require("./store.config.json")

module.exports = withStoreConfig({
  experimental: {
    serverComponentsExternalPackages: [
      "@medusajs/product",
      "@medusajs/modules-sdk",
    ],

    missingSuspenseWithCSRBailout: false,
  },
  features: store.features,
  reactStrictMode: true,
  images: {
    domains: [
      "octopus-app-2ljpe.ondigitalocean.app",
      "static.wixstatic.com",
      "pahadi-street.s3.ap-south-1.amazonaws.com",
    ],

    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "medusa-public-images.s3.eu-west-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "medusa-server-testing.s3.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "medusa-server-testing.s3.us-east-1.amazonaws.com",
      },
    ],
  },
  typescript: {
    // Ignore TypeScript errors during build
    ignoreBuildErrors: true,
  },
})

console.log("next.config.js", JSON.stringify(module.exports, null, 2))
