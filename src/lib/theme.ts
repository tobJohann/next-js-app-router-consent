import { createTheme } from '@mui/material'

const theme = createTheme( {
    components: {
      MuiButton: {
        defaultProps: {
          variant: 'contained',
          size: 'small',
        },
      },
    },
  },
)
export default theme
