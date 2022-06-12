import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import uvals from 'uvals'
import Inspect from 'vite-plugin-inspect'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [Inspect(), uvals() as any, vue()]
})
