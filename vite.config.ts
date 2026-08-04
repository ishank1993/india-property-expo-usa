import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import prerender from '@prerenderer/rollup-plugin'

// Keep in sync with the slugs in src/app/content/blogPosts.ts — add a new
// entry here whenever a blog post is added so it gets pre-rendered too.
const blogSlugs = [
  'buying-property-india-from-singapore-nri-guide',
  'gift-city-vs-real-estate-singapore-nri',
  'nri-property-tax-filing-singapore',
  'best-bangalore-projects-nri-investment-singapore',
  'pune-vs-hyderabad-property-investment-nri-singapore',
  'luxury-real-estate-mumbai-gurgaon-nri-singapore',
]

const prerenderRoutes = [
  '/',
  '/wealth',
  '/terms',
  '/privacy',
  '/privacy-policy',
  '/disclaimer',
  '/blog',
  ...blogSlugs.map((slug) => `/blog/${slug}`),
]

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    prerender({
      routes: prerenderRoutes,
      renderer: '@prerenderer/renderer-puppeteer',
      rendererOptions: {
        renderAfterDocumentEvent: 'render-event',
        headless: true,
        launchOptions: {
          args: ['--no-sandbox', '--disable-setuid-sandbox'],
        },
      },
      postProcess(renderedRoute) {
        // The Meta Pixel script runs during the local prerender pass and
        // bakes the build server's address into a tracking pixel URL —
        // point it at the real domain instead.
        renderedRoute.html = renderedRoute.html
          .replace(/https?:\/\/(localhost|127\.0\.0\.1):\d+/gi, 'https://nriniveshexposg.com')
          .replace(/domain=(localhost|127\.0\.0\.1)(%3A\d+|:\d+)?/gi, 'domain=nriniveshexposg.com');
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'es2015',
    minify: 'esbuild',
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-motion': ['motion'],
          'vendor-radix': [
            '@radix-ui/react-dialog',
            '@radix-ui/react-accordion',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-select',
          ],
          'vendor-ui': [
            'lucide-react',
            'sonner',
            'class-variance-authority',
            'clsx',
            'tailwind-merge',
          ],
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      },
    },
    chunkSizeWarningLimit: 1000,
    sourcemap: false,
    assetsInlineLimit: 4096,
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'motion',
      'lucide-react',
      '@radix-ui/react-dialog',
      '@radix-ui/react-accordion',
    ],
  },
  server: {
    port: 3000,
    strictPort: false,
  },
  preview: {
    port: 4173,
    strictPort: false,
  },
})
