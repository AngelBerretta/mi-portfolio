/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // ========== PALETA DE COLORES ==========
      colors: {
        primary: "#3B82F6",
        "primary-dark": "#2563EB",
        "primary-light": "#93C5FD",
        "accent-glow": "rgba(59, 130, 246, 0.5)",
        "background-light": "#F8FAFC",
        "background-dark": "#0B1121",
        "surface-light": "#FFFFFF",
        "surface-dark": "#151E32",
        "surface-hover": "#1E293B",
        "text-light": "#1F2937",
        "text-dark": "#F3F4F6",
        "text-heading": "#111827",
        "text-heading-dark": "#F1F5F9",
        "success": "#10B981",
        "warning": "#F59E0B",
        "error": "#EF4444",
      },
      
      // ========== TIPOGRAFÍA ==========
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Outfit", "ui-sans-serif", "system-ui"],
        mono: ["Fira Code", "monospace"],
      },
      
      // ========== SOMBRAS ==========
      boxShadow: {
        'glow-sm': '0 0 10px rgba(59, 130, 246, 0.3)',
        'glow': '0 0 20px rgba(59, 130, 246, 0.4)',
        'glow-lg': '0 0 30px rgba(59, 130, 246, 0.5)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      
      // ========== ANIMACIONES ==========
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'slide-up': 'slide-up 0.6s ease-out forwards',
        'fade-in': 'fade-in 0.5s ease-in-out',
        'spin-slow': 'spin 3s linear infinite',
      },
      
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { 
            opacity: '0.5',
            transform: 'scale(1)',
            boxShadow: '0 0 10px rgba(59, 130, 246, 0.3)',
          },
          '50%': { 
            opacity: '0.8',
            transform: 'scale(1.05)',
            boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)',
          },
        },
        'slide-up': {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      
      // ========== BORDES Y ESPACIADO ==========
      borderRadius: {
        'card': '1rem',
        'card-lg': '1.5rem',
        'button': '0.5rem',
        'pill': '9999px',
      },
      
      // ========== GRADIENTES ==========
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)',
        'text-gradient': 'linear-gradient(to right, #60A5FA, #A78BFA)',
        'grid-pattern': 'radial-gradient(#334155 1px, transparent 1px)',
      },
      
      // ========== ASPECT RATIO (SIN PLUGIN) ==========
      aspectRatio: {
        'video': '16 / 9',
        'square': '1 / 1',
        'portrait': '3 / 4',
        'landscape': '4 / 3',
      },
      
      // ========== OTROS ==========
      backdropBlur: {
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
      },
    },
  },
  
  // ========== PLUGINS ==========
  plugins: [],
};