import { styled, theme } from 'stitches.config'

export const Select = styled('select', {
  all: 'unset',
  '-webkit-appearance': 'none',

  cursor: 'pointer',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',

  minWidth: 90,
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
    '--light': theme.light.actor500
  },

  '&::placeholder': {
    color: 'hsl(var(--hue) var(--saturation) var(--placeholder-light))'
  },

  '&::selection': {
    backgroundColor: `hsl(var(--hue) var(--saturation) ${theme.light.actor200})`
  },

  '&:not([multiple])': {
    minHeight: 36,
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='white' width='12' height='12'%3E%3Cpath d='M10.193 3.97a.75.75 0 0 1 1.062 1.062L6.53 9.756a.75.75 0 0 1-1.06 0L.745 5.032A.75.75 0 0 1 1.807 3.97L6 8.163l4.193-4.193z' fill-rule='evenodd'%3E%3C/path%3E%3C/svg%3E")`,
    backgroundPosition: 'calc(100% - 16px) center',
    backgroundRepeat: 'no-repeat'
  },

  '&[multiple]': {
    padding: '8px 16px'
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
