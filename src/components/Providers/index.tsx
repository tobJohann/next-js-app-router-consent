'use client'

import { ReactNode } from 'react'
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from '@/lib/theme'
import ConsentProvider from '@/components/Consent/context/ConsentProvider'

const Providers :React.FC<{children:ReactNode}>= ({children}) => {

  return(
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <ConsentProvider>
        {children}
      </ConsentProvider>
    </ThemeProvider>
  )
}
export default Providers
