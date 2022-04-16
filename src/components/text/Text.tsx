import { styled, theme } from 'stitches.config'

export const Text = styled('span', {
  margin: 0,

  '--light': theme.light.textHighContrast,
  '--saturation': theme.saturation.active,
  color: 'hsl(var(--hue) var(--saturation) var(--light))',

  '&::selection': {
    backgroundColor: `hsl(var(--hue) var(--saturation) ${theme.light.actor200})`
  },

  variants: {
    contrast: {
      low: {
        '--light': theme.light.textLowContrast
      },
      high: {}
    }
  }
})
