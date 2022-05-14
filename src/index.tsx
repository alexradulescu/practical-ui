import React from 'react'
import ReactDOM from 'react-dom/client'

import { Root } from 'src/Root'

const root = ReactDOM.createRoot(document.querySelector('#root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
)
