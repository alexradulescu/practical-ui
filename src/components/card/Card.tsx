import { styled, theme } from 'stitches.config'

export const Card = styled('div', {
  '--light': theme.light.midStage,
  '--saturation': theme.saturation.grey,
  backgroundColor: 'hsl(var(--hue) var(--saturation) var(--light))',

  minWidth: 320,
  margin: 4,
  borderRadius: 8,
  display: 'inline-block',
  overflow: 'hidden'
})

export const CardHeader = styled('div', {
  '--light': theme.light.frontStage,
  '--saturation': theme.saturation.grey,
  backgroundColor: 'hsl(var(--hue) var(--saturation) var(--light))',

  width: '100%',
  padding: '16px 24px 16px 24px'
})

export const CardBody = styled('div', {
  padding: 24
})

export const CardFooter = styled('div', {
  '--light': theme.light.frontStage,
  '--saturation': theme.saturation.grey,
  backgroundColor: 'hsl(var(--hue) var(--saturation) var(--light))',

  width: '100%',
  padding: '16px 24px 16px 24px'
})
