import path from "path";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://lucassvti.github.io/pokemon-react",
  plugins: [react()],
  build: {
    outDir: path.join(__dirname, "build"),
  }
})
