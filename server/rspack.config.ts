import { defineConfig } from "@rspack/cli";

export default defineConfig({
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
    alias: {
      "@database": "./src/config/database.ts",
      "@logger": "./src/utils/logger.ts",
    },
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
