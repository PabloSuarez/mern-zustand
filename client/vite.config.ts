// https://vitejs.dev/config/
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    host: true,
    port: 3030,
  },
  preview: {
    port: 3131,
  },
});
