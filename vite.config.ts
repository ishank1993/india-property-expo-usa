import { defineConfig } from 'vite'
import path from 'path'















































}  return [ref, isIntersecting];  }, [threshold, root, rootMargin, freezeOnceVisible]);    };      observer.disconnect();    return () => {    observer.observe(element);    );      { threshold, root, rootMargin }      },        }          observer.unobserve(element);          frozen.current = true;        if (isElementIntersecting && freezeOnceVisible) {        setIsIntersecting(isElementIntersecting);        const isElementIntersecting = entry.isIntersecting;      ([entry]) => {    const observer = new IntersectionObserver(    if (frozen.current) return;    // If already intersected and should freeze, don't observe again    if (!element) return;    const element = ref.current;  useEffect(() => {  const frozen = useRef(false);  const ref = useRef<HTMLDivElement>(null);  const [isIntersecting, setIsIntersecting] = useState(false);}: UseIntersectionObserverProps = {}): [React.RefObject<HTMLDivElement>, boolean] {  freezeOnceVisible = false,  rootMargin = '50px',  root = null,  threshold = 0,export function useIntersectionObserver({}  freezeOnceVisible?: boolean;  rootMargin?: string;  root?: Element | null;  threshold?: number;interface UseIntersectionObserverProps {import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { compression } from 'vite-plugin-compression2'

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
    // Gzip compression for production
    compression({
      algorithm: 'gzip',
      exclude: [/\.(br)$/, /\.(gz)$/],
    }),
    // Brotli compression for production
    compression({
      algorithm: 'brotliCompress',
      exclude: [/\.(br)$/, /\.(gz)$/],
    }),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    // Enable minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs in production
        drop_debugger: true,
      },
    },
    // Code splitting optimization
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunk for large libraries
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
        // Asset naming with hash for cache busting
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      },
    },
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1000,
    // Source maps for debugging (can disable for production)
    sourcemap: false,
    // Asset inlining threshold
    assetsInlineLimit: 4096,
  },
  // Optimize dependencies
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
  // Server configuration for development
  server: {
    port: 3000,
    strictPort: false,
    open: true,
  },
  // Preview server configuration
  preview: {
    port: 4173,
    strictPort: false,
  },
})
