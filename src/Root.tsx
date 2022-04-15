import { globalCss } from 'stitches.config'

const globalStyles = globalCss({
  '@media (prefers-color-scheme: dark)': {
    body: {
      backgroundColor: 'hsl(0 0% 5%)',
      color: 'hsl(0 0% 90%)'
    }
  }
})

export const Root = () => {
  globalStyles()

  return (
    <main>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </main>
  )
}
