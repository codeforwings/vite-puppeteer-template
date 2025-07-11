import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
    server: {
    //https://v2.vitejs.dev/config/#server-hmr
    watch: {
      // ignored: ['!**/node_modules/your-package-name/**'], //doc's example to not ignore
      ignored: ['**/scratchpad/**']
    }
  },

  // The watched package must be excluded from optimization,
  // so that it can appear in the dependency graph and trigger hot reload.
  optimizeDeps: {
    exclude: ['scratchpad'],//not sure if this works since it's not a package
  }
})
