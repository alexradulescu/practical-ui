import { ComponentProps } from 'react'
import { styled, theme } from 'src/stitches.config'

import { Input } from '../input'

export const Checkbox = (props: ComponentProps<typeof StyledCheckbox>) => (
  <StyledCheckbox {...props} type="checkbox" />
)

const StyledCheckbox = styled(Input, {
  width: 20,
  height: 20,
  padding: 0,
  position: 'relative',

  '&::after': {
    content: '',
    position: 'absolute',
    width: 16,
    height: 10,
    display: 'block',
    borderColor: 'transparent',
    borderStyle: 'solid',
    borderWidth: '0px 0px 3px 3px',
    transform: 'rotate(-45deg)',
    top: 3,
    left: 2
  },

  '&:hover::after, &:focus::after': {
    '--light': theme.light.actor700,
    '--saturation': theme.saturation.grey,
    '--hue': theme.hue.blue,

    borderColor: 'hsl(var(--hue) var(--saturation) var(--light))'
  },

  '&:checked::after': {
    '--light': theme.light.actor800,
    '--saturation': theme.saturation.active,
    '--hue': theme.hue.blue,

    borderColor: 'hsl(var(--hue) var(--saturation) var(--light))'
  }
})
