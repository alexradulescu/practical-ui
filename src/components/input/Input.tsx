export const GhostInput = styled.input`
  all: unset;
  box-sizing: border-box;

  --light: 18%;
  --border-light: var(--light);
  --text-light: 100%;
  --placeholder-light: 70%;
  --saturation: 0%;
  --hue: 0;
  background-color: hsl(var(--hue) var(--saturation) var(--light));

  border: 1px solid;
  border-color: hsl(var(--hue) var(--saturation) var(--border-light));

  min-width: 90px;
  height: 36px;
  margin: 4px;
  border-radius: 6px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
  cursor: pointer;

  color: hsl(var(--hue) var(--saturation) var(--text-light));

  &:hover,
  &:focus {
    --light: 26%;
  }

  &:active {
    --light: 30%;
  }

  &::placeholder {
    color: hsl(var(--hue) var(--saturation) var(--placeholder-light));
  }

  &::selection {
    background-color: hsl(var(--hue) var(--saturation) 18%);
  }
`

export const OutlineInput = styled(GhostInput)`
  --light: 8%;
  --border-light: 30%;

  &:hover,
  &:focus {
    --light: 11%;
    --border-light: 40%;
  }

  &:active {
    --light: 14%;
    --border-light: 45%;
  }
`
