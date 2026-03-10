/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Injected by pipeline via CSS vars — defaults here for dev
        brand: {
          primary:   'var(--color-primary,   #1E88E5)',
          secondary: 'var(--color-secondary, #29B6F6)',
          bg:        'var(--color-bg,        #0a0f1a)',
          surface:   'var(--color-surface,   #111827)',
          text:      'var(--color-text,      #e2e8f0)',
          muted:     'var(--color-muted,     #64748b)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
};
