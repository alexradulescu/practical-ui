export const GhostButton = styled.button`
  all: unset;

  box-sizing: border-box;
  --light: 14%;
  --border-light: var(--light);
  --saturation: ${theme.saturation.active};
  background-color: hsl(var(--hue) var(--saturation) var(--light));

  border: 1px solid;
  border-color: hsl(var(--hue) var(--saturation) var(--border-light));

  min-width: 36px;
  min-height: 36px;
  margin: 4px;
  border-radius: 6px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
  cursor: pointer;

  &:hover,
  &:focus {
    --light: 18%;
  }

  &:active {
    --light: 22%;
  }

  &::selection {
    background-color: transparent;
  }
`

export const OutlineButton = styled(GhostButton)`
  --light: 8%;
  --border-light: 30%;

  &:hover,
  &:focus {
    --light: 11%;
    --border-light: 35%;
  }

  &:active {
    --light: 14%;
    --border-light: 40%;
  }
`

export const FillButton = styled(GhostButton)`
  --light: 30%;

  &:hover,
  &:focus {
    --light: 35%;
  }

  &:active {
    --light: 40%;
  }
`
