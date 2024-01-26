/** @type {import('vite').UserConfig} */
export default {
  css: {
    devSourcemap: true
  },
  publicDir: 'public',
  root: './source',
  build: {
    outDir: '../dist',
  },
  base: './',
  server: {
    port: 3000,
  }
};
