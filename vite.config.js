import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/e-plantShopping/',  // ✅ Trailing slash is important
  plugins: [react()],
});
