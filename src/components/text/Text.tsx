export const LowContrastText = styled.p`
  --light: 60%;
  --saturation: ${theme.saturation.active};
  color: hsl(var(--hue) var(--saturation) var(--light));

  margin: 0;

  &::selection {
    background-color: hsl(var(--hue) var(--saturation) 18%);
  }
`

export const HighContrastText = styled(LowContrastText)`
  --light: 100%;
  --saturation: ${theme.saturation.active};
`
