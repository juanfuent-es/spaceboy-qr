import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    mimeTypes: {
      'application/octet-stream': ['mind']
    }
  }
})