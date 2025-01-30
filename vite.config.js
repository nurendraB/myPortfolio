import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import TerserPlugin from 'terser-webpack-plugin'

// https://vite.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      external: ['@emailjs/browser']
    }
  },
  base: '/myPortfolio/',
plugins: [react()],
optimization: {
  minimize: true,
  minimizer: [
    new TerserPlugin({
      terserOptions: {
        ecma: 6,
        mangle: true,
        compress: true,
        output: {
          comments: false,
          beautify: false,
        },
        // Disable `eval`-related warning
        toplevel: true,
      },
    }),
  ]
}
});
