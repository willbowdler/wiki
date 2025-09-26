import { MantineThemeOverride } from '@mantine/core';

const theme: MantineThemeOverride = {
  // Core colors
  colors: {
    primary: [
      '#f2d9ff', // Lighter shades for Mantine (10 shades required)
      '#e6b3ff',
      '#d98cff',
      '#cc66ff',
      '#bf47ff', // --color-primary
      '#a33de6',
      '#8833cc',
      '#6c29a6',
      '#511f80',
      '#35145a',
    ],
    secondary: [
      '#e8d1f0',
      '#d1a3e0',
      '#ba76d1',
      '#a348c1',
      '#9b59b6', // --color-secondary
      '#854d9e',
      '#6f4086',
      '#59336e',
      '#432656',
      '#2d1a3e',
    ],
    accent: [
      '#f0e0ff',
      '#e6ccff',
      '#dbb8ff',
      '#d1a3ff', // --color-accent
      '#b88ce6',
      '#9e76cc',
      '#8560b3',
      '#6c4a99',
      '#523480',
      '#391e66',
    ],
    background: [
      '#4d4d4d',
      '#404040',
      '#333333',
      '#262626',
      '#1a1a1a',
      '#121212', // --color-background
      '#0f0f0f',
      '#0c0c0c',
      '#090909',
      '#060606',
    ],
    surface: [
      '#5c5c5c',
      '#4d4d4d',
      '#3e3e3e',
      '#2f2f2f',
      '#1e1e1e', // --color-surface
      '#191919',
      '#141414',
      '#0f0f0f',
      '#0a0a0a',
      '#050505',
    ],
    text: [
      '#ffffff',
      '#f5f5ff',
      '#e6e6ff', // --color-text-primary
      '#d9d9ff',
      '#ccccff',
      '#b3b3cc', // --color-text-secondary
      '#9999b3',
      '#808099',
      '#666680',
      '#4d4d66',
    ],
    error: [
      '#f9c2bc',
      '#f4a8a1',
      '#ef8e86',
      '#ea746b',
      '#e74c3c', // --color-text-error
      '#cf4336',
      '#b83a30',
      '#a03129',
      '#882823',
      '#701f1d',
    ],
    success: [
      '#b8f1cc',
      '#9ce6b3',
      '#80db9a',
      '#64d081',
      '#2ecc71', // --color-text-success
      '#29b865',
      '#24a359',
      '#1e8e4d',
      '#197941',
      '#146435',
    ],
  },
  primaryColor: 'primary', // Default color for components (e.g., Button)
  primaryShade: { light: 4, dark: 4 }, // Use --color-primary (#bf47ff) for both light and dark

  // Typography
  fontFamily: '"Poppins", Arial, sans-serif',
  fontFamilyMonospace: '"Courier New", monospace',
  fontSizes: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '20px',
    xl: '24px',
  },
  lineHeights: {
    sm: '1.4',
    md: '1.6',
    lg: '1.8',
  },
  headings: {
    fontFamily: '"Poppins", Arial, sans-serif',
    fontWeight: '700', // --font-weight-bold
    textWrap: 'balance',
    sizes: {
      h1: { fontSize: '32px', lineHeight: '1.4', fontWeight: '700' },
      h2: { fontSize: '28px', lineHeight: '1.4', fontWeight: '700' },
      h3: { fontSize: '24px', lineHeight: '1.5', fontWeight: '600' },
      h4: { fontSize: '20px', lineHeight: '1.5', fontWeight: '600' },
      h5: { fontSize: '16px', lineHeight: '1.6', fontWeight: '500' },
      h6: { fontSize: '14px', lineHeight: '1.6', fontWeight: '500' },
    },
  },

  // Spacing, radius, and shadows
  spacing: {
    xs: '4px', // --spacing-1
    sm: '8px', // --spacing-2
    md: '16px', // --spacing-3
    lg: '24px', // --spacing-4
    xl: '32px', // --spacing-5
  },
  radius: {
    sm: '4px', // --border-radius-sm
    md: '8px', // --border-radius-md
    lg: '16px', // --border-radius-lg
  },
  defaultRadius: 'md',
  shadows: {
    sm: '0px 2px 4px rgba(0, 0, 0, 0.5)', // --shadow-sm
    md: '0px 4px 8px rgba(0, 0, 0, 0.6)', // --shadow-md
    lg: '0px 8px 16px rgba(0, 0, 0, 0.7)', // --shadow-lg
  },

  // Additional settings
  focusRing: 'auto', // Default focus ring behavior
  scale: 1, // Default font-size scale
  fontSmoothing: true, // Default font smoothing
  white: '#ffffff', // Standard white
  black: '#000000', // Standard black
  respectReducedMotion: true, // Respect OS reduced motion settings
  cursorType: 'pointer', // Interactive elements use pointer cursor
  defaultGradient: {
    from: 'primary',
    to: 'secondary',
    deg: 45,
  }, // Gradient for components like Button
};

export { theme };
