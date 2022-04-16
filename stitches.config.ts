import { createStitches } from '@stitches/react'

import { marginX, marginY, paddingX, paddingY } from 'src/utils'

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
    // colors: {
    //   gray400: 'gainsboro',
    //   gray500: 'lightgray'
    // }
    hue: {
      red: 0,
      yellow: 50,
      green: 120,
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
    }
  },
  media: {
    // bp1: '(min-width: 480px)'
  },
  utils: {
    marginX,
    mx: marginX,
    marginY,
    my: marginY,
    paddingX,
    px: paddingX,
    paddingY,
    py: paddingY
  }
})
