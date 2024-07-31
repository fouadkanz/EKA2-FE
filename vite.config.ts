import { ConfigEnv, defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default ({ mode }: ConfigEnv) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  return defineConfig({
    plugins: [
      react(),
      VitePWA({ 
        registerType: 'autoUpdate',
        includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
        manifest: {
          name: `JERA ${process.env.VITE_APP_NAME}`,
          short_name: `JERA ${process.env.VITE_APP_NAME}`,
          theme_color: '#ffffff',
          icons: [
              {
                  src: 'pwa-64x64.png',
                  sizes: '64x64',
                  type: 'image/png'
              },
              {
                  src: 'pwa-192x192.png',
                  sizes: '192x192',
                  type: 'image/png'
              },
              {
                  src: 'pwa-512x512.png',
                  sizes: '512x512',
                  type: 'image/png',
                  purpose: 'any'
              },
              {
                  src: 'maskable-icon-512x512.png',
                  sizes: '512x512',
                  type: 'image/png',
                  purpose: 'maskable'
              }
          ],
        }, 
      })
    ],
    base: '/EKA2-FE/',
    server: {
      port: parseInt(process.env.VITE_PORT||"5173"),
    },
    build: {
      minify: false,
      sourcemap: false,
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    define: {
      "process.env": process.env,
    },
  })
}
 
