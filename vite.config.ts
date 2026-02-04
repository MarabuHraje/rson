import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true, // Povolí přístup zvenčí (např. v kontejneru nebo na síti)
  },
});