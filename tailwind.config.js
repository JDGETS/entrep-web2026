import tailwindAnimated from 'tailwindcss-animated';
export default {
  content: ['./src/**/*.{html,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f9fafb', // near-white
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2933',
          900: '#111827',
          950: '#030712',
        },
      },
    },
    animation: {
      'spin-slow': 'spin 60s linear infinite',
    },
  },
  plugins: [tailwindAnimated],
};
