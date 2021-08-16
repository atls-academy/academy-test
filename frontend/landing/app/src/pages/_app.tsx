import React             from 'react'
import { ThemeProvider } from '@ui/theme'

const App = ({ Component, props }) => (
  <ThemeProvider>
    <Component {...props} />
  </ThemeProvider>
)

export default App
