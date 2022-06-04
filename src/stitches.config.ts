import { createStitches } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config
} = createStitches({
  theme: {
    hue: {
      red: 0,
      yellow: 50,
      green: 120,
      cyan: 170,
      blue: 210
    },
    light: {
      none: '0%',
      backStage: '5%',
      midStage: '8%',
      frontStage: '11%',

      actor100: '14%',
      actor200: '18%',
      actor300: '22%',
      actor400: '26%',
      actor500: '30%',
      actor600: '35%',
      actor700: '40%',
      actor800: '45%',

      textLowContrast: '60%',
      textHighContrast: '100%'
    },
    saturation: {
      grey: '0%',
      offGrey: '20%',
      active: '60%'
    },
    fontSizes: {
      '2xs': '.625rem',
      xs: '.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem'
    },
    sizes: {}
  },
  media: {
    // bp1: '(min-width: 480px)'
  }
})
