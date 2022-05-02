import { styled, theme } from 'stitches.config'

export const Card = styled('div', {
  display: 'inline-block',

  maxWidth: '100%',
  margin: 4,
  borderRadius: 8,
  overflow: 'hidden',

  '--hue': theme.hue.blue,
  '--light': theme.light.midStage,
  '--saturation': theme.saturation.grey,
  backgroundColor: 'hsl(var(--hue) var(--saturation) var(--light))'
})

export const CardHeader = styled('div', {
  width: '100%',
  padding: '16px 24px 16px 24px',

  '--hue': theme.hue.blue,
  '--light': theme.light.frontStage,
  '--saturation': theme.saturation.grey,
  backgroundColor: 'hsl(var(--hue) var(--saturation) var(--light))'
})

export const CardBody = styled('div', {
  padding: 24
})

export const CardFooter = styled('div', {
  width: '100%',
  padding: '16px 24px 16px 24px',

  '--hue': theme.hue.blue,
  '--light': theme.light.frontStage,
  '--saturation': theme.saturation.grey,
  backgroundColor: 'hsl(var(--hue) var(--saturation) var(--light))'
})
