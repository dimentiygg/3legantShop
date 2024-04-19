// vite.config.js

import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  // Остальные настройки...
  root: 'src',

  build: {
    outDir: '../dist',
  },
});
