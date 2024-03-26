// webpack.config.js
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/frontend/src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist/frontend"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/backend/src/dtos"),
          to: path.resolve(__dirname, "src/frontend/src/dtos"),
        },
      ],
    }),
  ],
};
