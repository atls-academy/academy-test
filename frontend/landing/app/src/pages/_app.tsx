import React from 'react'
import { ThemeProvider } from '@ui/theme'

const App = ({ Component, props }) => (
  <ThemeProvider>
    <Component />
  </ThemeProvider>
)

export default App
