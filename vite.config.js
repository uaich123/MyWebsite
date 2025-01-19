import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  BROWSER: "/Applications/Opera\ GX.app ",
  plugins: [react()],
  base: "/",
})
