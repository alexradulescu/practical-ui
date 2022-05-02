import { styled, theme } from 'stitches.config'

export const Input = styled('input', {
  all: 'unset',
  '-webkit-appearance': 'none',

  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',

  height: 36,
  margin: 4,
  borderRadius: 6,
  padding: '0 16px',

  '--light': theme.light.actor200,
  '--border-light': 'var(--light)',
  '--text-light': theme.light.textHighContrast,
  '--placeholder-light': theme.light.textLowContrast,
  '--saturation': theme.light.none,
  '--hue': 0,
  backgroundColor: 'hsl(var(--hue) var(--saturation) var(--light))',

  border: '1px solid',
  borderColor: 'hsl(var(--hue) var(--saturation) var(--border-light))',

  color: 'hsl(var(--hue) var(--saturation) var(--text-light))',

  '&:hover, &:focus': {
    '--light': theme.light.actor400
  },

  '&:active': {
    '--light': theme.light.actor500
  },

  '&::placeholder': {
    color: 'hsl(var(--hue) var(--saturation) var(--placeholder-light))'
  },

  '&::selection': {
    backgroundColor: `hsl(var(--hue) var(--saturation) ${theme.light.actor200})`
  },

  variants: {
    emphasis: {
      outline: {
        '--light': theme.light.midStage,
        '--border-light': theme.light.actor500,

        '&:hover, &:focus': {
          '--light': theme.light.frontStage,
          '--border-light': theme.light.actor700
        },

        '&:active': {
          '--light': theme.light.actor100,
          '--border-light': theme.light.actor800
        }
      },
      full: {}
    }
  }
})
