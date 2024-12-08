import type { Config } from 'tailwindcss';

const config: Config = {
  // Enable dark mode using the 'class' strategy
  darkMode: ['class'],
  
  // Paths to scan for Tailwind CSS classes
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}', // Your pages folder
    './src/components/**/*.{js,ts,jsx,tsx,mdx}', // Your components folder
    './src/app/**/*.{js,ts,jsx,tsx,mdx}', // Your app folder
  ],
  
  theme: {
    extend: {
      // Extend colors if you want to define custom colors in the future
      colors: {
        // Example: 'custom-green': 'rgba(35, 133, 109, 1)', 
        // You can define any colors here
      },
      
      // Extend borderRadius for custom values
      borderRadius: {
        lg: 'var(--radius)', // Use a CSS variable for large radius
        md: 'calc(var(--radius) - 2px)', // Custom medium radius
        sm: 'calc(var(--radius) - 4px)', // Custom small radius
      },
    },
  },
  
  // If you are using any plugins, add them here
  plugins: [
    // Example: Add Tailwind CSS Forms plugin
    // require('@tailwindcss/forms'),
    // Add other plugins as needed
  ],
};

export default config;
