import { defineConfig } from 'vite';
import pkg from './package.json';

export default defineConfig({
  build: {
    target: ['chrome80'],
    lib: {
      entry: './src/index.ts',
      formats: ['cjs', 'es'],
    },
    rollupOptions: {
      external: [
        ...Object.keys(pkg.dependencies ?? {}),
        ...Object.keys(pkg.devDependencies ?? {}),
      ],
    },
  },
});
