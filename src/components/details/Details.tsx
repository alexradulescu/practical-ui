import { styled, theme } from 'stitches.config'

export const Details = styled('details', {
  padding: '12px 12px 0',
  borderRadius: 6,
  margin: '12px 0',

  '--light': theme.light.frontStage,
  '--saturation': theme.light.none,
  '--hue': 0,
  backgroundColor: 'hsl(var(--hue) var(--saturation) var(--light))',

  '&[open]': {
    padding: 12
  },

  '& > :last-child': {
    marginBottom: 0
  },

  '& > :not(summary)': {
    marginTop: 0
  },

  '&:hover, &:focus': {
    '--light': theme.light.actor100
  },

  '&:active': {
    '--light': theme.light.actor200
  }
})

export const Summary = styled('summary', {
  display: 'list-item',
  cursor: 'pointer',
  padding: 12,
  margin: '-12px -12px 0',
  fontWeight: 600,

  '&:focus': {
    border: 'none',
    outline: 'none'
  }
})
