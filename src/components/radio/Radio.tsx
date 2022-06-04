import { ComponentProps } from 'react'

import { styled, theme } from 'src/stitches.config'

import { Input } from '../input'

export const Radio = (props: ComponentProps<typeof StyledRadio>) => (
  <StyledRadio {...props} type="radio" />
)

const StyledRadio = styled(Input, {
  width: 20,
  height: 20,
  padding: 0,
  borderRadius: 9999,
  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',

  '&::after': {
    content: '',
    position: 'absolute',
    width: 12,
    height: 12,
    borderRadius: 9999,
    display: 'block',

    backgroundColor: 'transparent'
  },

  '&:hover::after, &:focus::after': {
    '--light': theme.light.actor700,
    '--saturation': theme.saturation.grey,
    '--hue': theme.hue.blue,

    backgroundColor: 'hsl(var(--hue) var(--saturation) var(--light))'
  },

  '&:checked::after': {
    '--light': theme.light.actor800,
    '--saturation': theme.saturation.active,
    '--hue': theme.hue.blue,

    backgroundColor: 'hsl(var(--hue) var(--saturation) var(--light))'
  }
})
