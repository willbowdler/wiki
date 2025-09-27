import { defineConfig, type Configuration } from "@rspack/cli";

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
  },
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  // TODO source maps?
  devtool: "source-map",
  target: "node",
  experiments: {
    outputModule: true, // ESM bundles
  },
});

export default config;
