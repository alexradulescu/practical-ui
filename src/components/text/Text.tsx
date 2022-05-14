import { styled, theme } from 'src/stitches.config'

export const Text = styled('span', {
  margin: 0,

  '--hue': theme.hue.blue,
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
    },
    accent: {
      primary: { '--hue': theme.hue.blue },
      warning: { '--hue': theme.hue.yellow },
      error: { '--hue': theme.hue.red },
      success: { '--hue': theme.hue.green },
      info: { '--hue': theme.hue.cyan }
    }
  }
})
