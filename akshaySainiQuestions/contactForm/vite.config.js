import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './setupTests.js', // Optional, for jest-dom matchers
  },
});
