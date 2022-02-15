/** @type {import('next').NextConfig} **/

const nextConfig = {
  webpack: (config, { buildId, webpack }) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.BUILD_ID': JSON.stringify(buildId),
      })
    );
    return config;
  },
};

module.exports = nextConfig;
