import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // RedBus inspired transportation color palette
        background: "#F5F6F8",
        panel: "#FFFFFF",
        surface: "#FFFFFF",
        "surface-hover": "#F9FAFB",
        "surface-border": "#E5E7EB",
        primary: {
          DEFAULT: "#D32F2F", // RedBus-inspired transportation red
          hover: "#B71C1C",
          dark: "#9A0007",
          light: "#EF5350",
          tint: "#FEE2E2",
          muted: "rgba(211, 47, 47, 0.08)",
        },
        transit: {
          red: "#D32F2F",
          charcoal: "#1F2937",
          navy: "#1E293B",
          slate: "#475569",
          grey: "#6B7280",
          light: "#F8F9FA",
          border: "#E5E7EB",
        },
        cyan: {
          DEFAULT: "#0284C7",
          hover: "#0369A1",
          muted: "rgba(2, 132, 199, 0.1)",
        },
        amber: {
          DEFAULT: "#D97706",
          hover: "#B45309",
          muted: "rgba(217, 119, 6, 0.1)",
        },
        red: {
          DEFAULT: "#D32F2F",
          hover: "#B71C1C",
          muted: "rgba(211, 47, 47, 0.1)",
        },
        text: {
          main: "#1F2937",
          muted: "#6B7280",
          dim: "#9CA3AF",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        sm: "0 1px 3px 0 rgba(0, 0, 0, 0.08), 0 1px 2px -1px rgba(0, 0, 0, 0.08)",
        card: "0 2px 4px 0 rgba(0, 0, 0, 0.04), 0 1px 2px 0 rgba(0, 0, 0, 0.02)",
      },
    },
  },
  plugins: [],
};

export default config;
