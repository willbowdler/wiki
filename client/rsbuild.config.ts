import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [pluginReact()],
  resolve: {
    alias: {
      '@wiki': path.resolve(__dirname, 'src/Main/@wiki'),
      '@skeleton': path.resolve(__dirname, 'src/Main/@skeleton'),
      '@assets': path.resolve(__dirname, 'src/@assets'),
      Main: path.resolve(__dirname, 'src/Main'),
    },
  },
});
