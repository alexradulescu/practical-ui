import { CSSProperties, ComponentProps } from 'react'

import { styled } from 'src/stitches.config'
import {
  paddingVariants,
  paddingBlockVariants,
  paddingInlineVariants,
  gapVariants
} from 'src/utils'

interface StackProps extends ComponentProps<typeof Div> {
  justifyContent?: CSSProperties['justifyContent']
  justifyItems?: CSSProperties['justifyItems']
  alignContent?: CSSProperties['alignContent']
  alignItems?: CSSProperties['alignItems']
  flexDirection?: CSSProperties['flexDirection']
  flex?: CSSProperties['flex']
}

export const Stack = ({
  justifyContent,
  justifyItems,
  alignContent,
  alignItems,
  flexDirection,
  flex,
  css,
  ...otherProps
}: StackProps) => {
  const computedCss = {
    ...css,
    justifyContent,
    justifyItems,
    alignContent,
    alignItems,
    flexDirection,
    flex
  }

  return <Div {...otherProps} css={computedCss} />
}

export const Div = styled('div', {
  display: 'flex',

  variants: {
    padding: paddingVariants,
    paddingBlock: paddingBlockVariants,
    paddingInline: paddingInlineVariants,
    gap: gapVariants
  }
})

export const HStack = (props: StackProps) => (
  <Stack {...props} flexDirection="row" />
)
export const VStack = (props: StackProps) => (
  <Stack {...props} flexDirection="column" />
)
