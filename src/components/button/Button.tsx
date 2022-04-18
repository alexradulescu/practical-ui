import { styled, theme } from 'stitches.config'

export const Button = styled('button', {
  all: 'unset',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  minWidth: 36,
  minHeight: 36,
  margin: 4,
  borderRadius: 6,
  padding: '0 16px',

  '--light': theme.light.actor100,
  '--border-light': 'var(--light)',
  '--saturation': theme.saturation.active,
  backgroundColor: 'hsl(var(--hue) var(--saturation) var(--light))',

  border: '1px solid',
  borderColor: 'hsl(var(--hue) var(--saturation) var(--border-light))',

  '&:hover, &:focus': {
    '--light': theme.light.actor200
  },

  '&:focus': {
    '--outline-hue': theme.hue.blue,
    '--outline-light': theme.light.actor500,
    '--outline-saturation': theme.saturation.active,
    outline: `2px solid`,
    outlineColor:
      'hsl(var(--outline-hue) var(--outline-saturation) var(--outline-light))',
    outlineOffset: 2
  },

  '&:active': {
    '--light': theme.light.actor300
  },

  '&::selection': {
    backgroundColor: 'transparent'
  },

  variants: {
    emphasis: {
      outline: {
        '--light': theme.light.midStage,
        '--border-light': theme.light.actor500,

        '&:hover, &:focus': {
          '--light': theme.light.frontStage,
          '--border-light': theme.light.actor600
        },

        '&:active': {
          '--light': theme.light.actor100,
          '--border-light': theme.light.actor700
        }
      },
      fill: {
        '--light': theme.light.actor500,

        '&:hover, &:focus': {
          '--light': theme.light.actor600
        },

        '&:active': {
          '--light': theme.light.actor700
        }
      },
      ghost: {}
    }
  }
})
