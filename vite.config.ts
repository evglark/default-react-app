import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'Root': path.resolve(__dirname, './src'),
    },
  },
  server: {
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
});
