import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customOrange: '#fd7d6a',
      },
      width: {
        'calc-50-14': 'calc(50% - 8px)',
      },
      boxShadow: {
        'customShadow': '0 1rem 3rem #f5f3f3',
      },
      transitionDuration: {
        '1800': '1800ms',
      },
    },
  },
  plugins: [],
} satisfies Config;
