import { styled, theme } from 'stitches.config'

export const Alert = styled('div', {
  display: 'block',
  width: '100%',
  margin: '4px 0',
  borderRadius: 8,
  padding: '16px 24px',

  '--light': theme.light.midStage,
  '--border-light': theme.light.actor500,
  '--saturation': theme.saturation.active,
  backgroundColor: 'hsl(var(--hue) var(--saturation) var(--light))',
  border: '1px solid',
  borderColor: 'hsl(var(--hue) var(--saturation) var(--border-light))'
})
