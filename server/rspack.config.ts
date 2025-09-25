import { defineConfig } from "@rspack/cli";

export default defineConfig({
  entry: "./src/server.ts",
  output: {
    path: "./dist",
    filename: "server.js",
    library: { type: "module" },
  },
  module: {
    // TODO is this option what I want?
    rules: [
      {
        test: /\.ts$/,
        use: { loader: "builtin:swc-loader" }, // Built-in TS support via SWC
        type: "javascript/auto",
      },
    ],
  },
  resolve: {
    alias: {
      "@database": "./src/config/database.ts",
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
