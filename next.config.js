const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: isProd ? "https://ashcolor.github.io/react-tutorial" : "",
  output: "export",
};

module.exports = nextConfig;
