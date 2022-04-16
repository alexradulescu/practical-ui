import { globalCss } from 'stitches.config'

import { DemoList } from './demo'

const globalStyles = globalCss({
  '@media (prefers-color-scheme: dark)': {
    body: {
      backgroundColor: 'hsl(0 0% 5%)',
      color: 'hsl(0 0% 90%)'
    },
    'input[type="date"]::-webkit-calendar-picker-indicator': {
      color: 'white'
    }
  }
})

export const Root = () => {
  globalStyles()

  return (
    <main>
      <DemoList />
    </main>
  )
}
