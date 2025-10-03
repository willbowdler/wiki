import { defineConfig, type Configuration } from "@rspack/cli";
import { DefinePlugin } from "@rspack/core";
import { resolve } from "path";

const config: Configuration = defineConfig({
  entry: "./src/server.ts",
  output: {
    path: "./dist",
    filename: "server.js",
    library: { type: "module" },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: { loader: "builtin:swc-loader" },
        type: "javascript/auto",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
    alias: {
      "@config": resolve(__dirname, "src/config"),
      "@utils": resolve(__dirname, "src/utils"),
      "@api": resolve(__dirname, "src/api"),
    },
  },
  plugins: [
    new DefinePlugin({
      DEVELOPMENT: JSON.stringify(process.env.NODE_ENV === "development"),
      PRODUCTION: JSON.stringify(process.env.NODE_ENV === "production"),
    }),
  ],
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  // TODO source maps?
  devtool: "source-map",
  target: "node",
  experiments: {
    outputModule: true, // ESM bundles
  },
});

export default config;
