import { createMuiTheme } from '@material-ui/core/styles'

const Themes = {
  light: createMuiTheme({
    palette: {
      type: 'light',
    },
  }),
  dark: createMuiTheme({
    palette: {
      type: 'dark',
    },
  })
}

export default Themes